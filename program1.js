const fs = require('fs');

fs.readFile("./file.txt", (err, data)=>{
	if(err){
		console.error(err);
	}else{
		console.log("readFile Async: \n" + data.toString());
	}
})


const data = fs.readFileSync("./file.txt")
console.log("readFile Sync:\n" + data.toString());
               
