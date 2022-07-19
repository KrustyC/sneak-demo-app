import Image from "next/image";

export function CollectionPreview() {
  return (
    <section className="bg-gray-100 z-1 py-24">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Take a "Sneak" Peak
        </h1>

        <div className="w-full mb-12">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>

        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          <div className="flex h-[400px] relative flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-transparent mt-8">
            <Image
              src="/images/random-sneak-with-sneaks-hair.png"
              alt="sneak with snakes hair"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex h-[500px] relative flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
            <Image
              src="/images/random-sneak-with-gold.png"
              alt="sneak with gold"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex h-[400px] flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-transparent mt-8 relative">
            <Image
              src="/images/random-sneak-with-headphones.png"
              alt="sneak with headphones"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
