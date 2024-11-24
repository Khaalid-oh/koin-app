'use client';
import { CircleMinusIcon, CirclePlusIcon } from 'lucide-react';
import React, { useState, ReactNode } from 'react';

interface AccordionProps {
  items: AccordionItem[];
}

interface AccordionItem {
  q: string;
  a: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={`accordion-item-${index}`} className="border-b border-gray6  pb-8">
          <p
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center text-left font-medium text-lg cursor-pointer text-gray5 "
            aria-expanded={openIndexes.includes(index)}
          >
            {item.q}
            {openIndexes.includes(index) ? (
              <CircleMinusIcon color='#98A2B3' />
            ) : (
              <CirclePlusIcon  color='#98A2B3'/>
            )}
          </p>
          {openIndexes.includes(index) && (
            <div className="pt-2 text-gray2">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
