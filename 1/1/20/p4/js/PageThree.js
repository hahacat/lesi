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
    this.nextUrl = "p5";
    this.currUrl = "p4";
    this.preUrl = "p3";
    this.currentPosition = 406;
    this.firstPosition = 406;
    this.hangDis = 174;//行高
    this.endPosition = 406 - 15 * this.hangDis;
    this.puzi = this.exportRoot.mc_0.puzi.mc_1;
    this.tiaoqiu = this.exportRoot.mc_0.ball;
    this.countNum = 0;
    this.isfirstPlay = true;
    this.num = 0;
    this.canPlay = false;
    this.soundName = "song"
    this.video = document.getElementById("video");
    this.testDug = false;
};

PageThree.prototype.startPlay = function () {
    var that = this.exportRoot.mc_2;
    those = this;
};

PageThree.prototype.stopPlay = function () {
    var that = this.exportRoot;
    var those = this;
    $("#video").hide();
    createjs.Sound.stop();
    createjs.Tween.get(that.mc_0.mc_2, { override: true }).to({ alpha: 0 });
    createjs.Tween.get(that.mc_0.mc_2.mc_1, { override: true }).to({ alpha: 1 });
    createjs.Tween.get(that.mc_0.mc_2.mc_2, { override: true }).to({ alpha: 0 });
    createjs.Tween.get(that.mc_0.mc_3, { override: true }).to({ alpha: 0 });
    // createjs.Tween.get(that.mc_0.mc_4,{override:true}).to({alpha:0});
    console.log(that.mc_0.puzi.mc_1.x + "---" + that.mc_0.puzi.mc_1.y);
    console.log(that.mc_0.ball.x + "---" + that.mc_0.ball.y);
    this.currentPosition = this.firstPosition;
    // createjs.Tween.get(that.game,{override:true}).to({alpha:0});
    createjs.Tween.get(that.vid, { override: true }).to({ alpha: 0 });
    createjs.Tween.get(that.mc_0.ball, { override: true }).to({ alpha: 0 });
    createjs.Tween.get(that.mc_0.puzi, { override: true }).to({ alpha: 0 });
};

PageThree.prototype.Num1 = function () {
    var that = this.exportRoot.mc_0;
    var sevenThis = this;
    createjs.Sound.stop();
    createjs.Sound.play("common_tone");
    beatEnd();
    createjs.Tween.get(that.mc_2, { override: true }).to({ alpha: 1 });
    createjs.Tween.get(that.puzi, { override: true }).to({ alpha: 1 }, 300);
    createjs.Tween.get(that.mc_2.mc_1, { override: true }).to({ alpha: 1 });
    createjs.Tween.get(that.mc_2.mc_2, { override: true }).to({ alpha: 0 });
    createjs.Tween.get(that.puzi.mc_1, { override: true }).to({ y: those.firstPosition }).to({ alpha: 1 });//谱子
    createjs.Tween.get(that.ball, { override: true }).to({ alpha: 1, x: intX, y: intY });
    createjs.Tween.get(that.mc_3, { override: true }).to({ alpha: 1 });
    createjs.Tween.get(this.exportRoot.vid, { override: true }).to({ alpha: 1 });
    those.step = 1;
}
PageThree.prototype.played = function () {
    var that = this.exportRoot;
    var sevenThis = this;
    //判断点击次数的单双
    if (sevenThis.boolean) {
        sevenThis.boolean = false;
    } else {
        sevenThis.boolean = true;
    }
    //如果是第一次播放 则给music一个信号 开始播放 否则不播放
    if (sevenThis.isfirstPlay) {
        sevenThis.isfirstPlay = false;
        createjs.Tween.get(sevenThis.puzi, { override: true }).to({ y: sevenThis.firstPosition });//谱子
        sevenThis.currentPosition = sevenThis.firstPosition;
        toMusic(canvas, stage, that, sevenThis.boolean, sevenThis, sevenThis.soundName);
        positionMap();
        // createjs.Tween.get(that.mc_2.mc_4,{override:true}).to({alpha:0});
    }
    sevenThis.num++;
    if (sevenThis.num % 2 == 0) {
        createjs.Tween.get(that.mc_0.mc_2.mc_1, { override: true }).to({ alpha: 1 });
        createjs.Tween.get(that.mc_0.mc_2.mc_2, { override: true }).to({ alpha: 0 });
        //谱子开始往上动
        if (markNum == 1) {
            if (tween) tween.setPaused(true);
            tweenBall.setPaused(true);
            instance.paused = true;
        }
        if (markNum != 1) {
            tweenBall.setPaused(true);
            instance.paused = true;
        }
    }
    else if (sevenThis.num % 2 != 0) {
        createjs.Tween.get(that.mc_0.mc_2.mc_2, { override: true }).to({ alpha: 1 });
        createjs.Tween.get(that.mc_0.mc_2.mc_1, { override: true }).to({ alpha: 0 });
        if (markNum == 1) {
            if (tween) tween.setPaused(false);
            tweenBall.setPaused(false);
            instance.paused = false;
        }
        if (markNum != 1) {
            tweenBall.setPaused(false);
            instance.paused = false;
        };
    };
};
//-------------------------------------------------------------------
/***********************************功能扩展*******************************************/
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
PageThree.prototype.repeat = function () {
    var those = this;
    var that = this.exportRoot.mc_2;

};
PageThree.prototype.function_M = function () {
    var those = this;
    var that = this.exportRoot;
    if (that.vid.alpha != 1) return;
    if ($("#video").is(":hidden")) {
        those.isVideoPlay = true;
        //播放video
        $("#video").show();
        // document.getElementById("video").play();
        those.num = 0;
        createjs.Sound.stop();
        beatEnd();
    }
    else {
        those.isVideoPlay = false;
        $("#video").hide();
        document.getElementById("video").pause();
        document.getElementById("video").load();
    };
};

