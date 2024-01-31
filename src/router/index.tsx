import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Routes as RoutesConfig } from 'config';
import Offline from 'components/offline';
import LoadingSpinner from 'components/loader';
import MovieList from 'pages/movie-list';
import StickyHeader from 'components/header';
import ScrollToTop from 'components/scroll-to-top';

const FavouriteMovies = lazy(() => import('pages/favourite-movies'));
const MovieDetails = lazy(() => import('pages/movie-details'));
const PageNotFound = lazy(() => import('components/404'));

const {
  Paths: { Home, Favourites, NoPathMatch },
} = RoutesConfig;

function Router() {
  return (
    <BrowserRouter>
      <StickyHeader />
      <Offline />
      <Suspense fallback={<LoadingSpinner />}>
        <RouterWrapper>
          <Routes>
            <Route path={Home}>
              <Route index element={<MovieList />} />
              <Route path=':id' element={<MovieDetails />} />
            </Route>
            <Route path={Favourites} element={<FavouriteMovies />} />
            <Route path={NoPathMatch} element={<PageNotFound />} />
          </Routes>
        </RouterWrapper>
      </Suspense>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default Router;

const RouterWrapper = styled.div`
  padding: 10px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
