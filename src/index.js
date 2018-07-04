const modules = require('./modules');

for (const k in modules) 
{
  console.log(k);
  console.log(modules);
  global[k] = modules[k]
};