/**
 * 第3页
 * 需要实现以下方法:
 *  <ul>
 *      <li>startPlay()</li>
 *      <li>stopPlay()</li>
 *  </ul>
 * 最后执行 init()
 *
 * @class 分页
 * @author dutianzhao on 16/4/23
 * @param page 页面对象
 * @constructor
 */
function PageThree(canvas, stage, exportRoot) {
    pageApp.call(this, canvas, stage, exportRoot);
};

PageThree.prototype = new pageApp();

PageThree.prototype.init = function () {
    /**配置**/
    this.tApp = new H5App();
    this.step = 0;
    this.nextUrl = "p7";
    this.currUrl = "p6";
    this.preUrl = "p5";
    this.vv = null;
    this.lineHight = 170;
    this.maxLineNum = 15;
    $start = document.querySelector('.start')
    $end = document.querySelector(".end");
    $div = $(".scrollInner");
    this.totalScroll = $(".scrollImg").height() - $div.height();
    this.headTool = new HeadTool(canvas, stage, exportRoot, this);
    this.soundId = "4A6C7C51-80B7-47C6-B56F-E53A9DC296DA";
    this.backUrl = "2\\2\\20\\p6\\index.html";
    this.testDug = false;
    this.toClient = this.tApp.toClient();
};

PageThree.prototype.startPlay = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    var isFinsh = this.tApp.getUrl("id");
    this.change();
    those.tApp.bgmLoop("globalBgm");
};

PageThree.prototype.stopPlay = function () {
    var that = this.exportRoot;
    var those = this;
    those.hideAll();
};
PageThree.prototype.hideAll = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (this.exportRoot.recovery) {
        those.tApp.eleControl(this.exportRoot.recovery, { alpha: 0 });
    }
    those.tApp.eleControl(that.puzi, { alpha: 0 });
    those.tApp.eleControl(that.mc_2, { alpha: 0 });
    $div.scrollTop(0);
    $('.scrollBox').hide();

};
PageThree.prototype.change = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    $start.addEventListener('animationend', function () {
        $start.className = 'start';
    }, false)
    $end.addEventListener('animationend', function () {
        $end.className = 'end';
    }, false)
}
//----------------------------------------------------------------------
PageThree.prototype.Num_1 = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    createjs.Sound.play("common_tone");
    if (this.exportRoot.recovery) {
        those.tApp.eleControl(this.exportRoot.recovery, { alpha: 1 });
    }
    those.tApp.eleControl(that.puzi, { alpha: 1 }, 300);
    those.tApp.eleControl(that.mc_2, { alpha: 1 }, 300);
    $('.scrollBox').show();
    $start.className = 'start animated';
    $start.style.display = 'block';
    those.d = 0;
    those.disabled = false;
    those.step = 1;
}
PageThree.prototype.scrollUp = function () {
    var those = this;
    var up = 0;
    if (getComputedStyle($end).display == 'block') {
        $end.style.display = 'none';
    }

    if (Math.abs($div.scrollTop() - 0) > those.lineHight) {
        those.d--;
        up = those.lineHight * those.d;
    }
    else {
        those.d--;
        up = 0;
        $start.style.display = 'block';
        $start.className = 'start animated'
    }
    if (those.d < 0) {
        those.d = 0;
    }
    those.disabled = true;
    $div.animate({
        scrollTop: up
    }, 500, function () {
        those.disabled = false;
    });
}
PageThree.prototype.scrollDown = function () {
    var those = this;
    var down = 0;

    if (getComputedStyle($start).display == 'block') {
        $start.style.display = 'none';
    }

    if (Math.abs($div.scrollTop() - those.totalScroll) < those.lineHight) {
        those.d++;
        $end.style.display = 'block';
        $end.className = 'end animated'
        down = those.totalScroll;
    }

    else {
        those.d++;
        down = those.lineHight * those.d;
    }
    if (those.d > this.maxLineNum) {
        those.d = this.maxLineNum;
    }
    console.log(those.d)
    those.disabled = true;
    $div.animate({
        scrollTop: down
    }, 500, function () {
        those.disabled = false;
    })
}
//-------------------------------------------------------------------
/***********************************功能扩展*******************************************/

/**
 * shang一步
 */
PageThree.prototype.extendPreStep = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (those.vv) {
        those.vv.stop();
    }
    if (those.step == 1) {
        those.hideAll();
        those.step--;
    }
    else {
        those.extendPrePage(true, null, those.preUrl);
    }

};

/**
 * 下一步
 */
PageThree.prototype.extendNextStep = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (those.step == 0) {
        those.Num_1();
    }
    else {
        those.extendNextPage(null, null, those.nextUrl);
    }
};

/**
 * OK / Enter
 */
PageThree.prototype.extendOkOrEnter = function () {
    var those = this;
    var that = this.exportRoot;
};
PageThree.prototype.choice = function (code) {
    var that = this.exportRoot;
    var those = this;
    if (those.disabled) return;
    switch (code) {
        case 1:
            those.scrollUp();
            break;
        case 2:
            those.scrollDown();
            break;
    }
};
PageThree.prototype.repeat = function () {
    var those = this;
    var that = this.exportRoot;
    if (!that.recovery.alpha) {
        return;
    }
    var soundId = those.soundId;
    var backUrl = those.backUrl;
    var json1 = JSON.stringify({ "soundID": soundId, "webUrl": backUrl, "app": "pc" });
    var str1 = those.headTool.showLength(json1);

    those.tApp.ws.send("CMDDRCT996" + str1 + json1);

};
PageThree.prototype.extendAfterEsc = function () {
    var those = this;
    those.tApp.backHome();
};
/**
 * esc 之前执行
 */
PageThree.prototype.extendBeforeEsc = function () {

};

/**
 * 其它事件
 * @param type
 * @param code
 */
PageThree.prototype.extendBtnEvent = function (type, code) {

};

/**
 * 跳转上一页之前执行
 */
PageThree.prototype.extendBeforePrePage = function () {

};

/**
 * 跳转上一页之后执行
 */
PageThree.prototype.extendAfterPrePage = function () {

};

/**
 * 跳转下一页之前执行
 */
PageThree.prototype.extendBeforeNextPage = function () {

};

/**
 * 跳转下一页之后执行
 */
PageThree.prototype.extendAfterNextPage = function () {

};
