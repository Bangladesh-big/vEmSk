module.exports = {
 config: {
	 name: "💜",
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
 if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💜💜") || (event.body.toLowerCase() == "💜💜💜")) {
 return message.reply({
 body: `
⎯͢⎯⃝    যদি কেও ফরজ নামাজ ছেরে দেয়-!!🥲🥺\n____সে আল্লাহ তায়ালার  জিম্মা থেকে মুক্ত হয়ে জায়-!!🙂💔`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/zWQla8C.mp4")
 });
 }
 }
}
