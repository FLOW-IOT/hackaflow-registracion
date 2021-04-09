import { useState, useEffect, useRef } from 'react';
import { getCode, validateLogin } from '../services/login';
import deepEqual from '../utils/deepEqualObject';

export function LoginHook() {
  const [code, setCode] = useState(null);

  useEffect(() => {
    async function getFirstCode() {
      const res = await getCode();
      const { data } = res;
      setCode(data.code);
    }
    getFirstCode();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return code;
}

let time = null;
const seconds = 20000;

function isValidLoginData(loginData) {
  return Boolean(Object.keys(loginData).length);
}

export function ConcurrencyLoginHook(code) {
  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    if (isValidLoginData(loginData)) {
      console.log(loginData);
    }

    return () => {
      clearInterval(time);
    };
  }, [loginData]);

  useInterval(() => {
    async function getData() {
      const data = await validateLogin(code);
      if (!deepEqual(data, loginData)) setLoginData(data);
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
