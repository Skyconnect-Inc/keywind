import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f0f7fe',
          '100': '#dcedfd',
          '200': '#c2e0fb',
          '300': '#97cef9',
          '400': '#66b3f4',
          '500': '#4393ee',
          '600': '#2d76e3',
          '700': '#2561d0',
          '800': '#244fa9',
          '900': '#1d3a70',
          '950': '#1a2b51',
        },
        secondary: colors.gray,
        accent: {
          '50': '#edfcf6',
          '100': '#d4f7e8',
          '200': '#adedd5',
          '300': '#77debd',
          '400': '#40c7a1',
          '500': '#1dab87',
          '600': '#108b6f',
          '700': '#0d6f5b',
          '800': '#0d5849',
          '900': '#0c483d',
          '950': '#052923',
        },
        provider: {
          apple: '#000000',
          bitbucket: '#0052CC',
          discord: '#5865F2',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
    },
  },
} satisfies Config;
