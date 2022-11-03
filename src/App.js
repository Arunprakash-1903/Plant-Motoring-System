import Cards from "./components/Cards"
import {db,ref,set} from "./firebase"
import './styles/main.css';


function App() {
  const change=()=>{
    set(ref(db, 'values/clicked' ), true);
    alert("Irrigating Now")
    setTimeout(()=>{
      set(ref(db, 'values/clicked' ), false);
      alert("Irrigation finished")
    },3000)
  }
  
  return (
<div className="app">
      <img className='image' src="plant.png" alt="" />
      <Cards/>
      <button className="btn" onClick={change}>Irrigate</button>
      </div> 
  );
}

export default App;
