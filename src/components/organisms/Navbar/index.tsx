import Image from 'next/image';
import React from 'react';
import { navItems } from './data';
import Navitem from './Navitem';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="w-full h-[6.3125rem] px-20 flex items-center">
      <Image src="/svgs/logo.svg" alt="logo" width={98} height={47} />
      <div className="ml-10 flex items-center gap-x-9 px-4 text-[#020817]">
        {navItems.map((navitem, navIndex) => (
          <Navitem key={`nav-${navIndex}`} item={navitem} />
        ))}
      </div>
      <p className="flex-grow" />
      <Button variant="outline" className="mr-6 w-40">
        Join as a Coach
      </Button>
      <Button className="w-40">Login</Button>
    </nav>
  );
};

export default Navbar;
