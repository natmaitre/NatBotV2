//module.exports = {
//name: "sondage",
//  category: "fun",
//  description: "faire un sondage",
//run: async (client, message, args) => {

//  const args = message.content.slice(prefix.length).trim().split(/ +/g);
//On défini nos arguments, on split chaque espace afin de nous donner un array

//   if(!message.member.hasPermission("MANAGE_MESSAGES")) {
//Si le membre n'a pas la permission on return
//       return message.channel.send("T'as pas la permission");
//   }

// message.channel.send(args.join(" "));
//On envoie le message en utilisant `args.join(" ")`, ce qui va ajouter un espace entre chaque arguments.
//    {
//      message.react('✅');
//      message.react('❌');
//    }
//  }
//}
