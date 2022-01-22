import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { fireEvent, render, screen } from '@testing-library/react';

import { LinkChildrenMock, linkDefaultClassesMock, LinkDefaultPropsMock } from '../__mock__/mock';
import Link from '../Link';

import { LinkProps } from '../models';

const defaultProps: LinkProps = {
  ...LinkDefaultPropsMock,
};

test('the Link component renders correctly with required and optional props', () => {
  render(<Link {...defaultProps}>{LinkChildrenMock}</Link>);

  const linkNode = screen.getByRole('link');

  // the component has been rendered
  expect(linkNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(linkNode).toMatchSnapshot();

  // the component opens propper page after click
  fireEvent.click(linkNode);
  expect(GatsbyLink).toHaveBeenCalledWith(
    expect.objectContaining({ to: LinkDefaultPropsMock.url }),
    expect.anything()
  );

  // the comonent has correct classes
  expect(linkNode).toHaveClass(linkDefaultClassesMock.join(' '));
  expect(linkNode.firstChild).toHaveClass('typography--size-20');

  // the component has arrow
  expect(linkNode.firstChild?.lastChild).toHaveClass('link__arrow');
});
