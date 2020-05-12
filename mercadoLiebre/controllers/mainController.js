const fs = require('fs');
const path=require('path');



function readHTML(fileName){

    let archivoHTML = fs.readFileSync(path.join(__dirname,'/../views/' +fileName+ '.html'),'utf-8');
    return archivoHTML;
}
//../views/${fileName}.html`*)*/

let maincontroller = {

 raiz :function(req,res,next){
     let archivoHTML = readHTML('index');
     res.send(archivoHTML);
 },

}

module.exports = maincontroller;