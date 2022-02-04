import React, { FC } from 'react';
import classNames from 'classnames';

import { alignClassNames, paddingClassNames, sizeClassNames } from './utils';

import { TypographyProps } from './models.d';

import './Typography.scss';

/**
 * @example <Typography as = 'p'
 *                      className = 'testClass'
 *                      align = {{ base: 'center', sm: 'left', md: 'right', xl: 'inherit' }}
 *                      padding = {{ top: 'sm', right: 'md', bottom: 'lg', left: 'xl' }}
 *                      lineHeight = 'small'
 *                      weight = 'light'
 *                      italic
 *                      size = {{ base: 8, xs: 10, sm: 12, md: 14, lg: 16, xl: 18, xxl: 20 }} >
 *  Awesome text example
 * </Typography>
 */
const Typography: FC<TypographyProps> = ({
  as /** 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div */,
  align /** 'inherit' | 'left' | 'center' | 'right' | { @requires base: value, @optional breakpoint: value} */,
  lineHeight = 'normal' /** 'small' | 'normal' | 'big' */,
  weight /** 'light' | 'bold' | 'black' */,
  italic /** boolean */,
  size /** 8 | 10 | 12 | 14 | 15 | 16 | 17 | 18 | 20 | 24 | 25 | 28 | 30 | 35 | 40 | 42 | 50 | 55 | 65 | { @requires base: value, @optional breakpoint: value} */,
  padding /** based on varables placed in "styles/common/variables" 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'huge' | { top: value, right: value, bottom: value, left: value } | { side: { @requires base: value, @optional breakpoint: value} } */,
  className /** string */,
  children,
  ...rest
}) => {
  const Component = as || 'span';

  const sizeClasses = size ? sizeClassNames(size) : [];
  const paddingClasses = padding ? paddingClassNames(padding) : [];
  const alignClasses = align ? alignClassNames(align) : [];

  const componentClasses = classNames(
    'typography',
    className,
    ...sizeClasses,
    ...paddingClasses,
    ...alignClasses,
    {
      [`typography--line-height-${lineHeight}`]: lineHeight,
      [`typography--${weight}`]: weight,
      'typography--italic': italic,
    }
  );

  return (
    <Component data-testid="typography-item" className={componentClasses} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
