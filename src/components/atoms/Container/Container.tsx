import React, { FC } from 'react';
import classnames from 'classnames';

import { ContainerProps } from './models';

import './Container.scss';

const Container: FC<ContainerProps> = ({
  as,
  className,
  outerClassName,
  variant,
  gutter = true,
  innerRef,
  children,
  ...rest
}) => {
  const Component = as || 'div';
  const containerOuterClassNames = classnames(
    'container__outer',
    {
      [`container--${variant}`]: variant,
      'container--gutter': gutter,
    },
    outerClassName
  );
  const containerClassNames = classnames('container', className);

  return (
    <Component className={containerOuterClassNames} data-testid="container-item">
      <div className={containerClassNames} ref={innerRef} {...rest}>
        {children}
      </div>
    </Component>
  );
};

export default Container;
