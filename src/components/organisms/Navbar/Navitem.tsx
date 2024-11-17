import { ChevronDown } from 'lucide-react';
import React from 'react';

const Navitem = ({ item }: { item: { name: string; subItems?: string[] } }) => {
  return (
    <div className="cursor-pointer py-2 flex items-center gap-x-[0.375rem]">
      {item.name} {item.subItems ? <ChevronDown size={'1rem'} /> : null}
    </div>
  );
};

export default Navitem;
