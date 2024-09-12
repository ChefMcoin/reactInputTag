import React from 'react';
import EmailItem from './_partials/EmailItem';
import InviteInput from './_partials/InviteInput';

export default function InviteContainer({
  handleChange,
  handleKeyPress,
  inputEmail,
  email,
  removeEmail,
}) {
  return (
    <div>
      <InviteInput
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        inputEmail={inputEmail}
        email={email}
        removeEmail={removeEmail}
      />
    </div>
  );
}
