import type { ReactNode } from 'react';

import { AppHeaderSimple } from '@/components/AppHeader';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div>
      <AppHeaderSimple />

      <main className="content mx-4 py-5 text-xl md:mx-20 lg:mx-auto lg:max-w-6xl">
        {props.children}
      </main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Tous droits
        réservés.
      </footer>
    </div>
  </div>
);

export { Main };
