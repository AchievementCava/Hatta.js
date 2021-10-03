const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Links you to this bot\'s support server'),
        
    async execute(interaction) {
        await interaction.reply('**Join Hatta\'s support server at:**'
                                + '\nhttps://discord.gg/FdY9pC5jzp');
    },
};