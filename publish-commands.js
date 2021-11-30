//This file is to define commands when /help used in discord//

//calling dotenv module to get secret keys//
require('dotenv').config();

const fs = require('fs');

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const clientId  = process.env.client_id;
const token = process.env.bot_token;

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
};

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application slash commands.');

		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log('Successfully reloaded application slash commands.');
	} catch (error) {
		console.error(error);
	}
})();