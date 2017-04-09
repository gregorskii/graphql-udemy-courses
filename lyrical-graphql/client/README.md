# Redux Starter

A Redux starter with with Mocha, WallabyJs, and Karma for testing, React Storybook for visual design, and Flow for static type checking.

## Notes

Storybook is broken under webpack 2 per [#637](https://github.com/storybooks/react-storybook/pull/637)

To use this project with Jasmine see [the readme and config files](https://github.com/gregorskii/redux-starter/tree/master/test/unit/spec/jasmine). The project is configured to use [storybook-addon-specifications](https://github.com/mthuret/storybook-addon-specifications) with Mocha only.

## Prerequisites

**Install NVM**

NVM is a Node Version Manager that allows a system to have more than one version of Node installed, and also allows easy switching on Node version depending on project requirements.

Refer to the [NVM Repo](https://github.com/creationix/nvm#installation) for up to date installation process.

## Using NVM

NVM will manage installing specific versions of Node.

NVM has a config file `.nvmrc` which contains the version the application supports.

From the root directory run:

```
nvm use
```

It will likely prompt you that the correct version of Node is not installed. It will output the version of Node that you need to install.

You would see this error:

NOTE the version below is likely out of date, refer to the `.nvmrc` file.

```
N/A: version "v7.7.2" is not yet installed
```

```
nvm install v7.7.2
```

The version of NVM that is used is saved in the `.nvmrc` file at the root of this project.

You can add this script to your `.zshrc` when using ZSH to automatically run `nvm use` when `cd`ing into a new folder:

```
#  Autorun nvmrc files
#  -------------------------------------------------------------------
autoload -U add-zsh-hook
load-nvmrc() {
  if [[ -f .nvmrc && -r .nvmrc ]]; then
    nvm use
  fi
}
```

## Install Node Packages

Install Global Packages:

```
npm i -g karma-cli
```

Install Project Packages:

```
npm i
```

## Code style

The project adheres to the Javascript style guide as defined by AirBnB [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Unit Testing

The project uses several types of Unit Tests depending on the scope of testing being run.

For development of client side components the project uses [Wallaby.js](https://wallabyjs.com/) for interactive unit tests.

For CI tests the project uses [Karma](https://karma-runner.github.io/1.0/index.html).

## Getting Started

This project has several `npm` commands setup to get you up and running.

To start React Storybook run:

```
npm run storybook
```

To run unit tests in `karma` run:

```
npm run karma
```

To lint the code outside of webpack using `eslint` run:

```
npm run lint
```

To develop with Webpack Dev Server run:

```
npm run dev
```
