import { renderHook, act } from '@testing-library/react-hooks';
import { useDebounce } from 'hooks';


jest.useFakeTimers();

test('useDebounce hook', () => {
  const { result, rerender } = renderHook(
    ({ value, delay }) => useDebounce(value, delay),
    { initialProps: { value: 'initial', delay: 500 } }
  );

  expect(result.current).toBe('initial');

  rerender({ value: 'updated', delay: 500 });
  expect(result.current).toBe('initial');

  act(() => {
    jest.runAllTimers();
  });

  expect(result.current).toBe('updated');
});