// We'll make a bit of state to keep track of 
// what keypresses the user enters into the form :

import { useState } from "react"

export default function UsernameForm() {
    // The event we'll use is onChange, so 
    // when any change occurs inside the form,
    // like a new key press, it will call a function
    // we'll define called updateUserName

const [userName, setUsername] = useState("Luke");

const updateUserName = (event) => {
    const updateInput = event.target.value;
    setUsername(updateInput)
}
    return (
        <div>
            <label htmlFor="username">Enter a username</label>
            <input 
            id="username"
            type="text"
            placeholder="username" 
            value={userName}
            onChange={updateUserName}/>
            <button>Submit</button>
        </div>
    )
}