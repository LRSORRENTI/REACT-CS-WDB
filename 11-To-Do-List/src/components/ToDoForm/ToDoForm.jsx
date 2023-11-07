import { TextField, InputAdornment, IconButton, ListItem } from '@mui/material';
import Create from '@mui/icons-material/Create';
import './ToDoForm.css';
import { useState } from 'react';


export default function ToDoForm({addTodo}){

    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form action="submit" onSubmit={handleSubmit}>
            <TextField id='outlined-basic'
                       label="Add To Do"
                       variant='outlined'
                       onChange={handleChange}
                       value={text}
                       InputProps = {{
                         endAdornment: (
                         <InputAdornment position="end">
                          <IconButton
                            aria-label="create To Do"
                            edge="end"
                            onClick={handleSubmit}>
                           <Create/>
                          </IconButton>
                        </InputAdornment>
                         ),
                       }}
                    />
                </form>
        </ListItem>
    );
};

