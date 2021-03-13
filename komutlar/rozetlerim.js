const Discord = require(`discord.js`); 
const db = require(`quick.db`);
module.exports.run = async (client, message, args) => {

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
    let sayfa = [`**${user.tag} || Rozetler**

 ${yetkiliE} **Partner rozeti:** ${yetkili  ? `${evet} Alınmış` : `${hayır} Alınmamış`}
   
    ${modE} **Moderatör rozeti:** ${mod  ? `${evet} Alınmış` : `${hayır} Alınmamış`}

    ${onayE} ** Dev rozeti:** ${onay  ? `${evet} Alınmış` : `${hayır} Alınmamış`}

    ${destekçiE} **Destekçi rozeti:** ${destekçi  ? `${evet} Alınmış` : `${hayır} Alınmamış`}
   
    ${paraE} **Yıldırım rozeti:** ${paraR  ? `${evet} Alınmış` : `${hayır} Alınmamış`}

  ${goldE} **Gold rozeti:** ${gold ? `${evet} Alınmış` : `${hayır} Alınmamış`}

  ${webE} **Şeytan Rozeti:** ${web ? `${evet} Alınmış` : `${hayır} Alınmamış`}
    `];

    const profilE = new Discord.MessageEmbed()
    .setColor(`#E70000`)
   
    .setDescription(sayfa)
    .setTimestamp()
    .setFooter(`Komut ${message.author.tag} tarafından kullanıldı`)
  message.channel.send(profilE)
    
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rozetlerim"],
  permLevel: 0,
  kategori: "profil"
};

module.exports.help = {
  name: "rozetler",
  description: "Rozetlerinizi veya bir başkasının rozetlerini görürsünüz",
  usage: "rozetler"
};