import { useStore, Show } from '@builder.io/mitosis';
import { classStringFromArray } from '../../functions/domUtils';

export const VsfChipsFilterVariants = Object.freeze({
  sm: 'sm',
  base: 'base',
  lg: 'lg',
});
type VsfChipsFilterVariantsKeys = keyof typeof VsfChipsFilterVariants;

export interface VsfChipsFilterProps {
  size?: VsfChipsFilterVariantsKeys;
  type?: 'checkbox' | 'radio';
  slotThumb?: any;
  label?: string;
  disabled?: boolean;
  noThumb?: boolean;
  onChange?: (...args: any[]) => void;
  value?: any;
  thumbColor?: string;
}

export default function VsfChipsFilter(props: VsfChipsFilterProps) {
  const state = useStore({
    get useTypeProp() {
      return props.type === 'radio' ? 'radio' : 'checkbox';
    },
    get sizeClass() {
      switch (props.size) {
        case VsfChipsFilterVariants.sm:
          return 'text-sm h-7 pl-1 pr-1.5';
        case VsfChipsFilterVariants.lg:
          return 'text-base h-10 pl-2 pr-2.5 gap-0.5';
        default:
          return 'text-sm h-8 pl-1 pr-1.5';
      }
    },
    get wrapperClass(): string {
      return classStringFromArray([
        'chips-filter__wrapper',
        'relative inline-flex items-center ring-1 ring-gray-200 ring-inset cursor-pointer rounded-full ',
        'peer-checked:ring-2 peer-checked:ring-primary-500 peer-hover:ring-primary-500 peer-active:ring-primary-500',
        'peer-hover:bg-primary-100 peer-active:bg-primary-200',
        'peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100/50 peer-disabled:ring-1 peer-disabled:ring-gray-200/50',
        'outline-offset-2 outline-violet-400 peer-focus:outline',
        state.sizeClass,
      ]);
    },
    get thumbClass(): string {
      return classStringFromArray([
        'chips-filter__thumb',
        'rounded-full flex opacity-50 -mr-0.5',
        props.size === VsfChipsFilterVariants.sm ? 'h-5 w-5' : 'h-6 w-6',
      ]);
    },
    get vueProxyValue() {
      return {
        get: function () {
          return props.modelValue;
        },
        set: function (value) {
          state.$emit('update:modelValue', value);
        },
      };
    },
    onChangeHandler(event: InputEvent) {
      props.onChange && props.onChange(event);
    },
  });

  return (
    <>
      <label class='chips-filter inline-flex rounded-full relative'>
        <input
          v-model="vueProxyValue"
          type={state.useTypeProp}
          class="peer appearance-none outline-none absolute"
          disabled={props.disabled}
          onChange={(e) => state.onChangeHandler(e)}
          value={props.value}
        />
        <div class={state.wrapperClass}>
          <Show when={!props.noThumb}>
            <div class={state.thumbClass}>
              <Show
                when={props.slotThumb}
                else={
                  <div
                    class="w-full rounded-full overflow-hidden m-0.5 bg-black"
                    style={{ background: props.thumbColor }}
                  ></div>
                }
              >
                {props.slotThumb}
              </Show>
            </div>
          </Show>
          <Show when={props.label}>
            <span class="chips-filter__label font-normal mr-2 ml-1.5 relative left-0.5 text-gray-900">
              {props.label}
            </span>
          </Show>
        </div>
      </label>
    </>
  );
}

VsfChipsFilter.propTypes = {};
