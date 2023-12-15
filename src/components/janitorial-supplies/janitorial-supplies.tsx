import Image from 'next/image';
import React from 'react';

const cardData = [
  {
    title: 'Breakroom Bliss',
    description:
      'From coffee pods to cleaning supplies, we have everything your breakroom needs. A well-stocked breakroom keeps your team fueled and motivated. Boost morale with our breakroom supplies. Happy employees start here!',
  },
  {
    title: 'Janitorial Closet Supplies',
    description:
      'Our janitorial closet supplies cover everything from mops to trash bags, ensuring your space stays spotless. Having essential cleaning tools readily available means you can tackle messes as soon as they appear.',
  },
];

export const JanitorialSupplies = () => {
  return (
    <div className='flex'>
      <div className='w-_589 h-_900 rounded-tr-_64 rounded-br-_64  relative bg-purple-500'>
        <div className='rounded-_32 absolute left-[10%] top-1/2 -translate-y-1/2 translate-x-[50%] transform overflow-hidden'>
          <div className='w-_436 h-_412 relative'>
            <Image src='/images/janitorial-suplies.png' alt='' fill />
          </div>
        </div>
      </div>
      <div className='mt-_105'>
        <div className='ml-_170'>
          <h2 className='text-4xl font-bold text-purple-400'>
            Janitorial Supplies
          </h2>
          <p className='mt-2 text-base font-bold text-purple-500 2xl:text-2xl'>
            Tools of the Trade
          </p>
        </div>
        <div className='ml-_170 mt-_70 flex flex-col gap-8'>
          {cardData.map((card, index) => (
            <div key={index}>
              <div className='w-_608  2xl:w-_696 rounded-_32 card pt-_34 flex items-center gap-4 bg-gray-400 pl-10 pr-9 2xl:gap-7'>
                <div>
                  <h3 className='text-base font-bold text-purple-400 2xl:text-2xl'>
                    {card.title}
                  </h3>
                  <p className='h-_100 text-sm text-purple-400 2xl:text-base'>
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-_45 ml-14'>
          <h2 className='text-base font-bold text-purple-400'>
            Tuesday Cleaning not only cleans but equips you with top-notch{' '}
            <br />
            janitorial supplies to maintain your space's cleanliness.
          </h2>
        </div>
      </div>
    </div>
  );
};
