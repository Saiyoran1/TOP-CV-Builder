import React, {useState} from 'react';
import ExperienceInput from './ExperienceInput';

function ExperienceBuilder(props) {

    const {experience, changeExperience} = props.experience;
    const [nextID, setNextID] = useState(0);

    const addNewExperience = () => {
        changeExperience([...experience, {name: '', title: '', tasks: [], dates: '', id: nextID}]);
        setNextID(nextID + 1);
    }

    const deleteExperience = (id) => {
        changeExperience(experience.filter((exp) => exp.id !== id));
    }

    const handleExperienceChange = (id, experienceInfo) => {
        const newInfo = {...experienceInfo, id};
        for (let i = 0; i < experience.length; i++) {
            if (experience[i].id === id) {
                const beforeExperience = experience.slice(0, i);
                beforeExperience.push(newInfo);
                const newExperience = beforeExperience.concat(experience.slice(i + 1, experience.length));
                changeExperience(newExperience);
            }
        }
    }

    return (
    <div>
        {experience.map((exp) => {
            return (<ExperienceInput 
                name={exp.name}
                title={exp.title}
                tasks={exp.tasks}
                dates={exp.dates}
                onDelete={() => deleteExperience(exp.id)}
                onExperienceChange={(info) => handleExperienceChange(exp.id, info)}
                key={exp.id} />
            )}
        )}
        <button onClick={addNewExperience}>Add Experience</button>
    </div>
    )
}

export default ExperienceBuilder;