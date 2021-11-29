import classnames from 'classnames';
import React, { forwardRef, ReactNode } from 'react';

import { ButtonVariants } from '../../../enums';
import { FullWidth } from '../../../types';

import classes from './standard-button-css-modules.module.scss';

import { BaseButton, BaseButtonProps } from '../base-button';

export interface CssModulesButtonProps extends BaseButtonProps, FullWidth {
  afterIconRight?: ReactNode;
  variant?: ButtonVariants;
}

export const StandardButtonCssModules = forwardRef<HTMLButtonElement, CssModulesButtonProps>(
  (props, ref) => {
    const {
      afterIconRight,
      children,
      className,
      disabled,
      fullWidth = false,
      variant = ButtonVariants.Primary,
      ...otherProps
    } = props;

    return (
      <BaseButton
        {...otherProps}
        className={classnames({
          'bf-button__standard': true,
          'bf-button__standard--disabled': disabled,
          'bf-button__standard--full-width': fullWidth,
          [`bf-button__standard--${variant}`]: variant,
          [classes.button]: true,
          [classes.fullWidth]: fullWidth,
          [classes[variant]]: true,
          [`${className}`]: className
        })}
        ref={ref}
      >
        {children}
        {afterIconRight && <span>{afterIconRight}</span>}
      </BaseButton>
    );
  }
);
