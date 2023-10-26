const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("createchan")
    .setDescription("Return a button that can be used to create a channel."),
  async execute(interaction) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("create_channel")
        .setLabel("Click me to create a channel")
        .setStyle("PRIMARY")
    );

    await interaction.reply({
      content: "Press the button below to create a channel!",
      components: [row],
    });
  },
};
