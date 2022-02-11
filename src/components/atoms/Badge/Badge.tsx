import React, { FC } from 'react';
import classNames from 'classnames';

import Typography from 'atoms/Typography';

import { BadgeProps } from './models.d';

import './Badge.scss';

const Badge: FC<BadgeProps> = ({ children, variant = 'nano', color = 'white', className }) => {
  const badgeClasses = classNames(
    'badge',
    {
      [`badge--${variant}`]: variant,
      [`badge--${color}`]: color,
    },
    className
  );

  return (
    <Typography
      className={badgeClasses}
      size={14}
      padding={{ top: 'xxs', right: 'xs', bottom: 'xxs', left: 'xs' }}
      data-testid="badge-item"
    >
      {children}
    </Typography>
  );
};

export default Badge;
