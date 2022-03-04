import React from 'react';

function EducationInput(props) {
    return (
        <form>
            <label>
                School: 
                <input type='text' value={props.schoolName} onChange={props.onSchoolNameChange}/>
            </label>
            <label>
                Years:
                <input type='text' value={props.schoolYears} onChange={props.onSchoolYearsChange}/>
            </label>
            <button onClick={props.onDelete}>X</button>
        </form> 
    )
}

export default EducationInput;