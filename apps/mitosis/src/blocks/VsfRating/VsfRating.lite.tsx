import { Show, useStore, For } from '@builder.io/mitosis';
import VsfIconStar from '../VsfIcons/VsfIconStar.lite';
import VsfIconStarOutline from '../VsfIcons/VsfIconStarOutline.lite';
import VsfIconStarPartiallyFilled from '../VsfIcons/VsfIconStarPartiallyFilled.lite';

export const VsfRatingVariants = Object.freeze({
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
});

export const VsfRatingTypes = Object.freeze({
  base: 'base',
  withValue: 'withValue',
});

type VsfRatingVariantsKeys = keyof typeof VsfRatingVariants;
type VsfRatingTypesKeys = keyof typeof VsfRatingTypes;

export interface VsfRatingProps {
  value?: number;
  max?: number;
  reviews?: number;
  size?: VsfRatingVariantsKeys;
  type?: VsfRatingTypesKeys;
}

const DEFAULT_VALUES = {
  value: 0,
  max: 5,
  reviews: 0,
  size: VsfRatingVariants.base,
  type: VsfRatingTypes.base,
};

export default function VsfRating(props: VsfRatingProps) {
  const state = useStore({
    get useValueProp() {
      return Math.max(0, Math.min(Number(props.value) || DEFAULT_VALUES.value, state.useMaxProp));
    },
    get useMaxProp() {
      return Number(props.max) || DEFAULT_VALUES.max;
    },
    get useReviewsProp() {
      return Number(props.reviews) || DEFAULT_VALUES.reviews;
    },
    get useSizeProp() {
      return props.size || DEFAULT_VALUES.size;
    },
    get useTypeProp() {
      return props.type || DEFAULT_VALUES.type;
    },
    get isPartiallyFilled() {
      return state.useValueProp % 1 > 0.25 && state.useValueProp % 1 < 0.75;
    },
    get filled(): number {
      return Math.floor(state.useValueProp) + (state.useValueProp % 1 > 0.75);
    },
    get empty() {
      return state.useMaxProp - state.filled - Number(state.isPartiallyFilled);
    },
    get ratingValue() {
      return Math.min(state.useValueProp, state.useMaxProp);
    },
    get sizeClass() {
      return {
        xs: 'h-4 w-4',
        sm: 'h-5 w-5',
        base: 'h-6 w-6',
        lg: 'h-10 w-10',
        xl: 'h-12 w-12',
        '2xl': 'h-20 w-20',
      }[state.useSizeProp];
    },
    get textClass() {
      return {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-lg',
        '2xl': 'text-lg',
      }[state.useSizeProp];
    },
    get isBaseType() {
      return state.useTypeProp === VsfRatingTypes.base;
    },
  });

  return (
    <>
      <div
        class={`flex items-center h-6 font-normal pointer-events-none font-body ${state.textClass}`}
        role="img"
        aria-label={`Rating: ${state.useValueProp} out of ${state.useMaxProp} stars`}
      >
        <Show
          when={state.isBaseType}
          else={
            <>
              <VsfIconStar aria-hidden="true" class={`${state.sizeClass} text-warning-500`} />
              <span class="mx-1">{state.ratingValue}</span>
            </>
          }
        >
          <For each={[...Array(state.filled)]}>
            {(_, index) => (
              <VsfIconStar key={index} aria-hidden="true" class={`${state.sizeClass} text-warning-500`} />
            )}
          </For>
          <Show when={state.isPartiallyFilled}>
            <VsfIconStarPartiallyFilled aria-hidden="true" class={`${state.sizeClass} text-warning-500`} />
          </Show>
          <For each={[...Array(state.empty)]}>
            {(_, index) => (
              <VsfIconStarOutline key={index} aria-hidden="true" class={`${state.sizeClass} opacity-50 text-gray-500`} />
            )}
          </For>
        </Show>
        <Show when={state.useReviewsProp >= 0}>
          <span class={`text-gray-500 ` + (state.isBaseType ? 'ml-1' : '')}>({state.useReviewsProp})</span>
        </Show>
      </div>
    </>
  );
}
