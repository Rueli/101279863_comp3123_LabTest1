const fs = require('fs');
const path = require('path');

fs.readdir('Logs', (err, files) => {
    if (err) throw err;
  
    for (const filename of files) {
        fs.unlink(path.join('Logs', filename), err => {
            if (err) throw err;
            console.log("delete files...", filename);
        });
    }
});