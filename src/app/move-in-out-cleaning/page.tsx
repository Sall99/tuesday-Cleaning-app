'use client';
import React from 'react';

import { CleaningVariety, ShowCase } from '@/components';

// Showcase text
const headText = `Transforming Rental Spaces, "Delighting Guests", One Clean at a Time.`;
const subText = `We don't just clean and Make Your Spaces Shine – we infuse every Rental space with the energy of a lively party.`;

// Cleaning Variety Text
const title = 'Moving in/out?';
const subTitle = 'Leave the cleaning to us!';
const description = `At Tuesday Cleaning, we believe in the power of a fresh start, and that's why our Move-In/Out Cleaning Services are designed to make your transition a breeze. "We're on a mission to deliver excellence and care, ensuring your new space shines from day one."`;

// Cleaning Variety Images
const images = [
  { src: '/images/move-cleaning-variety-1.png', alt: '', index: 0 },
  { src: '/images/move-cleaning-variety-2.png', alt: '', index: 1 },
  { src: '/images/move-cleaning-variety-3.png', alt: '', index: 2 },
];
const MoveInOutCleaning = () => {
  return (
    <div>
      {' '}
      <ShowCase
        imageSrc='/images/showcase-move-in.png'
        headText={headText}
        subText={subText}
      />
      <CleaningVariety
        title={title}
        subTitle={subTitle}
        description={description}
        images={images}
      />
    </div>
  );
};

export default MoveInOutCleaning;
