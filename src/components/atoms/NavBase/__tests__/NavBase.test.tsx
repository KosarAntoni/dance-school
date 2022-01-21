import React from 'react';
import { Link } from 'gatsby';
import { fireEvent, render, screen } from '@testing-library/react';
import { endingSlashRegexp } from 'shared/regexp';

import { NavBasePropsMock } from '../__mock__/mock';
import NavBase from '../NavBase';

const {
  testFunction,
  content,
  internalLink,
  queryString,
  kebabQueryString,
  ariaLabel,
  externalLink,
  className,
} = NavBasePropsMock;

test('the NavBase component renders correctly with required and optional props', () => {
  // render as internal link
  const { rerender } = render(
    <NavBase url={internalLink} ariaLabel={ariaLabel}>
      {content}
    </NavBase>
  );

  let navBaseNode = screen.getByRole('link');

  // the component has been rendered
  expect(navBaseNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(navBaseNode).toMatchSnapshot();

  // the component has href
  expect(navBaseNode).toHaveAttribute('href', internalLink);

  // the component has aria-label
  expect(navBaseNode).toHaveAttribute('aria-label', ariaLabel);

  // the component opens propper page after click
  fireEvent.click(navBaseNode);
  expect(Link).toHaveBeenCalledWith(
    expect.objectContaining({ to: internalLink }),
    expect.anything()
  );

  // rerender as external link
  rerender(<NavBase url={externalLink}>{content}</NavBase>);

  navBaseNode = screen.getByRole('link', { name: content });

  // the component has been rendered
  expect(navBaseNode).toBeInTheDocument();

  // the component has href
  expect(navBaseNode).toHaveAttribute('href', externalLink);

  // rerender as button
  rerender(<NavBase onClick={testFunction}>{content}</NavBase>);

  navBaseNode = screen.getByRole('button', { name: content });

  // the component has been rendered
  expect(navBaseNode).toBeInTheDocument();

  // after click right function is called
  fireEvent.click(navBaseNode);
  expect(testFunction).toBeCalled();

  // rerender as blank text
  rerender(<NavBase className={className}>{content}</NavBase>);

  navBaseNode = screen.getByText(content);

  // the component has been rendered
  expect(navBaseNode).toBeInTheDocument();

  // the component has right class
  expect(navBaseNode).toHaveClass(className);

  // render as internal hash link
  rerender(
    <NavBase url={internalLink} queryString={queryString}>
      {content}
    </NavBase>
  );

  navBaseNode = screen.getByRole('link');

  // the component has been rendered
  expect(navBaseNode).toBeInTheDocument();

  // the component has href
  const href = `${internalLink.replace(endingSlashRegexp, '')}${queryString}`;
  expect(navBaseNode).toHaveAttribute('href', href);

  // the component opens propper page after click
  fireEvent.click(navBaseNode);
  expect(Link).toHaveBeenCalledWith(expect.objectContaining({ to: href }), expect.anything());

  // render as internal kebab-case hash link
  rerender(
    <NavBase url={internalLink} queryString={kebabQueryString}>
      {content}
    </NavBase>
  );

  navBaseNode = screen.getByRole('link');

  // the component has been rendered
  expect(navBaseNode).toBeInTheDocument();

  // the component has href
  const kebabHref = `${internalLink.replace(endingSlashRegexp, '')}${kebabQueryString}`;
  expect(navBaseNode).toHaveAttribute('href', kebabHref);

  // the component opens propper page after click
  fireEvent.click(navBaseNode);
  expect(Link).toHaveBeenCalledWith(expect.objectContaining({ to: kebabHref }), expect.anything());
});
