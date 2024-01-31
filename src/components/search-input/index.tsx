import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useDebounce } from 'hooks';
import { GUITexts } from 'config';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce(search.trim(), 500);

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <SearchBarWrapper>
      <SearchInput
        type='text'
        name='search'
        placeholder={GUITexts.SearchBoxPlaceHolder}
        value={search}
        onChange={handleInputChange}
        autoComplete='off'
      />
      <SearchButton>
        {search ? (
          <FaTimes onClick={() => setSearch('')} title='close' />
        ) : (
          <SearchIcon title='search' />
        )}
      </SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: auto;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  padding-right: 40px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchIcon = styled(FaSearch)`
  color: #333;
`;
