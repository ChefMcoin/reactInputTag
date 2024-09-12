import React from 'react';

export default function TotalNumber({ totalNumber }) {
  return (
    <div className="text-sm">
      Invite{' '}
      <span className="bg-[#a6bfe7c1] px-3 rounded-sm text-lg">
        {totalNumber} guest
      </span>{' '}
      to this retrospective
    </div>
  );
}
