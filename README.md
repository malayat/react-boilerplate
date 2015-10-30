# React Simple Boilerplate with Bootstrap and ES6
This contains the simple environment for to build React Applications with Bootstrap style and ECMAScript 6 syntax.

## This project gives you the following:
* React
* Browserify  
* Bootstrap for styling  
* Gulp build that:  
  * compiles JSX
  * transform ES6 to ES5
  * uglify JS and CSS files
  * runs a dev webserver
  * opens your browser at the dev URL  
  * reloads the browser upon save  

## Requirements
1. [NodeJS](http://www.nodejs.org)
2. Installs gulp globally `npm install -g gulp`
2. Download this repo

## To get started
1. Installs packages `npm install`
2. Builds the project and opens your browser `gulp`
4. Navigate to [http://localhost:9005/](http://localhost:9005/) if your browser doesn't open automatically
5. `gulp build` Generate *dist* forder ready for production

## Notes
Please don't update **babelify** package, this package have a [issue](https://github.com/babel/babelify/issues/127) in the version 7.*
