const fs = require('fs')

function readText(path){
    var data = fs.readFileSync(path, 'utf-8')
    return data; 
}

//export {readText};

function countWords(path){
    var str = readText(path);

    str.replace(/(^\s*)| (\s*$)/gi, "");
    str. replace(/[]{2,}/gi," ");
    str.replace(/\n /, "/n");
    str.replace(/[\^$.|?*+()!%&]/g, "");
    return str.split(' ').filter(String).length;
}

//console.log(readText('Input.txt'));
//console.log(countWords('Input.txt'));

export {readText, countWords}
