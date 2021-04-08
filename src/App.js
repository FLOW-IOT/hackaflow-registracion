import logo from "./assets/logo.svg";
import QRCode from "./components/QRCode";
import VerificationCode from "./components/VerificationCode";

function App() {
  return (
    <div className="h-screen bg-black text-white px-20">
      <div class="flex justify-center py-10">
        <img src={logo} alt="logo"></img>
      </div>
      <p className="text-center text-5xl font-sans">
        Inicia sesion desde tu computadora o dispositivo movil
      </p>
      <div className="flex flex-row justify-around">
        <div className="">
          <div class="py-10">
            <p className="text-4xl">Paso 1: </p>
            <p className="py-5 text-2xl pl-10">
              Escanea el codigo QR o ingresa desde la web
            </p>
            <p className="px-20 text-2xl font-lightbold">
              https://portal-registracion-hackaflow.netlify.app/
            </p>
          </div>
          <div class="">
            <p className="text-4xl flex flex-col justify-center">
              Paso 2:
              <p className="py-5 text-2xl pl-10">
                Ingresa el siguiente codigo:
              </p>
            </p>
            <div className="pl-20">
              <VerificationCode />
            </div>
          </div>
        </div>
        <div className="w-1/4 pt-20 self-center">
          <QRCode />
        </div>
      </div>
    </div>
  );
}

export default App;
