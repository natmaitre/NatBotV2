const {  RichEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  aliases: ["ban", "bannir"],
  category: "moderation",
  description: "ban un membre",
  run: async (client, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bUser) return message.channel.send("Je trouve pas l'user!");
    let bReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Non ta pas la permision");
    if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne peux pas être bannit!");

    let banEmbed = new Discord.RichEmbed()
      .setDescription("~ban~")
      .setColor("#e61010")
      .addField("Personne bannit", `${bUser} with ID${bUser.id}`)
      .addField("ban par", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Bannit dans", message.channel)
      .addField("Temps", message.createdAt)
      .addField("Raison", bReason)
      .setFooter(bot.user.username, bot.user.displayAvatarURL);

    let commandesChannel = message.guild.channels.find(channel => channel.name === "commandes");
    if (!commandesChannel) return message.channel.send("Je trouve pas le channel commandes")

    message.guild.member(bUser).ban(bReason);
    commandesChannel.send(banEmbed);


    return;
  }
}
