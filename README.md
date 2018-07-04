# Webpack Google Apps Script Boilerplate

this boilerplate is design to get up and running with local GAS development quickly. This is still a work in progress but the basic build and push functionality works. It should be tweakable to work with add-ons and bound scripts as well.

[gas-webpack-plugin](https://github.com/fossamagna/gas-webpack-plugin) by [@fossamagna](https://github.com/fossamagna/gas-webpack-plugin/commits?author=fossamagna) is the key.

Note that 

## using this with an existing GAS script (not recommended unless familiar with GAS)

a `.clasp-example.json` is included. The only difference between the example and one that clasp creates when you pull is that the `rootDir` property is configured for the `dist` folder.

1. rename `.clasp-example.json` to `.clasp.json` and fill out the correct `scriptId` for GAS project.
2. run `clasp pull`
3. replace `index.js` with the existing apps scripts code.
