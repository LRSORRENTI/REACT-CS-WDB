import { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';
import BasicAccordion from '../components/Accordion';
import RatingDemo from '../components/rating/RatingDemo';
import FormDemo from '../components/MUI-FORM/FormDemo';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <FormDemo/>
    <RatingDemo/>
    <BasicAccordion/>
   <Button size="large" onClick={() => alert("hi")} variant="contained">Contained</Button>
   <Button size="medium" color="error" onClick={() => alert("hi")} variant="contained">Contained</Button>
   <Button size="small" color="success" onClick={() => alert("hi")} variant="contained">Contained</Button>
   <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
    </Stack>
    
    </>
  )
}

export default App
