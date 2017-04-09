import API from 'api';

export const TEST_API = 'TEST_API';

const { testApiWrapped } = API;

export const testApi = () => {
  const request = testApiWrapped();

  return {
    type: TEST_API,
    payload: request
  };
};
