import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { store as Store } from 'state';
import { useMovieDetails } from 'hooks';
import { PropsWithChildren } from 'react';

// Mock fetchMovieDetails
jest.mock('state', () => ({
  ...jest.requireActual('state'),
  fetchMovieDetails: jest.fn(),
}));

describe('useMovieDetails', () => {
  const store = Store;

  const fetchMovieDetails = require('state').fetchMovieDetails;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches fetchMovieDetails action on mount', () => {
    renderHook(() => useMovieDetails('tt1'), {
      wrapper: ({ children }: PropsWithChildren<{}>) => (
        <Provider store={store}>{children}</Provider>
      ),
    });

    expect(fetchMovieDetails).toHaveBeenCalledWith(`&i=tt1`);
  });

  it('does not dispatch fetchMovieDetails action if id is undefined', () => {
    renderHook(() => useMovieDetails(undefined), {
      wrapper: ({ children }: PropsWithChildren<{}>) => (
        <Provider store={store}>{children}</Provider>
      ),
    });

    expect(fetchMovieDetails).not.toHaveBeenCalled();
  });
});
