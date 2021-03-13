const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  if(message.author.id !== "754092428557942855") if(message.author.id !== "754092428557942855") return message.channel.send("Üzgünüm Dostum Sen \`Elminstêr\` değilsin!");
  
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir İd Girmelisin!')
  
  db.delete(`üyelikk_${nesne}`, 'üyelik')
  
  message.channel.send(` <@${nesne}> adlı kişinin Gold Üyeliğini başarıyla kaldırdım.`)
if (client.users.cache.get(''+nesne+'').send(` \`Gold Üyeliğiniz kaldırıldı.\` `)){
 
} else return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gold-al'],
  permLevel: 0
};
exports.help = {
  name: 'gold-al',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};