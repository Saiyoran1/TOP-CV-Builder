import React, {useState} from 'react';
import EducationInput from './EducationInput';

function EducationBuilder(props) {

    const {education, changeEducation} = props.education;
    const [nextID, setNextID] = useState(0);

    const addNewEducation = () => {
        changeEducation([...education, {name: '', years: '', id: nextID}]);
        setNextID(nextID + 1);
    }

    const deleteEducation = (id) => {
        changeEducation(education.filter((ed) => ed.id !== id));
    }

    const handleSchoolChange = (id, schoolInfo) => {
        const newInfo = {...schoolInfo, id};
        for (let i = 0; i < education.length; i++) {
            if (education[i].id === id) {
                const beforeEducation = education.slice(0, i);
                beforeEducation.push(newInfo);
                const newEducation = beforeEducation.concat(education.slice(i + 1, education.length));
                changeEducation(newEducation);
            }
        }
    }

    return (
        <div>
            {education.map((ed) => {
                return (<EducationInput
                    name={ed.name} 
                    years={ed.years}
                    onSchoolChange={(info) => handleSchoolChange(ed.id, info)}
                    onDelete={() => deleteEducation(ed.id)}
                    key={ed.id} />
                )}
            )}
            <button onClick={addNewEducation}>Add Education</button>
        </div>
    )
}

export default EducationBuilder;