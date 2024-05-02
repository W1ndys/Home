// 准备包含所有可能背景图片路径的数组
var bgImages = [
    "images/bg/bg1.png",
    "images/bg/bg2.png",
    "images/bg/bg3.png",
    "images/bg/bg4.png",
    "images/bg/bg5.png",
    "images/bg/bg6.png",
    "images/bg/bg7.png",
    "images/bg/bg8.png",
    "images/bg/bg9.png",
    "images/bg/bg10.png",
    "images/bg/bg11.png",
    "images/bg/bg12.png",
    "images/bg/bg13.png",
    "images/bg/bg14.png",
    "images/bg/bg15.png",
    "images/bg/bg16.png",
    "images/bg/bg17.png",
    "images/bg/bg18.png",
    "images/bg/bg19.png",
    "images/bg/bg20.png",
    "images/bg/bg21.png",
    "images/bg/bg22.png",
    "images/bg/bg23.png",
    "images/bg/bg24.png"
];

// 获取随机索引
var randomIndex = Math.floor(Math.random() * bgImages.length);

// 设置 body 的背景图片
document.body.style.backgroundImage = "url('" + bgImages[randomIndex] + "')";
