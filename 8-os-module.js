// 'os' is a Built-in module to interact with the operating system and server
const os = require('os');

// info about current users
const user = os.userInfo()
console.log(user);
// {
//    uid: -1,
//    gid: -1,
//    username: 'harak',
//    homedir: 'C:\\Users\\harak',
//    shell: null
//  }

// method returns the system uptime in seconds
console.log(`The System Uptime is: ${os.uptime()} seconds`);
// The System Uptime is: 287851 seconds

// methods for different machine information
const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem(),
}
console.log(currentOS);
// {
//    name: 'Windows_NT',
//    release: '10.0.19043',
//    totalMem: 17051144192,
//    freeMem: 4077027328
//  }
