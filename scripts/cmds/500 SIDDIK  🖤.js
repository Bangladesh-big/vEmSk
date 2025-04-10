module.exports = {
 config: {
	 name: "🖤",
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
 if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🖤🖤") || (event.body.toLowerCase() == "🖤🖤🖤")) {
 return message.reply({
 body: `
⎯͢⎯⃝    যে আল্লাহ...!!\n - রাতের পর সকাল দিতে পারে...!!\n- ওই আল্লাহ...!!\n- আপনাকে কষ্টের পর শুখ দিতে পারবে না...`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/ex9529f.mp4")
 });
 }
 }
}
