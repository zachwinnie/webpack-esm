import 'styled-components';

import { ButtonColor, LinkColor } from '../themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    button: {
      danger: ButtonColor;
      primary: ButtonColor;
      secondary: ButtonColor;
      tertiary: ButtonColor;
      warning: ButtonColor;
    };
    darkMode: boolean;
    link: LinkColor;
    outline: {
      offset: number;
      style: string;
      width: number;
    };
  }
}
