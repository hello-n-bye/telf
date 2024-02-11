import { Client } from "discord.js-selfbot-v13";

export default (client: Client): void => {
    client.on('ready', async () => {
        console.log('Telf is connected to user-client.');
    });
};