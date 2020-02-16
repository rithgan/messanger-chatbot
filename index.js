require('dotenv').config({ path: 'variables.env' });
const express   =   require('express');
const bodyParser    =   require('body-parser');


const app  =    express();

//setting up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



const verifyWebhook = require('./verify-webhook');

app.get('/', verifyWebhook)

const messageWebhook = require('./message-webhook');

app.post('/', messageWebhook);

const server    =   5001;
app.listen(server,()=>{
    console.log(`Chatbot has started on ${server}`);
})