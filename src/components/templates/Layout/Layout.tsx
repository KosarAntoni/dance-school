import React, { FC } from 'react';
import classNames from 'classnames';

import Footer from 'organisms/Footer';

import { LayoutProps } from './models';

import 'styles/main.scss';
import './Layout.scss';

const Layout: FC<LayoutProps> = ({ children, className }) => {
  const layoutClasses = classNames('layout', className);

  return (
    <div className={layoutClasses}>
      <main id="main" className="layout__main background--white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
