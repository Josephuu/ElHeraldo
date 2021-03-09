const admin = require("firebase-admin");

const serviceAccount = process.env.elHeraldoCert

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: process.env.DBURL
});