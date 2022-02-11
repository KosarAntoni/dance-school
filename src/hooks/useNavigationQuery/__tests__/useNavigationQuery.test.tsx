import { renderHook } from '@testing-library/react-hooks';
import { useStaticQueryMock } from 'testUtils/useStaticQueryMock';

import { useNavigationQueryMock } from '../__mock__/mock';
import { useNavigationQuery } from '../useNavigationQuery';

const {
  allGraphCmsNavigation: { nodes },
} = useNavigationQueryMock;

it('the useNavigationQuery hook returns correct values', () => {
  useStaticQueryMock(useNavigationQueryMock);

  const { result } = renderHook(() => useNavigationQuery());

  // it should return correct data from static graphQL query
  expect(result.current).toEqual(nodes);
});
