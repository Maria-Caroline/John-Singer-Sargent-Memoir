'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export interface ModalInfoProps {
  word: string;
  image: string;
  description: string;
}

export const ModalInfo: React.FC<ModalInfoProps> = ({ word, image, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <span
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative text-[var(--color-sephia)] underline cursor-pointer"
      style={{ display: 'inline-block' }}
    >
      {word}
      {open && (
        <div className="text-[var(--color-lightbrown)] absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 bg-white p-6 rounded max-w-md shadow-lg border border-gray-200 min-w-[300px]">
          <h2 className="text-xl font-bold mb-2">{word}</h2>
          <Image src={image} alt={word} width={400} height={250} className="mb-2" />
          <p>{description}</p>
        </div>
      )}
    </span>
  );
};
