
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconChevronLeft({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'chevron-left'
}: VsfIconProps) {
    return <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24"><><path d='M14.707 8.115a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.587a.997.997 0 0 0 1.412-1.41L10.83 12l3.877-3.885Z'/><path d='M14.707 8.115a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.587a.997.997 0 0 0 1.412-1.41L10.83 12l3.877-3.885Z'/></></VsfIconBase>;
}