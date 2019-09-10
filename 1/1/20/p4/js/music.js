/**
 * Created by dutianzhao on 16/3/18.
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
var instance;

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

var speed = (60000 / 82) / 2;//半拍的时间
var intX = 137;//初始x坐标
var intY = 297;//初始y坐标
var puziInitHeight = 406;//谱子初始坐标 每个谱子不一样 可调
var endTime = 100;//结束后回到初始位置的时间
var jumpHeight = -40;//跳动的高度
var offsetX = 60;//每行首尾x坐标偏差
var defaultEffect = 1;//默认图标的透明度
var lineEffect = 0;//消失时的透明度
//节拍位置 x,y,time,仅限每小节首尾
var y_position = [
	intY, 445, 425, 445, 445, 445, 445, 445, 460, 445,
	425, 435, 435, 435, 445, 465, 440, 633
];
var x_position = [ //26
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],

	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832, 966, 1240, 1386, 1660],
	[intX, 415, 554, 832]
];
var arry = [];
var beatLocations = arry;
// var endNUM = [8,16,24,32];
// var starNUM = [7,15,23,31];
var NUM = 0;
function positionMap() {
	arry = [];
	rightData = [];
	var tw = createjs.Tween.get(erGroup9.mc_0.ball, { override: true });
	$.each(x_position, function (index, record) {
		$.each(record, function (i, d) {
			arry.push([d, y_position[index]]);
		});
	});

	beatLocations = arry;
	geneData();
	beatStart();
};

var rightData = [];

function geneData() {
	var endNUM = [];
	for (var c = 0; c < x_position.length; c++) {
		if (c == 0) {
			endNUM.push(x_position[c].length);
		}
		else {
			endNUM.push(endNUM[endNUM.length - 1] + x_position[c].length);
		};
	};
	var starNUM = endNUM.map(function (n) { return n - 1 });
	rightData = [];
	NUM = 0;
	// for(var k = 0;k < 8;k++){
	// 	rightData.push([intX,intY+jumpHeight,speed,defaultEffect]);
	// 	rightData.push([intX,intY,speed,defaultEffect]);
	// }
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
		} else {
			// console.log(2)
		};
	});
	// console.log(rightData);
};

function beatStart() {
	var jumpNum = 0;
	tweenBall = createjs.Tween.get(erGroup9.mc_0.ball, { override: true });
	createjs.Sound.stop();
	// instance = (those.step == 1 ? createjs.Sound.play("song") : createjs.Sound.play("once"))
	instance = createjs.Sound.play("song")
	instance.on("complete", function () {
		beatEnd();
	});
	if (instance.playState == createjs.Sound.PLAY_FINISHED) {
		instance.play();
	}
	// return false;
	$.each(rightData, function (i, d) {
		// 获取每行最后一个点
		if (i > 31 && i < 526) {
			if (i % 33 !== 31) {
				hei++;
				d[1] = d[1] - hei * those.hangDis / 32;
			} else {
				hei = 0;
			}
		}

		tweenBall.to({ x: parseInt(d[0]), y: parseInt(d[1]), scaleY: d[4], alpha: d[3] }, d[2]);
		tweenBall.call(function () {
			// console.log(d[0]);
			if (d[0] == 77 && playnum == 0) {
				playnum++;
				if (playnum == 1) { // -124
					markNum = 1;//标记 告诉主页有动画了
					tween = createjs.Tween.get(erGroup9.mc_0.puzi.mc_1, { override: true }).to({ y: those.firstPosition - those.hangDis * 15 }, speed * 32 * 15);
				}
			}
		});
		if (i == (rightData.length - 1)) {
			// tweenBall.call(beatEnd);
		};
		// console.log(rightData);
	});
};

function beatEnd(event) {
	isPlay = false;
	if (!erGroup9) {
		return;
	}
	var tw = createjs.Tween.get(erGroup9.mc_0.ball, { override: true });
	createjs.Tween.get(erGroup9.mc_0.puzi.mc_1, { override: true }).to({ y: puziInitHeight }).to({ alpha: 1 });//谱子
	tw.to({ x: intX, y: intY, alpha: 1 });
	those.boolean = false;
	those.num = 0;
	those.isfirstPlay = true;
	markNum = 0;
	playnum = 0;
	hei = 0;
	createjs.Tween.get(erGroup9.mc_0.mc_2.mc_2, { override: true }).to({ alpha: 0 });
	createjs.Tween.get(erGroup9.mc_0.mc_2.mc_1, { override: true }).to({ alpha: 1 });
};
