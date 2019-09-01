  const {  RichEmbed } = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "Retour bot information",
  run: async (client, message, args) => {

  let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
      .setDescription("Bot information")
      .setColor("#2933e6")
      .setThumbnail(bicon)
      .addField("Bot Nom", bot.user.username)
      .addField("Créé le", bot.user.createdAt) 
      .addField("Gouvernent", bot.guilds.size) 
      .addField("Regarde", bot.users.size)
      .setTimestamp()
      .setFooter(bot.user.username, bot.user.displayAvatarURL);

    return message.channel.send(botembed);
  }
}