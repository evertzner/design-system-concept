import React from 'react';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className='p-4 text-white bg-green-400 rounded-2xl' {...props} />;
}
