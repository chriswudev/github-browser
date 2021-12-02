import { useState } from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import Loading from '../components/loading/Loading';
import { fetchRepos } from '../utils/api';

const Search = () => {
  const [repos, setRepos] = useState(null);
  const [searchKey, setSearchKey] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSearch = () => {
    const trimmedSearchKey = searchKey.trim();
    if (trimmedSearchKey) {
      setLoading(true);
      fetchRepos(trimmedSearchKey).then((result) => {
        setLoading(false);
        setRepos(result);
      });
    }
  };

  return (
    <div className="search">
      <SearchBar onChange={setSearchKey} onSearch={handleSearch} />
      {loading ? <Loading /> : repos ? <SearchResult repos={repos} /> : null}
    </div>
  );
};

export default Search;
