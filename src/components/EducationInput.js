import React from 'react';

function EducationInput(props) {

    const {name, years, onSchoolChange, onDelete} = props;

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete();
    }

    const handleChange = (type, value) => {
        onSchoolChange({name, years, [type]: value});
    }

    return (
        <form>
            <label>
                School: 
                <input type='text' value={name} onChange={(e) => handleChange('name', e.target.value)}/>
            </label>
            <label>
                Years:
                <input type='text' value={years} onChange={(e) => handleChange('years', e.target.value)}/>
            </label>
            <button onClick={handleDelete}>X</button>
        </form> 
    )
}

export default EducationInput;