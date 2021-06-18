import { useEffect, useState } from "react";
import SubmitButton from "./submitButton";

const Output = (props) => {
    let keysArray = props.keysArray;
    let valuesArray = props.valuesArray;
    let test = props.test;
    let cka = props.cka;
    let cva = props.cva;

    let auditResultsObject = {};
    const Combine = () => {
        keysArray.forEach((element, i) => auditResultsObject[element] = valuesArray[i]);
        console.log(auditResultsObject);

    };

    let [objectKeys, setObjectKeys] = useState([])
    let [objectValues, setObjectValues] = useState([])
    const Values = () => {
        setObjectKeys(Object.keys(auditResultsObject));
        setObjectValues(Object.values(auditResultsObject));

        return { objectKeys, objectValues };
    };

    const HandleSubmit = () => {
        cka();
        cva();
        Combine();
        Values();
    }

    // useEffect(()=> {
    //     Combine();
    // });

    // useEffect(()=> {
    //     values();
    // });

    return (
        <div className='printPage'>
            <div className="submitButton">
                <SubmitButton handleSubmit={HandleSubmit} />
            </div>
            
            <span className="sectionHeader">A. CUSTOMER DETAILS</span>
            <br />
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

            {/* <button onClick={Test}>Test</button> */}
            {/* <button onClick={Combine}>com</button> */}
        </div>
    );


}


export default Output;
