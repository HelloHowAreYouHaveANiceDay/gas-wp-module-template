const files = require.context('.', false, /\.js$/);
const modules = {};

for (var i = 0; i < files.length ; i++) {
  
  var key = files[i];
  if (key !== './index.js'){
  // modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
  } 
}

module.exports = modules;