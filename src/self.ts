import { Client, Message } from "discord.js-selfbot-v13";
import ready from './listeners/ready';

const userToken = '';

console.log('Launching Telf ...');

const client = new Client({ });

ready(client);

client.on('messageCreate', (message: Message) => {
    if (message.content.match(/unix:[A-Za-z]+ \d+, \d+/)) {
        const providedDate = new Date(message.content.replace('unix:', ''));
        const timestamp = Math.floor(providedDate.getTime() / 1000);
        const convertedMessage = message.content.replace(/unix:[A-Za-z]+ \d+, \d+/, `<t:${timestamp}:d>`);
        
        message.delete();
        message.channel.send(convertedMessage);
    }
});

client.login(userToken);
