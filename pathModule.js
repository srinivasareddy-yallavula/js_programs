const path = require('path');

const filePath = '/users/kmss/js_programs/pathModule.txt';

// Extracting the directory name
const dirname = path.dirname(filePath);
console.log('Directory:', dirname);

// Extracting the file name
const basename = path.basename(filePath);
console.log('File Name:', basename);

// Joining paths
const fullPath = path.join(__dirname, 'files', 'pathModule.txt');
console.log('Full Path:', fullPath);