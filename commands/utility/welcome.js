//by murerCXV
//free copy and paste
//join Discord

client.on("guildMemberAdd", member => {
    const channelId = 'ID' // welcome channel id
  
      const message = `Please welcome <@${member.id}> to the server! Please check out ${member.guild.channels.cache.get(channelId).toString()}`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
  });
