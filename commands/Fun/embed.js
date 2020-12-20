//Same as say but with embed!
//by murerCXV
//free copy paste
//join Discord

client.on("message", msg => {
    let args = msg.content.substring().split(" ");
        switch(args[0]){
            case '!embed':
                   
            if(!args[1]){
                msg.reply("Please provide content")
            }

                
                    const embed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${msg.author.username} embed`)
                    .addField(args[1], "     ")
                    .setTimestamp()
                    if(args[1]){
                        msg.reply(embed)
                    }
        }
});
