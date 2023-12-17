import Image from 'next/image';
import React, { FC } from 'react';

import { cn } from '@/lib/utils';

import BookNow from '@/components/book-now';

interface ShowCaseProps {
  imageSrc: string;
  headText: string;
  subText: string;
  bottomText?: boolean;
}

const ShowCase: FC<ShowCaseProps> = ({
  imageSrc,
  headText,
  subText,
  bottomText = false,
}) => {
  const match = headText.match(/"(.*?)"/);
  const colored = match ? match[1] : null;
  const placeHolderHolder = '__PLACEHOLDER__';

  const headTextWithPlaceHolder = headText.replace(
    `"${colored}"`,
    placeHolderHolder
  );

  const [before, after] = headTextWithPlaceHolder.split(placeHolderHolder);

  return (
    <section className='px-_50 xxl:px-_150 2xl:px-_200 3xl:pr-_340  pb-_72 anime bg-purple-400 pt-16 text-white'>
      <div className='flex justify-between gap-8'>
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

        <div className='relative hidden xl:block'>
          <div className='show-yellow-rectangle'></div>
          <div className={cn('w-_547 h-_594 relative z-10')}>
            <Image src={imageSrc} alt='show case image' fill priority />
          </div>
        </div>
      </div>

      {bottomText && (
        <div className='mt-_72 xxl:text-4xl show-case-bottom-text m-auto flex flex-col items-center justify-center'>
          <h2 className='font-bold text-yellow-400'>Get Your Clean On!</h2>
          <p className='w-_600 anime xxl:text-2xl text-center text-purple-500'>
            We're not your ordinary cleaning service – we're your clean freak
            best friends dedicated to making your space shine, one neighbor at a
            time!
          </p>
        </div>
      )}
    </section>
  );
};

export default ShowCase;
