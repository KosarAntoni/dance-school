import React, { FC } from 'react';

import Container from 'atoms/Container';
import Logo from 'molecules/Logo';

import { useNavigationQuery } from 'hooks/useNavigationQuery';

import './NavigationLogo.scss';

const NavigationLogo: FC = () => {
  const nodes = useNavigationQuery();
  const lang = process.env.GATSBY_DEFAULT_LANG;
  const [navigationData] = nodes.filter(({ locale }) => locale === lang);
  const { logoLink } = navigationData;

  return (
    <Container
      outerClassName="navigation-logo__wrapper"
      className="navigation-logo"
      data-testid="navigation-logo-item"
    >
      <Logo {...logoLink} size={30} hasIcon className="navigation-logo__icon" />
    </Container>
  );
};

export default NavigationLogo;
