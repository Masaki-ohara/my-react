/** @type { import('@storybook/react').Preview } */
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'ghostwhite', value: '#f8f8ff' },
        { name: 'aquamarine', value: '#7fffd4' },
        { name: 'coral', value: '#ff7f50' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
