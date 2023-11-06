import { Slider, TextField, Box, AppBar } from "@mui/material"
import './Form-Demo.css'
import { useState } from "react"

export default function FormDemo() {
    const [value, setValue] = useState("");
    const [volume, setVolume] = useState(50);

    const updateValue = (event) => {
        setValue(event.target.value)
    }

    const adjustSlider = (event, newValue) => {
        setVolume(newValue)
    }

    return (

        <Box sx={{
            border: "1px solid navy",
            p: 4,
            backgroundColor: "peachpuff",
            borderRadius: "5%",
            flexGrow: 1        }}>
            <AppBar/>
            <h3>Volume is: {volume}</h3>
            <Slider value={volume} 
                    onChange={adjustSlider}
                    aria-label="Volume"/>
            <h3>Value is: {value}</h3>
            <TextField id="outlined-basic" 
                       placeholder="Enter a name"
                       label="name"
                       variant="outlined"
                       value={value}
                       onChange={updateValue}/>
        </Box>
    )
}