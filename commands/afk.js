const { Client, EmbedBuilder } = require("discord.js");
const db = require("croxydb")
module.exports = {
  name: "afk",
  description: "💙 AFK Olursun!",
  type: 1,
  options: [
    {
        name:"sebep",
        description:"Afk Olma Sebebini Gir!",
        type:3,
        required:true
    },
  ],

  run: async(client, interaction) => {
    const sebep = interaction.options.getString('sebep')
    db.set(`afk_${interaction.user.id}`, sebep);
	db.set(`afkDate_${interaction.user.id}`, { date: Date.now() } )
    interaction.reply("<:verified:1149104274584899735> | Başarıyla Afk Oldun!")

    

  }

};
