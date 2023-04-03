import {
  BanknotesIcon,
  MagnifyingGlassIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

export default function Benefits() {
  return (
    <section id="benefits">
      <div className="py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold leading-tight text-black md:text-4xl">
          Du défi à l&apos;épanouissement : Boooki réinvente la lecture
        </h2>
        <p className="text-lg text-gray-900 md:mx-auto md:w-1/2">
          Trouver des livres spécifiques ou rares, réduire les coûts
          d&apos;achat tout en échangeant avec d&apos;autres passionnés,
          surmonter les distances pour emprunter des livres : voilà les défis
          courants auxquels sont confrontés les lecteurs !
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <li>
          <div className="flex h-14 w-14 items-center justify-center bg-green-50">
            <MagnifyingGlassIcon className="h-10 w-10 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Livres accessibles</h3>
          <p className="text-lg">
            Boooki facilite la recherche et l&apos;accès à des livres rares ou
            spécifiques en connectant les membres de la communauté partageant
            les mêmes goûts littéraires. Dénichez enfin ces pépites qui vous
            manquent.
          </p>
        </li>
        <li>
          <div className="flex h-14 w-14 items-center justify-center bg-green-50">
            <BanknotesIcon className="h-10 w-10 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Économies assurées</h3>
          <p className="text-lg">
            Grâce à notre plateforme d&apos;échange et d&apos;emprunt, diminuez
            les coûts liés à l&apos;achat de livres en empruntant ceux des
            autres membres. Faites des économies tout en découvrant de nouvelles
            lectures.
          </p>
        </li>
        <li>
          <div className="flex h-14 w-14 items-center justify-center bg-green-50">
            <UserGroupIcon className="h-10 w-10 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Échanges enrichissants</h3>
          <p className="text-lg">
            La communauté de notre application vous permet de discuter et
            d&apos;échanger avec d&apos;autres passionnés de lecture. Partagez
            vos coups de cœur, vos avis et vos conseils pour une expérience
            littéraire enrichissante.
          </p>
        </li>
        <li>
          <div className="flex h-14 w-14 items-center justify-center bg-green-50">
            <TruckIcon className="h-10 w-10 text-primary" />
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            Emprunts sans frontières
          </h3>
          <p className="text-lg">
            Surmontez les distances grâce à notre système de livraison innovant
            et solidaire. Empruntez des livres à des amis ou connaissances
            éloignées sans contrainte géographique, et élargissez ainsi votre
            horizon littéraire.
          </p>
        </li>
      </ul>
    </section>
  );
}
