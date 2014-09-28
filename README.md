[![Build Status](https://travis-ci.org/mattludwigs/generator-bean-stack.svg?branch=master)](https://travis-ci.org/mattludwigs/generator-bean-stack)

# BEAN Stack for Yeoman

This is a generator that sets up a simple BEAN stack. What is a BEAN stack you ask. Well it is Bootstrap, Express, Angular, and Node. At the basic level this gives you a simple Bootstrap and Angular set up with a simple Express server. 

Out of the box you have livereload, JS uglify, and SASS compiling. The JS files and SASS files are watched and ready to be processed and reloaded as you develop.

The BEAN Stack generator is meant to be unbloated and bare bones for easy customization. Please let me know suggestions to improve this tool. As of version 0.3.0, you have the option now for a base bean and a ngRoute bean. The first gives you the very basic BEAN stack to get going, while the later will get you set up for the single page application using the client side routing of ngRoutes.

## How to Use

First you will need to get Yeoman installed on your computer. Assuming you have node, and thus npm, enter this:

```
$ npm install -g yeoman
```
Next, you will want to get the generator from npm so that Yeoman can use it:

```
$ npm install -g generator-bean-stack
```

Lastly, create your project directory, move into it, the type in yo and select the generator or pass the generator as an argument:

```
$ mkdir superAwesomeProject
$ cd superAwesomeProject
$ yo
```
or 
```
$ mkdir superAwesomeProject
$ cd superAwesomeProject
$ yo bean-stack
```

Then once the project is set up, type:

```
$ grunt server
```
to get your project rolling, and your site should be up and running at port 9778.

## File Structure
While trying to make the file system easy to use, it would be good to explain a few things.

Once your project is generated will have three directories you can work from: app, public, and src.

### App Directory
This is where your server side modules should live. You will always start out with a route module to declare routes. However when using the Route Bean (ngRoute single page application) you should declare your routes in the src/js/routes.js file.

### Public Directory
This is where all your compiled SASS and uglified JS will go. Plus your images directory lives here. The main area you will work with is when you add html files this is the place to do so. In the ngRoute generator there will an extra directory in here called views, and this is where you can add your views.

## Src Directory
This is where you write your JS and SASS. Remember the project is on livereload watching these files, so in development your changes will sent through the compiling and uglifying when you save these files, and then your browser will be updated.

## How to Develop

First you will need to get Yeoman installed on your computer. Assuming you have node, and thus npm, enter this:

```
$ npm install -g yeoman
```

Then make a diretory or go to the directory where you keep your git projects, and clone the project:

```
$ mkdir git
$ cd git
$ git clone https://github.com/mattludwigs/generator-bean-stack.git
```

Then move into the project, install dependencies, and link the generator to npm:

```
$ cd generator-bean-stack
$ npm install
$ npm link
```
Lastly, go to your project that you want to work on, and run the command:

```
$ cd awesomeProject
$ yo bean-stack
```

A start up script will run as part of the process so you don't need to run any thing else to get all your dependencies. All you need to do is run:

```
$ grunt server
```
and enjoy!

## Testing

To test make sure you're in the root of the cloned git project and run:

```
$ npm test
```