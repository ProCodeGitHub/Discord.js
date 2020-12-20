//say command by murerCXV.
//Copy and paste!
//join Discord!
client.on("message", msg => {
  let args = msg.content.substring().split(" ");
    switch(args[0]){
      case '!say':
          if(!args[1]){
            msg.reply("**:x: Provide something after the command**")
          }

          let msgArgs = args.slice(1).join(" ");
            if(args[1]){
              msg.channel.send(`**${msgArgs}**`).then(msg.author.lastMessage.delete())
               
              
            }


    }
})
