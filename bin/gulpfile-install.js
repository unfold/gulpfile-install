#!/usr/bin/env node

// TODO: Optimize regex to match only one group
// Matches both 'require(..)' and what's inside parenthesis
var regex = /require\((?:'|")(.*?)(?:'|")\)/g

// Take gulpfile as an argument or use the one in current directory
var gulpfilePath = process.argv[2] || 'gulpfile.js'


require('fs').readFile(gulpfilePath , 'utf8', function(err, data){
  var modules = []

  while(match = regex.exec(data)){
    modules.push(match[1])
  }

  var commands = modules.map(function(module){
    return 'npm install --save-dev ' + module + ';'
  })

  console.log('\n\nInstalling modules: \n\t' + modules.join('\n\t') + '\n\n')

  require('child_process').exec(commands.join('')).stderr.pipe(process.stderr)
})
