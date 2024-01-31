import { renderHook } from '@testing-library/react-hooks';
import { useFavourites } from 'hooks';

describe('useFavourites', () => {
  it('throws error when not wrapped in FavouritesProvider', () => {
    const { result } = renderHook(() => useFavourites());
    expect(result.error).toEqual(Error('useFavourites must be used within a FavouritesProvider'));
  });
});