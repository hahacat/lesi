/**
 * Created by dutianzhao on 16/3/18.
 */
var _this;
var isPlay;
var erGroup9;
var those;
var playnum = 0;
var hei = 0;
var tween = null;
var tweenBall = null;
var markNum = 0;
// toMusic(canvas, stage, that, sevenThis.boolean, sevenThis, sevenThis.soundName);
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
	var obj = erGroup9.ball;
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

const intX = 156;//初始x坐标
const intY = 257;//初始y坐标
const jumpHeight = -40;//跳动的高度
const offsetX = 60;//每行首尾x坐标偏差
const defaultEffect = 1;//默认图标的透明度
const lineEffect = 0;//消失时的透明度
//节拍位置 x,y,time,仅限每小节首尾
const y_position = [intY, 590, 590];
const x_position = [
	[intX, 347, 572, 757, 988, 1172, 1404, 1591], //
	[intX, 347, 572, 757, 988, 1172, 1404, 1591],
	[intX, 347, 572, 757, 988, 1172]
];
var beatLocations = [];
const endNUM = [8, 16, 22];
const starNUM = [7, 15, 21];
let NUM = 0;
var rightData = [];

function positionMap() {
	$.each(x_position, function (index, record) {
		$.each(record, function (i, d) {
			beatLocations.push([d, y_position[index]]);
		});
	});
	geneData();
	beatStart();
		// console.log(beatLocations);
	// console.log(rightData)
};



function geneData() {
	rightData = [];
	NUM = 0;
	for (var k = 0; k < 4; k++) {
		rightData.push([intX, intY + jumpHeight, those.speed, defaultEffect]);
		rightData.push([intX, intY, those.speed, defaultEffect]);
	}
	$.each(beatLocations, function (i, d) {
		if (i == 0) {
			var tmp = (beatLocations[i + 1][0] - d[0]) / 2;
			rightData.push([d[0] + 1 * tmp, d[1] + jumpHeight, those.speed, defaultEffect]);
			rightData.push([d[0] + 2 * tmp, d[1], those.speed, defaultEffect]);
		} else if (i % 2 == 0) {

			if (i == endNUM[NUM]) {
				NUM++;
				//每行第一个
				rightData.push([d[0] - offsetX, d[1] + jumpHeight, those.speed / 2, lineEffect]);
			} else {
				rightData.push([d[0] - (d[0] - beatLocations[i - 1][0]) / 2, d[1] + jumpHeight, those.speed, defaultEffect]);
			}
			rightData.push([d[0], d[1], those.speed, defaultEffect]);
			var tmp = (beatLocations[i + 1][0] - d[0]) / 2;
			rightData.push([d[0] + 1 * tmp, d[1] + jumpHeight, those.speed, defaultEffect]);
			rightData.push([d[0] + 2 * tmp, d[1], those.speed, defaultEffect]);
			var m = i + 1;
			if (m == starNUM[NUM]) {
				//每行最后一个
				rightData.push([d[0] + 2 * tmp + offsetX, d[1] + jumpHeight, those.speed / 2, lineEffect]);
			}
		}
	});
};

function beatStart() {
	tweenBall = createjs.Tween.get(erGroup9.ball, { override: true });
	const n = 0
	createjs.Sound.stop();
	those.instance = createjs.Sound.play(those.soundName)
	those.instance.on("complete", function () {
		beatEnd();
	});
	if (those.instance.playState == createjs.Sound.PLAY_FINISHED) {
		those.instance.play();
	}
	$.each(rightData, function (i, d) {
		// 获取每行最后一个点
		if (i > 23 + n && i < 40 + n) {
			if (i % 17 !== 6) {
				hei++;
				d[1] = d[1] - hei * 19;
			} else {
				hei = 0;
			}
		}
		tweenBall.to({ x: parseInt(d[0]), y: parseInt(d[1]), scaleY: d[4], alpha: d[3] }, d[2]);
		tweenBall.call(function () {
			if (d[0] == 1651 && playnum == 0) {
				playnum++;
				if (playnum == 1) { // -124
					markNum = 1;//标记 告诉主页有动画了
					tween = createjs.Tween.get(those.puzi, { override: true }).to({ y: those.firstPosition - those.hangDis * 1 }, those.speed * 16 * 1);//谱子
				}
			}
		});
	});
}

function beatEnd(event) {
	isPlay = false;
	if (!erGroup9) {
		return;
	}
	createjs.Sound.stop();
	createjs.Tween.get(erGroup9.ball, { override: true }).to({ x: intX, y: intY, alpha: 1 });
	createjs.Tween.get(those.puzi, { override: true }).to({ y: those.firstPosition }).to({ alpha: 1 });//谱子
	those.boolean = false;
	those.num = 0;
	those.isfirstPlay = true;
	markNum = 0;
	playnum = 0;
	hei = 0;
	createjs.Tween.get(erGroup9.mc_2.mc_2, { override: true }).to({ alpha: 0 });
	createjs.Tween.get(erGroup9.mc_2.mc_1, { override: true }).to({ alpha: 1 });
}
