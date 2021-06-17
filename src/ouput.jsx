import { useState } from "react";

const Output = (props) => {
    let [keysArray, setKeysArray] = useState([]);
    let [valuesArray, setValuesArray] = useState([]);
    const convertPropsToVariables = () => {
        setKeysArray(props.keysArray);
        console.log(keysArray);

        setValuesArray(props.valuesArray);
        console.log(valuesArray);
    };

    let auditResultsObject = {};
    const combine = () => {
        keysArray.forEach((element, i) => auditResultsObject[element] = valuesArray[i]);
        console.log(auditResultsObject);
    };

   let [objectKeys, setObjectKeys] = useState([])
   let [objectValues, setObjectValues] = useState([])
    const values = () => {
        setObjectKeys(Object.keys(auditResultsObject));
        setObjectValues(Object.values(auditResultsObject));
        
        return {objectKeys, objectValues};
    };

    const Test = ()=> {
        convertPropsToVariables();
        combine();
        values();
    };

        return (
            <div className='customerDetails'>
                <span>A. CUSTOMER DETAILS</span>
                <div className='keys'>
                    {objectKeys.map((item, index) => {
                        return (
                            <div key={`div-${index}`}>
                                <p key={index}>{`${item} :`}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="values">
                    {objectValues.map((item, index) => {
                        return (
                            <div key={`div-${index}`}>
                                <p key={index}>{item}</p>
                            </div>
                        )
                    })}
                </div>
                <button onClick={Test}>Test</button>
                {/* <button onClick={combine}>com</button> */}
            </div>
        );
}


export default Output;