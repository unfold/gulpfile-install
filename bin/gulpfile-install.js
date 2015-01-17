#!/usr/bin/env node

// TODO: Optimize regex to match only one group
// Matches both 'require(..)' and whats inside parenthesis
var regex = /require\((?:'|")(.*?)(?:'|")\)/g

// Take gulpfile as an argument or use the one in current directory
var gulpfilePath = 'gulpfile.js'
var save = ""

var save_values = ['-s', '--save-dev']
process.argv.forEach(function(val, index, array) {
    var save_index = save_values.indexOf(val)
    if (save_index >= 0) {
        save = '--save-dev'
    }

    if(val.match(/gulpfile.js/gi)){
        gulpfilePath = val
    }
});

require('fs').readFile(gulpfilePath , 'utf8', function(err, data){
  var modules = []

  while(match = regex.exec(data)){
    modules.push(match[1])
  }

  var commands = modules.map(function(command){
    return 'npm install ' + command + ' '+ save + ';'
  })

  console.log('\n\nInstalling modules: \n\t' + modules.join('\n\t') + '\n\n')

  require('child_process').exec(commands.join('')).stderr.pipe(process.stderr)
})
