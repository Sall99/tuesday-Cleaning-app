import React from 'react';

import { ShowCase } from '@/components';

const headText = `Transforming Rental Spaces, "Delighting Guests", One Clean at a Time.`;
const subText = `We don't just clean and Make Your Spaces Shine – we infuse every Rental space with the energy of a lively party.`;

const MoveInOutCleaning = () => {
  return (
    <div>
      {' '}
      <ShowCase
        imageSrc='/images/showcase-move-in.png'
        headText={headText}
        subText={subText}
      />
    </div>
  );
};

export default MoveInOutCleaning;
