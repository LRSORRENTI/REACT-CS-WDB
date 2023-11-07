import { useState, useEffect} from 'react'
import './ToDoList.css'
import List from '@mui/material/List';
import ToDoItem from '../ToDo/ToDoItem';
import ToDoForm from '../ToDoForm/ToDoForm';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if(!data) {
       // If there are no todos return an empty array
        return [];
    } else {
       // else if there is data in localStorage return 
       // that array of data
        return data;
    }
}

export default function ToDoList(){
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

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
                    id: crypto.randomUUID(), 
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
