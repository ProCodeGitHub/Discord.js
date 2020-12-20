//Thingy by murerCXV
//feel free for copy and paste!
//join Discord: 

 
client.on("message", msg => {
 var msgs = ["hello", "8ball right?", "imma discord bot", "Hello World", "U bored?"]    //use array to add a nev message use "hello", "bye"
 const rnad = Math.floor(Math.random()*msgs.length)
 msg.channel.send(msgs[rnad])
});
