import { graphql } from 'gatsby';

export const ButtonFragment = graphql`
  fragment Badge on GraphCMS_Badge {
    color
    id
    label
    variant
  }
`;
