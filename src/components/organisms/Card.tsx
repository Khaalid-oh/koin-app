import Image from 'next/image';
import React from 'react';

const Card = ({
  icon,
  title,
  detail,
}: {
  icon: string;
  title: string;
  detail: string;
}) => {
  return (
    <div className='text-center'>
      <Image src={icon} alt="logo" width={40} height={55} className='mx-auto' />
      <p className='mb-2 mt-4 text-gray5 text-xl font-semibold'>{title}</p>
      <span className='text-gray2'>{detail}</span>
    </div>
  );
};

export default Card;
