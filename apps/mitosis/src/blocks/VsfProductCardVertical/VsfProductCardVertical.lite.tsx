import { useStore, Show } from '@builder.io/mitosis';
import VsfRating from '../VsfRating/VsfRating.lite';
import VsfTag from '../VsfTag/VsfTag.lite';
import { classStringFromArray } from '../../functions/domUtils';
import VsfIconHot from '../VsfIcons/VsfIconHot.lite';
import VsfIconFavoritesOutline from '../VsfIcons/VsfIconFavoritesOutline.lite';
import VsfIconBasket from '../VsfIcons/VsfIconBasket.lite';

export const VsfProductCardVerticalSizes = Object.freeze({
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
});

type VsfProductCardVerticalSizesKeys = keyof typeof VsfProductCardVerticalSizes;

export interface VsfProductCardVerticalProps {
  image: string;
  alt: string;
  link: string;
  ratingValue: number;
  maxRatingValue: number;
  reviews: number;
  label: string;
  price: string;
  oldPrice: string;
  badge: string;
  description: string;
  outOfStock: boolean;
  inCart: number;
  size: VsfProductCardVerticalSizesKeys;
  withButton: boolean;
  addToCartLabel: string;
  seeSimilarLabel: string;
  handleAddToCart: (e?: Event) => void;
  handleAddToWishlist: (e?: Event) => void;
  handleSeeSimilar: (e?: Event) => void;
}

const DEFAULT_VALUES = {
  image: '',
  alt: '',
  link: '/',
  ratingValue: 0,
  maxRatingValue: 0,
  reviews: 0,
  label: '',
  price: '',
  oldPrice: '',
  badge: '',
  description: '',
  outOfStock: false,
  inCart: 0,
  size: VsfProductCardVerticalSizes.base,
  withButton: false,
  addToCartLabel: 'Add',
  seeSimilarLabel: 'See similar'
};

