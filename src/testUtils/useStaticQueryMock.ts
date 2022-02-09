import * as Gatsby from 'gatsby';

export const useStaticQueryMock = (mock): void => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
  useStaticQuery.mockImplementation(() => mock);
};
