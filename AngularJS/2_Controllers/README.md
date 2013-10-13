# Angular Getting Started #

## Controllers Angular Example ##


This small repository shows the very basics about getting started with AngularJS Controllers. This is a simple TODO list app, you can include new items, mark items and archieve completed TODOs. It includes AngularJS library v1.0.7 and Bootstrap for AngularJS (no JQuery).

To run the project, just make sure you have NodeJS and Grunt-cli installed on your machine.

Then, install the dependencies of this project

    npm install

Last, run the defaul task

    grunt run

And visit localhost:3001.


## Directory Structure ##

	/node_modules ................. npm registered node modules
	/public ....................... compiled application files
	|-- /css ...................... compiled css
	|-- /js ....................... compiled js modules
	/src .......................... source directory
	|-- /scripts .................. javascript source
	|-- |-- /vendor ............... javascript libraries
	|-- /styles ................... scss source
	|-- |-- /vendor ............... vendor css (bootstrap)
	|-- /html ..................... html pages
	.gitignore .................... git ignore directives
	GruntFile.js .................. grunt file
	package.json .................. grunt package information
	README.md ..................... readme file


## Grunt Tasks ##
 
Generate a local development build

    grunt run
