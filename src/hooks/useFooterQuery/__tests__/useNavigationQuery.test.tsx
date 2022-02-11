import { renderHook } from '@testing-library/react-hooks';
import { useStaticQueryMock } from 'testUtils/useStaticQueryMock';

import { useFooterQueryMock } from '../__mock__/mock';
import { useFooterQuery } from '../useFooterQuery';

const {
  allGraphCmsFooter: { nodes },
} = useFooterQueryMock;

it('the useFooterQuery hook returns correct values', () => {
  useStaticQueryMock(useFooterQueryMock);

  const { result } = renderHook(() => useFooterQuery());

  // it should return correct data from static graphQL query
  expect(result.current).toEqual(nodes);
});
