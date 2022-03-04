import React from 'react';

function GeneralInfoPreview(props) {
    const {name, email, phone} = props.generalInfo;
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default GeneralInfoPreview;