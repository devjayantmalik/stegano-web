import { NextPage } from "next";
import { RoutesDict } from "src/constants/RoutesDict";
import { Anchor } from "ui/elements/anchor";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import { GeneralHeader } from "ui/blocks/headers";
import { GeneralFooter } from "ui/blocks/footer";

interface INotFoundPageProps {}

const NotFoundPage: NextPage<INotFoundPageProps> = () => {
  const router = useRouter();
  return (
    <main>
      <GeneralHeader />
      <div className="min-h-screen flex items-center relative overflow-hidden">
        <section className="text-center container mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="text-6xl md:text-9xl font-extrabold mb-10 md:mb-20 inline-block relative">
            <div className="absolute inset-0 border-4 border-red-50 animate-ping" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 relative">
              404
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Page Not Found</h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            We are sorry but the page you are looking for was not found..
          </h3>

          <Anchor
            onClick={() => router.back()}
            href={RoutesDict.common.welcome}
            className="mt-10 inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
            <FiArrowLeft className="inline-block w-5 h-5" />
            <span>Go Back</span>
          </Anchor>
        </section>
      </div>
      <GeneralFooter />
    </main>
  );
};

export default NotFoundPage;
