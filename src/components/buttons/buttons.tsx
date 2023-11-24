import { ArrowRight } from 'lucide-react';
import React from 'react';

export const BookNowBtn = () => {
  return (
    <button className='w-_270 font-galyon h-_50 xxl:text-xl flex items-center justify-between rounded-lg bg-yellow-400 px-4 text-base font-bold text-purple-400'>
      <span>Book Now</span>
      <span>
        <ArrowRight />
      </span>
    </button>
  );
};
