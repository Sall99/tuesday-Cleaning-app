'use client';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';

const cardData = [
  {
    svg: './svg/Star.svg',
    title: 'Dedication',
    description:
      "We're obsessed with cleanliness and dedicated to making your space sparkle. Our passion for perfection drives us.",
  },
  {
    svg: './svg/OkHand.svg',
    title: 'Excellence',
    description:
      "We don't just clean; we excel at it! Our team is relentless in their pursuit of spotless perfection.",
  },
  {
    svg: './svg/Smiling.svg',
    title: 'Fun',
    description:
      "Cleaning doesn't have to be boring! We infuse every task with a sense of playfulness and joy.",
  },
  {
    svg: './svg/Trust.svg',
    title: 'Customer Care',
    description:
      "Your happiness is our priority. We listen, adapt, and ensure you're thrilled with every cleaning session.",
  },
];

const OurValues = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.5, ease: 'easeInOut' },
    }));
  }, [controls]);

  return (
    <div className='our-values flex bg-gray-500'>
      <div>
        <div className='w-_589 h-_1016 rounded-tr-_64 rounded-r-_64 relative bg-purple-500'>
          <div className='absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[30%] transform 2xl:translate-x-[10%]'>
            <div className='w-_302 h-_440  2xl:w-_370 2xl:h-_540 rounded-_32 relative bg-yellow-400'>
              <Image
                src='/images/pngegg.png'
                alt=''
                fill
                className='rounded-_32'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='ml-44 mt-32'>
        <h2 className='text-4xl font-bold text-purple-400'>Our values</h2>
        <p className='mt-2 text-base font-bold text-purple-500 2xl:text-2xl'>
          Turning Mess into Magnificence!
        </p>

        <div>
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              animate={controls}
              initial={{ opacity: 0 }}
            >
              <div className='w-_594 2xl:w-_696 rounded-_32 card mt-10 flex items-center gap-4 bg-gray-400 p-7 2xl:gap-7'>
                <div className='rounded-_50 flex h-24 w-24 items-center justify-center border-[3.5px] border-purple-500 bg-gray-400 p-6'>
                  <div className='relative h-11 w-11'>
                    <Image src={card.svg} alt='' fill />
                  </div>
                </div>
                <div className='ml-4'>
                  <h3 className='text-base font-bold text-purple-400 2xl:text-2xl'>
                    {card.title}
                  </h3>
                  <p className='text-sm text-purple-400 2xl:text-base'>
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
