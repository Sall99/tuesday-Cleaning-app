import Image from 'next/image';
import React from 'react';

const OurStory = () => {
  return (
    <section>
      <h2 className='xxl:text-4xl mt-32 text-center text-base font-bold text-purple-400'>
        Our Story
      </h2>
      <div className='xxl:gap-24 flex items-center justify-center gap-16'>
        <div className='w-_505 h-_288 xxl:text-lg flex flex-col justify-center gap-3 pt-14 text-base'>
          <p>
            Once upon a time, in a world of dusty corners and grimy windows,
            Tuesday Cleaning was born.
          </p>
          <h4 className='font-bold text-purple-400'>Our mission?</h4>
          <p>
            To rescue you from the mundane and make cleaning an exciting
            adventure. Unlike the rest, we bring a dash of fun to every surface
            we touch. From scrubbing floors to polishing doorknobs, we do it all
            with a smile.
          </p>
        </div>
        <div className='w-_430 h-_405 relative'>
          <Image
            src='/images/women-holding.png'
            alt='Our Story'
            layout='fill'
          />
        </div>
      </div>
      <h2 className='xxl:text-2xl mb-32 mt-24 text-center text-lg font-bold text-purple-500'>
        Why be ordinary <br /> when you can be extraordinary?
      </h2>
    </section>
  );
};

export default OurStory;
