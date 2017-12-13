# Using typescript with React applications

## packages

````$ npm i --save react react-dom webpack webpack-dev-server typescript @types/react @types/react-dom ts-loader````


## steps
* create a webpack.config.js file
* create a public folder
* create a .tsconfig file
* add a section for scripts in the package.json file with 
    * build instruction
    * start instruction, for local webpack-dev-server
* create a src folder with app.tsx file in it
* in app.tsx define a component \<AppStateless/> that is typed to React.SFC
* in app.tsx define a component \<AppStateful /> that extends React.Component

## credits
Basarat Ali Syed course at:

https://egghead.io/lessons/egghead-bootstrap-a-typescript-react-project

https://github.com/basarat/typescript-react