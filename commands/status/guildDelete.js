module.exports = {
  name: "ancien serveur",
  category: "status",
  description: "envoyer un message au ancien serveur",
  run: async (bot) => {

    bot.on("guildDelete", guild => {
      console.log("guildDelete");

      let embed = new Discord.RichEmbed()
        .setDescription("**Dernier Serveur**.")
        .setColor("#329F5B")
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
