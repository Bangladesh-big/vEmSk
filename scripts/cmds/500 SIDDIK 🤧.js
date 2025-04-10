module.exports = {
 config: {
	 name: "🤧",
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
 if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤧🤧") || (event.body.toLowerCase() == "🤧🤧🤧")) {
 return message.reply({
 body: `
⎯͢⎯⃝   খালি কলস বাজে বেশি-!!🤧\n যার ভিতর টা পরিপূর্ণ সে এতো টা বাজে না-!!😊🌻`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/GpGJPCi.mp4")
 });
 }
 }
}
