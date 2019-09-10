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



(lib.小城故事 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.繁花 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1aaa = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2aaa = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.li_1_222_58474 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.li_1_290_37725 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.li_1_318_5381 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.li_1_57_61491 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.li_1_63_27897 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.li_1_64_65496 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.li_1_65_23749 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.li_1_67_28259 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.li_1_68_3736 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.li_1_69_92184 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.li_1_71_37724 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.li_1_72_65837 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.li_1_73_84769 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.li_1_75_37208 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.li_1_77_65783 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.li_1_79_19492 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.li_1_80_1165 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.li_1_83_1612 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.li_1_84_19083 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.li_1_85_28649 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.li_1_87_29626 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.li_1_90_66400 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.li_1_92_28377 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.li_1_96_50571 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.li_1_88_67447复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A64630").ss(0.5,1,1).p("AiXgTQCaBNCVhJ");
	this.shape.setTransform(0,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A64630").ss(0.1,1,1).p("ABTAWQAdgSAcgcQgrAJgxgUQgwgTgoASQgqARg5gFQAhAeAgASQBPAtBOgvgAhKAYQBJgYBUAW");
	this.shape_1.setTransform(0.1,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA5E7B").s().p("AhOgDQBJgaBUAYQgoAWgnAAQgmAAgogUg");
	this.shape_2.setTransform(0.5,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A62431").s().p("AiLgNQA5AFAqgRQAogSAwATQAxAUArgJQgcAcgeASQhTgYhJAaQgggSghgeg");
	this.shape_3.setTransform(0.1,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA5E7B").s().p("AACApIgCAAIgDAAIgFAAQg4gBgrgpQBjhMB0BKQgtArg4ABIgFAAg");
	this.shape_4.setTransform(0.2,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A62431").s().p("AiIAIQAzADAYgaQAYgcAjgBQAigCAYAZQAZAWA4AHQgNAUgPAQQh0hIhjBKQgQgQgOgWg");
	this.shape_5.setTransform(0,-2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A64630").ss(0.1,1,1).p("ABTAWQAdgSAcgcQgrAJgxgUQgwgTgoASQgqARg5gFQAhAeAgASQBJgYBUAWgAhKAYQBPAtBOgv");
	this.shape_6.setTransform(0.1,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA5E7B").s().p("AhHgdIAAgDQBGgRBJARIAAADQgGBGhCAAQhCAAgFhGg");
	this.shape_7.setTransform(0,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A62431").s().p("AhBADQAEgIAIgIQALgPARgHQAMgGANABQANgBAOAGQAQAHAMAPQAGAIAFAIQAHARgBAVQhJgRhGARQgCgUAIgSg");
	this.shape_8.setTransform(0,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_8},{t:this.shape_7}]},3).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-5.3,32.5,6.1);


(lib.li_1_77_74510复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.Bitmap30复制2();

	this.instance_1 = new lib.Bitmap31复制2();
	this.instance_1.setTransform(0,1.9);

	this.instance_2 = new lib.Bitmap32复制2();
	this.instance_2.setTransform(0.7,4.8);

	this.instance_3 = new lib.Bitmap33复制2();
	this.instance_3.setTransform(-3.5,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.3,130);


(lib.li_1_11_73643 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-63.1,-54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.1,-54.4,120,107);


(lib.li_1_10_56576 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-50.1,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-59.5,101,107);


(lib.li_1_9_2226 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap2aaa();
	this.instance.setTransform(-58.3,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.3,-50,105,107);


(lib.li_1_8_1223 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap1aaa();
	this.instance.setTransform(-34.9,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-47,64,107);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.小城故事();
	this.instance.setTransform(0,69.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,69.4,783,328);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.繁花();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.li_1_59_76794 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_290_37725();
	this.instance.setTransform(-187.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-13.5,375,27);


(lib.li_1_57_58348 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"5":0,"6":3,"7":6,"8":9,"1":12,"2":15,"3":18,"4":21});

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DA6990").ss(0.1,1,1).p("EA5NBV3Q2Km46u4PUgasgYQgfTghZUgfSghbgUPgS2QuktluInUQlfi3lah6IG5lAQGugVIwCRQOIDrTbKcQfcQ5VdMxUAVdAMxAm6AWWUAm7AWTAdCAPlQdBPmPaBOUghyAcJgxzAICg");
	this.shape.setTransform(577.4,-288.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E56E97").s().p("EAIUA2wUgargYQgfTghZUgfSghbgUPgS2QuktluInUQlfi3lah6IG5lAQGugVIwCRQOIDrTaKcQfcQ5VeMxUAVdAMxAm5AWWUAm8AWTAdBAPlQdCPmPZBOUghxAcJgxzAICQ2Km46v4Pg");
	this.shape_1.setTransform(577.4,-288.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DA6990").ss(0.1,1,1).p("EiRWhVeQACAEABADQCsGXFmFAQE9EaGSCnQD6BpHpCDQHyCHDwBhQOTFxSFS8QDGDQG2IpQERFYH0KfQEXF2ECFUUAZxAiRAMLAOaQO+RvL9HqQL9HpN2D8MArkgMrQMBiwLSkmQOll2NMpYQxxiixglwQyQmAxtq5Qx7rCx6rGQxhq0xFshQgpgegpgeQwysYsCp9Qx/u5o4mPQsYosq5k/QsplyrDhCQisgQmegLQl7gKjSgZQlEgoj+hjQkth3j7jaIpGEN");
	this.shape_2.setTransform(600.5,-265.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E56E97").s().p("EAY7BOAQr9nqu+xvUgMMgOagZxgiRQkBlUkXl2Qn0qfkRlZQm3oojGjQQyEy8uTlxQjxhhnyiGQnoiEj7hpQmSink8kaQlmlAismXIJGkMQD6DZEuB3QD+BjFDAoQDTAZF7AKQGeALCsAQQLCBCMpFyQK6FAMYIrQI4GPR/O5QMBJ9QzMYIBRA9QRFMgRhK0QR6LFR8LDQRsK4SRGAQRgFxRwCiQtMJYulF1QrSEmsBCxMgrjAMrQt3j8r8npg");
	this.shape_3.setTransform(600.6,-265.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DA6990").ss(0.1,1,1).p("ECREBDOQwoitympHQwToByItHQt+qGy2v/QlbkmqspOQqypVlUkhQ5T1f5xzQQmck1j8imQlyj0k5iLQm5jFoPhPQl1g5pMgOQsYgTiqgMQojglmph3QkthTjbiVQkTi6iAkTIoEDPQg3DFAdDwQAcDiBiDwQBeDmCUDRQCUDRCvCaQFCEbGoCVQFRB3G6AsQCKAOD0AQQEMARByAKQHCApFBBnQI5C2J4HxQHoF/JqKNQUuV4RhZrQCtD+D0FzQCKDSHNLAQE5HcFjHVQHqKHHfHLQIqISIkEhQMDpedwBQQdwBRa6ynQACAAACAA");
	this.shape_4.setTransform(594.6,-240.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E56E97").s().p("EAdbBP/QnfnLnqqHQljnVk5ncIpXuSQj0lzitj+Qxh5r0u14QpqqNnol/Qp4nxo5i2QlBhnnCgpQhygKkMgRQj0gQiKgOQm6gslRh3QmoiVlCkbQiviaiUjRQiUjRhejmQhijwgcjiQgdjwA3jFIIEjPQCAETETC6QDbCVEtBTQGpB3IjAlQCqAMMYATQJMAOF1A5QIPBPG5DFQE5CLFyD0QD8CmGcE1QZxTQZTVfQFUEhKyJVQKsJOFbEmQS2P/N+KGQSINHQTIBQSmJHQoCtQ66Sn9whRQ9whQsDJeQokkhoqoSg");
	this.shape_5.setTransform(594.4,-240.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DA6990").ss(1,1,1).p("AjqCdIHVk5");
	this.shape_6.setTransform(-306.1,-822.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DA6990").ss(0.1,1,1).p("EiCghhfUAP6AYeAgggD5QKDhOKNBxQb/EyW9RfQV/QxSuUYQSuUWTLT9QRlSTSjRTQRGP7RCP8UgDsALrgjMgIsUgjMgIsgQZAHtEiJ3hckUgBpAhSAi4AGGQcME7ZfMXQaGMrSEXQQRuW5JXbQQIxZjScRGQABABABAB");
	this.shape_7.setTransform(552.7,-214.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E56E97").s().p("EBjEBdyUgjMgIsgQZAHtQycxGox5jQpX7Qxu25QyE3Q6GsrQ5fsX8Mk7Ugi4gGGABpghSIHXk7UAP6AYeAgggD5QKDhOKNBxQb/EyW9RfQV/QxSuUYQSuUWTLT9QRlSTSjRTQRGP7RCP8QiHGtsfAAQpSAAvAjug");
	this.shape_8.setTransform(552.7,-214.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DA6990").ss(0.1,1,1).p("Eh8chlkUgSZAjvA21AK0UAnUAHvAkEAZ5QBAAvDyC5UAsPAhwAMUAe1QBECqA2CpQAeBfBSFPQANA4ANA9QAQBIARBQQAYB0AbCEQACAKABAKQCQNHheKhQAXgGAYgGQGuhyHIgiQHNgjHfA7QHbA7I5BeQGZBEH3CcQHUCUHCEqUgNbgo/gnmgzmQprslnEoAQglgqglgqQ3H584SwMQgRgMgRgLQmikVmgjlQ6+uw54hTUhJNgDoAJTgSHg");
	this.shape_9.setTransform(473.7,-172.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E56E97").s().p("EByvBenQn3idmZhDQo5hfnbg6Qnfg7nNAjQnIAimuBxIgvANQBeqhiQtHIgDgVIgzj3IghiYIgah1QhSlPgehfQg2iqhEiqUgMUge0gsPghwQjyi5hAgvUgkEgZ5gnUgHvUg21gKzASZgjwIE6AhUgJTASGBJNADoQZ4BTa+OwQGgDlGiEVIAiAWQYSQNXHZ9IBKBTQHEIAJrMlUAnmAzmANbAo/QnCkqnUiUg");
	this.shape_10.setTransform(473.7,-172.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DA6990").ss(1,1,1).p("Eh+9hf9QENATFoDiQB5BMC/CJQD7C0A6AoQKfHKNPD5QJ7C7UQB+QMtBNUBF7QUBF7RkMbQRmMaKaL0QKaL1IvLiQJRMQKUM2QMmPrLbQ5QLHQaIWSPQAAACABAB");
	this.shape_11.setTransform(523.7,-200.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#DA6990").ss(0.1,1,1).p("EiA9hegQAEAEAEAEEh88hf8Ij5BkQDDC0C7EBQATAbATAbQCgDlEJHgQCcEdBxDKQDHFjClDpQE1G1GbFfQGDFLG7DhQGaDRMRDrQDqBGC0A3QE4BfDiBVQGDCUG2DkQFsC/HBERQcORIL/LfQL/LfBrCHQBsCFDDDoQDDDoFmJWQFmJVBfFEQBfFDAQHbQAQHbBAEiUAjJgLsAm6AU9");
	this.shape_12.setTransform(510.8,-200.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E56E97").s().p("EA23BWsQhAkigQncQgQnbhflCQhflElmpWQlmpVjDjoQjDjohsiFQhriHr/rfQr/rf8OxIQnBkRlsi+Qm2jlmDiUQjihVk4hfImeh9QsRjrmajRQm7jhmDlLQmblfk1m1QiljpjHljQhxjLickcQkJngigjlIgmg2Qi7kBjDi0ID5hjQENASFoDiQB5BNC/CIQD7C0A6AoQKfHLNPD4QJ7C7UQB+QMtBNUBF8QT/F6RmMbQRmMaKaL0QKaL1IvLjQJRMPKUM2QMmPsLbQ4QLHQaIWSPUgm6gU8gjJALsg");
	this.shape_13.setTransform(511.2,-200.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DA6990").ss(0.1,1,1).p("EhW9gqrQDIDhArAwQEJEfDYC9QC/CnD7CxQCaBtEtDFQS8MbPaKGQRHLOLmIIQTINXOwMRQEmD0CuCtQD4D2CkD4QEOGYBsHrQBrHrhZGfQJYCBTkoBQcCriUXTTUgl5gyIgVygY1Q1y40tlrEQx0ui1wpzQy0od2YlJQkdhDlShNQrYiplpiGQmJiRoBkJQhggyskmzQohknlkifQnsjbmchgImKCgQWXTfXPaNg");
	this.shape_14.setTransform(527.4,-247.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E56E97").s().p("EBULBTHQzkIBpYiBQBZmfhrnrQhsnrkOmYQilj4j3j2Qiuitkmj0QuwsRzItXQrnoIxFrOMgiXgWhQktjFiahtQj7ixi+inQjZi9kIkfQgsgwjJjhQ3O6N2XzfIGJigQGdBgHsDbQFkCfIhEnQMkGzBgAyQIBEJGJCRQFqCGLXCpQFRBNEdBDQWZFJS0IdQVwJzR0OiQNlLEVyY0UAVyAY1Al5AyIQ0XzT8CLig");
	this.shape_15.setTransform(527.4,-247.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#DA6990").ss(1,1,1).p("EiFohOGQJxCCMWEPQMWEQLVH6QLVH6HWDaQHVDaGnCbQGnCcHpDQQHoDQFBBuQKKDcLtFGQJeEIMPGBQLmFtKIGRQKIGOG/GMQG/GLJKIVQJKIVNQNBQNQNAJuHMQJsHKIZDw");
	this.shape_16.setTransform(579.6,-333.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DA6990").ss(0.1,1,1).p("EiEEhXwIjIF8QIaEHI7HZQHnGUImJRQFIFiJ+LuQJ7LoFNFmQNcOfRoOjQM9KvT8OeQFwENJPGlQJQGmF1DyQIWFcF8DuQF8DwC+C4QC+C4ByD3QBxD3CHGBQO+B2Yrr5QYsr6QfC4");
	this.shape_17.setTransform(569.6,-272);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E56E97").s().p("EA2ZBXhQiHmBhxj3Qhyj3i+i4Qi+i4l7jwQl9juoWlcQl0jypRmmQpOmllxkNQz7ues+qvQxoujtcufQlMlmp7roQp/rulIliQolpRnomUQo7nZoakHIDIl8QJxCCMWEPQMWEPLVH6QLVH7HWDZQHVDaGoCbQGmCcHpDQQHoDRFBBtQKKDcLtFGQJeEIMPGBQLmFtKIGRQKIGQG/GKQG/GLJKIVQJKIVNQNBQNPNAJuHMQJuHKIYDwQwfi44sL6Q1XKTuGAAQiMAAiAgQg");
	this.shape_18.setTransform(569.6,-272);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_10},{t:this.shape_9}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},3).to({state:[{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.6,-839.2,1804,1101.2);


(lib.li_1_55_24314 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_73_84769();
	this.instance.setTransform(-87.2,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-120.5,174,241);


(lib.li_1_53_258 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"5":0,"6":3,"7":6,"8":9,"1":12,"2":15,"3":18,"4":21});

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DA6990").ss(0.1,1,1).p("EA5NBV3Q2Km46u4PUgasgYQgfTghZUgfSghbgUPgS2QuktluInUQlfi3lah6IG5lAQGugVIwCRQOIDrTbKcQfcQ5VdMxUAVdAMxAm6AWWUAm7AWTAdCAPlQdBPmPaBOUghyAcJgxzAICg");
	this.shape.setTransform(577.4,-288.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E56E97").s().p("EAIUA2wUgargYQgfTghZUgfSghbgUPgS2QuktluInUQlfi3lah6IG5lAQGugVIwCRQOIDrTaKcQfcQ5VeMxUAVdAMxAm5AWWUAm8AWTAdBAPlQdCPmPZBOUghxAcJgxzAICQ2Km46v4Pg");
	this.shape_1.setTransform(577.4,-288.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DA6990").ss(0.1,1,1).p("EiRWhVeQACAEABADQCsGXFmFAQE9EaGSCnQD6BpHpCDQHyCHDwBhQOTFxSFS8QDGDQG2IpQERFYH0KfQEXF2ECFUUAZxAiRAMLAOaQO+RvL9HqQL9HpN2D8MArkgMrQMBiwLSkmQOll2NMpYQxxiixglwQyQmAxtq5Qx7rCx6rGQxhq0xFshQgpgegpgeQwysYsCp9Qx/u5o4mPQsYosq5k/QsplyrDhCQisgQmegLQl7gKjSgZQlEgoj+hjQkth3j7jaIpGEN");
	this.shape_2.setTransform(600.5,-265.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E56E97").s().p("EAY7BOAQr9nqu+xvUgMMgOagZxgiRQkBlUkXl2Qn0qfkRlZQm3oojGjQQyEy8uTlxQjxhhnyiGQnoiEj7hpQmSink8kaQlmlAismXIJGkMQD6DZEuB3QD+BjFDAoQDTAZF7AKQGeALCsAQQLCBCMpFyQK6FAMYIrQI4GPR/O5QMBJ9QzMYIBRA9QRFMgRhK0QR6LFR8LDQRsK4SRGAQRgFxRwCiQtMJYulF1QrSEmsBCxMgrjAMrQt3j8r8npg");
	this.shape_3.setTransform(600.6,-265.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DA6990").ss(0.1,1,1).p("ECREBDOQwoitympHQwToByItHQt+qGy2v/QlbkmqspOQqypVlUkhQ5T1f5xzQQmck1j8imQlyj0k5iLQm5jFoPhPQl1g5pMgOQsYgTiqgMQojglmph3QkthTjbiVQkTi6iAkTIoEDPQg3DFAdDwQAcDiBiDwQBeDmCUDRQCUDRCvCaQFCEbGoCVQFRB3G6AsQCKAOD0AQQEMARByAKQHCApFBBnQI5C2J4HxQHoF/JqKNQUuV4RhZrQCtD+D0FzQCKDSHNLAQE5HcFjHVQHqKHHfHLQIqISIkEhQMDpedwBQQdwBRa6ynQACAAACAA");
	this.shape_4.setTransform(594.6,-240.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E56E97").s().p("EAdbBP/QnfnLnqqHQljnVk5ncIpXuSQj0lzitj+Qxh5r0u14QpqqNnol/Qp4nxo5i2QlBhnnCgpQhygKkMgRQj0gQiKgOQm6gslRh3QmoiVlCkbQiviaiUjRQiUjRhejmQhijwgcjiQgdjwA3jFIIEjPQCAETETC6QDbCVEtBTQGpB3IjAlQCqAMMYATQJMAOF1A5QIPBPG5DFQE5CLFyD0QD8CmGcE1QZxTQZTVfQFUEhKyJVQKsJOFbEmQS2P/N+KGQSINHQTIBQSmJHQoCtQ66Sn9whRQ9whQsDJeQokkhoqoSg");
	this.shape_5.setTransform(594.4,-240.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DA6990").ss(1,1,1).p("AjqCdIHVk5");
	this.shape_6.setTransform(-306.1,-822.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DA6990").ss(0.1,1,1).p("EiCghhfUAP6AYeAgggD5QKDhOKNBxQb/EyW9RfQV/QxSuUYQSuUWTLT9QRlSTSjRTQRGP7RCP8UgDsALrgjMgIsUgjMgIsgQZAHtEiJ3hckUgBpAhSAi4AGGQcME7ZfMXQaGMrSEXQQRuW5JXbQQIxZjScRGQABABABAB");
	this.shape_7.setTransform(552.7,-214.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E56E97").s().p("EBjEBdyUgjMgIsgQZAHtQycxGox5jQpX7Qxu25QyE3Q6GsrQ5fsX8Mk7Ugi4gGGABpghSIHXk7UAP6AYeAgggD5QKDhOKNBxQb/EyW9RfQV/QxSuUYQSuUWTLT9QRlSTSjRTQRGP7RCP8QiHGtsfAAQpSAAvAjug");
	this.shape_8.setTransform(552.7,-214.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DA6990").ss(0.1,1,1).p("Eh8chlkUgSZAjvA21AK0UAnUAHvAkEAZ5QBAAvDyC5UAsPAhwAMUAe1QBECqA2CpQAeBfBSFPQANA4ANA9QAQBIARBQQAYB0AbCEQACAKABAKQCQNHheKhQAXgGAYgGQGuhyHIgiQHNgjHfA7QHbA7I5BeQGZBEH3CcQHUCUHCEqUgNbgo/gnmgzmQprslnEoAQglgqglgqQ3H584SwMQgRgMgRgLQmikVmgjlQ6+uw54hTUhJNgDoAJTgSHg");
	this.shape_9.setTransform(473.7,-172.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E56E97").s().p("EByvBenQn3idmZhDQo5hfnbg6Qnfg7nNAjQnIAimuBxIgvANQBeqhiQtHIgDgVIgzj3IghiYIgah1QhSlPgehfQg2iqhEiqUgMUge0gsPghwQjyi5hAgvUgkEgZ5gnUgHvUg21gKzASZgjwIE6AhUgJTASGBJNADoQZ4BTa+OwQGgDlGiEVIAiAWQYSQNXHZ9IBKBTQHEIAJrMlUAnmAzmANbAo/QnCkqnUiUg");
	this.shape_10.setTransform(473.7,-172.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DA6990").ss(1,1,1).p("Eh+9hf9QENATFoDiQB5BMC/CJQD7C0A6AoQKfHKNPD5QJ7C7UQB+QMtBNUBF7QUBF7RkMbQRmMaKaL0QKaL1IvLiQJRMQKUM2QMmPrLbQ5QLHQaIWSPQAAACABAB");
	this.shape_11.setTransform(523.7,-200.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#DA6990").ss(0.1,1,1).p("Eh88hf8Ij5BkEiA9hegQAEAEAEAEQDDC0C7EBQATAbATAbQCgDlEJHgQCcEdBxDKQDHFjClDpQE1G1GbFfQGDFLG7DhQGaDRMRDrQDqBGC0A3QE4BfDiBVQGDCUG2DkQFsC/HBERQcORIL/LfQL/LfBrCHQBsCFDDDoQDDDoFmJWQFmJVBfFEQBfFDAQHbQAQHbBAEiUAjJgLsAm6AU9");
	this.shape_12.setTransform(510.8,-200.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E56E97").s().p("EA23BWsQhAkigQncQgQnbhflCQhflElmpWQlmpVjDjoQjDjohsiFQhriHr/rfQr/rf8OxIQnBkRlsi+Qm2jlmDiUQjihVk4hfImeh9QsRjrmajRQm7jhmDlLQmblfk1m1QiljpjHljQhxjLickcQkJngigjlIgmg2Qi7kBjDi0ID5hjQENASFoDiQB5BNC/CIQD7C0A6AoQKfHLNPD4QJ7C7UQB+QMtBNUBF8QT/F6RmMbQRmMaKaL0QKaL1IvLjQJRMPKUM2QMmPsLbQ4QLHQaIWSPUgm6gU8gjJALsg");
	this.shape_13.setTransform(511.2,-200.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DA6990").ss(0.1,1,1).p("EhW9gqrQDIDhArAwQEJEfDYC9QC/CnD7CxQCaBtEtDFQS8MbPaKGQRHLOLmIIQTINXOwMRQEmD0CuCtQD4D2CkD4QEOGYBsHrQBrHrhZGfQJYCBTkoBQcCriUXTTUgl5gyIgVygY1Q1y40tlrEQx0ui1wpzQy0od2YlJQkdhDlShNQrYiplpiGQmJiRoBkJQhggyskmzQohknlkifQnsjbmchgImKCgQWXTfXPaNg");
	this.shape_14.setTransform(527.4,-247.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E56E97").s().p("EBULBTHQzkIBpYiBQBZmfhrnrQhsnrkOmYQilj4j3j2Qiuitkmj0QuwsRzItXQrnoIxFrOMgiXgWhQktjFiahtQj7ixi+inQjZi9kIkfQgsgwjJjhQ3O6N2XzfIGJigQGdBgHsDbQFkCfIhEnQMkGzBgAyQIBEJGJCRQFqCGLXCpQFRBNEdBDQWZFJS0IdQVwJzR0OiQNlLEVyY0UAVyAY1Al5AyIQ0XzT8CLig");
	this.shape_15.setTransform(527.4,-247.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#DA6990").ss(1,1,1).p("EiFohOGQJxCCMWEPQMWEQLVH6QLVH6HWDaQHVDaGnCbQGnCcHpDQQHoDQFBBuQKKDcLtFGQJeEIMPGBQLmFtKIGRQKIGOG/GMQG/GLJKIVQJKIVNQNBQNQNAJuHMQJsHKIZDw");
	this.shape_16.setTransform(579.6,-333.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DA6990").ss(0.1,1,1).p("EiEEhXwIjIF8QIaEHI7HZQHnGUImJRQFIFiJ+LuQJ7LoFNFmQNcOfRoOjQM9KvT8OeQFwENJPGlQJQGmF1DyQIWFcF8DuQF8DwC+C4QC+C4ByD3QBxD3CHGBQO+B2Yrr5QYsr6QfC4");
	this.shape_17.setTransform(569.6,-272);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E56E97").s().p("EA2ZBXhQiHmBhxj3Qhyj3i+i4Qi+i4l7jwQl9juoWlcQl0jypRmmQpOmllxkNQz7ues+qvQxoujtcufQlMlmp7roQp/rulIliQolpRnomUQo7nZoakHIDIl8QJxCCMWEPQMWEPLVH6QLVH7HWDZQHVDaGoCbQGmCcHpDQQHoDRFBBtQKKDcLtFGQJeEIMPGBQLmFtKIGRQKIGQG/GKQG/GLJKIVQJKIVNQNBQNPNAJuHMQJuHKIYDwQwfi44sL6Q1XKTuGAAQiMAAiAgQg");
	this.shape_18.setTransform(569.6,-272);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_10},{t:this.shape_9}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},3).to({state:[{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.6,-839.2,1804,1101.2);


(lib.li_1_51_2345 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_87_29626();
	this.instance.setTransform(-32,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-17.9,37,58);


(lib.li_1_50_8752 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_57_61491();
	this.instance.setTransform(-8,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-24.5,37,58);


(lib.li_1_49_64110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_222_58474();
	this.instance.setTransform(-76.6,-133.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.6,-133.1,153,266);


(lib.li_1_48_56266 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_63_27897();
	this.instance.setTransform(-67.9,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-34.5,136,69);


(lib.li_1_47_52714 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_85_28649();
	this.instance.setTransform(-33,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-44.9,67,91);


(lib.li_1_46_23825 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap26复制2();
	this.instance.setTransform(-32.9,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-44.8,66,90);


(lib.li_1_45_22849 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_96_50571();
	this.instance.setTransform(-51.5,-39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-39.2,103,78);


(lib.li_1_44_94781 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 11
	this.instance = new lib.li_1_79_19492();
	this.instance.setTransform(-1,-1);

	this.instance_1 = new lib.li_1_90_66400();
	this.instance_1.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance}]},105).to({state:[{t:this.instance_1}]},35).to({state:[{t:this.instance}]},63).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,91,124);


(lib.li_1_43_63870 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 9
	this.instance = new lib.Bitmap13复制2();
	this.instance.setTransform(-1,-1.6);

	this.instance_1 = new lib.li_1_90_66400();
	this.instance_1.setTransform(90.2,3,1,1,0,4.8,-175.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},152).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},63).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.6,91,125);


(lib.li_1_42_78893 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DA6990").ss(0.1,1,1).p("Ai8U2QB0hPAOgJQBFgpBPhCQKaotA0oIQAsmokjlTQiZizj2ibQmUkAnHgkQg6gFg6gB");
	this.shape.setTransform(250.8,133.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DA6990").ss(0.1,1,1).p("Asv0zQACAAABAAQA4ABA4AFQEYAWEEBoQCkBCCeBkQAOAJAPAKQDJCCCLCWQAQARAPASQAKAMAKAMQENFKgpGbQgqFXj/E7QioDOj/DPQgIAHgHAGQhHA4g/AmQgFADgNAJQghAVhPA3");
	this.shape_1.setTransform(251,133.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DA6990").ss(0.1,1,1).p("Asx0wQACAAABAAQA4ABA4AFQEYAVEGBpQCkBBCdBkQAPAJAOAKQDKCCCLCXQAQASAPARQALAMAKAMQENFKgoGcQgpFfj+EzQirDNkADLQgIAGgIAGQhGA4hBAmQgFADgMAJQgjAWhOA1");
	this.shape_2.setTransform(251.2,134.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DA6990").ss(0.1,1,1).p("Asy0uQABAAACAAQA4ABA4AEQEYAWEGBoQClBCCeBjQAOAKAPAJQDICCCNCZQAQARAPASQALALAKAMQENFKgmGdQgpFnj8EsQivDMkBDHQgIAGgIAGQhGA2hCAnQgFADgMAIQgkAXhNA1");
	this.shape_3.setTransform(251.4,134.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DA6990").ss(0.1,1,1).p("As00sQACAAABAAQA4ABA4AFQEZAWEHBnQCmBCCdBjQAOAJAPAKQDICCCOCZQAQASAPARQAKAMAKAMQEOFKglGeQgoFuj6ElQizDKkCDDQgIAGgIAGQhGA0hDApQgFADgMAIQglAXhMA1");
	this.shape_4.setTransform(251.5,134.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DA6990").ss(0.1,1,1).p("As20pQACAAABAAQA4ABA4AEQEaAWEHBnQCmBCCeBjQAOAJAPAKQDHCBCQCbQAQASAPARQAKAMAKAMQENFKgjGfQgnF2j5EdQi2DJkDC/QgIAGgIAFQhGA0hEApQgGADgMAIQgmAYhKAz");
	this.shape_5.setTransform(251.7,135.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DA6990").ss(0.1,1,1).p("As40nQACAAABAAQA5ABA3AEQEaAWEIBnQCnBCCeBiQAOAKAPAJQDHCBCQCcQAQASAPARQAKAMAKAMQEOFKgiGhQgmF9j3EWQi6DIkEC6QgIAGgIAGQhGAyhFAqQgHADgLAHQgoAZhJAz");
	this.shape_6.setTransform(251.9,135.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DA6990").ss(0.1,1,1).p("As60lQACAAABAAQA5ABA3AEQEaAWEJBmQCoBCCdBjQAPAJAOAKQDHCACRCeQAQARAPASQALAMAKAMQEOFKghGiQglGEj2EPQi+DGkEC3QgJAGgIAGQhGAwhGArQgHAEgKAGQgpAahIAy");
	this.shape_7.setTransform(252.1,136);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#DA6990").ss(0.1,1,1).p("As70jQABAAABAAQA5ABA4AFQEaAVEKBmQCoBCCeBjQAOAJAPAKQDFCACTCfQAQASAPARQALALAKAMQEOFKggGjQgkGNj0EHQjBDGkGCyQgIAFgJAGQhFAvhIAsQgHAEgKAGQgrAbhGAx");
	this.shape_8.setTransform(252.3,136.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DA6990").ss(0.1,1,1).p("As90gQABAAABAAQA5ABA4AEQEbAVEKBmQCpBCCdBjQAPAJAOAJQDGCACUChQAQARAPASQAKALAKAMQEOFKgeGkQgjGUjzEAQjEDEkHCuQgJAGgIAFQhFAuhJAsQgIAFgKAGQgrAbhGAw");
	this.shape_9.setTransform(252.5,136.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#DA6990").ss(0.1,1,1).p("As/0eQACAAABAAQA5ABA4AEQEbAVELBmQCqBCCdBjQAOAJAPAJQDECACWChQAQASAPARQAKAMAKAMQEOFKgdGlQgiGbjxD5QjIDDkICpQgJAGgIAGQhFAshKAtQgIAFgKAFQgtAchEAw");
	this.shape_10.setTransform(252.6,137.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DA6990").ss(0.1,1,1).p("AtB0cQACAAABAAQA5ABA4AFQEbAVEMBlQCqBCCdBiQAPAJAOAKQDFB/CWCjQAQASAPARQAKAMAKAMQEPFKgcGlQghGkjwDxQjLDCkJClQgJAGgJAFQhEArhMAuQgIAFgJAFQgvAdhCAv");
	this.shape_11.setTransform(252.8,137.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#DA6990").ss(0.1,1,1).p("AtD0ZQACgBABABQA5AAA4AFQEcAVEMBlQC8BICpBvQDEB/CYCkQAaAdAZAdQEPFLgbGoQAAANgBANQgfGPjvDqQjWDIkUClQhKAuhYA0QgwAdhCAv");
	this.shape_12.setTransform(253,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// 图层 4
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#DA6990").ss(0.1,1,1).p("AphyBQA7ABA5AGQI0A6FfIGQAGAJAHAKQHGK3rVMkQgCACgDACQg0A5h0CR");
	this.shape_13.setTransform(230.4,145);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DA6990").ss(0.1,1,1).p("Apix5QAIAAAJABQAxABAxAFQBWAJBMASQD0A3DGCXQCuCECKDLQAQAYACAEQAIAMAHALQB+DOAZDYQAbDmhfDvQhWDWivDdQg0BCg9BEQgCACgDADQgEAEgEAFQg3A8hpCD");
	this.shape_14.setTransform(230.6,145.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#DA6990").ss(0.1,1,1).p("ApkxwQAJAAAIAAQAyACAwAEQBWAJBMASQD0A0DGCWQCvCDCKDKQAQAXADAEQAHALAHAMQB/DNAaDYQAdDmhiDtQhYDViuDbQg0BCg9BDQgCACgDADQgEAEgEAFQg5A9hoB/");
	this.shape_15.setTransform(230.7,146.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#DA6990").ss(0.1,1,1).p("AplxnQAIAAAIAAQAyABAwAFQBWAJBMAQQD0AyDHCVQCwCBCKDIQAPAYADAEQAHALAHALQB/DMAcDYQAfDmhkDsQhcDUisDZQgzBAg+BDQgCACgDADQgEAEgEAFQg7A/hmB8");
	this.shape_16.setTransform(230.9,147.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DA6990").ss(0.1,1,1).p("ApnxfQAJAAAIAAQAxABAwAFQBWAIBMARQD0AvDHCTQCyCACJDHQAQAXACAEQAIALAGALQB/DKAeDZQAhDmhnDqQheDTisDXQgyBAg+BCQgCADgDACQgEAFgEAFQg9BAhlB4");
	this.shape_17.setTransform(231,148.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#DA6990").ss(0.1,1,1).p("AppxXQAJAAAIABQAxABAvAEQBWAIBNAQQDzAtDICRQCzCACJDEQAQAXACAEQAIAMAGAKQB/DJAgDZQAiDnhpDnQhhDTirDVQgxA+g+BDQgDACgCADQgEAEgFAFQg/BChjB1");
	this.shape_18.setTransform(231.2,149.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#DA6990").ss(0.1,1,1).p("ApqxOQAIAAAIAAQAxABAvAFQBWAIBNAPQDzArDJCPQCzB/CJDDQAQAXADADQAHAMAHAKQB/DIAhDYQAkDohrDkQhlDTipDTQgxA9g+BCQgCADgDACQgEAFgEAEQhCBEhiBx");
	this.shape_19.setTransform(231.4,150.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#DA6990").ss(0.1,1,1).p("ApsxFQAIAAAIAAQAxABAvAFQBWAHBMAPQD0AoDJCNQC1B+CIDBQAQAXADAEQAHALAHAKQB/DGAjDZQAmDphuDhQhoDSinDRQgxA9g+BBQgCADgDADQgEAEgEAFQhEBFhgBt");
	this.shape_20.setTransform(231.5,150.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DA6990").ss(0.1,1,1).p("Aptw9QAIAAAIAAQAwACAvAEQBWAHBMAPQD0AlDKCMQC1B8CJDAQAQAXACAEQAIAKAGAKQCADFAkDZQAoDphxDgQhqDRinDPQgvA7g/BCQgCACgDADQgEAEgEAFQhGBGhfBr");
	this.shape_21.setTransform(231.7,151.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DA6990").ss(0.1,1,1).p("Apvw0QAIAAAIAAQAwABAvAEQBWAHBMAOQD0AjDKCKQC3B8CIC+QAQAWADAEQAHALAGAKQCADDAmDZQAqDqhzDdQhuDRilDMQgvA7g/BBQgCADgDADQgEAEgEAEQhIBIhdBn");
	this.shape_22.setTransform(231.8,152.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DA6990").ss(0.1,1,1).p("ApwwsQAIAAAIAAQAvABAvAFQBWAGBMAOQD0AgDLCJQC4B6CHC8QAQAXADAEQAHAKAHAKQB/DCAoDZQArDqh1DbQhwDQilDLQguA5g/BBQgCADgDADQgEAEgEAFQhKBJhcBk");
	this.shape_23.setTransform(232,153.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DA6990").ss(0.1,1,1).p("ApywjQAIAAAHAAQAwABAvAEQBVAGBNAOQDzAeDMCGQC5B5CHC7QAQAXADAEQAHAKAGAJQCADBApDZQAuDrh4DZQhzDPijDIQguA6g/BAQgDACgDAEQgEAEgEAEQhLBLhbBg");
	this.shape_24.setTransform(232.2,154.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DA6990").ss(0.1,1,1).p("Ap0wbQAIAAAIABQAyABAyAEQBPAGBNANQDzAbDMCFQDHCBCNDLQAIAKAGAJQCADAAqDZQAwDrh6DWQh3DPiiDGQgyA+hIBJQhNBMhaBd");
	this.shape_25.setTransform(232.3,155.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#DA6990").ss(0.1,1,1).p("ApwwrQAIAAAIAAQAvABAvAEQBWAHBMANQD0AhDLCIQC4B6CHC9QAQAWADAEQAHALAHAJQB/DDAoDZQArDqh1DbQhwDQilDKQguA6g/BBQgCACgDADQgEAEgEAFQhKBJhcBj");
	this.shape_26.setTransform(232,153.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#DA6990").ss(0.1,1,1).p("Apvw0QAIAAAIAAQAwACAvAEQBWAHBMAOQD0AjDKCKQC3B7CIC+QAQAXADAEQAHAKAGAKQCADEAmDZQAqDphzDeQhuDQilDNQgvA6g/BBQgCADgDADQgEAEgEAFQhIBIhdBm");
	this.shape_27.setTransform(231.8,152.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#DA6990").ss(0.1,1,1).p("Aptw8QAIAAAIAAQAwABAvAEQBWAIBMAOQD0AmDKCLQC1B9CJC/QAQAXACAEQAIALAGAKQCADFAkDZQAoDphxDfQhqDRinDPQgvA8g/BBQgCADgDADQgEAEgEAEQhGBHheBp");
	this.shape_28.setTransform(231.7,151.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#DA6990").ss(0.1,1,1).p("ApsxFQAIAAAIAAQAxACAvAEQBWAIBMAPQD0AoDJCNQC1B9CIDCQAQAXADAEQAHAKAHALQB/DGAjDZQAmDohuDiQhoDSinDRQgxA8g+BCQgCACgDADQgEAEgEAFQhEBFhfBt");
	this.shape_29.setTransform(231.5,150.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#DA6990").ss(0.1,1,1).p("ApqxNQAIAAAIAAQAxABAvAFQBWAIBNAPQDzArDJCPQCzB+CJDDQAQAXADAEQAHALAHALQB/DHAhDZQAkDohrDkQhlDSipDTQgxA+g+BCQgCACgDADQgEAEgEAFQhBBDhiBw");
	this.shape_30.setTransform(231.4,150);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#DA6990").ss(0.1,1,1).p("AppxWQAJAAAIABQAxABAvAEQBWAIBNAQQDzAtDICRQCzCACJDEQAQAXACAEQAIAMAGAKQB/DJAgDZQAiDnhpDnQhhDTirDUQgxA/g+BDQgDACgCADQgEAEgFAFQg+BChjBz");
	this.shape_31.setTransform(231.2,149.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#DA6990").ss(0.1,1,1).p("ApnxeQAJAAAIAAQAxABAwAFQBWAIBMARQD0AvDHCTQCyCACJDHQAQAXACAEQAIALAGALQB/DKAeDYQAhDnhnDpQheDUisDXQgyBAg+BCQgCADgDACQgEAEgEAFQg9BBhkB2");
	this.shape_32.setTransform(231,148.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#DA6990").ss(0.1,1,1).p("AplxmQAIAAAIAAQAyABAwAFQBWAJBMAQQD0AyDHCVQCwCBCKDIQAPAYADADQAHAMAHALQB/DMAcDYQAfDmhkDsQhcDUisDZQgzBAg+BDQgCACgDADQgEAEgEAFQg7A/hlB6");
	this.shape_33.setTransform(230.9,147.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#DA6990").ss(0.1,1,1).p("ApkxvQAJAAAIAAQAyACAwAEQBWAJBMASQD0A0DGCWQCvCDCKDKQAQAXADAEQAHALAHAMQB/DNAaDYQAdDmhiDtQhYDViuDbQg0BCg9BDQgCACgDADQgEAEgEAFQg5A9hmB9");
	this.shape_34.setTransform(230.7,146.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#DA6990").ss(0.1,1,1).p("Apix3QAIAAAJAAQAxACAxAFQBWAJBMARQD0A3DGCYQCuCECKDLQAQAXACAEQAIAMAHAMQB+DOAZDYQAbDlhfDwQhWDWivDdQg0BCg9BEQgCACgDACQgEAFgEAFQg3A7hnCA");
	this.shape_35.setTransform(230.6,145.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// 图层 7
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAMAfQgJgcgOgh");
	this.shape_36.setTransform(230.7,263.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgLgfQAOAhAJAe");
	this.shape_37.setTransform(230.7,263.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgLggQAOAiAKAf");
	this.shape_38.setTransform(230.7,263.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgMghQAOAiALAh");
	this.shape_39.setTransform(230.7,263.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgMgiQAOAiALAj");
	this.shape_40.setTransform(230.7,264);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgNgiQAPAiAMAj");
	this.shape_41.setTransform(230.8,264);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgNgjQAPAjAMAk");
	this.shape_42.setTransform(230.8,264.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgNgkQAOAjANAm");
	this.shape_43.setTransform(230.8,264.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgNgkQAOAiANAn");
	this.shape_44.setTransform(230.8,264.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgOglQAOAhAPAq");
	this.shape_45.setTransform(230.9,264.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgOgmQAOAiAPAr");
	this.shape_46.setTransform(230.9,264.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgOgnQAOAiAPAt");
	this.shape_47.setTransform(230.9,264.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgOgnQAOAhAPAu");
	this.shape_48.setTransform(230.9,264.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36}]}).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).wait(1));

	// 图层 3
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E56E97").s().p("AD6ElIgOgUQlcoDo2g7Qg5gGg7gBIAAknQA6ABA6AFQAnADAmAFQGcAyFxDqQD2CbCaCxQCbC1A8DOQjugMilDKQgriehjiZg");
	this.shape_49.setTransform(249,60.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E56E97").s().p("AFxISQgqh0hKhwIgNgUIgTgcIgNgSQiQjJi1h7QjEiIjtgvQg/gNhCgHQg5gFg7gCIAAkxIAgABQAqABAqADQEmAYETBzQCTA+CNBZIA9AnQDJCHCHCZIAFAFQAWAbAWAbQB4CdA0CwQgjABgiAHQheAJhQAsQgVALgSANQg+Aqg8BCg");
	this.shape_50.setTransform(249.1,61.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E56E97").s().p("AGIJbIgGgQIgFgRIgDgKIgBgDIgCgIIgBgBIgGgSQgmhkg8hiIgDgFIgGgKIgDgDIgDgGIgEgGIgDgEIAAgBIgIgKIAAgBIgDgFIgBgBIgDgFIgDgFIAAAAIgBgBIgDgGIgGgGIgEgGIgMgSQiGi0ikh1IgBgBIgDgCIgFgDIgEgEIgSgNQi3h6jZgtIgCAAIgGgCIgCAAIgIgCIgTgDQg1gLg3gGIgVgBQgrgFgsgBIgBAAIgDAAIgCAAIgMgNIAAkwIAYABIAGAAIABAAIABAAIAGAAQAnABAmADIABAAQEjAXERBxIAFACIAGADQCMA7CIBUIADACIADACIABABIAIAFIAvAeIADACIACABIABABIAEACQDBCDCGCUIABACIAEAEIABABIABABIAAABIADADIABACIADAEIAiApIADADIACADIABABIABABQAaAjAkA3QBFBsAoCCIABAGIgBAAIgsAGIgZADIgMACIgZAFIgNACIAAABQg5ALg0AaIgBABIgBAAIgHAEIgDACQgPAHgNAKIgDABIgBABIgEADIgDACQg1Ajg9A+IgLAGg");
	this.shape_51.setTransform(249.2,61.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E56E97").s().p("AGCJLIgGgRIgCgKIgBgDIgDgIIAAgBQgohthChpIgEgGIgGgKIgDgEIgDgFIgHgLIgBgBIgIgMIAAgBIgDgEIgGgIIgCgEIgBgBIAAgBIgEgFIgFgIIgDgEQiLi/iwh4IgBgBIgDgCIgGgEIgEgEQi/iBjlgrIgCAAIgGgBIgCgBIgIgBQg+gMhBgHQg2gFg3gBIgBAAIgDAAIgDAAIAAlJIAZABIAGAAIABAAIAHAAIBNAFQEjAXERBwIAFACIAAAAIAHADQCNA7CIBVIACABIAEACIAJAGIAuAeIACABIACACIABAAIAGADQDACDCHCVIABABIAEAFIABABIAAABIAFAEIADAFIAjApIACADIACADIABABQAVAcAsBAQBCBmArCJIABAFIgvAIIgmAHIgZAFIgOADIAGgBQg6AMg1AaIgBABIgBAAIgFADQgRAIgQALIgCABIgBABIgDACQgyAhhGBCIgNADg");
	this.shape_52.setTransform(249.3,62.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E56E97").s().p("AGCJQIgFgSIgDgKIgBgDIgEgKQgnhthChpIgDgFIgHgMIgDgDIgDgGIgHgKIgKgPIAAgBIgDgEIgGgIIgCgDIgCgCIgDgFIgFgIQiNjCiyh5IgCgBIgDgCIgFgEQjDiDjogqIgCAAIgGgBIgCAAQhCgNhEgHQg3gFg4gBIgBAAIgDAAIAAlTIAUABIAGAAIABAAIAHAAQApABAoAEQEiAWEQBuIAFACIAAAAIAHADQCOA7CIBUIAGAEIAJAGIAuAeIAFADIAAAAIAGADQDACCCICWIAFAGIABAAIAAAAIAFAGIADAEIAjAqIAFAGIABABIBCBdQBABgAtCPIAGAYQgagDgLACIgJABIgFAAIgEAAQhcAGhOAkIgCABIgFADQgSAIgQAKIgCABIgBABIgCACQg1AghXBQg");
	this.shape_53.setTransform(249.7,63.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E56E97").s().p("AGFJeIgDgNIgCgDIgBgGIgCgDIgCgIIgDgKIgBgDIgDgJQglhlg8hgIgDgFIgIgNIgBgDIgCgCIgDgDIgEgIIgCgEIgEgFIgGgJIgBgBIgBgBIgDgEIgEgIIgCgBIgBgDIgCgCIgDgFIgBgCIgDgDIgCgCIgDgGIgFgHQiIi6ith2IgCgBIgDgCIgJgGIgCgBIgDgCIgFgEQi9h8jfgoIgCAAIgGgBIgKgCIgCAAIgGgBIgCAAQg6gLg8gGIgQgBQgugFgwgBIgBAAIgDAAIgBAAIgHgGIAAgBIgCgBIAAlXIASABIACAAIABAAIAGAAIABAAIAHAAQApACAoADIAAAAQEhAWEPBtIABAAIADABIADACIABAAIAIADQCNA7CHBUIABAAIAGAEIADACIAGADIAtAdIABABIAAAAIAEADIABAAIAFADQDACBCICWIABABIADADIABACIADAEIABAAIAFAGIADAEIAhAnIABABIABACIAFAGIABABIA9BVIAFAIQA+BaAvCXIAHAYQgNgCgLABIgMAAIgBAAIgEAAIgEABIgEAAIgFAAQhWAFhKAgIgFADIgHACIgCABIgHAEIgVAKIgCABIgCACIgIAEIgCACIgBABIgDACQg1AghVBLIgDgBg");
	this.shape_54.setTransform(249.9,63.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E56E97").s().p("AF/JNIgCgJIgCgDQgoh0hEhuIgEgGIgKgPIgDgFIgQgYIAAgBIgDgEIgJgNIgBgCIgDgEQiOjGi4h8IgCgBIgEgCQjGiFjsgmIgCAAIgGgBQhEgNhGgGQg3gFg4gBIgBAAIgDAAIgBAAIAAlqIASABIACAAIAHAAQAsABAtADQEhAXEQBtIABAAIAHADQCRA7CLBWIAKAGIAzAgIAAABIAFADQDECCCMCaIABABIAEAFIAEAFIApAwIAAABIBFBeQBDBcA4C3QgNgCgLABIgNABIgEAAQhfADhQAiIgFACQgTAIgTAKIgBABIgCACQg4AfhkBUIgGgTg");
	this.shape_55.setTransform(250.1,64.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E56E97").s().p("AGEJgIgEgPIgCgIIgCgEIgBgCQglhsg/hnIgCgFIgGgIIgDgGIgBgBIgEgFIgFgJIgEgFIgGgKIAAgBIgEgFIgEgGIAAgBIgCgDIgCgBIAAgBIgDgEIAAgBIgDgEIgBgCIgEgFIgCgCIgDgGQiGi6ivh3IgBgBIgDgBIgGgFIgGgDIgGgFIgCgBIgEgCQi8h7jegmIgCAAIgGgBIgFgBIgHAAIgHgBIgBAAIgGgBQg8gLg+gGIgSgBQgngEgqgCIgBAAIgDAAIgLAAIgBAAIgHgGIgBgBIgBgBIgBgBIAAlrIALAAIAEAAIABAAIACAAIACAAIADAAIAEAAQAsACAtADIAAAAQEdAWEOBpIAEADIAAAAIAEABIABAAIABAAIAAABIAGABQCPA7CHBTIAGADIADACIABABIAIAEIAnAaIAFADIABAAIABAAIAEAEIAAAAIAGADQC8B+CKCYIAGADIADAFIABAAIABABIABABIACACIADAEIADADIAfAkIACAFIABABIABABIAHAHIAAABIA9BTIAGAKQA+BYAwCTIAKAeIACALIAAABIAAAAIAAAAQgNgCgIABIgFAAIgBAAIgCAAIgFAAIgEAAQhaABhNAeIgEADIgBAAIgEABIgFACIgdANIgCACIgCABIgEACIgCABIgCABQg0AchJA+IghAaIgCgBg");
	this.shape_56.setTransform(250.3,65.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E56E97").s().p("AF8JHQgmhsg+hmIgEgGIgEgIIgGgHIgCgFIgGgJIgLgRIAAgBIgDgEIgEgHIgBgBIgDgEIgCgBIgDgGIgDgFIgCgCQiKjCi3h6IgCgBIgDgCIgHgEIgFgEQjDh/jmgjIgCAAIgGgBIgFgBIgHgBQhDgMhGgGQgxgEgzgBIAAAAIgDAAIgMAAIgBAAIAAmAIALAAIAEAAIABAAIACAAIAFAAQAuABAvAEQEeAWEOBqIAEABIAAAAIAEACIADABQCTA7CLBVIAGADIADADIAwAeIAEADIABAAIAAAAIAFAEQC/B+CPCcIAEADIAFAFIABABIADAEIAkArIAEAEIABABIABABQAOATA0BKQBEBgAwCUIAJAdIAEAOIAAAAIAAAAIAAAAIgYgBIgBAAIgDAAQhfAAhRAeIgEACIgBAAQgUAHgSAKIgBABIgCABQg8AdhLBCQgLAJgaARQgHgUgBgHg");
	this.shape_57.setTransform(250.5,65.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E56E97").s().p("AGFJiIgCAAIgBgGIgFgRQgjhjg4heIgDgGIgFgIIgCgDIgBgDIgCgDIgCgCIgDgGIgCgEIgCgDIgCgCIgCgDIgEgHIAAgBIgBgBIgDgEIgEgGIgBgBIgCgEIgBgBIgBgBIAAgBIAAAAIgBgCIgDgDIgBgCIgBgBIgCgDIAAgBIgDgEIgBgBIgBAAIgBgCIgCgEIgEgFIgBgCQiDi1irh3IgBgBIgCgBIgFgDIgFgEIgGgEIgFgDIgBAAIgBgBIgDgDIgHgEIgFgDQi2h0jVgkIgCAAIgGgBIgFgBIgHgBIgGgBIgHgBIgBAAIgCAAIgGgBIgFgBIgHgBQg8gKg+gFIgPgBQgggDghgCIgBAAIgDAAIgLAAIgEAAIAAAAIgCAAIgGAAIgEAAIgCAAIgCgBIgBAAIgBgCIgGgFIAAgBIAAmCIAGAAIAEAAIABAAIACAAIABAAIABAAIACAAIABAAIADAAIABAAQAvABAuAEIABAAQEaAVELBnIAEACIAEABIACAAIACABIACABIABAAIAAAAIADABIADABQCQA7CIBTIAEACIABABIABABIADABIADACIAEADIAmAXIAEADIADACIABABIABAAIAAAAIAEADIABAAIAFAEQC7B7CNCZIADAEIACACIABACIADABIABACIABAAIAEAFIABABIADAEIAfAkIABABIADAEIABABIABABIABABIADADIABABIABABQAUAaAoA7IAFAHQBEBkAtCHIADAJIAGAUIADAJIABAFIADAJIAAABIAAAAIgBABIgMgBIgBAAIgBAAIgDAAIgGAAIgBAAIgDAAQhagBhMAaIgBABIgCAAIgBABIgHACIgEACIgBAAQgNAFgNAGIgBABIgBAAIgDABIgHAEIgCABIgCABQg7AchCA2IgKAIIgjAdIgBAAg");
	this.shape_58.setTransform(250.7,66.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E56E97").s().p("AGDJfQgkhtg9hmIgDgFIgFgIIgDgEIgBgDIgEgFIgFgKIgDgEIgHgLIAAgBIgDgFIgEgGIgBgBIgCgDIgBgBIgBgCIgBgBIgBgDIgEgFIgBgCIgGgHIgBgCQiGi9iyh5IgCgBIgCgBIgGgEIgGgEIgGgEIgGgEQi/h7jfgiIgCAAIgGgBIgFgBIgHgBIgGgBIgHgBQhHgMhJgGQgngDgpgBIgBAAIgDAAIgLAAIgEAAIAAAAIgCAAIgHgBIgEAAIgCAAIgBAAIAAmWIAFAAIAEAAIADAAIABAAIADAAIAEAAQAwABAvAEQEcAVENBoIAEACIAEABIAEABIADABQCUA7CLBVIADACIABABIAEADIAuAcIADACIADACIABABIABABIAAAAIAFADQC9B8CQCdIACADIADADIACACIADABIABACIABABIADAEIAkApIABABIADADIAAABIABABQAdAkAlA3QBKBtAsCFIAJAdIAEAOIAEANIgMgBIgCAAIgBAAIgDAAQhggChRAbIgBAAIgCABIgBAAQgUAGgTAKIgBABIgBAAIgCABQhDAehGA1QgdAVgQAVIgCACIgBgGg");
	this.shape_59.setTransform(250.9,67.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E56E97").s().p("AEdGCIgNgVIgSgeIgBgBIgMgRIgCgCQiLjIjAh9IgGgEQjKiDjvgeIgHgBQhLgNhOgGQgxgEgygBIgEAAIgNAAIAAmiIAFAAIAHAAQA0ABA0AEQEcAVENBnIAIADQCaA8CPBYIAzAgIAGAEQDBB+CUChIAFAGIAFAFIApAuIADAEQB+CcA9CxIASA9IgGgBQhlgEhUAbQgVAGgVAKIgCABQhJAgg/A8QgZAUgYAYIgEAEQgnh4hEhxg");
	this.shape_60.setTransform(251,68.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E56E97").s().p("AD/FSIgNgTQiNjLjFh+QjOiFj0gcQhMgNhQgGQgxgDgzgCIgPAAIAAmsIACAAQA5ABA4AEQEcAVENBlQC7BICqBvQDDB/CYCkQAbAbAYAdQCaC8A6DZQhkgIhWAZQgWAHgVAJQhuAthVBrQgwiVhbiJg");
	this.shape_61.setTransform(251.3,69.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E56E97").s().p("AGFJiIgCAAIgBgGIgFgRQgjhjg4heIgDgGIgFgIIgCgDIgBgDIgCgDIgCgCIgDgGIgCgEIgCgDIgCgCIgCgDIgEgHIAAgBIgBgBIgDgEIgEgGIgBgBIgCgEIgBgBIgBgBIAAgBIAAAAIgBgCIgDgDIgBgCIgBgBIgCgDIAAgBIgDgEIgBgBIgBAAIgBgCIgCgEIgEgFIgBgCQiDi1irh3IgBgBIgCgBIgFgDIgFgEIgGgEIgFgDIgBAAIgBgBIgDgDIgHgEIgFgDQi2h0jVgkIgCAAIgGgBIgFgBIgHgBIgGgBIgHgBIgBAAIgCAAIgGgBIgFgBIgHgBQg8gKg+gFIgPgBQgggDghgCIgBAAIgDAAIgLAAIgEAAIAAAAIgCAAIgGAAIgEAAIgCAAIgCAAIgBgBIgBgCIgGgFIAAgBIAAmCIAGAAIAEAAIABAAIACAAIABAAIABAAIACAAIABAAIADAAIABAAQAvABAuAEIABAAQEaAVELBnIAEACIAEABIACAAIACABIACABIABAAIAAAAIADABIADABQCQA7CIBTIAEACIABABIABABIADABIADACIAEADIAmAXIAEADIADACIABABIABAAIAAAAIAEADIABAAIAFAEQC7B7CNCZIADAEIACACIABACIADABIABACIABAAIAEAFIABABIADAEIAfAkIABABIADAEIABABIABABIABABIADADIABABIABABQAUAaAoA7IAFAHQBEBkAtCHIADAJIAGAUIADAJIABAFIADAJIAAABIAAAAIgBABIgMgBIgBAAIgBAAIgDAAIgGAAIgBAAIgDAAQhagBhMAaIgBABIgCAAIgBABIgHACIgEACIgBAAQgNAFgNAGIgBABIgBAAIgDABIgHAEIgCABIgCABQg7AchCA2IgKAIIgjAdIgBAAg");
	this.shape_62.setTransform(250.7,66.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E56E97").s().p("AGIJbIgGgQIgFgRIgDgKIgBgDIgCgIIgBgBIgGgSQgmhkg8hiIgDgFIgGgKIgDgDIgDgGIgEgGIgDgEIAAgBIgIgKIAAgBIgDgFIgBgBIgDgFIgDgFIAAAAIgBgBIgDgGIgGgGIgDgFIgNgTQiGi0ikh1IgBgBIgDgCIgFgDIgEgEIgSgNQi3h6jZgtIgCAAIgGgCIgCAAIgIgCIgTgDQg1gLg3gGIgVgBQgrgFgsgBIgBAAIgDAAIgCAAIgMgNIAAkwIAYABIAGAAIABAAIABAAIAGAAQAnABAmADIABAAQEjAXERBxIAFACIAGADQCMA7CIBUIADACIADACIABABIAIAFIAvAeIADACIACABIABABIAEACQDBCDCGCUIABACIAEAEIABABIABABIAAABIADADIABACIADAEIAiApIADADIACADIABABIABABQAaAjAkA3QBFBsAoCCIABAGIgBAAIgsAGIgZADIgMACIgZAFIgNACIAAABQg5ALg0AaIgBABIgBAAIgHAEIgDACQgPAHgNAKIgDABIgBABIgEADIgDACQg1Ajg9A+IgLAGg");
	this.shape_63.setTransform(249.2,61.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E56E97").s().p("AD6ElIgOgUQlcoDo2g7Qg5gGg7gBIAAknQA6ABA6AFQHGAkGUEAQD2CbCaCxQCbC1A8DOQjugMilDKQgriehjiZg");
	this.shape_64.setTransform(249,60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_64}]},1).wait(1));

	// 图层 1
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFA2B0").s().p("AjVT2QB5iVAxg1IAFgFQLTsjnGq3IgNgUQldoFo2g7Qg5gGg7gBIAAknQA6ABA6AFQHHAkGUEAQD2CbCZCzQEjFTgsGoQg0IIqaItQhPBChFApQgOAIh0BQg");
	this.shape_65.setTransform(250.8,133.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFA2B0").s().p("AjXTyQBuiGA3g8IAFgGIAFgEQA/hIA3hGQCxjhBUjbQBdj1gijqQggjaiHjOIgNgUIgDgEQiYjejAiJQjPiSj9guQg2gKg4gGQg5gFg7gCIAAkxQA6ABA6AFQEIAVD1BdQC3BFCrBtQDRCFCOCVIAwA1IAEAFQEYFLgjGdIgCAPIgBALQgjFBj/E+QiqDRkDDUIgNAKQhIA6hAAmIgSAMIhxBLQgIgegRgjg");
	this.shape_66.setTransform(251,133.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFA2B0").s().p("AjCUlQgJgYgNgcIARgXQBfhzA0g3IAFgGIACgCIADgCIADgEIAFgFQA5hBAxg/IAEgEQCkjSBYjMIAMgdQBUjXgUjRQgCgdgFgbQgci4hmiwIgKgPIgCgDIgcguIgNgTIgDgFQh1iniLh2QgtglgwghQiXhniwgyQhCgUhGgMIgKgCQgugHgvgEIgIgBIgBAAIgKgBQgugKgwgGIAAkyQA6ABA5AFIABAAQEJAUD1BdIAfAMQClBDCeBjIAaARQDAB9CGCMIAXAZIAZAcIAEAGIAQATIAEADQEDFCggGQIgCAOIgBAMIgBAEIgCAQIgBAKQgqE5jxEoIgQAUQipDHj4DFIgMAKIgBAAIgNAKQhBAxg7AlIgPAJIgDACIgLAHIhmBEIgEgLg");
	this.shape_67.setTransform(251.2,134.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFA2B0").s().p("AjDUlQgJgZgMgaIANgZQBehwA3g6IAFgGIACgBIADgCIADgDIAFgGQA6hCAwg9IAEgFQCkjQBbjOIAMgcQBWjVgWjTIgIg4Qgei4hnivIgKgPIgCgDIgcgtIgOgUIgDgFQh2imiOh0QgtglgwggQiZhlixgwQhCgShGgMIgKgBQgugHgwgEIgHgBIgCAAIgKAAQgogQgrgLIAAkzQA5ABA5AFIACAAQEIAVD2BcIAfAMQCmBDCeBjIAaARQC/B8CHCOIAXAZIAZAcIAEAFIARAUIADADQEEFCgfGPIgBAPIgBALIgBAGIgCAOIgBAMQgpE+jvEiIgQAUQitDGj5DBIgMAJIgBABIgNAKQhAAwg9AmIgOAJIgEACIgKAHQgkAWhCAuIgGgJg");
	this.shape_68.setTransform(251.4,134.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFA2B0").s().p("AjEUlQgIgagMgaIAKgZQBdhtA5g8IAFgGIABgBIAEgDIACgDIAGgGQA6hBAxg9IADgFQCkjPBejNIAMgdQBYjUgZjUIgIg4Qghi4hoiuIgJgQIgCgDQgOgWgPgWIgOgUIgDgFQh3iliRh0QgugkgvgfQibhjixgsQhEgShGgKIgKgCQgvgHgvgDIgIgBIgBAAIgKgBQgjgTgmgRIAAkzQA5ABA6AFIABAAQEJAVD2BbIAgAMQClBDCeBjIAaARQC+B7CICPIAYAZIAZAcIAEAFIARAUIADADQEFFBgeGRIgBAPIgBALIAAAFIgDAPIgBALQgnFGjsEbIgSAUQiwDFj6C+IgMAJIgBABIgNAJQhAAvg+AmIgOAJIgEACIgLAHQgkAXhBAtIgHgGg");
	this.shape_69.setTransform(251.6,134.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFA2B0").s().p("AjFUkQgJgagLgaIAHgZQBchrA7g9IAGgHIABgBIADgCIADgDIAGgGQA6hBAxg+IADgDQCkjPBgjNIANgcQBajTgbjWIgJg5Qgji4hpitIgKgPIgCgDIgdgtIgOgTIgDgFQh4ikiThzQgvgjgwgfQichhizgpQhDgQhHgKIgKgBQgugHgwgDIgHgBIgCAAIgKAAQgfgZgggVIAAk1QA6ABA5AFIACAAQEIAWD3BaIAfANQCnBCCeBiIAaASQC9B6CJCQIAYAYIAZAdIAEAFIARAUIADAEQEFFAgcGRIgBAQIgBALIAAAFIgCAOIgBALQgmFOjrEUIgRAUQizDEj8C7IgMAIIgBABIgNAJQhAAug+AmIgPAJIgEADIgLAGQglAYhAAtIgIgFg");
	this.shape_70.setTransform(251.7,135.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFA2B0").s().p("AjGUjQgJgagLgaIAEgZQBchoA9g/IAGgHIABgBIADgCIADgDIAFgGQA8hCAwg8IADgFQCkjMBjjOIANgcQBcjTgejXIgKg5Qgki3hqisIgKgPIgCgEIgegsIgOgUIgDgEQh5ikiWhxQgvgjgxgdQidhfi0gmQhEgQhGgJIgLgCQgugFgwgEIgIAAIgBAAIgKgBQgagcgbgbIAAk1QA6ABA5AEIACAAQEJAWD3BbIAfAMQCoBCCdBiIAbARQC8B7CKCQIAXAYIAaAdIAEAFIAQAUIAEAEQEFFAgaGRIgBAQIgBAKIAAAGIgCAOIgBAMQgkFUjpEOIgSAUQi2DEj9C2IgMAIIgBABIgNAJQhAAtg/AnIgPAJIgEACIgLAHQgmAYhAAsIgIgDg");
	this.shape_71.setTransform(251.9,135.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFA2B0").s().p("AjGUjQgJgbgMgZIABgaQBchmA/hBIAGgGIABgCIADgCIACgCIAGgHQA8hBAwg9IADgDQCkjMBmjOIANgdQBejQghjYQgEgdgGgcQgmi3hrisIgLgQIgCgDIgdgsIgOgTIgEgFQh6ijiYhwQgwgigygdQiehci1gjQhEgPhHgJIgLgBQgugGgvgCIgJAAIgBAAIgKgBQgVgigVghIAAk1QA6ACA5AFIABAAQEJAUD4BaIAgAMQCoBDCdBjIAaARQC8B5CLCRIAXAYIAaAdIAEAGIAQATIAEADQEFFBgXGSIgBAPIgBALIgBAFIgBAPIgBALQgjFcjnEHIgSAUQi6DDj+CyIgMAIIgBABIgNAJQhAAshAAnIgPAJIgDACIgMAHQgnAYg/AtIgIgBg");
	this.shape_72.setTransform(252.1,135.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFA2B0").s().p("AjcTuIgCgbQBbhjBChDIAGgHIABAAIACgCIADgEIAFgFQA9hCAwg8IADgEQCjjKBpjOIAOgdQBgjPgkjaQgEgdgGgcQgoi3htirIgKgPIgCgEIgegrIgPgVIgDgEQh8iiiahvQgwgigzgcQifhai3gfQhEgPhHgHIgLgCQgugEgvgDIgJAAIgCAAIgKAAIgfhNIAAk1QA6ABA5AEIACAAQEIAVD5BaIAfAMQCpBCCdBiIAbARQC7B5CMCTIAXAYIAaAdIAEAFIAQAUIAEADQEFFAgVGTIgBAPIgBALIgBAFIgBAPIgBALQgiFjjlEBIgRATQi+DCkACvIgMAIIgBABIgNAIQg/ArhBAoIgPAJIgEACIgLAHQgoAYg+AsIgJACQgKgcgLgYg");
	this.shape_73.setTransform(252.3,136.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFA2B0").s().p("AjcTsIgGgbQBbhhBEhEIAGgHIABgBIACgCIADgDIAFgGQA+hCAwg7IACgEQCjjJBsjOIAOgdQBijOgmjbQgFgdgGgcQgqi4huipIgLgQIgCgDIgegsIgOgTIgEgFQh8ihiehuQgwghgzgcQihhXi3gdQhFgNhHgHIgLgCQgvgEgvgCIgJAAIgBAAIgLgBIgVhWIAAk2QA6ABA6AFIABAAQEJAUD5BaIAgAMQCpBCCdBiIAbARQC6B5CNCTIAXAYIAaAdIAEAFIAQAUIAEADQEGFAgUGTIgBAPIgBALIAAAFIgBAPIgBALQggFqjjD7IgTAUQjBDAkACrIgMAIIgBABIgOAIQg+AqhCAoIgQAJIgDACIgMAHQgpAZg9ArIgKAEQgJgcgLgYg");
	this.shape_74.setTransform(252.4,136.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFA2B0").s().p("AjdTqIgJgbQBaheBGhHIAHgHIADgCIACgDIAGgGQA+hDAwg6IACgEQCjjIBvjPIAOgcQBkjNgpjcIgMg5Qgsi3huiqIgLgQIgCgDIgfgrIgPgUIgDgFQh+ifightQgxghgzgbQiihVi5gZQhFgNhHgGIgLgCQgvgEgvgBIgJAAIgCAAIgKAAIgLhhIAAk2QA6AAA6AFIACAAQEIAVD6BZIAfAMQCqBCCdBiIAbARQC5B4COCUIAXAXIAbAeIAEAFIAQATIAEAFQEGE/gSGUIgBAPIgBALIAAAFIgBAPIgBALQgfFwjhD1IgSAUQjFC/kCCoIgMAHIgBABIgNAIQg+AohDAqIgQAJIgEACIgLAHQgqAZg8AqIgLAHQgKgdgKgYg");
	this.shape_75.setTransform(252.6,137);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFA2B0").s().p("AjqTNQBehgBLhLIAFgFIAFgGQA/hDAwg6QCjjJBzjQQB4jZgvjtQgpjXiBjCIgLgQIgCgDQiOjNjFiBQjOiGj0gdQhLgNhNgGQgvgEgvgBIgLAAIgLAAIAAmiQA6ACA6AEQEbAVEJBkQC5BICpBtQDICBCXCjQAYAaAXAcIAEAEQEQFLgcGnIgBAPIAAALQgfGIjxDyQjMDDkLCmIgPAJQhEAshNAuIgQAJQguAchDAwQgQgvgQghg");
	this.shape_76.setTransform(252.8,137.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFA2B0").s().p("AjsTJICpipQBGhIAyg+QCijHB3jOQB6jXgwjtQgqjXiAjAIgOgTQiNjLjFiAQjOiFjzgcQhNgNhPgGQgygEgygBIgQAAIAAmsIADAAQA5AAA4AFQEcAVEMBlQC8BICpBvQDEB/CYCkQAaAdAZAdQEPFLgbGoIgBAaQgfGPjvDqQjWDIkUClIiiBiQgwAdhCAvQgQgxgQghg");
	this.shape_77.setTransform(253,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65}]}).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168.4,-0.9,164.9,268.8);


(lib.li_1_41_27318 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DA6990").ss(0.1,1,1).p("ANW0/QgZgBgZAAQoWAAnXEqQmEDzicEvQiFD/AfEoQA0IIKaIsQBPBDBFApQASAKARALQAJAGCmBT");
	this.shape.setTransform(85.4,134.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADlU+Qh7g9gmgUQgXgOgJgFQgIgFgJgFQhAgmhIg6QgGgFgHgGQgvgmgsgmQmDlOiWlPQhLimgPijQgakKBqjpQALgaANgZQCikzF+jvQAHgFAHgEQGEjxGugnQBWgIBXAAQATAAATABQAGAAAGAA");
	this.shape_1.setTransform(85.3,134.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADlU8Qh5g9gogVQgXgOgKgGQgIgFgIgFQhAgmhIg4QgHgFgHgGQgwgmgtglQmElFiWlVQhJingPiiQgYkKBrjqQAMgZANgZQCkk1F7juQAHgEAHgFQGDjvGugoQBWgHBXAAQATAAATAAQAGAAAGAB");
	this.shape_2.setTransform(85.3,135.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADmU7Qh3g+grgXQgXgNgJgGQgIgFgJgEQhBgnhIg3QgGgFgHgFQgxgmgtglQmHk9iVlbQhIingOiiQgXkKBtjqQAMgZANgZQCmk3F4jrQAHgFAHgEQGDjvGvgoQBWgHBXgBQASAAATABQAGAAAGAA");
	this.shape_3.setTransform(85.2,135.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADmU4Qh0g8gtgZQgYgOgJgFQgIgFgJgFQhBgnhIg2QgHgFgGgFQgyglgugkQmJk0iUliQhHingNijQgWkJBvjqQALgZANgYQCpk5F1jqQAHgEAHgFQGDjuGvgnQBWgIBXAAQASAAATABQAGAAAGAA");
	this.shape_4.setTransform(85.1,136);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADmU2Qhyg8gvgaQgYgOgKgFQgIgFgIgFQhCgnhIg1QgGgFgHgFQgygkgvgjQmMksiTlpQhGimgMikQgUkJBwjqQAMgZANgYQCqk7FzjoQAHgEAHgFQGDjtGvgoQBWgHBWAAQATAAATAAQAGAAAGAB");
	this.shape_5.setTransform(85,136.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADnU0Qhwg7gygcQgYgOgJgGQgIgEgIgFQhDgohIgzQgHgFgGgFQgzgjgwgjQmOkkiSluQhFiogLijQgSkIBxjrQALgZANgXQCtk9FwjmQAHgFAHgEQGDjtGvgnQBWgIBWAAQATAAATABQAGAAAGAA");
	this.shape_6.setTransform(84.9,136.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADnUyQhug7gzgdQgYgOgKgGQgIgEgIgFQhEgohHgyQgHgFgHgFQgzgjgxgiQmQkbiSl1QhDiogKijQgRkIByjrQAMgYANgYQCvk/FtjkQAHgEAHgFQGDjsGwgnQBVgHBWgBQATAAATABQAGAAAGAA");
	this.shape_7.setTransform(84.8,137.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADnUwQhrg6g2gfQgZgOgJgGQgIgEgIgFQhEgohIgxQgHgFgHgEQg0gjgxghQmSkTiSl7QhBipgKiiQgPkJBzjrQAMgYANgYQCxlBFqjiQAIgEAHgFQGDjrGvgnQBWgHBWgBQATAAASABQAGAAAGAA");
	this.shape_8.setTransform(84.8,137.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADoUuQhpg7g5gfQgYgPgKgFQgIgFgIgEQhFgphHgwQgHgEgHgEQg1gjgyghQmUkKiRmCQhAiogJijQgNkIB0jrQAMgYANgYQCzlCFojgQAHgFAHgEQGDjrGwgnQBVgHBWgBQATAAASABQAGAAAGAA");
	this.shape_9.setTransform(84.7,137.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADoUrQhng5g6ghQgZgPgKgFQgIgFgIgFQhFgohIgvQgHgEgGgEQg2gigyggQmXkCiQmIQg/iogIikQgMkHB2jsQAMgYANgXQC1lFFljeQAHgEAHgFQGDjqGwgnQBWgHBVgBQATAAASABQAGAAAGAA");
	this.shape_10.setTransform(84.6,138.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADpUpQhlg4g9gjQgZgPgKgGQgIgEgIgFQhFgphIgtQgHgEgHgEQg2gigzgfQmZj6iPmOQg+iogHikQgLkHB4jsQAMgYANgWQC3lHFijcQAHgFAIgEQGCjqGwgnQBWgHBVAAQATAAASAAQAGAAAGAB");
	this.shape_11.setTransform(84.5,138.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#DA6990").ss(0.1,1,1).p("ADpUnQhig4g/glQgSgKgRgKQhPguhPgxQg+glg7giQmbjxiPmVQg8ipgGijQgLkEB6jvQAOgaAOgZQC7lLFqjcQGCjpGxgnQBogIBnABQAGAAAGAB");
	this.shape_12.setTransform(84.4,139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// 图层 4
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAySJQiBhhgEgEQgCgCgCgDQg3gxg4g9QgDgCgCgCQrPscG4qyQAKgQALgQQGLpHKeAAQAXAAAXAB");
	this.shape_13.setTransform(105.8,145.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAwSBQhXhDgfgXQgRgNgCgDQgygtgyg2QgFgFgFgFQh6iFhWh9Qidjmg3jfQg+j7BIjzQAqiNBXiIQAFgJAGgIQAFgIAFgIQAFgHAFgIQAng4AqgzQCei/DFhuQDHhwDtgdQBXgLBcAAQAXAAAXAB");
	this.shape_14.setTransform(106,146.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAvR4QhWhBgggZQgRgNgCgCQgzgtgxg1QgFgFgFgFQh7iEhUh8Qicjjg3jhQg9j5BJjxQAriNBWiHQAFgIAFgIQAFgIAFgIQAFgIAFgHQAng5AqgyQCdi+DGhsQDHhtDrgdQBXgKBcAAQAWAAAXAB");
	this.shape_15.setTransform(106.1,147.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAtRwQhUg/gigbQgQgNgCgCQgzgtgxg0QgFgFgFgFQh7iEhVh5Qibjig2jhQg8j4BKjwQAsiNBUiGQAFgIAGgIQAFgIAFgHQAFgIAFgIQAng4AqgyQCci9DGhpQDIhrDpgcQBXgKBaAAQAXAAAXAB");
	this.shape_16.setTransform(106.2,148.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DA6990").ss(0.1,1,1).p("AArRnQhTg9gigcQgRgNgCgCQgzgtgxgzQgEgFgFgFQh8iDhUh4Qiajfg1jiQg7j2BKjwQAsiMBUiFQAFgIAGgHQAFgIAFgIQAFgHAFgIQAng4ApgyQCbi8DIhnQDIhpDngaQBWgLBaAAQAXAAAWAB");
	this.shape_17.setTransform(106.4,149.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAqRfQhRg8gkgdQgRgNgCgDQgzgsgwgzQgFgEgFgFQh9iDhTh2QiZjdg1jjQg6j0BMjuQAtiMBTiEQAFgIAFgHQAFgIAFgIQAFgIAFgHQAng4ApgyQCai6DIhlQDJhmDlgaQBWgKBZAAQAXAAAWAB");
	this.shape_18.setTransform(106.5,150);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAoRXQhPg7gmgeQgQgNgCgDQg0gsgvgxQgFgFgFgFQh+iChSh1QiYjag0jkQg5jzBMjsQAtiMBTiDQAFgHAFgIQAFgIAFgIQAFgIAFgHQAmg3AqgyQCZi5DJhjQDJhkDjgZQBWgKBYAAQAWAAAXAB");
	this.shape_19.setTransform(106.6,150.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAmRPQhOg7gngeQgQgOgCgCQgzgtgwgwQgEgFgFgEQh/iChRh0QiYjXgzjkQg4jyBNjrQAuiMBRiBQAFgIAGgIQAFgHAFgIQAFgIAFgHQAmg3ApgyQCZi3DJhhQDKhiDhgYQBVgJBYgBQAWAAAWAB");
	this.shape_20.setTransform(106.8,151.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAlRHQhMg6gpggQgQgOgCgCQg0gsgugvQgFgFgFgFQh/iBhRhyQiXjVgzjlQg2jwBOjqQAuiMBRh/QAFgIAFgIQAFgIAFgHQAFgIAFgIQAmg2ApgyQCYi2DKheQDKhgDfgXQBVgJBXgBQAWAAAWAB");
	this.shape_21.setTransform(106.9,152.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAjQ+QhLg3gpgiQgQgOgCgCQg0gsgvguQgEgFgFgFQiAiAhQhwQiWjTgyjmQg2juBPjqQAviLBQh+QAFgIAFgIQAFgHAFgIQAFgIAFgHQAmg2ApgyQCWi1DLhcQDLhdDdgXQBVgJBWAAQAWAAAWAA");
	this.shape_22.setTransform(107,153.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAiQ2QhJg2grgjQgQgOgCgCQg0gsgugtQgFgFgFgFQiAh/hQhvQiVjRgyjmQg0jtBPjoQAwiLBPh9QAFgIAFgIQAFgHAFgIQAFgIAFgHQAmg2ApgxQCVi0DLhaQDMhbDcgVQBUgJBVgBQAWAAAWAB");
	this.shape_23.setTransform(107.1,154.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAgQuQhIg1gsgkQgQgOgCgCQg0gsgugsQgEgFgFgEQiBh/hPhuQiUjOgxjoQg0jqBRjoQAwiLBOh7QAFgIAFgHQAFgIAFgHQAFgIAFgIQAlg2ApgwQCVizDKhYQDOhYDZgWQBUgIBVAAQAVAAAWAA");
	this.shape_24.setTransform(107.3,155.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAfQlQhGgzguglQg+g1g1gzQiIiChShxQiTjMgxjoQgyjpBRjnQA0iTBUiBQAKgPAKgPQAlg1ApgxQCUixDLhWQDPhWDXgUQBpgLBpAC");
	this.shape_25.setTransform(107.4,156.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// 图层 6
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#DA6990").ss(0.1,1,1).p("AAMgjQgMAcgLAr");
	this.shape_26.setTransform(109.6,265.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgLAkQALgrAMgc");
	this.shape_27.setTransform(109.6,265.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgLAlQALgrAMge");
	this.shape_28.setTransform(109.5,265.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgLAmQALgsAMgf");
	this.shape_29.setTransform(109.5,265.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgLAnQALgsAMgg");
	this.shape_30.setTransform(109.5,265.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgMAnQAMgrAMgi");
	this.shape_31.setTransform(109.4,265.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgMAoQAMgsANgj");
	this.shape_32.setTransform(109.4,266);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgMAoQAMgsANgk");
	this.shape_33.setTransform(109.3,266.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgMApQAMgsANgl");
	this.shape_34.setTransform(109.3,266.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgMAqQAMgsANgn");
	this.shape_35.setTransform(109.2,266.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#DA6990").ss(0.1,1,1).p("AgMArQAMgtANgo");
	this.shape_36.setTransform(109.2,266.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#DA6990").ss(0.1,1,1).p("AANgqQgNApgMAs");
	this.shape_37.setTransform(109.1,266.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32,p:{x:109.4,y:266}}]},1).to({state:[{t:this.shape_32,p:{x:109.3,y:266.1}}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32,p:{x:109.3,y:266.1}}]},1).to({state:[{t:this.shape_32,p:{x:109.4,y:266}}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).wait(1));

	// 图层 3
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E56E97").s().p("As+GoQAYhMAmhIQCdkuGDjyQFwjpGXgzQBygOB0AAIAyABIAAEnIgugBQqgAAmJJFIgUAgQhHBvgpByQiYjRkKBCg");
	this.shape_38.setTransform(87.7,56.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E56E97").s().p("As+GqIgBAAQAZhLAlhJIAGgLIAdg0QCjkLFZjZIA7gkQGAjjGrgfQBDgFBEAAIA1ABIAAExIgXAAIgVAAQhhAAhdALQjbAei8BjQi8BjiXCqQgqAvgnA0IgUAbIgeArIgUAgQg8BfgmBhIgLAdQidjNkJA+g");
	this.shape_39.setTransform(87.6,57.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E56E97").s().p("AmVI8IgCgBIgCgDQiejHkHA6IgCABQAYhMAlhIIABgCIAFgHIAAgCIAAAAIACgCQANgYAOgYIABgBIAAAAIAAgBIABgCQCikLFSjWIABgBIAEgEIAEgCIAxgdIACgCIADgCIAEgDQF7jeGkgjIAAAAIAEAAIABAAIAIAAIAFgBQA6gEA7AAIAFAAIAJAAIAFAAIApABIAFAGIAAEzIgDAEIgIgBIgBAAIgDAAIgEAAIgDAAIgIAAIgCAAIgHAAIgDAAIgIAAQhWAAhSAJIgBAAIgBAAIgLACIAAAAIgJABQjQAdi0BbIgEACIgBAAIgGADIgBABIgGADQi0BeiRChIgDAEIgGAGIgBABIgCAEQgkAogiAsIgCAEIgBACIgDAEIgCACIgCADIgMARIgCACIgDADIgBADIgBABIgaAlIgBACIgBACIgBADIgCABIgPAZIgDAEIgCACQg4BcglBeIgBADIAAABIgBACIgIAWIgBAAg");
	this.shape_40.setTransform(87.6,58.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E56E97").s().p("AmUI+IgCgDQigjFkIA2IgDAAQAZhLAlhJIAFgKIAAgBIABgBQAOgZAPgZIABAAIAAgBIABgCQCikPFTjYIABAAIAEgCIA2giIABAAIADgCIAEgCQF9jgGnghIABAAIADAAIABAAIAIgBQA9gDA9gCIAFAAIAJAAIAuACIAAFIIgIgBIgBAAIgDAAIgHAAIgIAAIgCAAIgKAAIgIAAQhWAAhUAJIgCAAIAAAAIgLACIgJABQjPAci2BaIgEACIgBAAIgGADIgIAEQi1BeiRCiIgDADIgEAFIgFAGQgkApghAtIgCACIgBACIgDADIgEAGIgNASIgBABIgCADIgBABIAAABIgbAmIAAACIgBACIgBABIgTAeIgBABQg5BegmBhIAAACIgBABIgIAVIgDgBg");
	this.shape_41.setTransform(87.5,59.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E56E97").s().p("AmTI/IgCgDQiijEkIAzIgCABQAYhMAlhJIAGgKIAAgBQANgaAPgZIABAAIAAgBIABgBQCkkTFQjWIABgBIADgCIA3giIACgBIACgBIAEgDQF9jfGngjIAEAAIABAAIAIAAQA9gEA9gBIAFAAIAJAAIAyABIAAFTIgKAAIgBAAIgDAAIgHAAIgJAAIgCAAIgKAAQhaAAhYAJIgCAAIgBAAIgLACQjTAbi7BcIgDABIgBAAIgGADQi8BeiSCnIgDADIgDAEQgnAsglAxIgBACIgBABIgCADIgQAXIgBABIgCADIgBACIgaAlIAAACIgCACIgTAeIAAABIgBAAQg5BeglBiIgBADIgIAWIgEgFg");
	this.shape_42.setTransform(87.4,60.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E56E97").s().p("AmQJCIgCgEIgCgCQiki/kHAvIgCAAIgBABQAYhNAlhJIAGgKIAAgBIAcgzIABAAIAAAAIABgBIAAgBQCkkWFOjWIABgBIACgBIADgBIA2ghIABgBIACgCIADAAIACgCQF8jgGngjIABAAIADAAIAEAAIABAAIAAAAIAIgBQA7gEA7gBIAEAAIAFAAIAJAAQAZAAAZABIAAABIAAFUIgFAFIgBABIgBABIgCACIgCAAIgIAAIgBAAIgCAAIgBAAIgJAAIgGAAIgDAAQhWAAhUAJIgCAAIgBAAIgLABIgEABIgCAAIgBAAQjPAai6BYIgDACIgBAAIgHADIgDACIgEABIgBAAQi5BciPCjIgDADIgEAEIgCAEIgEACQgkAqghAtIgCACIgBACIgCAEIgDADIgCABIAAACIgMAQIgBACIgBADIgCACIgBABIgBABIgEAFIgTAeIgBABIgDADIgBACIgCAEIgPAZIgBABIgBACIgBACQg4BdglBgIgBADIAAABIgHAVIgEgGg");
	this.shape_43.setTransform(87.3,61.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E56E97").s().p("AmOJDIgEgFQini/kKAuIAAAAQAYhMAmhKIAFgLIAcgyIABgBIABgBQClkZFMjWIACgCIA5gjIACgBIADgCQGAjjGqgjIABAAIAHAAQBAgFA/gBIAJAAIA7ABIAAFpIgJAAIgBAAIgEAAIgPAAIgCAAQhgAAheAKIgCAAIAAAAQjYAZjDBdIgCABIgBAAQjBBciUCqIgDADQgpAvglAzIgBACIgBABIgSAaIgBABIgDADIgYAmIgDADIgSAeIgBABQg4BfglBkIgHAVIgFgJg");
	this.shape_44.setTransform(87.2,62.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E56E97").s().p("AmIJMIgDgEIgDgDIgCgDIgCgBIgBgBQioi6kHApIgCAAQAZhLAkhKIABgBIAFgJIAAAAIAAgCQANgaAPgYIABgBIAAAAIAAgBQCmkbFHjUIACgBIABgBIACgCIADgCQAagRAagOIABAAIABgCIACgBIACgBIABgBIADgCQF7jgGmglIACAAIABAAIAGAAIADAAIABAAIAHgBQA8gEA7gCIAEAAIAEAAIABAAIAJAAIAxABIADAAIABAAIADAEIAAFsIgFADIgBACIgCAAIgLAAIgEAAIgBAAIgBAAIgBAAIgNAAQhZgBhXAKIgBAAIAAAAIgBAAIgBAAIgBAAIgLACIgDAAQjPAYi8BYIgEABIgBAAIgCACIgBAAIgEACIgEACQi9BXiPCoIgDADIAAAAIgDACIgCACIgDADQgkArgiAvIgCACIgBACIgBABIAAABIgCADIgBACIgNASIgBACIgBABIgCADIgBABIgCADIgDAEIgTAeIAAABIgDACIgCAGIgOAWIgBABIgCAEIgBABIgDAHQg0BXgjBeIgDAKIgEAJIgBACIgCgBg");
	this.shape_45.setTransform(87.1,63.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E56E97").s().p("AmLJJIgEgFIgCgBQipi4kIAmIgDAAQAZhMAlhKIAFgKIAAgBQANgaAPgYIABgBIAAgBQCokgFHjUIABgBIABgBQAcgSAdgRIABAAIABgBIACgBIACgCQF+jjGrglIACAAIABAAIAEAAIADAAQBAgFBAgBIAFAAIAEAAQAeAAAdABIADAAIABAAIAAF/IgDAAIgLAAIgEAAIAAAAIgCAAIgNAAQhZAAhYAJIgCAAIgBAAIgNACIgDAAQjPAYi/BWIgDABIgBAAIgIAEIgEACQi+BWiPCoIgEADIgEAEIgDADQgkAsgiAvIgCACIgBACIgDAEIgCACIgMATIgBABIgDAEIgCADIgCAEIgUAfIgDAEIgCAEIgPAZIgBABIgDAGQg2BcgkBiIgEAKIAAABIgFADIgFgHg");
	this.shape_46.setTransform(87,64);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E56E97").s().p("AmFJMIgFgEIgBgBQi0i1kBAhIgDAAIgBAAIgBAAQAYhNAlhJIAFgKIAAgBQANgaAOgYIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBQCpkiFCjSIABgBIACgBIABAAIACgCQAbgRAbgQIABAAIABgBIAAgBIABAAIAAAAIABgBIACgBIABgBIACgBQF7jiGoglIAEAAIABAAIABAAIABgBIABAAIACAAIABAAIAEAAIACAAIADAAQA9gFA9gBIAEAAIADAAIACAAIABAAIAFAAQAZgBAZABIAEAAIADAAIABAAIABAAIAAABIABABIAAGBIgBABIgFAGIgCABIgBAAIgCAAIgDAAIgEAAIgCAAIgEAAIgJAAQhTAAhSAIIgCAAIAAAAIgCAAIgBAAIgKABIgEAAIgDAAIgIABIgDAAQjIAYi7BRIgDABIgBABIgBAAIgBABIgBAAIgFADIgDABIgCABIgBAAIgFACIgEACQi6BUiNCiIgBACIgBACIgBABIgEADIgCACIgBACIgBABIgCACIgDADQghAogeAqIgCACIgBACIgBACIgFAFIgBACIgBABIgDAFIgCADIgGAKIgCACIgDAFIgBAAIgCADIAAACIgBABIgCAEIgRAaIgBABIgCADIgCACIgBADIgCACIgBADIgMAUIgBABIgBACIgBACIgBACIgCAEIgBACQg0BZgiBfIgDAJIAAAAIgEAEIgFgGg");
	this.shape_47.setTransform(87,64.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E56E97").s().p("AtCG1IgCAAIgCAAQAYhNAlhKIAFgKIAAgBIAbgyIABAAIAAgBIAAgBIAAgBQCrklFBjTIABgBIACgBQAcgSAdgRIABAAIABgBIABgBIABgBIACgCQF/jjGrgmIADAAIACAAIAAAAIABAAIAFAAIADAAQBAgGBAgBIAFAAIADAAQAcAAAcABIAFAAIACAAIABAAIABAAIAAGWIAAAAIgGAAIgFAAIgBAAIgOAAQhSgBhSAIIgCAAIAAAAIgOABIgDAAIgKABIgDAAQjIAWi+BQIgEABIgBAAIgIAEIgGADIgEACIgEABQi+BSiMCjIgDADIgEAFIgEAEIgCADIgDADQgiAogeApIgCADIgCACIgEAGIgCADIgDAEIgBADIgIAMIgCACIgEAGIgCADIgBACIgBABIgBADIgRAaIgEAGIgEAFIgBADIgOAYIgBABIgDAFIgBACQg1BdgkBkIgCAFQjDi+kEAeg");
	this.shape_48.setTransform(86.9,65.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E56E97").s().p("Al5JZIgSgQQixixkKAcIgCAAQAZhMAlhKIAGgLQANgaAOgZIAAgBQCrkqFBjTIA6glIADgCQGAjmGvgmIAHgBQBEgFBEgBIBAAAIAIAAIACAAIAAGhIgBAAIgPAAQhhgBhhAKIgCAAQjWAVjMBXIgDABQjJBTiSCvIgCADQgpAwglA0IgBACIgSAbIgCADIgZAoIgTAgQg2BgglBpg");
	this.shape_49.setTransform(86.8,66.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E56E97").s().p("AtIG0QAahSAohQQAOgaAOgZQC7lJFqjcQGCjpGxgnQBogIBnABIAMABIAAGsQhpgChpAKQjXAUjPBXQjNBTiSCxQgpAxglA1IgUAfQhTCAg0CSQi2jEkbAag");
	this.shape_50.setTransform(86.7,67.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E56E97").s().p("AmIJMIgDgEIgDgDIgCgDIgCgBIgBgBQioi6kHApIgBAAIgBAAQAZhLAkhKIABgBIAFgJIAAAAIAAgCQANgaAPgYIABgBIAAAAIAAgBQCmkbFHjUIACgBIABgBIACgCIADgCQAagRAagOIABAAIABgCIACgBIACgBIABgBIADgCQF7jgGmglIACAAIABAAIAGAAIADAAIABAAIAHgBQA8gEA7gCIAEAAIAEAAIABAAIAJAAIAxABIADAAIABAAIADAEIAAFsIgFADIgBACIgCAAIgLAAIgEAAIgBAAIgBAAIgBAAIgNAAQhZgBhXAKIgBAAIAAAAIgBAAIgBAAIgBAAIgLACIgDAAQjPAYi8BYIgEABIgBAAIgCACIgBAAIgEACIgEACQi9BXiPCoIgDADIAAAAIgDACIgCACIgDADQgkArgiAvIgCACIgBACIgBABIAAABIgCADIgBACIgNASIgBACIgBABIgCADIgBABIgCADIgDAEIgTAeIAAABIgDACIgCAGIgOAWIgBABIgCAEIgBABIgDAHQg0BXgjBeIgDAKIgEAJIgBACIgCgBg");
	this.shape_51.setTransform(87.1,63.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E56E97").s().p("AmQJBIgCgDIgCgCQiki/kHAvIgCAAIgBABQAYhNAlhJIAGgKIAAgBIAcgzIABAAIAAAAIABgBIAAgBQCkkWFOjWIABgBIACgBIADgBIA2ghIABgBIACgCIADAAIACgCQF8jgGngjIABAAIADAAIAEAAIABAAIAAAAIAIgBQA7gEA7gBIAEAAIAFAAIAJAAQAZAAAZABIAAABIAAFUIgFAFIgBABIgBABIgCACIgCAAIgIAAIgBAAIgCAAIgBAAIgJAAIgGAAIgDAAQhWAAhUAJIgCAAIgBAAIgLABIgEABIgCAAIgBAAQjPAai6BYIgDACIgBAAIgHADIgDACIgEABIgBAAQi5BciPCjIgDADIgEAEIgCAEIgEACQgkAqghAtIgCACIgBACIgCAEIgDADIgCABIAAACIgMAQIgBACIgBADIgCACIgBABIgBABIgEAFIgTAeIgBABIgDADIgBACIgCAEIgPAZIgBABIgBACIgBACQg4BdglBgIgBADIAAABIgHAVIgEgHg");
	this.shape_52.setTransform(87.3,61.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E56E97").s().p("AmVI8IgCgBIgCgDQiejHkHA6IAAAAIgCABQAYhMAlhIIABgCIAFgHIAAgCIAAAAIACgCQANgYAOgYIABgBIAAAAIAAgBIABgCQCikLFSjWIABgBIAEgEIAEgCIAxgdIACgCIADgCIAEgDQF7jeGkgjIAAAAIAEAAIABAAIAIAAIAFgBQA6gEA7AAIAFAAIAJAAIAFAAIApABIAFAGIAAEzIgDAEIgIgBIgBAAIgDAAIgEAAIgDAAIgIAAIgCAAIgHAAIgDAAIgIAAQhWAAhSAJIgBAAIgBAAIgLACIAAAAIgJABQjQAdi0BbIgEACIgBAAIgGADIgBABIgGADQi0BeiRChIgDAEIgGAGIgBABIgCAEQgkAogiAsIgCAEIgBACIgDAEIgCACIgCADIgMARIgCACIgCADIgCADIgBABIgaAlIgBACIgBACIgBADIgCABIgPAZIgDAEIgCACQg4BcglBeIgBADIAAABIgBACIgIAWIgBAAg");
	this.shape_53.setTransform(87.6,58.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E56E97").s().p("As+GoQAYhMAmhIQCdkuGDjyQHXkrIWABIAyABIAAEnIgugBQqgAAmJJFIgUAgQhHBvgpByQiYjRkKBCg");
	this.shape_54.setTransform(87.7,56.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38}]}).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_54}]},1).wait(1));

	// 图层 1
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFA2B0").s().p("AA2ToIgjgVQhFgphPhDQqaosg0oIQgfkoCFj/QCckvGEjzQHXkqIWAAIAyABIAAEnIgugBQqgAAmJJHIgVAgQm4KyLOMcIAEAEQA4A9A3AxIAEAFQAEAECDBhQgOAfgLAqQimhTgJgGg");
	this.shape_55.setTransform(85.4,134.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFA2B0").s().p("ABGTtIghgTIgSgKQg/gmhGg4IgQgNQguglgqglQl/lJiYlLQhMijgSihIgBgSQgZj9BhjhQALgbAOgbIAIgRQCdktF5juIAMgIQF4jsGhgvQBmgLBnAAIA2AAIAAEyIgpAAIgMAAQhzAAhqASQjnAljDB2Qi7ByiXDAQgjAtghAwIgKAPIgLASIgJAPQhZCPgnCVQhADsBCD4QA5DcCcDgQBTB4B0CBIAOAOQAwAzAxAsIAVARIB1BZQgNAdgMAsIifhRg");
	this.shape_56.setTransform(85.3,134.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFA2B0").s().p("ABcT2IgZgMIgJgGIgQgJIgIgEIgSgLQg1ghg8gtIgOgKIgHgFIgPgMIhHg6IgTgPQl6k9iYlLIgEgKQhJihgSicIgBgIIgBgQIAAgBQgXj9BjjiIACgEQAKgZANgZIABgDIAHgNIABgEQCgkrF1jrIALgIIALgGQFzjmGcguIAXgDQBagIBcgBIAbABIAQAAIAJACIAAEyIglADIgKABQgWACgVAEIgEAAQhXADhTAMIgrAHQjNAnizBoIgVAOQixBtiOC0IgJAMQgfAngcApIgJAPIgBABIgIAKIgEAHIgGAJIgDAGIgEAHQhVCKgoCRIgBACQg/DiA6DtIAFAWQA2DPCNDSIASAaQBJBoBmBxIANAOIAMAQIAOAOQAfAgAfAeIATARIARAQIAVARIBQA7IAgAeQgIASgHAXQgGANgGAPIiGhFg");
	this.shape_57.setTransform(85.3,135.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFA2B0").s().p("ABaTzIgZgNIgJgGIgQgJIgIgEIgSgLQg2ghg7gsIgPgKIgGgFIgQgMIhIg4IgTgQQl8k1iWlSIgFgKQhGiggRidIgBgIIgBgQIAAgBQgVj8BkjhIACgEQALgaAMgYIACgDIAHgOIABgCQCikuFyjpIALgIIALgFQFzjmGcguIAYgCQBagIBbgBIAbAAIAQABIAIACIAAEyIghAHIgJADIgmALIgEAAQhXADhSALIgsAHQjNAli0BlIgWANQiyBriPCyIgKAMQgeAngdAqIgJANIgBABIgHALIgEAHIgGAJIgEAGIgEAHQhVCKgoCQIgBACQhBDjA4DtIAGAVQA1DRCODRIARAaQBKBnBmBwIANAOIANAQIAOAOQAfAgAfAdIATASIARAPIAVARIBQA8IAbAfQgHASgIAYQgHAJgGANIiGhFg");
	this.shape_58.setTransform(85.2,135.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFA2B0").s().p("ABXTvIgZgNIgJgGIgQgJIgIgEIgSgLQg2ghg7grIgPgKIgHgFIgQgMIhIg3IgTgPQl+ktiVlYIgEgKQhFihgQidIgBgIIgBgPIAAgCQgTj7BmjhIACgEQALgaAMgYIACgDIAHgOIABgDQClkvFvjmIALgIIALgGQFzjlGcgtIAXgCQBagJBcAAIAbABIAPAAIAIAEIAAExIgdAMIgIAEIgiAPIgEAAQhWAChTALIgrAHQjNAii2BjIgWANQi1BoiPCxIgJAMQgfAmgcAqIgJAOIgBABIgIAKIgEAHIgGAKIgEAGIgEAHQhVCJgqCRIgBACQhCDiA4DtIAFAVQA1DTCODOIARAaQBKBnBoBwIALAOIAPAQIAOAOQAeAfAgAdIATASIASAPIAUARIBQA7IAWAhQgIATgHAWIgPATQhXgtgvgag");
	this.shape_59.setTransform(85.1,135.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFA2B0").s().p("ABVTsIgZgOIgJgGIgQgJIgIgEIgTgLQg2ghg7gqIgPgLIgGgEIgRgMIhJg2IgTgPQl/kliUleIgFgKQhDiigOidIgBgIIgBgPIAAgBQgRj7BnjhIACgEIAYgyIABgDIAIgNIABgDQCnkwFsjlIALgHIALgHQFzjjGcgtIAYgCQBagJBbAAIAbABIAPAAIAHAFIAAExIgZAQIgHAFIgdAUIgEAAQhWABhTALIgrAGQjNAhi4BgIgWAMQi2BliQCwIgJAMQgfAngdApIgJAOIgBABIgHALIgFAHIgGAJIgDAGIgFAHQhUCIgsCRIgBACQhEDjA3DtIAGAVQA1DUCNDNIASAZQBKBnBoBvIALAOIAQAQIAOAOQAeAfAgAdIAUARIARAPIAVARIBQA8IAQAiQgHATgHAWIgRAOIiGhHg");
	this.shape_60.setTransform(85,136.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFA2B0").s().p("ABSToIgYgOIgKgFIgQgKIgIgEIgSgLQg3ghg7gpIgPgLIgHgEIgPgLIhLg2IgUgOQmAkdiTllIgEgKQhCiigNidIgBgIIgBgPIAAgBQgPj6BpjhIACgEQALgaAOgYIABgDIAIgNIAAgDQCqkyFpjjIALgHIALgGQFzjjGcgsIAXgCQBagJBbAAIAbABIAQAAIAFAGIAAExIgUAUIgGAGIgYAZIgEAAQhWABhSAKIgsAGQjNAei5BeIgXAMQi5BiiPCvIgKAMQgfAmgcApIgJAOIgBABIgHALIgFAHIgGAJIgEAGIgFAIQhUCHgtCRIgBACQhGDjA3DtIAFAVQA1DVCNDLIASAaQBKBlBqBvIALAOIAQAQIAOAOQAeAeAgAeIAUARIARAPIAVARIBQA7QAEARAHATQgHATgHAWQgKAEgJAFIiGhIg");
	this.shape_61.setTransform(85,136.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFA2B0").s().p("ABQTkIgZgOIgJgFIgRgKIgIgEIgSgLQg3ghg7gpIgPgKIgHgEIgQgLIhLg1IgUgNQmCkWiRlrIgEgKQhBiigLieIgBgHIgBgQIAAAAQgOj6BrjhIACgEIAZgxIABgDIAIgOIABgDQCskzFmjgIALgHIALgHQFzjhGcgtIAXgCQBagIBbAAIAbAAIAQABIAEAGIAAEyIgQAYIgFAHIgTAdIgEAAQhWABhTAJIgrAGQjNAdi7BbIgXALQi8BgiPCuIgJAMQgfAmgdAoIgJANIgBABIgHAMIgFAHIgGAJIgEAGIgEAIQhVCGguCSIgBACQhHDjA2DsIAFAVQA0DWCNDLIATAZQBJBlBrBvIAMANIAPAQIAPAOIA+A7IAUASIASAPIAUAQIBQA7QACASAEAUQgHATgGAWQgLABgKADIiGhJg");
	this.shape_62.setTransform(84.9,136.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFA2B0").s().p("ADTUpIiFhJIgZgOIgJgGIgRgKIgIgEIgSgKQg4gig6goIgQgKIgGgDIgRgMIhMgzIgUgOQmEkOiPlxIgFgKQg+iigLieIAAgHIgBgQIAAgBQgMj4BsjiIACgDIAZgyIACgCIAIgOIABgDQCuk1FjjeIALgHIALgGQFzjgGcgsIAYgDQBagHBaAAIAbAAIAQAAIADAIIAAExIgMAdIgEAIIgOAhIgEAAQhVABhUAIIgrAFQjNAbi8BZIgYAKQi+BeiPCtIgJAMQgfAmgdAoIgJAMIgBABIgIAMIgEAHIgGAJIgEAHIgFAIQhVCFgvCSIgBABQhJDkA1DsIAFAVQA1DXCNDJIASAaQBKBkBqBuIANAOIAQAPIAPAOQAeAeAhAeIAUARIARAOIAVAQIBQA8QgBASACAUIgOArIgXgCg");
	this.shape_63.setTransform(84.8,137.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFA2B0").s().p("ADRUkIiFhKIgZgOIgKgGIgQgKIgIgEIgRgKQg5gig7gnIgQgKIgGgDIgRgLIhNgzIgUgNQmFkGiPl4IgEgKQg9ijgJieIgBgHIAAgPIAAgBQgKj3BtjiIACgEIAagxIABgDIAIgNIABgDQCxk2FhjcIAKgHIAMgHQFyjgGdgrIAXgCQBagIBbAAIAbAAIAPABIACAIIAAEyIgIAgIgCAKIgKAmIgEAAQhVAAhUAIIgrAFQjMAZi/BVIgXALQjBBaiPCsIgJAMQgfAlgdAoIgJAOIgBABIgIALIgFAIIgGAJIgEAGIgFAIQhUCEgxCSIgBADQhKDjA0DsIAFAVQA0DZCNDHIATAZQBKBkBrBuIANANIAQAPIAPAPIA/A6IAUARIASAPIAUAQIBQA6QgDAUgBAWIgNApIgZgGg");
	this.shape_64.setTransform(84.7,137.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFA2B0").s().p("ADPUeIiGhKIgYgPIgKgFIgRgLIgIgEIgQgJQg6gjg6glIgRgLIgGgDIgRgLIhOgxIgUgNQmHj/iNl9IgEgLQg7ijgIidIgBgIIgBgPIAAgBQgHj2BujiIACgEIAagxIACgDIAIgNIABgDQCzk4FejaIAKgGIAMgHQFzjfGcgqIAXgDQBagIBbABIAbAAIAPAAIABAKIAAExIgEAlIgBALIgFArIgEAAQhVgBhTAHIgsAFQjMAXjABTIgYAKQjDBXiPCrIgKAMQgfAmgdAnIgJANIgBABIgHAMIgFAHIgGAJIgEAHIgFAIQhVCDgxCTIgBACQhNDkA0DrIAFAVQA0DaCNDGIASAZQBKBjBsBtIAOAOIAQAPIAPAOIA/A6IAVARIASAPIAUAPIBQA7QgGAUgEAXIgNApIgagLg");
	this.shape_65.setTransform(84.6,138.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFA2B0").s().p("ABHTOIgigVIgRgKQhGgohHgtIgRgKIhmg+QmZj6iPmOQg+iogHijIgBgXQgGj4BzjkIAcg0IAJgQQC3k9FjjaIAMgHQF9jjGpgnQBogJBoABIAPAAIAAGiIgEAAQhqgChqALQjYAWjOBZQjLBYiTCyQgkAsghAuIgJANIgLARIgJAOQhUCCgzCTQhPDlAzDtQAxDmCUDOQBOBsB8B8IAOAOQAsArAzAsIAUARQAtAkBJA0QgPAogMAuIiihbg");
	this.shape_66.setTransform(84.5,138.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFA2B0").s().p("ABITKIgjgUQhPguhPgxIh5hHQmbjxiPmVQg8ipgGijQgLkEB6jvQAOgaAOgZQC7lLFqjcQGCjpGxgnQBogIBnABIAMABIAAGsQhpgChpAKQjXAUjPBXQjNBViSCxQgpAxglA1IgUAfQhUCBg0CTQhRDkAyDrQAxDoCTDMQBSByCGCCQA1AzA+A0QAuAlBIA0QgPAogNAvIihhdg");
	this.shape_67.setTransform(84.4,139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55}]}).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,172.9,271.1);


(lib.li_1_39_12250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_80_1165();
	this.instance.setTransform(-56,-49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-49.7,112,100);


(lib.li_1_38_7228 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_92_28377();
	this.instance.setTransform(-11.4,-94.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-94.6,23,189);


(lib.li_1_37_67736 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_83_1612();
	this.instance.setTransform(-42.8,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,-72.5,86,145);


(lib.li_1_36_66332 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap22复制2();
	this.instance.setTransform(-40.3,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-72,81,144);


(lib.li_1_35_1642 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_65_23749();
	this.instance.setTransform(-16.1,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-19.9,37,40);


(lib.li_1_34_59339 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_69_92184();
	this.instance.setTransform(-18.4,-19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-19.8,34,40);


(lib.li_1_33_67402 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_77_65783();
	this.instance.setTransform(-11.6,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-13.4,23,27);


(lib.li_1_30_79503 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap37复制2();
	this.instance.setTransform(-65.2,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-113.2,131,223);


(lib.li_1_29_5336 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_318_5381();
	this.instance.setTransform(-65.2,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-113.2,131,223);


(lib.li_1_28_41306 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_67_28259();
	this.instance.setTransform(-159.9,-172.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-172.8,320,346);


(lib.li_1_27_44496 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_72_65837();
	this.instance.setTransform(-16.6,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-46.1,34,91);


(lib.li_1_26_37912 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_68_3736();
	this.instance.setTransform(-17.4,-52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-52.9,34,105);


(lib.li_1_25_22475 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_84_19083();
	this.instance.setTransform(-139,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-52,282,108);


(lib.li_1_22_34717 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_75_37208();
	this.instance.setTransform(-10.1,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-9.2,20,19);


(lib.li_1_21_95805 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_64_65496();
	this.instance.setTransform(-17.4,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-17.9,35,36);


(lib.li_1_18_16614 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_71_37724();
	this.instance.setTransform(-66.7,-72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-72.3,129,152);


(lib.li_1_9_54616 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEDEF").s().p("AlweUQjPAnArkfQonjwFJmGQhxhTAqiNQmMpwKAjPQjJjOB+jRQiOhCiPCHQgur4KmCaQh4jCD4hQQgziaj1CAQAZiyBsh1QBmhuCKgUQCLgUB2BTQCDBbA8C+QERAygTDMQGoh3h9HrQBHA5gUBdQDyBUgBFGQBlgDBNB9QAmA9AWBNQAVBJAGBVQALCTgmCDQgLAogQAmQhOC9ioBpQG8GfmsGMQgaByg6A6Qg7AcgegeQgjBeg/giQgmBrhNAgQhDAdhDgjQhBgigQhCQgRhJA8hDQilBoiBhOQhRDxjRAUQhEAqg/AAQibAAhuj7gAgtouQByFTnFESQA/BNgMBwQGPGPkFHiQE5ARAwEdQAsgoAqgdQhvjmCniuQjnjiCjhsQhnkDDujwIAFgCQhXljCSiUQidhMhukNQg3B9iiAugAXOf4QADgcAMgkQAthuBRAAIAAgGQgpiFCHhJQhGhnBqgmQB2gOgWBjQgXBGAKA9QA8iYB+CMQDOEEkjBoQgzA9hpgUQhtAfhFAAQiFAAAMhxgA+rjWQhJgPg1g3IgNgPIAGgFQhAmBDaBTQgahnhaAIQAKkwESBEQBEhFBfAeQjcizE5AmQEhE7lwBrQAIAsgfAfIADAEQCLCcj0CKQgDBKhTAOQg0AZg2AAQgYAAgZgFgAXq28QhBgWg1g6Qg4g+gRhOQAeAPAMgpQhpkmD+gjQgWg1AKgmQAKgiAigOQAigOAuAMQAuAMAmBMQAtBjgOBgQjMA5AhB5QE2ixAHFrIAAAAQgaAMghACQhIADg/g2QgKBOg2AbQgYANgeAAQgcAAghgMg");
	this.shape.setTransform(217.4,230.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDF7F5").s().p("EgEOAkxQiXgshfh8QhiiAAHicQiOAhh0hKQhphDg6iHQg4iEAJiQQAJiYBPhtQhLhKAUh5QiVgRhgh+QhXhygTilQgSiiA3iGQA7iQB6gzIgEgbQgHhSA0g1Qhyh0gKjLQgKi4BMizQBLi0B2hGQCChNB/BkQgHijBvhfQgpjNBhi+QBZiwCphhQCshjCnAgQC8AiBzC7QC+ATB3CzQHQhhBwPAQDKD1ihE+QABlGjyhTQAUhehHg4QB9nsmoB3QATjMkRgxQg8i/iDhbQh2hTiLAVQiKAUhmBtQhsB2gZCxQD1iAAzCaQj4BQB4DDQqmiaAuL3QCPiHCOBDQh+DQDJDRQqADMGMJwQgqCOBxBTQlJGFInDwQgrEfDPgmQCbFgDxiPQDRgVBRjxQCBBPClhpQg8BEARBJQAQBCBBAiQBDAiBDgcQBNghAmhqQA/AhAjhdQAeAeA7gcQghAhgsAPQgPBRg9giQkbIflimxQiADNiyBMQhbAohdAAQhCAAhBgTgAXKduQgthVAthmQARgmAdgnQArkUEGA9QGGiEiOFoQh+iMg8CZQgKg+AXhGQAWhih2AOQhqAlBGBnQiHBKApCEIAAAHQhRAAgtBtQgMAkgDAdQgmgjgVgmgEgg0gHgQgNhQAmhOQiTjmFnjTQiKi3EygxQDkjOAEFOQk5gmDcC0QhfgehEBEQkShEgKEwQBagHAaBmQjahTBAGCIgGAEQgpgygMhBgAeW5DQgHlqk2CwQghh4DMg5QAOhggthkQgmhMgugMQgugMgiAOQgiAOgKAjQgKAlAWA2Qj+AiBpEmQgMApgegPQj9inEDjjQgOkJDiAyQEYgtgoFiQBPBIgBBnQBWA8AQBGQAOA/gpAwQgTAXgaAMg");
	this.shape_1.setTransform(211.9,237.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,428.6,474.5);


(lib.li_1_8_88488 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEDEF").s().p("AVWe9QhKgGg6g4Qg/inA1gtQBQhJB7B2QhAjnBig5QAqgZBHAHQgTgsA1gbQDUhaBkB1QA7BGAUCRQggAlAVAMQBBAjgPB0QgSCUnOA3Qg8Aeg4ABQhGgIgGg+gAhkeVQnoBdCJmiQg6BKhnAAQgfgBgjgGIgBAAQg0gLg9gZQihhCAfi6QAQhcA9h5QAGg7A/gmQApgYBAgQQh/hagThuIAAgDQgNhVAxhhQjvg6AYkQQAHhSAig2QBChpCpAFQAQAEASABIAkABQglgFghgBQjDgngEklQgElYFmhqQAthOBKgeIADgCIgbhQQALmxEghQIBQgPQFtgoBjE0QDXhiAtCUQE2A/jXGSQFtBpirCxIgGAGIANAAIAFAGQAYAfANAkQALAcAAAfQAAAhgFAiQgJA4gpAnIg2AxQgdAagfAYQgnAegdAmQgCAEAIAJIAkArQAmAwgFA7QgGBFgeA8QAzAVArAhQARANAOAPQAkAmATAxQASAuAMAwQAFARADASQAJAzACA0QAAASgDASQgHApgLApQgDALABAJQACAJAKAGQAbAOAYAUQAMAKALALIAHAAIATAMQB9BbgdCvQgUB7hJBOQhCBGhtAiQAkDMjQgQQAKAngUAeQjLBjiWiFQgWgTgUgYIgfAlQgtAygsAjIgBABQhgBLhdAAQhHAAhIgvgAAtRxIAHgBIgGgCIgBADgAQ3QIIAAgCIgDgCIADAEgA6WkxQgqASg1gTIgtAEQiThDBFhDQh5gVgOhgIADAAIgDgBQgGgsAQg6QAihjBqABQA/ABBaAlQAtgVAtAnQhikkE5geIASAJQB6BPgWC/QgCAagIAWIgHAQQgcA3hLAdQB4Bii5CxQgjAWgeAQQgVAHgUAAQgrAAgngggATE3aQgqADgigRQhQiFBQhMQAKgKAKgIQBOg+BiAvQhNhoAshPQAGgJAHgJQBChVBZAkQBhhbCFBYQAWAPARAUIAJgHQCJBfAPCEQAMBohkAgQgcAJgkAEQhoDri1haQhGAwg3AAQhKAAgxhYg");
	this.shape.setTransform(212.1,217.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDF7F5").s().p("EgD8AheQm5h9AojwQg6AKhKgMIgRgHIgBgBQjyhlgRiXQgBg+AJgzQAgi+CmglQgzgYgVg7IgCgEQglhwBWhtQmhgJgdlGQgfl7EMhGQgLgTgJgXQg4iDCBhKQjajEBQkAIAIgSQBVi5CZhjQChhoCjBgQhfkLB4ieQDflAEmgYQEkgYCRElQCVg0AfCVQC7iAC8DaQDMDqhyE/QDgAZhaFYIABAHQBMAzARBdQARBYgdBVQgeBXhGA6QgeAZghAVIgxAdQgHAEgHADIgHAEQAZAlgRAsQgBAFAGAFQAUANAVALQA6AdAqAzIA1BBQAUAYAQAaQAyBTgFBhIgCA+QgCBDgeA+QgKAXgOAUQgIANgMALIgPAOQgXAUgZARIgGAJIgTgMIgHAAQgLgLgMgKQgYgUgbgOQgKgGgCgJQgBgJADgLQALgpAHgpQADgSAAgSQgCg0gJgzQgDgSgFgRQgMgwgSguQgTgxgkgmQgOgPgRgNQgsghgygVQAeg8AGhFQAFg7gmgwIgkgrQgIgJACgEQAdgmAngeQAfgYAdgaIA2gxQApgnAJg4QAFgiAAghQAAgfgLgcQgNgkgYgfIgFgGIgNAAIAGgGQCrixlthpQDXmSk2g/QgtiUjXBiQhjk0ltAoQggADgeAHIgSAFQkgBQgLGxIAbBQIgDACQhKAegtBOQlmBqAEFYQAEElDDAnQipgFhCBpQgiA2gHBSQgYEQDvA6QgyBhAOBVIAAADQATBuB/BaQhAAQgpAYQg/AmgGA7Qg+B5gPBcQgfC6ChBCQA9AZA0ALIABAAQAjAGAfABQBnAAA6hKQiJGiHohdQCgBrCsiHIA+BYQh7Cej7AAQhhAAh0gYgATjeCQgfAXhCghQh8hHBKikQArhVArgiQBIg6BHBWQg3hGAhhPQAihPCBA7QgwhLDQhcQDohACTCtIABABQB0CrhaBdQgUiRg7hGQhkh1jUBaQg1AbATAsQhHgHgqAZQhiA5BADnQh7h2hQBJQg1AtA/CnQA6A4BKAGQAGA+BGAIIgGABQh6AAhoiJgA7MkrQA1ATAqgSQA5AwBCgXQhEAjgxAAQhCAAgjg9gA/pmjQgTh8AugDQAOBgB5AVQhFBDCTBDIgSAAQi0AAgqh8gEggMgLHQA3hnCbgCQgIhjBkgzQA+ggAuBPQBci0CoBWQk5AeBiEkQgtgngtAVQhaglg/gBQhqgBgiBjQgQA6AGAsQh2g0A4hwgARL5OQgziEB+gVQiUgLAuiBQA+icCWBbQA3ilC+gZQC9gaBMDYIgJAHQgRgUgWgPQiFhYhhBbQhZgkhCBVQgHAJgGAJQgsBPBNBoQhigvhOA+QgKAIgKAKQhQBMBQCFQg3gbgfhSg");
	this.shape_1.setTransform(208,216.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF99CC").s().p("AkAARIABgBQArghAtgyIAfglQAVAYAVATQCVCDDKhhQggAthrAYQiuAnhDhrQgOAtgeAwIgDAEIgDAFIgWAdg");
	this.shape_2.setTransform(261.1,406.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AJvS/IACADIAAACIgCgFgApfy4QAegHAhgDIhRAOIASgEg");
	this.shape_3.setTransform(257.5,198.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,416.2,433.3);


(lib.li_1_16_46535 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// 课
	this.instance = new lib.li_1_11_73643("synched",0);
	this.instance.setTransform(57.5,23);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).to({scaleY:0.91,y:71.8,alpha:1},3).to({scaleY:1.08,y:58.9},3).to({scaleY:0.98,y:64.1},3).to({scaleY:1,y:63},3).wait(15));

	// 堂
	this.instance_1 = new lib.li_1_10_56576("synched",0);
	this.instance_1.setTransform(145.5,28.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleY:0.91,y:77.1,alpha:1},3).to({scaleY:1.08,y:63.8},3).to({scaleY:0.98,y:69.3},3).to({scaleY:1,y:68.1},3).wait(12));

	// 回
	this.instance_2 = new lib.li_1_9_2226("synched",0);
	this.instance_2.setTransform(255,18.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleY:0.91,y:67.3,alpha:1},3).to({scaleY:1.08,y:54.3},3).to({scaleY:0.98,y:59.6},3).to({scaleY:1,y:58.5},3).wait(9));

	// 顾
	this.instance_3 = new lib.li_1_8_1223("synched",0);
	this.instance_3.setTransform(352.5,15.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({scaleY:0.91,y:64.6,alpha:1},3).to({scaleY:1.08,y:51.1},3).to({scaleY:0.98,y:56.7},3).to({scaleY:1,y:55.5},3).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-31.4,120,107);


(lib.li_1_58_1340 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_59_76794("synched",0);
	this.instance.setTransform(-0.1,-2.7,1.215,1.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228,-19.1,455.8,32.8);


(lib.li_1_56_86426 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.li_1_57_58348("synched",0);
	this.instance.setTransform(47.2,-23.4,0.109,0.122,0,31.9,32.1,-283.7,-801.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.8,-28,115.4,195.9);


(lib.li_1_54_57841 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_55_24314("synched",0);
	this.instance.setTransform(-70,110,1,1,0,0,0,-70,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:110.1,rotation:8.7,x:-69.9,y:110.1},23).to({regY:110,rotation:0,x:-70,y:110},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-120.5,174,241);


(lib.li_1_52_92314 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.li_1_53_258("synched",0);
	this.instance.setTransform(37.7,-6.9,0.105,0.121,0,29.8,34.3,-283.4,-801.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.5,-11.6,107.9,198.9);


(lib.li_1_40_60262 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.instance = new lib.li_1_41_27318("synched",1);
	this.instance.setTransform(-19.6,-94.8,0.905,0.602,0,0,0,160.3,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-19.7,startPosition:5},4).to({x:-24,y:-101.7,startPosition:12},7).to({x:-18.7,y:-96.7,startPosition:18},6).to({x:-20.8,y:-98.5,startPosition:0},7).to({x:-19.8,y:-98.4,startPosition:7},7).to({startPosition:12},80).to({x:-24.3,y:-99.2,startPosition:17},5).to({x:-22,y:-83.5,startPosition:23},6).to({x:-21.8,y:-94.7,startPosition:5},7).to({startPosition:20},40).to({x:-29.3,y:-94.4,startPosition:1},6).to({startPosition:7},6).to({startPosition:14},7).to({startPosition:1},62).to({x:-21.2,y:-79.4,startPosition:7},6).to({x:-19.6,y:-94.8,startPosition:14},7).wait(67));

	// 图层 5
	this.instance_1 = new lib.li_1_42_78893("synched",1);
	this.instance_1.setTransform(8.8,-96.3,0.905,0.602,0,0,0,178.8,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:5},4).to({x:12.7,y:-103.3,startPosition:12},7).to({x:8,y:-98.7,startPosition:18},6).to({x:12.4,y:-100.5,startPosition:0},7).to({x:10.1,y:-99.4,startPosition:7},7).to({startPosition:12},80).to({x:14.2,y:-103.7,startPosition:17},5).to({x:13.9,y:-90.6,startPosition:23},6).to({regY:9.9,x:10.5,y:-96.1,startPosition:5},7).to({startPosition:20},40).to({x:16.5,y:-96.3,startPosition:1},6).to({x:10.5,y:-95.2,startPosition:7},6).to({x:13.4,y:-96.5,startPosition:14},7).to({startPosition:1},62).to({regY:10,x:19.6,y:-80.9,startPosition:7},6).to({x:8.8,y:-96.3,startPosition:14},7).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.8,-101.9,312.8,162);


(lib.li_1_32_83454 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.li_1_33_67402("synched",0);
	this.instance.setTransform(0.6,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04},16).to({scaleX:1},18).wait(1));

	// 图层 3
	this.instance_1 = new lib.li_1_34_59339("synched",0);
	this.instance_1.setTransform(12.2,-1.1,1,1,0,0,0,-11,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-8.5,skewY:-10.1,x:12.1,y:0.1},16).to({skewX:0,skewY:0,x:12.2,y:-1.1},18).wait(1));

	// 图层 4
	this.instance_2 = new lib.li_1_35_1642("synched",0);
	this.instance_2.setTransform(-11.1,-1.1,1,1,0,0,0,11,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:11.1,scaleX:1,skewX:9,skewY:10.9,y:-0.3},16).to({regX:11,scaleX:1,skewX:0,skewY:0,y:-1.1},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-19.9,77,40.3);


(lib.li_1_31_13982 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 4
	this.instance = new lib.li_1_32_83454("synched",0);
	this.instance.setTransform(84.1,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.7,startPosition:16},16).to({y:19,startPosition:34},18).wait(1));

	// 补间 5
	this.instance_1 = new lib.li_1_36_66332("synched",0);
	this.instance_1.setTransform(90,30,1,1,0,0,0,-33.1,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-65.4,scaleX:1.06,skewX:-2.7,skewY:-4.7,x:90.4,y:29.6},16).to({regY:-65.2,scaleX:1,skewX:0,skewY:0,x:90,y:30},18).wait(1));

	// 补间 6
	this.instance_2 = new lib.li_1_37_67736("synched",0);
	this.instance_2.setTransform(75.4,26,1,1,0,0,0,33.6,-71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:33.8,scaleX:1.02,skewX:2.5,skewY:4.5,y:25.7},16).to({regX:33.6,scaleX:1,skewX:0,skewY:0,y:26},18).wait(1));

	// 补间 7
	this.instance_3 = new lib.li_1_38_7228("synched",0);
	this.instance_3.setTransform(84.7,30,1,1,0,0,0,-1.2,-89.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-1.3,scaleX:1.04,scaleY:0.99,rotation:-2},16).to({regX:-1.2,scaleX:1,scaleY:1,rotation:0},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,164.8,215);


(lib.li_1_23_75479 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_319 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(319).call(this.frame_319).wait(1));

	// 图层 1
	this.instance = new lib.li_1_88_67447复制2("single",0);
	this.instance.setTransform(13.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({mode:"synched",startPosition:21},0).wait(41).to({mode:"single",startPosition:0},0).wait(10).to({mode:"synched",startPosition:3},0).wait(45).to({mode:"single",startPosition:0},0).wait(6).to({mode:"synched",startPosition:3},0).wait(33).to({mode:"single",startPosition:0},0).wait(8).to({mode:"synched",startPosition:21},0).wait(51).to({mode:"single",startPosition:0},0).wait(12).to({mode:"synched",startPosition:21},0).wait(49).to({mode:"single",startPosition:0},0).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,1.5,32.4,6.1);


(lib.li_1_17_66503 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_18_16614("synched",0);
	this.instance.setTransform(80,22.1,1,1,0,0,0,17.3,-50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.2,regY:-50.1,rotation:-1.9,y:22.2},18).to({regX:17.3,regY:-50.2,rotation:0,y:22.1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,129,152);


(lib.li_1_16_83077 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{中间:0});

	// 图层 1
	this.instance = new lib.li_1_17_66503("single",0);
	this.instance.setTransform(0,0,1,1,0,0,0,62.7,72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-72.3,129,152);


(lib.li_1_15_1415 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.li_1_16_83077("synched",0);
	this.instance.setTransform(16.1,-50.7,1,1,0,0,0,16,-50.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:4},4).to({scaleY:1,skewX:5.4,skewY:3.1,y:-50.6,startPosition:11},7).to({regX:15.9,regY:-50.4,skewX:-6.5,skewY:-4.4,x:16.3,y:-50.7,startPosition:17},6).to({regX:16,regY:-50.2,scaleY:1,skewX:3.3,skewY:2.5,x:16.1,y:-50.6,startPosition:24},7).to({regY:-50.3,skewX:0,skewY:0,y:-50.7,startPosition:31},7).to({startPosition:11},80).to({scaleY:1,skewX:5.4,skewY:3.1,y:-50.6,startPosition:18},7).to({regX:15.9,regY:-50.4,skewX:-6.5,skewY:-4.4,x:16.3,y:-50.7,startPosition:24},6).to({regX:16,regY:-50.2,scaleY:1,skewX:3.3,skewY:2.5,x:16.1,y:-50.6,startPosition:31},7).to({regY:-50.3,skewX:0,skewY:0,y:-50.7,startPosition:38},7).to({startPosition:81},43).to({rotation:-6.5,startPosition:88},7).to({regX:15.9,rotation:5.7,startPosition:96},8).to({regX:16,rotation:0,startPosition:4},8).to({startPosition:50},46).to({rotation:-6.5,startPosition:57},7).to({regX:15.9,rotation:5.7,startPosition:65},8).to({_off:true},6).wait(39).to({_off:false,regX:16,rotation:0,startPosition:73},0).to({_off:true},16).wait(19).to({_off:false,startPosition:8},0).to({_off:true},2).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,-72.7,129.4,152);


(lib.li_1_12_50557 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_77_74510复制2("single",0);
	this.instance.setTransform(141.6,63.3,1,1,0,0,0,141.6,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({mode:"synched",loop:false},0).wait(48).to({startPosition:0},0).wait(52).to({startPosition:0},0).wait(44).to({startPosition:0},0).wait(67).to({startPosition:0},0).wait(49).to({startPosition:0},0).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283,130);


(lib.li_1_11_48396 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 8
	this.instance = new lib.li_1_12_50557("synched",0);
	this.instance.setTransform(2.4,92.8,1,1,0,0,0,141.6,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:264},264).to({y:89.9,startPosition:271},7).wait(2).to({startPosition:273},0).to({y:99.2,startPosition:278},5).to({startPosition:283},5).to({y:89.9,startPosition:288},5).wait(32));

	// 图层 3
	this.instance_1 = new lib.li_1_15_1415("synched",0);
	this.instance_1.setTransform(0,-140,1,1,4.4,0,0,-2.1,-60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:264},264).to({y:-141.5,startPosition:308},7).wait(2).to({startPosition:310},0).to({y:-133.6,startPosition:315},5).to({startPosition:320},5).to({y:-141.5,startPosition:325},5).wait(32));

	// 图层 8
	this.instance_2 = new lib.li_1_21_95805("synched",0);
	this.instance_2.setTransform(2.7,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},264).to({y:35.8},7).wait(2).to({startPosition:0},0).to({y:45.1},5).to({startPosition:0},5).to({y:35.8},5).wait(32));

	// 图层 6
	this.instance_3 = new lib.li_1_22_34717("synched",0);
	this.instance_3.setTransform(3.2,154.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},264).to({y:151.2},7).wait(2).to({startPosition:0},0).to({y:160.5},5).to({startPosition:0},5).to({y:151.2},5).wait(32));

	// 图层 7
	this.instance_4 = new lib.li_1_23_75479("synched",0);
	this.instance_4.setTransform(3.2,187.4,1,1,0,0,0,13.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:264},264).to({y:183.1,startPosition:308},7).wait(2).to({startPosition:310},0).to({y:193.8,startPosition:315},5).to({startPosition:0},5).to({y:183.1,startPosition:5},5).wait(32));

	// 图层 9
	this.instance_5 = new lib.li_1_25_22475("synched",0);
	this.instance_5.setTransform(1.8,106.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},264).to({y:104},7).wait(2).to({startPosition:0},0).to({y:113.3},5).to({startPosition:0},5).to({y:104},5).wait(32));

	// 图层 4
	this.instance_6 = new lib.li_1_26_37912("synched",0);
	this.instance_6.setTransform(80.1,-60.7,1,1,6.2,0,0,4,36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},6).to({rotation:1,x:79.8,y:-56.5},7).to({rotation:6.2,x:80.1,y:-60.7},6).to({rotation:1,x:79.8,y:-56.5},7).to({rotation:6.2,x:80.1,y:-60.7},7).to({regY:36.6,rotation:6,y:-60.8},75).to({regY:36.7,rotation:1,x:79.8,y:-56.5},5).to({rotation:6.2,x:80.1,y:-60.7},6).to({rotation:1,x:79.8,y:-56.5},7).to({rotation:6.2,x:80.1,y:-60.7},7).to({regY:36.6,rotation:6,y:-60.8},12).to({startPosition:0},12).to({rotation:1.8,x:79.4,y:-58.6},7).to({rotation:9,x:80.2,y:-61.8},8).to({rotation:6,x:80.1,y:-60.8},9).to({startPosition:0},32).to({rotation:1.8,x:79.4,y:-58.6},6).to({rotation:9,x:80.2,y:-61.8},8).to({rotation:6,x:80.1,y:-60.8},9).to({startPosition:0},28).to({scaleX:1,scaleY:1,rotation:0,skewX:19.1,skewY:18.6,x:83.1,y:-66.5},7).wait(2).to({startPosition:0},0).to({regY:36.7,scaleX:1.02,scaleY:0.98,skewX:-0.8,skewY:6.8,x:77.3,y:-49},5).to({regY:36.6,scaleX:1,scaleY:1,skewX:16.3,skewY:19.7,x:83.9,y:-53.9},5).to({scaleX:1,scaleY:1,skewX:15.4,skewY:14.9,x:83.4,y:-66.1},5).wait(32));

	// 图层 5
	this.instance_7 = new lib.li_1_27_44496("synched",0);
	this.instance_7.setTransform(-68.7,-60.1,1,1,-6.7,0,0,6.2,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},6).to({regX:6.1,regY:34.3,rotation:8.9,x:-68,y:-55.7},7).to({regX:6.2,regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},6).to({regX:6.1,regY:34.3,rotation:8.9,x:-68,y:-55.7},7).to({regX:6.2,regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},7).to({rotation:-6.5},75).to({regX:6.1,regY:34.3,rotation:8.9,x:-68,y:-55.7},5).to({regX:6.2,regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},6).to({regX:6.1,regY:34.3,rotation:8.9,x:-68,y:-55.7},7).to({regX:6.2,regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},7).to({rotation:-6.5},12).to({startPosition:0},12).to({regX:6,rotation:-0.6,x:-71,y:-57.9},7).to({regX:6.2,rotation:-10,x:-68.1,y:-60.9},8).to({rotation:-6.5,x:-68.7,y:-60.1},9).to({startPosition:0},32).to({regX:6,rotation:-0.6,x:-71,y:-57.9},6).to({regX:6.2,rotation:-10,x:-68.1,y:-60.9},8).to({rotation:-6.5,x:-68.7,y:-60.1},9).to({startPosition:0},28).to({regY:34.5,scaleX:1.01,scaleY:0.99,rotation:0,skewX:-18.5,skewY:-19.9,x:-72.2,y:-65},7).wait(2).to({startPosition:0},0).to({regX:6.1,regY:34.3,scaleX:1.03,scaleY:0.98,skewX:-5.9,skewY:-14.1,x:-65.9,y:-47.4},5).to({regY:34.1,scaleX:1.02,scaleY:0.99,skewX:-19.3,skewY:-25.6,x:-71.7,y:-50.2},5).to({regX:6.2,regY:34.5,scaleX:1.01,scaleY:0.99,skewX:-18.5,skewY:-19.9,x:-72.2,y:-65},5).wait(32));

	// 图层 10
	this.instance_8 = new lib.li_1_28_41306("synched",0);
	this.instance_8.setTransform(0,220,1,1,0,0,0,-3,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},264).to({y:222.8},7).wait(2).to({startPosition:0},0).to({scaleX:1.01,y:220},5).to({startPosition:0},5).to({scaleX:1,y:222.8},5).wait(32));

	// 图层 11
	this.instance_9 = new lib.li_1_29_5336("synched",0);
	this.instance_9.setTransform(90.8,-44.2,1,1,6.2,0,0,-31.4,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},6).to({regY:69.6,rotation:3.5,x:92,y:-46.3},7).to({regY:69.7,rotation:6.2,x:90.8,y:-44.2},6).to({regY:69.6,rotation:3.5,x:92,y:-46.3},7).to({regY:69.7,rotation:6.2,x:90.8,y:-44.2},7).to({regY:69.6,rotation:6,y:-44.3},75).to({rotation:3.5,x:92,y:-46.3},5).to({regY:69.7,rotation:6.2,x:90.8,y:-44.2},6).to({regY:69.6,rotation:3.5,x:92,y:-46.3},7).to({regY:69.7,rotation:6.2,x:90.8,y:-44.2},7).to({regY:69.6,rotation:6,y:-44.3},12).to({startPosition:0},12).to({rotation:1.8,x:91.3,y:-42.9},7).to({rotation:9,x:90.1,y:-44.8},8).to({rotation:6,x:90.8,y:-44.3},9).to({startPosition:0},32).to({rotation:1.8,x:91.3,y:-42.9},6).to({rotation:9,x:90.1,y:-44.8},8).to({rotation:6,x:90.8,y:-44.3},9).to({startPosition:0},28).to({scaleX:1,scaleY:1,rotation:0,skewX:13.4,skewY:12.8,x:90,y:-36.3},7).wait(2).to({startPosition:0},0).to({regY:69.7,scaleX:1.04,scaleY:0.97,skewX:5.7,skewY:12.7,x:88.1,y:-44},5).to({scaleX:1.01,scaleY:0.99,skewX:22.5,skewY:25.9,x:92.9,y:-46.6},5).to({regY:69.6,scaleX:1,scaleY:1,skewX:9.7,skewY:9.2,x:92.2,y:-36.4},5).wait(32));

	// 图层 12
	this.instance_10 = new lib.li_1_30_79503("synched",0);
	this.instance_10.setTransform(-90.1,-46.8,1,1,-6.7,0,0,31.1,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},6).to({regX:31.2,regY:67.7,rotation:6.5,x:-90.9,y:-53.4},7).to({regX:31.1,regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},6).to({regX:31.2,regY:67.7,rotation:6.5,x:-90.9,y:-53.4},7).to({regX:31.1,regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},7).to({regX:31.2,rotation:-6.5},75).to({regY:67.7,rotation:6.5,x:-90.9,y:-53.4},5).to({regX:31.1,regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},6).to({regX:31.2,regY:67.7,rotation:6.5,x:-90.9,y:-53.4},7).to({regX:31.1,regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},7).to({regX:31.2,rotation:-6.5},12).to({startPosition:0},12).to({rotation:-0.6,x:-93.5,y:-47},7).to({rotation:-10,x:-88.7,y:-46.3},8).to({rotation:-6.5,x:-90.1,y:-46.8},9).to({startPosition:0},32).to({rotation:-0.6,x:-93.5,y:-47},6).to({rotation:-10,x:-88.7,y:-46.3},8).to({rotation:-6.5,x:-90.1,y:-46.8},9).to({startPosition:0},28).to({regX:31.1,regY:67.7,scaleX:1,scaleY:1,rotation:0,skewX:-13,skewY:-14.5,x:-90.7,y:-36.3},7).wait(2).to({startPosition:0},0).to({regX:31.2,regY:67.6,scaleX:1.04,scaleY:0.97,skewX:-11.2,skewY:-18.7,x:-87.3,y:-42.2},5).to({scaleX:1.02,scaleY:0.98,skewX:-24.4,skewY:-30.4,x:-91.3,y:-41},5).to({regX:31.1,regY:67.7,scaleX:1,scaleY:1,skewX:-13,skewY:-14.5,x:-90.7,y:-36.3},5).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.8,-230.6,413.9,458.4);


(lib.li_1_7_20313 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 层 1
	this.instance = new lib.li_1_8_88488("synched",0);
	this.instance.setTransform(-0.7,21.3,1,1,0,0,0,208.1,216.6);
	this.instance.alpha = 0;

	this.instance_1 = new lib.li_1_9_54616("synched",0);
	this.instance_1.setTransform(3,31.2,1,1,0,0,0,214.3,237.3);
	this.instance_1.alpha = 0.699;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEDEF").s().p("EgCxAlkQhWgmgqhVQgthbAghkQhyBwh0gRQhqgQhNh0QhMhygRikQgTiwA5itQkugoA1l5QkhldCOmDQBgCiCGgbQmpsIJkj5QiJhUhhCDQi9k0Dli2QBOjECcgTQATkjGeAtQhPiaj8AmQAriKBohSQBihMB3gDQB5gCBeBOQBmBVApCfQBGgjBPAtQBGAnAwBQQAvBQgIBAQgKBHhPALQCAAdgNDTQArgzA5gQQA3gPAyAVQA0AXAfA4QAhA+gCBZQBngxBiA8QBbA4ApB4QArB9gnB8QgsCOiJB7QG8AGg7NeQhFBbhbBLQB+CkAtCSQhYFDjtgWQBzEjjxBoQgOCgg4B4QgyBthHA0QhEAxg/gSQhBgUgihYQhsBRijhaQgXAvgcAjIgBAAQgvA7g8AYQgpAQgpAAQgvAAgwgVgAFsccQgBh+A0hkQASgiAWgcQhWhtBJi7Qihg6hjiQQhaiDgNifQgNieBChzQBHh7CJgXIAGgCQgeiEBFiEQjhk/E2keQnWhqgMpHQg8CckKBEQEiGQpXGhQA5CLh0A8QE5E+jZEJQFhFylDFMQE1gZArEnQCEg2BoAAQD+AABmE6gEAW/Ag6QhUhlD4iTQAfhRBBgiQAngUAlAMQAnAOgKByQBPhzBnBuQAtAzAJBAQAKA+gaAuQgcAxg5AJQg/AKhUgvQhgBihaAAQhXAAhQhegEggGgOSIgQgTQgKhUARhGQAQg+AhgjQAfgiAgAHQAhAIARAzQCthrA7DJQgDAVgIAVQgYBAg7AhQhAAjhRgOQgkAaghAAQgpAAgkgqgAUd/CQg0gfgKg8QgLg/AshDQgRgPgMgQQAohCA5g0QA3gyAwgOQA0gPAVAiQAZAmgVBeQAtgOAYAeQAXAcgFA0QgGA2gkAzQgoA5hDAiIgaAHQgZAFgXAAQguAAglgVg");
	this.shape.setTransform(24.5,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDF7F5").s().p("EgDEAnmQifgxiCiLQiKiRhGjOQiUgShvhiQhmhagxiHQgviEAUiCQAViJBahbQiWghABiVQh8gRhkhwQhahkgPivQgPiqA/ifQBEirDBgbQl+yPLuhbQAZkhDNhtIgDgEQAjj3BoisQBgifCJhHQCEhECHAcQCMAdBsB4QGNghAUF9QIEEOAjI/IAGAHQFMFDi7EKIgJAFQAmBEgVBfQCWAzBHCGQBCB5gOCjQgNCghUCTQgfA2glAyQA8tem9gGQCJh7AsiOQAnh8grh9Qgph4hbg4Qhig8hnAxQAChZghg+Qgfg4g0gXQgygVg3APQg5AQgqAzQAMjTiAgdQBPgLAKhHQAIhAgvhQQgwhQhGgnQhPgthGAjQgpifhohVQhehOh3ACQh3ADhiBMQhoBSgrCKQD8gmBPCaQmegtgTEjQicAThODEQjlC2C9E0QBhiDCJBUQpjD5GoMIQiGAahgihQiOGDEhFdQg1F5EuAoQg5CtATCwQARCkBMByQBNB0BqAQQB0ARByhwQggBkAtBbQAqBVBUAmQBZAoBYgjQA+gYAwg7IAIAGIgIgGQAcgjAXgvQCjBaBshRQAiBYBBAUQA/ASBEgxQBHg0AyhtQA4h4AOigQDyhoh0kjQDtAWBZlDQBvFgliD0QBBCFhXByQBaDRjzgZQj0KNoNodQhgCniZA7QhLAdhNAAQhJAAhMgYgAf9aqQglgMgnAUQhBAhgfBSQhPgVACgqQADgnAdgrQAdgsApgOQApgOAvAGQAygtA5gJQA3gJArAcQAuAdASA8QAUBCgTBbQhnhuhPBzQAKhygngOgEgg/gEsQgtgHgPglQgQgqAghDQhLAagYgnQgWgjAZhCQAYhDA0gyQA5g5A+gDQgchaAWg3QAVg1A1ACQA2ACArA2QAyA+AIBkQA5A8AbBIQAbBGgJA5QgKA7gsAXQgxAbhqgmQgcAxgzAaQgmASgjAAIgTgBgA9SwSQjAimCWiYQBgj0BnBEQB4BJATCvQBuAhAaBMQARAvgGAtQg7jJitBrQgRgzghgIQgggHgfAiQghAjgQA+QgRBGAKBUQgWgggUgwgAeF4aQg6g4hNAvQgZg5AKg6QAJg3AmgnQAmgnA2gHQA7gIA+AiQAoAWAOA5QANA2gQA2QgRA3gnASQgPAGgQAAQgiAAgogcgEAcTggxQAkgzAGg2QAFg0gXgcQgYgegtAOQAVhegZgmQgVgig0APQgwAOg3AyQg5A0goBCQgXgfgFgmQgIg2Aeg1QAdg1A4gfQA7ghBIAEQBKAEA3AsQA0ApAXBEQAYBFgNBOQgNBUg0BMQhIBAhIAWQBCgiAog5g");
	this.shape_1.setTransform(0.7,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEEDEF").s().p("EAKqAhjQmWifjREhQiTibCTizQjwhih9EKQm1g7B4pUQkrgzB+nuQhziZhBiqQg8ibgEiBQgEh+Axg0QA1g4BeAxQhQh2A9hiQkyn6FlmhQhom0FDhSQAriJBxAVQBEkxFHgMQhchXiqA/QAXh2BehUQBXhNB0gcQB0gcBfAgQBjAgA+BuQhzAgApCNQIQlBALItQBmAzgfC4QA6g4BOAiQBIAgA0BYQA3BZgCBaQgCBnhPA6QHLAeA6IpQGDHjmSITQFMLFn2FTQCfDZjYBNQA3C5jNBWQgSAsgTAoIgMgHQkKCGAIjZQh9C6hLAAQhHAAgZipgAJRaUQCJgoBoAHIAAgFQiHl6Fph/QhPiVCJiYQiBgWhbh4QhXhxgWieQgXijA5iRQA/icCehLIgNgRQh1idCJiKQlfjdDAo+QkehMAdmqQidCsj9iZQhGEMnfDEQDyEUnME5QAxBMhNA7QA+CahuBVQEzFyjhFgQE8E3iqHkQAoACAjAIQBZATA4A6QBCBDAVB2QC4hTCNAAQD1AABqD9gA895uQBUk6BODCQApgoAoAlQAGAFAFAHIAFgBQArCAicCBQg1AVgkAAQhjAAAqimg");
	this.shape_2.setTransform(-10.3,51.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDF7F5").s().p("EADXAmcQtFD2i/sIQj8hUhljVQgshdABhcQABhcAvhDQhbgwAWhpIgEgCQi3hqhmjAQheiwgFjPQgFjHBOiZQBSifCPgxQmRsfJpluQAMkTDjg/QgUhFAXg8QAVg2AygkQAugiA3gIQA4gHApAWQAekTDBjXQC6jPD0g2QEFg6DNCUQDpCnBnGNQGdCuBSM0QDxE6ggEZQg6opnLgeQBPg6AChnQAChag3hZQg0hYhIggQhOgig6A4QAfi4hmgzQgLotoQFBQgpiNBzggQg+huhjggQhfgghyAcQh2AchXBNQheBUgXB2QCqg/BcBXQlHAMhEExQhxgVgrCJQlDBSBoG0QllGhEyH4Qg9BkBQB2Qhegxg1A4QgxA0AEB+QAECBA8CbQBBCqBzCZQh+HuErAzQh4JUG1A7QB9kKDyBiQiVCzCVCbQDPkhGWCfQA0FbD0lsQgIDZEKiGIAMAHQjHGsj8AAQjYAAj/k7gAf7egQg7AGgmgoQghgjgFg3QgFg2AXgoQAagrAxAAQA9hrBdASQBTAQA9BlQA/BngLBvQgNCAhxBLQgkAWgeAAQhaAAgajOgEgihgGIQgcgCgPgRQgPgSAHgaQACgIAEgHQhAgdgbgwQgbgyAEg+QAEhAA/hHQBAhIBWAmQBVAyADCIQADCJhZBjQgbAOgaAAIgHAAgA/I7hQAog1AzgZQAygYAsALQBnAagICvIgJAJQgoglgpAoQhOjChUE6QjMg3Cwi7gEAjugaDQg8ANgngeQgigbgGgwQgGgvAZgiQAbgnAzgBQBYAFAdBNQAcBMg+A+QgOALgKAAQgMAAgFgSgEAargktQgygKgggiQgjgkgCgyQjPj/FYgRQCrhGAiCRQAiCQg8BhQgfAyg/AaQgiANgiAAQgRAAgSgDg");
	this.shape_3.setTransform(0.8,39);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EEEDEF").s().p("EAKPAnFQhYBqhvAHQhkAHhhhHQhchDg3hwQg5hzAHh0IgJgBQjygjiiECQjkh0gQk2QiEg5hIDHQlYjoAum6QhtgUhGhbQg9hPgOhsQgOhnAihJQAkhNBHAEQjMiygMkLQmlvDLnn/QhXgJgYhAQgXg7AkhdQAjhbBQhdQBUhjBuhIQgwhNAhhUQAfhNBZg/QBYg+BxgYQB4gZBsAaQiFi7i8CMQASheBChYQBBhVBZg1QBcg4BagDQBhgEBIA9QBeiWCHg/QCAg8B6AiQB8AiBDB0QBKB/gUC9QC+CFAVEeQDRCfgmEvQA/AQBWBXIABABIAbAcIBKBXQChDUA0D8QD2JmjiK3QEgIXohIEQCUDzjfDLQhiEkj2CVQgWAGgTACIgMABQhjAAgCiVgEAGtAgxQA1ltDjg4IgBgHQhXkrDYlgQgzjYBwiFQlHoBD3mcQmhjyHFt3IAFgDQhkhnjNhvIgSgKIgBgBIgDgBQjHh7CEnaQjrFAmajMQBPDzlgEdQihCHg2BHQAKChjhDOQkYDwCLGkQAyCMh2B4QDpFGjwFwQHXDki0LaQGlhGD7GZQBMgIBBAAQFEAABkC8g");
	this.shape_4.setTransform(24.6,52.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDF7F5").s().p("EAG5AteQhqgPgLhBQgLhCgDg7QgIj6jaA/QjiBIjkgtQjKgoieh4QiUhwg1iJQg3iNBJhlQlUhHhNn/QjGgsh7iRQh4iNgdjTQgejVBEj0QBIkACpj2Qk5o0IHnwIgHgIQAQlrEhhuQgcg9AUhFQAThDA6g3QA7g6BTgdQBZgfBhAKQCCnnEVi8QDqifEoBOQEHBGDEDZQDDDZgFDWQgmD5EYBrQCrBXg0DKQguC2A9C/IgBAAQhXhXg+gQQAlkvjRifQgVkei9iFQATi9hJh/QhDh0h8giQh7giiAA8QiJA/heCWQhHg9hgAEQhZADhdA4QhZA1hABVQhDBYgSBeQC8iMCGC7Qhtgah4AZQhwAYhYA+QhaA/geBNQghBUAvBNQhuBIhUBjQhQBdgjBbQgjBdAWA7QAZBABXAJQrnH/GlPDQAMELDLCyQhHgEgkBNQghBJANBnQAPBsA8BPQBGBbBuAUQguG6FYDoQBIjHCDA5QARE2DjB0QChkCD0AjIAJABQgHB0A5BzQA3BwBcBDQBgBHBkgHQBwgHBXhqQADCdBugJIAAAPQhqBciZAuQh0AihYAAQgdAAgZgDgEAiBAhoQimg9B5haQEBimA4CGQA1CZi+BuQgiAQgaAAQg/AAgIhggEgm5gGZQhdhbAShmQAHgrAWgeQATgZAYgIIALgCQCQgNhJDjQgkBYgjAAIgIgBgEAlugbBQgOhIBAgUQgHghAjAEQAeACAVAVQAUAUAEAeQAJBHhGAbQgUAIgQAAQgrAAgNg6gEgg3gbrQgcgOAZhDQhXAlhOhEQB3iXA/gLQA/gMAqBFQAqBFgWAzQgWAzguAdQghAVgWAAQgJAAgHgEgEAcYgo2QgZgKAPgYQgvAMgggTQgcgRgGghQgFggAVgXQAWgYArAAQgjgDgCgXQgCgVAYgbQAagbAlgPQAqgRAoAIQCMAYgrCgQgIAtgmAfQggAagsAKQgTAEgPAAQgRAAgMgFg");
	this.shape_5.setTransform(5.5,44.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEEDEF").s().p("EgBYAoRQhkiLiUAGQibAbAGDXQhIhvgKjCQgZAggnAZQlLAChFlqQCACQCAgtQkLlXC4jfQi8AdAcBuQh2AGhRhEQhLg9gmhiQglhfAJhhQAJhlA4hDQktjNBkibQlngagWmeQCHBgBEguQjHl8FOkKQkHgigQC5QhFh5AEicQADiWBEiKQBFiOB1hTQB/hbCZACQAXBEgDBYQgFB+g9CPQGOJRlQFeQCgEFhFFHQFjBFAFFZQCTBlAaC8QARBXBYA+QBOA3gKBwIgDAVQgFAbgKAWQAeBRAABDIAAAAQD4l3H0IdQB2hsCHgbQAOlSEaBcQCIioBfC2IBbCTQg+CJiVAFQiJEOjtgYQhaCTiOgtQgIAihJAiQgcANgdAAQhsAAh9iygANYcdQgzhPgBhRQABhZBDgXQANhJAohTQA3hvBThUQBchcBkggQjhi6CpjoQjQksD6h8QkHlcBfhTQlalSFDmSQk/joEsjMQgPgZgKgYQBLhhBagfQBVgcBEAoQBFAoAZBhQAaBqglCRQBtBJAICvQBkgSAQBrIgBAwQHNLtmbIQQBNCMg7DJQiSEqj2AKQgcCkhpATQBgDEi3BCQCsCmk1CdQg7gmgrhEgA0ky4IAAgBQgUj+DhgqQh0AFhDhBQg+g+ANhYQAOhcBdhCQBIgyB3gSQCSgWBFBGQiRkoFRhNQg9hAAUhlQASheBRhWQBUhZBvgkQB8gnB4AsQkEA7AeD0QAphHBPgxQBKguBTgOQBTgOBXAiQBYAhg7CgQB+jDDEDBQCkAlhHElQiwgXgli7Qo5FfgmjPQi1DsiRhkQhwDMjKgYQEwENknDcQhhBDhXAhQhNAdg9AAQgiAAgdgJgAIA/CQDJCwgpE5IgGABQlAjiCmkIg");
	this.shape_6.setTransform(37.1,45.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDF7F5").s().p("EAG7AvjQhpgWhEhFQhEhHgLhlQk5A9h/jBIgCgDQgGjXCcgbQCSgGBkCLQChDiCCg9QBKgiAHgiQCPAtBZiTQDuAYCIkOQCWgFA+iJIAkA7QBJBpi4DSQgKE7k7A8Qh+BliGAmQhKAVhFAAQguAAgrgJgEgQDAg8QlDjIB/nkIgCgHQhTAchLgpQhJgogshfQgthgABh5QAAiCA2iAQl3jFAlj2QjsrbFzlqQgXhEAUhUQAThRA0hCQA1hFBFgaQBMgdBLAhQBBggA+AcQA/AbAlBLQAJASAHAUQiagCh/BbQh0BThGCOQhECKgDCWQgDCcBEB5QARi5EGAiQlNEMDHF6QhEAuiIhgQAWGeFnAaQhkCbEtDNQg4BDgJBlQgIBhAlBfQAmBiBKA9QBSBEB2gGQgdhuC9gdQi4DfEKFXQh/AtiAiQQBFFqFLgCQghAVgqAQQiyA7h6AAQk3AAA3mBgEAl8AhoQg6glgBhLQgChJA4g1QA9g8BnADQgPgmAIgRQAKgRAZANQA+AfAyCKQAcBLhCAkQhNAJgLBPQgsAMgkAAQg2AAgngagEAmBAfqQgYBsCdg9QAGg2A0AHQAlg1gygYQgggJgbAAQhUAAgjBWgAS2dmIgNgIQE0idisimQC3hChfjEQBpgTAbikQD3gKCRkqQgrCUh1C2QAhHfmQAwQA5Ayg7BFQgTBkg+AZQgTAIgWAAQgnAAgtgZgEgqpgJPQgQgkAhhhQAQgvAWABQAVACABAxQABCMgcALQgJADgIAAQgVAAgMgagAbeuxQgHivhuhJQAmiRgbhqQgYhhhGgoQhEgohUAcQhaAfhMBhQhhjgESjSQE+CJgzFfQDBC0gDF3QgQhrhkASgAw9ziQhLgZgThLQgShLAuhYQiRhFgmiHQghh2A6h3QA5h0BmgjQBzgmBrBdQAbiwB+AKQhUgpBLggQAEmVFAh2QDwmSHfESQAeglAsgMQBBgQBTAoQBRAmBOBSQBQBUA2BtQBLBpBOArQgWBGg2BPQAwCkhkC3QA+gMA+A/QA6A6AdBZQAeBegWBHQgYBPhXAcQAok5jJiwQAYgnAignQgZAAgXgDIgCAAQBIklikglQjFjBh9DDQA7ighZghQhZgihTAOQhTAOhHAuQhQAxgoBHQgfj0EDg7Qh2gsh9AnQhvAkhTBZQhRBWgTBeQgUBlA+BAQlRBNCREoQhGhGiSAWQh3AShHAyQhdBCgOBcQgNBYA+A+QBCBBB0gFQjhAqAVD+gEglGgdjQgagYgFghQgNhOBbgnQAQgrAtgDQApgEARAjQASAigMA5QgMA+gqBEQhbgHgbgZgEAbPgsCQgZgnAEgpQAEgmAbgcQAcgdAcgQQAYgPAzAOQBBASAdBAQgwCIhfAAQgpAAgzgag");
	this.shape_7.setTransform(13.7,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EEEDEF").s().p("EgAsAtpQhbiNCHheQk4iphoD1QgEglABgpQlBD/AfmEQAXhaA5g8QA3g3BJgSQBIgRBJAZQBMAbA5BDQBmhVBTAHQBvDfDpiJQBvhlBlgEQCcCPDOkXQg8inBniMQA8AOAtAWQBbMAnvgwQg/gtg8gDQg6gCgnAmQgoAogJBJQgJBQAeBnQlRibhTCSgEgMyAiRQg5gageg6Qgcg2AHg6QAHg8ArgiQjEhjh8CsQhWhYAMh0QANh/CChJQkYj/C0lIIgDgJIAWgGQBdgWAmA8IADABQEbA3g+D9QhHDlBjApQErCrhhHKIgJAAQh+AAg8gbgAUiTHQgMgeAIglQA2itDIBCQhSAxByCQQi6iBhgBugAW5MLQhog4gmhkQgqhzBvjIIAIgFQiVj9CZkNQBEh5g+huQhQixBEiVQp+m7Jkm6QF0FGimFnQAIBfg1BoQEwBri1F5QDgCDg0DpQEogmAWFnQgwB0haBIQhsBYh+gMQgSB5hjAeQgdAJgfAAQg/AAhFglgA2EAUQgcgLgQgVQgVh8Ahg/QhTkMEDh0QARAJAQAPQBzBNgpCWQAQCPgsBZQglBMhFAhQgmATgjAAQgXAAgVgIgEggmgFXQhZhQAtiiIAAgDIAFgMQAwhwCDgFQhrkDEKhgQBCAQAnAwQAiAsACA3QACA1gcAlQgeAog0AAQgXgHgrCVQg7FMh3AAQgoAAgwgmgA3l5GQg+gCgwgpQgtgngMg4IABgFQAZiuDcALIAFAAIgCgDIgIgHQiXiiGvAOQAFAXgBAbQgBBshbCTQgmAMglAlIg/BAQg6AuhBAAIgFAAgEgOWgi1IgCgCIAFgEQgKmlCwi0QBOhPBkgMQBkgLCCBEQjQgEgiFWQDIlYFWBDQGFjfDqHxIABADQhXBdhfAxQhcAvhLgEQhMgEgkg2Qgmg4ARhhQicFlmohVQiABih8ALIgfABQhcAAhAg1g");
	this.shape_8.setTransform(40.1,55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDF7F5").s().p("EAFWAwfQmtBOgjmDIAAgCQBoj1E4CpQiJBeBbCNQBViSFRCbQgehnAJhQQAJhJAogoQAngmA6ACQA8ADA/AtQHvAwhbsAQEjCOkpHeQCUDhkpBCQguFHlTAAQizAAkFhbgAqlf8QlkHdhgm1QhmgihDhFQhBhDgIhKQgKhPA5g6QA+hACBgXQhZiNAViQQATh6BbhgQBJhNBSgaIADAJQi0FIEYD/QiCBJgNB/QgMB0BWBYQB8isDEBjQgrAigHA8QgHA6AcA2QAeA6A5AaQA+AcCFgBIgMAyQgpAFglAAQkRAAAPkFgAaAZWQhIgzgFhZQgGhhBVhFQgsgagOglQBghuC6CBQhyiQBSgxQAegSA3gFQCJBPhYEuQg0CchsAtQgmAQgkAAQgyAAgsgggA2OL8QhLgHgngpQglgmAGg1QAFg0AsgrQAxgvBQgRQCIh6BuBOQFQFOmoD4QgyAXglAAQh/AAAXkHgEAhKABlQA0jpjgiDQC1l5kwhrQA1hogIhfQCmlnl0lGQBzh7B6ALQA4AFAjAlQAlAnAEBCQALCgBjBIQC7CNj9GOQB/C9gpDkQC8BVguDKQB/BeAjCTQAfCGgxCLIgLAdQgWlnkoAmgAyfgoQg8ANgqgbQgngZgLg0QgLg0AVg5QAXg+A3gxQCWkOB7BEQkDB0BTEMQghA/AVB6QgRgVgEgjgA9LsOQBYj3EegNQkKBgBrEDQiDAFgwBwIgFAMIgCACQjihoDFh6gA1n64QgMhBAng+QgjgpgFgyQgEgwAXgkQAXglApgJQAvgJA2AgQA+hOBXgWQBUgWA7AoQAuAfANA4QmvgOCXCiIAIAHIgDADQjcgLgZCugEgmfge7Qg0iSBogXQA2gEgXBCQgVBwgsAAQgIAAgKgFgEgK/gk8QgGhxBNh5Qg8gZgNhJQgMhDAehFQAghIA3gYQBAgcBGAxQGyodHDHgQCLgdBPCUQBWgbBKAzQBGAvAZBcQAQA+ABAfQADA2gdAeIgHAEQjqnxmHDfQlUhDjIFYQAilWDQAEQiChEhkALQhkAMhOBPQiwC0AKGlIgFAEQhHg8gGhngEAc7gvCQAThLBhgUQATgCANAMQANALABASQACAtg6AYQgtATgaAAQgiAAgBggg");
	this.shape_9.setTransform(10.7,52);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EEEDEF").s().p("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");
	this.shape_10.setTransform(38.4,67.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDF7F5").s().p("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");
	this.shape_11.setTransform(42.4,59.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EEEDEF").s().p("EgF5AmdQg1gng0goQgGgFgLAAIAAAXIAAAWQg8gEgfg8QgZgwgTgzQgWg7gKhAQAfACAgAJQAUAFAKgLQAQgRAIgcQANgtAegOQA3gaA/AVQBqAkBXBDQBCAzAfBMQAUAxgzAsIgBAAQg5AAgbAlQgpA6g/AYQgIADgJAAQgUAAgWgQgEAGRAmoQgdgKgcgDQgZgDgcADQgZADgXgNQgegQgcgUQgpgehqhYQAfghAmgYQAmgYAqgBQBAgCAGg8QAEgmATgaQAXgfAqABQBhABBhAWIgDAQQAaAFAaAIQAwAPAsgHQBagPAchhQAThCBDgPQBFgPgNhJQgNhIgDhKQgChJAlgyQAlgyBEgUQA2ChhGCZQgEAJgLAFQAlAGARAXQAkAyACA5QADA9gVA+QhCB5hfggQgdgKgPgkQgGApgoAqQgTAVgFAhQgMBZBBA6QhQAjhWgMQgugGglgiQglgigggnQAPA3grAcQgTANgSAOQgdAZgjAPQgKAEgKAAQgIAAgJgDgA40S2IgSgQQgLgJgIgLQgdgjgJguIgCgRIAGgBIgKgXQgGg3AGg5QAHhJAig9QANgYgCgVQgDgYgQgaQgagqgGgvQgFgmAXgfQAOgSA9gpIAIgFQAggtArgXQA0gcA5AQQArAMAQAqQAQArgWApQgPAagfATIgLAJQA9BHALBaQAHA2gfAuQglA6g6AhIgUALIACABQAOAAAPAHQAeAMATAcQAYAiAAAoQAAAtggAbQg1AuhHAIQgRACgRAAQgYAAgYgEgA3bPQQAYgFAVgLIgDAAQgXAAgTAQgAZaBHQgrgDgqgLQgVgGhFgBQgCgXAFgbQAHgfAOgeIAQgfQANgYgDgcQgHhRAlhAQAUgjAegWQASgMAUALIBBAiQAUALAbAAIAFgCQgFgQAAgQQAAgyAegfQAvguA9ADIgBgLQAAgcgCgcQgDgtADgtQACgtAWgnQA5hlBtAUIANAVQCHDcg8CWQgYA8g7gDQB3APAhBwQAKAjgHAnQgMBBhHAFQg0AFgvgMQgHgBgGASQgKAbgNAYQgIAOgQAAQgfAAgYgTQgdgYgVgjIgLgWQgVAZgNAfQgDAGgGACQgPAEgQgDQgLgDgKgFQgLA1grAcQggAVgpAAIgKAAgAbiwnQgVghgCgoQgDgyADgzQAGhUBLgXIAQgBIAAgDQgDgcgGgbQgLgwgjgdQhthbhZh1Qgqg3ghg+QgUgoAAgtQAAgXARgLQAfgVgJgjQgKgogZgfQg0hBBEgiQAWgKAXgFQAngHgdgtQgWghgMglQgPgwAKgwQALg1AqgVQAfgPAegEQD1CJgZCmQgFAjgUAfQgMAUg6AnQBDBKgYBTQANgMAcABQArABAnALQAJACAFAFQAXgMAXAJQAhANAPAhQAWAugFAxQgGA6gVA4QgdBKhOgKQgOgCgGALQgFAMAFAQQgKAAgKgDQgGgCgGAAQgFAAgFAFQA2AhAbAwQAWAnAFAxQAHBMg3A3QgwAxhbCBgEghNgTbQgigRgggXIgRgOIgGgLQgJgTALgNQA8hIgThUQgOg/A4gUQA1gSAOAjQgiiPgCgRQgDgmAVgbQAeglBCg/QAYAPAbAWIAAAAIACACQAdgMAdASQAfATAFAlQAFAfgVAZQgVAaggAPQgPAHgEAKQgHAYACAcQAGBPhIAhQgaAMgQAZQgQAagEAdQgGAsgDAtQgDAigIAhQgFAXgTAAQgJAAgOgGg");
	this.shape_12.setTransform(39.5,117.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDF7F5").s().p("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");
	this.shape_13.setTransform(43.2,67.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EEEDEF").s().p("EABJAofQgtgKgngYQgOgIgMgJQhHgygWhLIgCgJQAUg1AlgqQAPgRATgMQASgLAUACQBCAIA8AdQAoAUAtgBQAhAAAVgoQAnhGBLAHQB+ALBIBuIAEALQggAJgYAlQgXAkgmAbQhrBKhPhWQgegggQgtQAFARACASQAIA/gvAxQgfAignAXQgRAMgTAAQgJAAgJgDgEgHoAmgQgrgBgrgPQhcgggChpQAFgMgYApQgNAWgTASQgiAhg1gFQgMAAgHgDQgGgDgEgDQgnglhxiwQAKgLAPgHQATgJAPgNIAXgUQBXhNBBBdQAJgoAigOQAwgSAwALQApAKAeAWQCSBrgECeIgBAUIgCAVQgLArg6ACIgHABIgIgBgEAKPAjjQgcg4AUhDQAKghANgfQAihVAlhVIAYgwQAOgbASgWQAOgRAIgRQASglAAg7QAAgtARgoQAKgWAWgBQBRgEAnBEIAAAAQAYAJABAjQACAzgRAsQgUA0gqAoQgbAbgLAeQgFAPAHAZQAUBBgOA/QgOBHgeBEIgbABQg1ALgHAFIgxAjQgYARgTAAQgcAAgSgkgA+PO8QiGhUAIh/QACgcAMgZQAJgUgDgNIgOhIQgRhfBHgzQALAGAIAIQANAOAVgGQAFgbALgOQAUgbAoAaQApAaAZAqQAWAkgDAmQgCAYgZASQgXAQgSATQgIAJAGAOQAPAfANAgQANAeABAiQADBSgsBDQgNAUgaAAQgUAAgUgDgAWxBAQiRgXgLiXQgEgsAIgsQAIguAagmQAdgqAvATQAZAKAVgIQAVgJABgXQADhNBCgVQBJgXA8AvQAZASAaANQAVAKAXgKQA0gWAogsQASgUAFgVQALgjgJgnQgNg/AHg7QAEgkAigUQAmgVAqgDQAdA9AIAVQAXA/gKBAQgEAVgGAUQgOArgcAlQghAugyAXQgYALgggGQA1AigKBDQgFAngOAiIgBADQgMAggVAcQhCBahygVIhKgPQgQgEgQgFQAGAkgRAfQgPAbgXAUIgHAFQgNAIghAOIgNgCgAZO28QgKgPAHgUQAJgZASgUQAOgOALgPQAPgTAIgYQAmhvhXhQQgRgQgbgDQgfgDgdgJQgYgHgRgVQgZgegWghQgqhAgahHQgXg+A4gsQAZgTASgZQgsghgEgrIgEgtQgGg5ACg4QABgcAWgUQAfgZAcgaQAJgIACgQIAEgSQBzAXAPABQAxAEAgAkQAvA2AMBHQAJA7gUA6QgLAggWAcQBGgaAwAvQAeAeAIAqQAIAwgLAyQgFAXgKAXQA3gSAXBJQAbBYgqBSQgiBBhAAZIgBABIACAAQAGAIAFAJQAnBDAABJQAAAzgqAdQgmAbg1ACIgIABQhOAAgpg9g");
	this.shape_14.setTransform(64.9,126);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDF7F5").s().p("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");
	this.shape_15.setTransform(42.3,62.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EEEDEF").s().p("EgSkApyQh+gehkhWQgdgagggWQhGgwglhMQgmhPBJgrQArgZAxAAIAAAAIABAAIABAAIAAAMQAQAtAVAqQAVAqAhAgQAZAYAiAGQAeAGARgTQAGgGAAgMIgCgOIAKAMIAEAFQApA1AzAoQAfAZAjgLQAigLAcgkIALAKQAeAaAbAaQAZAZAAAcQAAAnggAYQgqAgg1ADIgYAAQg4AAg4gNgEgFzApJQgjgLgPgeQgRglAOgoQAGgSAKgQIABgCIALAIQAgARAiAHQAYAEAbgBQBXgDgthFQAgAXAiAQQAoASAhgNQApgQAJgsQAHgjgNhGQAdAAAsAYQCAgcBCBwQAIANgjAUIhuA+QgOAIgHAWQgJAXgRAMQgxAhg9AMQhSARhVAAQg/AAg8gSgATlibQgmgDgkgNQgbgJgbAAQgVAAgWAEQgQAEgRABQgCgUAGgXQAiiaCZANQAlADAiAMQgSBwgMBBQgCAJgSAAIgIgBgAWq9OQgRgMgPgOIAAgFIAEAAIgKgBQgrgEgmgUQgvgXgggqQglgwgWg6QgZhCgKhFQgGgsAVgkQAkg9BLgEQgagcgYgfQgyhBgdhLQgTgxAYgsQANgYAfAJQAUAGATAJIAEACIAIAEIAGADQARALARANIgDAHQAhAIAcAYQBAA5AsBGQATAfgKAjQgGAVgYAGQgXAGgagGQBSAUAvBPQAdAvAWAyQAZA5AAA+QAAA+geA2QgXAqgrAVQgVALgXAGIgGgEg");
	this.shape_16.setTransform(109.5,129.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDF7F5").s().p("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");
	this.shape_17.setTransform(49.9,49.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EEEDEF").s().p("ABKGCQg/gTgzgpQgfgXgbgcQAFgEAGgGIgVAAIAKAKQgVANgLgiQgKgiAAgiQAAgyAPgyQANgnAagQIgBgDQgbAGgaAAQg/ACgLgzQgFgWACgWQADgRgDgOQgWhoBYg5QgPgLgNgPQgZgcAFgkQAFgcAMgYIBTAIQAmAEAYAcQAjAoAFA1QADAagNAZQgLAUglAnQBSgZANBeQADAVgGAXQgEARACAQIAFAtQADAbgFAcQA2gfAuA6QAbAjAUAoIAHANQAfBEgFBMIAEADIAAABQgRAWggAIQgWAFgWAAQgcAAgbgIg");
	this.shape_18.setTransform(260.6,-100.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDF7F5").s().p("EAGwA0zQgYgPgZgOQg0gaAWg5QANghAegXQAXgQAagMQBmgvBtABIAUgGQAtgMAuAVQAWAJAQAXQAcAogoAaQgUANgSAPQgOANgPAHQgWAKgagBQg8AAglAtQgOASgSAPQgdAagfAAQgcAAgdgUgEgH0A03QgvgOgjgjQgngmgbgwQgFgIAAgMQgsA8hIACQggAAghgZQh/hiBgh9QAWgcArgGQBdgNBPA7QAXgQAkADQAbACAQAXQALAQgHAUIAAACQgEALgIAJQAJgJAJgHQAvgjA2AeQAgASAXAfQAqA5goA4QgPAUgbAJQgUAIgVAFQAkArgqAaQgRAKgRAAQgKAAgJgDgEATkArlQACgzATgtQANghAXgfQAigvA2AEQAIAdAoAMQAQAEAGAYQALApglARQgsAUgaAqQgQAZgUAYQgRAVgQAXQg1gVADg6gEgYvApvQgggXAHghQAIgiAlgdQBNAfgCA8QAAAcgcAKQgNAEgMAAQgWAAgUgOgEglEAlKQgEgRAUgtIAIADQA1Axg4AVIgHABQgKAAgEgMgEAguAYYQgEgbAlgcQAKAcAIAdQADALAAALQgRAMgLAAQgUAAgGgkgEghAAX+QgrgdgUgyQgWg5ADg9QACgjAagSQAQgKAbAGQBAAnARANQApAgALA2QAKAqgSAoQgOAhghALQgMAEgMAAQgXAAgUgOgAcyKJQgWhWBLgkQA/gfA6AEIAPgDQAVgFATAEQAoAGAeAdQAXAWACAdQADAhgRAeQgOAagaAPQgWAOgZAJQgwASgxAGQgMACgLAAQhQAAgXhWgEAk6AIVQhAgyAKhSQAEgiAQgbQALgSAWgHQA0gPgqg5Qgvg/gJhJQgDgVALgUQAQgaAXgCQATgDAVAEIAMADQALACAKAEQA4AVATBIQAIAdgDAbQgCASgLATQgPAaAAAcQAAAXACAXQADAWgCAXQgHBQgqBFIgGAHQgMANgVAAQgVAAgTgPgEAk4gS4QAFhMgfhEIgHgNQgUgogbgjQgug6g2AfQAFgcgDgbIgFgvQgCgQAEgRQAGgXgDgVQgNhehUAZQAlgnALgUQAPgZgDgaQgHg1gjgoQgYgcgmgEIhTgIQAFgJAHgJQAegqA1gNQA9gQAxArIgDAFIAJAAQBIACAoBHQAPAaAAAcQAAARgMAPQgbAjAbAYQAXAVAEAjQAGAsgQAmQgKAYgbARQgcA2AyANQAVAGAVADQBiAOgGBlQgCAdgRARQgNAOgXACQAHAKAFAWQAJAkgHAnQgDAWgLAPIgBAAgEAkigVKQALAFALAAIAFAAQgGgKgJAAQgFAAgHAFgEgmIgTyQgvgBgTg1QgYhFAmg7QAUgeAjgPQASgIAfAAQA9AqgPBFQgIAkgOAiQgWA2g0AAIgCAAgEga+gjuQgQgfAIgmQAIgjAWgdQAEgFAKAAIAWgMQBHAjgXBMQgQA4g2ACIgDAAQgXAAgKgTgEgTZgr+QgfgVgXgfQg+hRAzhIQANgTAGgUQAFgUgGgWQgThKAqhIQAZgrAwAJQAaAFAwAcQAQgRATgGQASgFAMAOQAZAaANAiQAaBChMAEQhYAEgGBTQgEBFAGBDQACAQgBARQgBA2gxAOIgKACQgNAAgMgJgEAB1gwlIg/gQIhLgTQgIgBgMADQgZAIgZgHQgRgEgRgKQgkgTgXgHQgOgEgCgSQgDggAHgiQAJgiATgcQAMgRAVgLQA4gcA9AAQATAAAVgGQA+gRAoAtQAUAXA6goQBdAQAqBGQANAVAAAcQACBEhNAIQgfADgcAKQgTAHgMATQgOAageAAQgLAAgNgDg");
	this.shape_19.setTransform(46.4,55.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDF7F5").s().p("EgHcA1LQgwgIgqgWQglgSgRgjQgJgVALgZQAPgfAcgMQAOgFAVALIAQAGQAHgNAWgEQAjgGAjAKQA1AQACAvQgyAHAFAxQAFA4gvAAQgJAAgKgCgEAH/A06QgVgOgNgZQgihFBDgtQAbgSAfgMQArgRArAAQAgAAAfASIADACQA3gOApAwQAHAIgJAXIgXBDQgXBFhCgZQgbgKggAAQgVAAgSAHQgYAKgYAFQgHACgHAAQgQAAgPgKgEgMvAzoQhKgCgkhKQgmhMAjhJQAIgRAfAAQAgAAAgAGIAKAGQAmg4A3A+QAiAnAAAyQAAAXgTAYQgMAPgJASQgNAbgUAOQgVAOgfAAIgCAAgEAUvAs8QgCgcAFgcQAGgcAQgUQAQgTAbgJIAwgPIAAAAIAEAMQAQAAAPgDQALgCALgGQgECLh9AkQgJADgHAAQgZAAgDgggEgjGAXYQgMgQgGgXQgFgWgBgXQgDg1A0gDIAfAAQApACAEA2QADAigHAfQgEAUgSANQgRAMgPAAQgWAAgVgagAfKMAQgigUgLgnQgKgoAJgtQAThUBSAUQA2ANA0ARIAJgPIADACQAGAEAEAFQAVAagDAhQgCAjgXAcQgOARgMASQgKAQgLAOQgPAUgbAAQgvAAgogZgEAmzAFHQgfgCgRgTQgpgxgGg/QgFhCAdg+QAIgRAUACQAcAEAaARIAYgsIAFADQBMAsgRBTQgDAPgWALQgVAMgGAQQgJAdABAhQADA1gmAAIgEAAgEAiogTbIgthpQgjhVA5hEQAVgZAkADQAmADBvBJQBcAWgCBaQgBBAg5gIIhAgKQARArgaAfQgRAVglAEIgNABQgzAAgYg2gEgoVgVvQgPhJA3gmQASgNAbAAQAYBZgXAxQgHAOgaAGQgIACgHAAQgeAAgIgkgEAgugYpQhcgeAAhjQAAgtAQgpQALgbAVgWQAdgdgJgQQgPgXgMgZQgOgfAFgfQAShbBnAUIAcAbQAZgbAvAXQAhARAPAhQARAigHAmQgEAYgKAZQgGAPAGAOQAVAwAHAwQAIA7ggAvQgaAlgugDIgYgQIgHAKQgTAYgYALQgPAIgRAAQgPAAgQgGgEgbyglqQAGgLAlgRQgFAigNAeQgDAJgLAFQgagWAPgcgEgTtgu8QgjgUgXgkQg2hQAlhYIASgqQAhhJBPADIAggLQAVAoAIAqQADAOgPANQgRAPgFAQQgGASAIAXQAOAvgiAeQgOANgFAWQgGAcgQAUQgGAJgIAAQgEAAgFgDgEACXgykQgVgNgPgXQgXghgpALQgVAFgRAMIgnAgQgQANgWAEQgXAFgIgCIgDgCQgUAAgSgGQgRgFgIgPQgIgTAAgXQAAgWAGgVQAEgNANgCQApgJApALQAWAGAUAIQAWAJATAAQALAAAMgDIALgDQATgGAPgJQALgHAIgQQAIgSAPgFQAygSAzARIAKAQQAtgcAYBAQAGAQgMAWQgJARgFATQgGAVgLAMQgUAWggAAQglAAgggVg");
	this.shape_20.setTransform(45.7,57);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDF7F5").s().p("EgKEA1iQgggZgEguQgBgKAKgLIAgALIAVAWQAOAMAaAEQANABAAARQAAAXgRAHQgPAGgOAAQgSAAgPgLgEAJNA0xQgRgFgQgHIAJgUQApgrAqACQAjACAjAiQAFAFAAALQgVARgXAGQgWAFgUAAQgYAAgYgHgEgO6AzJQgqgGgfgaIASgUQAVgLASAEQAjAHAcAaQAJAIAFALQgXAIgVAAIgRgBgEgl0AXDQgmgWgVgoQgLgWAAgdQCVAhgzBPQgFAGgHAAQgHAAgJgFgEAg4ANcQgggKgLghQgKgjAOgkQAMgfAVgcQBSBdgrBDQgJAPgOAAQgFAAgFgCgEAlpACEQgyg4Asg4QAbgiAnAkIAVALQAFAzgKAvQgGAagVAAQgaAAgXgZgEAjfgTeQgTgIgOgTQgcgmgagoQgYgmAtgbQAfgTAhgNQAJgEAQAFQAOgPAXAAQAVgBAPAKQAcASAKAgQALAegNAcQgIARgQARQgVAXgQAcQgOAWgYAAQgOAAgTgIgEAgggbJQhJgvgWhVQgIghAGggQACgQAKgMQgOAHgGgdQgDgUANgUQAzhOBWAcQAIgVAqAOQAvAQAHAyQAFAiADAiQAFA1g4AOIgqAMQAzAQgIAzQgKA7gxAOQgGABgHAAQgQAAgQgKgEgW1gxyQgTgXAGggQAKg0AigpQAIgKAVAAIAQgFQAaBGggBMQgJAWgYAGIgMABQgQAAgJgMgEABPg0dQhBgOAeguQAIgLAagGQA2gKAEArQADAvgnAAQgJAAgMgDg");
	this.shape_21.setTransform(56.7,57.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDF7F5").s().p("EgJiA23IAlgnQAQALAJAIQAMAJALALQgQARgQAAQgaAAgbgRgEAKsA1pQgLgBgQgWQALgRAOgNQAdgaAfgXIgLByQgkgMgLAAgEgQ/A1QQgegUgWgjQALgFAKAAQAgAAAfADQgPgggQgWQArgLAlAJQAfAIAbAcIgrAhIgSAPIgKAKQgOAPgPAHQgKAEgIAAQgLAAgKgHgEgnXAXTQglgNgHghQgDgSAVgWIAfAAQAXAOAOAUQAQAWgQAUQgKANgPAAQgIAAgJgDgEAhCAPgQgXgJACgbQADgeAcgRQAJgGA6AXIAAAGQgCAegXAVQgOAOgQAAQgLAAgLgFgEAnZACSQgSgZALgbQAKgYAdgJIAEgBQAGALABAQQADAtgZAaQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgGAAgKgPgEAkOgTVQgaglADgsQACgeAcgNQAegOAlAAIALgXQAlAFAYAVQAXATgFAfQgFAfgYAaIgbAbQgdAagdACIgFABQgaAAgTgcgEAhmgeQQgcgCgXgRQglgXgRgpQgVgygSgzQgRgxAtgNQAzgQA1AAQAbAAAZASIAgAIQAuAPgXAsQgGALgPAIIgMAJQBBBOhKA5QgTAOgZAAIgJAAgEgXqgzeQgVgHAEgTQAGgbBQgXQgGAogVAaQgKANgPAAQgIAAgJgDgEABgg1nQgfgRAAgiQAAgXAZgRQAHgFAKAAIAWAAQA2AQgBAzQAAAXgbAKQgOAFgNAAQgRAAgPgJg");
	this.shape_22.setTransform(56.9,57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:0}}]}).to({state:[{t:this.instance,p:{alpha:0.27}}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[]},2).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.8,-195.3,416.2,433.3);


(lib.li_1_69_77011复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_319 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(319).call(this.frame_319).wait(1));

	// 图层 9
	this.instance = new lib.li_1_7_20313("synched",3,false);
	this.instance.setTransform(272.5,428.1,1.64,1.389,0,90,-90,-0.2,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(289).to({_off:false},0).wait(31));

	// 图层 11
	this.instance_1 = new lib.li_1_11_48396("synched",0);
	this.instance_1.setTransform(250,448.6,1,1,0,0,0,5.3,223.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:6},6).wait(1).to({regX:0.4,regY:-6.8,rotation:-0.4,x:244.6,y:221.8,startPosition:7},0).wait(1).to({rotation:-0.8,x:244.2,y:225.6,startPosition:8},0).wait(1).to({rotation:-1.2,x:243.7,y:229.4,startPosition:9},0).wait(1).to({rotation:-1.6,x:243.3,y:233.2,startPosition:10},0).wait(1).to({rotation:-2,x:242.8,y:237.1,startPosition:11},0).wait(1).to({rotation:-2.4,x:242.4,y:240.9,startPosition:12},0).wait(1).to({regX:5.3,regY:223.7,rotation:-2.8,x:258,y:474.8,startPosition:13},0).wait(1).to({regX:0.4,regY:-6.8,x:239.7,y:236.5,startPosition:14},0).wait(1).to({rotation:-2.9,x:237.6,y:228.1,startPosition:15},0).wait(1).to({rotation:-3,x:235.4,y:219.8,startPosition:16},0).wait(1).to({x:233.3,y:211.4,startPosition:17},0).wait(1).to({rotation:-3.1,x:231.1,y:203.1,startPosition:18},0).wait(1).to({regX:5.3,regY:223.8,rotation:-3.2,x:246.7,y:424.6,startPosition:19},0).wait(1).to({regX:0.4,regY:-6.8,x:228.9,y:198.9,startPosition:20},0).wait(1).to({y:203.1,startPosition:21},0).wait(1).to({y:207.4,startPosition:22},0).wait(1).to({y:211.6,startPosition:23},0).wait(1).to({y:215.8,startPosition:24},0).wait(1).to({y:220.1,startPosition:25},0).wait(1).to({regX:5.3,regY:223.8,x:246.7,y:454.3,startPosition:26},0).wait(1).to({regX:0.4,regY:-6.8,x:228.9,y:223.5,startPosition:27},0).wait(1).to({y:222.7,startPosition:28},0).wait(1).to({y:221.9,startPosition:29},0).wait(1).to({y:221.1,startPosition:30},0).wait(1).to({y:220.3,startPosition:31},0).wait(1).to({y:219.5,startPosition:32},0).wait(1).to({regX:5.3,regY:223.8,x:246.7,y:448.7,startPosition:33},0).to({startPosition:108},75).to({rotation:-3,y:445.5,startPosition:113},5).to({rotation:-1,x:250.1,y:466.8,startPosition:119},6).wait(1).to({regX:0.4,regY:-6.8,x:241.2,y:235.2,startPosition:120},0).wait(1).to({rotation:-0.8,x:241.9,y:232.1,startPosition:121},0).wait(1).to({rotation:-0.6,x:242.8,y:228.1,startPosition:122},0).wait(1).to({rotation:-0.3,x:243.7,y:224.1,startPosition:123},0).wait(1).to({rotation:-0.2,x:244.5,y:220.7,startPosition:124},0).wait(1).to({rotation:0,x:245,y:218.6,startPosition:125},0).wait(1).to({regX:5.3,regY:223.7,x:250,y:448.6,startPosition:126},0).to({startPosition:145},19).to({rotation:-2.8,x:258,y:474.8,startPosition:151},6).wait(1).to({regX:0.4,regY:-6.8,x:239.7,y:236.5,startPosition:152},0).wait(1).to({rotation:-2.9,x:237.6,y:228.1,startPosition:153},0).wait(1).to({rotation:-3,x:235.4,y:219.8,startPosition:154},0).wait(1).to({x:233.3,y:211.4,startPosition:155},0).wait(1).to({rotation:-3.1,x:231.1,y:203.1,startPosition:156},0).wait(1).to({regX:5.3,regY:223.8,rotation:-3.2,x:246.7,y:424.6,startPosition:157},0).wait(1).to({regX:0.4,regY:-6.8,x:228.9,y:198.9,startPosition:158},0).wait(1).to({y:203.1,startPosition:159},0).wait(1).to({y:207.4,startPosition:160},0).wait(1).to({y:211.6,startPosition:161},0).wait(1).to({y:215.8,startPosition:162},0).wait(1).to({y:220.1,startPosition:163},0).wait(1).to({regX:5.3,regY:223.8,x:246.7,y:454.3,startPosition:164},0).wait(1).to({regX:0.4,regY:-6.8,x:228.9,y:223.5,startPosition:165},0).wait(1).to({y:222.7,startPosition:166},0).wait(1).to({y:221.9,startPosition:167},0).wait(1).to({y:221.1,startPosition:168},0).wait(1).to({y:220.3,startPosition:169},0).wait(1).to({y:219.5,startPosition:170},0).wait(1).to({regX:5.3,regY:223.8,x:246.7,y:448.7,startPosition:171},0).to({startPosition:213},42).to({rotation:-1,x:250.1,y:466.8,startPosition:219},6).wait(1).to({regX:0.4,regY:-6.8,x:241.2,y:235.2,startPosition:220},0).wait(1).to({rotation:-0.8,x:241.9,y:232.1,startPosition:221},0).wait(1).to({rotation:-0.6,x:242.8,y:228.1,startPosition:222},0).wait(1).to({rotation:-0.3,x:243.7,y:224.1,startPosition:223},0).wait(1).to({rotation:-0.2,x:244.5,y:220.7,startPosition:224},0).wait(1).to({rotation:0,x:245,y:218.6,startPosition:225},0).wait(1).to({regX:5.3,regY:223.7,x:250,y:448.6,startPosition:226},0).to({startPosition:259},33).to({startPosition:264},5).wait(1).to({regX:0.4,regY:-6.8,rotation:-0.1,x:244.4,y:217.3,startPosition:265},0).wait(1).to({rotation:-0.5,x:242.2,y:215.2,startPosition:266},0).wait(1).to({rotation:-1,x:239,y:212.1,startPosition:267},0).wait(1).to({rotation:-1.7,x:235.3,y:208.7,startPosition:268},0).wait(1).to({rotation:-2.2,x:232.1,y:205.6,startPosition:269},0).wait(1).to({rotation:-2.6,x:229.9,y:203.6,startPosition:270},0).wait(1).to({regX:5.3,regY:223.7,rotation:-2.7,x:244.9,y:433,startPosition:308},0).wait(2).to({startPosition:273},0).to({rotation:3.7,x:257.2,y:460.9,startPosition:280},7).to({startPosition:283},3).wait(1).to({regX:0.4,regY:-6.8,rotation:3.3,x:265.5,y:227.4,startPosition:284},0).wait(1).to({rotation:2.5,x:261.5,y:219.6,startPosition:285},0).wait(1).to({rotation:1.7,x:257.9,y:212.4,startPosition:286},0).wait(1).to({rotation:1.3,x:255.9,y:208.6,startPosition:287},0).wait(1).to({regX:5.3,regY:223.7,rotation:1.2,x:255.4,y:438.1,startPosition:288},0).to({_off:true},1).wait(31));

	// 图层 12
	this.instance_2 = new lib.li_1_31_13982("synched",0);
	this.instance_2.setTransform(251,590,1,1.007,0,0,0,85,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:6},6).wait(1).to({regX:83.2,regY:103.8,scaleX:1.01,scaleY:1,rotation:0.2,x:249.7,y:665.1,startPosition:7},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:250.2,y:666.8,startPosition:8},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:250.7,y:668.5,startPosition:9},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:251.2,y:670.2,startPosition:10},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:251.7,y:671.9,startPosition:11},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:252.2,y:673.6,startPosition:12},0).wait(1).to({regX:85,regY:30.9,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:256.1,y:604.6,startPosition:13},0).wait(1).to({regX:83.2,regY:103.8,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:252.1,y:671.7,startPosition:14},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:251.5,y:668.1,startPosition:15},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,x:250.9,y:664.5,startPosition:16},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:250.3,y:660.9,startPosition:17},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:249.7,y:657.3,startPosition:18},0).wait(1).to({regX:85,regY:30.9,scaleX:0.98,scaleY:1.06,rotation:0,x:250.9,y:576.5,startPosition:19},0).wait(1).to({regX:83.2,regY:103.8,scaleX:0.99,scaleY:1.05,x:249.2,y:655.2,startPosition:20},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:656.9,startPosition:21},0).wait(1).to({scaleX:1,scaleY:1.03,y:658.5,startPosition:22},0).wait(1).to({scaleX:1,scaleY:1.02,y:660.1,startPosition:23},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:249.3,y:661.8,startPosition:24},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:663.4,startPosition:25},0).wait(1).to({regX:85.1,regY:30.9,scaleX:1.02,scaleY:1,x:251.2,y:592.3,startPosition:26},0).wait(1).to({regX:83.2,regY:103.8,scaleX:1.02,scaleY:1,x:249.3,y:664.8,startPosition:27},0).wait(1).to({scaleX:1.01,scaleY:1,y:664.6,startPosition:28},0).wait(1).to({scaleX:1.01,scaleY:1,x:249.2,y:664.3,startPosition:29},0).wait(1).to({scaleX:1.01,scaleY:1,y:664.1,startPosition:30},0).wait(1).to({scaleX:1.01,scaleY:1,y:663.8,startPosition:31},0).wait(1).to({scaleX:1,scaleY:1.01,y:663.6,startPosition:32},0).wait(1).to({regX:85,regY:30.9,scaleX:1,scaleY:1.01,x:251,y:590,startPosition:33},0).to({startPosition:3},75).to({scaleX:0.99,scaleY:1.01,y:587.8,startPosition:8},5).to({scaleX:1.05,scaleY:0.98,x:251.2,y:602.3,startPosition:14},6).wait(1).to({regX:83.2,regY:103.8,scaleX:1.05,scaleY:0.99,x:249.3,y:673.3,startPosition:15},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:671.6,startPosition:16},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:669.3,startPosition:17},0).wait(1).to({scaleX:1.02,scaleY:1,x:249.2,y:666.9,startPosition:18},0).wait(1).to({scaleX:1.01,scaleY:1,y:665,startPosition:19},0).wait(1).to({scaleX:1,scaleY:1.01,y:663.8,startPosition:20},0).wait(1).to({regX:85,regY:30.9,scaleX:1,scaleY:1.01,x:251,y:590,startPosition:21},0).to({startPosition:5},19).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:256.1,y:604.6,startPosition:11},6).wait(1).to({regX:83.2,regY:103.8,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:252.1,y:671.7,startPosition:12},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:251.5,y:668.1,startPosition:13},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,x:250.9,y:664.5,startPosition:14},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:250.3,y:660.9,startPosition:15},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:249.7,y:657.3,startPosition:16},0).wait(1).to({regX:85,regY:30.9,scaleX:0.98,scaleY:1.06,rotation:0,x:250.9,y:576.5,startPosition:17},0).wait(1).to({regX:83.2,regY:103.8,scaleX:0.99,scaleY:1.05,x:249.2,y:655.2,startPosition:18},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:656.9,startPosition:19},0).wait(1).to({scaleX:1,scaleY:1.03,y:658.5,startPosition:20},0).wait(1).to({scaleX:1,scaleY:1.02,y:660.1,startPosition:21},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:249.3,y:661.8,startPosition:22},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:663.4,startPosition:23},0).wait(1).to({regX:85.1,regY:30.9,scaleX:1.02,scaleY:1,x:251.2,y:592.3,startPosition:24},0).wait(1).to({regX:83.2,regY:103.8,scaleX:1.02,scaleY:1,x:249.3,y:664.8,startPosition:25},0).wait(1).to({scaleX:1.01,scaleY:1,y:664.6,startPosition:26},0).wait(1).to({scaleX:1.01,scaleY:1,x:249.2,y:664.3,startPosition:27},0).wait(1).to({scaleX:1.01,scaleY:1,y:664.1,startPosition:28},0).wait(1).to({scaleX:1.01,scaleY:1,y:663.8,startPosition:29},0).wait(1).to({scaleX:1,scaleY:1.01,y:663.6,startPosition:30},0).wait(1).to({regX:85,regY:30.9,scaleX:1,scaleY:1.01,x:251,y:590,startPosition:31},0).to({startPosition:3},42).to({scaleX:1.05,scaleY:0.98,x:251.2,y:602.3,startPosition:9},6).wait(1).to({regX:83.2,regY:103.8,scaleX:1.05,scaleY:0.99,x:249.3,y:673.3,startPosition:10},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:671.6,startPosition:11},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:669.3,startPosition:12},0).wait(1).to({scaleX:1.02,scaleY:1,x:249.2,y:666.9,startPosition:13},0).wait(1).to({scaleX:1.01,scaleY:1,y:665,startPosition:14},0).wait(1).to({scaleX:1,scaleY:1.01,y:663.8,startPosition:15},0).wait(1).to({regX:85,regY:30.9,scaleX:1,scaleY:1.01,x:251,y:590,startPosition:16},0).to({startPosition:14},33).to({startPosition:19},5).wait(1).to({regX:83.2,regY:103.8,scaleX:1,scaleY:1.01,x:249.1,y:663,startPosition:20},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:-0.1,x:248.7,y:661.9,startPosition:21},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:-0.3,x:248.2,y:660.4,startPosition:22},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:-0.4,x:247.7,y:658.6,startPosition:23},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.6,x:247.2,y:656.9,startPosition:24},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.7,x:246.8,y:655.9,startPosition:25},0).wait(1).to({regX:85,regY:30.9,scaleX:0.98,scaleY:1.04,x:247.6,y:579.5,startPosition:28},0).wait(2).to({startPosition:30},0).to({regX:85.1,scaleX:1.02,scaleY:0.99,rotation:1.3,x:256.9,y:598.4,startPosition:2},7).to({startPosition:5},3).wait(1).to({regX:83.2,regY:103.8,scaleX:1.02,scaleY:0.99,rotation:1.2,x:253,y:669,startPosition:6},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:1,x:252.4,y:665.8,startPosition:7},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:0.9,x:251.8,y:662.8,startPosition:8},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.8,x:251.5,y:661.1,startPosition:9},0).wait(1).to({regX:85,regY:30.9,scaleX:0.98,scaleY:1.04,rotation:0.7,x:254.3,y:584.7,startPosition:10},0).to({_off:true},1).wait(31));

	// 图层 13
	this.instance_3 = new lib.li_1_39_12250("synched",0);
	this.instance_3.setTransform(250.1,578.1,1,1.007,0,0,0,1.6,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},6).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.01,scaleY:1,rotation:0.2,x:249.2,y:556.6},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:250,y:558.8},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:250.8,y:561.1},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:251.7,y:563.4},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:252.5,y:565.7},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:253.3,y:567.9},0).wait(1).to({regX:1.6,regY:23.8,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:255.4,y:593.2},0).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:253,y:565.1},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:252,y:559.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:250.9,y:554.7},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:249.8,y:549.5},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:248.7,y:544.3},0).wait(1).to({regX:1.5,regY:23.8,scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:249.9,y:563.9},0).wait(1).to({regX:-0.1,regY:0.3,scaleX:0.99,scaleY:1.05,x:247.7,y:541.6},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,y:544.2},0).wait(1).to({scaleX:1,scaleY:1.03,x:247.8,y:546.8},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,y:549.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:551.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:554.5},0).wait(1).to({regX:1.6,regY:23.9,scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:250.2,y:580.5},0).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.02,scaleY:1,x:247.8,y:556.6},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,y:556.2},0).wait(1).to({scaleX:1.01,scaleY:1,y:555.8},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:555.4},0).wait(1).to({scaleX:1.01,scaleY:1,y:555.1},0).wait(1).to({scaleX:1,scaleY:1.01,y:554.7},0).wait(1).to({regX:1.6,regY:23.9,scaleX:1,scaleY:1.01,x:250.1,y:578},0).to({startPosition:0},75).to({regX:1.5,scaleX:0.99,scaleY:1.01,rotation:-1.3,x:250,y:575.7},5).to({scaleX:1.05,scaleY:0.98,rotation:0,x:250.2,y:590.6},6).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.05,scaleY:0.99,x:248.4,y:566.6},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:564.4},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:561.6},0).wait(1).to({scaleX:1.02,scaleY:1,y:558.7},0).wait(1).to({scaleX:1.01,scaleY:1,y:556.3},0).wait(1).to({scaleX:1,scaleY:1.01,y:554.8},0).wait(1).to({regX:1.6,regY:23.9,scaleX:1,scaleY:1.01,x:250.1,y:578.1},0).to({startPosition:0},19).to({regY:23.8,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:255.4,y:593.2},6).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:253,y:565.1},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:252,y:559.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:250.9,y:554.7},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:249.8,y:549.5},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:248.7,y:544.3},0).wait(1).to({regX:1.5,regY:23.8,scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:249.9,y:563.9},0).wait(1).to({regX:-0.1,regY:0.3,scaleX:0.99,scaleY:1.05,x:247.7,y:541.6},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,y:544.2},0).wait(1).to({scaleX:1,scaleY:1.03,x:247.8,y:546.8},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,y:549.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:551.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:554.5},0).wait(1).to({regX:1.6,regY:23.9,scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:250.2,y:580.5},0).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.02,scaleY:1,x:247.8,y:556.6},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,y:556.2},0).wait(1).to({scaleX:1.01,scaleY:1,y:555.8},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:555.4},0).wait(1).to({scaleX:1.01,scaleY:1,y:555.1},0).wait(1).to({scaleX:1,scaleY:1.01,y:554.7},0).wait(1).to({regX:1.6,regY:23.9,scaleX:1,scaleY:1.01,x:250.1,y:578},0).to({startPosition:0},42).to({regX:1.5,scaleX:1.05,scaleY:0.98,rotation:0,x:250.2,y:590.6},6).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.05,scaleY:0.99,x:248.4,y:566.6},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:564.4},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:561.6},0).wait(1).to({scaleX:1.02,scaleY:1,y:558.7},0).wait(1).to({scaleX:1.01,scaleY:1,y:556.3},0).wait(1).to({scaleX:1,scaleY:1.01,y:554.8},0).wait(1).to({regX:1.6,regY:23.9,scaleX:1,scaleY:1.01,x:250.1,y:578.1},0).to({startPosition:0},33).to({startPosition:0},5).wait(1).to({regX:-0.1,regY:0.3,scaleX:1,scaleY:1.01,x:248.2,y:553.7},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:-0.1,x:247.6,y:552.2},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:-0.3,x:246.9,y:549.8},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:-0.4,x:246,y:547.1},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.6,x:245.2,y:544.7},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.7,x:244.7,y:543.1},0).wait(1).to({regX:1.6,regY:23.8,scaleX:0.98,scaleY:1.04,x:246.5,y:567.2},0).wait(2).to({startPosition:0},0).to({regY:23.9,scaleX:1.02,scaleY:0.99,rotation:1.3,x:256.1,y:586.7},7).to({startPosition:0},3).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.02,scaleY:0.99,rotation:1.2,x:254.5,y:561.3},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:1,x:253.6,y:556},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:0.9,x:252.7,y:551.1},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.8,x:252.3,y:548.4},0).wait(1).to({regX:1.6,regY:23.8,scaleX:0.98,scaleY:1.04,rotation:0.7,x:253.5,y:572.2},0).to({_off:true},1).wait(31));

	// 元件 5
	this.instance_4 = new lib.li_1_40_60262("synched",0);
	this.instance_4.setTransform(256.6,612,0.913,1.007,0,0,0,3.9,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:6},6).wait(1).to({regX:-6.9,regY:-16.6,scaleX:0.92,scaleY:1,rotation:0.2,x:247.8,y:467.2,startPosition:7},0).wait(1).to({scaleX:0.92,scaleY:1,rotation:0.4,x:248.9,y:469.9,startPosition:8},0).wait(1).to({scaleX:0.93,scaleY:0.99,rotation:0.5,x:250,y:472.6,startPosition:9},0).wait(1).to({scaleX:0.94,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:251.1,y:475.4,startPosition:10},0).wait(1).to({scaleX:0.94,scaleY:0.98,skewX:0.9,skewY:0.8,x:252.1,y:478.1,startPosition:11},0).wait(1).to({scaleX:0.95,scaleY:0.98,skewX:1.1,skewY:1,x:253.2,y:480.8,startPosition:12},0).wait(1).to({regX:3.9,regY:129.8,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:1.1,x:261.5,y:625.9,startPosition:13},0).wait(1).to({regX:-6.9,regY:-16.6,scaleX:0.94,scaleY:0.99,skewX:0.8,skewY:0.7,x:252.7,y:477.1,startPosition:14},0).wait(1).to({scaleX:0.93,scaleY:1,skewX:0.4,skewY:0.2,x:250.9,y:470.7,startPosition:15},0).wait(1).to({scaleX:0.93,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:249.2,y:464.2,startPosition:16},0).wait(1).to({scaleX:0.92,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:247.5,y:457.7,startPosition:17},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewX:-1,skewY:-1.1,x:245.7,y:451.3,startPosition:18},0).wait(1).to({regX:4,regY:129.9,scaleX:0.9,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:257.4,y:599.4,startPosition:19},0).wait(1).to({regX:-6.9,regY:-16.6,scaleX:0.9,scaleY:1.05,x:243.8,y:448.1,startPosition:20},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewY:-1.5,y:451.4,startPosition:21},0).wait(1).to({scaleX:0.91,scaleY:1.03,y:454.7,startPosition:22},0).wait(1).to({scaleX:0.92,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,x:243.7,y:458,startPosition:23},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:243.8,y:461.3,startPosition:24},0).wait(1).to({scaleX:0.93,scaleY:1.01,x:243.7,y:464.7,startPosition:25},0).wait(1).to({regX:3.9,regY:129.9,scaleX:0.93,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:257.8,y:613.9,startPosition:26},0).wait(1).to({regX:-6.9,regY:-16.6,scaleX:0.93,scaleY:1,x:243.8,y:467.5,startPosition:27},0).wait(1).to({scaleX:0.93,scaleY:1,skewY:-1.5,y:467,startPosition:28},0).wait(1).to({scaleX:0.92,scaleY:1,y:466.5,startPosition:29},0).wait(1).to({scaleX:0.92,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:466,startPosition:30},0).wait(1).to({scaleX:0.92,scaleY:1,y:465.6,startPosition:31},0).wait(1).to({scaleX:0.92,scaleY:1.01,y:465.1,startPosition:32},0).wait(1).to({regX:3.9,regY:129.9,scaleX:0.91,scaleY:1.01,x:257.5,y:611.8,startPosition:33},0).to({startPosition:108},75).to({scaleX:0.9,scaleY:1.01,rotation:-1.3,x:257.4,y:609.7,startPosition:113},5).to({scaleX:0.91,scaleY:1.01,rotation:0,x:256.6,y:612,startPosition:119},6).wait(1).to({regX:-6.9,regY:-16.6,x:246.8,y:464.5,startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({regX:3.9,regY:129.9,x:256.6,y:612,startPosition:126},0).to({startPosition:145},19).to({regY:129.8,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:1.1,x:261.5,y:625.9,startPosition:151},6).wait(1).to({regX:-6.9,regY:-16.6,scaleX:0.94,scaleY:0.99,skewX:0.8,skewY:0.7,x:252.7,y:477.1,startPosition:152},0).wait(1).to({scaleX:0.93,scaleY:1,skewX:0.4,skewY:0.2,x:250.9,y:470.7,startPosition:153},0).wait(1).to({scaleX:0.93,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:249.2,y:464.2,startPosition:154},0).wait(1).to({scaleX:0.92,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:247.5,y:457.7,startPosition:155},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewX:-1,skewY:-1.1,x:245.7,y:451.3,startPosition:156},0).wait(1).to({regX:4,regY:129.9,scaleX:0.9,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:257.4,y:599.4,startPosition:157},0).wait(1).to({regX:-6.9,regY:-16.6,scaleX:0.9,scaleY:1.05,x:243.8,y:448.1,startPosition:158},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewY:-1.5,y:451.4,startPosition:159},0).wait(1).to({scaleX:0.91,scaleY:1.03,y:454.7,startPosition:160},0).wait(1).to({scaleX:0.92,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,x:243.7,y:458,startPosition:161},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:243.8,y:461.3,startPosition:162},0).wait(1).to({scaleX:0.93,scaleY:1.01,x:243.7,y:464.7,startPosition:163},0).wait(1).to({regX:3.9,regY:129.9,scaleX:0.93,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:257.8,y:613.9,startPosition:164},0).wait(1).to({regX:-6.9,regY:-16.6,scaleX:0.93,scaleY:1,x:243.8,y:467.5,startPosition:165},0).wait(1).to({scaleX:0.93,scaleY:1,skewY:-1.5,y:467,startPosition:166},0).wait(1).to({scaleX:0.92,scaleY:1,y:466.5,startPosition:167},0).wait(1).to({scaleX:0.92,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:466,startPosition:168},0).wait(1).to({scaleX:0.92,scaleY:1,y:465.6,startPosition:169},0).wait(1).to({scaleX:0.92,scaleY:1.01,y:465.1,startPosition:170},0).wait(1).to({regX:3.9,regY:129.9,scaleX:0.91,scaleY:1.01,x:257.5,y:611.8,startPosition:171},0).to({startPosition:213},42).to({rotation:0,x:256.6,y:612,startPosition:219},6).wait(1).to({regX:-6.9,regY:-16.6,x:246.8,y:464.5,startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({regX:3.9,regY:129.9,x:256.6,y:612,startPosition:226},0).to({startPosition:259},33).to({startPosition:264},5).wait(1).to({regX:-6.9,regY:-16.6,scaleX:0.91,scaleY:1.01,x:246.5,y:463.7,startPosition:265},0).wait(1).to({scaleX:0.91,scaleY:1.01,rotation:-0.1,x:245.8,y:461.7,startPosition:266},0).wait(1).to({scaleX:0.91,scaleY:1.02,rotation:-0.3,x:244.8,y:458.7,startPosition:267},0).wait(1).to({scaleX:0.9,scaleY:1.03,rotation:-0.4,x:243.7,y:455.3,startPosition:268},0).wait(1).to({scaleX:0.9,scaleY:1.04,rotation:-0.6,x:242.7,y:452.2,startPosition:269},0).wait(1).to({scaleX:0.9,scaleY:1.04,rotation:-0.7,x:242,y:450.2,startPosition:270},0).wait(1).to({regX:3.9,regY:129.9,scaleY:1.04,x:253.4,y:602.2,startPosition:308},0).wait(2).to({startPosition:310},0).to({scaleX:0.93,scaleY:0.99,rotation:1.3,x:262,y:620.1,startPosition:317},7).to({startPosition:320},3).wait(1).to({regX:-6.9,regY:-16.6,scaleX:0.93,scaleY:0.99,rotation:1.2,x:254.7,y:472.6,startPosition:321},0).wait(1).to({scaleX:0.92,scaleY:1.01,rotation:1,x:253.6,y:465.6,startPosition:322},0).wait(1).to({scaleX:0.91,scaleY:1.03,rotation:0.9,x:252.6,y:459.1,startPosition:323},0).wait(1).to({scaleX:0.9,scaleY:1.04,rotation:0.8,x:252,y:455.6,startPosition:324},0).wait(1).to({regX:3.9,regY:129.9,scaleX:0.9,scaleY:1.04,rotation:0.7,x:259.5,y:607.5,startPosition:325},0).to({_off:true},1).wait(31));

	// 图层 15
	this.instance_5 = new lib.li_1_43_63870("synched",0);
	this.instance_5.setTransform(175.5,567.4,0.999,1.005,0,-11.5,-11.8,78.9,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,startPosition:6},6).wait(1).to({regX:39.5,regY:62.9,scaleX:1,scaleY:1,skewX:-9,skewY:-9.2,x:142.1,y:618.4,startPosition:7},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-6.4,skewY:-6.6,x:138.4,y:618,startPosition:8},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:-3.9,skewY:-4.1,x:134.9,y:617.4,startPosition:9},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:-1.3,skewY:-1.5,x:131.4,y:616.8,startPosition:10},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:1.2,skewY:1,x:128,y:616,startPosition:11},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:3.7,skewY:3.6,x:124.7,y:615.1,startPosition:12},0).wait(1).to({regX:78.9,regY:18.9,scaleX:1.04,scaleY:0.97,skewX:6.3,skewY:6.2,x:167,y:576,startPosition:13},0).wait(1).to({regX:39.5,regY:62.9,scaleX:1.03,scaleY:0.99,skewX:2,skewY:1.5,x:127,y:614.8,startPosition:14},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:-2.3,skewY:-3.1,x:132.8,y:615.2,startPosition:15},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-6.6,skewY:-7.8,x:139,startPosition:16},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-10.8,skewY:-12.4,x:145.5,y:615,startPosition:17},0).wait(1).to({scaleX:1,scaleY:1.04,skewX:-15.1,skewY:-17.1,x:152.2,y:614.4,startPosition:18},0).wait(1).to({regX:78.9,regY:18.9,scaleX:0.99,scaleY:1.05,skewX:-19.4,skewY:-21.8,x:180,y:555.4,startPosition:19},0).wait(1).to({regX:39.5,regY:62.9,scaleX:0.99,scaleY:1.04,skewX:-17.6,skewY:-19.7,x:155.8,y:614.4,startPosition:20},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-15.9,skewY:-17.6,x:152.4,y:615.5,startPosition:21},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-14.2,skewY:-15.5,x:149.1,y:616.4,startPosition:22},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-12.4,skewY:-13.4,x:145.9,y:617.3,startPosition:23},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-10.7,skewY:-11.3,x:142.7,y:618.1,startPosition:24},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-9,skewY:-9.2,x:139.6,y:618.8,startPosition:25},0).wait(1).to({regX:78.9,regY:18.9,scaleX:1.02,scaleY:1,skewX:-7.2,skewY:-7.1,x:170.8,y:571.3,startPosition:26},0).wait(1).to({regX:39.5,regY:62.9,scaleX:1.02,scaleY:1,skewX:-8.1,skewY:-8,x:138,y:619.9,startPosition:27},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-8.9,skewX:0,skewY:0,x:139.4,y:620.2,startPosition:28},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-9.7,x:140.9,y:620.5,startPosition:29},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0,skewX:-10.5,skewY:-10.6,x:142.4,y:620.8,startPosition:30},0).wait(1).to({scaleX:1,scaleY:1,skewX:-11.4,skewY:-11.5,x:143.9,y:621,startPosition:31},0).wait(1).to({scaleX:1,scaleY:1,skewX:-12.2,skewY:-12.4,x:145.4,y:621.2,startPosition:32},0).wait(1).to({regX:78.9,regY:18.9,scaleX:1,scaleY:1,skewX:-13,skewY:-13.3,x:175.3,y:569.3,startPosition:33},0).to({startPosition:108},75).to({regX:79,scaleX:0.99,scaleY:1.01,skewX:-11,skewY:-11.8,x:175,y:566.8,startPosition:113},5).to({regY:18.8,scaleX:1.05,scaleY:0.99,skewX:7.6,skewY:9.5,x:172.3,y:579.9,startPosition:119},6).wait(1).to({regX:39.5,regY:62.9,scaleX:1.04,scaleY:0.99,skewX:6.4,skewY:8.1,x:126.8,y:616.6,startPosition:120},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:3.2,skewY:4.6,x:129.8,y:617.4,startPosition:121},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-1,skewY:0,x:133.9,y:618.2,startPosition:122},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-5.2,skewY:-4.7,x:138.5,y:618.7,startPosition:123},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-8.6,skewY:-8.6,x:142.4,y:618.9,startPosition:124},0).wait(1).to({scaleX:1,scaleY:1,skewX:-10.8,skewY:-11,x:145,startPosition:125},0).wait(1).to({regX:78.9,regY:18.9,scaleX:1,scaleY:1.01,skewX:-11.6,skewY:-11.8,x:175.5,y:567.3,startPosition:126},0).to({startPosition:145},19).to({scaleX:1.04,scaleY:0.97,skewX:6.3,skewY:6.2,x:167,y:576,startPosition:151},6).wait(1).to({regX:39.5,regY:62.9,scaleX:1.03,scaleY:0.99,skewX:16.6,skewY:16.1,x:114.8,y:602.2,startPosition:152},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:26.9,skewY:26,x:109.4,y:589.3,startPosition:153},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:37.2,skewY:35.9,x:105.6,y:575.7,startPosition:154},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:47.5,skewY:45.9,x:103.3,y:561.7,startPosition:155},0).wait(1).to({scaleX:1,scaleY:1.04,skewX:57.8,skewY:55.8,x:102.7,y:547.4,startPosition:156},0).wait(1).to({regX:78.9,regY:19,scaleX:0.99,scaleY:1.05,skewX:68.1,skewY:65.7,x:162.6,y:551.5,startPosition:157},0).wait(1).to({regX:39.5,regY:62.9,scaleX:0.99,scaleY:1.04,skewX:69.9,skewY:67.9,x:105,y:533.3,startPosition:158},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:71.7,skewY:70.1,x:106.2,y:533.4,startPosition:159},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:73.5,skewY:72.2,x:107.5,y:533.6,startPosition:160},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:75.3,skewY:74.4,x:108.9,y:533.9,startPosition:161},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:77.1,skewY:76.6,x:110.3,y:534.2,startPosition:162},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:78.9,skewY:78.7,x:111.9,y:534.6,startPosition:163},0).wait(1).to({regX:78.9,regY:18.8,scaleX:1.02,scaleY:1,skewX:80.7,skewY:80.9,x:163,y:567.6,startPosition:164},0).wait(1).to({regX:39.5,regY:62.9,skewX:79.1,skewY:79.3,x:112.2,y:536.2,startPosition:165},0).wait(1).to({skewX:77.5,skewY:77.7,x:111.2,y:537.3,startPosition:166},0).wait(1).to({skewX:75.9,skewY:76.1,x:110.2,y:538.5,startPosition:167},0).wait(1).to({skewX:74.3,skewY:74.5,x:109.3,y:539.7,startPosition:168},0).wait(1).to({skewX:72.7,skewY:72.9,x:108.4,y:540.9,startPosition:169},0).wait(1).to({skewX:71.1,skewY:71.3,x:107.6,y:542.1,startPosition:170},0).wait(1).to({regX:78.9,regY:18.8,skewX:69.5,skewY:69.7,x:162,y:565.7,startPosition:171},0).wait(1).to({regX:39.5,regY:62.9,x:106.8,y:543.4,startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).wait(1).to({startPosition:203},0).wait(1).to({startPosition:204},0).wait(1).to({startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({regX:78.9,regY:18.8,x:162,y:565.7,startPosition:213},0).wait(1).to({regX:39.5,regY:62.9,scaleX:1.02,scaleY:1,skewX:59.2,skewY:59.6,x:105.6,y:555.7,startPosition:214},0).wait(1).to({scaleX:1.03,scaleY:0.99,skewX:48.9,skewY:49.6,x:106.1,y:568.3,startPosition:215},0).wait(1).to({scaleX:1.03,scaleY:0.99,skewX:38.5,skewY:39.6,x:108.4,y:581,startPosition:216},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:28.2,skewY:29.5,x:112.6,y:593.4,startPosition:217},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:17.9,skewY:19.5,x:118.4,y:605.2,startPosition:218},0).wait(1).to({regX:79,regY:18.8,scaleX:1.05,scaleY:0.99,skewX:7.6,skewY:9.5,x:172.3,y:579.9,startPosition:219},0).wait(1).to({regX:39.5,regY:62.9,scaleX:1.04,scaleY:0.99,skewX:6.4,skewY:8.1,x:126.8,y:616.6,startPosition:220},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:3.2,skewY:4.6,x:129.8,y:617.4,startPosition:221},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-1,skewY:0,x:133.9,y:618.2,startPosition:222},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-5.2,skewY:-4.7,x:138.5,y:618.7,startPosition:223},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-8.6,skewY:-8.6,x:142.4,y:618.9,startPosition:224},0).wait(1).to({scaleX:1,scaleY:1,skewX:-10.8,skewY:-11,x:145,startPosition:225},0).wait(1).to({regX:78.9,regY:18.9,scaleX:1,scaleY:1.01,skewX:-11.6,skewY:-11.8,x:175.5,y:567.3,startPosition:226},0).to({startPosition:259},33).to({regY:18.8,skewX:-8.6,skewY:-8.9,x:178.8,y:568.8,startPosition:264},5).wait(1).to({regX:39.5,regY:62.9,scaleX:1,scaleY:1.01,skewX:-7.9,skewY:-8.2,x:145,y:617.6,startPosition:265},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-5.9,skewY:-6.4,x:140.5,y:614.5,startPosition:266},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-2.9,skewY:-3.6,x:133.8,y:609.7,startPosition:267},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:0.5,skewY:-0.4,x:126.3,y:604.1,startPosition:268},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:3.6,skewY:2.4,x:119.7,y:599.1,startPosition:269},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:5.6,skewY:4.2,x:115.4,y:595.7,startPosition:270},0).wait(1).to({regX:78.9,regY:18.9,scaleX:0.99,scaleY:1.04,skewX:6.3,skewY:4.9,x:157.7,y:552.2,startPosition:308},0).to({skewX:13.2,skewY:11.8,x:156.1,startPosition:273},2).to({scaleX:1.02,scaleY:0.99,skewX:23.3,skewY:24,x:154,y:560.1,startPosition:280},7).to({skewX:34.5,skewY:35.2,x:151.2,y:558.7,startPosition:283},3).wait(1).to({regX:39.5,regY:62.9,scaleX:1.01,scaleY:0.99,skewX:31,skewY:31.4,x:96.3,y:574.9,startPosition:284},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:21.9,skewY:21.6,x:104.4,y:583.7,startPosition:285},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:13.6,skewY:12.6,x:113.3,y:591.3,startPosition:286},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:9,skewY:7.7,x:118.7,y:595,startPosition:287},0).wait(1).to({regX:78.9,regY:18.9,scaleX:0.99,scaleY:1.04,skewX:7.7,skewY:6.3,x:165.1,y:555.1,startPosition:288},0).to({_off:true},1).wait(31));

	// 图层 16
	this.instance_6 = new lib.li_1_44_94781("synched",0);
	this.instance_6.setTransform(328.6,558.9,0.999,1.006,0,8.5,8.8,15.7,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:1,startPosition:6},6).wait(1).to({regX:44.5,regY:63,scaleX:1,scaleY:1,skewX:4.5,skewY:5,x:355.8,y:614,startPosition:7},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.6,skewY:1.2,x:362.2,y:613.5,startPosition:8},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-3.4,skewY:-2.6,x:368.3,y:612.8,startPosition:9},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-7.4,skewY:-6.3,x:374.4,y:611.8,startPosition:10},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-11.4,skewY:-10.1,x:380.2,y:610.6,startPosition:11},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:-15.3,skewY:-13.9,x:386,y:609.1,startPosition:12},0).wait(1).to({regX:15.7,regY:11.9,scaleX:1.02,scaleY:0.99,skewX:-19.3,skewY:-17.6,x:346.8,y:568.5,startPosition:13},0).wait(1).to({regX:44.5,regY:63,scaleX:1.02,scaleY:0.99,skewX:-26.1,skewY:-25.1,x:391.9,y:596.3,startPosition:14},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:-32.8,skewY:-32.6,x:391.5,y:584.8,startPosition:15},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-39.5,skewY:-40.1,x:390.3,y:572.9,startPosition:16},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-46.3,skewY:-47.5,x:388.3,y:560.7,startPosition:17},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-53,skewY:-55,x:385.5,y:548.5,startPosition:18},0).wait(1).to({regX:15.6,regY:11.8,scaleX:1.04,scaleY:1,skewX:-59.7,skewY:-62.5,x:323.7,y:536.8,startPosition:19},0).wait(1).to({regX:44.5,regY:63,scaleX:1.03,scaleY:1,skewX:-61.8,skewY:-64,x:383.3,y:536.7,startPosition:20},0).wait(1).to({scaleX:1.02,scaleY:1.01,skewX:-63.9,skewY:-65.5,x:384.7,y:537.4,startPosition:21},0).wait(1).to({scaleX:1.02,scaleY:1.01,skewX:-65.9,skewY:-67,x:386.1,y:538,startPosition:22},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-68,skewY:-68.5,x:387.4,y:538.6,startPosition:23},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-70,skewY:-70,x:388.6,y:539.2,startPosition:24},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-72.1,skewY:-71.5,x:389.8,y:539.8,startPosition:25},0).wait(1).to({regX:15.6,regY:11.8,scaleX:0.99,scaleY:1.02,skewX:-74.1,skewY:-73,x:332.2,y:553.4,startPosition:26},0).wait(1).to({regX:44.5,regY:63,scaleX:0.99,scaleY:1.02,skewX:-73.3,skewY:-72.2,x:390.4,y:540.9,startPosition:27},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-72.4,skewY:-71.5,x:389.8,y:541.5,startPosition:28},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-71.5,skewY:-70.7,x:389.1,y:542,startPosition:29},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-70.6,skewY:-70,x:388.6,y:542.6,startPosition:30},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-69.7,skewY:-69.2,x:387.9,y:543.1,startPosition:31},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-68.9,skewY:-68.5,x:387.3,y:543.7,startPosition:32},0).wait(1).to({regX:15.6,regY:11.8,scaleX:1,scaleY:1,skewX:-68,skewY:-67.7,x:328,y:551.8,startPosition:33},0).to({startPosition:108},75).to({scaleX:1,scaleY:1,skewX:-70,skewY:-70.5,x:328.4,y:548.6,startPosition:113},5).to({regX:15.7,regY:11.7,scaleX:1.04,scaleY:0.97,skewX:-38.9,skewY:-41.6,x:335.5,y:555.3,startPosition:116},3).to({regY:11.8,scaleX:1.05,scaleY:0.99,skewX:2.5,skewY:1.4,x:342.1,y:567.3,startPosition:119},3).wait(1).to({regX:44.5,regY:63,scaleX:1.05,scaleY:0.99,skewX:2.9,skewY:1.9,x:368.8,y:618.3,startPosition:120},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:3.9,skewY:3.1,x:365.4,y:617.6,startPosition:121},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:5.2,skewY:4.7,x:360.9,y:616.7,startPosition:122},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:6.5,skewY:6.3,x:356.3,y:615.7,startPosition:123},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:7.6,skewX:0,skewY:0,x:352.6,y:614.9,startPosition:124},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:0,skewX:8.3,skewY:8.5,x:350.2,y:614.4,startPosition:125},0).wait(1).to({regX:15.7,regY:11.8,scaleX:1,skewX:8.6,skewY:8.8,x:328.6,y:558.9,startPosition:126},0).to({startPosition:145},19).to({regY:11.9,scaleX:1.02,scaleY:0.99,skewX:-19.3,skewY:-17.6,x:346.8,y:568.5,startPosition:151},6).wait(1).to({regX:44.5,regY:63,scaleX:1.02,scaleY:0.99,skewX:-26.1,skewY:-25.1,x:391.9,y:596.3,startPosition:152},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:-32.8,skewY:-32.6,x:391.5,y:584.8,startPosition:153},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-39.5,skewY:-40.1,x:390.3,y:572.9,startPosition:154},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-46.3,skewY:-47.5,x:388.3,y:560.7,startPosition:155},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-53,skewY:-55,x:385.5,y:548.5,startPosition:156},0).wait(1).to({regX:15.6,regY:11.8,scaleX:1.04,scaleY:1,skewX:-59.7,skewY:-62.5,x:323.7,y:536.8,startPosition:157},0).wait(1).to({regX:44.5,regY:63,scaleX:1.03,scaleY:1,skewX:-63,skewY:-65.1,x:383.2,y:535.5,startPosition:158},0).wait(1).to({scaleX:1.02,scaleY:1.01,skewX:-66.2,skewY:-67.8,x:384.5,y:535,startPosition:159},0).wait(1).to({scaleX:1.02,scaleY:1.01,skewX:-69.4,skewY:-70.5,x:385.6,y:534.4,startPosition:160},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-72.7,skewY:-73.2,x:386.6,y:533.8,startPosition:161},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-75.9,skewY:-75.8,x:387.4,y:533.2,startPosition:162},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-79.1,skewY:-78.5,x:388,y:532.7,startPosition:163},0).wait(1).to({regX:15.6,regY:11.8,scaleX:0.99,scaleY:1.02,skewX:-82.4,skewY:-81.2,x:332.2,y:553.4,startPosition:164},0).wait(1).to({regX:44.5,regY:63,scaleX:0.99,scaleY:1.02,skewX:-80.3,skewY:-79.3,x:388.5,y:533.8,startPosition:165},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-78.2,skewY:-77.3,x:388.3,y:535.5,startPosition:166},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-76.2,skewY:-75.4,x:388.1,y:537.3,startPosition:167},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-74.1,skewY:-73.5,x:387.8,y:539,startPosition:168},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-72.1,skewY:-71.6,x:387.5,y:540.7,startPosition:169},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-70,skewY:-69.6,x:387.1,y:542.5,startPosition:170},0).wait(1).to({regX:15.6,regY:11.8,scaleX:1,scaleY:1,skewX:-68,skewY:-67.7,x:328,y:551.8,startPosition:171},0).to({startPosition:213},42).to({regX:15.7,scaleX:1.05,scaleY:0.99,skewX:2.5,skewY:1.4,x:342.1,y:567.3,startPosition:219},6).wait(1).to({regX:44.5,regY:63,scaleX:1.05,scaleY:0.99,skewX:2.9,skewY:1.9,x:368.8,y:618.3,startPosition:220},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:3.9,skewY:3.1,x:365.4,y:617.6,startPosition:221},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:5.2,skewY:4.7,x:360.9,y:616.7,startPosition:222},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:6.5,skewY:6.3,x:356.3,y:615.7,startPosition:223},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:7.6,skewX:0,skewY:0,x:352.6,y:614.9,startPosition:224},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:0,skewX:8.3,skewY:8.5,x:350.2,y:614.4,startPosition:225},0).wait(1).to({regX:15.7,regY:11.8,scaleX:1,skewX:8.6,skewY:8.8,x:328.6,y:558.9,startPosition:226},0).to({startPosition:259},33).to({regX:15.6,skewX:-1.6,skewY:-1.4,x:334.3,y:557.3,startPosition:264},5).wait(1).to({regX:44.5,regY:63,scaleX:1,scaleY:1.01,skewX:-2.4,skewY:-2.1,x:365.2,y:607,startPosition:265},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-4.7,skewY:-4.3,x:367.3,y:603.7,startPosition:266},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-8.1,skewY:-7.6,x:370.3,y:598.6,startPosition:267},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:-12,skewY:-11.3,x:373.5,y:592.7,startPosition:268},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:-15.5,skewY:-14.5,x:376.3,y:587.2,startPosition:269},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-17.8,skewY:-16.7,x:378.1,y:583.5,startPosition:270},0).wait(1).to({regX:15.6,regY:11.7,scaleX:0.99,scaleY:1.04,skewX:-18.6,skewY:-17.5,x:334.7,y:540.2,startPosition:271},0).to({skewX:-26.5,skewY:-25.5,x:335.5,y:541,startPosition:273},2).to({regX:15.7,regY:11.8,scaleX:1.02,scaleY:0.99,skewX:-31.8,skewY:-32.2,x:358.2,y:557.2,startPosition:280},7).to({regX:15.6,regY:11.9,skewX:-40.2,skewY:-40.7,x:356.9,y:558.2,startPosition:283},3).wait(1).to({regX:44.5,regY:63,scaleX:1.01,scaleY:0.99,skewX:-37.2,skewY:-37.4,x:409,y:579.5,startPosition:284},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-29.4,skewY:-29.1,x:400.7,y:584.2,startPosition:285},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:-22.2,skewY:-21.4,x:392.1,y:588.1,startPosition:286},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-18.2,skewY:-17.2,x:387,y:590.1,startPosition:287},0).wait(1).to({regX:15.6,regY:11.7,scaleX:0.99,scaleY:1.04,skewX:-17.1,skewY:-16,x:342.4,y:547.6,startPosition:288},0).to({_off:true},1).wait(31));

	// 图层 17
	this.instance_7 = new lib.li_1_45_22849("synched",0);
	this.instance_7.setTransform(247.5,484.9,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},6).wait(1).to({regY:-0.2,scaleX:1.01,scaleY:1,rotation:0.2,x:248.5,y:487.3},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:249.5,y:490},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:250.5,y:492.6},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:251.5,y:495.2},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:252.6,y:497.9},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:253.6,y:500.5},0).wait(1).to({regY:0,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:254.6,y:503.4},0).wait(1).to({regY:-0.2,scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:253,y:497},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:251.4,y:490.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:249.8,y:484.6},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:248.2,y:478.4},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:246.6,y:472.2},0).wait(1).to({regY:0,scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:245.1,y:466.3},0).wait(1).to({regY:-0.2,scaleX:0.99,scaleY:1.05,y:469.2},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,y:472.3},0).wait(1).to({scaleX:1,scaleY:1.03,y:475.5},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,y:478.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:481.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:484.9},0).wait(1).to({regY:0,scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,y:488.3},0).wait(1).to({regY:-0.2,scaleX:1.02,scaleY:1,y:487.6},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,y:487.1},0).wait(1).to({scaleX:1.01,scaleY:1,y:486.7},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:486.2},0).wait(1).to({scaleX:1.01,scaleY:1,y:485.7},0).wait(1).to({scaleX:1,scaleY:1.01,y:485.3},0).wait(1).to({regY:0,scaleX:1,scaleY:1.01,y:485},0).to({startPosition:0},75).to({scaleX:0.99,scaleY:1.01,rotation:-1.3,y:482},5).to({scaleX:1.05,scaleY:0.98,rotation:0,x:247.5,y:499.6},6).wait(1).to({regY:-0.2,scaleX:1.05,scaleY:0.99,y:498.4},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:496},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:492.8},0).wait(1).to({scaleX:1.02,scaleY:1,y:489.6},0).wait(1).to({scaleX:1.01,scaleY:1,y:487},0).wait(1).to({scaleX:1,scaleY:1.01,y:485.3},0).wait(1).to({regY:0,scaleX:1,scaleY:1.01,y:484.9},0).to({startPosition:0},19).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:254.6,y:503.4},6).wait(1).to({regY:-0.2,scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:253,y:497},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:251.4,y:490.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:249.8,y:484.6},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:248.2,y:478.4},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:246.6,y:472.2},0).wait(1).to({regY:0,scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:245.1,y:466.3},0).wait(1).to({regY:-0.2,scaleX:0.99,scaleY:1.05,y:469.2},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,y:472.3},0).wait(1).to({scaleX:1,scaleY:1.03,y:475.5},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,y:478.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:481.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:484.9},0).wait(1).to({regY:0,scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,y:488.3},0).wait(1).to({regY:-0.2,scaleX:1.02,scaleY:1,y:487.6},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,y:487.1},0).wait(1).to({scaleX:1.01,scaleY:1,y:486.7},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:486.2},0).wait(1).to({scaleX:1.01,scaleY:1,y:485.7},0).wait(1).to({scaleX:1,scaleY:1.01,y:485.3},0).wait(1).to({regY:0,scaleX:1,scaleY:1.01,y:485},0).to({startPosition:0},42).to({scaleX:1.05,scaleY:0.98,rotation:0,x:247.5,y:499.6},6).wait(1).to({regY:-0.2,scaleX:1.05,scaleY:0.99,y:498.4},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:496},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:492.8},0).wait(1).to({scaleX:1.02,scaleY:1,y:489.6},0).wait(1).to({scaleX:1.01,scaleY:1,y:487},0).wait(1).to({scaleX:1,scaleY:1.01,y:485.3},0).wait(1).to({regY:0,scaleX:1,scaleY:1.01,y:484.9},0).to({startPosition:0},33).to({startPosition:0},5).wait(1).to({regY:-0.2,scaleX:1,scaleY:1.01,x:247.2,y:484},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:-0.1,x:246.6,y:482.1},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:-0.3,x:245.6,y:479.2},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:-0.4,x:244.5,y:475.9},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.6,x:243.6,y:473.1},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.7,x:242.9,y:471.1},0).wait(1).to({regY:0,scaleX:0.98,scaleY:1.04,x:242.7,y:470.7},0).wait(2).to({startPosition:0},0).to({scaleX:1.02,scaleY:0.99,rotation:1.3,x:255.4,y:495.4},7).to({startPosition:0},3).wait(1).to({regY:-0.2,scaleX:1.02,scaleY:0.99,rotation:1.2,x:254.9,y:492.6},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:1,x:253.8,y:486},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:0.9,x:252.8,y:479.8},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.8,x:252.3,y:476.5},0).wait(1).to({regY:0,scaleX:0.98,scaleY:1.04,rotation:0.7,x:252.2,y:475.7},0).to({_off:true},1).wait(31));

	// 图层 18
	this.instance_8 = new lib.li_1_46_23825("synched",0);
	this.instance_8.setTransform(317.1,490.8,0.999,1.006,0,8.5,8.8,-8.3,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:1},6).wait(1).to({regX:0.1,regY:0.2,scaleX:1,scaleY:1,skewX:7.5,skewY:7.7,x:322.4,y:527.5},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:6.5,skewY:6.7,x:324.5,y:529.6},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:5.5,skewY:5.6,x:326.5,y:531.8},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:4.6,skewY:4.6,x:328.5,y:533.9},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:3.6,skewX:0,skewY:0,x:330.5,y:536.1},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:2.6,x:332.5,y:538.2},0).wait(1).to({regX:-8.3,regY:-33.2,scaleX:1.04,scaleY:0.97,rotation:0,skewX:1.6,skewY:1.5,x:326.7,y:507.6},0).wait(1).to({regX:0.1,regY:0.2,scaleX:1.03,scaleY:0.99,skewX:2.2,skewY:2.2,x:331.9,y:534.6},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:2.7,skewY:2.9,x:329.3,y:529},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:3.3,skewY:3.7,x:326.7,y:523.4},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:3.9,skewY:4.4,x:324.1,y:517.8},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:4.4,skewY:5.1,x:321.4,y:512.1},0).wait(1).to({regX:-8.3,regY:-33.1,scaleX:0.98,scaleY:1.06,skewX:5,skewY:5.8,x:313.7,y:470.6},0).wait(1).to({regX:0.1,regY:0.2,scaleX:0.99,scaleY:1.05,skewX:4.4,skewY:5.1,x:319.7,y:509.1},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:3.7,skewY:4.4,x:320.5,y:511.8},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:3.1,skewY:3.7,x:321.3,y:514.5},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:2.5,skewY:2.9,x:322.2,y:517.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:1.8,skewY:2.2,x:323,y:519.9},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.2,skewY:1.5,x:323.8,y:522.5},0).wait(1).to({regX:-8.3,regY:-33.2,scaleX:1.02,scaleY:1,skewX:0.6,skewY:0.8,x:316.4,y:491.9},0).wait(1).to({regX:0.1,regY:0.2,scaleX:1.02,scaleY:1,skewX:0.9,skewY:1.1,x:324.2,y:525},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.2,skewY:1.4,x:323.8,y:524.7},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.5,skewY:1.7,x:323.3,y:524.4},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.8,skewY:2.1,x:322.9,y:524.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:2.2,skewY:2.4,x:322.5,y:523.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:2.5,skewY:2.7,x:322.1,y:523.4},0).wait(1).to({regX:-8.3,regY:-33.1,scaleX:1,scaleY:1,skewX:2.8,skewY:3,x:314.9,y:489.2},0).to({startPosition:0},75).to({scaleX:0.99,scaleY:1.01,skewX:1.5,skewY:1.8,x:314.3,y:485.9},5).to({regY:-33.3,scaleX:1.05,scaleY:0.99,skewX:2.2,skewY:1.2,x:321.4,y:502.8},6).wait(1).to({regX:0.1,regY:0.2,scaleX:1.05,scaleY:0.99,skewX:2.6,skewY:1.6,x:328.4,y:535.4},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:3.6,skewY:2.9,x:327,y:533.6},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:5,skewY:4.5,x:325.2,y:531.3},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:6.4,skewY:6.2,x:323.3,y:529},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:7.6,skewX:0,skewY:0,x:321.7,y:527.1},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:0,skewX:8.3,skewY:8.5,x:320.7,y:525.8},0).wait(1).to({regX:-8.3,regY:-33.3,scaleX:1,skewX:8.6,skewY:8.8,x:317.2,y:490.8},0).to({startPosition:0},19).to({regY:-33.2,scaleX:1.04,scaleY:0.97,skewX:1.6,skewY:1.5,x:326.7,y:507.6},6).wait(1).to({regX:0.1,regY:0.2,scaleX:1.03,scaleY:0.99,skewX:2.2,skewY:2.2,x:331.9,y:534.6},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:2.7,skewY:2.9,x:329.3,y:529},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:3.3,skewY:3.7,x:326.7,y:523.4},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:3.9,skewY:4.4,x:324.1,y:517.8},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:4.4,skewY:5.1,x:321.4,y:512.1},0).wait(1).to({regX:-8.3,regY:-33.1,scaleX:0.98,scaleY:1.06,skewX:5,skewY:5.8,x:313.7,y:470.6},0).wait(1).to({regX:0.1,regY:0.2,scaleX:0.99,scaleY:1.05,skewX:4.4,skewY:5.1,x:319.7,y:509.1},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:3.7,skewY:4.4,x:320.5,y:511.8},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:3.1,skewY:3.7,x:321.3,y:514.5},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:2.5,skewY:2.9,x:322.2,y:517.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:1.8,skewY:2.2,x:323,y:519.9},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.2,skewY:1.5,x:323.8,y:522.5},0).wait(1).to({regX:-8.3,regY:-33.2,scaleX:1.02,scaleY:1,skewX:0.6,skewY:0.8,x:316.4,y:491.9},0).wait(1).to({regX:0.1,regY:0.2,scaleX:1.02,scaleY:1,skewX:0.9,skewY:1.1,x:324.2,y:525},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.2,skewY:1.4,x:323.8,y:524.7},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.5,skewY:1.7,x:323.3,y:524.4},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.8,skewY:2.1,x:322.9,y:524.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:2.2,skewY:2.4,x:322.5,y:523.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:2.5,skewY:2.7,x:322.1,y:523.4},0).wait(1).to({regX:-8.3,regY:-33.1,scaleX:1,scaleY:1,skewX:2.8,skewY:3,x:314.9,y:489.2},0).to({startPosition:0},42).to({regY:-33.3,scaleX:1.05,scaleY:0.99,skewX:2.2,skewY:1.2,x:321.4,y:502.8},6).wait(1).to({regX:0.1,regY:0.2,scaleX:1.05,scaleY:0.99,skewX:2.6,skewY:1.6,x:328.4,y:535.4},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:3.6,skewY:2.9,x:327,y:533.6},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:5,skewY:4.5,x:325.2,y:531.3},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:6.4,skewY:6.2,x:323.3,y:529},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:7.6,skewX:0,skewY:0,x:321.7,y:527.1},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:0,skewX:8.3,skewY:8.5,x:320.7,y:525.8},0).wait(1).to({regX:-8.3,regY:-33.3,scaleX:1,skewX:8.6,skewY:8.8,x:317.2,y:490.8},0).to({startPosition:0},33).to({skewX:4.4,skewY:4.6,x:318,y:490.3},5).wait(1).to({regX:0.1,regY:0.2,scaleX:1,scaleY:1.01,skewX:4.1,skewY:4.3,x:323.6,y:523.7},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:3.2,skewY:3.6,x:323.2,y:521.4},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:2,skewY:2.5,x:322.6,y:518},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:0.5,skewY:1.3,x:321.9,y:514.1},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:-0.7,skewY:0.2,x:321.3,y:510.6},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1.6,skewY:-0.5,x:320.9,y:508.3},0).wait(1).to({regX:-8.3,regY:-33.2,scaleX:0.99,scaleY:1.04,skewX:-1.8,skewY:-0.8,x:311.5,y:472.8},0).wait(2).to({startPosition:0},0).to({regY:-33.3,scaleX:1.02,scaleY:0.99,skewX:-8.3,skewY:-8.8,x:326.2,y:497},7).to({skewX:-6.6,skewY:-7.1,x:326.9},3).wait(1).to({regX:0.1,regY:0.2,scaleX:1.01,scaleY:0.99,skewX:-5.8,skewY:-6,x:337.9,y:527},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-3.7,skewY:-3.4,x:334.6,y:522.1},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:-1.7,skewY:-1,x:331.5,y:517.7},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-0.7,skewY:0.3,x:329.8,y:515.2},0).wait(1).to({regX:-8.3,regY:-33.1,scaleX:0.99,scaleY:1.04,skewX:-0.4,skewY:0.7,x:320.9,y:479.7},0).to({_off:true},1).wait(31));

	// 图层 19
	this.instance_9 = new lib.li_1_47_52714("synched",0);
	this.instance_9.setTransform(190.6,479.5,0.999,1.005,0,-11.5,-11.8,23.8,-43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:23.7,scaleX:1,scaleY:1,x:190.5,y:479.6},6).wait(1).to({regX:0.5,regY:0.5,scaleX:1,scaleY:1,skewX:-10.5,skewY:-10.6,x:176.2,y:528.9},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-9.5,skewY:-9.4,x:175.8,y:530.7},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:-8.4,skewY:-8.1,x:175.4,y:532.5},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:-7.4,skewY:-6.9,x:175.1,y:534.2},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:-6.4,skewY:-5.7,x:174.7,y:535.9},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:-5.4,skewY:-4.5,x:174.4,y:537.5},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:1.04,scaleY:0.97,skewX:-4.3,skewY:-3.3,x:195.1,y:495.7},0).wait(1).to({regX:0.5,regY:0.5,scaleX:1.03,scaleY:0.98,skewX:-6,skewY:-5.5,x:174.6,y:535.1},0).wait(1).to({scaleX:1.02,scaleY:1,rotation:-7.7,skewX:0,skewY:0,x:175.2,y:530.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0,skewX:-9.4,skewY:-10,x:175.9,y:526.5},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-11.2,skewY:-12.2,x:176.6,y:522.1},0).wait(1).to({scaleX:1,scaleY:1.04,skewX:-12.9,skewY:-14.4,x:177.3,y:517.7},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:0.99,scaleY:1.05,skewX:-14.6,skewY:-16.7,x:188.7,y:462.3},0).wait(1).to({regX:0.5,regY:0.5,scaleX:0.99,scaleY:1.04,skewX:-14.1,skewY:-15.8,x:177.4,y:515.8},0).wait(1).to({scaleX:1,scaleY:1.04,skewX:-13.6,skewY:-15,x:176.5,y:518.4},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-13.1,skewY:-14.1,x:175.6,y:521.1},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-12.6,skewY:-13.3,x:174.8,y:523.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-12.1,skewY:-12.4,x:174,y:526.3},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-11.6,skewX:0,skewY:0,x:173.2,y:528.9},0).wait(1).to({regX:23.8,regY:-43,scaleX:1.02,scaleY:1,rotation:0,skewX:-11.1,skewY:-10.7,x:187.3,y:484.4},0).wait(1).to({regX:0.5,regY:0.5,scaleX:1.01,scaleY:1,skewX:-11.4,skewY:-11.1,x:172.8,y:531},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-11.6,skewY:-11.4,x:173.2,y:530.7},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-11.9,skewY:-11.8,x:173.6,y:530.4},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-12.2,skewX:0,skewY:0,x:174,y:530},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:-12.5,skewY:-12.5,x:174.4,y:529.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-12.7,skewY:-12.9,x:174.8,y:529.3},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:1,scaleY:1,skewX:-13,skewY:-13.3,x:188.1,y:481.1},0).to({startPosition:0},75).to({scaleX:0.99,scaleY:1.01,skewX:-12,skewY:-12.8,x:188.6,y:478.1},5).to({scaleX:1.05,scaleY:0.99,skewX:-14.6,skewY:-12.7,x:187.5,y:493.7},6).wait(1).to({regX:0.5,regY:0.5,scaleX:1.04,scaleY:0.99,skewX:-14.4,x:174.6,y:540},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:-13.9,skewY:-12.5,x:175,y:537.7},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-13.3,skewY:-12.3,x:175.4,y:534.8},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-12.6,skewY:-12.1,x:175.9,y:531.8},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-12.1,skewY:-12,x:176.2,y:529.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:-11.7,skewY:-11.9,x:176.5,y:527.8},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:1,scaleY:1.01,skewX:-11.6,skewY:-11.8,x:190.6,y:479.5},0).to({startPosition:0},19).to({scaleX:1.04,scaleY:0.97,skewX:-4.3,skewY:-3.3,x:195.1,y:495.7},6).wait(1).to({regX:0.5,regY:0.5,scaleX:1.03,scaleY:0.98,skewX:-4.6,skewY:-4.1,x:173.7,y:534.3},0).wait(1).to({scaleX:1.02,scaleY:1,rotation:-4.8,skewX:0,skewY:0,x:173.3,y:529.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0,skewX:-5.1,skewY:-5.6,x:173,y:524.4},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-5.4,skewY:-6.4,x:172.6,y:519.4},0).wait(1).to({scaleX:1,scaleY:1.04,skewX:-5.6,skewY:-7.2,x:172.3,y:514.4},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:0.99,scaleY:1.05,skewX:-5.9,skewY:-8,x:190,y:460.7},0).wait(1).to({regX:0.5,regY:0.5,scaleX:0.99,scaleY:1.04,skewX:-6,skewY:-7.7,x:171.7,y:512.3},0).wait(1).to({scaleX:1,scaleY:1.04,skewX:-6.1,skewY:-7.5,x:171.4,y:515.3},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-6.2,skewY:-7.2,x:171.1,y:518.2},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-6.3,skewY:-7,x:170.9,y:521.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-6.4,skewY:-6.7,x:170.6,y:524.1},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-6.5,skewX:0,skewY:0,x:170.3,y:527.1},0).wait(1).to({regX:23.8,regY:-43,scaleX:1.02,scaleY:1,rotation:0,skewX:-6.6,skewY:-6.2,x:188.6,y:484.2},0).wait(1).to({regX:0.5,regY:0.5,scaleX:1.01,scaleY:1,skewX:-6.5,x:170.1,y:529.4},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-6.3,x:170.2,y:529},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-6.4,y:528.6},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-6.3,skewX:0,skewY:0,x:170.3,y:528.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:-6.2,skewY:-6.3,x:170.4,y:527.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-6.1,x:170.5,y:527.3},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:1,scaleY:1,x:189.1,y:480.9},0).to({startPosition:0},42).to({scaleX:1.05,scaleY:0.99,skewX:-14.6,skewY:-12.7,x:187.5,y:493.7},6).wait(1).to({regX:0.5,regY:0.5,scaleX:1.04,scaleY:0.99,skewX:-14.4,x:174.6,y:540},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:-13.9,skewY:-12.5,x:175,y:537.7},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-13.3,skewY:-12.3,x:175.4,y:534.8},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-12.6,skewY:-12.1,x:175.9,y:531.8},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-12.1,skewY:-12,x:176.2,y:529.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:-11.7,skewY:-11.9,x:176.5,y:527.8},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:1,scaleY:1.01,skewX:-11.6,skewY:-11.8,x:190.6,y:479.5},0).to({startPosition:0},33).to({regX:23.7,regY:-43,skewX:-13.1,skewY:-13.3,x:191.4,y:480.8},5).wait(1).to({regX:0.5,regY:0.5,scaleX:1,scaleY:1.01,skewX:-12.4,skewY:-12.7,x:178.2,y:528},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-10.4,skewY:-10.9,x:176.8,y:525.8},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-7.5,skewY:-8.1,x:174.5,y:522.5},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:-4.1,skewY:-5.1,x:172,y:518.6},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:-1.1,skewY:-2.3,x:169.8,y:515},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:0.8,skewY:-0.5,x:168.3,y:512.6},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:0.99,scaleY:1.04,skewX:1.5,skewY:0.1,x:191.9,y:466.6},0).wait(2).to({skewY:0.1},0).to({regX:23.9,regY:-43,scaleX:1.02,scaleY:0.99,skewX:12.3,skewY:13,x:203.6,y:488.7},7).to({skewX:13.3,skewY:14,x:203.7,y:489},3).wait(1).to({regX:0.5,regY:0.5,scaleX:1.01,scaleY:0.99,skewX:12,skewY:12.4,x:171.3,y:523.8},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:8.5,skewY:8.2,x:173,y:520.4},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:5.2,skewY:4.3,x:174.7,y:517.2},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:3.5,skewY:2.2,x:175.8,y:515.3},0).wait(1).to({regX:23.7,regY:-43.2,scaleX:0.99,scaleY:1.04,skewX:3,skewY:1.6,x:201.5,y:470.3},0).to({_off:true},1).wait(31));

	// 图层 20
	this.instance_10 = new lib.li_1_48_56266("synched",0);
	this.instance_10.setTransform(248.1,504.2,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},6).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.2,x:249,y:506.7},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:250,y:509.2},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:250.9,y:511.8},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:251.9,y:514.3},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:252.9,y:516.8},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:253.8,y:519.4},0).wait(1).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:254.8,y:521.9},0).wait(1).to({scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:253.4,y:516},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:251.9,y:510.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:250.5,y:504.2},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:249,y:498.2},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:247.6,y:492.3},0).wait(1).to({scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:246.2,y:486.4},0).wait(1).to({scaleX:0.99,scaleY:1.05,y:489.4},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,y:492.4},0).wait(1).to({scaleX:1,scaleY:1.03,y:495.4},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,y:498.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:501.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:504.4},0).wait(1).to({scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,y:507.4},0).wait(1).to({scaleX:1.02,scaleY:1,y:506.9},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,y:506.5},0).wait(1).to({scaleX:1.01,scaleY:1,y:506},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:505.6},0).wait(1).to({scaleX:1.01,scaleY:1,y:505.1},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.7},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.3},0).to({startPosition:0},75).to({scaleX:0.99,scaleY:1.01,rotation:-1.3,y:501.4},5).to({scaleX:1.05,scaleY:0.98,rotation:0,x:248.1,y:518.4},6).wait(1).to({scaleX:1.05,scaleY:0.99,y:517.5},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:515.2},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:512},0).wait(1).to({scaleX:1.02,scaleY:1,y:508.9},0).wait(1).to({scaleX:1.01,scaleY:1,y:506.3},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.7},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.2},0).to({startPosition:0},19).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:254.8,y:521.9},6).wait(1).to({scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:253.4,y:516},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:251.9,y:510.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:250.5,y:504.2},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:249,y:498.2},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:247.6,y:492.3},0).wait(1).to({scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:246.2,y:486.4},0).wait(1).to({scaleX:0.99,scaleY:1.05,y:489.4},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,y:492.4},0).wait(1).to({scaleX:1,scaleY:1.03,y:495.4},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,y:498.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:501.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:504.4},0).wait(1).to({scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,y:507.4},0).wait(1).to({scaleX:1.02,scaleY:1,y:506.9},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,y:506.5},0).wait(1).to({scaleX:1.01,scaleY:1,y:506},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:505.6},0).wait(1).to({scaleX:1.01,scaleY:1,y:505.1},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.7},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.3},0).to({startPosition:0},42).to({scaleX:1.05,scaleY:0.98,rotation:0,x:248.1,y:518.4},6).wait(1).to({scaleX:1.05,scaleY:0.99,y:517.5},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:515.2},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:512},0).wait(1).to({scaleX:1.02,scaleY:1,y:508.9},0).wait(1).to({scaleX:1.01,scaleY:1,y:506.3},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.7},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.2},0).to({startPosition:0},33).to({startPosition:0},5).wait(1).to({scaleX:1,scaleY:1.01,x:247.8,y:503.5},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:-0.1,x:247.2,y:501.7},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:-0.3,x:246.3,y:498.9},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:-0.4,x:245.3,y:495.9},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.6,x:244.4,y:493.1},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.7,x:243.8,y:491.3},0).wait(1).to({scaleX:0.98,scaleY:1.04,x:243.6,y:490.7},0).wait(2).to({startPosition:0},0).to({scaleX:1.02,scaleY:0.99,rotation:1.3,x:255.6,y:514.3},7).to({startPosition:0},3).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:1.2,x:255.2,y:511.8},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:1,x:254.1,y:505.5},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:0.9,x:253.2,y:499.8},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.8,x:252.7,y:496.6},0).wait(1).to({scaleX:0.98,scaleY:1.04,rotation:0.7,x:252.5,y:495.7},0).to({_off:true},1).wait(31));

	// 图层 21
	this.instance_11 = new lib.li_1_49_64110("synched",0);
	this.instance_11.setTransform(251.1,723.1,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({startPosition:0},6).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.01,scaleY:1,rotation:0.2,x:251.2,y:723.6},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:251.6,y:724.3},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:251.9,y:725},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:252.3,y:725.6},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:252.6,y:726.3},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:253,y:727},0).wait(1).to({regX:0,regY:0,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:253.5,y:727.9},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:252.9,y:725.8},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:252.5,y:723.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,x:252,y:721.9},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:251.6,y:720},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:251.2,y:718.1},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,rotation:0,x:251,y:716.4},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:0.99,scaleY:1.05,x:250.8,y:717.3},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:718.4},0).wait(1).to({scaleX:1,scaleY:1.03,x:250.9,y:719.5},0).wait(1).to({scaleX:1,scaleY:1.02,y:720.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:721.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:251,y:722.9},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,x:251.2,y:724.3},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.02,scaleY:1,x:251,y:723.9},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.7},0).wait(1).to({scaleX:1.01,scaleY:1,x:250.9,y:723.6},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.4},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.2},0).wait(1).to({scaleX:1,scaleY:1.01,y:723.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:251.1},0).to({startPosition:0},75).to({scaleX:0.99,scaleY:1.01,x:251,y:722},5).to({scaleX:1.05,scaleY:0.98,x:251.3,y:726},6).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.05,scaleY:0.99,x:251,y:725.6},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:725.1},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:724.5},0).wait(1).to({scaleX:1.02,scaleY:1,x:250.9,y:723.9},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.3},0).wait(1).to({scaleX:1,scaleY:1.01,y:723},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:251.1,y:723.1},0).to({startPosition:0},19).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:253.5,y:727.9},6).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:252.9,y:725.8},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:252.5,y:723.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,x:252,y:721.9},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:251.6,y:720},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:251.2,y:718.1},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,rotation:0,x:251,y:716.4},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:0.99,scaleY:1.05,x:250.8,y:717.3},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:718.4},0).wait(1).to({scaleX:1,scaleY:1.03,x:250.9,y:719.5},0).wait(1).to({scaleX:1,scaleY:1.02,y:720.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:721.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:251,y:722.9},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,x:251.2,y:724.3},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.02,scaleY:1,x:251,y:723.9},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.7},0).wait(1).to({scaleX:1.01,scaleY:1,x:250.9,y:723.6},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.4},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.2},0).wait(1).to({scaleX:1,scaleY:1.01,y:723.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:251.1},0).to({startPosition:0},42).to({scaleX:1.05,scaleY:0.98,x:251.3,y:726},6).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.05,scaleY:0.99,x:251,y:725.6},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:725.1},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:724.5},0).wait(1).to({scaleX:1.02,scaleY:1,x:250.9,y:723.9},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.3},0).wait(1).to({scaleX:1,scaleY:1.01,y:723},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:251.1,y:723.1},0).to({startPosition:0},33).to({startPosition:0},5).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1,scaleY:1.01,x:250.8,y:722.5},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:-0.1,x:250.5,y:721.5},0).wait(1).to({scaleX:0.99,scaleY:1.01,rotation:-0.3,x:250.2,y:720},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:-0.4,x:249.8,y:718.3},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:-0.6,x:249.4,y:716.7},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:-0.7,x:249.2,y:715.7},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.03,x:249.3,y:715.6},0).wait(2).to({startPosition:0},0).to({scaleX:1.02,scaleY:0.99,rotation:1.3,x:253.9,y:728.8},7).to({startPosition:0},3).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.02,scaleY:0.99,rotation:1.2,x:253.5,y:727.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:1,x:253.1,y:724.7},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:0.9,x:252.6,y:722.2},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:0.8,x:252.4,y:720.8},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.03,rotation:0.7,x:252.6,y:720.7},0).to({_off:true},1).wait(31));

	// 图层 22
	this.instance_12 = new lib.li_1_50_8752("synched",0);
	this.instance_12.setTransform(174.4,682.7,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:170.6},6).wait(1).to({regX:10.5,regY:4.5,scaleX:1.01,scaleY:1,rotation:0.2,x:180.9,y:687.9},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:180.8,y:688.5},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:180.7,y:689.1},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:180.6,y:689.7},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:180.5,y:690.3},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:180.4,y:690.9},0).wait(1).to({regX:0,regY:0,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:169.5,y:686.9},0).wait(1).to({regX:10.5,regY:4.5,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:180.5,y:688.3},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:180.8,y:685.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,x:181,y:681.8},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:181.3,y:678.6},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:181.5,y:675.4},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,rotation:0,x:171.4,y:667.4},0).wait(1).to({regX:10.5,regY:4.5,scaleX:0.99,scaleY:1.05,x:181.7,y:673.9},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:675.6},0).wait(1).to({scaleX:1,scaleY:1.03,x:181.6,y:677.3},0).wait(1).to({scaleX:1,scaleY:1.02,y:679},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:181.5,y:680.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:682.5},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,x:170.7,y:679.7},0).wait(1).to({regX:10.5,regY:4.5,scaleX:1.02,scaleY:1,x:181.7,y:684.7},0).wait(1).to({scaleX:1.01,scaleY:1,x:181.9,y:685.3},0).wait(1).to({scaleX:1.01,scaleY:1,x:182.1,y:685.8},0).wait(1).to({scaleX:1.01,scaleY:1,x:182.3,y:686.3},0).wait(1).to({scaleX:1.01,scaleY:1,x:182.5,y:686.8},0).wait(1).to({scaleX:1,scaleY:1.01,x:182.8,y:687.4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:172.5,y:683.4},0).to({x:173.8,y:684.1},3).to({x:166.7,y:680.3},15).to({x:174.2,y:682.4},19).to({x:168,y:676.1},16).to({x:174.9,y:682.3},19).to({x:173.4,y:680.8},3).to({scaleX:0.99,scaleY:1.01,x:172.6,y:678.6},5).to({scaleX:1.05,scaleY:0.98,x:164.1,y:687.6},6).wait(1).to({regX:10.5,regY:4.5,scaleX:1.05,scaleY:0.99,x:175.4,y:691.4},0).wait(1).to({scaleX:1.04,scaleY:0.99,x:176.3,y:689.8},0).wait(1).to({scaleX:1.03,scaleY:0.99,x:177.5,y:687.7},0).wait(1).to({scaleX:1.02,scaleY:1,x:178.8,y:685.5},0).wait(1).to({scaleX:1.01,scaleY:1,x:179.8,y:683.8},0).wait(1).to({scaleX:1,scaleY:1.01,x:180.4,y:682.7},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:170.1,y:677.8},0).to({x:174.6,y:682.2},13).to({x:172.7,y:678.7},6).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:170,y:688.2},6).wait(1).to({regX:10.5,regY:4.5,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:180.8,y:688.9},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:180.7,y:685.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,y:681.2},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:180.6,y:677.4},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:180.5,y:673.6},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,rotation:0,x:170.1,y:665},0).wait(1).to({regX:10.5,regY:4.5,scaleX:0.99,scaleY:1.05,x:180.4,y:671.9},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:674.1},0).wait(1).to({scaleX:1,scaleY:1.03,y:676.3},0).wait(1).to({scaleX:1,scaleY:1.02,y:678.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:180.3,y:680.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:682.8},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,x:169.6,y:680.4},0).wait(1).to({regX:10.5,regY:4.5,scaleX:1.02,scaleY:1,x:180.7,y:685.1},0).wait(1).to({scaleX:1.01,scaleY:1,x:181.1,y:685.3},0).wait(1).to({scaleX:1.01,scaleY:1,x:181.4,y:685.6},0).wait(1).to({scaleX:1.01,scaleY:1,x:181.8,y:685.8},0).wait(1).to({scaleX:1.01,scaleY:1,x:182.2,y:686},0).wait(1).to({scaleX:1,scaleY:1.01,x:182.6,y:686.3},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:172.5,y:682},0).to({x:174.5,y:682.6},4).to({x:168,y:675.8},16).to({x:173.9,y:683.1},19).to({x:173.3,y:681.7},3).to({scaleX:1.05,scaleY:0.98,x:166.8,y:689.3},6).wait(1).to({regX:10.5,regY:4.5,scaleX:1.05,scaleY:0.99,x:177.9,y:692.8},0).wait(1).to({scaleX:1.04,scaleY:0.99,x:178.2,y:690.3},0).wait(1).to({scaleX:1.03,scaleY:0.99,x:178.5,y:687.1},0).wait(1).to({scaleX:1.02,scaleY:1,x:178.9,y:683.9},0).wait(1).to({scaleX:1.01,scaleY:1,x:179.2,y:681.2},0).wait(1).to({scaleX:1,scaleY:1.01,x:179.3,y:679.6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:168.9,y:674.5},0).to({x:174.5,y:681.9},18).to({x:169.5,y:676.1},15).to({y:675.6},5).wait(1).to({regX:10.5,regY:4.5,scaleX:1,scaleY:1.01,x:180,y:680},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:-0.1,x:180.1,y:679.9},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:-0.3,x:180.3,y:679.7},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:-0.4,x:180.6,y:679.4},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.6,x:180.8,y:679.2},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.7,x:180.9,y:679.1},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.04,x:170.6,y:674.4},0).wait(2).to({x:171.7,y:675.2},0).to({scaleX:1.02,scaleY:0.99,rotation:1.3,x:175.5,y:686.5},7).to({x:174.2,y:684.4},3).wait(1).to({regX:10.5,regY:4.5,scaleX:1.02,scaleY:0.99,rotation:1.2,x:184.8,y:687.8},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:1,y:684.7},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:0.9,y:681.8},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.8,y:680.3},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.04,rotation:0.7,x:174.6,y:675},0).to({_off:true},1).wait(31));

	// 图层 23
	this.instance_13 = new lib.li_1_51_2345("synched",0);
	this.instance_13.setTransform(323.7,670.7,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:327.6},6).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.01,scaleY:1,rotation:0.2,x:315.3,y:683},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:316.7,y:684.1},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:318,y:685.3},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:319.3,y:686.5},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:320.7,y:687.6},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:322,y:688.8},0).wait(1).to({regX:0,regY:0,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:337.6,y:679.5},0).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:322.1,y:686.6},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:321,y:683.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,x:319.9,y:680},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:318.7,y:676.7},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:317.5,y:673.4},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,rotation:0,x:329.7,y:658.4},0).wait(1).to({regX:-13.5,regY:11.1,scaleX:0.99,scaleY:1.05,x:316.1,y:671.3},0).wait(1).to({scaleX:0.99,scaleY:1.04,x:315.8,y:672.4},0).wait(1).to({scaleX:1,scaleY:1.03,x:315.5,y:673.6},0).wait(1).to({scaleX:1,scaleY:1.02,x:315.2,y:674.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:314.9,y:675.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:314.7,y:677},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,x:328.2,y:667.2},0).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.02,scaleY:1,x:313.8,y:678.8},0).wait(1).to({scaleX:1.01,scaleY:1,x:313.3,y:679.3},0).wait(1).to({scaleX:1.01,scaleY:1,x:312.7,y:679.8},0).wait(1).to({scaleX:1.01,scaleY:1,x:312.2,y:680.4},0).wait(1).to({scaleX:1.01,scaleY:1,x:311.6,y:680.9},0).wait(1).to({scaleX:1,scaleY:1.01,x:311,y:681.5},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:324,y:670.9},0).to({x:323.8,y:672},3).to({x:332.3,y:665.2},15).to({x:322.8,y:670.2},19).to({x:332.7,y:665.3},16).to({x:322.9,y:670.9},19).to({x:325.1,y:669.2},3).to({scaleX:0.99,scaleY:1.01,x:326.9,y:666.1},5).to({scaleX:1.05,scaleY:0.98,x:336.9,y:677.8},6).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.05,scaleY:0.99,x:322.3,y:687.9},0).wait(1).to({scaleX:1.04,scaleY:0.99,x:321.2,y:686},0).wait(1).to({scaleX:1.03,scaleY:0.99,x:319.8,y:683.3},0).wait(1).to({scaleX:1.02,scaleY:1,x:318.3,y:680.7},0).wait(1).to({scaleX:1.01,scaleY:1,x:317.2,y:678.5},0).wait(1).to({scaleX:1,scaleY:1.01,x:316.4,y:677.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:329.7,y:665.5},0).to({x:323,y:670},13).to({x:325.5,y:666.4},6).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:336,y:679.5},6).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:320.9,y:686.2},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:320.2,y:682.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,x:319.4,y:678.6},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:318.6,y:674.9},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:317.9,y:671.1},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,rotation:0,x:330.4,y:655.6},0).wait(1).to({regX:-13.5,regY:11.1,scaleX:0.99,scaleY:1.05,x:317,y:669.2},0).wait(1).to({scaleX:0.99,scaleY:1.04,x:316.8,y:671},0).wait(1).to({scaleX:1,scaleY:1.03,x:316.6,y:672.9},0).wait(1).to({scaleX:1,scaleY:1.02,x:316.5,y:674.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:316.3,y:676.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:316.2,y:678.4},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,x:329.8,y:669.2},0).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.02,scaleY:1,x:315.4,y:680.1},0).wait(1).to({scaleX:1.01,scaleY:1,x:314.7,y:679.9},0).wait(1).to({scaleX:1.01,scaleY:1,x:314.1,y:679.8},0).wait(1).to({scaleX:1.01,scaleY:1,x:313.4,y:679.6},0).wait(1).to({scaleX:1.01,scaleY:1,x:312.7,y:679.5},0).wait(1).to({scaleX:1,scaleY:1.01,x:312.1,y:679.3},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:325,y:668},0).to({x:322.5,y:669.7},4).to({x:332.1,y:665.8},16).to({x:322.7,y:669.9},19).to({x:324.3,y:669.2},3).to({scaleX:1.05,scaleY:0.98,x:331.9,y:676.7},6).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.05,scaleY:0.99,x:317.8,y:686.7},0).wait(1).to({scaleX:1.04,scaleY:0.99,x:317.9,y:684.5},0).wait(1).to({scaleX:1.03,scaleY:0.99,x:318,y:681.6},0).wait(1).to({scaleX:1.02,scaleY:1,x:318.2,y:678.6},0).wait(1).to({scaleX:1.01,scaleY:1,x:318.3,y:676.2},0).wait(1).to({scaleX:1,scaleY:1.01,x:318.4,y:674.6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:332,y:663},0).to({x:322.8,y:669.7},18).to({x:330.3,y:662.4},15).to({y:663.5},5).wait(1).to({regX:-13.5,regY:11.1,scaleX:1,scaleY:1.01,x:316.4,y:674.5},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:-0.1,x:315.5,y:674},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:-0.3,x:313.9,y:673.3},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:-0.4,x:312.2,y:672.4},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.6,x:310.6,y:671.7},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.7,x:309.6,y:671.1},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.04,x:322.4,y:659.3},0).wait(2).to({x:321.8,y:660},0).to({scaleX:1.02,scaleY:0.99,rotation:1.3,x:329.5,y:677.8},7).to({x:331,y:676.1},3).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.02,scaleY:0.99,rotation:1.2,x:316.9,y:685.5},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:1,y:682.4},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:0.9,y:679.6},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.8,x:316.8,y:678},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.04,rotation:0.7,x:330.3,y:666.2},0).to({_off:true},1).wait(31));

	// 元件 4
	this.instance_14 = new lib.li_1_52_92314("synched",0);
	this.instance_14.setTransform(300.7,629.5,0.913,1.007,0,0,0,10,85.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({startPosition:6},6).wait(1).to({regX:76,regY:109.7,scaleX:0.92,scaleY:1,rotation:0.2,x:361,y:654.9,startPosition:7},0).wait(1).to({scaleX:0.92,scaleY:1,rotation:0.4,x:361.2,y:655.5,startPosition:8},0).wait(1).to({scaleX:0.93,scaleY:0.99,rotation:0.5,x:361.3,y:656.1,startPosition:9},0).wait(1).to({scaleX:0.94,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:361.5,y:656.7,startPosition:10},0).wait(1).to({scaleX:0.94,scaleY:0.98,skewX:0.9,skewY:0.8,x:361.6,y:657.2,startPosition:11},0).wait(1).to({scaleX:0.95,scaleY:0.98,skewX:1.1,skewY:1,x:361.8,y:657.9,startPosition:12},0).wait(1).to({regX:10,regY:85,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:1.1,x:299.6,y:633.4,startPosition:13},0).wait(1).to({regX:76,regY:109.7,scaleX:0.94,scaleY:0.99,skewX:0.8,skewY:0.7,x:362.1,y:655,startPosition:14},0).wait(1).to({scaleX:0.93,scaleY:1,skewX:0.4,skewY:0.2,x:362.3,y:651.6,startPosition:15},0).wait(1).to({scaleX:0.93,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:362.5,y:648.1,startPosition:16},0).wait(1).to({scaleX:0.92,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:362.6,y:644.7,startPosition:17},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewX:-1,skewY:-1.1,x:362.9,y:641.2,startPosition:18},0).wait(1).to({regX:10,regY:85.2,scaleX:0.9,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:303.3,y:613.4,startPosition:19},0).wait(1).to({regX:76,regY:109.7,scaleX:0.9,scaleY:1.05,x:361.4,y:639.4,startPosition:20},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewY:-1.5,x:359.7,y:641.2,startPosition:21},0).wait(1).to({scaleX:0.91,scaleY:1.03,x:358,y:642.9,startPosition:22},0).wait(1).to({scaleX:0.92,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,x:356.2,y:644.6,startPosition:23},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:354.5,y:646.5,startPosition:24},0).wait(1).to({scaleX:0.93,scaleY:1.01,x:352.8,y:648.2,startPosition:25},0).wait(1).to({regX:10,regY:85.2,scaleX:0.93,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:288.9,y:627.1,startPosition:26},0).wait(1).to({regX:76,regY:109.7,scaleX:0.93,scaleY:1,x:350.3,y:650,startPosition:27},0).wait(1).to({scaleX:0.93,scaleY:1,skewY:-1.5,x:349.6,y:650.1,startPosition:28},0).wait(1).to({scaleX:0.92,scaleY:1,x:348.9,y:650.2,startPosition:29},0).wait(1).to({scaleX:0.92,scaleY:1,rotation:-1.5,skewX:0,skewY:0,x:348.2,startPosition:30},0).wait(1).to({scaleX:0.92,scaleY:1,x:347.5,y:650.3,startPosition:31},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:346.7,y:650.4,startPosition:32},0).wait(1).to({regX:10,regY:85.1,scaleX:0.91,scaleY:1.01,x:285.2,y:627.3,startPosition:33},0).to({startPosition:108},75).to({scaleX:0.9,scaleY:1.01,rotation:-1.3,x:284.8,y:624.7,startPosition:113},5).to({scaleX:0.96,scaleY:0.98,rotation:0,x:276.4,y:617.5,startPosition:119},6).wait(1).to({regX:76,regY:109.7,scaleX:0.96,scaleY:0.99,x:340.2,y:641.7,startPosition:120},0).wait(1).to({scaleX:0.95,scaleY:0.99,x:341.4,y:642,startPosition:121},0).wait(1).to({scaleX:0.94,scaleY:0.99,x:342.9,y:642.3,startPosition:122},0).wait(1).to({scaleX:0.93,scaleY:1,x:344.5,y:642.6,startPosition:123},0).wait(1).to({scaleX:0.92,scaleY:1,x:345.8,y:642.8,startPosition:124},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:346.6,y:642.9,startPosition:125},0).wait(1).to({regX:10,regY:85.1,scaleX:0.91,scaleY:1.01,x:286.7,y:618.3,startPosition:126},0).to({startPosition:145},19).to({regY:85,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:1.1,x:299.6,y:633.4,startPosition:151},6).wait(1).to({regX:76,regY:109.7,scaleX:0.94,scaleY:0.99,skewX:0.8,skewY:0.7,x:362.1,y:655,startPosition:152},0).wait(1).to({scaleX:0.93,scaleY:1,skewX:0.4,skewY:0.2,x:362.3,y:651.6,startPosition:153},0).wait(1).to({scaleX:0.93,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:362.5,y:648.1,startPosition:154},0).wait(1).to({scaleX:0.92,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:362.6,y:644.7,startPosition:155},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewX:-1,skewY:-1.1,x:362.9,y:641.2,startPosition:156},0).wait(1).to({regX:10,regY:85.2,scaleX:0.9,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:303.3,y:613.4,startPosition:157},0).wait(1).to({regX:76,regY:109.7,scaleX:0.9,scaleY:1.05,x:361.4,y:639.4,startPosition:158},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewY:-1.5,x:359.7,y:641.2,startPosition:159},0).wait(1).to({scaleX:0.91,scaleY:1.03,x:358,y:642.9,startPosition:160},0).wait(1).to({scaleX:0.92,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,x:356.2,y:644.6,startPosition:161},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:354.5,y:646.5,startPosition:162},0).wait(1).to({scaleX:0.93,scaleY:1.01,x:352.8,y:648.2,startPosition:163},0).wait(1).to({regX:10,regY:85.2,scaleX:0.93,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:288.9,y:627.1,startPosition:164},0).wait(1).to({regX:76,regY:109.7,scaleX:0.93,scaleY:1,x:350.3,y:650,startPosition:165},0).wait(1).to({scaleX:0.93,scaleY:1,skewY:-1.5,x:349.6,y:650.1,startPosition:166},0).wait(1).to({scaleX:0.92,scaleY:1,x:348.9,y:650.2,startPosition:167},0).wait(1).to({scaleX:0.92,scaleY:1,rotation:-1.5,skewX:0,skewY:0,x:348.2,startPosition:168},0).wait(1).to({scaleX:0.92,scaleY:1,x:347.5,y:650.3,startPosition:169},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:346.7,y:650.4,startPosition:170},0).wait(1).to({regX:10,regY:85.1,scaleX:0.91,scaleY:1.01,x:285.2,y:627.3,startPosition:171},0).to({startPosition:13},42).to({scaleX:0.96,scaleY:0.98,rotation:0,x:276.4,y:617.5,startPosition:19},6).wait(1).to({regX:76,regY:109.7,scaleX:0.96,scaleY:0.99,x:340.2,y:641.7,startPosition:20},0).wait(1).to({scaleX:0.95,scaleY:0.99,x:341.4,y:642,startPosition:21},0).wait(1).to({scaleX:0.94,scaleY:0.99,x:342.9,y:642.3,startPosition:22},0).wait(1).to({scaleX:0.93,scaleY:1,x:344.5,y:642.6,startPosition:23},0).wait(1).to({scaleX:0.92,scaleY:1,x:345.8,y:642.8,startPosition:24},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:346.6,y:642.9,startPosition:25},0).wait(1).to({regX:10,regY:85.1,scaleX:0.91,scaleY:1.01,x:286.7,y:618.3,startPosition:26},0).to({startPosition:59},33).to({startPosition:64},5).wait(1).to({regX:76,regY:109.7,scaleX:0.91,scaleY:1.01,x:346.7,y:642.5,startPosition:65},0).wait(1).to({scaleX:0.91,scaleY:1.01,rotation:-0.1,x:346.1,y:641.3,startPosition:66},0).wait(1).to({scaleX:0.91,scaleY:1.02,rotation:-0.3,x:345.3,y:639.2,startPosition:67},0).wait(1).to({scaleX:0.9,scaleY:1.03,rotation:-0.4,x:344.3,y:637.1,startPosition:68},0).wait(1).to({scaleX:0.9,scaleY:1.04,rotation:-0.6,x:343.4,y:635,startPosition:69},0).wait(1).to({scaleX:0.9,scaleY:1.04,rotation:-0.7,x:342.9,y:633.8,startPosition:70},0).wait(1).to({regX:10,regY:85.1,scaleY:1.04,x:283.1,y:608.4,startPosition:108},0).wait(2).to({startPosition:110},0).to({scaleX:0.93,scaleY:0.99,rotation:1.3,x:292.5,y:626.9,startPosition:117},7).to({startPosition:120},3).wait(1).to({regX:76,regY:109.7,scaleX:0.93,scaleY:0.99,rotation:1.2,x:352.7,y:650.9,startPosition:121},0).wait(1).to({scaleX:0.92,scaleY:1.01,rotation:1,x:350.9,y:647,startPosition:122},0).wait(1).to({scaleX:0.91,scaleY:1.03,rotation:0.9,x:349.1,y:643.4,startPosition:123},0).wait(1).to({scaleX:0.9,scaleY:1.04,rotation:0.8,x:348.2,y:641.3,startPosition:124},0).wait(1).to({regX:10,regY:85,scaleX:0.9,scaleY:1.04,rotation:0.7,x:289,y:614.3,startPosition:125},0).to({_off:true},1).wait(31));

	// 图层 25
	this.instance_15 = new lib.li_1_54_57841("synched",26);
	this.instance_15.setTransform(271.1,582.6,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({startPosition:32},6).wait(1).to({regX:15.7,regY:11.7,scaleX:1.01,scaleY:1,rotation:0.2,x:287.7,y:596.5,startPosition:33},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:288.7,y:598.7,startPosition:34},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:289.6,y:600.9,startPosition:35},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:290.6,y:603.1,startPosition:36},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:291.5,y:605.2,startPosition:37},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:292.4,y:607.4,startPosition:38},0).wait(1).to({regX:0,regY:0,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:277.3,y:597.9,startPosition:39},0).wait(1).to({regX:15.7,regY:11.7,scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:292.2,y:604.6,startPosition:40},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:291.1,y:599.7,startPosition:41},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:289.9,y:594.8,startPosition:42},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:288.8,y:589.9,startPosition:43},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:287.7,y:585,startPosition:44},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:270.8,y:568.2,startPosition:45},0).wait(1).to({regX:15.7,regY:11.7,scaleX:0.99,scaleY:1.05,x:286.7,y:582.3,startPosition:46},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,x:287,y:584.5,startPosition:47},0).wait(1).to({scaleX:1,scaleY:1.03,x:287.2,y:586.8,startPosition:48},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,x:287.4,y:589,startPosition:49},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:287.7,y:591.2,startPosition:50},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:287.9,y:593.4,startPosition:0},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:271.8,y:584.4,startPosition:1},0).wait(1).to({regX:15.7,regY:11.7,scaleX:1.02,scaleY:1,x:288,y:595.4,startPosition:2},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,x:287.9,y:595,startPosition:3},0).wait(1).to({scaleX:1.01,scaleY:1,x:287.8,y:594.7,startPosition:4},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,x:287.6,y:594.4,startPosition:5},0).wait(1).to({scaleX:1.01,scaleY:1,x:287.5,y:594,startPosition:6},0).wait(1).to({scaleX:1,scaleY:1.01,x:287.4,y:593.7,startPosition:7},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:271.3,y:582,startPosition:8},0).to({startPosition:32},75).to({scaleX:0.99,scaleY:1.01,rotation:-1.3,x:271,y:579.9,startPosition:37},5).to({scaleX:1.05,scaleY:0.98,rotation:0,x:272.4,y:595,startPosition:43},6).wait(1).to({regX:15.7,regY:11.7,scaleX:1.05,scaleY:0.99,x:288.7,y:605.8,startPosition:44},0).wait(1).to({scaleX:1.04,scaleY:0.99,x:288.4,y:603.8,startPosition:45},0).wait(1).to({scaleX:1.03,scaleY:0.99,x:287.9,y:601.1,startPosition:46},0).wait(1).to({scaleX:1.02,scaleY:1,x:287.5,y:598.4,startPosition:47},0).wait(1).to({scaleX:1.01,scaleY:1,x:287.1,y:596.2,startPosition:48},0).wait(1).to({scaleX:1,scaleY:1.01,x:286.9,y:594.8,startPosition:49},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:271.1,y:582.6,startPosition:50},0).to({startPosition:18},19).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:277.3,y:597.9,startPosition:24},6).wait(1).to({regX:15.7,regY:11.7,scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:292.2,y:604.6,startPosition:25},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:291.1,y:599.7,startPosition:26},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:289.9,y:594.8,startPosition:27},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:288.8,y:589.9,startPosition:28},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:287.7,y:585,startPosition:29},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:270.8,y:568.2,startPosition:30},0).wait(1).to({regX:15.7,regY:11.7,scaleX:0.99,scaleY:1.05,x:286.7,y:582.3,startPosition:31},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,x:287,y:584.5,startPosition:32},0).wait(1).to({scaleX:1,scaleY:1.03,x:287.2,y:586.8,startPosition:33},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,x:287.4,y:589,startPosition:34},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:287.7,y:591.2,startPosition:35},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:287.9,y:593.4,startPosition:36},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:271.8,y:584.4,startPosition:37},0).wait(1).to({regX:15.7,regY:11.7,scaleX:1.02,scaleY:1,x:288,y:595.4,startPosition:38},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,x:287.9,y:595,startPosition:39},0).wait(1).to({scaleX:1.01,scaleY:1,x:287.8,y:594.7,startPosition:40},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,x:287.6,y:594.4,startPosition:41},0).wait(1).to({scaleX:1.01,scaleY:1,x:287.5,y:594,startPosition:42},0).wait(1).to({scaleX:1,scaleY:1.01,x:287.4,y:593.7,startPosition:43},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:271.3,y:582,startPosition:44},0).to({startPosition:35},42).to({scaleX:1.05,scaleY:0.98,rotation:0,x:272.4,y:595,startPosition:41},6).wait(1).to({regX:15.7,regY:11.7,scaleX:1.05,scaleY:0.99,x:288.7,y:605.8,startPosition:42},0).wait(1).to({scaleX:1.04,scaleY:0.99,x:288.4,y:603.8,startPosition:43},0).wait(1).to({scaleX:1.03,scaleY:0.99,x:287.9,y:601.1,startPosition:44},0).wait(1).to({scaleX:1.02,scaleY:1,x:287.5,y:598.4,startPosition:45},0).wait(1).to({scaleX:1.01,scaleY:1,x:287.1,y:596.2,startPosition:46},0).wait(1).to({scaleX:1,scaleY:1.01,x:286.9,y:594.8,startPosition:47},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:271.1,y:582.6,startPosition:48},0).to({startPosition:30},33).to({startPosition:35},5).wait(1).to({regX:15.7,regY:11.7,scaleX:1,scaleY:1.01,x:286.6,y:593.8,startPosition:36},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:-0.1,x:286.1,y:592.3,startPosition:37},0).wait(1).to({scaleX:0.99,scaleY:1.02,rotation:-0.3,x:285.3,y:590.2,startPosition:38},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:-0.4,x:284.4,y:587.8,startPosition:39},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.6,x:283.6,y:585.6,startPosition:40},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:-0.7,x:283,y:584.1,startPosition:41},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.04,x:267.3,y:571.6,startPosition:28},0).wait(2).to({startPosition:30},0).to({scaleX:1.02,scaleY:0.99,rotation:1.3,x:277.4,y:591.6,startPosition:37},7).to({startPosition:40},3).wait(1).to({regX:15.7,regY:11.7,scaleX:1.02,scaleY:0.99,rotation:1.2,x:292.7,y:601.7,startPosition:41},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:1,x:291.4,y:597,startPosition:42},0).wait(1).to({scaleX:0.99,scaleY:1.03,rotation:0.9,x:290.3,y:592.6,startPosition:43},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.8,x:289.7,y:590.2,startPosition:44},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.04,rotation:0.7,x:274.2,y:577.2,startPosition:45},0).to({_off:true},1).wait(31));

	// gergerherhre
	this.instance_16 = new lib.li_1_56_86426("synched",0);
	this.instance_16.setTransform(204.5,637.2,0.913,1.007,0,0,180,12.5,85.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({startPosition:6},6).wait(1).to({regX:88.3,regY:91.5,scaleX:0.92,scaleY:1,skewX:0.2,skewY:180.2,x:135.3,y:644.1,startPosition:7},0).wait(1).to({scaleX:0.92,scaleY:1,skewX:0.4,skewY:180.3,x:135.4,y:645.2,startPosition:8},0).wait(1).to({scaleX:0.93,scaleY:0.99,skewX:0.5,skewY:180.5,x:135.5,y:646.1,startPosition:9},0).wait(1).to({scaleX:0.94,scaleY:0.99,skewX:0.7,skewY:180.7,x:135.6,y:647.1,startPosition:10},0).wait(1).to({scaleX:0.94,scaleY:0.98,skewX:0.9,skewY:180.8,x:135.7,y:648.1,startPosition:11},0).wait(1).to({scaleX:0.95,scaleY:0.98,skewX:1.1,skewY:181,x:135.8,y:649.1,startPosition:12},0).wait(1).to({regX:12.5,regY:85.5,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:181.1,x:208.1,y:645.8,startPosition:13},0).wait(1).to({regX:88.3,regY:91.5,scaleX:0.94,scaleY:0.99,skewX:0.8,skewY:180.7,x:137.9,y:646.9,startPosition:14},0).wait(1).to({scaleX:0.93,scaleY:1,skewX:0.4,skewY:180.2,x:140,y:643.7,startPosition:15},0).wait(1).to({scaleX:0.93,scaleY:1.01,skewX:-0.1,skewY:179.8,x:142,y:640.5,startPosition:16},0).wait(1).to({scaleX:0.92,scaleY:1.03,skewX:-0.5,skewY:179.3,x:144.1,y:637.3,startPosition:17},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewX:-1,skewY:178.9,x:146.2,y:634.1,startPosition:18},0).wait(1).to({regX:12.5,regY:85.6,scaleX:0.9,scaleY:1.06,skewX:-1.4,skewY:178.4,x:216.2,y:622.7,startPosition:19},0).wait(1).to({regX:88.3,regY:91.5,scaleX:0.9,scaleY:1.05,x:147.9,y:636,startPosition:20},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewY:178.5,x:147.4,y:641.2,startPosition:21},0).wait(1).to({scaleX:0.91,scaleY:1.03,x:146.9,y:646.4,startPosition:22},0).wait(1).to({scaleX:0.92,scaleY:1.02,skewX:-1.5,x:146.5,y:651.5,startPosition:23},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:146,y:656.7,startPosition:24},0).wait(1).to({scaleX:0.93,scaleY:1.01,x:145.5,y:662,startPosition:25},0).wait(1).to({regX:12.5,regY:85.7,scaleX:0.93,scaleY:1,skewY:178.6,x:215.6,y:659.5,startPosition:26},0).wait(1).to({regX:88.3,regY:91.5,scaleX:0.93,scaleY:1,x:146,y:664.6,startPosition:27},0).wait(1).to({scaleX:0.93,scaleY:1,skewY:178.5,x:146.9,y:662.3,startPosition:28},0).wait(1).to({scaleX:0.92,scaleY:1,x:147.8,y:659.9,startPosition:29},0).wait(1).to({scaleX:0.92,scaleY:1,x:148.7,y:657.5,startPosition:30},0).wait(1).to({scaleX:0.92,scaleY:1,x:149.7,y:655.2,startPosition:31},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:150.6,y:652.8,startPosition:32},0).wait(1).to({regX:12.5,regY:85.7,scaleX:0.91,scaleY:1.01,x:220.5,y:642.8,startPosition:33},0).to({startPosition:108},75).to({scaleX:0.9,scaleY:1.01,skewX:-1.3,skewY:178.7,x:221.6,y:639.5,startPosition:113},5).to({regY:85.6,scaleX:0.96,scaleY:0.98,skewX:0,skewY:180,x:230,y:651.2,startPosition:119},6).wait(1).to({regX:88.3,regY:91.5,scaleX:0.96,scaleY:0.99,x:156.6,y:656.3,startPosition:120},0).wait(1).to({scaleX:0.95,scaleY:0.99,x:155.2,y:654.6,startPosition:121},0).wait(1).to({scaleX:0.94,scaleY:0.99,x:153.2,y:652.2,startPosition:122},0).wait(1).to({scaleX:0.93,scaleY:1,x:151.3,y:649.9,startPosition:123},0).wait(1).to({scaleX:0.92,scaleY:1,x:149.7,y:647.9,startPosition:124},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:148.7,y:646.7,startPosition:125},0).wait(1).to({regX:12.5,regY:85.6,scaleX:0.91,scaleY:1.01,x:217.6,y:640.4,startPosition:126},0).to({startPosition:145},19).to({regY:85.5,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:181.1,x:208.1,y:645.8,startPosition:151},6).wait(1).to({regX:88.3,regY:91.5,scaleX:0.94,scaleY:0.99,skewX:0.8,skewY:180.7,x:137.9,y:646.9,startPosition:152},0).wait(1).to({scaleX:0.93,scaleY:1,skewX:0.4,skewY:180.2,x:140,y:643.7,startPosition:153},0).wait(1).to({scaleX:0.93,scaleY:1.01,skewX:-0.1,skewY:179.8,x:142,y:640.5,startPosition:154},0).wait(1).to({scaleX:0.92,scaleY:1.03,skewX:-0.5,skewY:179.3,x:144.1,y:637.3,startPosition:155},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewX:-1,skewY:178.9,x:146.2,y:634.1,startPosition:156},0).wait(1).to({regX:12.5,regY:85.6,scaleX:0.9,scaleY:1.06,skewX:-1.4,skewY:178.4,x:216.2,y:622.7,startPosition:157},0).wait(1).to({regX:88.3,regY:91.5,scaleX:0.9,scaleY:1.05,x:147.9,y:636,startPosition:158},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewY:178.5,x:147.4,y:641.2,startPosition:159},0).wait(1).to({scaleX:0.91,scaleY:1.03,x:146.9,y:646.4,startPosition:160},0).wait(1).to({scaleX:0.92,scaleY:1.02,skewX:-1.5,x:146.5,y:651.5,startPosition:161},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:146,y:656.7,startPosition:162},0).wait(1).to({scaleX:0.93,scaleY:1.01,x:145.5,y:662,startPosition:163},0).wait(1).to({regX:12.5,regY:85.7,scaleX:0.93,scaleY:1,skewY:178.6,x:215.6,y:659.5,startPosition:164},0).wait(1).to({regX:88.3,regY:91.5,scaleX:0.93,scaleY:1,x:146,y:664.6,startPosition:165},0).wait(1).to({scaleX:0.93,scaleY:1,skewY:178.5,x:146.9,y:662.3,startPosition:166},0).wait(1).to({scaleX:0.92,scaleY:1,x:147.8,y:659.9,startPosition:167},0).wait(1).to({scaleX:0.92,scaleY:1,x:148.7,y:657.5,startPosition:168},0).wait(1).to({scaleX:0.92,scaleY:1,x:149.7,y:655.2,startPosition:169},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:150.6,y:652.8,startPosition:170},0).wait(1).to({regX:12.5,regY:85.7,scaleX:0.91,scaleY:1.01,x:220.5,y:642.8,startPosition:171},0).to({startPosition:13},42).to({regY:85.6,scaleX:0.96,scaleY:0.98,skewX:0,skewY:180,x:230,y:651.2,startPosition:19},6).wait(1).to({regX:88.3,regY:91.5,scaleX:0.96,scaleY:0.99,x:156.6,y:656.3,startPosition:20},0).wait(1).to({scaleX:0.95,scaleY:0.99,x:155.2,y:654.6,startPosition:21},0).wait(1).to({scaleX:0.94,scaleY:0.99,x:153.2,y:652.2,startPosition:22},0).wait(1).to({scaleX:0.93,scaleY:1,x:151.3,y:649.9,startPosition:23},0).wait(1).to({scaleX:0.92,scaleY:1,x:149.7,y:647.9,startPosition:24},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:148.7,y:646.7,startPosition:25},0).wait(1).to({regX:12.5,regY:85.6,scaleX:0.91,scaleY:1.01,x:217.6,y:640.4,startPosition:26},0).to({startPosition:59},33).to({startPosition:64},5).wait(1).to({regX:88.3,regY:91.5,scaleX:0.91,scaleY:1.01,x:148.3,y:646,startPosition:65},0).wait(1).to({scaleX:0.91,scaleY:1.01,skewX:-0.1,skewY:179.9,x:148.2,y:645,startPosition:66},0).wait(1).to({scaleX:0.91,scaleY:1.02,skewX:-0.3,skewY:179.7,x:148,y:643.5,startPosition:67},0).wait(1).to({scaleX:0.9,scaleY:1.03,skewX:-0.4,skewY:179.6,x:147.7,y:641.9,startPosition:68},0).wait(1).to({scaleX:0.9,scaleY:1.04,skewX:-0.6,skewY:179.4,x:147.5,y:640.4,startPosition:69},0).wait(1).to({scaleX:0.9,scaleY:1.04,skewX:-0.7,skewY:179.3,x:147.4,y:639.4,startPosition:70},0).wait(1).to({regX:12.5,regY:85.6,scaleY:1.04,x:215.3,y:632.1,startPosition:108},0).wait(2).to({startPosition:110},0).to({regY:85.7,scaleX:0.93,scaleY:0.99,skewX:1.3,skewY:181.3,x:221.6,y:647.1,startPosition:117},7).to({startPosition:120},3).wait(1).to({regX:88.3,regY:91.5,scaleX:0.93,scaleY:0.99,skewX:1.2,skewY:181.2,x:151,y:650,startPosition:121},0).wait(1).to({scaleX:0.92,scaleY:1.01,skewX:1,skewY:181,x:151.6,y:646.7,startPosition:122},0).wait(1).to({scaleX:0.91,scaleY:1.03,skewX:0.9,skewY:180.9,x:152.2,y:643.7,startPosition:123},0).wait(1).to({scaleX:0.9,scaleY:1.04,skewX:0.8,skewY:180.8,x:152.5,y:642.1,startPosition:124},0).wait(1).to({regX:12.5,regY:85.7,scaleX:0.9,scaleY:1.04,skewX:0.7,skewY:180.7,x:220.8,y:636.5,startPosition:125},0).to({_off:true},1).wait(31));

	// 图层 27
	this.instance_17 = new lib.li_1_58_1340("synched",0);
	this.instance_17.setTransform(254.9,851.1,1.005,1.022);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(283).to({startPosition:0},0).wait(1).to({regX:-0.1,regY:-2.7,x:254.8,y:848.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:254.9,y:851.1},0).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.8,-5.8,458.1,870.9);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// h_1
	this.h_1 = new lib.li_1_69_77011复制2();
	this.h_1.setTransform(238.9,702.6,0.659,0.659,0,0,0,248.3,433.9);

	this.timeline.addTween(cjs.Tween.get(this.h_1).wait(1));

	// mc_1
	this.mc_1 = new lib.li_1_16_46535();
	this.mc_1.setTransform(616.5,55,1,1,0,0,0,204,56.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

	// mc_2
	this.mc_2 = new lib.元件3();
	this.mc_2.setTransform(997.5,721.3,1,1,0,0,0,415.5,200.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89.5,-32.9,1275.5,1019.5);


// stage content:
(lib._20_p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_0
	this.mc_0 = new lib.元件1();
	this.mc_0.setTransform(758,521.5,1,1,0,0,0,398,465.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_0).wait(1));

	// bg
	this.bg = new lib.元件2();
	this.bg.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;