import React from 'react';
import GeneralInfoBuilder from './GeneralInfoBuilder';
import EducationBuilder from './EducationBuilder';
import ExperienceBuilder from './ExperienceBuilder';

function Builder(props) {
    return (
        <div className='builder'>
            <GeneralInfoBuilder generalInfo={props.generalInfo}/>
            <EducationBuilder education={props.education}/>
            <ExperienceBuilder experience={props.experience} />
        </div>
    )
}

export default Builder;