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
// function PageThree(canvas, stage, exportRoot) {
//     pageApp.call(this, canvas, stage, exportRoot);
// };

class PageThree extends pageApp {
    constructor (...args) {
        super(...args)
        this.tApp = new H5App();
        this.step = 0;
        this.nextUrl = "p3";
        this.currUrl = "p2";
        this.preUrl = "one";
        this.currentPosition = 485;
        this.firstPosition = 485;
        this.hangDis = 304;
        this.endPosition = 485 - 1 * this.hangDis;
        this.puzi = this.exportRoot.mc_0.puzi.mc_1;
        this.tiaoqiu = this.exportRoot.mc_0.ball;
        this.isfirstPlay = true;
        this.num = 0;
        this.soundName = "2-2";
        this.vv = null;
        this.speed = (60000 / 80) / 2;//谱子的默认速度
    }

    startPlay () {
        var that = this.exportRoot.mc_0;
        that.h_1.play();
        this.vv = createjs.Sound.play("2-1");
        createjs.Tween.get(that.h_1, { override: true }).to({ alpha: 1 });
        this.tApp.bgmLoop("globalBgm");
    }

    stopPlay () {
        var that = this.exportRoot.mc_0;
        createjs.Sound.stop();
        createjs.Tween.get(that.ball, { override: true }).to({ alpha: 0 });
        createjs.Tween.get(that.mc_1, { override: true }).to({ alpha: 0 });
        createjs.Tween.get(that.mc_2.mc_1, { override: true }).to({ alpha: 0 });
        createjs.Tween.get(that.mc_2.mc_2, { override: true }).to({ alpha: 0 });
        createjs.Tween.get(that.mc_3, { override: true }).to({ alpha: 0 });
        createjs.Tween.get(that.puzi, { override: true }).to({ alpha: 0 });
        createjs.Tween.get(that.h_1, { override: true }).to({ alpha: 0 });
        that.victory.gotoAndStop(0);
        that.h_1.gotoAndStop(0);
        console.log(that.puzi.x + "---" + this.puzi.y);
        console.log(that.ball.x + "---" + that.ball.y);
        this.currentPosition = this.firstPosition;
    }

    Num1 () {
        var that = this.exportRoot.mc_0;
        var sevenThis = this;
        createjs.Sound.stop();
        createjs.Sound.play("common_tone");
        that.h_1.gotoAndStop(0);
        createjs.Tween.get(that.h_1, { override: true }).to({ alpha: 0 });
        createjs.Tween.get(that.mc_1, { override: true }).to({ alpha: 1 });
        createjs.Tween.get(that.mc_2.mc_1, { override: true }).to({ alpha: 1 });
        createjs.Tween.get(that.mc_3, { override: true }).to({ alpha: 1 });
        createjs.Tween.get(that.puzi, { override: true }).to({ alpha: 1 }, 300);
        createjs.Tween.get(this.puzi, { override: true }).to({ y: this.firstPosition }).to({ alpha: 1 });//谱子
        createjs.Tween.get(that.ball, { override: true }).to({ alpha: 1, x: intX, y: intY });
        beatEnd();
        this.step = 1;
    }

    played () {
        var that = this.exportRoot.mc_0;
        var sevenThis = this;
        //判断点击次数的单双
        if (sevenThis.boolean) {
            sevenThis.boolean = false;
        } else {
            sevenThis.boolean = true;
        };
        //如果是第一次播放 则给music一个信号 开始播放 否则不播放
        if (sevenThis.isfirstPlay) {
            sevenThis.isfirstPlay = false;
            createjs.Tween.get(sevenThis.puzi, { override: true }).to({ y: sevenThis.firstPosition });//谱子
            sevenThis.currentPosition = sevenThis.firstPosition;
            toMusic(canvas, stage, that, sevenThis.boolean, sevenThis, sevenThis.soundName);
            positionMap();
        };
        sevenThis.num++;
        if (sevenThis.num % 2 == 0) {
            createjs.Tween.get(that.mc_2.mc_1, { override: true }).to({ alpha: 1 });
            createjs.Tween.get(that.mc_2.mc_2, { override: true }).to({ alpha: 0 });
            //谱子开始往上动
            if (markNum == 1) {
                if (tween) tween.setPaused(true);
                tweenBall.setPaused(true);
                sevenThis.instance.paused = true;
            }
            if (markNum != 1) {
                tweenBall.setPaused(true);
                sevenThis.instance.paused = true;
            }
        }
        else if (sevenThis.num % 2 != 0) {
            createjs.Tween.get(that.mc_2.mc_2, { override: true }).to({ alpha: 1 });
            createjs.Tween.get(that.mc_2.mc_1, { override: true }).to({ alpha: 0 });
            if (markNum == 1) {
                if (tween) tween.setPaused(false);
                tweenBall.setPaused(false);
                sevenThis.instance.paused = false;
            }
            if (markNum != 1) {
                tweenBall.setPaused(false);
                sevenThis.instance.paused = false;
            };
        };
    };
    extendNextStep  () {
        var that = this.exportRoot.mc_0;
        if (this.step == 0) {
            this.Num1();
        }
        else {
            this.extendNextPage(null, null, this.nextUrl);
        }
    }
    extendPreStep () {
        var that = this.exportRoot.mc_0;
        if (this.step == 1) {
            this.step--;
            this.stopPlay();
        }
        else {
            this.extendPrePage(true, null, this.preUrl);
        }
    }
    extendOkOrEnter () {
        var that = this.exportRoot.mc_0;
        if (!that.puzi.alpha) return;
        if (this.step == 1) {
            this.played();
        };
    }
    extendAfterEsc () {
        this.tApp.backHome();
    };
    choice (code) {
        var that = this.exportRoot.mc_0;
        if (this.num !== 0) {
            return;
        }
        if (this.step == 1 && code == 1 && this.currentPosition < this.firstPosition) {
            var newPosition = this.currentPosition + this.hangDis;
            this.currentPosition = newPosition;
            if (this.currentPosition == this.firstPosition) {
                createjs.Tween.get(this.puzi, { override: true }).to({ y: newPosition }, 1000).call(function () {
                    createjs.Tween.get(this.tiaoqiu, { override: true }).to({ alpha: 1 });
                });
            } else {
                createjs.Tween.get(this.puzi, { override: true }).to({ y: newPosition }, 1000);//谱子
            }
        }
        else if (this.step == 1 && code == 2 && this.currentPosition > this.endPosition) {
            createjs.Tween.get(this.tiaoqiu, { override: true }).to({ alpha: 0 });//测量谱子坐标的时候 注释掉本行 改掉上边step为1
            var newPosition = this.currentPosition - this.hangDis;
            this.currentPosition = newPosition;
            createjs.Tween.get(this.puzi, { override: true }).to({ y: newPosition }, 1000);//谱子
        }
    }
}



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
    
    var that = this.exportRoot.mc_2;

};
PageThree.prototype.function_M = function () {
    
    var that = this.exportRoot.mc_0;

};
