# Maintaining State of the forms in Angular

The purpose of this project is to store and maintain the state and value of forms in Angular.
The logic behind this idea is a simple service that holds the state of the form when a page destroyed and recreated. The service is injected into the component and the form is initialized with the state of the service. When the form is destroyed, the state of the form is saved in the service. When the form is recreated, the state of the form is initialized with the state of the service.

please checkout the `form-service` and the form components [`form1`,`form2`,`form3`] to see how it is done. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
