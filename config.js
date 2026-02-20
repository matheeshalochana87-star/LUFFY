const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from config.env if it exists
const configPath = path.resolve(__dirname, "config.env");
if (fs.existsSync(configPath)) {
  dotenv.config({ path: configPath });
}

function convertToBool(text, fault = "true") {
  return text?.toLowerCase() === fault.toLowerCase();
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "LMlGSb6S#JriCoUMlyKX23Nxph7U1j3Hmuy1CJLbPO6OJf3q0dcU",   /// <-- your session id hear (Session id recommended) // qr in terminal available 
  MONGODB: process.env.MONGODB || "mongodb://mongo:mwNXNdbVtDktxjiiKMLQwjFcetvdcgAB@shortline.proxy.rlwy.net:51637", // change this if you have monogodb url
  OWNER_NUM: (process.env.OWNER_NUM || "94771393241").split(","), // <-- your number 


OLLAMA_HOST: "https://ollama.com",
OLLAMA_MODEL: "gpt-oss:120b-cloud",
OLLAMA_API_KEY: "",  // <--  your ollama api
AUTO_READ_MESSAGES: false,   // ✅ reads ALL messages (DM + Groups)
AUTH_SYSTEM: false,
AUTO_READ_STATUS: false,   // true = read status
AUTO_LIKE_STATUS: false,   // true = like (heart/react) status
AUTO_REPLY_STATUS: false,   
STATUS_REACT_EMOJI: "👻",  // emoji for status reaction
STATUS_REPLY_TEXT: "🔥 Nice status!",
MODE: "private", // Options: "public" | "private" | "inbox" | "groups"
PREFIX: ".",
AUTO_FAKE_TYPING: true,  // true if you want
FAKE_TYPING_DELAY_MIN: 800,
FAKE_TYPING_DELAY_MAX: 2000,

ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/nadeelachamath-crypto/GHOST-SUPPORT/blob/main/ChatGPT%20Image%20Oct%2031,%202025,%2010_10_49%20PM.png?raw=true"
};
