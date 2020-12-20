//by murerCXV
//free copy paste
//join Discord

client.on("message", msg => {
    let args = msg.content.substring().split(" ");
        switch(args[0]){
            case '!poll':
                if(!args[1]){
                    msg.reply(There\`s a problem :x: Please provide a yes or no question ")
                    break;
                }


                    let msf = args.slice(1).join(" ");
                        msg.channel.send("**" + msf + "**").then(r => {
                            r.react("✅")
                            r.react("❌")
                          
                        })
        }
});
