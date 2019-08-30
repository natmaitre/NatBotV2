/*eslint no-console: "warn"*/
const fs = require('fs');
const express = require('express');
const Discord = require('discord.js');
//const Attachment = require('discord.js');
//const RichEmbed = require('discord.js');
const bot = new Discord.Client();

var quizfile = fs.readFileSync("fortnite.json");
var quiz = JSON.parse(quizfile).fortnite;
var ongoing = 0;
var current = -1;
var time = 10;
var user = [];
var questions = 5;

var app = express();
var port = process.env.PORT || 3000;

function scoreReset() {
  for (let userpos in user) {
    user[userpos]["score"] = 0;
  }
}

function score(msg) {
  let score = "";
  for (let userpos in user) {
    score += userpos + ": " + user[userpos]["score"] + "\n";
  }
  const embed = new Discord.RichEmbed()
    .setTitle("Quiz Score : ")
    .setColor(0xFF0000)
    .setDescription(score);
  msg.channel.send(embed);
}

bot.on('ready', () => {
  //console.log(`Logged in as ${client.user.tag}!`);
  botbotbot.user.setStatus("online");
  bot.user.setActivity('faite !commande');
});

bot.on('message', msg => {
  if (msg.member && msg.member.user && msg.member.user.tag === "NatBot#6108") return;
  if (msg.content === '!quiz fortnite') {
    if (ongoing) return;
    ongoing = 1;
    msg.channel.send("Quiz demarre dans " + time + " secondes...");
    var quizloop = 0;
    var quizId = setInterval(function(msg) {
      if (quizloop === questions) {
        ongoing = 0;
        clearInterval(quizId);
        score(msg);
        scoreReset();
        return;
      }
      for (let userpos in user) {
        user[userpos]["current"] = 0;
      }
      current = Math.floor(Math.random() * (quiz.length));
      let number = 1;
      let responses = "1. " + quiz[current].responses.toString().replace(/,/g, function() {
        return (++number + ". ");
      });
      const embed = new Discord.RichEmbed()
        .setTitle(quiz[current].question)
        .setColor(0x0000FF)
        .setDescription(responses);
      msg.channel.send(embed);
      quizloop += 1;
    }, time * 1000, msg);
  }
  if (msg.content === '!score') {
    score(msg);
  }
  if ((msg.content === '!1') || (msg.content === '!2') || (msg.content === '!3') || (msg.content === '!4')) {
    if (!user[msg.member.user.tag]) {
      user[msg.member.user.tag] = [];
      user[msg.member.user.tag]["score"] = 0;
      user[msg.member.user.tag]["current"] = 0;
    }
    if (user[msg.member.user.tag]["current"] === 1) {
      msg.channel.send(msg.member.user.tag + ": trop tard !")
    }
    if (("!" + quiz[current].correct) === msg.content) {
      user[msg.member.user.tag]["score"] += 1;
    }
    user[msg.member.user.tag]["current"] = 1;
  }

  client.login("NjE1OTgwNDk1MjYzNjI5NDA1.XWbTJg.R78LoJC2CnTihVmKySKLUUnWHhY");
