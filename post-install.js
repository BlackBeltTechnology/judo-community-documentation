const fse = require('fs-extra');

const srcDir = `path/to/file`;
const destDir = `path/to/destination/directory`;
                             
fse.copySync('antora-overrides', 'node_modules/@antora', { overwrite: true });
// fse.copySync('node_modules/antora-lunr/supplemental_ui', 'antora-lunr-ui', { overwrite: true });
