import React from 'react';

function GeneralInfoBuilder(props) {
    const {name, changeName, email, changeEmail, phone, changePhone} = props.generalInfo;
    return (
        <div>
            <label>
                Name: 
                <input type='text' value={name} onChange={changeName}/>
            </label>
            <label>
                Email:
                <input type='text' value={email} onChange={changeEmail}/>
            </label>
            <label>
                Phone Number:
                <input type='text' value={phone} onChange={changePhone}/>
            </label>
        </div>
    );
}

export default GeneralInfoBuilder;