module.exports = {
 config: {
	 name: "😒",
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
 if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😒😒😒")) {
 return message.reply({
 body: `
⎯͢⎯⃝    🦋🌸__একটি দিন দার ছেলের হাতে আপিনার মেয়ে কে তুলে দেন-!!😌❤️\nকিছু অর্থ সম্পদ এর লোভে আপনার মেয়ের জীবন টা নষ্ট করে দিয়েন নাহ-!!🙂`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/6Rck5rk.mp4")
 });
 }
 }
}
