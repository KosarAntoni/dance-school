const path = require(`path`);

const PROJECT_ROOT = path.resolve(__dirname, '/');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        layout: path.resolve(PROJECT_ROOT, 'src/layout'),
        atoms: path.resolve(PROJECT_ROOT, 'src/atoms'),
        molecules: path.resolve(PROJECT_ROOT, 'src/molecules'),
        organisms: path.resolve(PROJECT_ROOT, 'src/organisms'),
        templates: path.resolve(PROJECT_ROOT, 'src/templates'),
        pages: path.resolve(PROJECT_ROOT, 'src/pages'),
        styles: path.resolve(PROJECT_ROOT, 'src/styles'),
        mocks: path.resolve(PROJECT_ROOT, 'src/mocks'),
        utils: path.resolve(PROJECT_ROOT, 'src/utils'),
        testUtils: path.resolve(PROJECT_ROOT, 'src/testUtils'),
        hooks: path.resolve(PROJECT_ROOT, 'src/hooks'),
        shared: path.resolve(PROJECT_ROOT, 'src/shared'),
        constants: path.resolve(PROJECT_ROOT, 'src/constants'),
      },
    },
  });
};
