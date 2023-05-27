const { SlashCommandBuilder } = require('discord.js')

const data = new SlashCommandBuilder()
  .setName('play')
  .setDescription('Fale uma musica para dar ouvir')
  .addStringOption((option) =>
    option.setName('nome').setDescription('Nome da musica').setRequired(true),
  )

module.exports = {
  data,
  async execute(interaction) {
    const target = interaction.options.getString('nome')
    await interaction.reply(`essa é a musica ${target}`)
  },
}
