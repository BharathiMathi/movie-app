import styled from 'styled-components';
import Router from 'router';
import { Provider } from 'react-redux';
import { FavouritesProvider, store } from 'state';
import ErrorBoundary from 'error-handler';
import { Toaster } from 'sonner';

function App() {
  return (
    <Container>
      <ErrorBoundary>
        <Toaster richColors position='top-right' />
        <Provider store={store}>
          <FavouritesProvider>
            <Router />
          </FavouritesProvider>
        </Provider>
      </ErrorBoundary>
    </Container>
  );
}

export default App;

const Container = styled.div``;
