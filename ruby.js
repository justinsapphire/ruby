const botconfig = require("./botconfig.json");//gives link to the prefix of the bot
const Discord = require("discord.js");//access Discord.js
const bot = new Discord.Client({disableEveryone: true});//Defines Bot

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online in ${bot.guilds.size} servers!`)
    bot.user.setActivity("with Sapphire's Bots | /help", {type: "PLAYING"});
});

bot.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(cmd === `${prefix}help`) {
        message.channel.send("Sorry about that, but this is the only command so far! Sapphire is working on it.")
    }
    if(cmd === `${prefix}embed`) {
        let embed = new Discord.RichEmbed()
        .setDescription(`Sent in by ${message.author}`)
        .setColor("#e55555")
        .addField("Embed Content", args.join(" "))
        message.delete()
        message.channel.send(embed)
    }
    if(cmd === `${prefix}kms`) {
        function kms(){
            Math.floor(Math.random() * 3)
        }
        if(Math.floor(Math.random() * 2) == 0) {
            message.channel.send(":smile:")
            message.channel.send(":no_mouth: :gun:")
            message.channel.send(":dizzy_face: :boom: :gun:")
            message.channel.send(":skull:")
        } else {
            message.channel.send(":smile:")
            message.channel.send(":no_mouth: :gun:")
            message.channel.send(":sob: :pray: :gun:")
            message.channel.send(":astonished: :gift:")
            message.channel.send(":smile: :handshake: :smile:")
        }
    }
});

bot.login(botconfig.key)