import React, { useState } from 'react';
import InputContainer from './_partials/InputContainer';
import GuestNumber from './_partials/GuestNumber';
import InviteContainer from './_partials/InviteContainer';
// import { useState } from 'react';

export default function Tag() {
  const [inputEmail, setInputEmail] = useState([]);
  const [email, setEmail] = useState([]);
  const [isValid, setIsValid] = useState(true);

  function handleChange(e) {
    const emailInput = e.target.value;
    setInputEmail(emailInput);
    setIsValid(isValidEmail(emailInput));
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter' && isValid) {
      addTask();
    }
  };

  function isValidEmail(emails) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emails);
  }

  function removeEmail(itemId) {
    setEmail(email.filter(mail => mail.id !== itemId));
  }

  const addTask = () => {
    if (inputEmail.trim()) {
      const newEmail = {
        id: Math.random(),
        mail: inputEmail,
      };
      setEmail([...email, newEmail]);
      setInputEmail('');
    }
  };

  const totalNumber = email.length;
  return (
    <div className="bg-[#FFFFFF] w-3/5 h-auto rounded-md p-4">
      <InputContainer />
      <InviteContainer
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        inputEmail={inputEmail}
        email={email}
        removeEmail={removeEmail}
      />
      <GuestNumber totalNumber={totalNumber} />
    </div>
  );
}
