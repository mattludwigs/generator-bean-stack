[![Build Status](https://travis-ci.org/mattludwigs/generator-bean-stack.svg?branch=master)](https://travis-ci.org/mattludwigs/generator-bean-stack)

# BEAN Stack for Yeoman

This is a generator that sets up a simple BEAN stack. What is a BEAN stack you ask. Well it is Bootstrap, Express, Angular, and Node. At the basic level this gives you a simple Bootstrap and Angular set up with a simple Express server. If Yeoman is not your thing, then I recommend checking out the BEAN Stack project's [github](https://github.com/mattludwigs/BEAN-stack) to clone or download the base code for the various BEAN stack options.

Out of the box you have livereload, JS uglify, and SASS compiling. The JS files and SASS files are watched and ready to be processed and reloaded as you develop.

The BEAN Stack generator is meant to be unbloated and bare bones for easy customization. Please let me know suggestions to improve this tool. As of version 0.3.0, you have the option now for a base bean and a ngRoute bean. The first gives you the very basic BEAN stack to get going, while the latter will get you set up for the single page application using the client side routing of ngRoutes.

### Info
Node Versions Supported:

* 0.10.x
* 0.11.x

Current BEAN Stack Generator Version:
0.4.5

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
$ grunt
```
to get your project rolling, and your site should be up and running at port 9778.

### Sub Generators
As of version 0.4.0 a new feature is added to to generate controllers as you wish. Just type in your terminal, in your porject:

```
$ yo bean-stack:controller <controller name>
```
For example, if I wanted a controller called "myCtrl" I could type:

```
$ yo bean-stack:controller my
```
or 

```
$ yo bean-stack:controller myCtrl
```

or

```
$ yo bean-stack:controller myController
```

This will generate a new file at this location: src/js/controllers/my.js. You can add the Ctrl at the end of the controller name or not. The logic should handle the parsing of what you entered and generate properly.

## File Structure
While trying to make the file system easy to use, it would be good to explain a few things.

Once your project is generated will have three directories you can work from: app, public, and src.

### App Directory
This is where your server side modules should live. You will always start out with a route module to declare routes. However when using the Route Bean (ngRoute single page application) you should declare your routes in the src/js/routes.js file.

### Public Directory
This is where all your compiled SASS and uglified JS will go. Plus your images directory lives here. The main area of development you will use this directory for is when you work with your html files. In the ngRoute generator there will an extra directory in here called views, and this is where you can add your views.

### Src Directory
This is where you write your JS and SASS. Remember the project is on livereload watching these files, so in development your changes will sent through the compiling and uglifying when you save these files, and then your browser will be updated.

## Grunt Options

### grunt
This is your base grunt command that will start your server along with compiling your SASS, uglifying your JS, and starting up the live reload.

### grunt build
This compiles the SASS files, and uglifys the JS files.

### grunt jsmin
This uglifys your JS.

### grunt sass
This compiles your SASS files.

### grunt clean
This has two options. First:

```
$ grunt clean:modules
```
Which removes your node_modules directory

and

```
$ grunt clean:dependencies
```
Which removes ALL the dependencies from the project, both bower and node_modules

### grunt server
This will start the same server as just using grunt. However, when v0.5.0 is released this will no longer be in use and it is best to use:
```
$ grunt
```
when you want to start your server.


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
$ grunt
```
and enjoy!

## Testing

To test make sure you're in the root of the cloned git project and run:

```
$ npm test
```

## License

The MIT License (MIT)

Copyright (c) 2014

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
