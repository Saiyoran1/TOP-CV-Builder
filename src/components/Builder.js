import React from 'react';
import GeneralInfoBuilder from './GeneralInfoBuilder';
import EducationBuilder from './EducationBuilder';

function Builder(props) {
    return (
        <div className='builder'>
            <GeneralInfoBuilder generalInfo={props.generalInfo}/>
            <EducationBuilder education={props.education}/>
        </div>
    )
}

export default Builder;