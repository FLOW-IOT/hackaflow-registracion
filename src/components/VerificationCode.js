import { useState, useEffect } from "react";

const VerificationCode = () => {
  const [code, setCode] = useState("");

  const generateCode = () => {
    const randomChars = Math.random()
      .toString(36)
      .toUpperCase()
      .substring(2, 6);

    setCode(randomChars);
  };

  useEffect(() => {
    generateCode();
  }, []);

  return (
    <div className="text-6xl text-primary font-bold tracking-wider">{code}</div>
  );
};

export default VerificationCode;
