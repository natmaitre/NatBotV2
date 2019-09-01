module.exports = {
  name: "nouveaux serveur",
  category: "status",
  description: "Envoyer un message au nouveau serveur",
  run: async (bot) => {

    bot.on("guildCreate", guild => {
      console.log("guildCreate");
      let embed = new Discord.RichEmbed()
        .setDescription("**Nouveaux ajout du bot.**")
        .setColor("#1D9156")
        .addField("**Nom du serveur**", guild.name)
        .addField("**Fondateur du serveur**", guild.owner.user.username)
        .addField("**id**", guild.id)
        .addField("**Nombre de membres**", guild.memberCount)
        .setTimestamp()
        .setFooter("🔰Nouveau serveur", bot.user.displayAvatarURL);
      bot.channels.get('617346658921086987').send(embed);
    });
  }
}
