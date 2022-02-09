import React, { FC, useEffect, useState } from 'react';
import { HiMenuAlt2 } from '@react-icons/all-files/hi/HiMenuAlt2';
import classNames from 'classnames';

import Button from 'atoms/Button';
import Container from 'atoms/Container';
import Link from 'atoms/Link';
import Modal, { ModalSetters } from 'atoms/Modal';
import Logo from 'molecules/Logo';

import { useNavigationQuery } from 'hooks/useNavigationQuery';

import { NavigationProps } from './models';

import './Navigation.scss';

const SCROLL_OFFSET = 10;

// prop hasMobileOpen is added for testing purposes
const Navigation: FC<NavigationProps> = ({ hasMobileOpen }) => {
  const modal = React.useRef<ModalSetters | null>(null);

  const nodes = useNavigationQuery();
  const lang = process.env.GATSBY_DEFAULT_LANG;
  const [navigationData] = nodes.filter(({ locale }) => locale === lang);
  const { logoLink, pages, menuButton } = navigationData;

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY >= SCROLL_OFFSET);
    };

    setIsScrolled(window.scrollY >= SCROLL_OFFSET);
  });

  const navigationClasses = classNames('navigation', {
    'navigation--scrolled': isScrolled,
  });

  const onMenuButtonClick = (): void => {
    if (modal.current) modal.current.open();
  };

  const renderMobileLinks = pages?.map(({ url, title }) => (
    <Link
      key={title}
      url={url}
      variant="simple"
      color="black"
      size={{ base: 20, lg: 24 }}
      padding={{ bottom: 'xl' }}
    >
      {title}
    </Link>
  ));

  const renderDesktopLinks = pages?.map(({ url, title }, index: number) => (
    <Link
      key={title}
      url={url}
      variant="solid"
      color="black"
      size={{ base: 14, lg: 18 }}
      padding={{ top: 'xs', right: 'sm', bottom: 'xs', left: 'sm' }}
      className={`navigation__item-${index + 2}`}
    >
      {title}
    </Link>
  ));

  return (
    <Container
      as="header"
      className="navigation__wrapper"
      innerClassName={navigationClasses}
      data-testid="navigation-item"
    >
      <Logo
        {...logoLink}
        size={{ base: 20, lg: 30 }}
        hasText
        className="navigation__logo navigation__item-1"
      />
      <nav className="navigation__links">{renderDesktopLinks}</nav>
      <Button
        {...menuButton}
        size={{ base: 14, lg: 24 }}
        padding="xs"
        className="navigation__menu-button"
        onClick={onMenuButtonClick}
      >
        <HiMenuAlt2 />
      </Button>
      <Modal
        ref={modal}
        isOpen={hasMobileOpen}
        justify="right"
        align="top"
        className="navigation__mobile"
      >
        <Logo {...logoLink} size={24} color="white" hasText hasIcon className="navigation__logo" />
        <nav className="navigation__mobile-links">{renderMobileLinks}</nav>
      </Modal>
    </Container>
  );
};

export default Navigation;
