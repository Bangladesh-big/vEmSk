module.exports = {
 config: {
	 name: "🌸",
	 version: "1.0",
	 author: "SK-SIDDIK-KHAN",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto",
 },
 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if ((event.body.toLowerCase() == "🌸") || (event.body.toLowerCase() == "🌸🌸") || (event.body.toLowerCase() == "🌸🌸🌸")) {
 return message.reply({
 body: `
যেখানে আল্লাহর নূর নাই-!!🌸\n - সেখানে সে দেখেব কি করে...??👀\n সে সেখানে অন্দকারে চলবে কি করে...`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/56hSPzl.mp4")
 });
 }
 }
}
