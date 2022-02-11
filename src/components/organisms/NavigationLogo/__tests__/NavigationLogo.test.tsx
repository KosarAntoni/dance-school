import React from 'react';
import { render, screen } from '@testing-library/react';
import { useStaticQueryMock } from 'testUtils/useStaticQueryMock';

import { useNavigationQueryMock } from 'hooks/useNavigationQuery';

import NavigationLogo from '../NavigationLogo';

const GATSBY_DEFAULT_LANG = 'en';

const originalEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = {
    ...originalEnv,
    GATSBY_DEFAULT_LANG,
  };
});

afterEach(() => {
  jest.clearAllMocks();
  process.env = originalEnv;
});

const [{ logoLink }] = useNavigationQueryMock.allGraphCmsNavigation.nodes.filter(
  ({ locale }) => locale === GATSBY_DEFAULT_LANG
);

test('the NavigationLogo component renders correctly with required and optional props', () => {
  useStaticQueryMock(useNavigationQueryMock);

  render(<NavigationLogo />);

  const navigationLogoNode = screen.getByTestId('navigation-logo-item');

  // the component has been rendered
  expect(navigationLogoNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(navigationLogoNode).toMatchSnapshot();

  // the component has Link
  const linkNode = screen.getByRole('link');
  expect(linkNode).toBeInTheDocument();

  // the Link has propper attributes
  expect(linkNode).toHaveAttribute('href', logoLink?.url);
  expect(linkNode).toHaveAttribute('aria-label', logoLink?.ariaLabel);
});
