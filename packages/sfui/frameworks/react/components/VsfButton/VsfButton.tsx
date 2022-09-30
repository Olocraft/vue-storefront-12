import { forwardRef } from 'react';
import classNames from 'classnames';
import type { VsfButtonProps } from './types';

const VsfButton = forwardRef<unknown, VsfButtonProps>(
  (
    {
      size = 'base',
      variant = 'primary',
      color = 'primary',
      rounded,
      disabled,
      tile,
      icon,
      block,
      tag: Tag = 'button',
      onClick,
      children,
      slotPrefix,
      slotSuffix,
      link,
      ...attributes
    },
    ref,
  ) => {
    let TagInternal = Tag;
    if (link && Tag === 'button') {
      TagInternal = 'a';
    }
    const buttonClasses = classNames('vsf-button', {
      'vsf-button--disabled': disabled,
      'vsf-button--link': Tag === 'a',
      'vsf-button--rounded': rounded,
      'vsf-button--tile': tile,
      'vsf-button--icon': icon,
      'vsf-button--block': block,

      'vsf-button--base': size === 'base',
      'vsf-button--sm': size === 'sm',
      'vsf-button--lg': size === 'lg',

      'vsf-button--primary': color === 'primary',
      'vsf-button--negative': color === 'negative',
      'vsf-button--warning': color === 'warning',
      'vsf-button--gray': color === 'gray',
      'vsf-button--secondary': color === 'secondary',
      'vsf-button--positive': color === 'positive',

      'vsf-button--variant-primary': variant === 'primary',
      'vsf-button--variant-secondary': variant === 'secondary',
      'vsf-button--variant-tertiary': variant === 'tertiary',
    });

    return (
      <TagInternal
        className={buttonClasses}
        onClick={onClick}
        ref={ref}
        role={Tag === 'a' ? 'button' : undefined}
        disabled={disabled}
        {...(link ? { href: link } : {})}
        {...attributes}
      >
        {slotPrefix}
        {children}
        {slotSuffix}
      </TagInternal>
    );
  },
);

export default VsfButton;
