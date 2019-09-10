(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 25,
	color: "#FFFFFF",
	webfonts: {},
	manifest: manifest()
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.标题拷贝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.繁花 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.图层352拷贝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.图层65拷贝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.方框 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.曲谱联系 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.进入练习 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层65拷贝();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,100);


(lib.元件2复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.繁花();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.进入练习();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255,57);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 方框
	this.instance = new lib.方框();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1889,690);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层352拷贝();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,100);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.标题拷贝();
	this.instance.setTransform(41.9,5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.9,5.1,211,124);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.曲谱联系();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,161);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_1
	this.mc_1 = new lib.元件5();
	this.mc_1.setTransform(62,52,1,1,0,0,0,62,50);

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

	// mc_2
	this.mc_2 = new lib.元件6();
	this.mc_2.setTransform(182.5,50,1,1,0,0,0,54.5,50);

	this.timeline.addTween(cjs.Tween.get(this.mc_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,102);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_1
	this.mc_1 = new lib.元件3();
	this.mc_1.setTransform(939.5,69.5,1,1,0,0,0,142.5,69.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

	// mc_2
	this.mc_2 = new lib.元件1();
	this.mc_2.setTransform(1758.1,134.6,1,1,0,0,0,134,80.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_2).wait(1));

	// puzi
	this.puzi = new lib.元件14();
	this.puzi.setTransform(1028.6,519.4,1,1,0,0,0,1028.6,384.4);

	this.timeline.addTween(cjs.Tween.get(this.puzi).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5.1,1892.1,820);


// stage content:
(lib._20_p6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ral
	this.instance = new lib.元件4();
	this.instance.setTransform(1734.5,1012,1,1,0,0,0,118.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// recovery
	this.recovery = new lib.元件2();
	this.recovery.setTransform(196.5,1010.5,1,1,0,0,0,127.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.recovery).wait(1));

	// mc_0
	this.mc_0 = new lib.元件8();
	this.mc_0.setTransform(965.5,506,1,1,0,0,0,944.5,450);

	this.timeline.addTween(cjs.Tween.get(this.mc_0).wait(1));

	// bg
	this.bg = new lib.元件2复制();
	this.bg.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;