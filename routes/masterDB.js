const bluzelle = require('bluzelle')
const manifesto = require('./manifest');

bluzelle.connect('ws://13.78.131.140:51014', 'b1546929-8a80-47e1-a982-23487673d454');

function createNumApp(value) {
  bluzelle.create('NumApps', value).then(() => {
    console.log("Created NumApps")
  }, error => {
    console.log("Failed to create NumApps")
  });
}

//add new app into database
function addApp(uuidv4) {
  console.log(uuidv4 + " masterDB");
  //get the number of elements in the database right now
  //check if there already exists a key in the database with numApps
  var numApps = 1;
  var allKeys = getAllKeys();
  var length = allKeys.length;
  if (length <= 0) {
    //createNumApp
    createNumApp(numApps);
  } else {
    numApps = incrementNumApps();
  }

  console.log(numApps);
  console.log(uuidv4);

  create(numApps, uuidv4);
}

//increment numApps
function incrementNumApps() {
  var currentNumApps = read('NumApps');
  update('NumApps', currentNumApps + 1);
  return currentNumApps + 1;
}

//check if there is a key that keeps track of the number of elements in the blz database

//returns an array of
function removeApp(fileName) {
  bluzelle.remove(fileName).then(() => {
    console.log(`${fileName} successfully removed.`)
  }, error => {
    console.log(`Failed to remove ${fileName}`)
  });
}

module.exports.addApp = addApp;
module.exports.removeApp = removeApp;

//CRUD AND MORE ------------

function create(key, value) {
  console.log(' create masterdb');
  console.log(key);
  console.log(value);
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
    console.log(`Successfully changed key:value to ${key}:${value}`)
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
