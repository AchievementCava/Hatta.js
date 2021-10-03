const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prefix')
        .setDescription('[INDEV] Changes the prefix of the bot on this guild'),
        
    async execute(interaction) {
        await interaction.reply('This function is still in development');
    },
};