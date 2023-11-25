'use client';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { BookNowBtn } from '@/components/buttons';
import Input, { InputNumber } from '@/components/inputs';
import { DatePickerDemo } from '@/components/inputs/calendar-picker';

type FormData = {
  [key: string]: string;
};

const InputNumbers = [
  {
    id: 'bedrooms',
    label: 'bedrooms',
  },
  {
    id: 'bathrooms',
    label: 'bathrooms',
  },
  {
    id: 'sqft',
    label: 'sqft',
  },
];

const BookNow = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = () => {
    //
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex gap-3'>
        <Input
          label='name'
          name='name'
          type='text'
          register={register}
          error={errors.name?.message}
          placeholder='John Doe'
          width={270}
        />
        <Input
          label='Phone number'
          name='phone-number'
          type='text'
          register={register}
          error={errors.name?.message}
          placeholder='(123) 456-7890'
          width={270}
        />
      </div>
      <div className='flex gap-3'>
        <Input
          label='address'
          name='address'
          type='text'
          register={register}
          error={errors.address?.message}
          placeholder='Avenue 21, 19328'
          width={270}
        />
        {InputNumbers.map((inputNumber) => (
          <InputNumber
            key={inputNumber.id}
            label={inputNumber.label}
            name={inputNumber.label}
            type='number'
            register={register}
            error={errors[inputNumber.id]?.message}
            placeholder='0'
          />
        ))}
      </div>
      <div className='mt-8 flex items-end gap-3'>
        <div>
          <label
            htmlFor='date'
            className='font-balloo_2 xxl:text-base flex flex-col gap-1 text-sm font-bold capitalize text-purple-500'
          >
            date
          </label>
          <DatePickerDemo />
        </div>
        <BookNowBtn />
      </div>
      <div className='mt-6 text-blue-400'>
        <p className='xxl:text-xl text-base font-bold'>4.8/5</p>
        <p className='xxl:text-base text-sm'>with over 1423 reviews</p>
      </div>
    </form>
  );
};

export default BookNow;
