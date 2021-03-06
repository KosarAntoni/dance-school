import { graphql, useStaticQuery } from 'gatsby';

import { navigationQueryType } from './models';

export const useNavigationQuery = (): navigationQueryType[] => {
  const {
    allGraphCmsNavigation: { nodes },
  } = useStaticQuery(graphql`
    {
      allGraphCmsNavigation {
        nodes {
          logoLink {
            ...Link
          }
          pages {
            url
            title
            slug
          }
          buttons {
            ...Button
          }
          menuButton {
            ...Button
          }
          locale
        }
      }
    }
  `);

  return nodes;
};
