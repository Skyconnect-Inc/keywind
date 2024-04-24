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
          '50': '#1d3a70',
          '100': '#1d3a70',
          '200': '#1d3a70',
          '300': '#1d3a70',
          '400': '#1d3a70',
          '500': '#1d3a70',
          '600': '#1d3a70',
          '700': '#1d3a70',
          '800': '#1d3a70',
          '900': '#1d3a70',
          '950': '#1d3a70',
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
