import { HeroImage } from "./Image";

export const Hero = () => {
  return (
    <div className="pt-40 pb-16 pl-40">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Sneak NFT Demo
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Nothing special kids, just a test website to interact with a smart
            contract; just a trial...
          </p>

          <span className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
            ETH 0.0002 {/* @TODO Connect to live ETH price  */}
          </span>
        </div>
        <div className="w-full md:w-3/5 py-6 flex justify-center">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};
