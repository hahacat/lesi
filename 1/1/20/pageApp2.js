/**
 * 当前页面的公用方法
 */
class pageApp {
    constructor(canvas, stage, exportRoot) {
        this.canvas = canvas;
        this.stage = stage;
        this.exportRoot = exportRoot;
        this.pages = null;
        this.isMenuShow = false;
        this.ws1;
        this.menuList = {
            "基本功练习": "p2",
            "流行曲目": "p3",
            "视唱": "p4",
            "段落练习": "p5",
            "曲谱练习": "p6",
            "课堂回顾": "p7"
        }
        // this.init = this.init.bind(this)
        // this.bindKeyboardOrRemoteControl = this.bindKeyboardOrRemoteControl.bind(this)
    }
    
    init () {
        // console.log(this)
        this.bindKeyboardOrRemoteControl();
    }
    websocket1(flag) {
        var those = this;
        those.headTool = new HeadTool(canvas, stage, exportRoot, this.pages);
        those.ws1 = new ReconnectingWebSocket("ws://" + MyIp);
        those.ws1.onopen = function () {
            those.ws1.send("CMDCLOS***00000" + "CMDDKON***00000");
        };
        those.ws1.onmessage = function (e) {
            console.log("收到消息111");
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
    getPage(name) {
        var those = this;
        switch (name) {
            case 3:
                this.pages = new PageThree(canvas, stage, this.exportRoot);
                break;
        }
    }

    bindKeyboardOrRemoteControl () {
        var that = this;
        var those = this;
        //键盘支持
        that.unMove = false;
        $(document).keyup(function (event) {
            if ($(".loading").length != 0) {
                return;
            }
            if (!that.isMenuShow) {
                if (event.keyCode == 33 || event.keyCode == 34) {
                    if (that.pages.headTool) {
                        that.pages.headTool.clearClassExeTimer();
                    }
                    //分页相关
                    if (event.keyCode == 33) {
                        event.preventDefault();
                        that.extendPrePage(null, 1, that.pages.preUrl, that.pages.PregameStr);
                    } else if (event.keyCode == 34) {
                        event.preventDefault();
                        that.extendNextPage(null, 1, that.pages.nextUrl, that.pages.NextgameStr);//,that.pages.NextgameStr
                    };
                } else if (event.keyCode == 37 || event.keyCode == 39) {
                    //上一步/下一步相关
                    if (event.keyCode == 37) {
                        that.extendPreStep();
                    } else if (event.keyCode == 39) {
                        that.extendNextStep();
                    };
                } else if (event.keyCode == 13) {
                    // OK/Enter相关
                    that.extendOkOrEnter();
                } else if (event.keyCode == 27) {
                    //ESC相关
                    that.extendEsc();
                } else if (event.keyCode == 49 || event.keyCode == 50 || event.keyCode == 51 || event.keyCode == 52 || event.keyCode == 53 || event.keyCode == 54) {
                    that.choice(event.keyCode);
                }
                else if (event.keyCode == 86) {
                    // console.log("fa");
                    if (those.ws1) {
                        // console.log("pageApp里的");
                        those.ws1.send("CMDCHVO99600000");
                    }
                    else if (those.pages.tApp.ws) {
                        // console.log("tapp里的");
                        those.pages.tApp.ws.send("CMDCHVO99600000");
                    }
                    else if (those.pages.ws) {
                        // console.log("pageThree里的");
                        those.pages.ws.send("CMDCHVO99600000");
                    }
                    else {
                        those.ws2 = new ReconnectingWebSocket("ws://" + MyIp);
                        those.ws2.onopen = function () {
                            // console.log("新启的");
                            those.ws2.send("CMDCHVO99600000");
    
                        };
                    }
                }
                else if (event.keyCode == 77) {
                    that.key_M();
                }
                else if (event.keyCode == 82) {
                    //ESC相关
                    that.repeat();
                } else {
                    // that.extendBtnEvent(AppEventType.type.keyboard, event.keyCode);
                };
            }
            else {
                if (event.keyCode == 27) {
                    console.log("---ESC");
                    that.createMenu();
                }
                //上一步
                else if (event.keyCode == 33) {
                    createjs.Sound.play("common_tone");
                    if (that.unMove) {
                        return;
                    }
                    if ($(".active").prev().length == 0) {
                        return;
                    };
                    $(".active").removeClass("active").prev().addClass("active");
                    if ($("#menu ul").scrollTop() != 0) {
                        var scrolltop = 126.66666412353516;
                        $("#menu ul").animate({
                            scrollTop: $("#menu ul").scrollTop() - scrolltop
                        }, 300);
                        that.unMove = true;
                        setTimeout(function () {
                            that.unMove = false;
                            if ($("#menu ul").scrollTop() - 0 < 10) {
                                $(".list-btn").css("overflow-y", "hidden");
                                $("#menu ul").scrollTop(0);
                                return;
                            }
                        }, 400);
                    } else {
                        $(".list-btn").css("overflow-y", "hidden");
                    }
                }
                //下一步
                else if (event.keyCode == 34) {
                    createjs.Sound.play("common_tone");
                    if (that.unMove) {
                        return;
                    }
                    if ($(".active").next().length == 0) {
                        return;
                    }
                    $(".active").removeClass("active").next().addClass("active");
                    if (($(".active").index() + 1) > 8) {
                        $(".list-btn").css("overflow-y", "scroll");
                        var scrolltop = 126.66666412353516;
                        $("#menu ul").animate({
                            scrollTop: $("#menu ul").scrollTop() + scrolltop
                        }, 300);
                        that.unMove = true;
                        setTimeout(function () {
                            that.unMove = false;
                            if ($("#menu ul")[0].scrollHeight - $("#menu ul").height() - $("#menu ul").scrollTop() < 10) {
                                $("#menu ul").scrollTop($("#menu ul")[0].scrollHeight - $("#menu ul").height());
                                return;
                            }
                        }, 400);
                    }
                }
                //下一步
                else if (event.keyCode == 13) {
                    // if(window.location.href.substring(30,32) == "05"){
                    those.websocket1();
                    createjs.Sound.play("common_tone");
                    // }
                    setTimeout(function () {
                        window.location.href = "../" + $(".active").attr("data-page") + "/index.html";
                    }, 500);
                }
            }
            if (event.keyCode == 72) {
                that.createMenu();
            }
    
        });
    };


    extendPrePage (flag, obj, url, gameStr) {
        var PrePageBtn;
        var those = this;
        var that = this;
        if (url == 1) {
            return;
        }
        those.websocket1();
        createjs.Sound.stop();
        var instence = createjs.Sound.play("common_game_lastone");
        instence.on("complete", function () {
            if (flag) {
                window.location.href = "../" + url + "/index.html?id=yes";
            } else {
                window.location.href = "../" + url + "/index.html";
            }
        });
    };

    extendNextPage (flag, obj, url, gameStr) {
        var NextPageBtn;
        var those = this;
        var that = this;
        if (url == 1) {
            return;
        }
        // console.log("==========================");
        those.websocket1();
        createjs.Sound.stop();
        var instence = createjs.Sound.play("common_game_nextone");
        instence.on("complete", function () {
            window.location.href = "../" + url + "/index.html";
        });
    };

    extendPreStep () {
        var that = this;
        that.pages.extendPreStep();
    };

    extendNextStep () {
        var that = this;
        that.pages.extendNextStep();
    };

    extendOkOrEnter () {
        var that = this;
        that.pages.extendOkOrEnter();
    };

    repeat () {
        var that = this;
        that.pages.repeat();
    };

    createMenu () {
        var that = this;
        if ($('.box').is(":visible")) {
            return;
        }
        if (!that.isMenuShow) {
            that.isMenuShow = true;
        }
        else {
            that.isMenuShow = false;
        }
        if (document.getElementById("menu")) {
            // alert("meun 动画")
            if ($("#menu").hasClass("rotateInDownLeft")) {
                // document.getElementById("menu").style.display="none";
                $("#menu").removeClass("rotateInDownLeft");
                $("#menu").addClass("rotateOutDownRight");
                $(".mask").hide();
                document.getElementById("menuBox").style.display = "none";
            }
            else if ($("#menu").hasClass("rotateOutDownRight")) {
                // document.getElementById("menu").style.display="block";
                $("#menu").removeClass("rotateOutDownRight");
                $("#menu").addClass("rotateInDownLeft");
                $(".mask").show();
                document.getElementById("menuBox").style.display = "block";
                if ($(".active").index() + 1 > 8) {
                    var position = $(".active").index() + 1 - 8;
                    var scrolltop = 126.66666412353516;
                    $("#menu ul").scrollTop(scrolltop * position);
                    if ($("#menu ul")[0].scrollHeight - $("#menu ul").height() - $("#menu ul").scrollTop() < 10) {
                        $("#menu ul").scrollTop($("#menu ul")[0].scrollHeight - $("#menu ul").height());
                    }
                    $(".list-btn").css("overflow-y", "scroll");
                }
            }
        }
        else {
            // alert("创建MENU")
            var oBody = document.getElementsByTagName("body")[0];
            var newDiv = document.createElement("div");
            newDiv.id = "menuBox";
            oBody.appendChild(newDiv);
            var menu = document.createElement("div");
            menu.id = 'menu';
    
            var mask = document.createElement("div");
            mask.className = "mask";
            var oLi = "";
            for (var ic in that.menuList) {
                oLi += '<li data-page="' + that.menuList[ic] + '"><span>' + ic + '</span></li>'
            }
            var str = '<ul class="list-btn">'
                + oLi +
                '</ul>';
            document.getElementById("menuBox").appendChild(menu);
            document.getElementById("menu").innerHTML = str;
    
            oBody.appendChild(mask);
            menu.style.display = "block";
            mask.style.display = "block";
            document.getElementById("menuBox").style.display = "block";
            menu.className = "rotateInDownLeft";
            var address = that.pages.currUrl;
            if (address) {
                $.each($(".list-btn li"), function (i, dex) {
                    if (address == $(dex).attr("data-page")) {
                        $(dex).addClass("active");
                        return false;
                    }
                });
                if ($(".active").index() + 1 > 8) {
                    var position = $(".active").index() + 1 - 8;
                    var scrolltop = 126.66666412353516;
                    $("#menu ul").scrollTop(scrolltop * position);
                    if ($("#menu ul")[0].scrollHeight - $("#menu ul").height() - $("#menu ul").scrollTop() < 10) {
                        $("#menu ul").scrollTop($("#menu ul")[0].scrollHeight - $("#menu ul").height());
                    }
                    $(".list-btn").css("overflow-y", "scroll");
                }
            }
        }
    };

    extendEsc () {
        var that = this;
        that.pages.extendBeforeEsc();
    
        //esc具体逻辑
    
        that.pages.extendAfterEsc();
    };

    extendBtnEvent (type, code) {
        var that = this;
        that.pages.extendBtnEvent(type, code);
    };

    choice (keyCode) {
        var that = this;
        that.pages.choice(keyCode - 48);
        // victory
        if (keyCode == 53) {
            if (this.exportRoot.mc_0.victory) {
                createjs.Sound.play("right");
                this.exportRoot.mc_0.victory.play();
            }
        }
        else if (keyCode == 54) {
            if (this.exportRoot.mc_0.failure) {
                createjs.Sound.play("wrong");
                this.exportRoot.mc_0.failure.play();
            }
        }
    };

    key_M () {
        var that = this;
        if (that.pages.function_M) {
            that.pages.function_M();
        } else {
            that.pages.key_M();
        };
    };
}
