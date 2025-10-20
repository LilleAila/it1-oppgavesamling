import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

import { aiCall } from "./ai.js";

const TOKEN = process.env.DISCORD_TOKEN;
// console.log(TOKEN);
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

function readyCall(ready) {
    if(ready) {
        console.log(`bot ${ready.user.tag} er aktiv.`);
    }
}

async function messageFn(message) {
    if(message.author.bot) {
        return;
    }

    if(message.content) {
        message.channel.send(await aiCall(message.content));
    }
}

client.on("ready", readyCall);
client.on("messageCreate", messageFn);

client.login(TOKEN);