import { useState, useEffect } from "react";
import profilesImg from "../assets/profiles.png";

const STVSuccess = () => {
  const [opacity, setOpacity] = useState("opacity-1");

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity("opacity-0");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-black text-white px-20 flex items-center justify-center">
      <div
        className={`absolute top-10 left-10 text-2xl transition transition-opacity duration-1000 ${opacity}`}
      >
        Te logueaste con exito.
      </div>
      <img src={profilesImg} alt="Imagen de Perfiles" />
    </div>
  );
};

export default STVSuccess;
