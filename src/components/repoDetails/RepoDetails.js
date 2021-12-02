import './repoDetails.css';

const RepoDetails = ({ repoDetails }) => {
  if (!repoDetails) {
    return <div className="search-no-result">No repos found!</div>;
  }
  return (
    <div className="repo-details">
      <p className="repo-title">{repoDetails.name}</p>
      <div className="repo-content">
        <div className="repo-item-row">
          <span className="repo-item-label">Description: </span>
          <span className="repo-item-value">
            {repoDetails.description
              ? repoDetails.description
              : 'No description provided'}
          </span>
        </div>
        <div className="repo-item-row">
          <span className="repo-item-label">Default Branch: </span>
          <span className="repo-item-value">
            {repoDetails.default_branch}
          </span>
        </div>
        <div className="repo-item-row">
          <span className="repo-item-label">Created At: </span>
          <span className="repo-item-value">
            {repoDetails.created_at}
          </span>
        </div>
        <div className="repo-item-row">
          <span className="repo-item-label">Last Updated At: </span>
          <span className="repo-item-value">
            {repoDetails.updated_at}
          </span>
        </div>
        <div className="repo-item-row">
          <span className="repo-item-label">Watch: </span>
          <span className="repo-item-value">
            {repoDetails.subscribers_count}
          </span>
        </div>
        <div className="repo-item-row">
          <span className="repo-item-label">Star: </span>
          <span className="repo-item-value">
            {repoDetails.stargazers_count}
          </span>
        </div>
        <div className="repo-item-row">
          <span className="repo-item-label">Fork: </span>
          <span className="repo-item-value">
            {repoDetails.network_count}
          </span>
        </div>
        <div className="repo-item-row">
          <span className="repo-item-label">Topics: </span>
          <span className="repo-item-value">
            {repoDetails.topics.join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RepoDetails;
