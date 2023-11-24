'use client';

import * as React from 'react';

import { ShowCase } from '@/components';

const headText = 'Welcome to Tuesday Cleaning. "We Make Clean Fun!"';

const subText = `Cleanse your world with Tuesday's delightful cleaning crew!`;

export default function HomePage() {
  return (
    <main>
      <ShowCase
        imageSrc='/images/showcase-home.png'
        headText={headText}
        subText={subText}
      />
    </main>
  );
}
