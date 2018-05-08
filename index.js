/*
NotBot is designed by freeM1CA (c) 2018
*/
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let version = botconfig.version;

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
    bot.user.setGame(`${version}`);
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

    if(cmd === `${prefix}!!StartStaty`){
        message.channel.send("Done");
    var myVar = setInterval(myTimer, 10800000);

    function myTimer() {
    var d = new Date();
    var msgs = [
        "!ftn freeM1CA",
        "!ftn NNeTTik",
        "!ftn Tian2121",
        "!ftn NiceKill_CZ" 
    ];
    
    function sendMsgs(msgs, delay) {
        if (msgs.length < 1) return;
        var remain = msgs.slice(1);
        var sendRemain = sendMsgs.bind(null, remain, delay);
        message.channel.send(msgs[0]).then(function() {
            setTimeout(sendRemain, delay);
        });
    }
    
    sendMsgs(msgs, 5500);
        
    }
};

    if(cmd === `Ahoj`){
        return message.channel.send("Čuuus!");
    };

    if(cmd === `${prefix}Staty`){
        var msgs = [
            "!ftn freeM1CA",
            "!ftn NNeTTik",
            "!ftn Tian2121",
            "!ftn NiceKill_CZ" 
        ];
        
        function sendMsgs(msgs, delay) {
            if (msgs.length < 1) return;
            var remain = msgs.slice(1);
            var sendRemain = sendMsgs.bind(null, remain, delay);
            message.channel.send(msgs[0]).then(function() {
                setTimeout(sendRemain, delay);
            });
        }
        
        sendMsgs(msgs, 5500);
    };

    if(message.content.startsWith("!!servis")) {
        message.channel.send(new Date().getTime() - message.createdTimestamp + "ms" + ", stav: ONLINE!");     
        message.channel.send("bot.login(process.env.BOT_TOKEN);");   
    }

    if(message.content.startsWith("!!Servis")) {
        message.channel.send(new Date().getTime() - message.createdTimestamp + "ms" + ", stav: ONLINE!");      
        message.channel.send("bot.login(process.env.BOT_TOKEN);");     
    }

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

    if(cmd === `jsi` + ` tu?`){
        return message.channel.send("Yep, jsem tu! :joy:");
    }

    if(cmd === `Jsi` + ` tu?`){
        return message.channel.send("Yep, jsem tu! :joy:");
    }

    if(cmd === `jsi` + ` tu`){
        return message.channel.send("Yep, jsem tu! :joy:");
    }

    if(cmd === `Jsi` + ` tu`){
        return message.channel.send("Yep, jsem tu! :joy:");
    }
    
    if(cmd === `negr`){
        message.channel.send("Wanna ban nigga?");
    }

    if(cmd === `Negr`){
        message.channel.send("Máš ban, enjoy :)");
    }

    if(cmd === `Nečum`)
    return message.channel.send("", {
        file: "https://i.imgur.com/7sa6odz.png"
    });

    if(cmd === `nečum`)
    return message.channel.send("", {
        file: "https://i.imgur.com/7sa6odz.png"
    });

    if(cmd === `synu?`){
    return message.channel.send("Tati?");
    }  

    if(cmd === `Synu?`){
    return message.channel.send("Tati?");
    } 

    if(cmd === `synu`){
    return message.channel.send("Tati?");
    }

    if(cmd === `Synu`){
    return message.channel.send("Tati?");
    }

    if(cmd == `${prefix}info`){
        message.channel.send("------------------------------------");
        message.channel.send(new Date().getTime() - message.createdTimestamp + "ms");
        message.channel.send(`~${version}~`);
        message.channel.send("Visual Studio Code + JavaScript");
        message.channel.send("Kontakt: NotBot@freem1ca.8u.cz");
        message.channel.send("Love ya! Papa :heart:");
        message.channel.send("------------------------------------");
    }

    if(cmd === `Ping`){
        return message.channel.send("Nebudu s tebou hrát tuhle debilní hru... :smiley:");
    }
    if(cmd === `ping`){
        return message.channel.send("Nebudu s tebou hrát tuhle debilní hru... :smiley:");
    }
    
})

bot.login(process.env.BOT_TOKEN);
