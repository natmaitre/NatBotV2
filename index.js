const botconfig = require("./botconfig.json");
const tokenfile = require("/etc/nat/token.json");
const Discord = require("discord.js");
const fs = require('fs');
const bot = new Discord.Client();
const {
  Collection
} = require("discord.js");

bot.commands = new Collection();

["command"].forEach(handler => {
  require(`./handler/${handler}`)(bot);
});

bot.on('ready', () => {
  console.log(`Natbot vient de se connecter`);
  let embed = new Discord.RichEmbed()
    .setDescription("**__Démarage du Bot__**")
    .setColor("#2933e6")
    .addField(" Le bot a démarré avec succès !", "**Il est prêt pour travailler**")
    .addField("Le Nom du Bot", bot.user.username)
    .setTimestamp()
    .setFooter(bot.user.username, bot.user.displayAvatarURL);
  bot.channels.get('614955437506428929').send(embed);
  //PLAYING,STREAMING,LISTENING,WATCHING

  let statuses = [
    `${bot.guilds.size} serveur !`,
    "n!help",
    `${bot.users.size} utilisateurs !`,
    "La nouvelle version du bot !"
  ]

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {
      type: "WATCHING"
    });

  }, 10000)

});

bot.login(tokenfile.token);
