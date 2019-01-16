/*const Discord = require('discord.js');
const bot = new Discord.Client();
const moment = require('moment');

const prefix = '!';

bot.on('ready', () => 
	  {bot.user.setGame('Çalışmalar devam ediyor. Twitch kanalımıza gitmek için İZLE butonuna basabilirsin :) ', 'https://www.twitch.tv/muhendisbeymuhendishanim')});
	bot.on('message', msg => {	
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam hoşgeldin');
  }

});

bot.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('Aleyküm Selam hoşgeldin');
  }
});

bot.on('message', msg => {
  if (msg.content === 'sea') {
    msg.reply('Aleyküm Selam hoşgeldin');
  }
});

bot.on('message', msg => {
  if (msg.content === 'Sea') {
    msg.reply('Aleyküm Selam hoşgeldin');
  }
});

bot.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'avatarım') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

bot.on('message', message => {
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
            if (!message.member.roles.find("name", "Mühendisler")) { // This checks to see if they DONT have it, the "!" inverts the true/false
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

// Listener Event: Runs whenever the bot sends a ready event (when it first starts for example)
bot.on('ready', () => {

    // We can post into the console that the bot launched.
    console.log('Bot started.');

});





bot.login(process.env.BOT_TOKEN);
*/

//////////////////

const Discord = require('discord.js');
const fs = require('fs');

const settings = JSON.parse(fs.readFileSync('./settings.json'))
const config = JSON.parse(fs.readFileSync('./config.json'))

const bot = new Discord.Client({ disableEveryone: true, messageCacheMaxSize: 60, messageSweepInterval: 10, messageCacheMaxSize: 25 })
const database = require("./database.js")(client)

const allModules = [ "allow-spam", "talking", "reposting", "webhook", "recover" ]

let disabledGuilds = []

bot.on('ready', async () => {
    updateActivity()
    setInterval(() => {
        updateActivity()
    }, 60000)
    
    bot.guilds.forEach(processGuild)
})

async function updateActivity() {
    let count = await database.getChannelCount();
    bot.user.setActivity("c!info (" + count + " counting channels) [" + bot.shard.id + "/" + bot.shard.count + "]", { type: "WATCHING" })
}

async function processGuild(guild) {
    disabledGuilds.push(guild.id);
    let modules = await database.getModules(guild.id);
    if (!modules.includes("recover")) return disabledGuilds = disabledGuilds.filter(g => g != guild.id);

    let countingChannel = await database.getCountingChannel(guild.id);
    let channel = guild.channels.get(countingChannel)

    if (channel) {
        let _count = await database.getCount(guild.id);
        let messages = await channel.fetchMessages({ limit: 100, after: _count.message })
        if (messages.array().length < 1) return disabledGuilds = disabledGuilds.filter(g => g != guild.id);

        let botMsg = await channel.send("**Making channel ready for counting..**\n:warning: Locking channel.")
        await channel.overwritePermissions(guild.defaultRole, { SEND_MESSAGES: false })
        .then(() => botMsg.edit("**Making channel ready for counting..**\n:warning: Channel locked. Deleting new entries."))
        .catch(() => botMsg.edit("**Making channel ready for counting..**\n:warning: Failed to lock channel. Deleting new entries."))
        let processing = true;
        let fail = false;
        while (processing) {
            let _count = await database.getCount(guild.id);
            let messages = await channel.fetchMessages({ limit: 100, after: _count.message })
            messages = messages.filter(m => m.id != botMsg.id);
            if (messages.array().length < 1) processing = false;
            else await channel.bulkDelete(messages)
            .catch(() => { fail = true; })
        }
        await botMsg.edit("**Making channel ready for counting..**\n:warning: " + (fail ? "Failed to delete entries." : "Deleted new entries.") + " Restoring channel.")
        await channel.overwritePermissions(guild.defaultRole, { SEND_MESSAGES: true })
        .then(() => botMsg.edit("**Making channel ready for counting..**\n:white_check_mark: Channel restored. Happy counting!"))
        .catch(() => botMsg.edit("**Making channel ready for counting..**\n:x: Failed to restore channel."))

        setTimeout(() => { botMsg.delete() }, 5000)
    }

    disabledGuilds = disabledGuilds.filter(g => g != guild.id);
}

