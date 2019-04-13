const Discord = require('discord.js');
const bot = new Discord.Client();
const moment = require('moment');
const prefix = '!';

bot.on('ready', () => 
	 {bot.user.setGame('Çalışmalar devam ediyor. Twitch kanalımıza gitmek için İZLE butonuna basabilirsin :) ', 'https://www.twitch.tv/muhendisbeymuhendishanim')});
   
bot.on('message', msg => {	
  if (msg.content === 's.a.' |msg.content === 's.a' |msg.content === 's' |msg.content === 'selm' |msg.content === 'salam' |msg.content === 'slm' |msg.content === 'sa' | msg.content ==='Sa'|msg.content ==='selamlar'|msg.content ==='sea'|msg.content ==='Sea' | msg.content ==='selam' | msg.content ==='Selamlar' | msg.content ==='Selam'){
    msg.reply('Aleyküm Selam Hoş Geldin');
  }
});



bot.on('message', message => {
  if (message.content === prefix + 'avatarım') {
  let bicon = message.author.displayAvatarURL;
    const botembed = new Discord.RichEmbed()            
    .setImage(bicon);	
    message.channel.send(botembed);
  }
});

bot.on('message', message => {
  if (message.content === prefix + 'sistem') {
    message.reply(' ``` SİSTEM ÖZELLİKLERİ\n İŞLEMCİ RYZEN 5 1400 3.4 Ghz \n RAM 8 GB DDR4 2666 Mhz \n ANAKART Gigabyte GA-A320M-DS2 \n EKRAN KARTI GALAX GTX 1060 6G \n DEPOLAMA SanDisk 120 gb SSD + 1 TB HDD \n MOUSE Logitech G300s \n KLAVYE Logitech G105 \n KULAKLIK Logitech G430 ``` ');}
});

bot.on('message', message => {
  if (message.content === prefix + 'detay') {
    message.reply('${bot.user.username} aktif olarak ' + bot.guilds.size +' sunucuda ' + bot.channels.size + ' Kanalda ' + bot.users.size + ' kişiye hizmet veriyor.');
  }
});

bot.on('message', message => {
  guildMember = message.member;
  if (message.content === prefix + 'bilgilerim' ) {
   userID = 'Kullanıcı ID : ' + guildMember.id + '\n'; 
    joinDiscord = 'Hesap oluşturma tarihi : ' + guildMember.user.createdAt + '\n'  ;
   joinServer = 'Sunucuya giriş tarihi : ' + guildMember.joinedAt + '\n';
creatSince = 'Hesabınızı ' + moment(new Date()).diff(guildMember.user.createdAt, 'days') + ' gün önce oluşturdunuz ';
joinSince = 'Sunucumuza ' + moment(new Date()).diff(guildMember.joinedAt, 'days') + ' gün önce katıldınız \n';
   message.reply(' ``` \n'+ userID + joinDiscord + joinServer + creatSince + joinSince + ' ```' );
  }
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'hoş-geldiniz-🎀');
  if (!channel) return;
  channel.send(`Discord sunucumuza hoş geldin. Sunucudaki diğer odaları görebilmek için <#440947896280416276> kanalından rollerini alabilirsin.  Ayrıca <#397696480988758017> kanalından sunucu kurallarını okumayı da unutma :slight_smile:  İyi eğlenceler :heart:   ${member}      `);
});

bot.on('guildMemberAdd', member => {
const channel = member.guild.channels.find(ch => ch.id === 254322308477353985);
  if (!channel) return;
  channel.send(`${member} sunucudan ayrıldı.`);
});

bot.on('guildMemberAdd', member => {
   member.send(' Discord sunucumuza hoşgeldin. Sunucudaki diğer odaları görebilmek için #rol-secimi kanalından rollerini alabilirsin.  Ayrıca #linkler kanalından sunucu kurallarını okumayı da unutma :slight_smile:  İyi eğlenceler :heart: ');
});



bot.on(`guildMemberAdd`, member => {
bot.guilds.forEach((guild) => {
    guild.fetchMembers().then(g => {
        let count = 0;
        g.members.forEach((member) => {
            count++;
        });
	var deger = 500 ;
        var sayac = deger - count ;
if( sayac < 0 ) {  
while(sayac < 0){ deger = deger + 500; sayac = deger - count ; } }
console.log(`${deger} `);
const channel = member.guild.channels.find(ch => ch.name === `sohbet`);
if (!channel) return;
channel.send(` ${member}   aramıza katıldı! :slight_smile:  **${deger}** kişi olmamıza  **${sayac}**  kişi kaldı !     `);
    });
});
});



bot.on('message', message => {
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.
    if (msg.startsWith(prefix + 'SİL')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.
            if (!message.member.roles.find("name", ".")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('Bu komutu kullanacak yetkiye sahip değilsiniz!'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }
            if (isNaN(args[0])) {
                message.channel.send('Lütfen sayı giriniz. \n Kullanım şekli: ' + prefix + 'sil <silinecek mesaj miktarı>'); //\n means new line.
                return;
            }
            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.
        }
        purge(); // Make sure this is inside the if(msg.startsWith)
    }
});

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};

bot.on(`message`, message => {
		if(message.content === prefix + `uptime`) {
	let u = convertMS(bot.uptime);
    let uptime = u.d + "  Gün : " + u.h + "  Saat : " + u.m + "  Dakika : " + u.s + "  Saniye"
    const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL;
    const botembed = new Discord.RichEmbed()
        .addBlankField()
        .setColor(`RANDOM`)
        .addField(`:timer:`, `** ${bot.user.username} **  ${uptime} 'dir çalışıyor.`)
        .setThumbnail(bicon);
    message.channel.send(botembed);
}
});
bot.login(process.env.BOT_TOKEN);
