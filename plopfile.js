const toCamelCase = require('lodash/camelCase');

const componentsPath = 'src/components';
const templateElements = ['templates', 'pages'];
const componentElements = ['atoms', 'molecules', 'organisms'];

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'adds React component',
    prompts: [
      {
        type: 'list',
        name: 'directory',
        message: 'Please specify a directory',
        choices: [...componentElements, ...templateElements, 'create a new one'],
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
        name: 'mock',
        message: 'Add component props mock file and import',
        default: true,
        when: (answers) => componentElements.includes(answers.directory),
      },
    ],
    actions: (data) => {
      const directoryName = toCamelCase(data.newDirectory ? data.newDirectory : data.directory);

      const templateActionsList = [
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: 'plop/template/Template.hbs',
        },
        {
          type: 'add',
          path: `src/${directoryName}/{{properCase name}}/index.tsx`,
          templateFile: 'plop/template/index.hbs',
        },
      ];

      const componentActionsList = [
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: 'plop/component/Component.hbs',
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
        },
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/models.d.ts`,
          templateFile: 'plop/component/models.hbs',
        },
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/__tests__/{{properCase name}}.test.tsx`,
          templateFile: 'plop/component/test.hbs',
        },
        {
          type: 'add',
          path: `${componentsPath}/${directoryName}/{{properCase name}}/__mock__/mock.js`,
          templateFile: 'plop/component/mock.hbs',
          skip: () => !data.mock && 'skip adding mock',
        },
      ];

      return templateElements.includes(directoryName) ? templateActionsList : componentActionsList;
    },
  });
};
