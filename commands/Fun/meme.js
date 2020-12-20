//by murerCXV
//Sends a random reddit meme!
//first in your console in the folder write `npm install got --save` then code!

const got = require('got');
   client.on("message", msg => {
       if (msg.content === "meme"){
            const embed = new Discord.MessageEmbed()
            got('https://www.reddit.com/r/memes/random/.json').then(response => {
                let content = JSON.parse(response.body);                
                let memeImage = content[0].data.children[0].data.url;
                let memeTitle = content[0].data.children[0].data.title;
                let memeUpvotes = content[0].data.children[0].data.ups;
                let memeDownvotes = content[0].data.children[0].data.downs;
            embed.setTitle(`${memeTitle}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes}`)
            msg.channel.send(embed);
        });
 }   
    });
