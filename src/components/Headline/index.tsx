import Image from 'next/image';
import React from 'react';

import Illustration from '../../assets/test_boooki.webp';

const Headline: React.FC = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto px-2 md:mx-4">
        <div className="text-center">
          {/* Headline */}
          <h1 className="mb-4 text-4xl font-bold leading-tight text-black md:text-6xl">
            Vivez une expérience de lecture unique et passionante
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-xl font-medium text-black">
            Découvrez Boooki, une application mobile qui permet d&apos;emprunter
            les livres des autres utilisateurs et quasiment instantanément.
          </p>

          {/* Form */}
          <form className="mx-auto w-full">
            <div className="-mx-2 flex flex-wrap">
              <div className="w-full px-2 md:mx-auto md:w-1/2">
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1"
                  placeholder="Votre meilleure adresse email*"
                />
              </div>
            </div>

            <button className="mt-4 w-full rounded-full bg-primary py-4 text-sm uppercase text-white md:w-1/2">
              Je m&apos;inscris
            </button>

            <p className="w-full text-sm text-gray-500 md:mx-auto md:w-1/2">
              Comme un bon livre, votre adresse email sera bien gardée. Nous ne
              l&apos;utiliserons que pour partager les actualités de
              l&apos;application.
            </p>
          </form>
        </div>
      </div>

      <Image
        className="shadow-2xl"
        src={Illustration}
        alt="Description de l'image"
      />
    </header>
  );
};

export default Headline;
