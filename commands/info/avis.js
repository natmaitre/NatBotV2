  const {  RichEmbed } = require("discord.js");

module.exports = {
  name: "avis",
  category: "info",
  description: "Donner un avis",
run: async (client, message, args) => {
  if (message.deletable) message.delete();

    if (args.length < 1)
      return message.reply("Rien a dire").then(m => m.delete(5600));
    const embed = new Discord.RichEmbed()
      .setDescription(args)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setFooter(bot.user.username, bot.user.displayAvatarURL);
    message.reply('Votre message a était envoyer dans le salon avis qui se trouve sur le serveur support.')
    bot.channels.get('612470928017981460').send(embed);
  }
}