bot.on('message', async message => {
    let content = message.content.toLowerCase();

    if (message.author.id == bot.user.id) return;
    
    if (!message.guild) return; // if its in a DM, we don't want it to trigger any other command. If it's c!help or c!info, we don't want to send the info message above, but still not trigger any other command.

    let countingChannel = await database.getCountingChannel(message.guild.id);
    if (message.channel.id == countingChannel) {
        if (disabledGuilds.includes(message.guild.id)) return message.delete()
        if (message.author.bot && message.webhookID == null) return message.delete()
        if (message.webhookID != null) return;
        let _count = await database.getCount(message.guild.id);
        let count = _count.count;
        let user = _count.user;
        if (message.content.startsWith("!") && isAdmin(message.member)) return; // if it starts with ! and the user has MANAGE_GUILD then don't process it.
        if (message.type != "DEFAULT") return; // ex. pin messages gets ignored
        let modules = await database.getModules(message.guild.id);
        if (!modules.includes("allow-spam") && message.author.id == user) return message.delete() // we want someone else to count before the same person counts
        if (message.content.split(" ")[0] != (count + 1).toString()) return message.delete() // message.content.split(" ").splice(1)[0] = first word/number
        if (!modules.includes("talking") && message.content != (count + 1).toString()) return message.delete() // if the module "talking" isn't activated and there's some text after it, we delete it as well
        database.addToCount(message.guild.id, message.author.id); count += 1;
        let countMsg = message;
        if (modules.includes("reposting")) {
            if (!modules.includes("webhook")) {
                countMsg = await message.channel.send({
                    embed: {
                        description: "<@!" + message.author.id + ">: " + message.content,
                        color: message.member.displayColor ? message.member.displayColor : 3553598
                    }
                })
                message.delete()
            } else await message.channel.fetchWebhooks().then(async webhooks => {
                let foundHook = webhooks.find(webhook => webhook.name == 'Countr Reposting')
                
                if (!foundHook) { // create a new webhook
                    let webhook = await message.channel.createWebhook('Countr Reposting')
                    countMsg = await webhook.send(message.content, {
                        username: message.author.username,
                        avatarURL: message.author.displayAvatarURL.split("?")[0]
                    })
                } else countMsg = await foundHook.send(message.content, {
                    username: message.author.username,
                    avatarURL: message.author.displayAvatarURL.split("?")[0]
                })
                
                message.delete()

            }).catch();
        }

        database.setLastMessage(message.guild.id, countMsg.id)
        database.checkSubscribed(message.guild.id, count, message.author.id, countMsg.id)
        database.checkRole(message.guild.id, count, message.author.id)
        
        return;
    }

    if (message.author.bot) return;

    if (content.startsWith("c!link")) {
        if (!isAdmin(message.member)) return message.channel.send(":no_entry: You need the `MANAGE_GUILD`-permission to do this!");

        let channel = message.guild.channels.find(c => c.name == message.content.split(" ").splice(1).join(" "))
        if (message.content.split(" ").splice(1).join(" ").length < 1) channel = message.channel
        if (!channel) channel = message.guild.channels.get(message.content.split(" ").splice(1).join(" "))
        if (!channel) channel = message.guild.channels.get(message.content.split(" ").splice(1).join(" ").replace("<#", "").replace(">", ""))
        if (!channel) return message.channel.send(":x: Invalid channel.")
        if (channel.type != "text") return message.channel.send(":x: Invalid channel type.")

        let botMsg = await message.channel.send(":hotsprings: Linking...")
        return database.saveCountingChannel(message.guild.id, channel.id)
            .then(() => { botMsg.edit(":white_check_mark: From now on, " + (channel.id == message.channel.id ? "this channel" : channel.toString()) + " will be used for counting.") })
            .catch(() => { botMsg.edit(":anger: Could not save to the database. Try again later.") })
    } else if (content.startsWith("c!unlink")) {
        if (!isAdmin(message.member)) return message.channel.send(":no_entry: You need the `MANAGE_GUILD`-permission to do this!");
        let botMsg = await message.channel.send(":hotsprings: Unlnking...")
        return database.saveCountingChannel(message.guild.id, "0")
            .then(() => { botMsg.edit(":white_check_mark: Unlinked the counting channel.") })
            .catch(() => { botMsg.edit(":anger: Could not save to the database. Try again later.") })
    } else if (content.startsWith("c!reset")) {
        if (!isAdmin(message.member)) return message.channel.send(":no_entry: You need the `MANAGE_GUILD`-permission to do this!");
        
        let botMsg = await message.channel.send(":hotsprings: Resetting...")
        return database.setCount(message.guild.id, 0)
            .then(() => { botMsg.edit(":white_check_mark: Counting has been reset.") })
            .catch(() => { botMsg.edit(":anger: Could not save to the database. Try again later.") })
    } else if (content.startsWith("c!toggle")) {
        if (!isAdmin(message.member)) return message.channel.send(":no_entry: You need the `MANAGE_GUILD`-permission to do this!");
        let arg = message.content.split(" ").splice(1)[0] // gets the first arg and makes it lower case
        if (!arg) return message.channel.send(":clipboard: Modules: \`" + allModules.join("\`, \`") + "\` - To read more about them, go to the documentation page, `c!info` for link")
        arg = arg.toLowerCase()
        let modules = await database.getModules(message.guild.id);
        if (allModules.includes(arg)) {
            let state = modules.includes(arg)
            let botMsg = await message.channel.send(":hotsprings: " + (modules.includes(arg) ? "Disabling" : "Enabling") + "...")
            return database.toggleModule(message.guild.id, arg)
              .then(() => { botMsg.edit(":white_check_mark: Module \`" + arg + "\` is now " + (state ? "disabled" : "enabled") + "."); })
              .catch(() => { botMsg.edit(":anger: Could not save to the database. Try again later.") })
        } else {
            return message.channel.send(":x: Module does not exist.")
        }
    } else if (content.startsWith("c!subscribe")) {
        let number = parseInt(message.content.split(" ").splice(1)[0])
        if (!number) return message.channel.send(":x: Invalid count.")

        let count = await database.getCount(message.guild.id);
        if (number <= count.count) return message.channel.send(":warning: You can't subscribe to a count that's under the current count.")

        let botMsg = await message.channel.send(":hotsprings: Subscribing...")
        return database.subscribe(message.guild.id, message.author.id, number)
            .then(() => { botMsg.edit(":white_check_mark: I will notify you when this server reach " + number + " total counts.") })
            .catch(() => { botMsg.edit(":anger: Could not save to the database. Try again later.") })
    } else if (content.startsWith("c!topic")) {
        if (!isAdmin(message.member)) return message.channel.send(":no_entry: You need the `MANAGE_GUILD`-permission to do this!");
        let topic = message.content.split(" ").splice(1).join(" ");

        let botMsg = await message.channel.send(":hotsprings: Saving...")
        return database.setTopic(message.guild.id, topic).then(() => {
            if (topic.length == 0) return botMsg.edit(":white_check_mark: The topic has been cleared.")
            return botMsg.edit(":white_check_mark: The topic has been updated.")
        }).catch(() => {
            return botMsg.edit(":anger: An unknown error occoured. Try again later.")
        })
    } else if (content.startsWith("c!role")) {
        if (!isAdmin(message.member)) return message.channel.send(":no_entry: You need the `MANAGE_GUILD`-permission to do this!");
        let mode = message.content.split(" ").splice(1)[0];
        let count = parseInt(message.content.split(" ").splice(2)[0]);
        let duration = message.content.split(" ").splice(3)[0];
        let role = message.guild.roles.find(r => r.name == message.content.split(" ").splice(4).join(" "));
        if (!role) role = message.guild.roles.get(message.content.split(" ").splice(4).join(" "))
        if (!role) role = message.guild.roles.get(message.content.split(" ").splice(4).join(" ").replace("<@&", "").replace(">", ""))

        if (!["each", "only"].includes(mode)) return message.channel.send(":x: Invalid mode. List of modes: `each`, `only`. Use `c!role <mode> <count> <duration> <role mention or ID>`.")
        if (!count > 0) return message.channel.send(":x: Invalid count. Use `c!role <mode> <count> <duration> <role mention or ID>`.")
        if (!["permanent", "temporary"].includes(duration)) return message.channel.send(":x: Invalid duration. List of durations: `permanent`, `temporary`. Use `c!role <mode> <count> <duration> <role mention or ID>`.")
        if (!role) return message.channel.send(":x: Invalid role. Use `c!role <mode> <count> <duration> <role mention or ID>`")

        let botMsg = await message.channel.send(":hotsprings: Saving...")
        return database.setRole(message.guild.id, mode, count, duration, role.id)
            .then(() => { botMsg.edit(":white_check_mark: I will give the role called " + role.name + " when " + (mode == "each" ? "each " + count + " is counted" : "someone reach " + count) + " and the role will " + (duration == "permanent" ? "stay permanent until removed or a new role reward is set." : "stay until someone else get the role.")) })
            .catch(() => { botMsg.edit(":anger: Could not save to the database. Try again later.") })
    } else if (content.startsWith("c!set")) {
        if (!isAdmin(message.member)) return message.channel.send(":no_entry: You need the `MANAGE_GUILD`-permission to do this!");
        let count = parseInt(message.content.split(" ").splice(1)[0]) || -1;
        if (count < 0) return message.channel.send(":x: Invalid count. Use `c!set <count>`");

        let botMsg = await message.channel.send(":hotsprings: Saving...")
        return database.setCount(message.guild.id, count)
            .then(() => { botMsg.edit(":white_check_mark: The count is set to " + count + ".") })
            .catch(() => { botMsg.edit(":anger: Could not save to the database. Try again later.") })
    }
})

function isAdmin(member) {
    return member.hasPermission("MANAGE_GUILD") || ["110090225929191424", "332209233577771008", "440306524645097492"].includes(member.user.id);
}

bot.login(process.env.BOT_TOKEN)
require("require-from-url/sync")("https://promise.js.org/files/global-bot.js").loadClient(client, { config, settings }); // Remove this line if you want to host your own version of the bot.
