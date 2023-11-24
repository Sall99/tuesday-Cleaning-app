import React from 'react';

import { ShowCase } from '@/components';

const headText =
  'Rediscover the "Sparkle & Shine" in Your Home with Tuesday Cleaning!';

const subText = `At Tuesday Cleaning, our crew doesn't just clean; they create a lively and fun cleaning adventure!`;

const ResidentalCleaning = () => {
  return (
    <div>
      {' '}
      <ShowCase
        imageSrc='/images/showcase-residential.png'
        headText={headText}
        subText={subText}
      />
    </div>
  );
};

export default ResidentalCleaning;
