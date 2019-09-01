 module.exports = {
	name: "avatar",
	category: "fun",
	description: "envoi l avatar",
	run: async (client, message, args) => {

    message.reply(message.author.avatarURL);
  }
}
