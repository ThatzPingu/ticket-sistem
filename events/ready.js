module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {

        console.log(`Bot Online`)   




        var compteurStatus = 1
        setInterval(async () => {
            status =  [`Wise Academy`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "STREAMING",
                    url: "https://discord.gg/76SD9aj3Ty"
                }],
                  status: "streaming"})
        }, 5000);
    }
}
