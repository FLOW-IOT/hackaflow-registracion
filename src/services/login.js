import axios from 'axios';

const BASE_URL = 'https://hackaflow.herokuapp.com/api/v1/';

const client = axios.create({
  BASE_URL,
});

export const getCode = async () => {
  try {
    return await client.request({
      url: `${BASE_URL}/code?macAddress=00:1e:c2:9e:28:6b`,
      method: 'GET',
    });
  } catch (error) {
    console.log(error);
  }
};

export const validateLogin = async (code) => {
  try {
    return await client.request({
      url: `${BASE_URL}/credentials?code=${code}&macAddress=00:1e:c2:9e:28:6b`,
      method: 'GET',
    });
  } catch (error) {
    console.log(error);
  }
};
