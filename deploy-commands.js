<<<<<<< Updated upstream
require("dotenv").config();
const { REST, Routes } = require("discord.js");
const fs = require("fs");

if (!process.env.DISCORD_TOKEN || !process.env.CLIENT_ID) {
    console.error("❌ Missing required environment variables. Ensure DISCORD_TOKEN and CLIENT_ID are set in your .env file.");
    process.exit(1);
}

// Load commands
const commands = [];
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    try {
        const command = require(`./commands/${file}`);
        if (command.data && command.data.toJSON) {
            commands.push(command.data.toJSON());
        } else {
            console.warn(`⚠️ Skipping '${file}' - missing or invalid command data.`);
        }
    } catch (error) {
        console.error(`❌ Error loading command '${file}':`, error);
    }
}

if (commands.length === 0) {
    console.warn("⚠️ No valid commands found to deploy.");
}

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log("⏳ Fetching all servers the bot is in...");
        const botGuilds = await rest.get(Routes.userGuilds());
        
        console.log("⏳ Deploying commands to all servers...");
        for (const guild of botGuilds) {
            await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, guild.id), { body: commands });
            console.log(`✅ Commands registered in ${guild.name} (ID: ${guild.id})`);
        }

        console.log("🎉 Successfully deployed commands to all servers.");
    } catch (error) {
        console.error("❌ Failed to deploy commands:", error);
    }
=======
require("dotenv").config();
const { REST, Routes } = require("discord.js");
const fs = require("fs");

if (!process.env.DISCORD_TOKEN || !process.env.CLIENT_ID) {
    console.error("❌ Missing required environment variables. Ensure DISCORD_TOKEN and CLIENT_ID are set in your .env file.");
    process.exit(1);
}

// Load commands
const commands = [];
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    try {
        const command = require(`./commands/${file}`);
        if (command.data && command.data.toJSON) {
            commands.push(command.data.toJSON());
        } else {
            console.warn(`⚠️ Skipping '${file}' - missing or invalid command data.`);
        }
    } catch (error) {
        console.error(`❌ Error loading command '${file}':`, error);
    }
}

if (commands.length === 0) {
    console.warn("⚠️ No valid commands found to deploy.");
}

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log("⏳ Fetching all servers the bot is in...");
        const botGuilds = await rest.get(Routes.userGuilds());
        
        console.log("⏳ Deploying commands to all servers...");
        for (const guild of botGuilds) {
            await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, guild.id), { body: commands });
            console.log(`✅ Commands registered in ${guild.name} (ID: ${guild.id})`);
        }

        console.log("🎉 Successfully deployed commands to all servers.");
    } catch (error) {
        console.error("❌ Failed to deploy commands:", error);
    }
>>>>>>> Stashed changes
})();