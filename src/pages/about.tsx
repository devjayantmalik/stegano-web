import { NextPage } from "next";
import { GeneralFooter } from "ui/blocks/footer";
import { GeneralHeader } from "ui/blocks/headers";

interface IAboutPageProps {}

const AboutPage: NextPage<IAboutPageProps> = () => {
  return (
    <main>
      <GeneralHeader />

      <section className="relative px-0 py-20 bg-white xl:px-20 min-w-screen animation-fade animation-delay">
        <div className="container px-10 mx-auto sm:px-0">
          <div className="sm:flex">
            <div className="flex-1 mr-12">
              <div className="text-sm text-gray-500 uppercase">Get to know us more</div>
              <div className="text-4xl">The Dream Team</div>
              <div className="mt-10">
                <div className="flex">
                  <div className="flex-shrink">
                    <svg
                      className="w-10 text-green-500 stroke-current"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      data-type="outline"
                      data-name="fullsize">
                      <g transform="translate(0, 0)" className="nc-icon-wrapper" fill="none">
                        <rect
                          x={9}
                          y={8}
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          width={6}
                          height={8}
                          strokeLinejoin="miter"
                        />
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={5}
                          y1={6}
                          x2={5}
                          y2={18}
                          strokeLinejoin="miter"></line>
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={19}
                          y1={6}
                          x2={19}
                          y2={18}
                          strokeLinejoin="miter"></line>
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={1}
                          y1={4}
                          x2={1}
                          y2={20}
                          strokeLinejoin="miter"></line>
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={23}
                          y1={4}
                          x2={23}
                          y2={20}
                          strokeLinejoin="miter"></line>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-grow ml-5">
                    <div className="text-2xl">Powerhouse</div>
                    <p className="mt-5 leading-7 text-gray-700 text-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="flex mt-5">
                  <div className="flex-shrink">
                    <svg
                      className="w-10 text-green-500 stroke-current"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      data-type="outline"
                      data-name="fullsize">
                      <g transform="translate(0, 0)" className="nc-icon-wrapper" fill="none">
                        <rect
                          x={9}
                          y={8}
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          width={6}
                          height={8}
                          strokeLinejoin="miter"
                        />
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={5}
                          y1={6}
                          x2={5}
                          y2={18}
                          strokeLinejoin="miter"></line>
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={19}
                          y1={6}
                          x2={19}
                          y2={18}
                          strokeLinejoin="miter"></line>
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={1}
                          y1={4}
                          x2={1}
                          y2={20}
                          strokeLinejoin="miter"></line>
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={23}
                          y1={4}
                          x2={23}
                          y2={20}
                          strokeLinejoin="miter"></line>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-grow ml-5">
                    <div className="text-2xl">Tenure</div>
                    <p className="mt-5 leading-7 text-gray-700 text-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="flex mt-5">
                  <div className="flex-shrink">
                    <svg
                      className="w-10 text-green-500 stroke-current"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      data-type="outline"
                      data-name="fullsize">
                      <g transform="translate(0, 0)" className="nc-icon-wrapper" fill="none">
                        <rect
                          x={9}
                          y={8}
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          width={6}
                          height={8}
                          strokeLinejoin="miter"
                        />
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={5}
                          y1={6}
                          x2={5}
                          y2={18}
                          strokeLinejoin="miter"></line>
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={19}
                          y1={6}
                          x2={19}
                          y2={18}
                          strokeLinejoin="miter"></line>
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={1}
                          y1={4}
                          x2={1}
                          y2={20}
                          strokeLinejoin="miter"></line>
                        <line
                          data-color="color-2"
                          fill="none"
                          stroke="currentColor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                          x1={23}
                          y1={4}
                          x2={23}
                          y2={20}
                          strokeLinejoin="miter"></line>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-grow ml-5">
                    <div className="text-2xl">Vision</div>
                    <p className="mt-5 leading-7 text-gray-700 text-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-10 mt-20 sm:flex-1 sm:mt-0 sm:px-0 sm:mt-48 lg:mt-0">
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-1">
                  <img
                    className="min-w-full rounded-md"
                    src="https://picsum.photos/245/330?grayscale"
                    width={245}
                    height={330}
                  />
                  <img
                    className="min-w-full mt-5 rounded-md"
                    src="https://picsum.photos/245/245?grayscale"
                    width={245}
                    height={245}
                  />
                </div>
                <div className="col-span-1 pt-10">
                  <img
                    className="min-w-full rounded-md"
                    src="https://picsum.photos/240/240?grayscale"
                    width={240}
                    height={240}
                  />
                  <img
                    className="min-w-full mt-5 rounded-md"
                    src="https://picsum.photos/245/335?grayscale"
                    width={245}
                    height={335}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center min-h-screen bg-white bg-cover min-w-screen">
        <div className="flex flex-col items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-6xl lg:p-0">
          <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0">
            <h1 className="relative z-20 text-5xl font-extrabold leading-none text-purple-500 xl:text-6xl sm:text-center lg:text-left">
              Designed with
              <br className="md:hidden lg:block" /> <span className="text-gray-800">you in mind</span>
            </h1>
            <p className="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">
              We've crafted the ultimate design tool that will help you build the design of your dreams. Built with
              configuration in mind, you can fully customize every aspect.
            </p>
            <div className="relative flex mt-4">
              <a
                href="#_"
                className="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10">
                Get Started
              </a>
              <a
                href="#_"
                className="relative flex items-center self-start justify-center py-3 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm md:pl-16 md:pr-10 hover:text-purple-500 focus:outline-none md:py-4 md:text-lg xl:text-xl">
                <svg
                  className="absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-purple-500">How It Works</span>
              </a>
            </div>
          </div>
          <div className="relative w-full px-5 rounded-lg cursor-pointer md:w-2/3 lg:w-1/2 group xl:px-0">
            <div className="absolute top-0 left-0 w-11/12 -mt-20 opacity-50">
              <svg
                className="w-full h-full ml-4 text-purple-100"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="relative overflow-hidden rounded-md shadow-2xl cursor-pointer group">
              <div className="absolute flex items-center justify-center w-full h-full">
                <span className="flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full shadow-2xl">
                  <svg
                    className="w-auto h-8 ml-1 text-white fill-current"
                    viewBox="0 0 52 66"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z"
                      fillRule="nonzero"
                    />
                  </svg>
                </span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&h=1603&q=80"
                className="z-10 object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section: Company with Values */}
      <section>
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 pb-16 lg:px-8 lg:py-32">
          {/* Values with Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 rounded-lg border text-center p-8">
            <div className="space-y-4">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50 hi-outline hi-heart inline-block w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h3 className="font-medium">Passion</h3>
            </div>
            <div className="space-y-4">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-emerald-500 hi-outline hi-beaker inline-block w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
              <h3 className="font-medium">Creativity</h3>
            </div>
            <div className="space-y-4">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-orange-500 hi-outline hi-badge-check inline-block w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <h3 className="font-medium">Design</h3>
            </div>
            <div className="space-y-4">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-500 hi-outline hi-check-circle inline-block w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-medium">Quality</h3>
            </div>
            <div className="space-y-4">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-500 hi-outline hi-lightning-bolt inline-block w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-medium">Simplicity</h3>
            </div>
            <div className="space-y-4">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-pink-500 hi-outline hi-fire inline-block w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
              <h3 className="font-medium">Motivation</h3>
            </div>
          </div>
          {/* END Values with Icons */}
          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-50 hi-solid hi-heart inline-block w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Passion</span>
              </h3>
              <p className="leading-relaxed text-gray-600">
                We are passionate with what we do and love crafting products that can make your life easier and help you
                succeed. We pay attention to small details and always aiming for the best.
              </p>
            </div>
            <div>
              <h3 className="flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-50 hi-solid hi-arrow-down inline-block w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Commitment</span>
              </h3>
              <p className="leading-relaxed text-gray-600">
                We are committed to our work and stand by our projects. Our aim is to improve them in every update and
                offer the most full-featured packages with the smallest possible footprint.
              </p>
            </div>
            <div>
              <h3 className="flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-50 hi-solid hi-cube-transparent inline-block w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Less is More</span>
              </h3>
              <p className="leading-relaxed text-gray-600">
                We believe that design should be invisible and enhance the user experience, not get in the way. This
                gives room for your content to breath and attracts your users’ attention.
              </p>
            </div>
          </div>
          {/* END Values */}
        </div>
      </section>
      {/* END About Section: Company with Values */}

      <GeneralFooter />
    </main>
  );
};

export default AboutPage;
