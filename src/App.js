import { useState } from 'react';
import './App.css';
import Chart from './Components/Chart';
import Graph from './Components/Graph';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';


function App() {
  
  return (
    <>
    <Navbar/>
    <Chart/>
    <TodoList/>
    </>
  );
}

export default App;
