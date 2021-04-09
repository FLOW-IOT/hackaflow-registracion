import Login from './components/Login';
import Header from './components/Header';
import Navbar from './components/Navbar';
import STVScreen from './screens/STVScreen';
function App() {
  return (
    <div className='bg-black h-screen'>
      <Header />
      <Navbar />
      <Login></Login>
      <STVScreen />
    </div>
  );
}

export default App;
