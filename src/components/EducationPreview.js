import React from 'react';

function EducationPreview(props) {

    return (
        <div>
            <h2>Education</h2>
            <ul>
                {props.education.education.map((ed) => <li key={ed.id}><p>{ed.name}</p><p>{ed.years}</p></li>)}
            </ul>
        </div>
    )
}

export default EducationPreview;