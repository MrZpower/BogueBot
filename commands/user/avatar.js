const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let user_avatar = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let sv_icon = args.join(" ");

	if (!user_avatar) {
		if (sv_icon === 'server') {
			return message.channel.send(new Discord.RichEmbed()
				.setTitle(`Ícone do servidor ${message.guild.name}`)
				.setImage(message.guild.iconURL({
					format: "gif"
				}))
				.setColor("#00FF00"));
		}

		return message.channel.send(new Discord.RichEmbed()
			.setTitle(`Avatar de **${message.author.username}**`)
			.setImage(message.author.displayAvatarURL({
				format: "gif"
			}))
			.setColor("#00FF00"));
	}

	return message.channel.send(new Discord.RichEmbed()
		.setTitle(`Avatar de **${user_avatar.user.username}**`)
		.setImage(user_avatar.user.displayAvatarURL({
			format: "gif"
		}))
		.setColor("#00FF00"));
}

module.exports.help = {
	name: "avatar",
	descr: 'Mostra o avatar de um usuário.',
	arg: ['membro']
}