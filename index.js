const botconfig = require("./botconfig.json");
const tokenfile = require("/etc/nat/token.json");
const Discord = require("discord.js");

const bot = new Discord.Client({
  disableEveryone: true
});

bot.on('ready', () => {
  console.log(`Natbot vient de se connecter`);
 // let embed = new Discord.RichEmbed()
  //  .setDescription("**__Démarage du Bot__**")
  //  .setColor("#2933e6")
   // .addField(" Le bot a démarré avec succès !", "**Il est prêt pour travailler**")
   // .addField("Le Nom du Bot", bot.user.username)
   // .setTimestamp()
   // .setFooter(bot.user.username, bot.user.displayAvatarURL);
 //bot.channels.get('614955437506428929').send(embed);
  bot.user.setActivity("Le serveur support", {
    type: "WATCHING"  //PLAYING,STREAMING,LISTENING,WATCHING

  });
  bot.user.setStatus('online') // Can be 'available', 'idle', 'dnd', or 'invisible'
  //bot.user.setPresence({
  //game: {
  //name: 'va etre arreter',
  //type: 0
  //}
  //});
});


bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  console.log(`${message.author.username} said: ${message.content}, cmd : ${cmd}`);

  if (cmd === `${prefix}ping`) {
    let pingEmbed = new Discord.RichEmbed()
      .setDescription("Ping")
      .setColor("#329F5B")
      .addField('🏓 Pong!',' le ping est de  ' + (Date.now() - message.createdTimestamp) + ' ms')
      .setTimestamp()
      .setFooter(bot.user.username, bot.user.displayAvatarURL);
      message.channel.send(pingEmbed);
  }
  // Create an event listener for new guild members
  bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === '《🚀》join-leave');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Bienvenue dans mon serveur support, ${member}`);
  });

  if (cmd === `${prefix}kick`) {

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

  if (cmd === `${prefix}ban`) {

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

  if (cmd === `${prefix}report`) {

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
    else message.channel.send("Je touve pas de reports channel.");
    return;
  }

  if (cmd === `${prefix}serverinfo`) {

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
      .setDescription("Serveur information")
      .setColor("#2933e6")
      .setThumbnail(sicon)
      .addField("Guild Name", message.guild.name)
      .addField("créé le", message.guild.createdAt)
      .addField("Rejoins le", message.member.joinedAt)
      .addField("Total membres", message.guild.memberCount)
      .setFooter(bot.user.username, bot.user.displayAvatarURL);


    return message.channel.send(serverembed);
  }

  if (cmd === `${prefix}help`) {

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
      .setDescription("**Voici les commandes, fais ``n!help (le nom de la commandes)``. Mais en cours de création alors indisponnible pour le moment.**")
      .setColor("#2933e6")
      .setThumbnail(sicon)
      .addField("n!kick [Membre] (Raison)","Kick une personne du serveur.")
      .addField("!nping","Avoir le ping du bot.")
      .addField("n!serveinfo","Avoir les infos du serveur.")
      .addField("n!botinfo","Avoir les infos du bot.")
      .addField("n!report [Membre] (Raison)","Report une personne.")
      .addField("n!ban [Membre] (Raison)","Ban une personne.")
      .addField("n!help","C'est cette commande.")
      .addField("n!clear","Supprimer des messages.")
      .addField("**__Voici le serveur support.__**","https://discord.gg/SnsHkmE")
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setFooter(bot.user.username, bot.user.displayAvatarURL);


    return message.channel.send(serverembed);
  }



  if (cmd === `${prefix}botinfo`) {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
      .setDescription("Bot information")
      .setColor("#2933e6")
      .setThumbnail(bicon)
      .addField("Bot Nom", bot.user.username)
      .addField("Créé le", bot.user.createdAt)
      .setTimestamp()
      .setFooter(bot.user.username, bot.user.displayAvatarURL);

    return message.channel.send(botembed);
  }
  if (cmd === `${prefix}say`) {
    if (message.deletable) message.delete();

    if (args.length < 1)
      return message.reply("Rien a dire").then(m => m.delete(5600));

    const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

    if (args[0].toLowerCase() === "embed") {
      const embed = new Discord.RichEmbed()
        .setColor(roleColor)
        .setDescription(args.slice(1).join(" "))
        .setTimestamp()
        .setImage(bot.user.displayAvatarURL)
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter(bot.user.username, bot.user.displayAvatarURL);

      message.channel.send(embed);
    } else {
      message.channel.send(args.join(" "));
    }
  }
  if (cmd === `${prefix}clear`) {
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
          message.channel.fetchMessages()
             .then(function(list){
                  message.channel.bulkDelete(list);
                    message.reply('les messages ont était supprimer avec succès !')
              }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
      }
  }

  if (cmd === `${prefix}avis`) {
    if (message.deletable) message.delete();

    if (args.length < 1)
      return message.reply("Rien a dire").then(m => m.delete(5600));



    if (args[0].toLowerCase() === "embed") {
      const embed = new Discord.RichEmbed()
        .setColor(roleColor)
        .setDescription(args.slice(1).join(" "))
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL);
        message.reply('Votre message a était envoyer dans le salon avis qui se trouve sur le serveur support.')
        bot.channels.get('612470928017981460').send(embed);
    } 
  }

  if (message.content === `${prefix}avatar`) {

    message.reply(message.author.avatarURL);
  }




});

bot.login(tokenfile.token);
