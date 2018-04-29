var ipfsAPI = require('ipfs-api')
var ipfs = ipfsAPI()
var fs = require('fs');


var cosmos = {
  pinit: async () => {
    var pins = fs.readFileSync('pins.txt', "UTF8").split('\n')
    console.log(pins);

    for (var i = 0; i < pins.length -1; i++) {
      pins = await ipfs.pin.add(pins[i])
    }
  },
  showPins: async () => {
    pinset = await ipfs.pin.ls()
    console.log(pinset);
  },
  removePin: async (pin) => {
    await ipfs.pin.rm(pin)
  },
  addFile: async (path) => {
    hash = await ipfs.util.addFromFs(path, { recursive: true})
    console.log('Orig hash is: ' + hash[0].hash)
    //Call pin
    cosmos.addHash(hash[0].hash)
  },
  addHash: async (hash) => {
    const res = await ipfs.files.add(new Buffer(hash))
    console.log('String hash is: ', res[0].hash)
    //Call pin
    //Store under user
    cosmos.getHash(res[0].hash)
  },
  getHash: async (hash) => {
    path = await ipfs.files.get(hash)
    console.log('Stored hash/s: ' + path[0].content.toString('UTF8'));
  }
}

module.exports = cosmos;

// module.exports.pinit = async () => {
//   var pins = fs.readFileSync('pins.txt', "UTF8").split('\n')
//   console.log(pins);
//
//   for (var i = 0; i < pins.length -1; i++) {
//     pins = await ipfs.pin.add(pins[i])
//   }
// }
//
// module.exports.showPins = async () => {
//   pinset = await ipfs.pin.ls()
//   console.log(pinset);
// }
//
// module.exports.removePin = async (pin) => {
//   await ipfs.pin.rm(pin)
// }
//
// module.exports.addFile = async (path) => {
//   hash = await ipfs.util.addFromFs(path, { recursive: true})
//   console.log(hash[0].hash)
//   self.addHash(hash)
// }
//
// module.exports.addHash = async (hash) => {
//   const res = await ipfs.files.add(new Buffer(hash))
//   console.log('my hash is: ', typeof(res[0].hash))
// }
//
// module.exports.getHash = async (hash) => {
//   path = await ipfs.files.get(hash)
//   console.log(path);
// }

// using promises

// id = await ipfs.id()
// console.log('my id is: ', id.id)
//
// const res = await ipfs.files.add(new Buffer(path))
// console.log('my hash is: ', res[0].hash)

//1. Add files from file system or path to IPFS
// ipfs.util.addFromFs(path, option, callback)
// For example,
// ipfs.util.addFromFs('path/.../.../folder', { recursive: true , ignore: ['subfolder/to/ignore/**']}, (err, result) => {
// if (err) {
// throw err
// }
// console.log(result)
// })
// //2. Add a file from Folder to IPFS
// ipfs.util.addFromFs(path, option, callback)
// For example,
// ipfs.util.addFromFs('path/to/a/folder', { recursive: true , ignore: ['subfolder/to/ignore/**']}, (err, result) => {
// if (err) {
// throw err
// }
// console.log(result)
//
// const hash = await ipfs.cat(res[0].hash)
// console.log('my data is: ', hash.toString('UTF8')); //buffer toString
//
//
// pins = await ipfs.pin.add(res[0].hash)
// console.log(pins)


// ipfs.id()
// .then((id) => {
//   console.log('my id is: ', id.id)
// })
// .catch((err) => {
//   console.log('Fail: ', err)
// })

// ipfs.files.add(new Buffer(path))
// .then((res) => {
//   console.log('my hash is: ', res[0].hash)
//   return res[0].hash
// })
// .then((hash) => {
//   console.log('my hash is: ', hash)
// })
// .catch((err) => {
//   console.log('Fail: ', err)
// })

// normal way

// ipfs.files.add(new Buffer(path), function (err, res) {
//   if(err) console.error("ipfs add error", err, res);
//   res.forEach(function(file) {
//     console.log('successfully stored', file.path);
//     display(file.path);
//   });
// })
//
// function display(hash) {
//   ipfs.cat(hash, function(err, res) {
//     if(err) console.error("ipfs cat error", err, res);
//     console.log(res, hash);
//   })
// }
