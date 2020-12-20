//avatar command by murerCXV
//Copy paste feel free!
//Join Discord.
client.on("message", msg => {
    let user = message.mentions.users.first();
    if(!user) user = message.author;
        const embed = new discord.MessageEmbed()
            .setTitle("Avatar Here")
            .setImage(user.displayAvatarURL())
            .setFooter("Hey ur avatar is up here!")
            .setTimestamp()
            if(msg.content.startsWith("!avatar")){
            message.channel.send(embed)
        }
});
