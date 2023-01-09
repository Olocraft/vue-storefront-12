import { VsfLoaderSizes } from '@storefront-ui/shared';

export enum VsfLoaderLinearSize {
  'minimal' = 'minimal',
}
export { VsfLoaderSizes };
// TODO: handle extending/merging 2 enums
export type VsfLoaderLinearProps = {
  size?: VsfLoaderLinearSize | VsfLoaderSizes;
  screenReaderText?: string;
};
