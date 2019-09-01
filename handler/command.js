const { readdirSync } = require("fs");

const ascii = require("ascii-table"); 

const table = new ascii().setHeading("Command","load status");

module.exports = (client) =>  {
    readdirSync("./commands/").forEach(dir => {
      const commands = readdirSync(`./commands/${dir}/`).filter(f => f.endsWith(".js"));

      for (let file of commands) {
          let pull = require(`../commands/${dir}/${file}`);

          if (pull.name) {
             client.commands.set(pull.name, pull);
             table.addRow(file, '✅');
        } else {
            table.addRow(file, '❌ -> missing something??');
            continue;
        }

        if (pull.aliass && Array.isArray(pull))
            pull.aliass.forEach(alias => client.aliases.set(alias, pull.name));
      }
    });

    console.log(table.toString());
  }