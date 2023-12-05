import Image from 'next/image';
import React from 'react';

const DeepCleaning = () => {
  return (
    <div className='deep-cleaning-card flex gap-16 bg-gray-400 py-5 pl-8 pr-5'>
      <div>
        <h2 className='mt-6 text-4xl font-bold text-purple-400'>
          Deep Cleaning
        </h2>
        <p className='mt-8 flex flex-col gap-4 text-purple-400'>
          <span>
            Every nook and cranny of your home is treated with care and
            enthusiasm.
          </span>{' '}
          <span>
            Our residential cleaning services are designed to make your space a
            haven of cleanliness and comfort. We offer flexible services that
            cater to your unique needs and preferences.
          </span>{' '}
          <span>
            Whether it's a one-time deep clean or regular maintenance, we've got
            you covered!
          </span>
        </p>
      </div>
      <div>
        <div className='w-_710 h-_378 relative'>
          <Image src='/images/deep-cleaning.png' alt='' fill priority />
        </div>
      </div>
    </div>
  );
};

export default DeepCleaning;
