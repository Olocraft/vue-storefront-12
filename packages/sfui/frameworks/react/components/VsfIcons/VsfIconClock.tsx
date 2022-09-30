
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconClock({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'clock'
}: VsfIconProps) {
    return <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24"><><path d='M11 7.75a.75.75 0 0 1 1.5 0v4.5l3.875 2.299a.718.718 0 1 1-.737 1.234L11 13V7.75Z'/><path fillRule='evenodd' clipRule='evenodd' d='M2 12C2 6.48 6.47 2 11.99 2 17.52 2 22 6.48 22 12s-4.48 10-10.01 10C6.47 22 2 17.52 2 12Zm2 0c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8Z'/></></VsfIconBase>;
}