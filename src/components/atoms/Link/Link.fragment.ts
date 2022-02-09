import { graphql } from 'gatsby';

export const LinkFragment = graphql`
  fragment Link on GraphCMS_Link {
    color
    id
    hasArrow
    label
    noHover
    url
    variant
    ariaLabel
  }
`;
