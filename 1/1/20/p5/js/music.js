/**
 * Created by on 16/3/18.
 */
var _this;
var isPlay;
var a;
var erGroup9;
var those;
var playnum = 0;
var hei = 0;
var tween = null;
var tweenBall = null;
var markNum = 0;

function toMusic(canv, stag, _this, flag, obj) {
	cv = canv;
	sg = stag;
	erGroup9 = _this;
	isPlay = flag;
	those = obj;
	createjs.Sound.stop();
	// 测试坐标
	// addMouseEvent();
};

function addMouseEvent() {
	var obj = erGroup9.mc_0.ball;
	obj.addEventListener("mousedown", function (e) {
		createjs.Sound.stop();
		var ev = ev || e;
		var top = ev.stageY - obj.y;
		var left = ev.stageX - obj.x;
		obj.addEventListener("pressmove", function (e) {
			var ev = ev || e;
			var x = ev.stageX;
			var y = ev.stageY;
			createjs.Tween.get(obj, { override: true }).to({ x: x - left, y: y - top });
			console.log("[" + 'x:' + Math.floor(obj.x) + "," + 'y:' + Math.floor(obj.y) + "]");
		});
	});
};

var speed = (60000 / 62) / 2;
var endTime = 100;//结束后回到初始位置的时间
var jumpHeight = -40;//跳动的高度
var offsetX = 60;//每行首尾x坐标偏差
var defaultEffect = 1;//默认图标的透明度
var lineEffect = 0;//消失时的透明度
var arry = [];
var beatLocations = arry;
var NUM = 0;
var jx = 0;	// 谱子向上滚动时用
var curPos = 0;	// 谱子向上流动时用
function positionMap() {
	arry = [];
	rightData = [];
	var tw = createjs.Tween.get(erGroup9.mc_0.ball, { override: true });
	$.each(those.currentX, function (index, record) {
		$.each(record, function (i, d) {
			arry.push([d, those.currentY[index]]);
		});
	});
	beatLocations = arry;
	geneData();
	beatStart();
};

var rightData = [];

function geneData() {
	var endNUM = [];
	for (var c = 0; c < those.currentX.length; c++) {
		if (c == 0) {
			endNUM.push(those.currentX[c].length);
		}
		else {
			endNUM.push(endNUM[endNUM.length - 1] + those.currentX[c].length);
		};
	};
	// console.log(endNUM)
	var starNUM = endNUM.map(function (n) { return n - 1 });
	rightData = [];
	NUM = 0;
	for (var k = 0; k < 4; k++) {
		rightData.push([those.initX, those.initY + jumpHeight, speed, defaultEffect]);
		rightData.push([those.initX, those.initY, speed, defaultEffect]);
	}
	// var firstTop = [ ((beatLocations[0][0] - intX)/2 + intX) , (intY + jumpHeight) , speed/2, defaultEffect];
	// rightData.push(firstTop);
	$.each(beatLocations, function (i, d) {
		if (i == 0) {
			var tmp = (beatLocations[i + 1][0] - d[0]) / 6;
			rightData.push([d[0] + 1 * tmp, d[1] + jumpHeight, speed, defaultEffect]);
			rightData.push([d[0] + 2 * tmp, d[1], speed, defaultEffect]);
			rightData.push([d[0] + 3 * tmp, d[1] + jumpHeight, speed, defaultEffect]);
			rightData.push([d[0] + 4 * tmp, d[1], speed, defaultEffect]);
			rightData.push([d[0] + 5 * tmp, d[1] + jumpHeight, speed, defaultEffect]);
			rightData.push([d[0] + 6 * tmp, d[1], speed, defaultEffect]);
		} else if (i % 2 == 0) {
			if (i == endNUM[NUM]) {
				NUM++;
				//每行第一个
				rightData.push([d[0] - offsetX, d[1] + jumpHeight, speed / 2, lineEffect]);
			} else {
				rightData.push([d[0] - (d[0] - beatLocations[i - 1][0]) / 2, d[1] + jumpHeight, speed, defaultEffect]);
			}
			rightData.push([d[0], d[1], speed, defaultEffect]);
			var tmp = (beatLocations[i + 1][0] - d[0]) / 6;
			rightData.push([d[0] + 1 * tmp, d[1] + jumpHeight, speed, defaultEffect]);
			rightData.push([d[0] + 2 * tmp, d[1], speed, defaultEffect]);
			rightData.push([d[0] + 3 * tmp, d[1] + jumpHeight, speed, defaultEffect]);
			rightData.push([d[0] + 4 * tmp, d[1], speed, defaultEffect]);
			rightData.push([d[0] + 5 * tmp, d[1] + jumpHeight, speed, defaultEffect]);
			rightData.push([d[0] + 6 * tmp, d[1], speed, defaultEffect]);
			var m = i + 1;
			if (m == starNUM[NUM]) {
				//每行最后一个
				rightData.push([d[0] + 6 * tmp + offsetX, d[1] + jumpHeight, speed / 2, lineEffect]);
			}
		};
	});
};

function beatStart() {
	var jumpNum = 0
	tweenBall = createjs.Tween.get(erGroup9.mc_0.ball, { override: true });
	createjs.Sound.stop();
	those.instance = createjs.Sound.play(those.soundName);
	those.instance.on("complete", function () {
		beatEnd();
	});
	if (those.instance.playState == createjs.Sound.PLAY_FINISHED) {
		those.instance.play();
	}

	$.each(rightData, function (i, d) {
		// 获取每行最后一个点
		if (jx < those.moveTotal[those.step]) {
			if (i > 39 && i < 39 + 33 * those.moveTotal[those.step]) {
				if (i % 33 === 6) {
					jx++;
					hei = 0;
				} else {
					hei++;
					var b = those.hangDis[those.step][jx] / 32;
					d[1] = d[1] - hei * b;
				}
			}
		}
		tweenBall.to({ x: parseInt(d[0]), y: parseInt(d[1]), scaleY: d[4], alpha: d[3] }, d[2]);
		tweenBall.call(function () {

			if (!those.moveTotal[those.step]) {
				return;
			}

			var ind = those.hangDis[those.step].length;
			// var puzi = erGroup9.mc_0[those.starBtn].mc_1;

			function scrollUp() {
				if (playnum >= ind) {
					return;
				}
				if (d[0] == 1712 && playnum < ind) {
					playnum++;
					// if(playnum == 1){ // -124
					markNum = 1;//标记 告诉主页有动画了
					curPos += those.hangDis[those.step][playnum - 1];

					tween = createjs.Tween.get(those.puzi, { override: true }).to({ y: those.firstPosition[those.step] - curPos }, speed * 32).call(scrollUp)

					// }
				}
			}

			scrollUp()
		});
	});
};

function beatEnd(event) {
	isPlay = false;
	if (!erGroup9) {
		return;
	}
	var tw = createjs.Tween.get(erGroup9.mc_0.ball, { override: true });
	tw.to({ x: those.initX, y: those.initY, alpha: 1 });
	createjs.Tween.get(those.puzi, { override: true }).to({ y: those.firstPosition[1] });
	those.boolean = false;
	those.num = 0;
	those.isfirstPlay = true;
	markNum = 0;
	playnum = 0;
	hei = 0;
	jx = 0;
	curPos = 0;
	createjs.Tween.get(erGroup9.mc_0[those.starBtn].b_0.mc_2, { override: true }).to({ alpha: 0 });
	createjs.Tween.get(erGroup9.mc_0[those.starBtn].b_0.mc_1, { override: true }).to({ alpha: 1 });
	// those.scrollIndex = 0;
	// console.log(curPos + ':' + jx)
};
