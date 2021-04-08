import logo from './assets/logo.svg';
import VerificationCode from './components/VerificationCode';

function App() {
  return (
    <div className='bg-black h-screen text-white px-20'>
      <div class='flex justify-center py-10'>
        <img src={logo} alt='logo'></img>
      </div>
      <div class='flex-colgrid grid-cols-1 gap-4 py-10'>
        <p className='text-center  text-4xl font-sans'>
          Inicia sesion desde tu computadora o dispositvo movil
        </p>
      </div>
      <div class='grid grid-cols-2 gap-4 '>
        <p className='text-2xl'>
          Paso 1:
          <p className='text-xl px-10'>
            Escanea el codigo QR o ingresa desde la web
          </p>
        </p>
        <p className=''>web.flow.com.ar/micuenta/login</p>
      </div>
      <div class='grid grid-cols-2 gap-4'>
        <p className='text-2xl'>
          Paso 2:
          <p className='text-xl px-10'>Ingresa el siguiente codigo:</p>
        </p>
        <VerificationCode />
      </div>
    </div>
  );
}

export default App;
