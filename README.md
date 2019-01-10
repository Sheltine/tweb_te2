# React apollo starter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and provide an example of how to add [react-apollo](https://www.apollographql.com/docs/react/) and fetch data from Github's [GraphQL API](https://developer.github.com/v4/).

Check [this commit](https://github.com/heig-vd-tweb/react-apollo-starter/commit/728251583d5ce06840939b33aa1c3f1d29b000d2?diff=split) to see what changes were needed to make this work !

You might be interested to go through this tutorial ([React apollo - Getting started](https://www.howtographql.com/react-apollo/1-getting-started/)) for a step-by-step guide.

## Running the app

1. Copy `.env.example` into a file called `.env`, and replace `xxx` with your Github's personal access token. You can generate one from the [developer settings](https://github.com/settings/tokens).

2. Run `yarn install` to install all the project dependencies

3. Then, hit `yarn start`

## Available Scripts

In the project directory, you can run:

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

To learn Graphql, check out the [GraphQL documentation](https://graphql.org/)

To learn Apollo, check out the [Apollo documentation](https://apollographql.com/)