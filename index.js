const Discord = require("discord.js");
const startTime = new Date();

//client may also be called bot or host//
const client = new Discord.Client();

client.once('ready', () => {
    console.log(concat("Hatta initiated contact at", startTime));
});
//LAST LINE CODE//
client.login("ODEwMTMyOTk2MjQ1OTQ2Mzc4.YCfNJQ.uVnUH04v_wRBOgMHcutwKd2yGvU");