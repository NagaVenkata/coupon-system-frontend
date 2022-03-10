## About project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Start project
- docker-compose up --build (from adoveocouponsystem repo)
- (cmd + t if want 2 tabs in same terminal window)
- npm start (from coupon-system-frontend)

## Install project
- git clone git@github.com:nagavenkata/adoveocouponsystem.git (needs access first)
- npm install (from coupon-system-frontend)

## Help files
Component tree + function analysis light: https://www.figma.com/file/RJa569kdHOhQxAy5Su2ptK/component-tree?node-id=0%3A1

Coupon wireframe: https://www.figma.com/file/XDFVJANTdT8EFEeEva4fvr/coupon-platform?node-id=42%3A7405

# CSS, animations, images, icons etc
Using CSS modules due to time limit and testing together with: https://www.npmjs.com/package/node-sass 
npm install node-sass

(later on, maybe use for example Tailwind + sass, styled components or semantic ui?) TODO: remove styled-components dependencies odyl?

## Animations/ read svgs - TBD
https://greensock.com/docs/v3/Installation
npm install gsap 

## Images/ Icons
fontAwesome https://fontawesome.com/v5/docs/web/use-with/react
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

## Structure
index.js 
    App.js
        pages folder
        components folder
        img folder
        scss folder (assets)
    

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
