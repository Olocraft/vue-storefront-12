import classNames from 'classnames';
import { VsfFooterColumnType } from '@sfui/shared/types/index';
import { VsfFooterColumnProps } from './types';

export default function VsfFooterColumn({ type = VsfFooterColumnType.top, children, className }: VsfFooterColumnProps) {
  return <div className={classNames(`vsf-footer__column--${type}`, className)}>{children}</div>;
}
