import type { PropsWithChildren } from 'react';

export enum VsfQuantitySelectorSizes {
  base = 'base',
  lg = 'lg',
}

export type VsfQuantitySelectorProps = PropsWithChildren<{
  inputId?: string;
  inputAriaLabel?: string;
  value: number;
  minValue?: number;
  maxValue?: number;
  disabled?: boolean;
  step?: number;
  size?: VsfQuantitySelectorSizes;
  onChange?: (value: number) => void;
  block?: boolean;
  className?: string;
}>;
