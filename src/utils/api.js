const fetchRepos = async (username) => {
  // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
  const url = `https://api.github.com/users/${username}/repos?per_page=100`;
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });
  if (res.status === 200) {
    const result = await res.json();
    return result;
  }
  return [];
};

const fetchRepoDetails = async (username, repository) => {
  const url = `https://api.github.com/repos/${username}/${repository}`;
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });
  if (res.status === 200) {
    const result = await res.json();
    return result;
  }
  return [];
};

export { fetchRepos, fetchRepoDetails };
