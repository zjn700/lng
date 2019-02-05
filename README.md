# Lng

## updated VS Code

after downloading deb file from Microsoft VS Code site
https://code.visualstudio.com/

run the following in the download directory:

sudo dpkg -i code_1.30.2-1546901646_amd64.deb
sudo apt-get install -f

not sure second step is necessary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

npm install -g @angular/cli

// use SCSS style option when installing Angular


## Development server

ng serve --host $(hostname -I)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Adding Bootstrap 4
// use SCSS style option when installing Angular

// in your terminal in the root of your project
npm install bootstrap jquery popper

Add to node_modules files listed below to the angular.json file

            "styles": [
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
