import React from 'react';

import {
  CleaningVariety,
  RedisdentialCleaningServices,
  ShowCase,
} from '@/components';

// SHOWCASE TEXT
const headText =
  'Rediscover the "Sparkle & Shine" in Your Home with Tuesday Cleaning!';

const subText = `At Tuesday Cleaning, our crew doesn't just clean; they create a lively and fun cleaning adventure!`;

// CLEANING VARIETY TEXT
const title = 'Residential Cleaning';
const description = `Every nook and cranny of your home is treated with care and enthusiasm. "Our residential cleaning services are designed to make your space a haven of cleanliness and comfort. We offer flexible services that cater to your unique needs and preferences. Whether it's a one-time deep clean or regular maintenance, we've got you covered!"`;

// CLEANING VARIETY IMAGES
const images = [
  { src: '/images/cleaning-variety-1.png', alt: '', index: 0 },
  { src: '/images/cleaning-variety-2.png', alt: '', index: 1 },
  { src: '/images/cleaning-variety-3.png', alt: '', index: 2 },
];
const ResidentalCleaning = () => {
  return (
    <div>
      {' '}
      <ShowCase
        imageSrc='/images/showcase-residential.png'
        headText={headText}
        subText={subText}
      />
      <CleaningVariety
        title={title}
        description={description}
        images={images}
      />
      <RedisdentialCleaningServices />
    </div>
  );
};

export default ResidentalCleaning;
