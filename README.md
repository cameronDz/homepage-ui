# MD Landing Page Application #
Application is a Single Page Application written in Angular, generated using Angular CLI, with the purpose to be the landing page for a portfolio website, as well as portal into personal webpages.

## Deployment Process ##
The application is deployed on http://camdziurgot.io, on an AWS EC2 instance.

The deployment process is currently a manual process;

1. First, built on a local machine using Angular CLI: ```npm run build-prod```.
1. Then the build artifacts from the /dist directory are manually copied to an AWS S3 bucket using the AWS web console.
1. The the EC2 instance is accessed using Putty, with a PEM key that was created using the AWS web console.
1. The artifacts are then transferred from the S3 bucket to the EC2 instance using the command: ```aws s3 cp s3://bucket-name/* /var/www/html/*```
    - __Note__: AWS IAM permissions are set manually on the EC2 instance in order for the server to access the S3 bucket.
1. Once the transfer is done, a cache clear on a local browser can verify the changes went through with the new deploy.

## Generated NG sections ##

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

### Development server ###

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding ###

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build ###

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests ###

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help ###

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
