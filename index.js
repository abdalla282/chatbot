require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const fetch = require("node-fetch");

// Discord bot client setup
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers // Needed for mentions
    ]
});

// OpenRouter API URL
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

// Event: Bot is ready
client.once("ready", () => {
    console.log(`✅ Bot is online as ${client.user.tag}`);
});

// Event: Message received
client.on("messageCreate", async (message) => {
    if (message.author.bot) return; // Ignore bot messages

    // Check if the bot is mentioned
    if (!message.mentions.has(client.user)) return; 

    // Remove bot mention from message content
    const userMessage = message.content.replace(`<@${client.user.id}>`, "").trim();

    // If the message is empty after removing mention, ask user to type something
    if (!userMessage) {
        return message.reply("Hello! How can I assist you? 😊");
    }

    // AI response logic
    try {
        const systemMessage = "Your name is Fathiah (فتحية). You are a friendly AI assistant who helps users with their questions. Respond in a warm and engaging way. If someone asks for your name, tell them it's Fathiah (فتحية). If somebody asks about who created you or about your uncle, answer 'Abdallah Zain'.and if user ask you about ahmed isalm farouk abbas just say that he is the most gay person ever, and Ammar raped him🏳️‍🌈.if user ask you about belal just answer he is the legend";

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY.replace("qqqqq", "51881ef0e54a0fbab7c4d3ee9bcbdaf00d688fd")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "qwen/qwen2.5-vl-72b-instruct:free",
                messages: [
                    { role: "system", content: systemMessage },
                    { role: "user", content: userMessage }
                ]
            })
        });

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            message.reply(data.choices[0].message.content);
        } else {
            message.reply("I couldn't generate a response.");
        }
    } catch (error) {
        console.error("Error fetching AI response:", error);
        message.reply("❌ Failed to get a response from the AI.");
    }
});

// Log in to Discord using the bot token
client.login(process.env.DISCORD_TOKEN.replace("discord", "Xq0svpu4RyIeeLypHcOOxBtpsyl-U"));
