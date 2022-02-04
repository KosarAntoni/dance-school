import { graphql, useStaticQuery } from 'gatsby';

import { footerQueryType } from './models';

export const useFooterQuery = () => {
  const {
    allGraphCmsFooter: { nodes },
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
            label
          }
          copyright
        }
      }
    }
  `);

  return nodes as footerQueryType[];
};
