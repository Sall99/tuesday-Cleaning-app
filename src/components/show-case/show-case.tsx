import Image from 'next/image';
import React, { FC } from 'react';

import BookNow from '@/components/book-now';

interface ShowCaseProps {
  imageSrc: string;
  headText: string;
  subText: string;
}

const styles = {
  width: 547,
  height: 594,
};

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
    <div className='pl-_200 pr-_340 flex justify-between gap-4 bg-purple-400 pb-10 pt-16 text-white'>
      <div className='flex-1'>
        {' '}
        <div>
          <div>
            <h2 className='font-balloo_2 text-4xl font-bold'>
              <span>{before}</span>
              <span className='text-blue-400'>{colored}</span>
              <span>{after}</span>
            </h2>
            <p className='show-subText mt-4 text-2xl text-purple-500'>
              {subText}
            </p>
          </div>
        </div>
        <BookNow />
      </div>
      <div className='relative'>
        <div className='show-yellow-rectangle'></div>
        <Image
          src={imageSrc}
          alt='show case image'
          width={styles.width}
          height={styles.height}
          className='relative z-10'
          priority
        />
      </div>
    </div>
  );
};

export default ShowCase;
