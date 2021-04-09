import QRCode from 'qrcode.react';
import Modal from '../components/Modal';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { LoginHook, ConcurrencyLoginHook } from '../hooks/LoginHook';

const mac = Math.floor(Math.random() * 90000) + 10000;

const STVScreen = () => {
  const baseURL = 'https://web.flow.com.ar/micuenta/login';
  const code = LoginHook(mac);
  const showModal = ConcurrencyLoginHook(code, mac);
  return (
    <div className='h-screen bg-black text-white px-20'>
      <div className='flex justify-center py-10'>
        <img src={logo} alt='logo'></img>
      </div>
      <p className='text-center text-5xl font-sans'>
        Inicia sesion desde tu computadora o dispositivo movil
      </p>
      <div className='flex flex-row justify-evenly'>
        <div className=''>
          <div className='py-10'>
            <p className='text-4xl'>Paso 1: </p>
            <p className='py-5 text-2xl pl-10'>
              Escanea el codigo QR o ingresa desde la web
            </p>
            <p className='px-20 text-2xl font-lightbold'>
              {code && (
                <Link
                  to={{
                    pathname: `/portal`,
                    query: { code },
                  }}
                >
                  web.flow.com.ar/micuenta/login
                </Link>
              )}
            </p>
          </div>
          <div className=''>
            <p className='text-4xl flex flex-col justify-center'>
              Paso 2:
              <p className='py-5 text-2xl pl-10'>
                Ingresa el siguiente codigo:
              </p>
            </p>
            <div className='pl-20 text-4xl text-primary font-bold tracking-wider'>
              {code}
            </div>
          </div>
        </div>
        <div className='mt-20 self-center border-4 border-white'>
          <QRCode value={`${baseURL}/${code}`} size={300} />
        </div>
      </div>
      <Modal showModal={showModal} />
    </div>
  );
};

export default STVScreen;
