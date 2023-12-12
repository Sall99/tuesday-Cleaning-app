import Image from 'next/image';
import React from 'react';

const AddOnServicesData = [
  {
    title: 'Oven Cleaning',
    description:
      'Say goodbye to stubborn grease and odors. A clean oven not only looks great but also ensures your meals taste their best.',
    image:
      'https://res.cloudinary.com/dx6jhjxpt/image/upload/v1702312933/cleaning-thursday/image_8_xmsbz4.png',
  },
  {
    title: 'Baseboard Cleaning',
    description:
      'Clean baseboards enhance the overall aesthetics of your home, adding a touch of elegance to every room.',
    image:
      'https://res.cloudinary.com/dx6jhjxpt/image/upload/v1702312933/cleaning-thursday/image_17_jlzzci.png',
  },
  {
    title: 'Fridge Cleaning',
    description:
      'Keep your fridge clean and hygienic to ensure your food stays fresh and your family stays healthy.',
    image:
      'https://res.cloudinary.com/dx6jhjxpt/image/upload/v1702313052/cleaning-thursday/image_18_coqgmi.png',
  },
  {
    title: 'Washing Dishes',
    description:
      "We're not just about cleaning; we also lend a helping hand by tackling your dishes. It's the little things that make a big difference!",
    image:
      'https://res.cloudinary.com/dx6jhjxpt/image/upload/v1702313052/cleaning-thursday/image_19_ynelxk.png',
  },
  {
    title: 'Patio Cleaning',
    description:
      'Enjoy the outdoors to the fullest with a spotless patio. Your outdoor gatherings just got better!',
    image:
      'https://res.cloudinary.com/dx6jhjxpt/image/upload/v1702315278/cleaning-thursday/image_20_o5eb3i.png',
  },
  {
    title: 'Garage Cleaning',
    description:
      'A clean and organized garage means no more searching for lost items and more space for your hobbies.',
    image:
      'https://res.cloudinary.com/dx6jhjxpt/image/upload/v1702315278/cleaning-thursday/image_21_uenwwy.png',
  },
  {
    title: 'Window Cleaning',
    description:
      'Brighten up your living spaces with crystal-clear windows that let the sunlight in.',
    image:
      'https://res.cloudinary.com/dx6jhjxpt/image/upload/v1702315405/cleaning-thursday/image_22_ux5hey.png',
  },
  {
    title: 'Wall Cleaning',
    description:
      'Wave goodbye to unsightly marks and stains, and say hello to a refreshed and vibrant living space.',
    image:
      'https://res.cloudinary.com/dx6jhjxpt/image/upload/v1702315405/cleaning-thursday/image_23_zzfki4.png',
  },
  {
    title: 'Cabinet Cleaning',
    description:
      'Organized cabinets not only make finding things a breeze but also create a visually appealing kitchen.',
    image:
      'https://res.cloudinary.com/dx6jhjxpt/image/upload/v1702315558/cleaning-thursday/image_24_d2kjed.png',
  },
  {
    title: 'Washer and Dryer Wipedown',
    description:
      "Clean appliances last longer and operate more efficiently. We've got your back!",
    image:
      'https://res.cloudinary.com/dx6jhjxpt/image/upload/v1702315559/cleaning-thursday/image_25_l1lfni.png',
  },
  {
    title: 'Blinds Cleaning',
    description:
      'Clean blinds contribute to a dust-free environment, ensuring you breathe fresh and clean air.',
    image:
      'https://res.cloudinary.com/dx6jhjxpt/image/upload/v1702315559/cleaning-thursday/image_26_yrz2zr.png',
  },
];

const AddOnServices = () => {
  return (
    <div className='mt-_103'>
      <h2 className='mt-6 text-4xl font-bold text-purple-400'>
        Add-On Services
      </h2>
      <p className='mb-10 mt-2 text-purple-500'>
        Here are some additional services that you can add to your residential
        cleaning package <br /> for a fully customized cleaning experience.
      </p>
      <div className='anime grid grid-cols-3 content-center items-center justify-center gap-y-8 2xl:grid-cols-4 2xl:gap-8'>
        {AddOnServicesData.map((item, index) => (
          <div
            key={index}
            className='w-_308 h-_350 px-_11 pt-_11 rounded-_32 m-auto flex flex-col items-center bg-gray-400'
          >
            <div className='w-_285 h-_128 rounded-_25 relative  overflow-hidden'>
              <Image src={item.image} alt={item.title} fill />
            </div>
            <div className='mt-2 px-5'>
              <h3 className='mt-4 text-lg font-bold text-purple-400 2xl:text-2xl'>
                {item.title}
              </h3>
              <p className='mt-2 text-sm text-purple-500 2xl:text-base'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnServices;
