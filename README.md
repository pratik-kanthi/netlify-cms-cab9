# cab9.website

Cab9 is a powerful, simple and innovative product that allows management of a Private Hire & Taxi Business.
It's easy to use, comprehensive and streamlined dispatch solution.

This repository has the code files for the public facing website of the product.

Cab9 is built on Vue.js and uses Gridsome as the Jamstack framework.
Jamstack is the modern way to build Websites and Apps that delivers better performance.

Some of the benfits of Jamstack are outlined [here.](https://jamstack.org/why-jamstack/)

Gridsome makes it easy for developers to build static generated websites & apps that are fast by default.
More about gridsome [here.](https://gridsome.org/)

Beside CMS capabilities of Gridsome, this website benefits from:

* Easy, local development
* Image Optimisation
* Search Engine Optimisation

### Website Setup

### Framework Setup
As mentioned this website uses Vue.js and Gridsome so we will need to install the respective CLIs globally.

Please ensure you are using NodeJS version 10.0.0+


### Project Setup

**Install Gridsome CLI Globally**
```
npm install --global @gridsome/cli
```

**Install NPM Modules**

```
npm install
```

### Build Versions

**Develop**

To build and test the dev version please run the command below:
```
gridsome develop
```
That will initiate the website at [http://localhost:8080](http://localhost:8080)

**Production**

To build and test the build version please run the command below:

```
gridsome build
```

This will build the website with production spec and put all the files in the dist folder. That dist folder can then be 
tested against a web server.


### Deployment

The website is configured to be deployed on Google App Engine. The deployment scripts will require the user to log 
into the Google cloud console and verify their identity. 

**Deployment Steps**

Build Project
```
npm run build:deploy
```
This will build the website with production spec and put all the files in the dist folder.
As an additional step it will also customise the content of the dist folder to work on Google App Engine.


Deploy Project to live
```
npm run deploy:live
```
This will deploy the website to the live project on Google App Engine.

Deploy Project to dev
```
npm run deploy:dev
```
This will deploy the website to the dev project on Google App Engine.


## Version History

v1.0.0 - The initial website with all the pages, content and optimised resources.

