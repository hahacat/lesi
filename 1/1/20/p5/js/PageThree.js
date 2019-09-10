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
 * @author on 16/4/23
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
    this.nextUrl = "p6";
    this.currUrl = "p5";
    this.preUrl = "p4";
    this.musicArray = ["mc_3", "mc_4"];
    this.musicName = ["4-3-2", "4-3-1"];
    this.soundName = null;
    this.tiaoqiu = this.exportRoot.mc_0.ball;
    this.isfirstPlay = true;
    this.num = 0;
    this.firstPosition = [359, 360];
    this.currentPosition = [359, 360];
    this.hangDis = [
        [0],
        [192, 192]
    ];
    this.scrollIndex = 0;
    this.moveTotal = [0, 2]; // 每一个元件可移动的行数
    this.endPosition = [];
    this.createEndPosition(); // 生成endPosition
    this.puzi = this.exportRoot.mc_0.mc_4.mc_1; // 谱子是变化的
    this.testDug = false;
    this.y_position = [
        [288, 484, 694],
        [305, 482, 500, 505, 700]
    ];
    this.x_position = [
        [
            [135, 407, 547, 827, 965, 1242, 1382, 1658],
            [135, 407, 547, 827, 965, 1242, 1382, 1658],
			[135, 407]
        ],
        [
            [131, 407, 543, 823, 960, 1238, 1372, 1652],
            [131, 407, 543, 823, 960, 1238, 1372, 1652],
            [131, 407, 543, 823, 960, 1238, 1372, 1652],
			[131, 407, 543, 823, 960, 1238, 1372, 1652],
			[131, 407, 543, 823, 960, 1238, 1372, 1652]
        ]
    ];
    this.starBtn = this.musicArray[this.step];
};

PageThree.prototype.createEndPosition = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    // var sum = those.firstPosition[i];
    this.hangDis.forEach(function (v, i) {
        var sum = those.firstPosition[i];
        v.forEach(function (value, index) {
            sum -= value;
        })
        those.endPosition.push(sum);
    });
    // console.log(those.endPosition)
};

PageThree.prototype.startPlay = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    var isFinsh = this.tApp.getUrl("id");
    those.tApp.bgmLoop("globalBgm");
};

PageThree.prototype.stopPlay = function () {
    var that = this.exportRoot;
    var those = this;
    those.hideAll();
    those.soundName = those.musicName[0];
};

PageThree.prototype.hideAll = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    console.log(that.mc_3.mc_1.x + ':' + that.mc_3.mc_1.y)
    console.log(that.mc_4.mc_1.x + ':' + that.mc_4.mc_1.y)
    those.initX = those.x_position[those.step][0][0];
    those.initY = those.y_position[those.step][0];
    those.tApp.animationEnd(that.victory, true);
    $.each(those.musicArray, function (i, dex) {
        those.tApp.eleControl(that[dex], { alpha: 0 });
        those.tApp.eleControl(that[dex].mc_1, { y: those.firstPosition[i] });
        those.tApp.eleControl(that[dex].b_0.mc_1, { alpha: 1 });
        those.tApp.eleControl(that[dex].b_0.mc_2, { alpha: 0 });
        those.currentPosition[i] = those.firstPosition[i];
    });
	
    those.tApp.eleControl(that[those.musicArray[those.step]], { alpha: 1 });
	// those.tApp.eleControl(this.puzi, { y: those.firstPosition[1] });
    createjs.Tween.get(that.ball, { override: true }).to({ alpha: 1, x: those.initX, y: those.initY });
};

//----------------------------------------------------------------------
PageThree.prototype.changeStep = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    those.hideAll();
    createjs.Sound.stop();
    createjs.Sound.play("common_tone");
    those.soundName = those.musicName[those.step];
    those.tApp.eleControl(that[those.musicArray[those.step]], { alpha: 1 });
    this.puzi = this.exportRoot.mc_0[this.musicArray[this.step]]['mc_1'];
    // createjs.Tween.get(that.ball, { override: true }).to({ alpha: 1, x: those.x_position[those.step][0][0], y: those.y_position[those.step][0] });
	this.puzi = that[those.musicArray[those.step]].mc_1;
    those.scrollIndex = 0;
    this.starBtn = this.musicArray[this.step];
    createjs.Tween.get(that[those.starBtn].b_0, { override: true }).to({ alpha: 1 });
    beatEnd();
};

