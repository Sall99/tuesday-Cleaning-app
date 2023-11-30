import React, { FC } from 'react';

import ImageSlider from '@/components/image-slider';

interface CleaningVarietyProps {
  title: string;
  subTitle?: string;
  description: string;
  images: { src: string; alt: string; index: number }[];
}

export const CleaningVariety: FC<CleaningVarietyProps> = ({
  title,
  subTitle,
  description,
  images,
}) => {
  const match = description.match(/"(.*?)"/);
  const bottom = match ? match[1] : null;

  const placeHolderHolder = '__PLACEHOLDER__';

  const descriptionWithPlaceHolder = description.replace(
    `"${bottom}"`,
    placeHolderHolder
  );

  const [before] = descriptionWithPlaceHolder.split(placeHolderHolder);

  return (
    <section className='pl-_200 mt-56 flex gap-28'>
      <div className='flex-1'>
        <p className='xxl:text-4xl text-base font-bold text-purple-400'>
          {title}
        </p>
        {subTitle && (
          <p className='xxl:text-lg mt-2 text-base font-bold text-purple-500'>
            {subTitle}
          </p>
        )}
        <p className='xxl:text-lg 2xl:w-_579 mt-7 flex flex-col gap-4 text-base text-purple-400'>
          <span>{before}</span>
          <span>{bottom}</span>
        </p>
      </div>
      <div className='flex-1'>
        <ImageSlider images={images} />
      </div>
    </section>
  );
};
