import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch, fetchMovieDetails } from 'state';

export const useMovieDetails = (id: string | undefined) => {
  const dispatch = useDispatch<AppDispatch>();
  const { movieDetails, status, error } = useSelector(
    (state: RootState) => state.movie
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(`&i=${id}`));
    }
  }, [dispatch, id]);

  return { movieDetails, status, error };
};