import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

import Screen1 from '../../assets/screen1.webp';
import Screen2 from '../../assets/screen2.webp';
import Screen3 from '../../assets/screen3.webp';

export default function Features() {
  return (
    <section
      id="features"
      className="mt-48 grid grid-cols-1 gap-16 md:grid-cols-2"
    >
      <div className="grid grid-cols-1 gap-6">
        <div>
          <div className="">
            <Image
              className="h-auto w-full rounded-2xl"
              alt="screenshot1"
              src={Screen1}
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="">
              <Image
                className="h-auto w-full rounded-2xl"
                alt="screenshot2"
                src={Screen2}
              />
            </div>
            <div className="">
              <Image
                className="h-auto w-full rounded-2xl"
                alt="screenshot3"
                src={Screen3}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <h2 className="mb-4 text-3xl font-bold leading-tight text-black md:text-4xl">
          L&apos;avenir de la lecture se trouve dans nos fonctionnalités
          innovantes
        </h2>

        <ul>
          <li className="flex justify-center">
            <span className="mt-6">
              <CheckBadgeIcon className="h-8 w-8 text-primary" />
            </span>
            <p className="ml-4 w-full text-lg">
              Moteur de recherche avancé et système de recommandations
              personnalisées, basées sur vos goûts littéraires et vos centres
              d&apos;intérêt.
            </p>
          </li>

          <div className="my-4 h-px w-full bg-gray-300"></div>

          <li className="flex justify-center">
            <span className="mt-6">
              <CheckBadgeIcon className="h-8 w-8 text-primary" />
            </span>
            <p className="ml-4 w-full text-lg">
              Empruntez et prêtez des livres en toute simplicité au sein de
              notre communauté de lecteurs passionnés. Profitez d&apos;un large
              choix de livres et découvrez de nouveaux auteurs, genres et sagas.
            </p>
          </li>

          <div className="my-4 h-px w-full bg-gray-300"></div>

          <li className="flex justify-center">
            <span className="mt-6">
              <CheckBadgeIcon className="h-8 w-8 text-primary" />
            </span>
            <p className="ml-4 w-full text-lg">
              Système de livraison innovant et solidaire permettant
              d&apos;emprunter des livres à des amis ou utilisateurs éloignés
              géographiquement.
            </p>
          </li>

          <div className="my-4 h-px w-full bg-gray-300"></div>

          <li className="flex justify-center">
            <span className="mt-6">
              <CheckBadgeIcon className="h-8 w-8 text-primary" />
            </span>
            <p className="ml-4 w-full text-lg">
              Rejoignez une communauté de lecteurs engagés pour partager vos
              coups de cœur, vos avis et vos conseils.
            </p>
          </li>

          <div className="my-4 h-px w-full bg-gray-300"></div>

          <li className="flex justify-center">
            <span className="mt-6">
              <CheckBadgeIcon className="h-8 w-8 text-primary" />
            </span>
            <p className="ml-4 w-full text-lg">
              Suivez vos emprunts, vos prêts, et dressez la liste de vos
              prochaines lectures en quelques clics.
            </p>
          </li>

          <div className="my-4 h-px w-full bg-gray-300"></div>

          <li className="flex justify-center">
            <span className="mt-6">
              <CheckBadgeIcon className="h-8 w-8 text-primary" />
            </span>
            <p className="ml-4 w-full text-lg">
              Restez en contact, coordonnez les échanges et simplifiez le
              processus d&apos;emprunt grâce à la messagerie instantanée
              pratique et conviviale.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
