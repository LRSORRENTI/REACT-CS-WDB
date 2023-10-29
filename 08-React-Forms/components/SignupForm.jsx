// We'll make a bit of state to keep track of 
// what keypresses the user enters into the form :

import { useState } from "react"

export default function SignupForm() {
    // The event we'll use is onChange, so 
    // when any change occurs inside the form,
    // like a new key press, it will call a function
    // we'll define called updateUserName

const [firstName, setFirstname] = useState("");
const [lastName, setLastname] = useState("");

const updateFirstName = (event) => {
    const updateInput = event.target.value;
    setFirstname(updateInput)
}

const updateLastName = (event) => {
    const updateInput = event.target.value;
    setLastname(updateInput)
}

const handleSubmit = () => {
    console.log(firstName, lastName)
}

    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input 
            id="firstname"
            type="text"
            placeholder="First name" 
            value={firstName}
            onChange={updateFirstName}/>
             <label htmlFor="lastname">Last Name</label>
            <input 
            id="lastname"
            type="text"
            placeholder="Last name" 
            value={lastName}
            onChange={updateLastName}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}