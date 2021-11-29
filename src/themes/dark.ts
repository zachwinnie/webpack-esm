import { DefaultTheme as StyleComponentsDefaultTheme } from 'styled-components';

import { danger, primary, secondary, tertiary, warning } from './button';
import { outlineOffset, outlineWidth } from './outlines';

export const styledComponentsDarkTheme: StyleComponentsDefaultTheme = {
  button: {
    danger,
    primary,
    secondary,
    tertiary,
    warning
  },
  darkMode: true,
  link: {
    outlineColorFocus: '#93a4e0',
    textColor: '#93a4e0',
    textColorActive: '#6c83d4',
    textColorDisabled: '#e2e7f7',
    textColorFocus: '#bbc6eb',
    textColorHover: '#bbc6eb',
    textColorVisited: '#93a4e0'
  },
  outline: {
    offset: outlineOffset,
    style: 'solid',
    width: outlineWidth
  }
};
