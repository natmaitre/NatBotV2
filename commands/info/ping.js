const {  RichEmbed } = require("discord.js");

module.exports = {
	name: "ping",
	category: "info",
	description: "Retour du ping du bot",
	run: async (client, message, args) => {

const pingEmbed = new RichEmbed()
      .setDescription("Ping")
      .setColor("#329F5B")
      .addField('🏓 Pong!', ' le ping est de  ' + (Date.now() - message.createdTimestamp) + ' ms')
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL);
    message.channel.send(pingEmbed);
  }
}