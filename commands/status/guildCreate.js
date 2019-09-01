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
        .addField("**__Nom du serveur__**", guild.name)
        .addField("**__Fondateur du serveur__**", guild.owner.user.username)
        .addField("**__id__**", guild.id)
        .addField("**__Nombre de membres__**", guild.memberCount)
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL);
      bot.channels.get('617346658921086987').send(embed);
    });
  }
}
