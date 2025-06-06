import React from 'react';
import { ModalInfo, ModalInfoProps } from '../[locale]/components/modal-info';

const infoWords: Record<string, ModalInfoProps> = {
  technique: {
    word: 'technique',
    image: '/modals/technique.png',
    description: 'The method and skill of Sargent’s brushwork.',
  },
  portrait: {
    word: 'portrait',
    image: '/modals/portrait.png',
    description: 'A painting, drawing, photograph, or engraving of a person, especially one depicting only the face or head and shoulders.',
  },
  landscape: {
    word: 'landscape',
    image: '/modals/landscape.png',
    description: 'A painting representing a view of natural scenery such as mountains, valleys, trees, rivers, and forests.',
  },
   oil: {
    word: 'oil',
    image: '/modals/master.png',
    description: 'A highly skilled artist in portraiture.',
  },
   watercolors: {
    word: 'watercolors',
    image: '/modals/master.png',
    description: 'A highly skilled artist in portraiture.',
  },
   charcoal: {
    word: 'charcoal',
    image: '/modals/master.png',
    description: 'A highly skilled artist in portraiture.',
  },
};

export function parseParagraph(text: string): React.ReactNode[] {
  const parts = text.split(/(\[.*?\])/g); // divide por [palavra]

  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]/);
    if (match) {
      const key = match[1];
      const info = infoWords[key];
      if (info) {
        return <ModalInfo key={i} {...info} />;
      }
      return match[1]; // fallback: só mostra o texto puro
    }
    return part;
  });
}
