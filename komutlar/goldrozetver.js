const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  
if(message.author.id !== '754092428557942855') if(message.author.id !== '754092428557942855') return message.channel.send(`Üzgünüm Sen \`Elminstêr\` Değilsin!`)
    
     let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir İD GİRMELİSİNİZ!')
  
  db.set(`üyelikk_${nesne}`, 'üyelik')
  
  message.channel.send(` <@${nesne}> adlı kişinin gold üyeliğini başarıyla aktif ettim.`)

if (client.users.cache.get(''+nesne+'').send(` \`Gold üyeliğiniz aktif edildi.\` `)){
 
} else return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldekle'],
  permLevel: 0
};
exports.help = {
  name: 'goldüyeekle',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};
