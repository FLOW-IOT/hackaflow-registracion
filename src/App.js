import Login from "./components/Login"
import Header from './components/Header'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="bg-black h-screen">
      <div className="grid">
        <Header/>
        <Navbar/>
        <Login></Login>
      </div>
    </div>
  );
}

export default App;
