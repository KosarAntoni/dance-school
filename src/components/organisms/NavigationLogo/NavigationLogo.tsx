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
      className="navigation-logo__wrapper"
      innerClassName="navigation-logo"
      data-testid="navigation-logo-item"
    >
      <Logo {...logoLink} size={{ base: 20, lg: 24 }} hasIcon className="navigation-logo__icon" />
    </Container>
  );
};

export default NavigationLogo;
