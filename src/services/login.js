import axios from 'axios';

const BASE_URL = 'https://hackaflow.herokuapp.com/api/v1';

const client = axios.create({
  BASE_URL,
});

function handleError(error) {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    return error.response;
  } else if (error.request) {
    // The request was made but no response was received

    console.log(error.request);
    return error.request;
  } else {
    console.log('Error', error.message);
  }
}

export const getCode = async (mac) => {
  try {
    return await client.request({
      url: `${BASE_URL}/code?mac=${mac}`,
      method: 'GET',
    });
  } catch (error) {
    return handleError(error);
  }
};

export const validateLogin = async (code, mac) => {
  try {
    return await client.request({
      url: `${BASE_URL}/credentials?code=${code}&mac=${mac}}`,
      method: 'GET',
    });
  } catch (error) {
    return handleError(error);
  }
};
