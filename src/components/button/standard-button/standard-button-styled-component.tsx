import classnames from 'classnames';
import React, { forwardRef, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ButtonVariants } from '../../../enums';
import { baseButtonStyle, getButtonTheme } from '../../../styles';
import { styledComponentsLightTheme } from '../../../themes';
import { FullWidth } from '../../../types';

import { BaseButton, BaseButtonProps } from '../base-button';

export interface StyledComponentButtonProps extends BaseButtonProps, FullWidth {
  afterIconRight?: ReactNode;
  loading?: boolean;
  variant?: ButtonVariants;
}

export interface BaseStyledComponentButtonProps extends StyledComponentButtonProps {
  variant: ButtonVariants;
}

export const BaseStyledComponentButton = forwardRef<
  HTMLButtonElement,
  BaseStyledComponentButtonProps
>((props, ref) => {
  const { afterIconRight, children, className, disabled, fullWidth, variant, ...otherProps } =
    props;
  return (
    <BaseButton
      {...otherProps}
      className={classnames({
        'bf-button__standard': true,
        'bf-button__standard--disabled': disabled,
        'bf-button__standard--full-width': fullWidth,
        [`bf-button__standard--${variant}`]: variant,
        [`${className}`]: className
      })}
      disabled={disabled}
      ref={ref}
    >
      {children}
      {afterIconRight && <span>{afterIconRight}</span>}
    </BaseButton>
  );
});

const Button = styled(BaseStyledComponentButton)`
  ${baseButtonStyle}
  ${({ fullWidth, variant }) => getButtonTheme(fullWidth, variant)}
`;

export const StandardButtonStyledComponent = forwardRef<
  HTMLButtonElement,
  StyledComponentButtonProps
>((props, ref) => {
  const { fullWidth = false, variant = ButtonVariants.Primary, ...otherProps } = props;
  return (
    <ThemeProvider theme={styledComponentsLightTheme}>
      <Button {...otherProps} fullWidth={fullWidth} variant={variant} ref={ref} />
    </ThemeProvider>
  );
});
