import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RepoDetails from '../components/repoDetails/RepoDetails';
import Loading from '../components/loading/Loading';
import { fetchRepoDetails } from '../utils/api';

const Repository = () => {
  const [repoDetails, setRepoDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const { username, repository } = params;
    setLoading(true);
    fetchRepoDetails(username, repository)
      .then((details) => {
        console.log(details);
        setLoading(false);
        setRepoDetails(details);
      })
      .catch(() => {
        setLoading(false);
        setRepoDetails(null);
      });
  }, [params]);

  return (
    <div className="repository">
      {loading ? <Loading /> : <RepoDetails repoDetails={repoDetails} />}
    </div>
  );
};

export default Repository;
