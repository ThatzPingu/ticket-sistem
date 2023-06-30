const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.addOptions([
						{
							label: 'Supporto',
							emoji: '📁',
							value: 'compra',
						},
						{
							label: 'Segnala BUG',
							emoji: '❓',
							value: 'suporte',
						},
						{
							label: 'Segnala Membro',
							emoji: '🚨',
							value: 'denuncia',
						},
						{
							label: 'Partner',
							emoji: '🤝',
							value: 'bugs',
						},
						{
							label: 'Donazione',
							emoji: '💸',
							value: 'duvidas',
						},

					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Wise Academy - Ticket System', //Nome do seu servidor
                description: '> Do not open a ticket without a valid reason!', //Texto da sua preferência
                color: "2F3136", //Pesquise no navegador uma cor de sua preferência em HEX
				image: {url: 'https://cdn.discordapp.com/attachments/1088078683312504832/1124027530349920256/TICKET_BANNER.png'}, 
				footer: {text: '© Wise Academy'} //Nome da sua preferência
            }],
            components: [row]            
        })
    }
}
