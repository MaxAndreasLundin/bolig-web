'use client';
import { createContext, useContext, useState } from 'react';
import { ResidenceListProps } from '../components/helpers/ResidenceList';

interface SearchContextProps {
  searchResult: ResidenceListProps[];
  setSearchResult: (results: ResidenceListProps[]) => void;
}

const SearchContext = createContext<SearchContextProps>({
  searchResult: [],
  setSearchResult: () => {},
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [searchResult, setSearchResult] = useState<ResidenceListProps[]>([]);

  return (
    <SearchContext.Provider value={{ searchResult, setSearchResult }}>
      {children}
    </SearchContext.Provider>
  );
};
