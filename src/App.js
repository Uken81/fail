import './App.css';
import { useState } from "react";
import Forms from './Forms';
import Output from './ouput';
import Tit from './ouput';

function App() {
  const [keysArray, setKeyArray] = useState([]);
  const [valuesArray, setValuesArray] = useState([]);
  const [func, setFunc] = useState();

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
    //See if you can reuse keys instead of creating formValues
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

  const Test = ()=> {
    console.log('test');
  }

  return (
    <div className="App">
      <Forms />
      <Output keysArray={keysArray} valuesArray={valuesArray} cka={createKeysArray} cva={createValuesArray} test={Test}/>
     
    </div>
  );
}


export default App;
