# Gulpfile-install
Gulpfile-install is a command line application that scans your gulpfile.js and installs all dependencies.

> This package is unmaintained. If you experience a bug or problem, create a pull request with a fix and a release will be made.

## Options
```
  -h, --help         Output usage information
  -f, --file <path>  Set input gulpfile
  -S, --save         Save modules as dependency
  -D, --save-dev     Save modules as dev dependency
```

## Example
If you're starting a new project and want to reuse your previous gulpfile:
```
$ mkdir new-project
$ cp previous-project/gulpfile.js new-project
$ cd new-project
$ gulpfile-install
```

## Install
Install with [npm](https://npmjs.org/package/gulpfile-install)
```
$ npm install -g gulpfile-install
```
