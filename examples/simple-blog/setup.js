var traceur = require('traceur');

/*********************************************
 * WARNING: This is file does not support ES6
 *********************************************/

// Config which files will be compiled with ES6
traceur.require.makeDefault(function(filename) {
  return filename.indexOf('node_modules') === -1;
});