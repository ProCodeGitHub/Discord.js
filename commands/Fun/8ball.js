//By murer
client.on("message", msg => {
 var msgs = ["hello", "8ball right?", "imma discord bot", "Hello World", "U bored?"]    //use array to add a new message use "hello", "bye"
 const rnad = Math.floor(Math.random()*msgs.length)
 if(msg.content.startsWith("8ball")){
 msg.channel.send(msgs[rnad])
}
});
