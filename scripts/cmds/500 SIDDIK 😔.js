module.exports = {
 config: {
	 name: "😔",
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
 if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔") || (event.body.toLowerCase() == "😔😔😔")) {
 return message.reply({
 body: `
⎯͢⎯⃝   - আল্লাহ বলেছেন...!!✨🌺\n - টেনশন করোনা কষ্ট পেও না...!!😔🥀\n - তুমার রব তুমাকে ছেরে দেন'নি....!!😊🌼`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/ociGBB3.mp4")
 });
 }
 }
}
