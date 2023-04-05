// FIXME: Update this configuration file based on your project information

type Environment = 'alpha' | 'beta' | 'production';

const environment = (process.env.NEXT_PUBLIC_APP_ENV ||
  'production') as Environment;

const prefixes = {
  alpha: 'alpha',
  beta: 'beta',
  production: '',
};

const titlePrefix = prefixes[environment];

export const AppConfig = {
  site_name: `Boooki`,
  title: `Boooki ${titlePrefix}`,
  description: 'Boooki website',
  locale: 'fr',
};
