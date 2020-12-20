//by murerCXV
//Join Discord


client.on("message", (msg) => {
  let args = msg.content.substring().split(" ");
  switch (args[0]) {
    case "!ban":
      const { member, mentions } = msg;
      const reason = args.slice(2).join(" ");

      const mention = `<@${member.id}>`;

      if (member.hasPermission("BAN_MEMBERS")) {
        const user = mentions.users.first();
        if (user) {
          const target = msg.guild.members.cache.get(usuario.id);
          target.ban();
          msg.channel.send(`**${usuario.username}** Has been banned. Reason: ${reason}`);
        } else {
          msg.channel.send(`${mention} Specify someone to ban!`);
        }
      } else {
        msg.channel.send(`${mention} No **perms**!`);
      }
  }
});
