const functions = require('firebase-functions');
const admin = require('firebase-admin');
const moment = require('moment');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
admin.initializeApp(functions.config().firebase);
const db = admin.database();



exports.updateUserHistory = functions.database.ref('/users/{uid}').onWrite(require('./history/onWrite'));


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
