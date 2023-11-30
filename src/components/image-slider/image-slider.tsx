import Image from 'next/image';
import React, { FC } from 'react';

import { cn } from '@/lib/utils';

export interface ImageSliderProps {
  images: { src: string; alt: string; index: number }[];
}

const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className='image-slider relative'>
      {images.map(({ src, alt, index }) => {
        return (
          <div
            key={index}
            className={cn(
              `w-_302 h-_224 relative image-slider-${index} absolute transition-all duration-1000 ease-in-out hover:z-40  hover:scale-110 hover:cursor-pointer`,
              index === 2 && 'z-30',
              index === 1 && 'z-10',
              index === 0 && 'z-20'
            )}
          >
            <Image src={src} alt={alt} fill />
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
