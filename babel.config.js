module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: ['>0.25%', 'not dead'],
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
};
