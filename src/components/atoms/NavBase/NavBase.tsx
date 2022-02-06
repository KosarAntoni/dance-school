import React, { FC } from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { beginigHashRegexp, beginigSlashRegexp, endingSlashRegexp } from 'shared/regexp';

import { NavBaseProps } from './models.d';

const NavBase: FC<NavBaseProps> = ({
  children = '',
  url,
  queryString,
  ariaLabel,
  onClick,
  className,
  ...rest
}) => {
  const renderDiv = <div className={className}>{children}</div>;

  const renderLink = (): JSX.Element => {
    const isInternal = url && beginigSlashRegexp.test(url);
    const isHashtag = queryString && beginigHashRegexp.test(queryString);

    const linkProps = {
      className,
      'aria-label': ariaLabel,
      onClick,
    };

    if (isInternal && isHashtag) {
      const link = `${url.replace(endingSlashRegexp, '')}${queryString}`;

      return (
        <AnchorLink to={link} {...linkProps} gatsbyLinkProps={rest}>
          {children}
        </AnchorLink>
      );
    }

    if (isInternal) {
      return (
        <Link to={url} {...linkProps} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={className}
        aria-label={ariaLabel}
        {...rest}
      >
        {children}
      </a>
    );
  };

  const renderButton = (
    <button type="button" className={className} onClick={onClick} aria-label={ariaLabel} {...rest}>
      {children}
    </button>
  );

  const renderComponent = (): JSX.Element => {
    if (url && url !== '#') {
      return renderLink();
    }
    if (onClick) {
      return renderButton;
    }

    return renderDiv;
  };

  return renderComponent();
};

export default NavBase;
