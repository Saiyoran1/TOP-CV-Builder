import React, {useState} from 'react';
import EducationInput from './EducationInput';

function EducationBuilder(props) {

    const [nextID, setNextID] = useState(0);
    const addNewEducation = () => {
        props.education.changeEducation([...props.education.education, {name: '', years: '', id: nextID}]);
        setNextID(nextID + 1);
    }

    const deleteEducation = (id, e) => {
        e.preventDefault();
        for (let i = 0; i < props.education.education.length; i++) {
            if (props.education.education[i].id === id) {
                const beforeEducation = props.education.education.slice(0, i);
                const newEducation = beforeEducation.concat(props.education.education.slice(i + 1, props.education.education.length));
                props.education.changeEducation(newEducation);
            }
        }
    }

    const handleSchoolNameChange = (id, newName) => {
        for (let i = 0; i < props.education.education.length; i++) {
            if (props.education.education[i].id === id) {
                const beforeEducation = props.education.education.slice(0, i);
                beforeEducation.push({...props.education.education[i], name: newName});
                const newEducation = beforeEducation.concat(props.education.education.slice(i + 1, props.education.education.length));
                props.education.changeEducation(newEducation);
            }
        }
    }

    const handleSchoolYearsChange = (id, newYears) => {
        for (let i = 0; i < props.education.education.length; i++) {
            if (props.education.education[i].id === id) {
                const beforeEducation = props.education.education.slice(0, i);
                beforeEducation.push({...props.education.education[i], years: newYears});
                const newEducation = beforeEducation.concat(props.education.education.slice(i + 1, props.education.education.length));
                props.education.changeEducation(newEducation);
            }
        }
    }

    return (
        <div>
            {props.education.education.map((ed) => {
                return (<EducationInput key={ed.id}
                    schoolName={ed.name} 
                    schoolYears={ed.years}
                    onSchoolNameChange={(e) => handleSchoolNameChange(ed.id, e.target.value)}
                    onSchoolYearsChange={(e) => handleSchoolYearsChange(ed.id, e.target.value)}
                    onDelete={(e) => deleteEducation(ed.id, e)}
                    />)
            })}
            <button onClick={addNewEducation}>Add Education</button>
        </div>
    )
}

export default EducationBuilder;