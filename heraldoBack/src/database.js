/*
const admin = require("firebase-admin");

const serviceAccount = process.env.HeraldoCred

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: process.env.DBURL
});
const db = admin.database();
*/
const mongoose = require('mongoose');

const MONGODB_URI =process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser:true
})
    .then(db => console.log('DB is connected'))
    .catch(err=>console.log(err));