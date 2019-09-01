const {  RichEmbed } = require("discord.js");

module.exports = {
  name: "report",
  aliases: ["report", "reporter"],
  category: "moderation",
  description: "report un membre",
  run: async (client, message, args) => {

    //!report @natmaitre this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.ger(args[0]));
    if (!rUser) return message.channel.send("je touve pas l'user.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#2933e6")
      .addField("Personne reporter", `${rUser} with ID: ${rUser.id}`)
      .addField("Report par", `${message.author} with ID:${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Temps", message.createdAt)
      .addField("Raison", reason)
      .setFooter(bot.user.username, bot.user.displayAvatarURL);

    let reportschannel = message.guild.channels.find(channel => channel.name === "reports");

    message.delete().catch(O_o => {});
    if (reportschannel) reportschannel.send(reportEmbed);
    else message.channel.send("Je touve pas le channel reports.");
    return;
  }
}
