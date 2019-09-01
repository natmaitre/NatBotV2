const {  RichEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  category: "info",
  description: "Retour information du serveur",
  run: async (client, message, args) => {

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
      .setDescription("Serveur information")
      .setColor("#2933e6")
      .setThumbnail(sicon)
      .addField("Guild Name", message.guild.name)
      .addField("créé le", message.guild.createdAt)
      .addField("Rejoins le", message.member.joinedAt)
      .addField("Total membres", message.guild.memberCount)
      .setFooter(bot.user.username, bot.user.displayAvatarURL);


    return message.channel.send(serverembed);
  }
}  