import './App.css';
import KanyeContainer from "./container/kanyeContainer";
import Navbar from "./navbar";
import "./Navbar.css";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <KanyeContainer/>

        {/* Spinning image in the footer */}
        <div className="spinner">
            <img src="/images/3.jpg" alt="Spinning Image" />
        </div>
    </div>
  );
}

export default App;
