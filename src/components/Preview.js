import React from 'react';
import EducationPreview from './EducationPreview';
import GeneralInfoPreview from './GeneralInfoPreview';
import ExperiencePreview from './ExperiencePreview';

function Preview(props) {
    return (
        <div className='preview'>
            <GeneralInfoPreview generalInfo={props.generalInfo}/>
            <hr />
            <EducationPreview education={props.education}/>
            <ExperiencePreview experience={props.experience}/>
        </div>
    )
}

export default Preview;