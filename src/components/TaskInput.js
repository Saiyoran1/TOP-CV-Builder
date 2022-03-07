import React from 'react';

function TaskInput(props) {
    const {description, onDelete, onChange} = props;

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete();
    }

    return (
        <li>
            <label>
                Description:
                <input type='text' value={description} onChange={(e) => onChange(e.target.value)}/>
            </label>
            <button onClick={handleDelete}>X</button>
        </li>
    )
}

export default TaskInput;