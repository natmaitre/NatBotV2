module.exports = {
  name: "sondage",
  aliases: ["sondage", "sd"],
  category: "fun",
  description: "faire un sondage",
  run: async (client, message, args) => {
    if (message.deletable) message.delete(); {
      if (args.length < 1)
        return message.reply("Rien a dire").then(m => m.delete(5600));

      const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

      const embed = new RichEmbed()
        .setColor(roleColor)
        .setDescription(args.slice(1).join(" "))
        .setTimestamp()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter(bot.user.username, bot.user.displayAvatarURL);

      message.channel.send(embed);

      message.react('✅');
      message.react('❌');

    }
  }
}
