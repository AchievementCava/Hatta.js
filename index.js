//calling dotenv module to get secret keys//
require('dotenv').config()

const { Client, Intents } = require("discord.js");
const startTime = new Date();

//client may also be called bot or host outside this project//
//creating client//
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.on('ready', () => {
    console.log("Hatta initiated contact at " + startTime);
});


//LAST LINE CODE//
client.login(process.env.bot_token);