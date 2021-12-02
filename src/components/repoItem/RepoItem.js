import { Link } from 'react-router-dom';
import LanguageItem from '../languageItem/LanguageItem';
import './repoItem.css';

const RepoItem = ({ repo }) => {
  console.log(repo);
  return (
    <div className="repo">
      <Link to={`/${repo.full_name}`}>
        <p className="repo-title">{repo.name}</p>
      </Link>
      <div className="repo-content">
        <div className="repo-description">
          {repo.description ? repo.description : 'No description provided'}
        </div>
        <div className="repo-language">
          <div className="repo-language-title">Languages:</div>
          <div className="repo-language-items">
            <LanguageItem language={repo.language} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
