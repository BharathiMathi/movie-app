import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, fetchMovies, resetMovies } from 'state';

export const useMovies = (searchText: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, status, error, totalResults } = useSelector(
    (state: RootState) => state.movie
  );
  const [pageNo, setPageNo] = useState<number>(1);
  const prevSearchTextRef = useRef(searchText);

  useEffect(() => {
    if (searchText !== '') {
      dispatch(fetchMovies(`&s=${searchText}&page=${pageNo}`));
    }
  }, [dispatch, searchText, pageNo]);

  useEffect(() => {
    if (prevSearchTextRef.current !== searchText) {
      dispatch(resetMovies());
      setPageNo(1);
    }
    prevSearchTextRef.current = searchText;
  }, [searchText, dispatch]);

  return { movies, status, error, totalResults, pageNo, setPageNo };
};