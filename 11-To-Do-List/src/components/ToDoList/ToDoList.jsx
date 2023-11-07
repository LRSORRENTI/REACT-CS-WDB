import { useState } from 'react'
import './ToDoList.css'
import List from '@mui/material/List';
import ToDoItem from '../ToDo/ToDoItem';

const initialToDos = [
{id: 1, text: "Walk Dog", completed: false},
{id: 2, text: "Empty Trash", completed: false},
{id: 3, text: "Wash Dishes", completed: true},
{id: 4, text: "Clean Bathroom", completed: false}
];

export default function ToDoList(){
    // [todo, AddToDo] = useState({id: 1, 
    //                             text: "Walk Dog", 
    //                             completed: false})
    const [todos, setTodos] = useState(initialToDos);
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => {
                return <ToDoItem todo={todo} key={todo.id}/>
                 
            })}
        </List>
    )
}



// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//         return (
//           <ListItem
//             key={value}
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments">
//                 <CommentIcon />
//               </IconButton>
//             }
//             disablePadding
//           >
//             <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   checked={checked.indexOf(value) !== -1}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }
