import React from 'react';
import Button from '../../../../../../components/Button';

export default function EmailItem({ email, removeEmail }) {
  // const emails = [
  //   { id: 1, mail: 'mustaphabakare2@gmail.com' },
  //   { id: 2, mail: 'mustaphabak2@gmail.com' },
  //   { id: 3, mail: 'mustapha@gmail.com' },
  //   { id: 3, mail: 'mustapha@gmail.com' },
  // ];

  // function handleRemove(itemId) {
  //   email.filter(mail => mail.id !== itemId);
  // }

  return (
    <div>
      <ul>
        {email.map(email => (
          <li
            key={email.id}
            className="bg-[#a6bfe7c1] inline-block gap-3 text-[#092752] font-semibold mr-2 rounded-sm px-2 py-2 text-sm mt-2 mb-2"
          >
            {email.mail}
            <Button onClick={() => removeEmail(email.id)} className="pl-2">
              X
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
