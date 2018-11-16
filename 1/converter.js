var fs = require("fs");
var FileName = "";
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 
rl.question("FileName? ", function(answer) {
    console.time('timer');
 FileName = answer;
fs.readFile(FileName, "utf8", 
            function(error,data){
                if(error) throw error; 
    var str = data;
    str = str.replace(/\s/g, '');
    fs.writeFile("converted_"+FileName, str);

});
  rl.close();
    console.timeEnd('timer');
});









