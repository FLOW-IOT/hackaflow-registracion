import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { getCode, validateLogin } from '../services/login';
import deepEqual from '../utils/deepEqualObject';

export function LoginHook(mac) {
  const [code, setCode] = useState(null);

  useEffect(() => {
    async function getFirstCode() {
      const res = await getCode(mac);
      if (res.status === 200) {
        const { data } = res;
        if (data) setCode(data.code);
      }
    }
    getFirstCode();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return code;
}

let time = null;
const seconds = 10000;

function isValidLoginData(loginData) {
  return Boolean(Object.keys(loginData).length);
}

export function ConcurrencyLoginHook(code, mac) {
  const history = useHistory();
  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    if (isValidLoginData(loginData)) {
      setTimeout(() => {
        history.push('/success');
      }, 2000);
      console.log(loginData);
    }

    return () => {
      clearInterval(time);
    };
  }, [history, loginData]);

  useInterval(() => {
    async function getData() {
      const data = await validateLogin(code, mac);
      if (data.status === 200) {
        if (!deepEqual(data, loginData)) setLoginData(data);
      }
    }
    getData();
  }, seconds);

  return isValidLoginData(loginData);
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
