import React from 'react';
import { render, screen } from '@testing-library/react';

import {
  ContainerChildrenMock,
  ContainerDefaultClassesMock,
  ContainerDefaultPropsMock,
  ContainerOuterDefaultClassesMock,
} from '../__mock__/mock';
import Container from '../Container';

import { ContainerProps } from '../models';

const defaultProps: ContainerProps = {
  ...ContainerDefaultPropsMock,
};

test('the Container component renders correctly with required and optional props', () => {
  render(<Container {...defaultProps}>{ContainerChildrenMock}</Container>);

  const containerNode = screen.getByTestId('container-item');

  // the component has been rendered
  expect(containerNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(containerNode).toMatchSnapshot();

  // the comonent has correct classes
  expect(containerNode).toHaveClass(ContainerOuterDefaultClassesMock.join(' '));
  expect(containerNode.firstChild).toHaveClass(ContainerDefaultClassesMock.join(' '));

  // the component contains text
  const childNode = screen.getByText(ContainerChildrenMock);
  expect(childNode).toBeInTheDocument();
});
