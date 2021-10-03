const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uptime')
        .setDescription('Shows how long the bot has been active for'),
        
    async execute(interaction) {
        const index = require('./../index.js');
        let upTime = (Math.round(new Date().getTime() / 1000) - index.startTime);
        await interaction.reply(`This bot started running <t:${index.startTime}:R>, at <t:${index.startTime}:F>`);
    },
};
