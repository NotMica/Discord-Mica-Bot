const Discord = require("discord.js");
const Config = require("../botconfig.json");
const apikey = require("../keys.json");
const Fortnite = require("fortnite");
const ft = new Fortnite(apikey.fortnite);

module.exports.run = async (bot, message, args) => {

    let username = args[0];
    let platform = args[1] || "pc";

    let data = ft.getInfo(username, platform).then(data => {

        let stats = data

    }).catch(e => {
        console.log(e);
        message.channel.send("Bohužel jsem nenašel jméno v databázi")
    });

}

module.exports.help = {
    name:"fortnite"
}