// menu fitur bot
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `
	
┌──────「 *LORD BOT* 」
│
├◪ *NAMA USER* : *${pushname2}*
├◪ *LIMIT* : *${limitt} PERHARI*
├◪ *AKTIF* : ${kyun(uptime)}
├◪ *JAM* : *${jam} WIB*
├◪ *TANGGAL* : *${tanggal}*
├◪ *VERSION* : *1.3.0*
├◪ *USER TERDAFTAR* : *${user.length} User*
│
└─────────────────────


┌──────「 *ABOUT BOT* 」
│
├◪ *${prefix}report lapor bug*
├◪ *${prefix}info*
├◪ *${prefix}donasi*
├◪ *${prefix}owner*
├◪ *${prefix}speed*
├◪ *${prefix}daftar*
├◪ *${prefix}limit*
├◪ *${prefix}totaluser*
├◪ *${prefix}blocklist*
├◪ *${prefix}banlist*
├◪ *${prefix}premiumlist*
├◪ *${prefix}bahasa*
│
├͏͏͏͏͏͏͏͏͏͏͏͏͏͏──────「 *DOWNLOADER* 」
│
├◪ *${prefix}tiktokstalk username*
├◪ *${prefix}igstalk sanglord_*
├◪ *${prefix}instagram link*
├◪ *${prefix}instavid link valid*
├◪ *${prefix}instaimg link valid*
├◪ *${prefix}instastory username*
├◪ *${prefix}ssweb url*
├◪ *${prefix}url2img Url*
├◪ *${prefix}tiktok*
├◪ *${prefix}fototiktok*
├◪ *${prefix}kbbi*
├◪ *${prefix}wait*
├◪ *${prefix}trendtwit*
├◪ *${prefix}google berita terkini*
│
├──────「 *MAKER MENU* 」
│
├◪ *${prefix}quotemaker tx/wtrmk/tema*
├◪ *${prefix}nulis text*
├◪ *${prefix}tp 1 - 162*
├◪ *${prefix}ep 1 - 216*
├◪ *${prefix}tahta [Lord]*
├◪ *${prefix}tolol [nisa]*
├◪ *${prefix}textbyname [lord]*
├◪ *${prefix}herrypoter [lord]*
├◪ *${prefix}greanneon [Lord]*
├◪ *${prefix}metallogo [Lord]*
├◪ *${prefix}coffe [Lord]*
├◪ *${prefix}galaxtext [Lord]*
├◪ *${prefix}pupycut [Lord]*
├◪ *${prefix}galaxstyle [Lord]*
├◪ *${prefix}hologram [Lord]*
├◪ *${prefix}love [Lord]*
├◪ *${prefix}glow [Lord]*
├◪ *${prefix}bpink [Lord]*
├◪ *${prefix}3d [Lord]*
├◪ *${prefix}8bit [epep]*
├◪ *${prefix}tlight [Lord]*
├◪ *${prefix}lighttext [Lord]*
├◪ *${prefix}crismes [Lord]*
├◪ *${prefix}naruto [Lord]*
├◪ *${prefix}goldbutton [Lord]*
├◪ *${prefix}silverbutton [Lord]*
├◪ *${prefix}flame [Lord]*
├◪ *${prefix}leavest [Lord]*
├◪ *${prefix}pubg [Lord/tes]*
├◪ *${prefix}phlogo [Lord/tes]*
├◪ *${prefix}glitch Lord/zaki]*
├◪ *${prefix}retro Lord/tes]*
├◪ *${prefix}tts [id Haii]*
├◪ *${prefix}ttp [x]*
├◪ *${prefix}cpaper [Lord]*
├◪ *${prefix}stiker*
├◪ *${prefix}gifstiker*
├◪ *${prefix}toimg*
├◪ *${prefix}img2url*
├◪ *${prefix}tomp3*
├◪ *${prefix}ocr*
│
├───────「 *GROUP ONLY* 」
│
├◪ *${prefix}antilink On/Off*
├◪ *${prefix}welcome On/Off*
├◪ *${prefix}grup buka/tutup*
├◪ *${prefix}ownergrup*
├◪ *${prefix}setpp*
├◪ *${prefix}infogc*
├◪ *${prefix}modeanime On/Off*
├◪ *${prefix}neonime naruto*
├◪ *${prefix}naruto*
├◪ *${prefix}minato*
├◪ *${prefix}boruto*
├◪ *${prefix}hinata*
├◪ *${prefix}sakura*
├◪ *${prefix}sasuke*
├◪ *${prefix}toukachan*
├◪ *${prefix}rize*
├◪ *${prefix}akira*
├◪ *${prefix}itori*
├◪ *${prefix}kurumi*
├◪ *${prefix}miku*
├◪ *${prefix}anime*
├◪ *${prefix}animecry*
├◪ *${prefix}animekiss*
├◪ *${prefix}add 6283144780782*
├◪ *${prefix}kick @mentioned*
├◪ *${prefix}kicktime @mentioned*
├◪ *${prefix}promote @mentioned*
├◪ *${prefix}demote @mentioned*
├◪ *${prefix}setname*
├◪ *${prefix}setdesc*
├◪ *${prefix}linkgrup*
├◪ *${prefix}tagme*
├◪ *${prefix}hidetag*
├◪ *${prefix}tagall*
├◪ *${prefix}mentionall*
├◪ *${prefix}fitnah @mentioned/Elu Anjing Ya/Bacot*
├◪ *${prefix}listadmin*
│
├───────「 *GROUP & ADMIN* 」
│
├◪ *${prefix}nsfw On/Off*
├◪ *${prefix}nsfwloli*
├◪ *${prefix}nsfwblowjob*
├◪ *${prefix}nsfwneko*
├◪ *${prefix}nsfwtrap*
├◪ *${prefix}hentai*
├◪ *${prefix}simih On/Off*
│
├──────「 *OTHERS* 」
│
├◪ *${prefix}anjing*
├◪ *${prefix}kucing*
├◪ *${prefix}testime*
├◪ *${prefix}hilih*
├◪ *${prefix}apakah*
├◪ *${prefix}kapankah*
├◪ *${prefix}bisakah*
├◪ *${prefix}cantik*
├◪ *${prefix}ganteng*
├◪ *${prefix}rate*
├◪ *${prefix}loli*
├◪ *${prefix}watak*
├◪ *${prefix}hobby*
├◪ *${prefix}infogempa*
├◪ *${prefix}infonomor*
├◪ *${prefix}quotes*
├◪ *${prefix}truth*
├◪ *${prefix}dare*
├◪ *${prefix}katabijak*
├◪ *${prefix}fakta*
├◪ *${prefix}darkjokes*
├◪ *${prefix}bucin*
├◪ *${prefix}pantun*
├◪ *${prefix}katacinta*
├◪ *${prefix}jadwaltvnow*
├◪ *${prefix}hekerbucin*
├◪ *${prefix}katailham*
├◪ *${prefix}jarak Jombang/Surabaya* [x]
├◪ *${prefix}translate en/Apa kabar?*
├◪ *${prefix}pasangan Buaya/Buaya Betina*
├◪ *${prefix}gantengcek Lord*
├◪ *${prefix}cantikcek Elu*
├◪ *${prefix}artinama Lord*
├◪ *${prefix}persengay Anker*
├◪ *${prefix}pbucin Lord*
├◪ *${prefix}bpfont Lord*
├◪ *${prefix}textstyle Lord*
├◪ *${prefix}jadwaltv antv*
├◪ *${prefix}lirik melukis senja*
├◪ *${prefix}chord Melukis senja*
├◪ *${prefix}wiki Adolf Hitler*
├◪ *${prefix}brainly pertanyaan*
├◪ *${prefix}resepmasakan rawon*
├◪ *${prefix}map Jombang*
├◪ *${prefix}film Fast and Farious*
├◪ *${prefix}pinterest gambar kucing*
├◪ *${prefix}infocuaca Jombang*
├◪ *${prefix}jamdunia Jombang*
├◪ *${prefix}mimpi Ular*
├◪ *${prefix}infoalamat jalan Jombang*
├◪ *${prefix}playstore WhatsApp*
│
├──────「 *FUN MENU* 」
│
├◪ *${prefix}readmore*
├◪ *${prefix}puisiimg* [x]
├◪ *${prefix}asupan*
├◪ *${prefix}fml*
├◪ *${prefix}tebakgambar*
├◪ *${prefix}caklontong*
├◪ *${prefix}family100*
├◪ *${prefix}memeindo*
├◪ *${prefix}kalkulator 13*12*
├◪ *${prefix}moddroid lightroom*
├◪ *${prefix}apkpure lightroom*
├◪ *${prefix}searchfilm Doraemon*
├◪ *${prefix}happymod lightroom*
│
├──────「 *NSFW MENU* 」
│
├◪ *${prefix}randomkpop*
├◪ *${prefix}randombts*
├◪ *${prefix}randomexo*
├◪ *${prefix}blackpink*
├◪ *${prefix}imageislamic*
├◪ *${prefix}imagecyberspace*
├◪ *${prefix}imagegame*
├◪ *${prefix}imagemountain*
├◪ *${prefix}cersex* [x]
├◪ *${prefix}randombokep*
├◪ *${prefix}pornhub stepMoms*
├◪ *${prefix}xvideos japan*
├◪ *${prefix}nekopoi oni chichi*
│
├──────「 *ISLAM* 」
│
├◪ *${prefix}jadwalsholat Jombang*
├◪ *${prefix}quran*
├◪ *${prefix}quranlist*
├◪ *${prefix}quransurah 1*
│
├──────「 *FIND ME SIR* 」
│
├◪ *${prefix}becrypt string*
├◪ *${prefix}encode64 string*
├◪ *${prefix}decode64 encrypt*
├◪ *${prefix}encode32 string*
├◪ *${prefix}decode32 encrypt*
├◪ *${prefix}encbinary string*
├◪ *${prefix}decbinary encrypt*
├◪ *${prefix}encoctal string*
├◪ *${prefix}decoctal encrypt*
├◪ *${prefix}hashidentifier Encrypt Hash*
├◪ *${prefix}dorking dork*
├◪ *${prefix}pastebin teks*
├◪ *${prefix}tinyurl link*
├◪ *${prefix}bitly link*
│
├──────「 *AUTO SPAM* 」
│
├◪ *${prefix}spamcall 083xxxxxxxxx*
├◪ *${prefix}spamgmail contoh@gmail.com*
│
├──────「 *SOUND* 」
│
├◪ *${prefix}iri*
├◪ *${prefix}tapi*
├◪ *${prefix}bernyanyi*
├◪ *${prefix}anjay*
│
├─────────「 *OWNER ONLY* 」
│
├◪ *${prefix}bott on/off*
├◪ *${prefix}addprem mentioned*
├◪ *${prefix}removeprem mention*
├◪ *${prefix}setmemlimit*
├◪ *${prefix}setlimit*
├◪ *${prefix}setreply*
├◪ *${prefix}setprefix*
├◪ *${prefix}setnamebot*
├◪ *${prefix}setppbot*
├◪ *${prefix}bc*
├◪ *${prefix}bcgc*
├◪ *${prefix}ban*
├◪ *${prefix}unban*
├◪ *${prefix}block*
├◪ *${prefix}unblock*
├◪ *${prefix}clearall*
├◪ *${prefix}delete*
├◪ *${prefix}clone*
├◪ *${prefix}getses*
├◪ *${prefix}leave*
│
├────────「 *PREMIUM ONLY* 」
│
├◪ *${prefix}play menepi*
├◪ *${prefix}fb link video*
├◪ *${prefix}snack link snack video*
├◪ *${prefix}ytmp3 link yt*
├◪ *${prefix}ytmp4 link yt*
├◪ *${prefix}randomquran*
├◪ *${prefix}joox Monolog Pamungkas*
├◪ *${prefix}smule Link Video Smule*
│
└────────「 *LORD BOT* 」
`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// donasi menu
const donasi = (name) => { 
	return `       
┌──「 *DONASI BOT* 」
│
├◪ *DONASI BISA MELALUI :*
├◪ *THREE/LINK AJA,OVO : ChatOwner*
├◪ *TRAKTEER: trakteer.id/SangLord*
├◪ *SAWERIA : saweria.co/ZakiAhsan*
├◪ *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*
│
└──「 *LORD BOT* 」
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*Maaf ${pushname2} Limit Anda Hari Ini Sudah Habis\n\n Silahkan Kembali Lagi Hari Esok:)\n\n Limit Di Reset Ketik Owner Gabut:v*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount
