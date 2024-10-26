//Globals - No window!! The global variable throughout the app wherever needed.

//__dirname - path to current directory
//__filename - file name
//require - function to use modules (Common js)
//module - info about current module (file)
//process - infor about env where the program is being executed

console.log(__dirname)

console.log(__filename)

let count = 0;
const stopId = setInterval(() => {
    console.log("Hello!")
    count ++;
    if(count == 5){
        clearInterval(stopId)
    }
}, 1000)