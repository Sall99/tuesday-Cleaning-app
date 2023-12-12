import Image from 'next/image';
import React from 'react';

const cardData = [
  {
    icon: '/images/Home.png',
    title: 'Residential Cleaning',
    description:
      'From cozy apartments to spacious homes, we transform your living spaces into havens of cleanliness. Our magical touch makes dust disappear and clutter flee in fear.',
  },
  {
    icon: '/images/Office.png',
    title: 'Commercial Cleaning',
    description:
      'Your office is our playground! We tackle messes with gusto, ensuring your workspace is a productivity paradise. Say goodbye to office grime and hello to success!',
  },
  {
    icon: '/images/Quick Mode On.png',
    title: 'Short-Term Rental Cleaning',
    description:
      "For Airbnb hosts and property managers, we're your secret weapon. We prep your rental property for guests, leaving them awestruck and coming back for more.",
  },
  {
    icon: '/images/Unpacking.png',
    title: 'Move In/Out Cleaning',
    description:
      'Moving is stressful; we make it easier. Our team ensures your new space is spotless, and your old one is left in impeccable condition.',
  },
];

export const OurCleaningServices = () => {
  return (
    <div className='px-_150 2xl:px-_200'>
      <div className='mt-32 text-center'>
        <h2 className='text-4xl font-bold text-purple-400'>
          Our Cleaning Services
        </h2>
        <p className='mt-2 text-base font-bold text-purple-500 2xl:text-2xl'>
          Squeaky-Clean Tuesdays: Where Grime Has No Place!
        </p>
      </div>
      <div className='mt-_75 grid grid-cols-4 gap-8'>
        {cardData.map((card, index) => (
          <div
            className='2xl:w-_310 rounded-_25 pb-_10 flex flex-col justify-between bg-gray-400'
            key={index}
          >
            <div className='px-8 pt-8'>
              <div className='rounded-_16 flex h-12 w-12 items-center justify-center bg-purple-500 2xl:h-16 2xl:w-16'>
                <div className='relative h-6 w-6 2xl:h-9 2xl:w-9'>
                  <Image src={card.icon} alt='' fill />
                </div>
              </div>
              <h3 className='mt-6 font-bold text-purple-400 2xl:text-xl'>
                {card.title}
              </h3>
              <p className='mt-4 text-sm text-purple-400 2xl:text-base'>
                {card.description}
              </p>
            </div>

            <div className='px-3'>
              <button className='mt-8 w-full rounded-full bg-purple-700 px-4 py-4 text-xs font-bold text-purple-400 hover:bg-purple-500 2xl:text-base'>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
