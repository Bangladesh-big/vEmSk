module.exports = {
 config: {
	 name: "😅",
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
 if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅") || (event.body.toLowerCase() == "😅😅😅")) {
 return message.reply({
 body: `
⎯͢⎯⃝    আপনি কষ্টে আছেন আপনার খারাপ সময় যাচ্ছে-!!🙂\n আপনি আল্লাহর সাথে কথা বলেন আল্লাহ কাছে নামাজ পরে দোয়া চান দুই হাত পেতে-!!😌❤️🤲\n-তিনি সব কিছু ঠিক করে দিবেন\n ইনশাল্লাহ-!!✨🌺`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/LZLbFAz.mp4")
 });
 }
 }
}
