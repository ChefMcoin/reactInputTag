import React from 'react';
import TotalNumber from './_partials/TotalNumber';
import Button from '../../../../components/Button';

export default function GuestNumber({ totalNumber }) {
  function handleInvite() {
    if (totalNumber > 0) {
      alert(`You invited ${totalNumber} emails`);
    } else {
      alert('No email has been added');
    }
  }

  return (
    <div className="flex mt-4 justify-between">
      <TotalNumber totalNumber={totalNumber} />
      {/* <Button className="bg-red-500 ">Invite Guest</Button> */}
      <Button
        onClick={handleInvite}
        className="bg-[#4d87e3] inline-block py-2 px-4 rounded-md text-sm text-white"
      >
        Invite Guests
      </Button>
    </div>
  );
}
