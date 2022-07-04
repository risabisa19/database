const { MongoClient } = require('mongodb');
const express = require('express');
const app = express()
const  port = process.env.PORT || 5000

//connec url
const url='mongodb+srv://risa:risa@cluster0.npdjknu.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url);

//database name
const dbName ='mantappu';

app.get('/', async(req,res) => {
    await client.connect();
    console.log('Connected Sucsses');
    const db = client.db(dbName);
    const collection = db.collection('mantap');
    const findResult = await collection.find({}).toArray();
    res.status(200).json({Datajson : findResult})
})

app.listen(port, () => {
    console.log(`Example listen on port ${port}`)
})