PageThree.prototype.played = function () {
    var that = this.exportRoot;
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
        createjs.Tween.get(sevenThis.puzi, { override: true }).to({ y: sevenThis.firstPosition[this.step] });//谱子
        sevenThis.currentPosition[this.step] = sevenThis.firstPosition[this.step];
        toMusic(canvas, stage, that, sevenThis.boolean, sevenThis, sevenThis.instance);
        positionMap();
    };
    sevenThis.num++;
    if (sevenThis.num % 2 == 0) {
        createjs.Tween.get(that.mc_0[sevenThis.starBtn].b_0.mc_1, { override: true }).to({ alpha: 1 });
        createjs.Tween.get(that.mc_0[sevenThis.starBtn].b_0.mc_2, { override: true }).to({ alpha: 0 });
        //谱子开始往上动
        if (markNum == 1) {
            // if (tween) tween.setPaused(true);
            tweenBall.setPaused(true);
            sevenThis.instance.paused = true;
        }
        if (markNum != 1) {
            tweenBall.setPaused(true);
            sevenThis.instance.paused = true;
        }
    }
    else if (sevenThis.num % 2 != 0) {
        createjs.Tween.get(that.mc_0[sevenThis.starBtn].b_0.mc_2, { override: true }).to({ alpha: 1 });
        createjs.Tween.get(that.mc_0[sevenThis.starBtn].b_0.mc_1, { override: true }).to({ alpha: 0 });
        if (markNum == 1) {
            // if (tween) tween.setPaused(false);
            tweenBall.setPaused(false);
            sevenThis.instance.paused = false;
        };
        if (markNum != 1) {
            tweenBall.setPaused(false);
            sevenThis.instance.paused = false;
        };
    };
};

/***********************************功能扩展*******************************************/

/**
 * shang一步
 */
PageThree.prototype.extendPreStep = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (those.step <= those.musicArray.length - 1 && those.step != 0) {
        those.step--;
        those.changeStep();
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
    if (those.step != those.musicArray.length - 1) {
        those.step++;
        those.changeStep();
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
    var that = this.exportRoot.mc_0;
    those.currentX = those.x_position[those.step];
    those.currentY = those.y_position[those.step];
    createjs.Tween.get(that[those.starBtn].b_0, { override: true }).to({ alpha: 1 });
    // those.starBtn = those.musicArray[this.step]
    those.played();
};

PageThree.prototype.choice = function (code) {
    var that = this.exportRoot.mc_0;
    var those = this;
};
PageThree.prototype.repeat = function () {
    var those = this;
    var that = this.exportRoot;
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

PageThree.prototype.choice = function (code) {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (those.num != 0) {
        return;
    }
    var step = this.step;
    if (code == 1 && those.currentPosition[step] < those.firstPosition[step]) {
        var sum = those.hangDis[step].length - 1;
        if (those.scrollIndex > 0) {
            those.scrollIndex--;
            sum = those.hangDis[step][those.scrollIndex];
            newPosition = those.currentPosition[step] + sum;
        } else {
            those.scrollIndex++;
        }
        those.currentPosition[step] = newPosition;
        createjs.Tween.get(those.puzi, { override: true }).to({ y: newPosition }, 1000);//谱子

        if (those.currentPosition[step] == those.firstPosition[step]) {
            createjs.Tween.get(those.puzi, { override: true }).to({ y: newPosition }, 1000).call(function () {
                createjs.Tween.get(those.tiaoqiu, { override: true }).to({ alpha: 1 });
                createjs.Tween.get(that[those.starBtn].b_0, { override: true }).to({ alpha: 1 });
            });
        }
    }
    else if (code == 2 && those.currentPosition[step] > those.endPosition[step]) {
        createjs.Tween.get(those.tiaoqiu, { override: true }).to({ alpha: 0 });//测量谱子坐标的时候 注释掉本行 改掉上边step为1that.mc_0[sevenThis.starBtn].b_0
        createjs.Tween.get(that[those.starBtn].b_0, { override: true }).to({ alpha: 0 });
        var newPosition = those.currentPosition[step];
        var sum = 0;
        if (those.scrollIndex <= those.hangDis[step].length - 1) {
            sum = those.hangDis[step][those.scrollIndex];
            newPosition = those.currentPosition[step] - sum;
            // console.log(those.scrollIndex)
            those.scrollIndex++;
        } else {
            those.scrollIndex--;
        }
        those.currentPosition[step] = newPosition;
        createjs.Tween.get(those.puzi, { override: true }).to({ y: newPosition }, 1000);//谱子
    }
};
