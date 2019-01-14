const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');

client.on('ready', () => {
  client.user.setGame('Çalışmalar devam ediyor. Twitch kanalımıza gitmek için İZLE butonuna basabilirsin :) ', 'https://www.twitch.tv/muhendisbeymuhendishanim')
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam hoşgeldin');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('Aleyküm Selam hoşgeldin');
  }
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'avatarım') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  // If the message is "what is my avatar"
  
  guildMember = message.member;
  if (message.content === 'bilgilerim') {
    // Send the user's avatar URL
   
 
   userID = 'Kullanıcı ID : ' + guildMember.id + '\n'; 
    joinDiscord = 'Hesap oluşturma tarihi : ' + guildMember.user.createdAt + '\n'  ;
   joinServer = 'Sunucuya giriş tarihi : ' + guildMember.joinedAt + '\n';
	  
creatSince = 'Hesabınızı ' + moment(new Date()).diff(guildMember.user.createdAt, 'days') + ' gün önce oluşturdunuz ';
joinSince = 'Sunucumuza ' + moment(new Date()).diff(guildMember.joinedAt, 'days') + ' gün önce katıldınız \n';

	  
    message.reply(' ``` \n'+ userID + joinDiscord + joinServer + creatSince + joinSince + ' ```' );
   

  }
});






client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'hoş-geldiniz-🎀');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Discord sunucumuza hoşgeldin. Sunucudaki diğer odaları görebilmek için <#440947896280416276> kanalından rollerini alabilirsin.  Ayrıca <#397696480988758017> kanalından sunucu kurallarını okumayı da unutma :slight_smile:  İyi eğlenceler :heart:   ${member}      `);
});

client.on('guildMemberAdd', member => {
   member.send(' Discord sunucumuza hoşgeldin. Sunucudaki diğer odaları görebilmek için #rol-secimi kanalından rollerini alabilirsin.  Ayrıca #kurallar-kanaladavet kanalından sunucu kurallarını okumayı da unutma :slight_smile:  İyi eğlenceler :heart: ');
});


exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`temizle` **komutu sadece sunucularda kullanılabilir.**');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('**Kaç mesaj silmem gerektiğini belirtmedin.**')
  if (mesajsayisi > 100) return message.channel.send('**__100__** **adetden fazla mesaj silemem!**');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send('**__' + mesajsayisi + '__** **adet mesaj sildim!** ')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};




client.login(process.env.BOT_TOKEN);
