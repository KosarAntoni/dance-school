import { graphql } from 'gatsby';

export const ButtonFragment = graphql`
  fragment Button on GraphCMS_Button {
    id
    variant
    url
    label
    color
    ariaLabel
  }
`;
