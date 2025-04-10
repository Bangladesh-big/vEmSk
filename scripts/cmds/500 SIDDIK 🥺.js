module.exports = {
 config: {
	 name: "🥺",
	 version: "1.0",
	 author: "SK-SIDDIK-KHAN",
	 countDown: 5,
	 role: 0,
	 shortDescription: "",
	 longDescription: "",
	 category: "auto",
 },
 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if ((event.body.toLowerCase() == "Tui bol") || (event.body.toLowerCase() == "tui bol") || (event.body.toLowerCase() == "Tumi Bolo")) {
 return message.reply({
 body: `
⎯͢⎯⃝   আমি বলবো কেমন করে আমার শরিলের লোম দারিয়ে যায়-!!🥺`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/bbigbCj.mp4")
 });
 }
 }
}
