import { useState } from 'react';
import MovieList from './movie-list';
import SearchBar from 'components/search-input';
import styled from 'styled-components';

const Index = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <>
      <SearchBarWrapper>
        <SearchBar onSearch={handleSearch} />
      </SearchBarWrapper>
      <MovieList searchText={search} />
    </>
  );
};

export default Index;

const SearchBarWrapper = styled.div`
  margin-top: 2rem;

  @media (max-width: 640px) {
    margin-top: 1rem;
  }
`;
