module.exports = {
 config: {
	 name: "💖",
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
 if ((event.body.toLowerCase() == "💖") || (event.body.toLowerCase() == "💖💖") || (event.body.toLowerCase() == "💖💖💖")) {
 return message.reply({
 body: `
⎯͢⎯⃝    রাতে গুমানোর আগে সূরা বাকারার শেষ তিন টি আয়াত  যে বেক্তি পরবে...!!🌸💖\n__যদি আপনি সারা রাত নফল নামাজ পরতেন...!!🖤🌸\n  যে নেকি হতো...!🌸\n __সেই নেকি গুলোর সয়াব আপনার আমল নামায় লিখে দেওয়া হবে...!!🌸✍️`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/sh8DwXO.mp4")
 });
 }
 }
}
