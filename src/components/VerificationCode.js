import { useState, useEffect } from 'react';

const VerificationCode = () => {
  const [code, setCode] = useState('');

  const generateCode = () => {
    const randomChars = Math.random()
      .toString(36)
      .toUpperCase()
      .substring(2, 6);

    setCode(randomChars);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      generateCode();
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        color: '#57dfb7',
        fontSize: '35px',
        fontWeight: 'bold',
        letterSpacing: '1.3px',
      }}
    >
      {code}
    </div>
  );
};

export default VerificationCode;
