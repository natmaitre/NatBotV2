const {  RichEmbed } = require("discord.js");

module.exports = {
  name: "annonce",
  category: "moderation",
  description: "donne une annonce",
  run: async (client, message, args) => {

if (message.member.hasPermission("ADMINISTRATOR")) {
      const color = args[0]
      const text = args.slice(1).join(" ");
      if (text.length < 1) return message.channel.send("Can not announce nothing");
      //const colour = args.slice(2).join("");
      const embed = new Discord.RichEmbed()
        .setColor("0x" + color)
        .setTitle("Important Announcement:")
        .setDescription(text);
      message.channel.send("@everyone")
      message.channel.send({
        embed
      })
    }
  }
}