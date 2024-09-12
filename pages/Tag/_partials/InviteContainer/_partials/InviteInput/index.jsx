import React, { useState } from 'react';
import EmailItem from '../EmailItem';

export default function InviteInput({
  handleKeyPress,
  handleChange,
  inputEmail,
  email,
  removeEmail,
}) {
  return (
    <div className="w-full border-2 min-h-32 rounded-md inline-flex px-2">
      <div>
        {' '}
        <EmailItem email={email} removeEmail={removeEmail} />
      </div>
      <div>
        <input
          type="email"
          value={inputEmail}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          placeholder="Enter your email"
          className="rounded-md focus:border-[#a6bfe7] focus:outline-none mt-3"
        />
      </div>
    </div>
  );
}
