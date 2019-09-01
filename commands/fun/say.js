 const {  RichEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: ["say", "dire"],
  category: "fun",
  description: "Retour de la phrase que vous avez dit",
  run: async (client, message, args) => {
 if (message.deletable) message.delete();

    if (args.length < 1)
      return message.reply("Rien a dire").then(m => m.delete(5600));

    const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

    if (args[0].toLowerCase() === "embed") {
      const embed = new Discord.RichEmbed()
        .setColor(roleColor)
        .setDescription(args.slice(1).join(" "))
        .setTimestamp()
        .setImage(bot.user.displayAvatarURL)
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter(bot.user.username, bot.user.displayAvatarURL);

      message.channel.send(embed);
    } else {
      message.channel.send(args.join(" "));
    }
  }
}
