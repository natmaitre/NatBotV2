const {  RichEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  aliases: ["kick", "expulser"],
  category: "moderation",
  description: "kick un membre",
  run: async (client, message, args) => {

    //n!kick @natmaitre askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("Je trouve pas l'user!");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Non ta pas la permision");
    if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne peux pas être expulse!");

    let kickEmbed = new Discord.RichEmbed()
      .setDescription("~kick~")
      .setColor("#e36a0e")
      .addField("Personne Expulse", `${kUser} with ID${kUser.id}`)
      .addField("Expulse par", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Expulse dans", message.channel)
      .addField("Temps", message.createdAt)
      .addField("Raison", kReason)
      .setFooter(bot.user.username, bot.user.displayAvatarURL);

    let kickChannel = message.guild.channels.find(channel => channel.name === "commandes");
    if (!kickChannel) return message.channel.send("Je trouve pas le channel commandes");


    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }
}
