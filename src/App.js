import './App.css';
import { useState } from "react";
import Forms from './Forms';
import Output from './ouput';

function App() {
  const [keysArray, setKeyArray] = useState([]);
  const [valuesArray, setValuesArray] = useState([]);

  // let keys;
  const createKeysArray = () => {
    let keys = Array.from(document.getElementsByClassName('input-field'));
    keys.forEach((function (entry) {
      keysArray.push(entry.name);
    }));
    console.log(keys);

    return keysArray;
  }

  const createValuesArray = ()=> {
    let formValues = Array.from(document.getElementsByClassName('input-field'));
    formValues.forEach((function (entry) {
      valuesArray.push(entry.value);
    }));
    return valuesArray; 
  }

  const handleSubmit = ()=> {
    createKeysArray();
    createValuesArray();
  
  }

  const con = () => {
 
    console.log(keysArray);
  }


  return (
    <div className="App">
      <Forms />
      <button className="btn btn-primary" id="name-submit"onClick={handleSubmit}>Submit</button>
      <button className="btn btn-primary" onClick={con}>Console</button>
      <Output keysArray={keysArray} valuesArray={valuesArray}/>
    </div>
  );
}


export default App;
