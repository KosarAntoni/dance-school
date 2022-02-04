import React from 'react';
import { render, screen } from '@testing-library/react';
import { FooterMock } from 'shared/mocks/footerMock';
import useStaticQueryMock from 'testUtils/useStaticQueryMock';

import Footer from '../Footer';

const GATSBY_DEFAULT_LANG = 'en';

const useStaticQueryReturn = {
  ...FooterMock.useStaticQueryReturn,
};

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

const [{ copyright, socialLinks, pages }] = useStaticQueryReturn.allGraphCmsFooter.nodes.filter(
  ({ locale }) => locale === GATSBY_DEFAULT_LANG
);

test('the Footer component renders correctly with required and optional props', () => {
  useStaticQueryMock(useStaticQueryReturn);

  render(<Footer />);

  const footerNode = screen.getByTestId('footer-item');

  // the component has been rendered
  expect(footerNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(footerNode).toMatchSnapshot();

  // the component has copirights
  const copirightNode = screen.getByText(`© ${copyright}`);
  expect(copirightNode).toBeInTheDocument();

  // the component has propper Links count
  const linkNodes = screen.getAllByRole('link');
  expect(linkNodes.length).toBe(socialLinks.length + pages.length);
});
