import React from 'react';
import EducationPreview from './EducationPreview';
import GeneralInfoPreview from './GeneralInfoPreview';

function Preview(props) {
    return (
        <div className='preview'>
            <GeneralInfoPreview generalInfo={props.generalInfo}/>
            <hr />
            <EducationPreview education={props.education}/>
        </div>
    )
}

export default Preview;