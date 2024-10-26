const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf-8', (myError, result) => {
    if(myError){
        console.log(myError);
        return;
    }
    const data1 = result;
    // console.log(result);
    readFile('./content/second.txt', 'utf-8', (myError, result) => {
        if(myError){
            console.log(myError);
            return;
        }
        const data2 = result;
        // console.log(result);
    
    writeFile('./content/result-asyncNew.txt', `Here is the result: ${data1}, ${data2}`,
        (myError, result) => {
            if(myError){
                console.log(myError)
                return;
            }
            console.log('created the file sucessfully')
        }
    )
})
console.log('done nothing')
})
console.log('done with reading the file')