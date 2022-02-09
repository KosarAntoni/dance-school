import React from 'react';
import { render, screen } from '@testing-library/react';

import { LogoDefaultPropsMock } from '../__mock__/mock';
import Logo from '../Logo';

import { LogoProps } from '../models';

const defaultProps: LogoProps = {
  ...LogoDefaultPropsMock,
};

const { url, ariaLabel } = LogoDefaultPropsMock;

test('the Logo component renders correctly with required and optional props', () => {
  const { rerender } = render(<Logo {...defaultProps} />);

  let logoNode = screen.getByTestId('logo-item');

  // the component has been rendered
  expect(logoNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(logoNode).toMatchSnapshot();

  // the component has Link
  const linkNode = screen.getByRole('link');

  // the Link has propper attributes
  expect(linkNode).toBeInTheDocument();
  expect(linkNode).toHaveAttribute('href', url);
  expect(linkNode).toHaveAttribute('aria-label', ariaLabel);

  // rerender with optional props
  rerender(<Logo {...defaultProps} hasText hasIcon />);
  logoNode = screen.getByTestId('logo-item');

  // the component has proper class
  expect(logoNode).not.toHaveClass('logo--hidden-icon');

  // the component has propper links count
  const linkNodes = screen.getAllByRole('link');
  expect(linkNodes.length).toBe(2);

  // each Link has propper attributes
  linkNodes.forEach((link) => {
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveAttribute('aria-label', ariaLabel);
  });
});
