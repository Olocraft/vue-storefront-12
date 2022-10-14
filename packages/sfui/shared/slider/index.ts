/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable @typescript-eslint/no-unused-expressions */

/**
 * Returns the last element in the array where predicate is true, and undefined
 * otherwise.
 * @param array The source array to search in
 * @param predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLast immediately returns that element. Otherwise, findLastIndex returns undefined.
 */
function findLast<T>(array: Array<T>, predicate: (value: T, index: number, obj: T[]) => boolean): T | undefined {
  let l = array.length;
  // eslint-disable-next-line no-plusplus
  while (l--) {
    if (predicate(array[l], l, array)) return array[l];
  }
  return undefined;
}

interface Config {
  containerSelector?: string;
  visibleItemClass?: string;
  itemSelector?: string;
  firstItemVisibleClass?: string;
  lastItemVisibleClass?: string;
  intersectionThreshold?: IntersectionObserverInit['threshold'];
  reduceMotion?: boolean;
}

const defaultConfig: Required<Config> = {
  containerSelector: '.slider-container',
  visibleItemClass: 'slide-visible',
  itemSelector: '.slider-item',
  firstItemVisibleClass: 'slider-item-first-visible',
  lastItemVisibleClass: 'slider-item-last-visible',
  intersectionThreshold: 0.9,
  reduceMotion: false, // https://web.dev/prefers-reduced-motion/
};

type Nullable<T> = T | null | undefined;

export default class Slider {
  config: Required<Config>;
  root: HTMLElement;
  scrollContainer: Nullable<Element>;
  carouselItems: Element[];
  prevButton: Nullable<Element>;
  nextButton: Nullable<Element>;
  intersectionObserver: IntersectionObserver;
  mutationObserver: MutationObserver;

  constructor(root: HTMLElement, config?: Config) {
    if (!(root instanceof HTMLElement)) throw new Error('Root Element have to HTMLElement');
    this.config = { ...defaultConfig, ...config };
    this.root = root;
    this.carouselItems = [];
  }

  initialize() {
    const scrollContainer = this.root.querySelector(this.config.containerSelector);
    if (!scrollContainer) {
      throw new Error(`Scroll Container Element can not be found: ${this.config.containerSelector}`);
    }
    this.setVisibleSlides(scrollContainer);
    this.setCarouselVisibility(scrollContainer);
    this.onContainerUpdate(scrollContainer);
  }
  /* 
    Clears event listeners and disconnect observsers
  */
  destroy() {
    this.unobserveCarouselItems();
    this.intersectionObserver?.disconnect();
    this.mutationObserver?.disconnect();
  }

  unobserveCarouselItems() {
    this.carouselItems.forEach((t) => {
      this.intersectionObserver.unobserve(t);
    });
  }

  observeCarouselItems() {
    this.carouselItems.forEach((t) => {
      this.intersectionObserver.observe(t);
    });
  }

  /* 
    Resets observable slider items
  */
  setCarouselVisibility(scrollContainer: Element) {
    this.unobserveCarouselItems();
    this.carouselItems = Array.from(scrollContainer.children || []);
    this.observeCarouselItems();
  }
  /* 
    Listen for scroll container changes
    - child elements update
  */
  onContainerUpdate(scrollContainer: Element) {
    this.mutationObserver = new MutationObserver((items) => {
      items.filter(({ type }) => type === 'childList').length && this.setCarouselVisibility(scrollContainer);
    });
    this.mutationObserver.observe(scrollContainer, {
      childList: true,
      subtree: true,
    });
  }
  /* 
    Scroll to next `page` elements, 
    - scroll container is moved to position, where item after last visible item is next first element visible in scroll viewport
    - behaviour - 'auto' when reduceMotion option is set to true, 'smooth' otherwise
  */
  next() {
    const nextAfterLastVisible = findLast(this.carouselItems, (el) =>
      el.classList.contains(this.config.visibleItemClass),
    )?.nextElementSibling;
    this.slideToElement(nextAfterLastVisible, {
      inline: 'start',
      block: 'nearest',
      behavior: this.config.reduceMotion ? 'auto' : 'smooth',
    });
  }
  /* 
    Scroll to previous `page` elements, 
    - scroll container is moved to position, where item before first visible item is last element visible in scroll viewport
    - behaviour - 'auto' when reduceMotion option is set to true, 'smooth' otherwise
  */
  prev() {
    const previousBeforeFirstVisible = this.carouselItems.find((el) =>
      el.classList.contains(this.config.visibleItemClass),
    )?.previousElementSibling;
    this.slideToElement(previousBeforeFirstVisible, {
      inline: 'end',
      block: 'nearest',
      behavior: this.config.reduceMotion ? 'auto' : 'smooth',
    });
  }
  /* 
    Scrolling method - Element.scrollIntoView(options)
  */
  // eslint-disable-next-line class-methods-use-this
  slideToElement(element: Nullable<Element>, options: ScrollIntoViewOptions) {
    element?.scrollIntoView(options);
  }

  /* 
    Initialize IntersectionObserver for slider items 
    - toggle visibleClass in visible slider item
    - adds firstVisibleClass to the root element when first visible element is visible in viewport (scrolled to the left)
    - adds lastVisibleClass to the root element when last visible element is visible in viewport (scrolled to the right)
  */
  setVisibleSlides(scrollContainer: Element) {
    this.intersectionObserver = new IntersectionObserver(
      (slides) => {
        slides.forEach((slide) =>
          slide.isIntersecting
            ? slide.target.classList.add(this.config.visibleItemClass)
            : slide.target.classList.remove(this.config.visibleItemClass),
        );
        // set class to the root element when first/last element is visible
        scrollContainer.firstElementChild?.classList.contains(this.config.visibleItemClass)
          ? this.root?.classList.add(this.config.firstItemVisibleClass)
          : this.root?.classList.remove(this.config.firstItemVisibleClass);
        scrollContainer.lastElementChild?.classList.contains(this.config.visibleItemClass)
          ? this.root.classList.add(this.config.lastItemVisibleClass)
          : this.root.classList.remove(this.config.lastItemVisibleClass);
      },
      {
        root: scrollContainer,
        threshold: this.config.intersectionThreshold,
      },
    );
  }
}
