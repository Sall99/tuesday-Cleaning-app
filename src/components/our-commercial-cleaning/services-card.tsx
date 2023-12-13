import Image from 'next/image';
import React from 'react';

export const ServicesCard = () => {
  return (
    <div className='w-_1328 h-_579 rounded-_32 m-auto mb-36 flex justify-between bg-gray-400 pl-8 pr-6 pt-6'>
      <div className='w-_616 pt-6'>
        <h2 className='mt-6 text-2xl font-bold text-purple-400 2xl:text-4xl'>
          Disinfecting
        </h2>
        <p className='xxl:text-lg mb-7 mt-2 text-base font-bold text-purple-500'>
          A Shield for Your Space
        </p>
        <p className='text-purple-400 2xl:text-2xl'>
          In today's world, cleanliness is paramount. Tuesday Cleaning doesn't
          take this lightly. We use cutting-edge techniques and solutions to
          ensure your space is thoroughly disinfected, providing you with peace
          of mind.
        </p>
        <h2 className='mt-6 text-2xl font-bold text-purple-400 2xl:text-4xl'>
          Benefits of Our Disinfecting Service
        </h2>
        <div>
          <h2 className='mt-6 font-bold text-purple-400 2xl:text-base'>
            Promote a Healthier Workplace
          </h2>
          <p className='text-base text-purple-400'>
            Say goodbye to germs and hello to a healthier workspace for your
            employees and visitors.
          </p>
        </div>
        <div className='mt-7'>
          <h2 className='text-base font-bold text-purple-400'>
            Stop the Spread
          </h2>
          <p className='text-purple-400'>
            Our disinfection services are your first line of defense against
            illnesses. Prevent outbreaks before they start.
          </p>
        </div>
      </div>
      <div className='w-_534 h-_535 relative'>
        <Image src='/images/cle-service.jpg' alt='' fill />
      </div>
    </div>
  );
};
