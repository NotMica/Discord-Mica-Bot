const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands");
        return;   
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} načteno!`);
        bot.commands.set(props.help.name, props);
    });

})

bot.on("ready", async () => {
    console.log(`${bot.user.username} je online!`);
    bot.user.setGame("Beta 1.1.0!")
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    if(cmd === `${prefix}Ahoj`){
        return message.channel.send("Čuuus!");
    };

    if(cmd === `${prefix}reee`)
    {      
        return message.channel.send("", {
            file: "https://i.imgur.com/82pUXAy.jpg"
        });
    }

    if(cmd === `ez`)
    {      
        return message.channel.send("", {
            file: "https://i.imgur.com/aWEtfel.jpg"
        });
    }

    if(cmd === `Ez`)
    {      
        return message.channel.send("", {
            file: "https://i.imgur.com/aWEtfel.jpg"
        });
    }

    if(cmd === `EZ`)
    {      
        return message.channel.send("", {
            file: "https://i.imgur.com/aWEtfel.jpg"
        });
    }

    if(cmd === `mico?`){
        return message.channel.send("Ano? :joy:");
    }
    
    if(cmd === `mico`){
        return message.channel.send("Ano? :joy:");
    }

    if(cmd === `Mico?`){
        return message.channel.send("Ano? :joy:");
    }

    if(cmd === `micooo`){
        return message.channel.send("Ano? :joy:");
    }

    if(cmd === `jsi tu?`){
        return message.channel.send("Yep, jsem tu! :joy:");
    }

    if(cmd === `Jsi tu?`){
        return message.channel.send("Yep, jsem tu! :joy:");
    }

    if(cmd === `Jsi tu`){
        return message.channel.send("Yep, jsem tu! :joy:");
    }

    if(cmd === `jsi tu`){
        return message.channel.send("Yep, jsem tu! :joy:");
    }
})

bot.login(botconfig.token);