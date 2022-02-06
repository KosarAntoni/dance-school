import React, { FC } from 'react';
import classnames from 'classnames';

import { ContainerProps } from './models';

import './Container.scss';

const Container: FC<ContainerProps> = ({
  as,
  className,
  innerClassName,
  variant,
  gutter = true,
  innerRef,
  children,
  ...rest
}) => {
  const Component = as || 'div';
  const containerClassNames = classnames('container', className, {
    [`container--${variant}`]: variant,
    'container--gutter': gutter,
  });
  const innerClassNames = classnames('container__inner', innerClassName);

  return (
    <Component className={containerClassNames}>
      <div className={innerClassNames} ref={innerRef} {...rest}>
        {children}
      </div>
    </Component>
  );
};

export default Container;
