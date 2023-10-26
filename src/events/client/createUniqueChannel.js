const { Permissions, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isButton()) return;
    if (interaction.customId === "create_channel") {
      const userId = interaction.user.id || "unknown";
      const channelName = `unique-channel-${userId}`;

      const channel = await interaction.guild.channels.create({
        name: channelName,
        type: 0,
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: [PermissionsBitField.Flags.ViewChannel],
          },
          {
            id: interaction.user.id,
            allow: [PermissionsBitField.Flags.ViewChannel],
          },
        ],
      });

      await interaction.reply(`Created a unique channel for you: ${channel}`);
    }
  },
};
