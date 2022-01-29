import { graphql, useStaticQuery } from 'gatsby';

export const useNavigationQuery = () => {
  const {
    allGraphCmsNavigation: { nodes },
  } = useStaticQuery(graphql`
    {
      allGraphCmsNavigation {
        nodes {
          pages {
            url
            title
            slug
          }
          locale
        }
      }
    }
  `);

  return nodes;
};
