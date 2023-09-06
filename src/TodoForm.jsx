import ListItem from '@mui/material/ListItem';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import Create from '@mui/icons-material/Create';


export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField id="add-todo" label="Add Todo" variant="standard" onChange={handleChange} value={text}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="create todo item"
                                    edge="end"
                                >
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                    }} />
            </form>
        </ListItem>
    )
}
