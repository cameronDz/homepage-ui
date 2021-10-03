# Homepage Application #
Application is a Single Page Application written in Angular, generated using Angular CLI, with the purpose to be the landing page for a portfolio website, as well as portal into personal webpages.

## AWS Environment Setup ##
Application will run on an AWS EC2 instance at an HTTPS URL.
1. Make sure that a Key Pair has been created for the EC2 instance that will be set up - [Create a Key Pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html#create-a-key-pair).
1. Mark a seurity group and put key in group - [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html#create-a-base-security-group)
1. Create the EC2 instance - [Step 1: Launch an Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html#ec2-launch-instance)
1. Connect to the EC2 instance with PuTTY - [Connect to you Linux instance from Windows using PuTTY](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html)
1. Install ```httpd``` on server (reference installing LAMP on server, but only need to setup ```httpd```) - [Tutorial: Install a LAMP web server on Amazon Linux 2
](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-lamp-amazon-linux-2.html)
1. Install SSL support on the server - [Configure SSL/TLS on Amazon Linux 2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html)
1. Associate your server with an Elastic IP - [Elastic IP Addresses](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)
    - _Note_: if you set up PuTTY before this step, you will have to reenter the IP address
    - _Reminder_: Route 53 Hosted Zones need to set record for www in order to redirect to from www Alas to host page (StackOverflow [reference](https://stackoverflow.com/questions/50985397/how-to-add-www-to-domain-in-aws-route53))
1. Install Automatic Certificate Generation on Server - [Certificate Automation: Certbot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html#letsencrypt)
    - _Note_: Server should update the ```/etc/crontab``` to auto update cert since Certbot certifications expirer after 90 days
- Can either set up Transfer files from local machine to server using PuTTY - [Transferring files to your Linux instance using the PuTTY Secure Copy client](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html#putty-scp), or setup S3 bucket to transfer local files to and then set up security group to pull files from S3 to EC2 instance while connected in putty.

## Deployment Process ##
The application is deployed on https://www.camdziurgot.io, on an AWS EC2 instance.

The deployment process is currently a manual process;

1. First, built on a local machine using Angular CLI: ```npm run build-prod```.
1. Then the build artifacts from the /dist directory are manually copied to an AWS S3 bucket using the AWS web console.
1. The the EC2 instance is accessed using Putty, with a PEM key that was created using the AWS web console.
1. The artifacts are then transferred from the S3 bucket to the EC2 instance.
    1. First a temp directory is made: ```mkdir temp```
    1. Then the files are transferred into the temp directory: ```aws s3 cp --recursive s3://bucket-name/  temp/```
    1. The files are then moved into the server entry point directory: ```sudo cp -R temp/* /var/www/html/```
    1. Then remove the temp directory: ```rm -rf temp```
        - __Note__: AWS IAM permissions are set manually on the EC2 instance in order for the server to access the S3 bucket (AWS Docs [reference](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-access-s3-bucket/))
        - Setup an IAM User, and under Security Credentials, create an access key and copy credentials to EC2 using ```aws configure``` command
1. Once the transfer is done, a cache clear on a local browser can verify the changes went through with the new deploy.

## Associated App Setup ##

### Updating versions

Script in src/assets/ directory used to pull latest app versions from S3 and deploy to server. When script is redeployed/updated, need to run `chmod 755 -x` to flag as executable. Script must be run using `sudo`. Use as a reference for updating homepage itself, store script in parent directory so not accessible via HTTP requests

### Heroku Naming ###

- _app-name_-**storage-api**: direct access to S3 bucket, using [s3-access-api](https://github.com/cameronDz/s3-access-api) app. needs IAM access to a single, private, S3 bucket
- _app-name_-**access-api**: data manipulation wrapper API service. used as a wrapper to a private _storage-api_ locked behind a required token set in project configuration during deployments. 

### S3 Bucket Naming ###

- **artifacts**-_app-name_: versioned build artifacts from UI builds
- **storage-data**-_app-name_: data accessed through an [s3-access-api](https://github.com/cameronDz/s3-access-api) instance. data stored as JSON file names, mock of mongo nosql db. naming schema defined per app
- **storage-assets**-_app-name_: ui application assets, publicly assessible - typically images

## TODO ##
- [x] Upgrade to Angular 10.x.x
- [x] Set services to fetch JSON files from S3

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
