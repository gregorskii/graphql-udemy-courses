import axios from 'axios';

const apiUrl = process.env.API_URL;

export const testApiWrapped = () => {
  return axios.get(apiUrl);
};
