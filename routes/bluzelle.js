const bluzelle = require('bluzelle');
const manifesto = require('./manifest');

function setConnection(uuid) {
  bluzelle.connect('ws://13.78.131.94:51012', uuid);
}

//post a new manifest object to a user's database
function createManifest(fileName, manifest) {
  console.log(`uuid = ${uuid}`);
  bluzelle.create(fileName, manifest).then(() => {
    console.log("Posted new metadata into bluzelle.")
  }, error => {
    console.log("Error, failed to save to bluzelle.")
  });
}

function readManifest(fileName) {
  const manifest = bluzelle.read(fileName).then(value => {
    console.log("Read from bluzelle successfully.")
  }, error => {
    "Unable to read from bluzelle."
  });

  if (manifest != null) {
    console.log(`manifest = ${manifest}`);
    return;
  } else {
    return null;
  }
}

//CRUD AND MORE ------------

function create(key, value) {
  bluzelle.create(key, value).then(() => {
    console.log("Sucessfully created.")
  }, error => {
    console.log("Failed to create")
  });
}

function read(key) {
  return bluzelle.read(key).then(value => {
    console.log("Sucessfully read key.")
  }, error => {
    console.log("Failed to read key.")
  });
}

function update(key, value) {
  bluzelle.update(key, value).then(() => {
    console.log(`Sucessfully changed key:value to ${key}:${value}`)
  }, error => {
    console.log("failed to update.")
  });
}

function delet(key) {
  bluzelle.remove(key).then(() => {
    console.log(`Sucessfully changed key:value to ${key}:${value}`)
  }, error => {
    console.log("Failed to delete entry")
  });
}

//returns an array of keys
function getAllKeys() {
  return bluzelle.keys().then(keys => {
    console.log("Successfully retrieved all keys.")
  }, error => {
    console.log("Failed to retrieve keys.")
  });
}

//exists, returns true or false
function exists(key) {
  return bluzelle.has(key).then(hasMyKey => {
    console.log("Key exists.")
  }, error => {
    "Key does not exist."
  });
}

//query
function query() {
  //check if the key exists first
  let value;
  if (exists(key)) {
    return read(key);
  } else {
    return null;
  }
}

module.exports.createManifest = createManifest;
module.exports.readManifest = readManifest;
module.exports.setConnection = setConnection;