export default function VsfProductCardVertical(props: VsfProductCardVerticalProps) {
  const state = useStore({
    get useImageProp() {
      return props.image || DEFAULT_VALUES.image
    },
    get useAltProp() {
      return props.alt || DEFAULT_VALUES.alt
    },
    get useLinkProp() {
      return props.link || DEFAULT_VALUES.link
    },
    get useRatingValueProp() {
      return props.ratingValue || DEFAULT_VALUES.ratingValue
    },
    get useMaxRatingValueProp() {
      return props.maxRatingValue || DEFAULT_VALUES.maxRatingValue
    },
    get useReviewsProp() {
      return props.reviews || DEFAULT_VALUES.reviews
    },
    get useLabelProp() {
      return props.label || DEFAULT_VALUES.label
    },
    get usePriceProp() {
      return props.price || DEFAULT_VALUES.price
    },
    get useOldPriceProp() {
      return props.oldPrice || DEFAULT_VALUES.oldPrice
    },
    get useBadgeProp() {
      return props.badge || DEFAULT_VALUES.badge
    },
    get useDescriptionProp() {
      return props.description || DEFAULT_VALUES.description
    },
    get useOutOfStockProp() {
      return props.outOfStock || DEFAULT_VALUES.outOfStock
    },
    get useInCartProp() {
      return props.inCart || DEFAULT_VALUES.inCart
    },
    get useSizeProp() {
      return props.size || DEFAULT_VALUES.size
    },
    get useWithButtonProp() {
      return props.withButton || DEFAULT_VALUES.withButton
    },
    get useAddToCartLabelProp() {
      return props.addToCartLabel || DEFAULT_VALUES.addToCartLabel
    },
    get useWishlistLabelProp() {
      return props.seeSimilarLabel || DEFAULT_VALUES.seeSimilarLabel
    },
    get imageDimensions() {
      switch (state.useSizeProp) {
        case VsfProductCardVerticalSizes.xs:
          return 148;
        case VsfProductCardVerticalSizes.sm:
          return 180;
        case VsfProductCardVerticalSizes.lg:
          return 280;
        default:
          return 230;
      }
    },
    get detailsPadding():string {
      return classStringFromArray([
        state.useSizeProp === VsfProductCardVerticalSizes.xs || state.useSizeProp === VsfProductCardVerticalSizes.sm ? 'p-2' : 'p-4' ,
      ])
    },
    get productCardWidth() {
      switch (state.useSizeProp) {
        case VsfProductCardVerticalSizes.xs:
          return `w-[148px]`;
        case VsfProductCardVerticalSizes.sm:
          return `w-[180px]`;
        case VsfProductCardVerticalSizes.lg:
          return `w-[280px]`;
        default:
          return `w-[230px]`;
      }
    },
    get labelClasses():string {
      return classStringFromArray([
        'block font-normal font-body',
        state.useSizeProp === VsfProductCardVerticalSizes.lg ? 'text-base' : 'text-sm',
        state.useWithButtonProp && 'p-0',
        !state.useWithButtonProp && state.useSizeProp === VsfProductCardVerticalSizes.lg && 'px-4 pt-4',
        !state.useWithButtonProp && state.useSizeProp === VsfProductCardVerticalSizes.base && 'px-4 pt-4',
        !state.useWithButtonProp && state.useSizeProp === VsfProductCardVerticalSizes.sm && 'px-2 pt-2',
        !state.useWithButtonProp && state.useSizeProp === VsfProductCardVerticalSizes.xs && 'px-2 pt-2'
      ]);
    },
    get priceClasses():string {
      return classStringFromArray([
        'font-bold font-headings',
        state.useSizeProp === VsfProductCardVerticalSizes.xs && 'text-xs leading-4',
        state.useSizeProp ===  VsfProductCardVerticalSizes.sm && 'text-xs leading-4',
        state.useSizeProp === VsfProductCardVerticalSizes.base && 'text-lg leading-6',
        state.useSizeProp === VsfProductCardVerticalSizes.lg && 'text-lg leading-6',
        state.useOldPriceProp ? 'text-secondary-700' : 'text-gray-900'
    ]);
    },
    addToCart(event: Event) {
      /* IF-vue */
      state.$emit('close', event);
      /* ENDIF-vue */
      props.handleAddToCart && props.handleAddToCart(event);
    },
    addToWishlist(event: Event) {
      /* IF-vue */
      state.$emit('close', event);
      /* ENDIF-vue */
      props.handleAddToWishlist && props.handleAddToWishlist(event);
    },
    seeSimilar(event: Event) {
      /* IF-vue */
      state.$emit('close', event);
      /* ENDIF-vue */
      props.handleSeeSimilar && props.handleSeeSimilar(event);
    },
  });

    return (
    <>
      <div
        className={`${state.productCardWidth} block overflow-hidden border border-gray-200 rounded-md hover:shadow-lg`}
      >
        <div className='relative'>
          <a href={state.useLinkProp}>
            <img
              className={`${state.useOutOfStockProp ? 'opacity-50' : 'opacity-100' } w-full h-auto rounded-md`}
              src={state.useImageProp}
              alt={state.useAltProp}
              loading="lazy"
              width={state.imageDimensions}
              height={state.imageDimensions}
            />
          </a>
          <div className={`${state.useSizeProp === 'lg' || state.useSizeProp === 'base' ? 'top-0' : '-top-1'} absolute left-0`}>
            <VsfTag
              badge={true}
              size={state.useSizeProp === 'lg' || state.useSizeProp === 'base' ? 'base' : 'sm'}
              variant='info'
            >
              <VsfIconHot
                size={state.useSizeProp === 'lg' || state.useSizeProp === 'base' ? 'base' : 'xs'}
              />
              {state.useBadgeProp}
            </VsfTag>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 flex items-center m-2"
          >
            <Show when={state.useOutOfStockProp || state.useInCartProp > 0}>
              <VsfTag
                badge={false}
                size="sm"
                variant={state.useOutOfStockProp ? 'error' : 'positive'}
              >
                {
                  (state.useOutOfStockProp)
                    ? <span> Out of stock </span> 
                    : <span> {state.useInCartProp} in cart </span> 
                }
              </VsfTag>
            </Show>
            <button
              class="right-0 ml-auto bg-white border border-gray-200 rounded-full px-1 pb-1 pt-0 group hover:bg-primary-100 hover:border-primary-300 active:border-primary-400 active:bg-primary-200"
              onClick={(event) => state.addToWishlist(event)}
            >
              <VsfIconFavoritesOutline 
                size='sm'
                className="fill-primary-500 text-primary-500 group-hover:fill-primary-600 group-active:fill-primary-700"
              />
            </button>
          </div>
        </div>
        <div
          className={`${state.useWithButtonProp ? state.detailsPadding : 'mb-2'} border-gray-200 border-t-[1px] flex flex-col`}
        >
          <a
            href={state.useLinkProp}
            className={`${state.labelClasses}`}
          >
            {state.useLabelProp}
          </a>
          <Show when={!state.useWithButtonProp} else={
            <div className='order-2'>
              <VsfRating
                value={3}
                size="xs"
                reviews={-1}
                type="base"
              />
            </div>
          }>
            <a 
              href={state.useLinkProp} 
              className={`${state.useSizeProp === VsfProductCardVerticalSizes.sm || state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'px-2' : 'px-4'} block`}
            >
              <VsfRating
                value={3}
                size="xs"
                reviews={-1}
                type="base"
              />
            </a>
          </Show>
          <Show 
            when={state.useDescriptionProp && state.useSizeProp === 'base' || state.useSizeProp === 'lg'} 
          >
            <Show when={!state.useWithButtonProp} else={
              <span className='order-3 mt-2 text-sm font-normal leading-5 text-gray-700 font-body'>
                {state.useDescriptionProp}
              </span>
            }>
              <a 
                href={state.useLinkProp}
                className={`${state.useSizeProp === VsfProductCardVerticalSizes.sm || state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'px-2' : 'px-4'} block mt-2 text-sm font-normal leading-5 text-gray-700 font-body`}
              >
                {state.useDescriptionProp}
              </a>
              </Show>
          </Show>
          <Show when={!state.useWithButtonProp} else={
            <div
              className={`flex items-baseline order-1`}
            >
              <span
                className={state.priceClasses}
              >{state.usePriceProp}</span>
              <span
                className={`${state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'ml-1' : 'ml-2'} text-xs font-normal leading-4 text-gray-500 line-through`}
              >
                {state.useOldPriceProp}
              </span>
            </div>
          }>
            <a
              className={`${state.useSizeProp === VsfProductCardVerticalSizes.sm || state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'px-2' : 'px-4'} flex items-baseline`}
              href={state.useLinkProp}
            >
              <span
                className={`${state.priceClasses}`}
              >{state.usePriceProp}</span>
              <span
                className={`${state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'ml-1' : 'ml-2'} text-xs font-normal leading-4 text-gray-500 line-through`}
              >
                {state.useOldPriceProp}
              </span>
            </a>
          </Show>
        </div>
        <Show when={state.useWithButtonProp}>
          <Show when={!state.useOutOfStockProp} else={
            <button
              className='flex items-center mt-4 text-white bg-primary-600'
              onClick={(event) => state.seeSimilar(event)}
            >
              {state.useWishlistLabelProp}
            </button>
          }>
            <button
              className='flex items-center text-white bg-primary-600'
              onClick={(event) => state.addToCart(event)}
            >
              <VsfIconBasket 
                size='sm' 
              />
              <span class="ml-2">
                {state.useAddToCartLabelProp}
              </span>
            </button>
          </Show>
        </Show>
      </div>
    </>
  );
}
