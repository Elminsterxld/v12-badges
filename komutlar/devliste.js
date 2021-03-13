const Discord = require("discord.js")
const db = require("quick.db")
exports.run = (client, message, args) => {
  
   
  let code = args[1]
  let kişi = ''
  let data = db.get(`onyr`)
  let kişiAll = db.all().filter(i => i.ID.startsWith('memberBadge_'))
  kişiAll.forEach(s => {
    kişi += s.ID.replace('memberBadge_','<@') + "> \n" 
  })

  const embed = new Discord.MessageEmbed()
  .setAuthor("Dev Rozeti Listesi", client.user.avatarURL())
  .setColor('#E70000')
  .setDescription(kişi)
  .setFooter(client.user.username, client.user.avatarURL())
  return message.channel.send(embed)



 
}

exports.conf = {
  enabled : true,
  guildOnly : false,
  aliases : ["dev-liste"],
  permLevel : 0
}

exports.help = {
  name : 'dev-liste',
  description : 'Gold Üyeleri Gösterir.',
  usage : 'w!gold-liste'
}