export enum VsfButtonSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export enum VsfButtonColors {
  primary = 'primary',
  secondary = 'secondary',
  gray = 'gray',
  positive = 'positive',
  negative = 'negative',
  warning = 'warning',
}

export enum VsfButtonVariants {
  contained = 'contained',
  outlined = 'outlined',
  plain = 'plain',
}

export type VsfButtonSizesKeys = keyof typeof VsfButtonSizes;
export type VsfButtonVariantsKeys = keyof typeof VsfButtonVariants;
export type VsfButtonColorsKeys = keyof typeof VsfButtonColors;

