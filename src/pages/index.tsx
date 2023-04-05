import Benefits from '@/components/Benefits';
import Citations from '@/components/Citations';
import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Headline from '@/components/Headline';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const test = process.env.NEXT_PUBLIC_APP_ENV;

const Index = () => {
  return (
    <Main
      meta={<Meta title={`Boooki ${test}`} description="Boooki landing page" />}
    >
      <Headline />
      <Benefits />
      <Citations />
      <Features />
      <CTA />
    </Main>
  );
};

export default Index;
