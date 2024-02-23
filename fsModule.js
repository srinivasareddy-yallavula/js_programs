const fs = require('fs');

// Reading a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Writing to a file asynchronously
fs.writeFile('newFile.txt', 'Hello, Kmss!', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully.');
  });