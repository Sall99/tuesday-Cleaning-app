import Image from 'next/image';
import React, { FC } from 'react';

import { cn } from '@/lib/utils';

import BookNow from '@/components/book-now';

interface ShowCaseProps {
  imageSrc: string;
  headText: string;
  subText: string;
}

const ShowCase: FC<ShowCaseProps> = ({ imageSrc, headText, subText }) => {
  const match = headText.match(/"(.*?)"/);
  const colored = match ? match[1] : null;
  const placeHolderHolder = '__PLACEHOLDER__';

  const headTextWithPlaceHolder = headText.replace(
    `"${colored}"`,
    placeHolderHolder
  );

  const [before, after] = headTextWithPlaceHolder.split(placeHolderHolder);

  return (
    <div className='px-_150 2xl:px-_200 3xl:pr-_340 flex justify-between  gap-8 bg-purple-400 pb-10 pt-16 text-white'>
      <div className='flex-1'>
        {' '}
        <div>
          <div>
            <h2 className='font-balloo_2 xxl:text-4xl text-2xl font-bold'>
              <span>{before}</span>
              <span className='text-blue-400'>{colored}</span>
              <span>{after}</span>
            </h2>
            <p className='show-subText xxl:text-2xl mt-4 !text-base text-purple-500'>
              {subText}
            </p>
          </div>
        </div>
        <BookNow />
      </div>
      <div className='relative'>
        <div className='show-yellow-rectangle'></div>
        <div className={cn('w-_547 h-_594 relative z-10')}>
          <Image src={imageSrc} alt='show case image' fill priority />
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
