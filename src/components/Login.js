import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    //mandamo toda la data al back asi re lindo
  };
  console.log("email", email);
  return (
    <>
      HOLA ESTO ES FLOW QUERES ENTRAR MIRA:
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSubmit}> ENTRAR CON TODA VIOLENCIA</button>
    </>
  );
};

export default Login;
