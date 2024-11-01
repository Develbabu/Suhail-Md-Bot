const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_15_19_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgODcsXG4gICAgICAgIDQzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICA3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDExMixcbiAgICAgICAgNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMixcbiAgICAgICAgMTgzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDczLFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MixcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPdWk4SWdxWVZhZVlXcjQ1OTRaNGd1T2phUDA4cmhlZXhta2I1L2dUZnZnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzAwMzQ3MDkzOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzhCMjhGNDY3OTU5QUE4M0U2MDczRjM3NDAxRThFQzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNDc0MzU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZPa01EZkZGU0NDYmRzbkZMeW16blFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTQxN2Q1YTItNDI2YS00YjlkLWE2NWMtMzM1NWIzYjFmMzI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDU2LFxuICAgICAgMjU0LFxuICAgICAgMTU3LFxuICAgICAgMTMzLFxuICAgICAgMzgsXG4gICAgICA4NyxcbiAgICAgIDQ2LFxuICAgICAgMSxcbiAgICAgIDE1OSxcbiAgICAgIDIyMSxcbiAgICAgIDIxNSxcbiAgICAgIDIxOSxcbiAgICAgIDIyOCxcbiAgICAgIDIzMyxcbiAgICAgIDE5OCxcbiAgICAgIDQ4LFxuICAgICAgOTIsXG4gICAgICA3MCxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAyOSxcbiAgICAgIDE3MCxcbiAgICAgIDE5NCxcbiAgICAgIDE5NixcbiAgICAgIDIsXG4gICAgICAxNzcsXG4gICAgICAyNixcbiAgICAgIDIwOSxcbiAgICAgIDEwNCxcbiAgICAgIDEsXG4gICAgICA5LFxuICAgICAgMTIzLFxuICAgICAgMjUwLFxuICAgICAgMjE5LFxuICAgICAgMjUzLFxuICAgICAgMTAxLFxuICAgICAgMzAsXG4gICAgICA3LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1aWkczTTVTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTcwMDM0NzA5Mzk6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNDU2NTM1MjQ0ODY5OjE1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcImRvbGFpYmFidTcxXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0xZN2M4Q0VQSGlrN2tHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQbnVRWkJTbnVLL3FVVXE5WDYrMTZ0d25GdUp0Slg3UWZwOTRzSGFTWmtZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllJVlAzUW9va1NRMHNPYmNybDl6L29rakJGN2ViUGszZnVoRzVRazJXaW9FYWZpbzF6M0ZYajYzS1RlaElXSFBKOGlISUIxUDFsQmdJUm5TZEdlaER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJ5WnpXMFJuTDM0TzZBbWZ4SlN4dWs2Q3BLdnFVUEEvZ1Z6MldLUjRONlE4VFJNdkVKcUFtZk0vcEN1V3ZvZ0wrbmdNQmplSi9MRGxJNU5sSTcrQUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzAwMzQ3MDkzOToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDQ3NDM1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUloc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWhzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY2MzVFkvV3FWYTNTS2s5dm1WOWVCMG4wbU9QNUhEQng4b1VXc3UrQUpqaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDQzNDMxMzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDQ0MDI3NzA1NVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
