module.exports = {
 config: {
	 name: "🤔",
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
 if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔") || (event.body.toLowerCase() == "🤔🤔🤔")) {
 return message.reply({
 body: `
⎯͢⎯⃝   __যুবক বয়সে আপনি আল্লার পথে চলুন-!!✨🌺\n__নামাজ আদায় করেন-!!❤️🌸\n-এর থেকে বেশি আপনার থেকে আল্লাহ কি চান-!!🤷‍♂️`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/QwG99o4.mp4")
 });
 }
 }
}
