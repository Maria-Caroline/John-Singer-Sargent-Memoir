'use client'
import React, { useState } from 'react';

export interface ModalInfoProps {
  word: string;
  description: string;
}

export const ModalInfo: React.FC<ModalInfoProps> = ({ word, description }) => {
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
        <div className="text-[var(--color-lightbrown)] absolute left-1/2 bottom-full z-50 mt-2 -translate-x-1/2 bg-white p-6 max-w-sm w-fit min-w-[250px] shadow-lg border border-gray-200 rounded-xl">
          <h1 className="font-bold mb-2 font-[Montserrat]">{word}</h1>
          <p className="break-words">{description}</p>
        </div>
      )}
    </span>
  );
};
