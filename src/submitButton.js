

const SubmitButton = (props)=> {
 const handleSubmit = props.handleSubmit;

 return (
     <button onClick={handleSubmit}>Submit</button>
 )
}


export default SubmitButton;