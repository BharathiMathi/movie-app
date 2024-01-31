export const errorHandler = (error: unknown) => {
  if (error instanceof Error) {
    if (error.name === 'AbortError') {
      console.error('Fetch request has been aborted');
    } else if (error.name === 'TypeError') {
      console.error('Network error or CORS issue');
    } else if (error.message.startsWith('HTTP error')) {
      console.error(`HTTP error: ${error.message}`);
    } else {
      console.error('An unexpected error occurred');
    }
  } else {
    console.error('Non-error thrown: ', error);
  }
};
