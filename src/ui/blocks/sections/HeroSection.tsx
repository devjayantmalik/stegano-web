import React from "react";
import { Button } from "ui/elements/button";
import { HeroLogo } from "ui/elements/logo";

interface IHeroSectionProps {}

export const HeroSection: React.FC<IHeroSectionProps> = () => {
  return (
    <div className="relative z-10 pt-20 overflow-hidden lg:pt-0 lg:relative w-full">
      <section className="sm:hidden md:block absolute top-0 left-0 w-screen pb-20 transform opacity-100 lg:pb-0 md:h-screen">
        <svg viewBox="0 0 120 28" className="absolute bottom-0 left-0 w-full h-auto transform translate-y-32">
          <defs>
            <path
              id="wave"
              d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
            />
          </defs>
          <use id="wave3" className="text-indigo-300 fill-current opacity-10 wave" xlinkHref="#wave" x={0} y={-2} />
          <use id="wave2" className="text-indigo-200 fill-current opacity-5 wave" xlinkHref="#wave" x={0} y={0} />
          <use id="wave1" className="text-indigo-200 fill-current opacity-10 wave" xlinkHref="#wave" x={0} y={1} />
        </svg>
      </section>

      <section className="relative z-10 flex flex-col items-center h-auto lg:h-screen md:pt-0 lg:flex-row lg:relative max-w-6xl mx-auto">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
              You have landed at
              <br className="hidden lg:inline-block" />
              <em>Hide</em>
            </h1>
            <p className="mb-4 leading-relaxed">
              Top level battle tested tools and libraries to hide information in all medias: Audio, Video, Text and
              Images.
            </p>
            <p className="mb-8">
              We have solutions for education and guides to help you master the skills of modern secret cryptography,
              You might have heard about steganography.
            </p>
            <div className="flex justify-center gap-x-4">
              <Button>Get Started</Button>
              <Button basic>Open Playground</Button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <HeroLogo />
          </div>
        </div>
      </section>
    </div>
  );

  // return (
  // <section className="text-gray-600">
  //   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  //     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  //       <HeroLogo />
  //     </div>
  //     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  //       <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Welcome to Hide,</h1>
  //       <h2 className="sm:text-4xl text-3xl mb-4">We hide information in Pictures, Audio, Video and Text</h2>
  //       <div className="flex justify-start gap-4">
  //         <Button>Get Started</Button>
  //         <Button>Open Playground</Button>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  // );
};
