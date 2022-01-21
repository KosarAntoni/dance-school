import React, { FC } from 'react';
import classNames from 'classnames';

import { LayoutProps } from './models';

import 'styles/main.scss';
import './Layout.scss';

const Layout: FC<LayoutProps> = ({ children, className }) => {
  const layoutClasses = classNames('layout', 'background--white', className);

  return (
    <div className={layoutClasses}>
      <main id="main" className="layout__main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
