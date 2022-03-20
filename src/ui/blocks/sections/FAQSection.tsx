import React from "react";
import { RoutesDict } from "src/constants/RoutesDict";
import { Anchor } from "ui/elements/anchor";

interface IFAQSectionProps {}

// TODO: fix support center link
export const FAQSection: React.FC<IFAQSectionProps> = () => {
  return (
    <section>
      {/* Heading */}
      <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="text-center">
          <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">We Answer</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Frequently Asked Questions</h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Be sure to get in touch and let us know if you have any further questions. We are here to help you.
          </h3>
        </div>
        {/* END Heading */}
        {/* Tabs */}
        <nav className="flex items-center border-b border-gray-200">
          <a
            href="javascript:void(0)"
            className="font-medium flex items-center space-x-2 px-3 md:px-5 py-4 border-b-2 -mb-px text-indigo-500 border-indigo-500 grow justify-center">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-50 hi-solid hi-lightning-bolt inline-block w-5 h-5">
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline-block">Features</span>
          </a>
          <a
            href="javascript:void(0)"
            className="font-medium flex items-center space-x-2 px-3 md:px-5 py-4 border-b-2 -mb-px text-gray-500 border-transparent hover:text-indigo-500 active:text-gray-500 grow justify-center">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-50 hi-solid hi-user-circle inline-block w-5 h-5">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline-block">Accounts</span>
          </a>
          <a
            href="javascript:void(0)"
            className="font-medium flex items-center space-x-2 px-3 md:px-5 py-4 border-b-2 -mb-px text-gray-500 border-transparent hover:text-indigo-500 active:text-gray-500 grow justify-center">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-50 hi-solid hi-academic-cap inline-block w-5 h-5">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span className="hidden sm:inline-block">Licenses</span>
          </a>
        </nav>
        {/* END Tabs */}
        {/* FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="prose prose-indigo">
            <h4>What features are included?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur
              ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div className="prose prose-indigo">
            <h4>Can I use PayPal to pay you?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur
              ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div className="prose prose-indigo">
            <h4>Do I get access to the community?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur
              ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div className="prose prose-indigo">
            <h4>Can I get a refund just in case?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur
              ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div className="prose prose-indigo">
            <h4>Do you offer email support?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur
              ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div className="prose prose-indigo">
            <h4>Are the updates free for life?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur
              ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
        </div>
        {/* END FAQ */}
        {/* Link */}
        <div className="text-center">
          <Anchor
            href="#"
            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-50 hi-solid hi-external-link inline-block w-5 h-5">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            <span>Go to support center</span>
          </Anchor>
        </div>
        {/* END Link */}
      </div>
    </section>
  );
};
