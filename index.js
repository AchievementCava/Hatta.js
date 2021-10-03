//calling dotenv module to get secret keys//
const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

//const { time } = require('@discordjs/builders');
const consoleStartTime = new Date();
// const startTime = Math.round((new Date()).getTime() / 1000);
// console.log(startTime);

// //exporting time for uptime.js
// exports.startTime = startTime;

//client may also be called bot or host outside this project//
//creating client//
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

var startTime = Math.round(new Date().getTime() / 1000);
exports.startTime = Number(startTime);

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.on('ready', () => {
    console.log("Hatta initiated contact at " + consoleStartTime);
    console.log('Unix start time is: ' + startTime);
});

//ready commands from commands folder//
client.on('interactionCreate', async interaction => {

    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(command + " registered at "
        + Date() + " returned error" + error);
        await interaction.reply({ content: 'Error on command execution!', ephemeral: true });
    }
});


//LAST LINE CODE//
client.login(process.env.bot_token);