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
  // If the message is "what is my avatar"
  if (message.content === prefix + 'avatarım') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

bot.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === prefix + 'sistem') {
    // Send the user's avatar URL
    message.reply(' ``` SİSTEM ÖZELLİKLERİ\n İŞLEMCİ RYZEN 5 1400 3.4 Ghz \n RAM 8 GB DDR4 2666 Mhz \n ANAKART Gigabyte GA-A320M-DS2 \n EKRAN KARTI GALAX GTX 1060 6G \n DEPOLAMA SanDisk 120 gb SSD + 1 TB HDD \n MOUSE Logitech G300s \n KLAVYE Logitech G105 \n KULAKLIK Logitech G430 ``` ');}
});

bot.on('message', message => {
  if (message.content === prefix + 'bot') {
 
    message.reply('Mühendis Bot aktif olarak ' + bot.guilds.size +' sunucuda ' + bot.channels.size + ' Kanalda ' + bot.users.size + ' kişiye hizmet veriyor.');
  }
});
/*
bot.on('message', message => {

if (message.content === prefix + 'mesaj' ) {

guildMember = message.member;
	
	if(message.member.id === '535404869616664577'){
	
  
    message.channel.guild.members.forEach(user => {
    user.send('Merhabalar. Ben Mühendis Bey. Sizlere botumuz aracılığı ile ulaşıyorum. Bot kodlamasında yaşadığım bir teknik aksaklık nedeniyle hesabım discord tarafından kapatıldı. Hesabın silinmesi durumunda sunucunun da silinme ihtimaline karşı yeni bir sunucu açtık. Sizleri yedek sunucumuza da bekliyoruz. Yeni sunucu yedek olması amacı ile kuruldu. Halihazırda olan sunucudan lütfen çıkmayın. Eğer kapanırsa yedek sunucumuza geçeceğiz. Desteklerinizi bekliyoruz. Mühendis Bey ile Mühendis Hanım - YouTube / Twitch ');
});


	}
else{ message.reply('Bu komutu kullanma yetkisine sahip değilsiniz!'); }
  }
});   */



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
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'hoş-geldiniz-🎀');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Discord sunucumuza hoşgeldin. Sunucudaki diğer odaları görebilmek için <#440947896280416276> kanalından rollerini alabilirsin.  Ayrıca <#397696480988758017> kanalından sunucu kurallarını okumayı da unutma :slight_smile:  İyi eğlenceler :heart:   ${member}      `);
});

bot.on('guildMemberAdd', member => {
   member.send(' Discord sunucumuza hoşgeldin. Sunucudaki diğer odaları görebilmek için #rol-secimi kanalından rollerini alabilirsin.  Ayrıca #kurallar-kanaladavet kanalından sunucu kurallarını okumayı da unutma :slight_smile:  İyi eğlenceler :heart: ');
});

/*
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'sohbet');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
	int kisikaldi = 5000 - bot.guilds.size ;
  channel.send('5000 kişi olmamıza ' + kisikaldi + 'kişi kaldı!');
}); */








bot.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.

    


    // Purge
    if (msg.startsWith(prefix + 'SİL')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", ".")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('Bu komutu kullanacak yetkiye sahip değilsiniz!'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Lütfen sayı giriniz. \n Kullanım şekli: ' + prefix + 'sil <silinecek mesaj miktarı>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }
});







bot.login(process.env.BOT_TOKEN);
