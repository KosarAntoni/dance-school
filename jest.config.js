module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/jest/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/jest/__mocks__/file-mock.js`,
    'atoms/(.*)': '<rootDir>/src/components/atoms/$1',
    'molecules/(.*)': '<rootDir>/src/components/molecules/$1',
    'organisms/(.*)': '<rootDir>/src/components/organisms/$1',
    'templates/(.*)': '<rootDir>/src/components/templates/$1',
    'pages/(.*)': '<rootDir>/src/pages/$1',
    'utils/(.*)': '<rootDir>/src/utils/$1',
    'hooks/(.*)': '<rootDir>/src/hooks/$1',
    'testUtils/(.*)': '<rootDir>/src/testUtils/$1',
    'shared/(.*)': '<rootDir>/src/shared/$1',
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/jest/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/jest/jest-setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};
