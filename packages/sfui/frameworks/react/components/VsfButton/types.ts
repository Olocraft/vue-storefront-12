import type { ReactNode, ElementType, PropsWithChildren } from 'react';

export enum VsfButtonSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export enum VsfButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export type VsfButtonProps = PropsWithChildren<{
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  size?: VsfButtonSizes;
  variant?: VsfButtonVariants;
  rounded?: boolean;
  disabled?: boolean;
  tile?: boolean;
  icon?: boolean;
  tag?: ElementType;
  link?: string;
  block?: boolean;
  onClick?: (e: MouseEvent) => void;
  className?: string;
  [key: string]: unknown;
}>;
