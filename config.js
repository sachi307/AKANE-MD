/*
 * Base By Richie 
 * Created On 11/10/2024
 * Contact Me on tg t.me/hmmletts 
*/

const chalk = require("chalk")
const fs = require("fs")
require('dotenv').config(); 

//================= { SETTINGS } =================\\
global.owner = process.env.OWNER_NUMBER || "234"; // owner number 
global.botimg = 'https://files.catbox.moe/l9gpzm.jpg'
global.sudo = process.env.SUDO  || " Akane-Md_1b60ea65c01c2b3b1015a78a7afa7624";
global.ownername = process.env.OWNER_NAME || "Richie";
global.botname = process.env.BOT_NAME || "AKANE"
global.onlypc = process.env.ONLYPC_MSG  || "Sorry buddy the bot won't work directly in group chat to reduce spam use in private chat";
global.onlygc = process.env.ONLYGC_MSG  || "Sorry buddy the bot won't work directly in private chat to reduce spam use in group";
global.session = process.env.SESSION_ID || ""
global.timezone = process.env.TIME_ZONE || "Africa/Lagos";


//======= Don't touch =======\\
global.msg = {
    succes: 'Success',
    owner: 'This feature could be used by owner only',
	admin: 'This feature could be used by group admin only',
	BotAdmin: 'This feature could be used when the bot is an admin only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'processing...',
    linkm: 'Where is the link?',
    ban: 'Sorry you have been banned 🚶from using command contact owner to unban ❌'
    }
 // cpanel Richie
 global.egg = "15"
global.nestid = "5" // nest ID
global.loc = "1"
global.domain = "add_domaim_url"
global.apikey = "add_api_key"
global.capikey = "add_capikey"
global.creatorName = "Richie"

//==========================
    
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
