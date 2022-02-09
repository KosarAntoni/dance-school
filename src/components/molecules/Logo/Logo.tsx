import React, { FC } from 'react';
import { GiHeartInside } from '@react-icons/all-files/gi/GiHeartInside';
import classNames from 'classnames';

import Link from 'atoms/Link';

import { LogoProps } from './models';

import './Logo.scss';

const Logo: FC<LogoProps> = ({ url, label, variant, ariaLabel, color, hasText, className }) => {
  const logoClasses = classNames('logo', { 'logo--hidden-icon': hasText }, className);

  const renderText = hasText && (
    <Link
      url={url}
      ariaLabel={ariaLabel}
      variant={variant}
      noHover
      color={color}
      weight="bold"
      size={{ base: 20, md: 24 }}
      padding={{ left: 'sm' }}
      className="logo__text"
    >
      {label}
    </Link>
  );

  return (
    <div className={logoClasses} data-testid="logo-item">
      <Link
        url={url}
        ariaLabel={ariaLabel}
        variant="simple"
        color="white"
        noHover
        size={{ base: 20, md: 24 }}
        className="logo__icon"
      >
        <GiHeartInside />
      </Link>
      {renderText}
    </div>
  );
};

export default Logo;
