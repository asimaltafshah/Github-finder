import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const githubaxios = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token${GITHUB_TOKEN}` },
});
// Get search results
export const SearchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await githubaxios.get(`/search/users?${params}`);
  return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    githubaxios.get(`/users/${login}`),
    githubaxios.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
