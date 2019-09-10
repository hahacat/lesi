/**
 * 所有公用方法集合
 */
class H5App {
    ruler = {
        "do": 62,
        "re": 64,
        "mi": 66,
        "sol": 69,
        "la": 71
    }
    bgmVolume = 0.5;
    constructor(pagethree) {
        this.pagethree = pagethree;
    }

    getUrl(key) {
        // 获取参数
        let url = window.location.search;
        // 正则筛选地址栏
        let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        // 匹配目标参数
        let result = url.substr(1).match(reg);
        //返回参数值
        return result ? decodeURIComponent(result[2]) : null;
    }
    setSessionItem(key, val) {
        let st = JSON.stringify(val);
        sessionStorage.setItem(key, st);
    };
    getSessionItem(key) {
        return JSON.parse(sessionStorage.getItem(key));
    };
    clearSessionItem() {
        sessionStorage.clear();
    };
    removeSessionItem(key) {
        sessionStorage.removeItem(key);
    };

    websocket() {
        let that = this;
        let ws = new WebSocket("ws://127.0.0.1:55560");
        ws.onopen = function () {
            //let relogin_data = JSON.stringify();
            that.ws.send();
        };
        ws.onmessage = function (e) {
            let data = JSON.parse(e.data);
            if (data.eventType == 3) {
                return;
            }

            that.thisPage.getHead(data);
            ws.close();
            that.websocket2();
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
    websocket2(flag) {
        let that = this;
        const str = "1";
        if (flag == "close") {
            that.ws.close();
            return;
        }
        that.ws = new WebSocket("ws://127.0.0.1:55559");
        that.ws.onopen = function () {
            //let relogin_data = JSON.stringify();
            that.ws.send(JSON.stringify({ "state": str }));
        };
        that.ws.onmessage = function (e) {
            let data = JSON.parse(e.data);
            if (data.eventType == 3) {
                // console.log("抬起");
                return;
            }
            that.thisPage.getData(data);
        };
        that.ws.onclose = function (e) {
            console.log("onclose");
            console.log(e);
        };
        that.ws.onerror = function (e) {
            console.log("onerror");
            console.log(e);
        };
    };
    paused(flag) {
        let that = this;
        if (flag) {
            that.ws.send(JSON.stringify({ "state": "0" }));
        } else {
            that.ws.send(JSON.stringify({ "state": "1" }));
        }
    }
    remove(obj) {
        for (let i = 0; i < this.length; i++) {
            let temp = this[i];
            if (!isNaN(obj)) {
                temp = i;
            }
            if (temp == obj) {
                for (let j = i; j < this.length; j++) {
                    this[j] = this[j + 1];
                }
                this.length = this.length - 1;
            }
        }
    }
    playVoice(sound, voice) {
        let instance = createjs.Sound.play(sound);
        instance.on("complete", function () {
            createjs.Sound.play(voice);
        });
    };
    bgmLoop(ss) {
        let _this = this;
        createjs.Sound.play(ss, { loop: -1 }).volume = _this.bgmVolume;
    }
    playVoiceGame(sound, voice) {
        let _this = this;
        let instance = createjs.Sound.play(sound);
        instance.on("complete", function () {
            createjs.Sound.play(voice, { loop: -1 }).volume = _this.bgmVolume;
        });
    };
    backHome() {
        window.location.href = "../one/index.html";
    }

    ESCtext() {
        let str1 = "4";
        console.log(MyIp)
        ws = new WebSocket("ws://127.0.0.1:55560");
        ws.onopen = function () {
            ws.send(JSON.stringify({ "state": str1 }));
            ws.close();
            // toCloseWS();
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
            let str2 = "4";
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


    HashMap() {
        //定义长度  
        let length = 0;
        //创建一个对象  
        let obj = new Object();

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
            for (let key in obj) {
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
            let _values = new Array();
            for (let key in obj) {
                _values.push(obj[key]);
            }
            return _values;
        };
        //获取所有key  
        this.keySet = function () {
            let _keys = new Array();
            for (let key in obj) {
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

    toClient() {
        let those = this;
        let wsPorts;
        // let json1=JSON.stringify({"soundID":soundID,"webUrl":backUrl,"app":"pc"});
        // let str1=those.headTool.showLength(json1);
        // those.ws.send("CMDOPEN***"+str1+json1);
        // console.log("soundID:"+soundID+"backUrl:"+backUrl);
        those.ws = new ReconnectingWebSocket("ws://" + MyIp);
        those.ws.onopen = function () {
            //ws.send(JSON.stringify({"soundID":soundID,"webUrl":backUrl,"app":"pc"}));
            //that.ws.close();
        };
        those.ws.onmessage = function (e) {
            console.log(e);
        };
        those.ws.onclose = function (e) {
            console.log("onclose");
            console.log(e);
        };
        those.ws.onerror = function (e) {
            console.log("onerror");
            console.log(e);
        };

    };

    animationEnd(_this, star) {
        let durationes = star ? 0 : _this.timeline.duration - 1;
        _this.gotoAndStop(durationes);
    };

    eleControl(cc, opc, times) {
        let _time = times ? times : 0;
        createjs.Tween.get(cc, { override: true }).to(opc, _time);
    }

    foxCc(cc, su, bgm) {
        let _this = this;
        cc.gotoAndStop(0);
        cc.play();
        let sud = createjs.Sound.play(su);
        sud.on("complete", function () {
            cc.gotoAndStop(0);
            if (bgm) {
                createjs.Sound.play(bgm, { loop: -1 }).volume = _this.bgmVolume;
            }
        });

        return sud;
    }

    stopMedia(cc, categroy, anima) {
        let _this = this;
        if (categroy) {
            if (categroy == "note") {
                createjs.Sound.stop();
                return;
            }
        }
        if (cc) {
            cc.stop();
            if (anima) {
                anima.gotoAndStop(0);
            }
        }
    };

    loadXMLDoc(name) {
        let xmlhttp;
        let those = this.pagethree;
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
                let data = JSON.parse(xmlhttp.responseText),
                    midiData = [];
                // $.each(data,function(i,d){
                //     if (d.keydown) {
                //         midiData.push(d);
                //     }
                // })
                those.midiData = data;
                // those.parseData(JSON.parse(those.midiData));
            }
        }
        xmlhttp.open("GET", "../lib/midi/" + name + ".txt", true);
        xmlhttp.send();
    }
    remove(val) {
        let index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };
    //数组去重
    uniq(array) {
        let temp = []; //一个新的临时数组
        for (let i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    }

}
