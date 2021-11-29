import { DefaultTheme as StyleComponentsDefaultTheme } from 'styled-components';

import { danger, primary, secondary, tertiary, warning } from './button';
import { outlineOffset, outlineWidth } from './outlines';

export const styledComponentsLightTheme: StyleComponentsDefaultTheme = {
  button: {
    danger,
    primary,
    secondary,
    tertiary,
    warning
  },
  darkMode: false,
  link: {
    outlineColorFocus: '#4462C9',
    textColor: '#4462C9',
    textColorActive: '#364EA3',
    textColorDisabled: '#BCBCBC',
    textColorFocus: '#1D3163',
    textColorHover: '#1D3163',
    textColorVisited: '#4462C9'
  },
  outline: {
    offset: outlineOffset,
    style: 'solid',
    width: outlineWidth
  }
};
