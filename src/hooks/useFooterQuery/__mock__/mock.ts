export const useFooterQueryMock = {
  allGraphCmsFooter: {
    nodes: [
      {
        locale: 'en',
        pages: [
          {
            url: '/about',
            title: 'About',
            slug: 'about',
          },
          {
            url: '/blog',
            title: 'Blog',
            slug: 'blog',
          },
        ],
        socialLinks: [
          {
            url: 'https://www.instagram.com/',
            theme: 'INSTAGRAM',
            label: 'Instagram',
          },
          {
            url: 'https://www.facebook.com/',
            theme: 'FACEBOOK',
            label: 'Facebook',
          },
          {
            url: 'https://www.youtube.com/',
            theme: 'YOUTUBE',
            label: 'YouTube',
          },
        ],
        copyright: 'Dance school Gdańsk | Dance Atelier Anton Kosar',
      },
      {
        locale: 'pl',
        pages: [],
        socialLinks: [],
        copyright: 'Szkoła tańca w Gdańsku | Dance Atelier Anton Kosar',
      },
    ],
  },
};
