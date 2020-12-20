//clear command by murerCXV
//No problem with copy paste
//join discord and subscribe!
client.on("message", msg => {
    let args = msg.content.substring().split(" ");
      switch(args[0]){
        case '!clear':
            if(!msg.member.hasPermission("MANAGE_MESSAGES")){ //This is the perms if you don´t have MANAGE_MESSAGES perm you can´t use this command
              return msg.reply("No **perms**")
              
            }
 
                if(!args[1]){
                  return msg.reply("Please provide a **number**")
                }

                msg.channel.bulkDelete(args[1])
                msg.channel.send(`Deleted **${args[1]}** messages!`)  //if error "Missing permissions" give the bot manage messages perm.
      }
})
