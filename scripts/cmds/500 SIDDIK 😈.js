module.exports = {
 config: {
	 name: "😈",
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
 if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "😈😈") || (event.body.toLowerCase() == "😈😈😈")) {
 return message.reply({
 body: `
⎯͢⎯⃝    অকারণে রেগে গেলে তো হেরে গেলে-!!🙂🥹`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Emcg2fL.mp4")
 });
 }
 }
}
