import { config } from 'dotenv'
import { SlashCommandBuilder, Routes } from 'discord.js'
import { REST } from '@discordjs/rest'

// Initiate ENV Vars
config()

const TOKEN         = process.env.DISCORD_API_TOKEN
const GUILD_ID      = process.env.DISCORD_GUILD_ID
const CLIENT_ID     = process.env.DISCORD_CLIENT_ID

const commands = [
    new SlashCommandBuilder()
        .setName("roll")
        .setDescription("Roll some dice")
        .addIntegerOption(option => {
            return option.setName("numberofdice")
                .setDescription("Number of dice to roll")
                .setRequired(true)
        })
        .addIntegerOption(option => {
            return option.setName("numberoffaces")
                .setDescription("Number of faces the dice should have")
                .setRequired(true)
        })
        .addIntegerOption(option => {
            return option.setName("modifier")
                .setDescription("Modifier the dice should have")
                .setRequired(false)
        })
]
.map(command => command.toJSON())


const rest = new REST({ version: '10' }).setToken(TOKEN)

try {
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands})
} catch(err) {
    console.error(err)
}