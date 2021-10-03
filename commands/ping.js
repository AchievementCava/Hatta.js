const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Shows the user the latency between the server and the bot'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging', fetchReply: true });
        interaction.editReply(`The latency between Hatta and your guild is ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
    },
}