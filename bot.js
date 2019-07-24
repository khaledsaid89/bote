const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603594926500085822")
setInterval(function() {
channel.send(`Khaled KG`);
}, 30)
})

client.login(process.env.BOT_TOKEN);