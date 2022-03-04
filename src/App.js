import React, {useState} from 'react';
import './App.css';
import Builder from './components/Builder';
import Preview from './components/Preview';

function App() {

  const [fullName, setFullName] = useState('Alec Simpson');
  const handleNameChange = (e) => {
    setFullName(e.target.value);
  }

  const [emailAddress, setEmailAddress] = useState('alecsimpson12345@gmail.com');
  const handleEmailChange = (e) => {
    setEmailAddress(e.target.value);
  }

  const [phoneNumber, setPhoneNumber] = useState('214-585-9008');
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  const generalInfo = {
    name: fullName,
    changeName: handleNameChange,
    email: emailAddress,
    changeEmail: handleEmailChange,
    phone: phoneNumber,
    changePhone: handlePhoneChange
  }

  const [education, setEducation] = useState([]);
  const handleEducationChange = (newEducation) => {
    setEducation(newEducation);
  }

  const educationInfo = {
    education: education,
    changeEducation: handleEducationChange
  }

  return (
    <div className="App">
      <Builder generalInfo={generalInfo} 
        education={educationInfo}/>
      <Preview generalInfo={generalInfo}
        education={educationInfo}
      />
    </div>
  );
}

export default App;
