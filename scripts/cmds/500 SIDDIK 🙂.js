module.exports = {
 config: {
	 name: "🙂",
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
 if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂") || (event.body.toLowerCase() == "🙂🙂🙂")) {
 return message.reply({
 body: `
⎯͢⎯⃝   - নবি (সা:) বলেছেন-!!🌸\n - সেজদায় যতটা আল্লাহর কাছে চলে যায়...!!🙇‍♀️🙇‍♂️\n ~অন্য কোনো সময় পারবে নাএতো কাছে জেতে....!!😔`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/qCPxDyo.mp4")
 });
 }
 }
}
