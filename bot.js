const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // Change the bot's status
    client.user.setPresence({
        activities: [{ name: 'Ready to serve!', type: 'PLAYING' }],
        status: 'online',
    });
});

// Login to Discord with your bot's token
client.login('YOUR_BOT_TOKEN');
