module.exports = {
 config: {
	 name: "🐱",
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
 if ((event.body.toLowerCase() == "🐱") || (event.body.toLowerCase() == "🐱🐱") || (event.body.toLowerCase() == "🐱🐱🐱")) {
 return message.reply({
 body: `
⎯͢⎯⃝    𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐💚\n\n__!!>☁️✨🌺 - বিড়াল এর থেকে সুন্দর ও পবিত্র প্রানি হতে পারে নাহ ..!🖤🌸🔐\n\n___💜✨🏡___🐱`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Hd5MgOs.mp4")
 });
 }
 }
}
