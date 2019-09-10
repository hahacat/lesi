let oBody = document.body;
let newEle = document.createElement("div");
newEle.className = 'loading'
oBody.appendChild(newEle);
let loading = document.getElementsByClassName("loading");
//判断是否是体验课00//设置体验课背景颜色
let loadImg = "../../../../com_Sound/images/pc/loading.webp";
let loadColor = "#d5fbf4";
let book = window.location.href.substring(25, 26);
switch (book) {
    case "2":
        loadColor = "#a9dda3";
        break;
    case "3":
        loadColor = "#bba9e7";
        break;
};
let str = '<div class="box" style="background:' + loadColor + '!important;"><div class="item"><div class="item-inner"><img src="' + loadImg + '" alt="" /></div></div></div>';
loading[0].innerHTML = str;
let width = screen.width / 1920;

document.documentElement.style.WebkitTransform = "scale(" + width + ")";
document.documentElement.style.WebkitTransformOrigin = "0 0";
let MyIp;
if (getSessionItem("webIp")) {
    OpenSocket(getSessionItem("webIp").data);
    MyIp = getSessionItem("webIp").data;
    // console.log("Myip2   "+MyIp);
}
else {
    loadXMLDoc();
}
function setSessionItem(key, val) {
    let str = JSON.stringify(val);
    sessionStorage.setItem(key, str);
};
function getSessionItem(key) {
    return JSON.parse(sessionStorage.getItem(key));
};
function OpenSocket(MyIp) {
    let those = this;
    if (window.location.href.substring(29, 32) == "one" || window.location.href.substring(30, 33) == "one") {
        those.ws1 = new ReconnectingWebSocket("ws://" + MyIp);
        // console.log("第一页");
        those.ws1.onopen = function () {
            if (window.location.href.substring(29, 32) == "one" || window.location.href.substring(30, 33) == "one") {
                // console.log("PageApp");
                those.ws1.send("CMDCBGN***00000" + "CMDCLOS***00000" + "CMDDKON***00000");
                // those.ws1.close();
            }
        };
        those.ws1.onmessage = function (e) {
            console.log("收到消息111");
            // let data = JSON.parse(e.data);
            // console.log(JSON.parse(data.substring(15,data.length)));
        };
        those.ws1.onclose = function (e) {
            console.log("onclose");
            console.log(e);
        };
        those.ws1.onerror = function (e) {
            console.log("onerror");
            console.log(e);
        };
    }
}
function loadXMLDoc() {
    let xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            setSessionItem("webIp", { "data": xmlhttp.responseText });
            // console.log(those.getSessionItem("webIp").data);
            MyIp = getSessionItem("webIp").data;
            OpenSocket(MyIp);
            // console.log("Myip1   "+MyIp);
        }
    }
    xmlhttp.open("GET", "../../../../com_Sound/ip.txt", true);
    xmlhttp.send();
}
