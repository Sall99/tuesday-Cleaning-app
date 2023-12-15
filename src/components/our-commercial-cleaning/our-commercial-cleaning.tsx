import React from 'react';

import { JanitorialSupplies } from '@/components/janitorial-supplies';

import { ServicesCard } from './services-card';

export const OurCommercialCleanning = () => {
  return (
    <section className='mt-36 bg-gray-500 pt-20'>
      <ServicesCard />
      <JanitorialSupplies />
    </section>
  );
};
