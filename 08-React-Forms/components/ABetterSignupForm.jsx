// The SignupForm component does work, but it's 
// clunky, usually we don't want to make a separate 
// state, and updater function for every form value,
// first name, last name, date of birth... etc, 
// maybe there's 10 form values,
// making unique state for all 10 is clunky

import { useState } from "react";
import './SignupForm.css'

// A better approach is to use an object

// So instead of making separate onChange for each 
// input, we make a single generic function. add html 
// name attribute to the jsx input element, then 
// the handler function can determine the key in 
// state to update based on event.target.name: 

export default function ABetterSignupForm () {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: ""
    });

    function handleChange(evt) {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
    
        setFormData((currData) => {
            currData[changedField] = newValue;
            return {...currData};
            // The above can take advantage of computed 
            // property names: 

            // setFormData((currData) => {
            // return {
            //          ...currData,
            //          [changedField]: newValue
            //     }
            //  })
        
            // The above does exactly the same as 
            // before but in a cleaner way
            
        });
    };
    
    const handleSubmit = () => {
        console.log(formData)
    }

    return (
        <div className="formGroup">
            <label htmlFor="firstname">First Name</label>
            <input 
                id="firstname"
                type="text"
                placeholder="First name" 
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"/>
            <label htmlFor="lastname">Last Name</label>
                <input 
                    id="lastname"
                    type="text"
                    placeholder="Last name" 
                    value={formData.lastName}
                    name="lastName"
                    onChange={handleChange}/>
            <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    type="text"
                    placeholder="Password" 
                    value={formData.password}
                    name="password"
                    onChange={handleChange}/>
            <button className="formBtn" onClick={handleSubmit}>Submit</button>
        </div>
    )
}


// With the above approach we have a single handleChange 
// function we can use for every form field, instead 
// of writing unique updater functions for each 
// individual field, we can use one!