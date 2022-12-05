import classNames from 'classnames';
import { VsfCounterSizes } from '../VsfCounter/types';
import { VsfListItemMenuProps, VsfListItemMenuSizes } from './types';
import VsfCounter from '../VsfCounter/VsfCounter';

export default function VsfListItemMenu({
  label,
  counter,
  secondaryText,
  size = VsfListItemMenuSizes.base,
  disabled,
  selected,
  className,
  slotPreffix,
  slotSuffix,
  onClick,
}: VsfListItemMenuProps): JSX.Element {
  return (
    <button
      className={classNames(
        'vsf-list-item-menu peer',
        `vsf-list-item-menu--size-${size}`,
        { 'vsf-list-item-menu--selected': selected, 'vsf-list-item-menu--disabled': disabled },
        className,
      )}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {slotPreffix && <div className="vsf-list-item-menu__icon vsf-list-item-menu__icon--preffix">{slotPreffix}</div>}
      <div className="vsf-list-item-menu__content">
        <div className="vsf-list-item-menu__title">
          {label ? <span className="vsf-list-item-menu__label">{label}</span> : null}
          {counter ? (
            <VsfCounter size={VsfCounterSizes.xl} className="vsf-list-item-menu__counter">
              {counter}
            </VsfCounter>
          ) : null}
        </div>
        {secondaryText ? <span className="vsf-list-item-menu__secondary-text">{secondaryText}</span> : null}
      </div>
      {slotSuffix && <div className="vsf-list-item-menu__icon vsf-list-item-menu__icon--preffix">{slotSuffix}</div>}
    </button>
  );
}
