import Login from "./components/Login"
import Header from './components/Header'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="bg-black h-screen">
        <Header/>
        <Navbar/>
        <Login></Login>
    </div>
  );
}

export default App;
