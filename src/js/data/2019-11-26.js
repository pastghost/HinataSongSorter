dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  // {
  //   name: "Filter by Series Entry",
  //   key: "series",
  //   tooltip: "Check this to restrict to certain series.",
  //   checked: false,
  //   // sub: [
  //   //   { name: "Books and CDs", key: "book" },
  //   //   { name: "The Highly Responsive to Prayers", tooltip: "01 - Reiiden", key: "HRtP" },
  //   //   { name: "The Story of Eastern Wonderland", tooltip: "02 - Fuumaroku", key: "SoEW" },
  //   //   { name: "Phantasmagoria of Dim.Dream", tooltip: "03 - Yumejikuu", key: "PoDD" },
  //   //   { name: "Lotus Land Story", tooltip: "04 - Gensoukyou", key: "LLS" },
  //   //   { name: "Mystic Square", tooltip: "05 - Kaikidan", key: "MS" },
  //   //   { name: "Embodiment of Scarlet Devil", tooltip: "06 - Koumakan", key: "EoSD" },
  //   //   { name: "Perfect Cherry Blossom", tooltip: "07 - Youyoumu", key: "PCB" },
  //   //   { name: "Immaterial and Missing Power", tooltip: "07.5 - Suimusou", key: "IaMP" },
  //   //   { name: "Imperishable Night", tooltip: "08 - Eiyashou", key: "IN" },
  //   //   { name: "Phantasmagoria of Flower View", tooltip: "09 - Kaeidzuka", key: "PoFV" },
  //   //   { name: "Shoot the Bullet", tooltip: "09.5 - Bunkachou", key: "StB" },
  //   //   { name: "Mountain of Faith", tooltip: "10 - Fuujinroku", key: "MoF" },
  //   //   { name: "Scarlet Weather Rhapsody", tooltip: "10.5 - Hisouten", key: "SWR" },
  //   //   { name: "Subterranean Animism", tooltip: "11 - Chireiden", key: "SA" },
  //   //   { name: "Undefined Fantastic Object", tooltip: "12 - Seirensen", key: "UFO" },
  //   //   { name: "Touhou Hisoutensoku", tooltip: "12.3 - Hisoutensoku", key: "soku" },
  //   //   { name: "Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
  //   //   { name: "Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
  //   //   { name: "Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
  //   //   { name: "Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
  //   //   { name: "Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
  //   //   { name: "Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
  //   //   { name: "Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
  //   //   { name: "Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" },
  //   //   { name: "Antinomy of Common Flowers", tooltip: "15.5 - Hyouibana", key: "AoCF" },
  //   //   { name: "Hidden Star in Four Seasons", tooltip: "16 - Tenkuushou", key: "HSiFS" },
  //   //   { name: "Violet Detector", tooltip: "16.5 - Hifuu Nightmare Diary", key: "VD" },
  //   //   { name: "Wily Beast and Weakest Creature", tooltip: "17 - Kikeijuu", key: "WBaWC" }
  //   // ]
  // },
  // {
  //   name: "Filter by Stage Enemy Appearances",
  //   key: "stage",
  //   tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
  //   checked: false,
  //   sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
  //   ]
  // },
  // {
  //   name: "Remove PC-98 Duplicates",
  //   key: "pc98",
  //   tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  // },
  // {
  //   name: "Remove Non-Girls",
  //   key: "notgirl",
  //   tooltip: "Check this to remove all non-female characters."
  // },
  // {
  //   name: "Remove Nameless Characters",
  //   key: "nameless",
  //   tooltip: "Check this to remove all characters without canonical names.",
  //   checked: false
  // }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Hakurei Reimu",
    img: "c5DqpgX.png",
    // opts: {
    //   series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS", "VD", "WBaWC" ],
    //   stage: ["st4"]
    // }
  },
  {
    name: "Kirisame Marisa",
    img: "tJnkSzK.png",
    // opts: {
    //   series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "GFW", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS", "VD", "WBaWC" ],
    //   stage: ["st4", "ex"]
    // }
  },
  {
    name: "Rumia",
    img: "0YT7QlS.png",
    // opts: {
    //   series: ["book", "EoSD", "StB", "HM"],
    //   stage: ["st1"]
    // }
  },
  {
    name: "Daiyousei",
    img: "NWlZud3.png",
    // opts: {
    //   series: ["book", "EoSD"],
    //   stage: ["st2", "ex"],
    //   nameless: true
    // }
  },
  {
    name: "Cirno",
    img: "qdveFSy.png",
    // opts: {
    //   series: [ "book", "EoSD", "PCB", "PoFV", "StB", "soku", "GFW", "HM", "DDC", "ISC", "HSiFS" ],
    //   stage: ["st2"]
    // }
  }
];
