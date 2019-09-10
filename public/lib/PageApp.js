// class PageApp {
//     constructor (page, app) {
//         this.page = page;
//         this.app = app;
//         this.step = 0;
//     }
// }



function PageApp(page, app) {

    this.page = page;
    this.app = app;
    this.step = 0;
    // this.websocket1();
};

//websocket
PageApp.prototype.websocket1 = function (flag) {
    var those = this;
    console.log("Myip2   " + MyIp);
    if (those.getSessionItem("webIp")) {
        those.OpenSocket(those.getSessionItem("webIp").data);
        MyIp = those.getSessionItem("webIp").data;

    }
    else {
        // console.log(2);
        $.ajax({
            url: "../../../../com_Sound/ip.txt",
            type: "GET",
            data: "",
            dataType: "text",
            success: function (msg) {
                those.setSessionItem("webIp", { "data": msg });
                // console.log(those.getSessionItem("webIp").data);
                those.OpenSocket(those.getSessionItem("webIp").data);
                MyIp = those.getSessionItem("webIp").data;
                console.log("Myip1   " + MyIp);
            }

        });
    }


}

PageApp.prototype.OpenSocket = function (MyIp) {
    var those = this;
    if (window.location.href.substring(29, 32) == "one" || window.location.href.substring(30, 33) == "one") {
        those.ws1 = new ReconnectingWebSocket("ws://" + MyIp);
        console.log("第一页");
        those.ws1.onopen = function () {

            if (window.location.href.substring(29, 32) == "one" || window.location.href.substring(30, 33) == "one") {
                // console.log("PageApp");
                those.ws1.send("CMDCBGN***00000" + "CMDCLOS***00000");
                // those.ws1.close();
            }
        };
        those.ws1.onmessage = function (e) {

            console.log("收到消息111");
            // var data = JSON.parse(e.data);
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

PageApp.prototype.init = function () {

};

PageApp.prototype.startPlay = function () {

};

PageApp.prototype.stopPlay = function () {

};
Array.prototype.remove = function (obj) {
    for (var i = 0; i < this.length; i++) {
        var temp = this[i];
        if (!isNaN(obj)) {
            temp = i;
        }
        if (temp == obj) {
            for (var j = i; j < this.length; j++) {
                this[j] = this[j + 1];
            }
            this.length = this.length - 1;
        }
    }
}
/***********************************功能扩展*******************************************/
PageApp.prototype.get_url = function () {
    var src = window.location.href;
    var I = src.substr(src.indexOf("?id=") + 4).length;
    var T = src.indexOf("?id=");
    //alert(src); 
    if (0 >= T) return "";
    if (I == src.length) return -1;
    var url = src.substr(src.indexOf("?id=") + 4);
    //alert(url); 
    return url;
    //也就是分析src字符串!!
};

PageApp.prototype.playVoice = function (sound, voice) {
    var instance = createjs.Sound.play(sound);
    instance.on("complete", function () {
        createjs.Sound.play(voice);
    })
};

PageApp.prototype.playVoiceGame = function (sound, voice) {
    var instance = createjs.Sound.play(sound);
    instance.on("complete", function () {
        createjs.Sound.play(voice, { loop: -1 });
    })
};
PageApp.prototype.backHome = function () {
    window.location.href = "../one/index.html";
}
PageApp.prototype.showLength = function (str) {
    var zero = "0";
    var newStr = str;
    var num = str.length;//10
    for (var i = 0; i < 5; i++) {
        if (num.toString().length != 5) {
            newStr = zero + num;
            num = newStr;
        } else {
            return newStr;
        }
    }
};
// esc
PageApp.prototype.ESCtext = function () {
    var those = this;
    var str1 = "4";
    ws = new WebSocket("ws://" + MyIp);
    ws.onopen = function () {
        console.log(MyIp);
        var json1 = JSON.stringify({ "app": "browser" });
        var str1 = those.showLength(json1);
        ws.send("CMDEXIT996" + str1 + json1);
        ws.send("CMDCOVR***00000");
        // ws.close();
    };
    ws.onmessage = function (e) {
        console.log(e);
    };
    ws.onclose = function (e) {
        console.log("onclose");
        console.log(e);
    };
    ws.onerror = function (e) {
        console.log("onerror");
        console.log(e);
    };
    function toCloseWS() {
        var str2 = "4";
        ws = new WebSocket("ws://127.0.0.1:55561");
        ws.onopen = function () {
            ws.send(JSON.stringify({ "state": str2 }));

        };
        ws.onmessage = function (e) {
            console.log(e);
        };
        ws.onclose = function (e) {
            console.log("onclose");
            console.log(e);
        };
        ws.onerror = function (e) {
            console.log("onerror");
            console.log(e);
        };
    }
}
// map
PageApp.prototype.HashMap = function () {
    //定义长度  
    var length = 0;
    //创建一个对象  
    var obj = new Object();

    /** 
    * 判断Map是否为空 
    */
    this.isEmpty = function () {
        return length == 0;
    };

    /** 
    * 判断对象中是否包含给定Key 
    */
    this.containsKey = function (key) {
        return (key in obj);
    };
    /** 
    * 判断对象中是否包含给定的Value 
    */
    this.containsValue = function (value) {
        for (var key in obj) {
            if (obj[key] == value) {
                return true;
            }
        }
        return false;
    };
    /** 
    *向map中添加数据 
    */
    this.put = function (key, value) {
        if (!this.containsKey(key)) {
            length++;
        }
        obj[key] = value;
    };
    //根据给定的Key获得Value
    this.get = function (key) {
        return this.containsKey(key) ? obj[key] : null;
    };
    //根据给定的Key删除一个值   
    this.remove = function (key) {
        if (this.containsKey(key) && (delete obj[key])) {
            length--;
        }
    };
    //获得Map中的所有Value
    this.values = function () {
        var _values = new Array();
        for (var key in obj) {
            _values.push(obj[key]);
        }
        return _values;
    };
    //获取所有key  
    this.keySet = function () {
        var _keys = new Array();
        for (var key in obj) {
            _keys.push(key);
        }
        return _keys;
    };
    //获得Map的长度 
    this.size = function () {
        return length;
    };
    //清空map 
    this.clear = function () {
        length = 0;
        obj = new Object();
    };
}

