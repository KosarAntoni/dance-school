import React, { useState as useStateMock } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { NavigationMock } from 'shared/mocks';
import { createModalRoot } from 'testUtils/createModalRoot';
import { useStaticQueryMock } from 'testUtils/useStaticQueryMock';

import Navigation from '../Navigation';

const GATSBY_DEFAULT_LANG = 'en';
const originalEnv = process.env;
const setState = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

beforeEach(() => {
  (useStateMock as jest.Mock).mockImplementation((init) => [init, setState]);
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

const [{ pages, buttons }] = NavigationMock.allGraphCmsNavigation.nodes.filter(
  ({ locale }) => locale === GATSBY_DEFAULT_LANG
);

const linksCount = pages.length + buttons.length + 2;

test('the Navigation component renders correctly with required and optional props', () => {
  createModalRoot();

  useStaticQueryMock(NavigationMock);

  const { rerender } = render(<Navigation />);

  const navigationNode = screen.getByTestId('navigation-item');

  // the component has been rendered
  expect(navigationNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(navigationNode).toMatchSnapshot();

  // the component has Logo
  const logoNode = screen.getByTestId('logo-item');
  expect(logoNode).toBeInTheDocument();

  // the component has propper Links count
  let linkNodes = screen.getAllByRole('link');
  expect(linkNodes.length).toBe(linksCount);

  // the component changes state on scroll
  fireEvent.scroll(window, { target: { scrollY: 5 } });
  expect(setState).not.toBeCalledWith(true);
  fireEvent.scroll(window, { target: { scrollY: 100 } });
  expect(setState).toBeCalledWith(true);

  // the component has Menu Button
  const buttonNode = screen.getByRole('button');
  expect(buttonNode).toBeInTheDocument();

  // render Navigation with open Mobile Menu
  rerender(<Navigation hasMobileOpen />);
  const modalNode = screen.getByTestId('modal-item');
  expect(modalNode).toBeInTheDocument();

  // the component has propper Links count
  linkNodes = screen.getAllByRole('link');
  expect(linkNodes.length).toBe(linksCount * 2);
});
