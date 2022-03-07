import React from 'react';

function ExperiencePreview(props) {
    const {experience} = props;

    return (
        <div>
            <h2>Experience</h2>
            <ul>
                {experience.map((exp) => {
                    return (
                        <div key={exp.id}>
                            <h3>{exp.name}</h3>
                            <p>{exp.title}</p>
                            <p>{exp.dates}</p>
                            <ul>
                                {exp.tasks.map((task) => {
                                    return (
                                        <li key={task.id}>{task.description}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    );
                })}
            </ul>
        </div>
    )
}

export default ExperiencePreview;