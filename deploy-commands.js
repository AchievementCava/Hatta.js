//This file is to define commands when /help used in discord//

//calling dotenv module to get secret keys//
require('dotenv').config();

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const clientId  = process.env.client_id;
const guildId = process.env.guild_id;
const token = process.env.bot_token;

const commands = [
    new SlashCommandBuilder().setName('uptime').setDescription('Shows the user how long the bot has been running for'),
    new SlashCommandBuilder().setName('ping').setDescription('Shows the user the latency between the server and the bot'),
    new SlashCommandBuilder().setName('prefix').setDescription('[ALPHA] Allows users to change the prefix used on a server by server basis'),
    new SlashCommandBuilder().setName('choice').setDescription('[ALPHA] Helps users make a yes or no decision using a random number generator'),
    new SlashCommandBuilder().setName('chef').setDescription('[BETA] Responds with a random recipie or insult from Gordon Ramsay'),
    new SlashCommandBuilder().setName('torture').setDescription('[BETA] Spams a given target. If no target is provided, Speed is pinged'),
    new SlashCommandBuilder().setName('crackcow').setDescription('Echoes the lyrics to The Polish Cow song')
]
.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);