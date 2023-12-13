import React from 'react';

import {
  CleaningVariety,
  OurCommercialCleanning,
  ShowCase,
} from '@/components';

// Showcase
const headText = `Transform your workplace into a "spotless oasis" of productivity with Tuesday Cleaning.`;
const subText = `Say goodbye to the mess and hello to a cleaner, healthier office space. Ready to make the switch?`;

// Cleaning Variety
const title = 'Commercial Cleaning';
const description = `When it comes to a clean and healthy workspace, Tuesday Cleaning is your trusted partner. We go beyond mere cleaning; we create an environment that inspires success. "Our dedication to excellence and customer care shines through every service we offer."`;
const subTitle = `Keeping your workplace impeccably clean!`;

// Images for the slider
const images = [
  { src: '/images/comercial-cleaning-variety-1.png', alt: '', index: 0 },
  { src: '/images/comercial-cleaning-variety-2.png', alt: '', index: 1 },
  { src: '/images/comercial-cleaning-variety-3.png', alt: '', index: 2 },
];

const CommercialCleaning = () => {
  return (
    <div>
      <ShowCase
        imageSrc='/images/showcase-comercial.png'
        headText={headText}
        subText={subText}
      />
      <CleaningVariety
        title={title}
        description={description}
        subTitle={subTitle}
        images={images}
      />
      <OurCommercialCleanning />
    </div>
  );
};

export default CommercialCleaning;
