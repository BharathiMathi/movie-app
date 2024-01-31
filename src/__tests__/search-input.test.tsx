import { render, fireEvent, act } from '@testing-library/react';
import SearchBar from 'components/search-input';
import { GUITexts } from 'config';

describe('SearchBar component', () => {
  it('should show search icon when search value not available', async () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText, getByTitle } = render(
      <SearchBar onSearch={onSearch} />
    );

    const input = getByPlaceholderText(GUITexts.SearchBoxPlaceHolder);
    fireEvent.change(input, { target: { value: '' } });

    const searchIcon = getByTitle('search');

    expect(searchIcon).toBeInTheDocument();
  });

  it('should call onSearch when search value changes', async () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onSearch={onSearch} />);

    const input = getByPlaceholderText(GUITexts.SearchBoxPlaceHolder);
    fireEvent.change(input, { target: { value: 'test' } });

    await act(() => new Promise((resolve) => setTimeout(resolve, 500)));

    expect(onSearch).toHaveBeenCalledWith('test');
  });

  it('should clear the search input when clear button is clicked', async () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText, getByTitle } = render(
      <SearchBar onSearch={onSearch} />
    );

    const input = getByPlaceholderText(
      GUITexts.SearchBoxPlaceHolder
    ) as HTMLInputElement;

    await act(() => new Promise((resolve) => setTimeout(resolve, 500)));

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(getByTitle('close'));

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(input.value).toBe('');
  });
});
