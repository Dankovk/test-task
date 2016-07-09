React-redux-kit


## Installation

Install all dependencies. 

```
$ npm install
```


## Development

Builds the application and starts a webserver with livereload. By default the webserver starts at port 9000.

```
$ npm start
```

## Build

Builds a minified version of the application in the dist folder.

```
$ gulp build --type production
```


## Javascript

Javascript entry file: `app/scripts/main.js` <br />



**ES6 with babel**

Build system is working with the webpack [babel loader](https://github.com/babel/babel-loader) in order to load  .js/.jsx files. Babel allows  to use ES6 features like class, arrow functions and [much more](https://babeljs.io/docs/compare/).



###Requirements
* node
* npm
* gulp