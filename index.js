const botconfig = require("./botconfig.json");
const tokenfile = require("~/token.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
 console.log(`${bot.user.username} is online`);

bot.user.setActivity("Natmaitre sur youtube",{type:"WATCHING"})
 //bot.user.setGame("travaille sur atom!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(cmd === `${prefix}kick`){

//n!kick @natmaitre askin for it

let kUser= message.guild.member(message.mentions.users.first() || message.guild.members.ger(args[0]));
if(!kUser) return message.channel.send("Je trouve pas l'user!");
let kReason = args.join(" ").slice(22);
if(!message.member.hasPermission("MANAGE_MESSAGES")) return

let kickEmbed = new discord.RichEmbed
.setDescription("~kick~")
.setColor("#e36a0e")
.adsdField("Personne Expulse", `${kUser} with ID${kUser.id}`)
.addField("Expulse par", `<@${message.author.id}> with ID ${message.author.id}`)
.addField("Expulse dans", message.channel)
.addField("Temps",message.createdAt)
.addField("Raison",kReason);

let kickChannel = messaeg.guild.find(channel => channel.name === "reports");
if(!kickChannel) return message.channel.send("Je trouve pas le channel reports")




  return
}


 if(cmd === `${prefix}report`){

//!report @natmaitre this is the reason

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.ger(args[0]));
  if(!rUser) return message.channel.send("je touve pas l'user.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
.setDescription("Reports")
.setColor("#2933e6")
.addField("Personne reporter", `${rUser} with ID: ${rUser.id}`)
.addField("Report par",`${message.author} with ID:${message.author.id}`)
.addField("Channel", message.channel)
.addField("Temps", message.createdAt)
.addField("Raison", reason);

let reportschannel = message.guild.channels.find(channel => channel.name === "reports");

message.delete().catch(O_o=>{});
  if (reportschannel) reportschannel.send(reportEmbed);
  else message.channel.send("Je touve pas de reports channel.");
  return;
 }

if(cmd === `${prefix}serverinfo`){

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Serveur information")
  .setColor("#2933e6")
  .setThumbnail(sicon)
  .addField("Guild Name", message.guild.name)
  .addField("créé le",message.guild.createdAt)
  .addField("Rejoins le",message.member.joinedAt)
  .addField("Total membres",message.guild.memberCount)


    return message.channel.send(serverembed);
}



 if(cmd === `${prefix}botinfo`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot information")
  .setColor("#2933e6")
  .setThumbnail(bicon)
  .addField("Bot Nom", bot.user.username)
  .addField("Créé le", bot.user.createdAt);

   return message.channel.send(botembed);
 }

});

bot.login(tokenfile.token);
