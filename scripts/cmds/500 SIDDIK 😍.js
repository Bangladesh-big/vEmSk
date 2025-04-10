module.exports = {
 config: {
	 name: "😍",
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
 if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍😍😍")) {
 return message.reply({
 body: `
︵🦋💛🌻 𝐋𝐞𝐭 𝐰𝐡𝐚𝐭 𝐡𝐚𝐩𝐩𝐞𝐧𝐬 𝐛𝐞_✦🙂\n\n_𝐀𝐥𝐥𝐚𝐡 𝐡𝐚𝐬 𝐭𝐡𝐨𝐮𝐠𝐡𝐭 𝐦𝐮𝐜𝐡 𝐦𝐨𝐫𝐞 𝐭𝐡𝐚𝐧 𝐲𝐨𝐮 𝐭𝐡𝐢𝐧𝐤._!!🌺\n\n︵যা হচ্ছে হতে দিন-༎۵\n\n_আল্লাহ্ আপনার ভাবনার চেয়েও অনেক বেশি কিছু ভেবে রেখেছেন!🌸🌻🤲🕋`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/uAhcwez.mp4")
 });
 }
 }
}
