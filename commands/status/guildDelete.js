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
        .addField("**Nom du serveur**", guild.name)
        .addField("**Fondateur du serveur**", guild.owner.user.username)
        .addField("**id**", guild.id)
        .addField("**Nombre de membres**", guild.memberCount)
        .setTimestamp()
        .setFooter("👻Ancien serveur", bot.user.displayAvatarURL);
      bot.channels.get('617346658921086987').send(embed);
    });
  }
}
