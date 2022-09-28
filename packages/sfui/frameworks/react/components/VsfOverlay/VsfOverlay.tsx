import classNames from 'classnames';
import type { VsfOverlayProps } from './types';

export default function VsfOverlay({
  onClick,
  visible,
  absolute,
  className,
  children,
  ...attributes
}: VsfOverlayProps) {
  const overlayClasses = classNames('vsf-overlay', absolute && 'vsf-overlay--absolute', className);
  return (
    <>
      {visible && (
        <div onClick={onClick} className={overlayClasses} {...attributes}>
          {children}
        </div>
      )}
    </>
  );
}
