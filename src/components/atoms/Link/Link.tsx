import React, { FC } from 'react';
import { HiArrowRight } from '@react-icons/all-files/hi/HiArrowRight';
import classNames from 'classnames';

import NavBase from 'atoms/NavBase';
import Typography from 'atoms/Typography';

import { LinkProps } from './models.d';

import './Link.scss';

const Link: FC<LinkProps> = ({
  children,
  color = 'black',
  variant = 'simple',
  hasArrow,
  noHover,
  className,
  onClick,
  url,
  queryString,
  ariaLabel,
  lineHeight,
  weight,
  italic,
  size,
  padding,
}) => {
  const linkClasses = classNames(
    'link',
    {
      [`link--${variant}-${color}`]: variant && color,
      'link--no-hover': url === '#' || !url || noHover,
    },
    className
  );

  const navBaseProps = { onClick, url, queryString, ariaLabel };
  const typographyProps = {
    lineHeight,
    weight,
    italic,
    size,
    padding,
    className: 'link__content',
  };

  const renderArrow = hasArrow && (
    <span className="link__arrow">
      <HiArrowRight className="link__arrow--hidden" />
      <HiArrowRight className="link__arrow--visible" />
    </span>
  );

  return (
    <NavBase className={linkClasses} {...navBaseProps}>
      <Typography as="span" {...typographyProps}>
        {children}
        {renderArrow}
      </Typography>
    </NavBase>
  );
};

export default Link;
