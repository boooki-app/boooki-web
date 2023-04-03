import Image from 'next/image';
import React from 'react';

import Image2 from '../../assets/francois-mauriac.webp';
import Image1 from '../../assets/saint-augustin.webp';

export default function Citations() {
  return (
    <section id="citations">
      <div className="mt-36 py-4 text-center">
        <h2 className="mb-4 text-3xl font-bold leading-tight text-black md:text-4xl">
          Paroles inspirantes pour raviver l&apos;amour de la lecture
        </h2>
      </div>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <li className="rounded-lg bg-gray-100 p-16 text-center shadow-md">
          <Image
            className="mx-auto rounded-full"
            src={Image1}
            alt="Portrait de Saint Augustin"
          />
          <p className="py-4 text-lg italic text-gray-700">
            &quot;Le monde est un livre, et ceux qui ne voyagent pas n&apos;en
            lisent qu&apos;une page.&quot;
          </p>
          <p className="mt-4 text-sm font-bold text-gray-600">Saint Augustin</p>
        </li>

        <li className="rounded-lg bg-gray-100 p-16 text-center shadow-md">
          <Image
            className="mx-auto rounded-full"
            src={Image2}
            alt="Portrait de François Mauriac"
          />
          <p className="py-4 text-lg italic text-gray-700">
            &quot;La lecture, une porte ouverte sur un monde enchanté.&quot;
          </p>
          <p className="mt-4 text-sm font-bold text-gray-600">
            François Mauriac
          </p>
        </li>
      </ul>
    </section>
  );
}
