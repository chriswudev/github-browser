import Repo from '../repoItem/RepoItem';
import './searchResult.css';

const SearchResult = ({ repos }) => {
  return (
    <div className="search-result">
      {repos.length ? (
        repos.map((repo) => <Repo repo={repo} key={repo.node_id} />)
      ) : (
        <div className="search-no-result">No repos found!</div>
      )}
    </div>
  );
};

export default SearchResult;
