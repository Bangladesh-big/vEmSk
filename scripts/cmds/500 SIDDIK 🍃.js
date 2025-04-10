module.exports = {
 config: {
	 name: "🍃",
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
 if ((event.body.toLowerCase() == "🍃") || (event.body.toLowerCase() == "🍃🍃") || (event.body.toLowerCase() == "🍃🍃🍃")) {
 return message.reply({
 body: `
সাইকোলজিক্যাল প্রশ্ন!!\n\nআপনার জীবনী নিয়ে উপন্যাস লেখা হলে; সেই উপন্যাসের নাম কি দিতেন..?🍂🍃`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/uqCf60h.mp4")
 });
 }
 }
}
