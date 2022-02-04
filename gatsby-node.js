const path = require(`path`);

const PROJECT_ROOT = path.resolve(__dirname, './');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        atoms: path.resolve(PROJECT_ROOT, 'src/components/atoms'),
        molecules: path.resolve(PROJECT_ROOT, 'src/components/molecules'),
        organisms: path.resolve(PROJECT_ROOT, 'src/components/organisms'),
        templates: path.resolve(PROJECT_ROOT, 'src/components/templates'),
        pages: path.resolve(PROJECT_ROOT, 'src/pages'),
        styles: path.resolve(PROJECT_ROOT, 'src/styles'),
        mocks: path.resolve(PROJECT_ROOT, 'src/mocks'),
        utils: path.resolve(PROJECT_ROOT, 'src/utils'),
        types: path.resolve(PROJECT_ROOT, 'src/types'),
        testUtils: path.resolve(PROJECT_ROOT, 'src/testUtils'),
        hooks: path.resolve(PROJECT_ROOT, 'src/hooks'),
        shared: path.resolve(PROJECT_ROOT, 'src/shared'),
        constants: path.resolve(PROJECT_ROOT, 'src/constants'),
      },
    },
  });
};
