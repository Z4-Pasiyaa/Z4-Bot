require('dotenv').config();
const { Client , IntentsBitField, Integration, EmbedBuilder, ActivityType, Options } = require('discord.js');
const keep_alive = require('./keep_alive')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


client.on('ready' , (c) => {
    console.log('The Bot is Ready.');
});

let status = [
    {
      name: "Z4 Army Discord",
      type: ActivityType.Watching,
    },
    {
      name: "illustrator",
      type: ActivityType.Playing,
    },
    {
      name: "Visual Studio Code",
      type: ActivityType.Playing,
    },
    {
      name: "Photoshop",
      type: ActivityType.Playing,
    },
  ];

setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);

client.on('ready' , (c) => {
    console.log(`${c.user.username} is Online.✅`);
});

client.login(process.env.TOKEN);