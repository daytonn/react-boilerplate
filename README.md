React Boilerplate
=================

Getting Started
---------------

This is a node package that delivers a browserified, compiled static site in the `public` directory. You will need [node](https://nodejs.org/en/) (`brew install node`) and [npm](https://www.npmjs.com/) (installed with node).

To install the dependent packages, install them with npm:

```sh
npm install
```

Testing
-------

Testing is managed via [karma](http://karma-runner.github.io/0.13/index.html). You can run the tests with the npm `test` script:

```sh
npm test
```

If you would like to continuously run the tests during development you can use the npm `karma` script:

```sh
npm run karma
```

While the karma server is running, you may view and debug the tests at [http://localhost:9876/debug.html](http://localhost:9876/debug.html).

Compiling/Packaging
-------------------

This application is using JavaScript ES6 syntax via [Babel](https://babeljs.io/) and [Gulp](http://gulpjs.com/). There are a few seperate gulp tasks that create the package delivered in the `public` folder.

### build

The build task is concerned with turning the written ES6 modules in the `src/javascripts` directory and turning them into one script usable in the browser.

```sh
gulp build
```

### sass

The sass task is concerned with compiling the scss files in `src/stylesheets` into a single css file for the final styles.

```sh
gulp sass
```

### watch

The watch task will recompile the build package when files in the `src` directory are changed.

```sh
gulp watch
```

### default

The default task is the main task used for day-to-day development. This task will build the js bundle, compile the sass, watch the files for changes and start a dev server at [http://localhost:3000](http://localhost:3000).

```sh
gulp
```
