import React, { FC } from 'react';
import classnames from 'classnames';

import { ContainerProps } from './models';

const Container: FC<ContainerProps> = ({
  element,
  className,
  variant,
  gutter = true,
  innerRef,
  children,
  ...rest
}) => {
  const Tag = element || 'div';

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
