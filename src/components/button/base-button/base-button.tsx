import classnames from 'classnames';
import React, { forwardRef, ButtonHTMLAttributes } from 'react';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  const { className, disabled, onClick, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      aria-disabled={disabled}
      className={classnames('bf-button', className)}
      ref={ref}
      onClick={!disabled ? onClick : undefined}
    />
  );
});
