import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
const url=(path)=>{
  return process.env.NODE_ENV === "development"? `http://localhost:1234${path}`:path;
}

function App() {
  const [data,setData] = useState({});
  useEffect(()=>{
    axios.get(url("/api"))
    .then((res)=>{
      setData(res.data);
    })
    .catch((err)=>{
      console.log({err});
    });
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(data)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
