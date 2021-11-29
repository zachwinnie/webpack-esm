import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

interface StandardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const StandardButton: FunctionComponent<StandardButtonProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <button {...otherProps}>Hello World</button>
  )
}