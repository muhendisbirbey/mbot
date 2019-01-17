const Discord = require('discord.js');
const bot = new Discord.Client();
const moment = require('moment');
const prefix = '!';

/*const yourID = "440933214509334533"; //Instructions on how to get this: https://redd.it/40zgse
const setupCMD = "!createrolemessage"
let initialMessage = `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`;
const roles = ["Mühendis Bot"];
const reactions = ["💻", "🖌", "😃", "🆕"];
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS
    return messages;
}


bot.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});
*/
///////////////////////////////////////////////// 

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

bot.on('message', message => {
 if (message.content === prefix + 'bot') {

  msg.reply(`${bot.guilds.size} Sunucu | ` + `${bot.channels.size} Kanal | ` + `${bot.users.size} Kişi `, {type: "WATCHING"});
  
 }
});






bot.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.

    // Commands

    // Ping
    if (msg === prefix + 'PING') { // This checks if msg (the message but in all caps), is the same as the prefix + the command in all caps.

        // Now, let's send a response.
        message.channel.send('Ping!'); // This 'sends' the message to the channel the message was in. You can change what is in the message to whatever you want.

    }


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
