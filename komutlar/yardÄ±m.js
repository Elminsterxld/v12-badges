const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = async (client, message, args) => {
  var user = message.mentions.users.first() || message.author;
    let onay = await db.fetch(`memberBadge_${user.id}`,"onyr");
    let yetkili = await db.fetch(`memberBadge2_${user.id}`,"ytk");
    let destekçi = await db.fetch(`memberBadge3_${user.id}`,"dstk");
    let mod = await db.fetch(`memberBadge4_${user.id}`,'modrozet');
    let paraR = await db.fetch(`memberBadge6_${user.id}`,"parz");
  let gold = await db.fetch(`üyelikk_${user.id}`, 'üyelik');
let web = await db.fetch(`webp_${user.id}`, 'webp');
    let evet = await client.emojis.cache.get(client.emojiler.evet);
    let hayır = await client.emojis.cache.get(client.emojiler.hayır);

    let onayE = await client.emojis.cache.get(client.emojiler.onayRozet);
    let yetkiliE = await client.emojis.cache.get(client.emojiler.yetkiliRozet);
    let modE = await client.emojis.cache.get(client.emojiler.modRozet);
    let destekçiE = await client.emojis.cache.get(client.emojiler.destekçiRozet);
    let paraE = await client.emojis.cache.get(client.emojiler.paraROZET);
  let goldE = await client.emojis.cache.get(client.emojiler.gold);
    let webE = await client.emojis.cache.get(client.emojiler.mutlu);
  let seytans;
  if(web === null) seytans = `Yok `
    else seytans = `${webE}`
    
    const codleak = new Discord.MessageEmbed()
    .setColor('#E70000')
    .setAuthor(`${client.user.username} `, client.user.avatarURL({dynamic:true})) 
      .setDescription('> Bu Altyapı Elminstêr#0007 Tarafından Yapıldı!')
    .addField('** Genel Komut (1)**', ` Rozetlerine Bakma Komutu \n`+ '`rozetlerim`')
      .addField('** Rozet Verme Komutları (7)**', ` Rozet Verme Komutları \n` +  '`partner-rozet`, `dev-rozet`, `destekçi-rozet`, `mod-rozet`, `goldekle`, `yıldırım-rozet`, `şeytan-rozet`')
      .addField('** Rozet Alma Komutları (7)**',   ` Rozet Alma Komutlar. \n` + '`partner-al`, `dev-al`, `destekçi-al`,`mod-al`,`gold-al`,`yıldırım-al`,`şeytan-al`')
      .addField('** Rozet Liste Komutlari (7)**',` Rozet Liste. \n` +  '`parnet-liste`, `dev-lists`, `destekçi-liste`, `mod-liste`,`gold-liste`,`-yıldırım-liste`,`şeytan-liste`')
    .addField(`Rozetleri`,`${seytans}`)
   .setFooter(`© ${client.user.username} ` , client.user.avatarURL({dynamic:true}))
    .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/806932769523499089/807718767677145148/34-1.png')
    .setThumbnail(message.author.avatarURL({dynamic:true}))
    message.channel.send(codleak).catch()
    
//////Elminstêr#0007
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};