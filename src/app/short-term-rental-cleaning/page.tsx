import React from 'react';

import { CleaningVariety, ShowCase } from '@/components';

// Showcase Text
const headText = `Transform your workplace into a "spotless oasis" of productivity with Tuesday Cleaning.`;
const subText = `Say goodbye to the mess and hello to a cleaner, healthier office space. Ready to make the switch?`;

// Cleaning Variety Text

// Cleaning Variety Images
const title =
  'Unlock the Magic of Clean and Healthy Rental Spaces with Tuesday Cleaning!';
const description = `Unlock the Magic of Clean and Healthy Rental Spaces with Tuesday Cleaning! "We know that pristine and inviting rental spaces are the heartbeat of success. This is why our dedicated cleaning crew ensures your short-term rental properties are not just clean but irresistibly ready for guests, making them the ultimate home away from home."`;
// Images for the slider
const images = [
  { src: '/images/short-cleaning-variety-1.png', alt: '', index: 0 },
  { src: '/images/short-cleaning-variety-2.png', alt: '', index: 1 },
  { src: '/images/short-cleaning-variety-3.png', alt: '', index: 2 },
];

const shortTermRentalCleaning = () => {
  return (
    <div>
      {' '}
      <ShowCase
        imageSrc='/images/showcase-short-term.png'
        headText={headText}
        subText={subText}
      />
      <CleaningVariety
        title={title}
        description={description}
        images={images}
      />
    </div>
  );
};

export default shortTermRentalCleaning;
