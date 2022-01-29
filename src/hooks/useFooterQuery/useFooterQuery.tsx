import { graphql, useStaticQuery } from 'gatsby';

export const useFooterQuery = () => {
  const {
    allGraphCmsNavigation: { nodes },
  } = useStaticQuery(graphql`
    {
      allGraphCmsFooter {
        nodes {
          locale
          pages {
            url
            title
            slug
          }
          socialLinks {
            url
            theme
          }
          copyright
        }
      }
    }
  `);

  return nodes;
};
