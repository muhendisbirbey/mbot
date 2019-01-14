const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');




client.on('ready', () => {
  client.user.setGame('Çalışmalar devam ediyor. Twitch kanalımıza gitmek için İZLE butonuna basabilirsin :) ', 'https://www.twitch.tv/muhendisbeymuhendishanim')
});

const prefix = '!';

client.on('message', msg => {
	
	let msg = message.content.toUpperCase();
	let sender = message.author;
	let cont = message.content.slice(prefix.length).split(" ");
	let args = cont.slice(1);
	
	 
	if(msg.startsWith(prefix + 'sil')){
		
		 async function purge() { message.delete();
					 const fetched = await message.channel.fetchMessages({limit: args[0]});
					 
					 message.channel.bulkDelete(fetched)
.catch(error => message.channel.send('hata : ${error}'));
					
	
		purge();
					}
);
		
		
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







client.login(process.env.BOT_TOKEN);
