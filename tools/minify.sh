if [ "${PWD##*/}" == "tools" ]; then
	cd ..;
fi

rm -dR build
./enyo/tools/minify.sh -no-alias -output build/build package.js
