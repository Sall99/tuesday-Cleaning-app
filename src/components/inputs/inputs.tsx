'use client';
import clsx from 'clsx';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FC, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  register?: any;
  width?: number;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  error,
  register,
  width = 270,
}) => {
  return (
    <div className='mt-8 flex flex-col gap-1'>
      <label
        htmlFor={name}
        className='font-balloo_2  font-bold capitalize text-purple-500'
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        {...register(name, { required: `${label} is required` })}
        className={clsx(
          'w-_270 font-galyon h-_50 rounded-lg border-2 border-gray-300 fill-gray-400 px-3 py-2 font-normal text-blue-300 placeholder:text-purple-500',
          error ? 'show-input-shake border-red-500' : '',
          width ? `w-_${width}` : ''
        )}
      />
    </div>
  );
};

export const InputNumber: FC<InputProps> = ({
  label,
  name,
  type = 'number',
  placeholder,
  required = false,
  error,
  register,
}) => {
  const [ChevronUpClicked, setChevronUpClicked] = useState(false);
  const [ChevronDownClicked, setChevronDownClicked] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  const handleChevronUpClick = (arrow: string) => {
    if (arrow === 'up') {
      setChevronUpClicked(true);
      setChevronDownClicked(false);

      setInputValue(inputValue + 1);
    } else {
      setChevronDownClicked(true);
      setChevronUpClicked(false);

      if (inputValue > 0) {
        setInputValue(inputValue - 1);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setChevronUpClicked(false);
      setChevronDownClicked(false);
    }, 500);
  }, [ChevronUpClicked, ChevronDownClicked]);

  return (
    <div className='mt-8 flex flex-col gap-1'>
      <label
        htmlFor={name}
        className='font-balloo_2  font-bold capitalize text-purple-500'
      >
        {label}
      </label>
      <div className='relative'>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={inputValue}
          {...register(name, { required: `${label} is required` })}
          className={clsx(
            'font-galyon h-_50 w-_82 rounded-lg border-2 border-gray-300 fill-gray-400 px-3 py-2 font-normal text-blue-300 placeholder:text-purple-500',
            error ? 'show-input-shake border-red-500' : ''
          )}
        />
        <div className='top-_5 absolute right-3 h-5'>
          <span>
            <ChevronUp
              color='#9393F9'
              width={15}
              height={20}
              className={cn(
                'tr hover:cursor-pointer',
                ChevronUpClicked && 'chevron-clicked'
              )}
              onClick={() => handleChevronUpClick('up')}
            />
          </span>
          <span>
            <ChevronDown
              color='#9393F9'
              width={15}
              height={20}
              onClick={() => handleChevronUpClick('down')}
              className={cn(
                'hover:cursor-pointer',
                ChevronDownClicked && 'chevron-clicked'
              )}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
