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
    education,
    changeEducation: handleEducationChange
  }

  const [experience, setExperience] = useState([]);
  const handleExperienceChange = (newExperience) => {
    setExperience(newExperience);
  }

  const experienceInfo = {
    experience,
    changeExperience: handleExperienceChange
  }

  return (
    <div className="App">
      <Builder generalInfo={generalInfo} 
        education={educationInfo}
        experience={experienceInfo}
        />
      <Preview generalInfo={generalInfo}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App;
