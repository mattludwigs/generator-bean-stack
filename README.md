[![Build Status](https://travis-ci.org/mattludwigs/generator-bean-stack.svg?branch=master)](https://travis-ci.org/mattludwigs/generator-bean-stack)

# Bean Stack for Yoeman

This is a generator that sets up a simple bean stack. What is a bean stack you ask. Well it is Bootstrap, Express, Angular, and Node. At the basic level this gives you a simple Bootstrap and Angular set up with an Express server.

## How to Use

First you will need to get Yoemon installed on your computer. Assuming you have node, and thus npm, enter this:

```
$ npm install -g yoeman
```
Next, you will want to get the generator from npm so that Yoemon can use it:

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
to get your project rolling. Enjoy!

## How to Develop

First you will need to get Yoemon installed on your computer. Assuming you have node, and thus npm, enter this:

```
$ npm install -g yoeman
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