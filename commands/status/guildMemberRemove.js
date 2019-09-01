module.exports = {
  name: "ancien membre",
  category: "status",
  description: "envoyer un message au ancien membre",
  run: async (bot) => {
    bot.on("guildMemberRemove", member => {
      if (debug) console.log("guildMemberRemove");

      const welcomeChannel = member.guild.channels.find('name', '《🚀》join-leave');
      if (!welcomeChannel === null) return;
      bot.channels.get(welcomeChannel.id).send("Au revoir: " + member.user.username + " de " + member.guild.name)
    });
  }
}
