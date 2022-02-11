import React from 'react';
import { render, screen } from '@testing-library/react';

import {
  BadgeChildrenMock,
  BadgeDefaultClassesMock,
  BadgeDefaultPropsMock,
} from '../__mock__/mock';
import Badge from '../Badge';

import { BadgeProps } from '../models';

const defaultProps: BadgeProps = {
  ...BadgeDefaultPropsMock,
};

test('the Badge component renders correctly with required and optional props', () => {
  render(<Badge {...defaultProps}>{BadgeChildrenMock}</Badge>);

  const badgeNode = screen.getByTestId('badge-item');

  // the component has been rendered
  expect(badgeNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(badgeNode).toMatchSnapshot();

  // the comonent has correct classes
  expect(badgeNode).toHaveClass(BadgeDefaultClassesMock.join(' '));
});
