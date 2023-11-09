import React from 'react';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className='bg-red-400 p-4 text-black' {...props} />;
}
