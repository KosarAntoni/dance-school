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
  }, [window]);

  const navigationClasses = classNames('navigation', {
    'navigation--scrolled': isScrolled,
  });

  const onMenuButtonClick = (): void => {
    if (modal.current) modal.current.open();
  };

  const renderLinks = pages?.map(({ url, title }, index: number) => (
    <Link
      key={title}
      url={url}
      variant="solid"
      color="black"
      size={{ base: 14, md: 18 }}
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
      <Logo {...logoLink} hasText className="navigation__logo navigation__item-1" />
      <div className="navigation__links">{renderLinks}</div>
      <Button
        {...menuButton}
        size={{ base: 14, md: 18 }}
        padding="xs"
        className="navigation__menu-button"
        onClick={onMenuButtonClick}
      >
        <HiMenuAlt2 />
      </Button>
      <Modal ref={modal} isOpen={hasMobileOpen}>
        {renderLinks}
      </Modal>
    </Container>
  );
};

export default Navigation;