/**
 * 下一步
 */
PageThree.prototype.extendNextStep = function () {
    var that = this.exportRoot;
    var those = this;
    if (those.isVideoPlay) {
        return;
    }
    if (those.step == 0) {
        those.Num1();
    }
    else {
        those.extendNextPage(null, null, those.nextUrl);
    }
};

/**
 * shang一步
 */
PageThree.prototype.extendPreStep = function () {
    var that = this.exportRoot;
    var those = this;
    if (those.isVideoPlay) {
        return;
    }
    if (those.step == 1) {
        those.step--;
        those.stopPlay();
    }
    else {
        those.extendPrePage(true, null, those.preUrl);
    }
};

/**
 * OK / Enter
 */
PageThree.prototype.extendOkOrEnter = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (!that.mc_2.alpha) return;
    if (those.isVideoPlay) {
        if (those.video.paused) {
            those.video.play();
        } else {
            those.video.pause();
        }
        return;
    }
    if (those.step == 1) {
        those.played();
    }
};

/**
 * esc 之前执行
 */
PageThree.prototype.extendBeforeEsc = function () {
    var those = this;
    // those.stopPlay();
};

/**
 * esc 之后执行
 */
PageThree.prototype.extendAfterEsc = function () {
    var those = this;
    if (!$("#video").is(":hidden")) {
        $("#video").hide();
        document.getElementById("video").pause();
        document.getElementById("video").load();
        those.num = 0;
        // those.step = 0;
        those.isVideoPlay = false;
    }
    else {
        those.tApp.backHome();
    }
};

/**
 * 其它事件
 * @param type
 * @param code
 */
PageThree.prototype.extendBtnEvent = function (type, code) {

};

PageThree.prototype.choice = function (code) {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (this.num !== 0) {
        return;
    }
    if (those.step == 1 && code == 1 && those.currentPosition < those.firstPosition) {
        var newPosition = those.currentPosition + those.hangDis;
        those.currentPosition = newPosition;
        if (those.currentPosition == those.firstPosition) {
            createjs.Tween.get(those.puzi, { override: true }).to({ y: newPosition }, 1000).call(function () {
                createjs.Tween.get(those.tiaoqiu, { override: true }).to({ alpha: 1 });
            });
        } else {
            createjs.Tween.get(those.puzi, { override: true }).to({ y: newPosition }, 1000);//谱子
        }
    }
    else if (those.step == 1 && code == 2 && those.currentPosition > those.endPosition) {
        createjs.Tween.get(those.tiaoqiu, { override: true }).to({ alpha: 0 });//测量谱子坐标的时候 注释掉本行 改掉上边step为1
        var newPosition = those.currentPosition - those.hangDis;
        those.currentPosition = newPosition;
        createjs.Tween.get(those.puzi, { override: true }).to({ y: newPosition }, 1000);//谱子
    }
};