
export interface Environment {
  label: string;
  production: boolean;
  piwik: {
    enabled: boolean;
    siteURL?: string;
    siteId?: number;
  },
  home: {
    showOffers: boolean;
  }
}

const environments: Environment[] = [
  {
    label: "development",
    production: false,
    // tslint:disable-next-line: object-literal-sort-keys
    piwik: {
      enabled: false
    },
    home: {
      showOffers: true
    }
  },
  {
    label: "production",
    production: true,
    // tslint:disable-next-line: object-literal-sort-keys
    piwik: {
      enabled: true,
      siteId: 6,
      siteURL: "stats.num.social.gouv.fr"
    },
    home: {
      showOffers: false
    }
  }
]

export const getEnvironment: () => Environment = () => {
  const nodeEnv = process.env.NODE_ENV;
  const env = environments.find((val: Environment) => val.label === nodeEnv);
  if (!env) {
    throw new Error(`[environment] env label ${nodeEnv} not found`);
  }
  return env;
}
