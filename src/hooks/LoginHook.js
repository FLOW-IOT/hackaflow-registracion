import { useState, useEffect } from 'react';
import { getCode } from '../services/login';

export function LoginHook() {
  const [code, setCode] = useState(null);

  useEffect(() => {
    async function getFirstCode() {
      const res = await getCode();
      setCode(res);
    }
    getFirstCode();

    return code;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
