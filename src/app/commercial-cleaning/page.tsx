import React from 'react';

import { ShowCase } from '@/components';

const headText = `Transform your workplace into a "spotless oasis" of productivity with Tuesday Cleaning.`;
const subText = `Say goodbye to the mess and hello to a cleaner, healthier office space. Ready to make the switch?`;

const CommercialCleaning = () => {
  return (
    <div>
      <ShowCase
        imageSrc='/images/showcase-comercial.png'
        headText={headText}
        subText={subText}
      />
    </div>
  );
};

export default CommercialCleaning;
