import React from "react";

function Form() {
 const[med, setMed] = React.useState({name:"", address:"",city:"",state:"",zipcode:"",phone:""})
 function handleChange(event) {
    return formData(function prevData() {
     return {
        ...prevData,
        [event.target.name]:event.target.value
     }
    })
  }
    return(
     <div>
       <div className="form">
       <form>
            <input
            type="text"
            name="name"
            id="formName"
            placeholder="Name"
            value={med.name}
            onChange={handleChange}
            />
             <input
            type="text"
            name="address"
            id="formName"
            placeholder="Address"
            value={med.address}
            onChange={handleChange}
            />
             <input
            type="text"
            name="city"
            id="formCity"
            placeholder="City"
            value={med.city}
            onChange={handleChange}
            />
             <input
            type="text"
            name="state"
            id="formState"
            placeholder="State"
            value={med.state}
            onChange={handleChange}
            />
             <input
            type="text"
            name="zipcode"
            id="formZip"
            placeholder="Zip"
            value={med.zipcode}
            onChange={handleChange}
            />
             <input
            type="text"
            name="phone"
            id="formPhone"
            placeholder="Phone"
            value={med.phone}
            onChange={handleChange}
            />
        </form>
       </div>
     </div>
    )
}