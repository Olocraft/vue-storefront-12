import { VsfLoaderSizes } from '@storefront-ui/shared/types';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfLoaderLinearSize {
  '2xs' = '2xs',
}
export { VsfLoaderSizes };
export type VsfLoaderLinearProps = PropsWithStyle & {
  size?: VsfLoaderSizes | VsfLoaderLinearSize;
  screenReaderText?: string;
};
