import { useState } from 'react';
import './App.css';
import Chart from './Components/Chart';
import Navbar from './Components/Navbar';


function App() {
  const [totaltime, setTotaltime] = useState(0)
  return (
    <>
    <Navbar/>
    <Chart time={totaltime}/>
    </>
  );
}

export default App;
