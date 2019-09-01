 const {  RichEmbed } = require("discord.js");

module.exports = {
	name: "clear",
  aliases: ["clear", "nettoyer"],
	category: "moderation",
	description: "clear les messages",
	run: async (client, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.fetchMessages()
        .then(function(list) {
          message.channel.bulkDelete(list);
          message.reply('les messages ont était supprimer avec succès !')
        }, function(err) {
          message.channel.send("ERROR: ERROR CLEARING CHANNEL.")
        })
    }
 }
}
