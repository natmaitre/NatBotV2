module.exports = {
  name: "nouveaux membre",
  category: "status",
  description: "Envoyer un message au nouveau membre",
  run: async (bot) => {
    bot.on("guildMemberAdd", member => {
      console.log("guildMemberAdd");
      const welcomeChannel = member.guild.channels.find('name', '《🚀》join-leave');
      if (!welcomeChannel === null) return;
      bot.channels.get(welcomeChannel.id).send("Bienvenue dans le serveur " + member.guild.name + " merci d'etre venu !!")
    });
  }
}
