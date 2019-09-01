const {  RichEmbed } = require("discord.js");

module.exports = {
  name: "help",
  category: "info",
  description: "donne tout les commandes",
  run: async (client, message, args) => {

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
      .setDescription("**Voici les commandes, fais ``n!help (le nom de la commandes)``. Mais en cours de création alors indisponnible pour le moment.**")
      .setColor("#2933e6")
      .setThumbnail(sicon)
      .addField("n!kick [Membre] (Raison)", "Kick une personne du serveur.")
      .addField("!nping", "Avoir le ping du bot.")
      .addField("n!serveinfo", "Avoir les infos du serveur.")
      .addField("n!botinfo", "Avoir les infos du bot.")
      .addField("n!report [Membre] (Raison)", "Report une personne.")
      .addField("n!ban [Membre] (Raison)", "Ban une personne.")
      .addField("n!help", "C'est cette commande.")
      .addField("n!clear", "Supprimer des messages.")
      .addField("n!avis (Votre avis)", "Donner votre avis et il sera envoyer dans le serveur support.")
      .addField("n!annonce (Votre texte)", "Faire une annonce.")
      .addField("n!avatar", "Donner votre avatar.")
      .addField("**__Voici le serveur support.__**", "https://discord.gg/SnsHkmE")
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setFooter(bot.user.username, bot.user.displayAvatarURL);


    return message.channel.send(serverembed);
  }
}