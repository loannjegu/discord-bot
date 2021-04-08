const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const Client = new Discord.Client;
const fs = require('fs');

const prefix = "-";

var list = [];

Client.on("ready", async () => {
    console.log("bot en ligne");
    Client.user.setStatus('idle');
    Client.user.setActivity("Prefix - || Dev: ShiHori_", {type : 'LISTENING'});
    
Client.guilds.cache.find(guild => guild.id === "733069293125632000").channels.cache.find(channel => channel.id === "815946917597937726").messages.fetch("816356624154755073").then(message => {
        console.log("message ajoutée a la mémoire " + message.content);
        
        message.react("815952919462936666");
        message.react("815959507363430431");
        message.react("816283033656229938");
        message.react("816283177790341131");
        message.react("816284073923313684");
        message.react("816284548240769034");
        message.react("816284849123622932");
        message.react("816284876386467871");
        message.react("815955333104140338");
        message.react("827877454068318228");
        message.react("🎵");
        
    }).catch(err =>{
        console.log("impossible d'ajouter ce message en mémoire" + err);
    });
});

Client.on("guildMemberAdd", member => {
    console.log("Un membre nous a rejoint");
    member.guild.channels.cache.find(channel => channel.id === "733079706408321124").send("**" + member.displayName + "** est arrivé !\nNous sommes désormais **" + member.guild.memberCount + "**");
    member.roles.add("815687949949206549").then(mbr => {
        console.log("role ajoutée");
    }).catch(() => {
        console.log("erreur d'atribution de role");
    });
});

Client.on("guildMemberRemove", member => {
    console.log("un membre nous a quitté");
    member.guild.channels.cache.find(channel => channel.id === "733079706408321124").send("**" + member.displayName + "** nous a quitté");
});

