const fs = require('fs')
if (!fs.existsSync("Logs")) {
    fs.mkdir("Logs", function(err){
        if (err) {
            throw err
        }
        console.log("Successfully created!")
    });
}

process.chdir("Logs");

for (let i = 0; i < 10; i++) {
    let filename = `Log${i}.txt`
    fs.writeFile(filename, "Some text", "utf-8", function (err) {
        if (err) throw err;
    });
    console.log(filename);
}

