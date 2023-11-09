import React from 'react';

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className='font-bold m-3 bg-blue-300 border-spacing-1 border-green-500' {...props} />
  );
}
