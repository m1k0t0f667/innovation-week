module.exports = {
  data: {
    customId: "create_channel",
  },
  async execute(interaction, client) {
    if (!interaction.isButton()) return;
    if (interaction.customId === "create_channel") {
      try {
        const guild = interaction.guild;
        const channelName = `${interaction.user.username}-channel`;
        await guild.channels.create(channelName, {
          type: "GUILD_TEXT",
        });
        await interaction.reply(`Created channel: ${channelName}`);
      } catch (error) {
        console.error(error);
        await interaction.reply(
          "Failed to create a channel. Please check my permissions."
        );
      }
    }
  },
};
