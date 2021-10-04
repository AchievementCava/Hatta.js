const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('alabama')
        .setDescription('Speed\'s worst nightmare..'),
        
    async execute(interaction) {
        await interaction.reply("Sweet Home  ***A L A B A M A***  <@335529118240079872>")
    },
};