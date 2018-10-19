'use strict';

const admin = require('firebase-admin');
const db = admin.database();
const moment = require('moment');


module.exports =  (snapshot) => {
    const userBefore =  snapshot.before.val();
     const userAfter =  snapshot.after.val();

    db.ref(`/history/${userBefore.uid}`).push({
        time:moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        before:userBefore
    });

  return true;
};
