const toCamelCase = require('lodash/camelCase');

const componentsPath = 'src/components';
const elements = ['atoms', 'molecules', 'organisms', 'templates'];

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'adds React component',
    prompts: [
      {
        type: 'list',
        name: 'directory',
        message: 'Please specify a directory',
        choices: [...elements, 'create a new one'],
      },
      {
        type: 'input',
        name: 'newDirectory',
        message: 'Please enter a directory name',
        when: (answers) => answers.directory === 'create a new one',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Please enter component name',
      },
      {
        type: 'confirm',
        name: 'models',
        message: 'Add models file?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'styles',
        message: 'Add styles file?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'test',
        message: 'Add test file?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'mock',
        message: 'Add component props mock file?',
        default: true,
        when: (answers) => answers.test,
      },
      {
        type: 'confirm',
        name: 'fragment',
        message: 'Add graphql fragment for component?',
        default: true,
      },
    ],
    actions: (data) => {
      const directoryName = toCamelCase(data.newDirectory ? data.newDirectory : data.directory);

      const actionsList = [
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: 'plop/component/component.hbs',
        },
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/index.tsx`,
          templateFile: 'plop/component/index.hbs',
        },
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/{{properCase name}}.scss`,
          templateFile: 'plop/component/styles.hbs',
          skip: () => !data.models && 'skip adding styles file',
        },
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/models.d.ts`,
          templateFile: 'plop/component/models.hbs',
          skip: () => !data.models && 'skip adding models file',
        },
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/__tests__/{{properCase name}}.test.tsx`,
          templateFile: 'plop/component/test.hbs',
          skip: () => !data.test && 'skip adding test file, but why? =(',
        },
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/__mock__/mock.ts`,
          templateFile: 'plop/component/mock.hbs',
          skip: () =>
            (!data.test && 'skip adding mock file') || (!data.mock && 'skip adding mock file'),
        },
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/{{properCase name}}.fragment.tsx`,
          templateFile: 'plop/component/fragment.hbs',
          skip: () => !data.fragment && 'skip adding fragment file',
        },
      ];

      return actionsList;
    },
  });
};
