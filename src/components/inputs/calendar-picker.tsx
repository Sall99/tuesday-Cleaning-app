'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/button';
import { Calendar } from '@/components/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            'w-_270  h-_50 justify-between text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          {date ? (
            format(date, 'PPP')
          ) : (
            <span className='font-balloo_2 text-base text-purple-500'>
              Pick a date
            </span>
          )}
          <CalendarIcon className='mr-2 h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
