const { GoatWrapper } = require("fca-liane-utils");
module.exports = {
  config: {
    name: "linkfb",
    aliases: ["link"],
    version: "1.0",
    author: "SK-SIDDIK-KHAN",
    countDown: 5,
    role: 0,
    category: "utility",
    guide: {
      vi: "{pn} ",
      en: "{pn} "
    }
  },
  onStart: async function({ api, event, args }) {
    const { messageReply, senderID, threadID, messageID, type, mentions } = event;
    let uid;
    if (type == "message_reply") {
      uid = messageReply.senderID;
    } else if (args.join().indexOf("@") !== -1) {
      uid = Object.keys(mentions)[0];
    } else {
      uid = senderID;
    }
    let data = await api.getUserInfo(uid);
    let { profileUrl } = data[uid];
    return api.sendMessage(`${profileUrl}`, threadID, messageID);
  }
}
const wrapper = new GoatWrapper(module.exports); wrapper.applyNoPrefix({ allowPrefix: true });
