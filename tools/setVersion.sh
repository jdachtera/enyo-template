if [ "${PWD##*/}" == "tools" ]; then
	cd ..;
fi
git submodule init
git submodule update
cd enyo
git checkout $1
cd ..
cd lib
cd layout
git checkout $1
cd ..
cd onyx
git checkout $1
cd ../..


