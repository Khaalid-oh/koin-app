import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <div >
      <section className="h-[50.75rem] pt-[2.4rem] px-20 flex justify-end ">
        <div className="p-[2.0625rem] shadow-knShadow h-max min-w-[26.25rem] rounded-xl relative top-[8.375rem] left-36 z-10 bg-white ">
          <h1 className="text-3xl font-bold">Find coach/trainer</h1>
          <h4 className="text-gray1">
            Find and book a personalized professional coach{' '}
          </h4>
          <Button size={'full'} className="mt-4">
            <SearchIcon /> Search
          </Button>
        </div>
        <Image
          src="/images/hero-img.png"
          alt="hero-img"
          width={990}
          height={600}
          className="h-[41.25rem]"
        />
      </section>
      <section className="bg-background py-24 px-20 grid grid-cols-2 items-center">
        <div>
          <h2 className="text-5xl font-semibold text-gray5">Hi, we’re Koin ✨</h2>
          <p className="mb-10 mt-6 max-w-[31rem] text-xl text-gray2">
            Welcome to the one membership for all things fitness, wellness and
            beauty. Tell us where you’re located to follow along as we launch in
            new areas.
          </p>
          <div className="flex gap-3">
            <Button variant="secondary" size="md" className="px-8">
              Learn more
            </Button>
            <Button size="md" className="px-8">
              Get started
            </Button>
          </div>
        </div>
        <Image
          src="/images/hero-img2.png"
          alt="hero-img"
          width={576}
          height={496}
          className="h-[31rem]"
        />
      </section>
      <section className="py-24">
        <p className="px-3 text-sm py-1 rounded-2xl bg-primary/10 text-primary max-w-max mx-auto">
          How to use
        </p>
        <h2 className="text-center mt-4 mb-5 text-4xl font-semibold text-gray5">
          Book a lesson in few easy steps
        </h2>
        <p className="text-gray2 text-center mx-auto max-w-[49rem] text-xl">
          Book lessons up to a month in advanced and choose from our partnered
          coaches and trainer or suggest your own{' '}
        </p>
      </section>
    </div>
  );
};

export default HomePage;