Client.on("messageReactionAdd", (reaction, user) => {

    if(user.bot) return;

    console.log("reaction ajoutée " + user.username + "\nNom de l'emoji " + reaction.emoji.name + " C'est la " + reaction.count + "e reaction");

    if(reaction.message.id === "816356624154755073"){

        if (reaction.emoji.name === "osu"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("815953963287183360").then(mbr => {
                console.log("role ajoutée pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
        if (reaction.emoji.name === "dev"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("814134554175733790").then(mbr => {
                console.log("role ajoutée pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
        if (reaction.emoji.name === "rl"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("815959966350966826").then(mbr => {
                console.log("role ajoutée pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
        if (reaction.emoji.name === "musical_note"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("733274812717334558").then(mbr => {
                console.log("role ajoutée pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
        if (reaction.emoji.name === "mc"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("816286526560272384").then(mbr => {
                console.log("role ajoutée pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
        if (reaction.emoji.name === "sot"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("816287363381985322").then(mbr => {
                console.log("role ajoutée pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
        if (reaction.emoji.name === "lol"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("816286575133720639").then(mbr => {
                console.log("role ajoutée pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
        if (reaction.emoji.name === "genshin"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("816286783149965323").then(mbr => {
                console.log("role ajoutée pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
        if (reaction.emoji.name === "gtav"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("816286726716653589").then(mbr => {
                console.log("role ajoutée pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
        if (reaction.emoji.name === "csgo"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("816286930827214868").then(mbr => {
                console.log("role ajoutée pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
        if (reaction.emoji.name === "R6"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("827878034613993492").then(mbr => {
                console.log("role ajoutée pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
   }

    /*reaction.users.remove(user.id).then(react => {
        console.log("reaction " + react.emoji.name + " retiré par le bot");
    }).catch(err => {
        console.log("Impossible de retirer la reaction : " + err);
    });*/

    /*reaction.remove().then(react => {
        console.log("reaction " + react.emoji.name + " retiré par le bot");
    }).catch(err => {
        console.log("Impossible de retirer la reaction : " + err);
    });*/
});

Client.on("messageReactionRemove", (reaction, user) => {
    console.log(user.bot);
    if(user.bot) return;

    console.log("reaction retirée " + user.username);

    if(reaction.message.id === "816356624154755073"){
        if (reaction.emoji.name === "osu"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("815953963287183360").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
    }
    if(reaction.message.id === "816356624154755073"){
        if (reaction.emoji.name === "dev"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("814134554175733790").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
    }
    if(reaction.message.id === "816356624154755073"){
        if (reaction.emoji.name === "rl"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("815959966350966826").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
    }
    if(reaction.message.id === "816356624154755073"){
        if (reaction.emoji.name === "musical_note"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("733274812717334558").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
    }
    if(reaction.message.id === "816356624154755073"){
        if (reaction.emoji.name === "mc"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("816286526560272384").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
    }
    if(reaction.message.id === "816356624154755073"){
        if (reaction.emoji.name === "sot"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("816287363381985322").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
    }
    if(reaction.message.id === "816356624154755073"){
        if (reaction.emoji.name === "lol"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("816286575133720639").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
    }
    if(reaction.message.id === "816356624154755073"){
        if (reaction.emoji.name === "genshin"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("816286783149965323").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
    }
    if(reaction.message.id === "816356624154755073"){
        if (reaction.emoji.name === "gtav"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("816286726716653589").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
    }
    if(reaction.message.id === "816356624154755073"){
        if (reaction.emoji.name === "csgo"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("816286930827214868").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
    }
    if(reaction.message.id === "816356624154755073"){
        if (reaction.emoji.name === "R6"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("827878034613993492").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(() => {
                console.log("erreur d'atribution de role" + err);
            });
        }
    }
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
/*
    message.react("815952919462936666");
    message.react("815959507363430431");
    message.react("815955333104140338");
    message.react("🎵");
*/


    if (message.content == prefix + 'pp') {
      message.reply(message.author.displayAvatarURL());
    }

    if (message.content == prefix + "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.channel.send(`Pong! Il y a **${timeTaken}ms** de latence entre vous et le Bot`);
  }

    if(message.content == prefix + "stat"){
        message.channel.send("**" + message.author.username + "** qui a pour identifient : **" + message.author.id + "** a posté un message");
    }
/*
    if(message.content == "kimmy"){
        message.react("❤️");
    }
*/
    if(message.content == "pain"){
        message.react("🥖");
    }

    if(message.content == "rageux"){
        message.react("816397455015936061");
    }

    if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " a été banni du serveur");
                }
                else {
                    message.reply("Impossible de bannir ce membre");
                }
            }
        }
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été kick du serveur");
                }
                else {
                    message.reply("Impossible de kick ce membre");
                }
            }
        }
        else if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné");
            }
            else {
                mention.roles.add("816671331939647488");
                message.reply("**" + mention.displayName + "** a été mute");
            }
        }
        else if(message.content.startsWith(prefix + "unmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné");
            }
            else {
                mention.roles.remove("816671331939647488");
                message.reply("**" + mention.displayName + "** a été unmute");
            }
        }
        else if(message.content.startsWith(prefix + "tempmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné");
            }
            else {
                let args = message.content.split(" ");

                mention.roles.add("816671331939647488");
                message.channel.send("**" + mention.displayName + "** a été mute pour " + args[2] + "s");
                setTimeout(function() {
                    mention.roles.remove("816671331939647488");
                    message.channel.send("<@" + mention.id + "> a été unmute --> temps de mute écoulé");
                }, args[2] * 1000);
            }
        }
    } 
});

/*
Client.on("message", message => {
    if(message.content.startsWith(prefix + "play")){
        if(message.member.voice.channel){
            message.member.voice.channel.join().then(connection => {
                let args = message.content.split (" ");

                if(!args[1]){
                    message.reply("Le lien de la vidéo est non ou mal mentionné.");
                    connection.disconnect();
                }
                
                let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio"}));

                dispatcher.on("finish", () => {
                    dispatcher.destroy();
                    connection.disconnect();
                });

                dispatcher.on("error", err => {
                    console.log("Erreur de dispatcher : " + err);
                });
            }).catch(err => {
                message.reply("Erreur lors de la connexion : " + err);
            });
        }
        else {
            message.reply("Vous n'êtes pas connecté en vocal.");
        }
    }
});
*/

Client.on("message",async message => {
    if(message.content === prefix + "queue"){
        let msg = "**FILE D'ATTENTE**\n";
        for (var i = 0; i < list.length; i++) {
          let name;
    
          let getInfo = await ytdl.getBasicInfo(list[i]);
          name = getInfo.videoDetails.title;
    
          msg += `> ${i + 1} - ${name} \n`;
        }
        message.channel.send(msg);
    };
    if(message.content.startsWith(prefix + "play")){
        if(message.member.voice.channel){
            let args = message.content.split(" ");
            
            if(args[1] == undefined || !args[1].startsWith("https://www.youtube.com/watch?v=")){
                message.reply("lien non ou mal mentionné.");
            }
            else {
                if(list.length > 0){
                    list.push(args[1]);
                    message.channel.send("Vidéo ajoutée a la fille d'attente.");
                }
                else{
                    list.push(args[1]);
                    message.channel.send("Vidéo ajoutée a la fille d'attente.");

                    message.member.voice.channel.join().then(connection => {
                        playMusic(connection);

                        connection.on("disconnect", () => {
                            list = [];
                        });

                    }).catch(err => {
                        message.reply("Erreur lors de la connexion");
                    });
                }
            }
        }
    }
});

function playMusic(connection){
    let dispatcher = connection.play(ytdl(list[0], { quality: "highestaudio"}));

    dispatcher.on("finish", () => {
        list.shift();
        dispatcher.destroy();

        if(list.length > 0){
            playMusic(connection);
        }
        else {
            connection.disconnect();
        }
    });

    dispatcher.on("error", err =>{
        console.log("Erreur de dispatcher" + err);
        dispatcher.destroy();
        connection.disconnect();
    });
};

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content === prefix + "help"){
    var embed = new Discord.MessageEmbed()
        .setColor("#E400FF")
        .setTitle("**Help Commandes**")
        //.setURL("https://youtube.com")
        .setAuthor("ShiHori_", "https://odyssea.info/wp-content/plugins/bbpowerpack/assets/images/spinner.gif", "https://discord.gg/HEXG5btkZQ")
        //.setDescription("**modération** ")
        //.setThumbnail("https://cdn.discordapp.com/avatars/444754100874379265/ead40729388f3109ab519e9d1aa2c657.webp")
        //.addField("\u200B", "\u200B", false)
        .addField("modération", "`-ban @pseudo : Ban la personne mentionné` \n `-kick @pseudo : Kick la personne mentionné` \n `-mute @pseudo : Mute la personne mentionné` \n `-unmute @pseudo : Unmute la personne mentionné` \n `-tempmute @pseudo {time} : Mute la personne mentionné pour {time}s`", false)
        .addField("\u200B", "\u200B", false)
        .addField("Musique", "`-play {lien youtube} : Ajoute une musique a la file d’attente` \n `-queue : Affiche la file d’attente`", true)
        .addField("\u200B", "\u200B", false)
        .addField("Autre", "`-ping : Affiche le ping du bot` \n `-pp : Affiche votre photo de profil` \n `-stat : Affiche les informations de la personne` \n `-say {message} : Envoie le message ecrit`", true)
        //.addField("second champ alignie", "contenue de champ [lien cliquable](https://discord.gg/HEXG5btkZQ)", true)
        //.setImage("https://cdn.discordapp.com/avatars/444754100874379265/ead40729388f3109ab519e9d1aa2c657.webp")
        .setTimestamp()
        .setFooter("Dev : ShiHori_#4066", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Circle-icons-dev.svg/1024px-Circle-icons-dev.svg.png")
        

    message.channel.send(embed);
    }
});

Client.on('message', message => {
    if (message.content.startsWith(prefix + 'say')) {
        if (message.author.bot) return;
        const SayMessage = message.content.slice(4).trim();
        message.delete().catch();
        message.channel.send(SayMessage)
    }
});

Client.login(process.env.TOKEN);