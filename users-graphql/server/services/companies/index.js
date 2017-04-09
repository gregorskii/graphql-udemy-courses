import axios from 'axios';

export const getCompaniesWrapped = () => {
  return axios.get('http://localhost:3000/companies')
    .then((response) => {
      return response.data;
    })
  ;
};

export const getCompanyByIdWrapped = (id) => {
  return axios.get(`http://localhost:3000/companies/${id}`)
    .then((response) => {
      return response.data;
    })
  ;
};

export const getUsersForCompanyIdWrapped = (id) => {
  return axios.get(`http://localhost:3000/companies/${id}/users`)
    .then((response) => {
      return response.data;
    })
  ;
};
