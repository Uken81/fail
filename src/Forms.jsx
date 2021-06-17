const Forms = () => {
    return (  
     <div className="page1">
         <form className="customerForm" >
         <span>A. CUSTOMER DETAILS</span>
            <fieldset>
                <legend>Customer Information</legend>
                <label htmlFor="name">Name:</label>
                <input type="text" className="input-field" id="name" name="name"/><br /><br />
                <label htmlFor="address">Address:</label>
                <input type="text" className="input-field" id="address" name="address"/><br /><br />
                <label htmlFor="home-phone">Home Phone:</label>
                <input type="tel" className="input-field" id="hphone" name="hphone"/><br /><br />
                <label htmlFor="mobile-phone">Mobile:</label>
                <input type="tel" className="input-field" id="mphone" name="mphone"/><br /><br />
            </fieldset>
            <span>B. ADDRESS OF THE INSTALLATION TO BE AUDITED</span>
            <fieldset>
                <legend>Address To Audit</legend>
                <label htmlFor="install-address">Address:</label>
                <input type="text"  id="install-address" name="install-address"/><br /><br />
                <label htmlFor="age-of-installation">Estimated age of the electrical installation (years):</label>
                <input type="number"  id="age-of-installation" name="age-of-installation" min="1"/><br /><br />
                <fieldset>
                    <span>Evidence of alterations or additions:</span>
                    <label htmlFor="alterations-additions-yes">Yes: </label>
                    <input type="radio"  id="alterations-additions-yes" name="is-altered" value="yes"/>
                    <label htmlFor="alterations-additions-no">No: </label>
                    <input type="radio"  id="alterations-additions-no" name="is-altered" value="no"/><br /><br />
                    <label htmlFor="alteration-age">Estimated age (years): </label>
                    <input type="number"  id="alteration-age" name="alteration-age" min="1"/><br /><br />
                </fieldset>
                <label htmlFor="previous-audit">Date of previous Audit: (if any): </label>
                <input type="date"  id="previous-audit" name="previous-audit"/><br /><br />
            </fieldset>
            <fieldset>
                <span>C. PURPOSE OF THE REPORT</span><br /><br />
                <label htmlFor="purpose">Purpose for which this report is requested:</label><br />
                <textarea cols="35" rows="5"  id="purpose"
                    name="purpose-of-report"></textarea><br /><br />
                <span>D. EXTENT OF THE INSTALLATION AND LIMITATIONS OF THE INSPECTION AND TESTING</span><br /><br />
                <label htmlFor="extent">Extent of the electrical installation and agreed limitations, if any, on the inspection and testing:</label><br /> 
                <textarea cols="35" rows="8"  id="purpose" name="purpose-of-report"></textarea>
            </fieldset>    
         </form>
     </div>
    );
}
 
export default Forms; 