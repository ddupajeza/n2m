const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by DayZoonHD")

client.user.setActivity(`gkang`, {
type: "STREAMING",
url: "https://www.twitch.tv/stagemob"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

client.login('NjQzMTY2NDM3MDUzMDM4NjIy.XiIBJg.new1yJiDqYjtq6UeiUGUPWMXDT4');