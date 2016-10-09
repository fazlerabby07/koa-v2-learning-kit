# Initialize

1. Execute `npm install` on project root.

2. Create configuration file:
  - Create a copy of `[project root]/src/global_config_sample.js` file in the same directory
  - Rename to `global_config.js`
  - Adjust settings as needed

3. Create knex migration environment file:
  - Create a copy of `[project root]/knexfile_sample.js` file in the same directory
  - Rename to `knexfile.js`
  - Adjust settings as needed
4. Create Database as a  global_config.js file->globalConfig object ->database variable name

# Run

For development:
`npm run dev`

For Production:
`npm start`

# Lint

`npm run lint`

The styleguide has been taken and slightly modified from: [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

**Please lint before committing.**

# Dependency Maintenance

  - To check if all the dependencies are up-to-date: `npm run check-updates`
  - To update `package.json` to use latest stable dependencies and install them: `npm run upgrade-all`

# Tools

- `Editorconfig`: Install plugin for your favorite editor from [http://editorconfig.org/](http://editorconfig.org/). That'll make it obey the configuration written in `.editorconfig`.
- `Eslint` for `atom`:
  - Install [https://atom.io/packages/linter](https://atom.io/packages/linter) and [https://atom.io/users/AtomLinter](https://atom.io/users/AtomLinter) plugins.


# Migration

  - Install knex: `npm install knex -g`
  - Make Migration File: `knex migrate:make file_name`
  - Run Migration: `knex migrate:latest`

# seed

  - Make Seed File: `knex seed:make file_name`
  - Run Seed: `knex seed:run`
