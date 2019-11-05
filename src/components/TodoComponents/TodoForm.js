import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newItem, setNewItem] = useState();

    const handleChange = (e) => {
        setNewItem(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addItem(newItem);
        setNewItem('')

      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                id="item"
                name="item"
                value={newItem}
                onChange={handleChange} />

                <button>Add</button>
            </form>
            
        </div>
    )
}
export default TodoForm