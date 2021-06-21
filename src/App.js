import './App.css';
import { useState } from "react";
import Forms from './Forms';
import Output from './ouput';

function App() {
  const [keysArray, setKeyArray] = useState([]);
  const [valuesArray, setValuesArray] = useState([]);

  const createKeysArray = () => {
    let keys = Array.from(document.getElementsByClassName('input-field'));
    
    console.log(keys);

    keys.forEach((function (entry) {
      keysArray.push(entry.dataset.tags);
    }));
    console.log(keys);
    console.log(keysArray);

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
let arr = [];
  const Test = ()=> {
    let tid = document.getElementsByTagName('input');
    
    console.log(tid);
   
    

    // for(let i = 0; i < tid.length; i++) {
    //   arr.push(tid[i].dataset.tags)
    // }
  console.log(arr);
  
  }

  function wtw() {
    console.log('wtw???');
  }
  
  return (
    <div className="App">
      <Forms />
      <button onClick={Test}>test</button>
      <Output 
      keysArray={keysArray} 
      valuesArray={valuesArray} 
      createKeysArray={createKeysArray} 
      createValuesArray={createValuesArray}
      />
    
    </div>
  );
}


export default App;
