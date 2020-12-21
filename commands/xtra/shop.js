client.on("message", message => {
 
        const embed = new Discord.MessageEmbed()
        .setTitle("Object shop!")
        .setColor("RED")
        .addField("Remember that this shop has a price!", "xtra thing")
        .addFields(
            {name: "🕰️ Clock", value: "Price: 500 \n Value number: 25º \n State: New", inline: true},
            {name: "🧲 Magnet", value: "Price: 1000 \n Value number: 15º \n State: Ok, doesn´t grab more than 10Kg", inline: true},
            {name: "🧻 Toilet paper", value: "Price: 20 \n Value number. 100º \n State: Full of popo", inline: true}
        ).setTimestamp()
            message.reply(embed)
})
