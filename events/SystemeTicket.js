const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
					.addOptions([
						{
							label: '🗑️ Close',
							value: 'excluir',
						}
					])
                );
                
                
        let catégorie = "1123960209686134834" // Categoria onde será criado o ticket
        let roleStaff = interaction.guild.roles.cache.get('1123960127721046129') // Cargo que respondera o ticket

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "excluir") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '❌ Hai già un ticket aperto', ephemeral: true})
            if (interaction.values[0] == "compra") {
                interaction.guild.channels.create(`📁・supporto ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const partenariat = new MessageEmbed()
                    .setTitle('Supporto | Wise Academy') // Nome do seu servidor
                    .setDescription('Spiega il tuo problema.')
                    .setFooter('')
                    c.send({embeds: [partenariat], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Ticket aperto con successo. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "suporte") {
                interaction.guild.channels.create(`❓・reportbug ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },                    
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const plainte = new MessageEmbed()
                    .setTitle('Report BUG | Wise Academy') // Nome do seu servidor 
                    .setDescription('Spiega il bug che hai trovato. ')
                    .setFooter('')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Ticket aperto con successo. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "duvidas") {
                interaction.guild.channels.create(`💸・donazione ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Donazione | Wise Academy') // Nome do seu servidor
                    .setDescription('Aspetta uno staff e spiega cosa vorresti acquistare.')
                    .setFooter('')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Ticket aperto con successo. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "bugs") {
                interaction.guild.channels.create(`🤝・partner ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Partner | Wise Academy') // Nome do seu servidor
                    .setDescription('Manda l\'invito del tuo server e aspetta che uno staffer ti risponda.')
                    .setFooter('')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Ticket aperto con successo. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "denuncia") {
                interaction.guild.channels.create(`🚨・segnalamembro ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Segnala Membro | Wise Academy') // Nome do seu servidor
                    .setDescription('Spiega chi vorresti segnalare e per cosa.')
                    .setFooter('')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Ticket aperto con successo. <#${c.id}>`, ephemeral: true})
                })
                           
                
            
            }
        }
    }
}