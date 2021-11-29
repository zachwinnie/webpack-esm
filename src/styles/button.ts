import { css } from 'styled-components';

import { ButtonVariants } from '..';
import { fontFamilyBase } from '../themes';

export const baseButtonStyle = css`
  align-items: center;
  appearance: none;
  background-color: transparent;
  border-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  font-family: ${fontFamilyBase};
  font-size: 14px;
  justify-content: center;
  line-height: 22px;
  padding: 14px 20px;
  text-decoration: none;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, outline 0.1s ease;

  &:focus {
    outline: 0;
  }

  &:focus-visible {
    outline-offset: ${({ theme }) => `${theme.outline.offset}px`};
    outline-style: ${({ theme }) => theme.outline.style};
    outline-width: ${({ theme }) => `${theme.outline.width}px`};
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`;

export const getButtonTheme = (fullWidth: boolean | undefined, variant: ButtonVariants) => {
  return css`
    background-color: ${({ theme }) => theme.button[variant].backgroundColor};
    border-color: ${({ theme }) => theme.button[variant].borderColor};
    color: ${({ theme }) => theme.button[variant].textColor};
    width: ${() => (fullWidth ? '100%' : 'auto')};

    &:hover {
      background-color: ${({ theme }) => theme.button[variant].backgroundColorHover};
      border-color: ${({ theme }) => theme.button[variant].borderColorHover};
      color: ${({ theme }) => theme.button[variant].textColorHover};
    }

    &:active {
      background-color: ${({ theme }) => theme.button[variant].backgroundColorActive};
      border-color: ${({ theme }) => theme.button[variant].borderColorActive};
      color: ${({ theme }) => theme.button[variant].textColorActive};
    }

    &:focus {
      outline: 0;
    }

    &:focus-visible {
      background-color: ${({ theme }) => theme.button[variant].backgroundColorFocus};
      border-color: ${({ theme }) => theme.button[variant].borderColorFocus};
      color: ${({ theme }) => theme.button[variant].textColorFocus};
      outline: 2px solid ${({ theme }) => theme.button[variant].outlineColorFocus};
      outline-offset: 2px;
    }

    &[aria-disabled='true'] {
      background-color: ${({ theme }) => theme.button[variant].backgroundColorDisabled};
      border-color: ${({ theme }) => theme.button[variant].borderColorDisabled};
      color: ${({ theme }) => theme.button[variant].textColorDisabled};
    }
  `;
};
