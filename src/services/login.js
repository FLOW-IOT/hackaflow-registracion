import axios from 'axios';

const BASE_URL = 'https://hackaflow.herokuapp.com/api/v1/';

const client = axios.create({
  BASE_URL,
});

export const getCode = async () => {
  try {
    return await client.request({
      url: `${BASE_URL}/code?macAddress`,
      method: 'GET',
    });
  } catch (error) {
    console.log(error);
  }
};

export const validateLogin = async (code) => {
  try {
    return await client.request({
      url: `${BASE_URL}/credentials?code=${code}`,
      method: 'GET',
    });
  } catch (error) {
    console.log(error);
  }
};
