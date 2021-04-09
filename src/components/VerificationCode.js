const VerificationCode = ({ code }) => {
  return (
    <div
      className='text-6xl font-bold tracking-wider'
      style={{
        color: '#57dfb7',
      }}
    >
      {code}
    </div>
  );
};

export default VerificationCode;
