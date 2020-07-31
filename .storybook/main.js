const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
    };

    return config;
  },
};
