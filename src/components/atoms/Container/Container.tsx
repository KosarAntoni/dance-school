import React, { FC } from 'react';
import classnames from 'classnames';

import { ContainerProps } from './models';

import './Container.scss';

const Container: FC<ContainerProps> = ({
  as,
  className,
  variant,
  gutter = true,
  innerRef,
  children,
  ...rest
}) => {
  const Tag = as || 'div';

  return (
    <Tag
      className={classnames('container', className, {
        [`container--${variant}`]: variant,
        'container--gutter': gutter,
      })}
      ref={innerRef}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Container;
