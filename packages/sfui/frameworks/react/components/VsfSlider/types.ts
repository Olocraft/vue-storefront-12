import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfSliderScrollbar {
  always = 'always',
  auto = 'auto',
}
export enum VsfSliderNavigation {
  block = 'block',
  floating = 'floating',
}

export type VsfSliderProps = PropsWithChildren &
  PropsWithStyle & {
    scrollbar?: VsfSliderScrollbar;
    navigation?: VsfSliderNavigation;
    showMobileNavigation?: boolean;
    scrollSnap?: boolean;
    draggable?: {
      sensitivity: number;
    };
  };
