import { useState } from 'react'
import './ToDoList.css'
import List from '@mui/material/List';
import ToDoItem from '../ToDo/ToDoItem';
import ToDoForm from '../ToDoForm/ToDoForm';

const initialToDos = [
{id: 1, text: "Walk Dog", completed: false},
{id: 2, text: "Empty Trash", completed: false},
{id: 3, text: "Wash Dishes", completed: true},
{id: 4, text: "Clean Bathroom", completed: false}
];

export default function ToDoList(){
    const [todos, setTodos] = useState(initialToDos);

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if(todo.id === id){
                    // So if the todo id matches the id passd in 
                    // we return a copy using spread, and also 
                    // change the completed value to be the opposite 
                    // using bang operator, so when you press it will 
                    // toggle back and forth
                    return {...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos(prevTodos => {
          return [...prevTodos,
                   {text: text, 
                    id: 8, 
                    completed: false}]
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => {
                return <ToDoItem 
                        todo={todo} 
                        key={todo.id}
                        remove={removeTodo}
                        toggle={() => toggleTodo(todo.id)}
                        />
                 
            })}
            <ToDoForm addTodo={addTodo}/>
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
