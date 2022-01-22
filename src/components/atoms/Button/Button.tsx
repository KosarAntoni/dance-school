import React, { FC } from 'react';
import classNames from 'classnames';

import NavBase from 'atoms/NavBase';
import Typography from 'atoms/Typography';

import { ButtonProps } from './models.d';

import './Button.scss';

const Button: FC<ButtonProps> = ({
  children,
  variant = 'solid',
  space = 'around',
  color = 'blue',
  disabled,
  className,
  onClick,
  url,
  ariaLabel,
  lineHeight,
  weight,
  italic,
  size,
  padding,
}) => {
  const buttonClasses = classNames('button', className, {
    [`button--${variant}-${color}`]: variant && color,
    [`button--${space}`]: space,
    'button--disabled': disabled,
  });

  const buttonContentClasses = classNames('button__content');

  const navBaseProps = { onClick, url, ariaLabel };
  const typographyProps = {
    lineHeight,
    weight,
    italic,
    size,
    padding,
  };

  return (
    <NavBase className={buttonClasses} {...navBaseProps}>
      <Typography as="span" {...typographyProps} className={buttonContentClasses}>
        {children}
      </Typography>
    </NavBase>
  );
};

export default Button;
