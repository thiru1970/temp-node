const os = require('os')

//info about user
const user = os.userInfo()
console.log(user)

//uptime of system in seconds
console.log(`The uptime is ${os.uptime()} seconds`)

//system os
const system = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(system)