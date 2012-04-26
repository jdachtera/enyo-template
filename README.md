# enyo-template

This is a template for creating Apps with Enyo 2. It includes Enyo and the onyx and layout packages for convenience.

Put your source files into the lib/app directory or create additional lib folders.
For development use the dev.html in Chrome or Safari.

For deployment you can use 

	./tools/minify.sh

to create the compiled .js and .css files. 

The versions of enyo, onyx and the layout lib can be updated using the setVersion command like so:

	./tools/setVersion.sh master

or

	./tools/setVersion.sh 2.0-beta3

Then git will update the submodules accordingly.
