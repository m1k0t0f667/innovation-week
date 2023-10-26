const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("create_button")
    .setDescription("Create a button for a new unique channel"),
  async execute(interaction) {
    const member = interaction.guild.members.cache.get(interaction.user.id);

    const hasAdminRole = member.roles.cache.some(
      (role) => role.name === "admin"
    );

    if (hasAdminRole) {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("create_channel")
          .setLabel("Create Channel")
          .setStyle(ButtonStyle.Primary)
      );

      await interaction.reply({
        content: "Click the button to create a unique channel.",
        components: [row],
      });
    }
  },
};
