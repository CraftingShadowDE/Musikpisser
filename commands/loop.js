const { QueueRepeatMode } = require('discord-player');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    description: "Turns the music loop mode on or off.",
    name: 'loop',
    options: [ {
		name: 'mode',
		type: 'STRING',
		description: 'Loop type',
		required: true,
		choices: [
		{name: "Info", value: 'info'}, //INFO
		{name: "š“ Off", value: 'off'}, //OFF
		{name: "š Track", value: 'track'}, //TRACK
		{name: "š Queue", value: 'queue'}, //QUEUE
		{name: "ā¶ Autoplay", value: 'autoplay'} //AUTOPLAY
		],
		required: true
	} ],

    run: async (client, interaction) => {
		const loopMode = interaction.options.getString('mode') 

		if (loopMode==='off') { //LOOP OFF ------------------------------------------------------------------------------------------------------------------------------------------------------------
        if (!interaction.member.voice.channel) return interaction.reply({ content: `You are not connected to an audio channel. ā`, ephemeral: true});
        if (interaction.guild.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.reply({ content: `You are not on the same audio channel as me. ā`, ephemeral: true});
      
        const queue = client.player.getQueue(interaction.guild.id);
if (!queue || !queue.playing) return interaction.reply({ content: `No music currently playing! ā`, ephemeral: true }).catch(e => { })  
        const success = queue.setRepeatMode(QueueRepeatMode.OFF);
		const options = ['š“ (Loop mode: Off)','š (Loop mode: Track)','š (Loop mode: Queue)','ā¶ (Loop mode: Autoplay)']
        const mode = options[0];
		
        const embed = new MessageEmbed();

        embed.setColor('BLUE');
        embed.setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 4096 }));
        embed.setTitle('Loop Mode')

        embed.setDescription(`**Loop mode:** ${mode}\n**Changed by:** ${interaction.member.user}\n \n**Explanations:**\nš“: No loop mode is active.\nš: The current track will be repeated.\nš: The entire queue will be repeated.\nā¶: After the queue is finished, the bot will start playing some random music.`);

        embed.setTimestamp();
        embed.setFooter({ text: 'Music Bot - by CraftingShadowDE', iconURL: interaction.user.displayAvatarURL({ dynamic: true }) });
		
        interaction.reply(success ? { embeds: [embed] } : { content: 'Could not update loop mode! ā' }).catch(e => { })
		} else if (loopMode==='track') { //LOOP TRACK -------------------------------------------------------------------------------------------------------------------------------------------------
        if (!interaction.member.voice.channel) return interaction.reply({ content: `You are not connected to an audio channel. ā`, ephemeral: true});
        if (interaction.guild.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.reply({ content: `You are not on the same audio channel as me. ā`, ephemeral: true});
      
        const queue = client.player.getQueue(interaction.guild.id);
if (!queue || !queue.playing) return interaction.reply({ content: `No music currently playing! ā`, ephemeral: true }).catch(e => { })  
        const success = queue.setRepeatMode(QueueRepeatMode.TRACK);
		const options = ['š“ (Loop mode: Off)','š (Loop mode: Track)','š (Loop mode: Queue)','ā¶ (Loop mode: Autoplay)']
        const mode = options[1];
		
        const embed = new MessageEmbed();

        embed.setColor('BLUE');
        embed.setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 4096 }));
        embed.setTitle('Loop Mode')

        embed.setDescription(`**Loop mode:** ${mode}\n**Changed by:** ${interaction.member.user}\n \n**Explanations:**\nš“: No loop mode is active.\nš: The current track will be repeated.\nš: The entire queue will be repeated.\nā¶: After the queue is finished, the bot will start playing some random music.`);

        embed.setTimestamp();
        embed.setFooter({ text: 'Music Bot - by CraftingShadowDE', iconURL: interaction.user.displayAvatarURL({ dynamic: true }) });
		
        interaction.reply(success ? { embeds: [embed] } : { content: 'Could not update loop mode! ā' }).catch(e => { })
		} else if (loopMode==='queue') { //LOOP QUEUE -------------------------------------------------------------------------------------------------------------------------------------------------
        if (!interaction.member.voice.channel) return interaction.reply({ content: `You are not connected to an audio channel. ā`, ephemeral: true});
        if (interaction.guild.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.reply({ content: `You are not on the same audio channel as me. ā`, ephemeral: true});
      
        const queue = client.player.getQueue(interaction.guild.id);
if (!queue || !queue.playing) return interaction.reply({ content: `No music currently playing! ā`, ephemeral: true }).catch(e => { })  
        const success = queue.setRepeatMode(QueueRepeatMode.QUEUE);
		const options = ['š“ (Loop mode: Off)','š (Loop mode: Track)','š (Loop mode: Queue)','ā¶ (Loop mode: Autoplay)']
        const mode = options[2];
		
        const embed = new MessageEmbed();

        embed.setColor('BLUE');
        embed.setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 4096 }));
        embed.setTitle('Loop Mode')

        embed.setDescription(`**Loop mode:** ${mode}\n**Changed by:** ${interaction.member.user}\n \n**Explanations:**\nš“: No loop mode is active.\nš: The current track will be repeated.\nš: The entire queue will be repeated.\nā¶: After the queue is finished, the bot will start playing some random music.`);

        embed.setTimestamp();
        embed.setFooter({ text: 'Music Bot - by CraftingShadowDE', iconURL: interaction.user.displayAvatarURL({ dynamic: true }) });
		
        interaction.reply(success ? { embeds: [embed] } : { content: 'Could not update loop mode! ā' }).catch(e => { })
		} else if (loopMode==='autoplay') { //LOOP AUTOPLAY -------------------------------------------------------------------------------------------------------------------------------------------
        if (!interaction.member.voice.channel) return interaction.reply({ content: `You are not connected to an audio channel. ā`, ephemeral: true});
        if (interaction.guild.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.reply({ content: `You are not on the same audio channel as me. ā`, ephemeral: true});
      
      const queue = client.player.getQueue(interaction.guild.id);
if (!queue || !queue.playing) return interaction.reply({ content: `No music currently playing! ā`, ephemeral: true }).catch(e => { })  
        const success = queue.setRepeatMode(QueueRepeatMode.AUTOPLAY);
		const options = ['š“ (Loop mode: Off)','š (Loop mode: Track)','š (Loop mode: Queue)','ā¶ (Loop mode: Autoplay)']
        const mode = options[3];
		
        const embed = new MessageEmbed();

        embed.setColor('BLUE');
        embed.setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 4096 }));
        embed.setTitle('Loop Mode')

        embed.setDescription(`**Loop mode:** ${mode}\n**Changed by:** ${interaction.member.user}\n \n**Explanations:**\nš“: No loop mode is active.\nš: The current track will be repeated.\nš: The entire queue will be repeated.\nā¶: After the queue is finished, the bot will start playing some random music.`);

        embed.setTimestamp();
        embed.setFooter({ text: 'Music Bot - by CraftingShadowDE', iconURL: interaction.user.displayAvatarURL({ dynamic: true }) });
		
        interaction.reply(success ? { embeds: [embed] } : { content: 'Could not update loop mode! ā' }).catch(e => { })
		} else if (loopMode==='info') { //LOOP INFO ---------------------------------------------------------------------------------------------------------------------------------------------------
        const queue = client.player.getQueue(interaction.guild.id);
const noqueue = (!queue || !queue.playing)
		  const options = ['š“ (Loop mode: Off)','š (Loop mode: Track)','š (Loop mode: Queue)','ā¶ (Loop mode: Autoplay)']
        const mode = noqueue ? 'ā _(No music currently playing!)_' : options[queue.repeatMode];
		
        const embed = new MessageEmbed();

        embed.setColor('BLUE');
        embed.setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 4096 }));
        embed.setTitle('Loop Mode')

        embed.setDescription(`**Loop mode:** ${mode}\n**Requested by:** ${interaction.member.user}\n \n**Explanations:**\nš“: No loop mode is active.\nš: The current track will be repeated.\nš: The entire queue will be repeated.\nā¶: After the queue is finished, the bot will start playing some random music.`);

        embed.setTimestamp();
        embed.setFooter({ text: 'Music Bot - by CraftingShadowDE', iconURL: interaction.user.displayAvatarURL({ dynamic: true }) });
		
        interaction.reply({ embeds: [embed] }).catch(e => { })
		} //ENDE --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	},
};