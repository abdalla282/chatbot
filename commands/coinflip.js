<<<<<<< Updated upstream
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("coinflip")
        .setDescription("Flips a coin"),
    async execute(interaction) {
        const result = Math.random() < 0.5 ? "Heads 🪙" : "Tails 🪙";
        await interaction.reply(result);
    }
};
=======
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("coinflip")
        .setDescription("Flips a coin"),
    async execute(interaction) {
        const result = Math.random() < 0.5 ? "Heads 🪙" : "Tails 🪙";
        await interaction.reply(result);
    }
};
>>>>>>> Stashed changes
