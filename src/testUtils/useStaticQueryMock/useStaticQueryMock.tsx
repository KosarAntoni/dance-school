import * as Gatsby from 'gatsby';

const useStaticQueryMock = (mock) => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
  useStaticQuery.mockImplementation(() => mock);
};

export default useStaticQueryMock;
