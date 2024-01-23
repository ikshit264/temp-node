const os = require('os')

//info about current user
const user = os.userInfo()
console.log("User name is : ",user.username)

// Method returns the system uptime in sec
console.log('The System Uptime is : ', os.uptime() ," Seconds")

const currentOS = {
    name: os.type(),
    relase:os.release(),
    totalMem:os.totalmem(),
    freeMen:os.freemem()
}

console.log(currentOS)