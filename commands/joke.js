<<<<<<< Updated upstream
const { SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("joke")
        .setDescription("Get a random joke!"),
    async execute(interaction) {
        await interaction.deferReply();

        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
            const jokeData = await response.json();

            await interaction.editReply(`😂 **Joke:** ${jokeData.joke}`);
        } catch (error) {
            console.error("Error fetching joke:", error);
            await interaction.editReply("❌ I couldn't find a joke at the moment.");
        }
    }
};
=======
const { SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("joke")
        .setDescription("Get a random joke!"),
    async execute(interaction) {
        await interaction.deferReply();

        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
            const jokeData = await response.json();

            await interaction.editReply(`😂 **Joke:** ${jokeData.joke}`);
        } catch (error) {
            console.error("Error fetching joke:", error);
            await interaction.editReply("❌ I couldn't find a joke at the moment.");
        }
    }
};
>>>>>>> Stashed changes
