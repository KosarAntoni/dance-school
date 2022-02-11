import React, { FC, useEffect, useState } from 'react';
import { HiMenuAlt2 } from '@react-icons/all-files/hi/HiMenuAlt2';
import classNames from 'classnames';

import Button from 'atoms/Button';
import Container from 'atoms/Container';
import Link from 'atoms/Link';
import Logo from 'molecules/Logo';
import Modal, { ModalSetters } from 'molecules/Modal';

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
  const { logoLink, pages, buttons, menuButton } = navigationData;

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
      variant="solid"
      color="black"
      size={{ base: 20, lg: 24 }}
      padding={{ top: 'xs', right: 'sm', bottom: 'xs', left: 'sm' }}
      className="navigation__item"
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

  const renderMobileButtons = buttons?.map(({ label, url, ariaLabel, variant, color }) => (
    <Button
      {...{ url, variant, color, ariaLabel }}
      size={{ base: 20, lg: 24 }}
      padding={{ top: 'xs', right: 'sm', bottom: 'xs', left: 'sm' }}
      className="navigation__item"
    >
      {label}
    </Button>
  ));

  const renderDesktopButtons = buttons?.map(({ label, url, ariaLabel, variant, color }, index) => (
    <Button
      {...{ url, variant, color, ariaLabel }}
      size={{ base: 14, lg: 18 }}
      padding={{ top: 'xs', right: 'sm', bottom: 'xs', left: 'sm' }}
      className={`navigation__item-${index + 2 + pages.length}`}
    >
      {label}
    </Button>
  ));

  return (
    <Container
      as="header"
      outerClassName="navigation__wrapper"
      className={navigationClasses}
      data-testid="navigation-item"
    >
      <Logo {...logoLink} size={30} hasText className="navigation__logo navigation__item-1" />
      <nav className="navigation__links">{renderDesktopLinks}</nav>
      <nav className="navigation__buttons">{renderDesktopButtons}</nav>
      <Button
        {...menuButton}
        size={24}
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
        <nav className="navigation__links">{renderMobileLinks}</nav>
        <nav className="navigation__buttons">{renderMobileButtons}</nav>
      </Modal>
    </Container>
  );
};

export default Navigation;
