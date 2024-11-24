import Accordion from '@/components/organisms/Accordion';
import Card from '@/components/organisms/Card';
import { Button } from '@/components/ui/button';
import { faqs, guide } from '@/data';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <div className="pb-24">
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
          <h2 className="text-5xl font-semibold text-gray5">
            Hi, we’re Koin ✨
          </h2>
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
      <section className="py-24 px-20">
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
        <div className="mt-16 flex items-center gap-8">
          {guide.map((item, index) => (
            <Card {...item} key={`guide-${index}`} />
          ))}
        </div>
      </section>
      <section className=" py-24 px-20 text-center border-t border-gray4">
        <h1 className="font-semibold text-4xl text-gray5">
          Explore what Koin has to offer
        </h1>
        <h2 className="mt-5 text-xl text-gray2">
          Everything you need to convert, engage, and retain more users.
        </h2>
        sliderrrr
      </section>
      <section className="bg-background py-24 px-20 text-center">
        <h1 className="font-semibold text-4xl text-gray5">
          We’ll send you a nice letter once per week
        </h1>
        <h2 className="mt-5 text-xl text-gray2">
          No spam. Just the latest releases and tips, interesting articles, and
          exclusive interviews with great people.
        </h2>
        <form className="mx-auto mt-10">
          <Button size="md" className="px-8">
            Subscribe
          </Button>
        </form>
      </section>
      <section className="pt-24 pb-16">
        <h1 className="text-center text-gray5 font-semibold text-4xl ">
          Frequently asked questions
        </h1>
        <h4 className="text-center text-xl text-gray2 mt-5">
          Everything you need to know about the product and billing.
        </h4>
        <div className="max-w-3xl mx-auto mt-16">
          <Accordion items={faqs} />
        </div>
      </section>
      <section className="bg-background py-8 px-20 text-center mx-28">
        <p className="text-gray5 text-xl font-semibold mb-2">
          Still have questions?
        </p>
        <p className="text-lg text-gray2 mb-8">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <Button size="md" className="px-8">
          Get intouch
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
