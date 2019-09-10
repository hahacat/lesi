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



(lib.标题拷贝复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.A深色 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.框 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.转曲 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.转曲复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.奖励 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.荷花骨朵 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.图层352拷贝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.图层65拷贝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.段落练习 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.背景 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.A深色();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,56);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.A();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,56);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.奖励();
	this.instance.setTransform(22.9,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.9,51.4,202,199);


(lib.hgf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhbBhQgIAAABgFQAAgDAJgEQA8gVAsgxQgTAJgWAAQgqAAgCg+QAAg0BGgGQBYgDAAA4QgDBEhKAsIAOAAQAlgDASgEQAOAAADAGQAFAFgHAJQgOAPgfAAgAgaggQAAAcAcAAQAjAAACgqQgDgZgcgFQgiABAAArg");
	this.shape.setTransform(58,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhAB6QgBgGAIgPQAOgiALgVQAagzAVg9IACgFQAQgsARgHQAXgEgOAiQgcA4gcBBIgXA2QgOAjgRAEIgIACQgBAAgBgBQAAAAgBAAQgBAAAAAAQAAgBgBAAg");
	this.shape_1.setTransform(36.8,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhbBhQgIAAABgFQAAgDAJgEQA8gVAsgxQgTAJgWAAQgqAAgCg+QAAg0BGgGQBYgDAAA4QgDBEhKAsIAOAAQAlgDASgEQAOAAADAGQAFAFgHAJQgOAPgfAAgAgaggQAAAcAcAAQAjAAACgqQgDgZgcgFQgiABAAArg");
	this.shape_2.setTransform(14,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.4,59.1);


(lib.fhgftgft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.转曲();
	this.instance.setTransform(-26,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,14,1660,544);


(lib.fgfgbf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhbBhQgIAAABgFQAAgDAJgEQA8gVAsgxQgTAJgWAAQgqAAgCg+QAAg0BGgGQBYgDAAA4QgDBEhKAsIAOAAQAlgDASgEQAOAAADAGQAFAFgHAJQgOAPgfAAgAgaggQAAAcAcAAQAjAAACgqQgDgZgcgFQgiABAAArg");
	this.shape.setTransform(58.1,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhAB6QgBgGAIgPQAOgiALgVQAagzAVg9IACgFQAQgsARgHQAXgEgOAiQgcA4gcBBIgXA2QgOAjgRAEIgIACQgBAAgBgBQAAAAgBAAQgBAAAAAAQAAgBgBAAg");
	this.shape_1.setTransform(36.8,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtBiQgoAAAHgNQACgMAegBIAPAAIAGAAQADgWACgUIADgnQAAgegFgdIgTAAQgeAAAEgNQADgNAlgDIAeAAIAPAAQAUACgCASQgLA2ACBfIAbAAQAdgCgDAOQgFAOgkAAg");
	this.shape_2.setTransform(14.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.5,59.1);


(lib.ffgbftg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.转曲复制();
	this.instance.setTransform(-13.9,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,13,1652,957);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.荷花骨朵();
	this.instance.setTransform(0.3,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,-7.5,39,48);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.段落练习();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184,164);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.标题拷贝复制();
	this.instance.setTransform(74.1,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.1,-14.4,193,124);


(lib.元件6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance_1 = new lib.图层352拷贝();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,100);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层65拷贝();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,100);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.背景();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.元件1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件2("synched",0);
	this.instance_1.setTransform(124,153,0.5,0.5,0,0,0,124,153);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({startPosition:0},0).to({scaleX:1.05,scaleY:1.05,alpha:1},3).to({scaleX:0.95,scaleY:0.95},2).to({scaleX:1.03,scaleY:1.03},2).to({scaleX:1,scaleY:1},2).wait(9).to({startPosition:0},0).to({alpha:0},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.5,102.2,101,99.5);


(lib.fghfhgftgtgrt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_1
	this.mc_1 = new lib.元件9();
	this.mc_1.setTransform(31.5,28,1,1,0,0,0,31.5,28);

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

	// mc_2
	this.mc_2 = new lib.元件10();
	this.mc_2.setTransform(31.5,28,1,1,0,0,0,31.5,28);

	this.timeline.addTween(cjs.Tween.get(this.mc_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,56);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_1
	this.mc_1 = new lib.元件5();
	this.mc_1.setTransform(62,52,1,1,0,0,0,62,50);

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

	// mc_2
	this.mc_2 = new lib.元件6_1();
	this.mc_2.setTransform(182.5,50,1,1,0,0,0,54.5,50);

	this.timeline.addTween(cjs.Tween.get(this.mc_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,102);


(lib.tthfcgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// b_0
	this.b_0 = new lib.fghfhgftgtgrt();
	this.b_0.setTransform(-153.6,-18,1,1,0,0,0,31.5,28);

	this.timeline.addTween(cjs.Tween.get(this.b_0).wait(1));

	// bg
	this.bg = new lib.fgfgbf();
	this.bg.setTransform(1592.7,447.9,1,1,0,0,0,35.7,29.6);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// mc_1
	this.mc_1 = new lib.fhgftgft();
	this.mc_1.setTransform(750.5,358.7,1,1,0,0,0,825.5,523);

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.1,-150.3,1813.6,627.7);


(lib.hgfdgtr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// b_0
	this.b_0 = new lib.fghfhgftgtgrt();
	this.b_0.setTransform(-140.6,-10.7,1,1,0,0,0,31.5,28);

	this.timeline.addTween(cjs.Tween.get(this.b_0).wait(1));

	// bg
	this.bg = new lib.hgf();
	this.bg.setTransform(1592.8,448.2,1,1,0,0,0,35.7,29.6);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiOuA4nMAAAhxNMEddAAAMAAABxNg");
	mask.setTransform(717.6,142.4);

	// mc_1
	this.mc_1 = new lib.ffgbftg();
	this.mc_1.setTransform(751,359.5,1,1,0,0,0,827,521.5);

	this.mc_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.1,-149,1800.7,653.8);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ball
	this.ball = new lib.元件6();
	this.ball.setTransform(217.6,418.8,1,1,0,0,0,22,17.5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// victory
	this.victory = new lib.元件1_1();
	this.victory.setTransform(935.1,540.7,1.001,1.001,0,0,0,124.1,153.2);

	this.timeline.addTween(cjs.Tween.get(this.victory).wait(1));

	// mc_1
	this.mc_1 = new lib.元件13();
	this.mc_1.setTransform(939.4,81.9,1,1,0,0,0,142.5,69.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

	// mc_2
	this.mc_2 = new lib.元件14();
	this.mc_2.setTransform(1778.7,151.7,1,1,0,0,0,92,82);

	this.timeline.addTween(cjs.Tween.get(this.mc_2).wait(1));

	// mc_3
	this.mc_3 = new lib.tthfcgd();
	this.mc_3.setTransform(986.7,569.6,1,1,0,0,0,783.6,182.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_3).wait(1));

	// mc_4
	this.mc_4 = new lib.hgfdgtr();
	this.mc_4.setTransform(986.7,569.3,1,1,0,0,0,783.7,182.3);

	this.timeline.addTween(cjs.Tween.get(this.mc_4).wait(1));

	// bg
	this.instance = new lib.框();
	this.instance.setTransform(-20.8,136.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-2,1920,1197);


// stage content:
(lib._20_p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ral
	this.instance = new lib.元件4();
	this.instance.setTransform(1734.5,1012,1,1,0,0,0,118.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mc_0
	this.mc_0 = new lib.元件7();
	this.mc_0.setTransform(965.5,468,1,1,0,0,0,944.5,413);

	this.timeline.addTween(cjs.Tween.get(this.mc_0).wait(1));

	// bg
	this.bg = new lib.元件1();
	this.bg.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920.2,1250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;