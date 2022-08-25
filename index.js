import { config }                       from 'dotenv'
import { Client, GatewayIntentBits }    from 'discord.js'
import { rollDice, sumDice }                     from './diceLogic.js'

// Initiate ENV Vars
config()

const client = new Client({ intents: [GatewayIntentBits.Guilds]})

const TOKEN = process.env.DISCORD_API_TOKEN

client.once('ready', () => {
	console.log('Ready!')
})

client.on('interactionCreate', async interaction => {
    if(!interaction.isChatInputCommand()) return

    const { commandName } = interaction

    if(commandName === 'roll') {
        try {
            const numberOfDice = interaction.options._hoistedOptions[0].value
            const numberOfDiceSides = interaction.options._hoistedOptions[1].value
    
            if(numberOfDice <= 0) {
                return await interaction.reply('Number of dice must be 1 or higher')
            }
    
            if(numberOfDiceSides <= 0) {
                return await interaction.reply('Number of sides must be 1 or higher')
            }
    
            const rolls = await rollDice(numberOfDice, numberOfDiceSides)
    
            const sum = await sumDice(rolls)

            const rollsString = await rolls.join(", ")
    
            await interaction.reply(`${numberOfDice} rolls of a ${numberOfDiceSides} sided die: \n${rollsString}\nTotal: ${sum}`)
        
            
        } catch(err) {
            console.log(err)

            await interaction.reply('Looks like you fucked something up, message Ryan so he can fix it.')
        }
    }
})

client.login(TOKEN)