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
        <div className="h-[31vh] text-[var(--color-lightbrown)] absolute left-1/2 bottom-full z-50 mt-2 -translate-x-1/2 bg-white p-6 max-w-sm shadow-lg border border-gray-200 min-w-[300px] rounded-xl">
          <h2 className="font-bold mb-2 font-[Montserrat]">{word}</h2>
          <Image src={image} alt={word} width={200} height={90} className="mb-2" />
          <p>{description}</p>
        </div>
      )}
    </span>
  );
};
