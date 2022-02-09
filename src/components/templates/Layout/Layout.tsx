import React, { FC } from 'react';
import classNames from 'classnames';

import Footer from 'organisms/Footer';
import Navigation from 'organisms/Navigation';
import NavigationLogo from 'organisms/NavigationLogo';

import { LayoutProps } from './models';

import 'styles/main.scss';
import './Layout.scss';

const Layout: FC<LayoutProps> = ({ children, className }) => {
  const layoutClasses = classNames('layout', className);

  return (
    <div className={layoutClasses}>
      <NavigationLogo />
      <Navigation />
      <main id="main" className="layout__main background--white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
