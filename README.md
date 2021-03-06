This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

We use [yarn](https://yarnpkg.com/) to manage dependencies.

To install `yarn` on MacOS with [homebrew](https://brew.sh/):

```
brew install yarn
```

For installation on a different OS, see the docs [here](https://classic.yarnpkg.com/en/docs/install/).

## Getting started

First clone the repo.

SSH:
```
git clone git@github.com:bits-and-bots/bits-app-web.git
```

HTTPS:
```
git clone https://github.com/bits-and-bots/bits-app-web.git
```

Then, from the base directory of the project, install the dependencies:
```
yarn install
```

Now you can run all the available scripts below!

## Available Scripts

In the project directory, you can run:

### `yarn deploy`

Deploys a new live version of the app.<br>

For now, please **only deploy after your changes are merged into master** and **always deploy from master**.

Before deploying, please ensure you're on the master branch, and you have no uncommitted or unpushed changes (`git status` is clean, and your remote tracking branch is up to date with your local branch.)

This script makes a new build based off your local version of the project. This works by first generating a new build (placed into the `build`) directory, then pushing the resulting contents of that directory to the `gh-pages` branch.

This can only be done if you have push access to the `gh-pages` branch. If you don't have push access and you should, create a GitHub issue or send a question to our [#website](https://bits-n-bots.slack.com/archives/CG6RUDZ29) channel in Slack.

The website may take a few minutes to deploy. After waiting a few minutes, you should ensure that the site is up (you will likely have to do a hard refresh or view it in private browser mode to avoid viewing a locally cached version).

Note: eventually all deployment will be done during CI/CD and no humans will have push access.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
