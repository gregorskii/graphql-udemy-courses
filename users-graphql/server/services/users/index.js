import axios from 'axios';

export const getUsersWrapped = () => {
  return axios.get('http://localhost:3000/users')
    .then((response) => {
      return response.data;
    })
  ;
};

export const getUserByIdWrapped = (id) => {
  return axios.get(`http://localhost:3000/users/${id}`)
    .then((response) => {
      return response.data;
    })
  ;
};

export const createUserWrapped = ({ firstName, age }) => {
  return axios.post('http://localhost:3000/users', { firstName, age })
    .then((response) => {
      return response.data;
    })
  ;
};

export const deleteUserWrapped = (id) => {
  return axios.delete(`http://localhost:3000/users/${id}`)
    .then((response) => {
      return response.data;
    })
  ;
};

export const editUserWrapped = (args) => {
  return axios.patch(`http://localhost:3000/users/${args.id}`, {
    id: args.id,
    firstName: args.firstName,
    age: args.age,
    companyId: args.companyId
  }).then((response) => {
    return response.data;
  });
};
