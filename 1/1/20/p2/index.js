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



(lib.开始 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.标题拷贝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.地面拷贝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap100 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap101 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap102 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap103 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap112 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap113 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap114 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap115 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap116 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap117 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap118 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap119 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap120 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap121 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap122 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap123 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap124 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap125 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap126 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap127 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap128 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap129 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap130 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap131 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap132 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap133 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap134 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap135 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap136 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap137 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap138 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap139 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap140 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap141 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap142 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap143 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap144 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap145 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap146 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap147 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap148 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap36 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap49 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap50 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap51 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap54 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap55 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap56 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap57 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap58 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap59 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap60 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap61 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap62 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap63 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap64 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap65 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap66 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap67 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap68 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap70 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap71 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap72 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap73 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap74 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap75 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap76 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap77 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap78 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap79 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap80 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap81 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap82 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap83 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap84 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap85 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap86 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap87 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap88 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap89 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap90 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap91 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap92 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap93 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap94 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap95 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap96 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap97 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap98 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap99 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.转曲 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.奖励 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.荷花骨朵 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.图层352拷贝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.图层65拷贝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.基本功 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.方框 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.暂停 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.背景 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.li_1_140_42646 = function(mode,startPosition,loop) {
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


(lib.li_1_137_36011 = function(mode,startPosition,loop) {
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


(lib.li_1_128_27770 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-65.2,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-113.2,131,223);


(lib.li_1_127_71601 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-65.2,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-113.2,131,223);


(lib.li_1_126_23199 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap78();
	this.instance.setTransform(-159.9,-172.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-172.8,320,346);


(lib.li_1_125_93408 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap46复制();
	this.instance.setTransform(-139,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-52,282,108);


(lib.li_1_124_81140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-17.4,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-17.9,35,36);


(lib.li_1_123_26006 = function(mode,startPosition,loop) {
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
	this.shape_4.graphics.f("#EA5E7B").s().p("AACAbIgCAAIgCAAIgGAAQgtgBgkgaQBag0BZAzQglAbgtABIgGAAg");
	this.shape_4.setTransform(0.1,4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A62431").s().p("AhqAmQgQgQgOgWQAzADAYgaQAYgcAjgBQAigCAYAZQAZAYA4AFQgNAUgPAQQgJAJgJAHQhagzhaA0IgRgPg");
	this.shape_5.setTransform(0,-1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A64630").ss(0.1,1,1).p("ABTAWQAdgSAcgcQgrAJgxgUQgwgTgoASQgqARg5gFQAhAeAgASQBJgYBUAWgAhKAYQBPAtBOgv");
	this.shape_6.setTransform(0.1,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA5E7B").s().p("AhHgdIAAgDQBGgRBJARIAAADQgGBGhCAAQhCAAgFhGg");
	this.shape_7.setTransform(0,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A62431").s().p("AhBADQAEgIAIgIQALgPARgHQAMgGANABQANgBAOAGQAQAHAMAPQAGAIAFAIQAHARgBAVQhJgRhGARQgCgUAIgSg");
	this.shape_8.setTransform(0,-3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A62431").s().p("AiRgdQCaAdCJgbQhIA5hJAAQhIAAhKg7g");
	this.shape_9.setTransform(0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_8},{t:this.shape_7}]},3).to({state:[{t:this.shape_9}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-5.3,32.5,6.1);


(lib.li_1_122_6950 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-10.1,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-9.2,20,19);


(lib.li_1_121_93310 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap79();
	this.instance.setTransform(-16.6,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-46.1,34,91);


(lib.li_1_120_37559 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap80();
	this.instance.setTransform(-17.4,-52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-52.9,34,105);


(lib.li_1_117_5241 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap64();
	this.instance.setTransform(-32,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-17.9,37,58);


(lib.li_1_116_2334 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap63();
	this.instance.setTransform(-8,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-24.5,37,58);


(lib.li_1_113_33764 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap62();
	this.instance.setTransform(-76.6,-133.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.6,-133.1,153,266);


(lib.li_1_112_50172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-67.9,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-34.5,136,69);


(lib.li_1_111_20480 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap74();
	this.instance.setTransform(-51.5,-39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-39.2,103,78);


(lib.li_1_110_44341 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap75();
	this.instance.setTransform(-33,-44.9);

	this.instance_1 = new lib.Bitmap76();
	this.instance_1.setTransform(-33.5,-44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},155).wait(493));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-44.9,67,91);


(lib.li_1_109_6956 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap54();
	this.instance.setTransform(-32.9,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-44.8,66,90);


(lib.li_1_106_35216复制3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap66();
	this.instance.setTransform(-39,-44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-44.4,78,89);


(lib.li_1_105_41959复制3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap65();
	this.instance.setTransform(-22.8,-31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-31.6,46,63);


(lib.li_1_104_94571 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap55();
	this.instance.setTransform(-56,-49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-49.7,112,100);


(lib.li_1_103_7055 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap61();
	this.instance.setTransform(-11.4,-94.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-94.6,23,189);


(lib.li_1_102_8710 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap60();
	this.instance.setTransform(-42.8,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,-72.5,86,145);


(lib.li_1_101_64517 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap59();
	this.instance.setTransform(-40.3,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-72,81,144);


(lib.li_1_87_75494 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 9
	this.instance = new lib.Bitmap123();
	this.instance.setTransform(-1,60.2);

	this.instance_1 = new lib.Bitmap122();
	this.instance_1.setTransform(12.4,-1);

	this.instance_2 = new lib.Bitmap142();
	this.instance_2.setTransform(27.6,55.2);

	this.instance_3 = new lib.Bitmap143();
	this.instance_3.setTransform(-2.6,60);

	this.instance_4 = new lib.Bitmap144();
	this.instance_4.setTransform(20.1,55.2);

	this.instance_5 = new lib.Bitmap141();
	this.instance_5.setTransform(12.4,4.3);

	this.instance_6 = new lib.Bitmap148();
	this.instance_6.setTransform(-2.6,60);

	this.instance_7 = new lib.Bitmap146();
	this.instance_7.setTransform(27.6,55.2);

	this.instance_8 = new lib.Bitmap147();
	this.instance_8.setTransform(20.1,55.2);

	this.instance_9 = new lib.Bitmap145();
	this.instance_9.setTransform(12.4,-1);

	this.instance_10 = new lib.Bitmap27();
	this.instance_10.setTransform(-1,60.2);

	this.instance_11 = new lib.Bitmap5();
	this.instance_11.setTransform(12.4,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},75).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},75).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_11},{t:this.instance_10}]},1).to({state:[]},53).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,91.4,124.2);


(lib.li_1_85_19166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 11
	this.instance = new lib.Bitmap114();
	this.instance.setTransform(44.8,60.2);

	this.instance_1 = new lib.Bitmap116();
	this.instance_1.setTransform(39.9,55.2);

	this.instance_2 = new lib.Bitmap117();
	this.instance_2.setTransform(45.7,60.4);

	this.instance_3 = new lib.Bitmap115();
	this.instance_3.setTransform(-1,-1);

	this.instance_4 = new lib.Bitmap119();
	this.instance_4.setTransform(39.9,55.2);

	this.instance_5 = new lib.Bitmap121();
	this.instance_5.setTransform(39.9,55.2);

	this.instance_6 = new lib.Bitmap132();
	this.instance_6.setTransform(45.7,60.4);

	this.instance_7 = new lib.Bitmap120();
	this.instance_7.setTransform(-1,-1);

	this.instance_8 = new lib.Bitmap130();
	this.instance_8.setTransform(44.8,60.2);

	this.instance_9 = new lib.Bitmap137();
	this.instance_9.setTransform(39.9,55.2);

	this.instance_10 = new lib.Bitmap136();
	this.instance_10.setTransform(44.2,58);

	this.instance_11 = new lib.Bitmap134();
	this.instance_11.setTransform(44.8,60.2);

	this.instance_12 = new lib.Bitmap133();
	this.instance_12.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},21).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},26).to({state:[{t:this.instance_8}]},2).to({state:[]},24).to({state:[{t:this.instance_10},{t:this.instance_9}]},75).to({state:[{t:this.instance_12},{t:this.instance_11}]},2).to({state:[]},53).wait(15));

	// 补间 12
	this.instance_13 = new lib.Bitmap113();
	this.instance_13.setTransform(39.9,55.2);

	this.instance_14 = new lib.Bitmap112();
	this.instance_14.setTransform(-1,-1);

	this.instance_15 = new lib.Bitmap118();
	this.instance_15.setTransform(-1,-0.7);

	this.instance_16 = new lib.Bitmap131();
	this.instance_16.setTransform(-1,-1);

	this.instance_17 = new lib.Bitmap135();
	this.instance_17.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).to({state:[]},21).to({state:[{t:this.instance_15}]},2).to({state:[]},26).to({state:[{t:this.instance_16}]},2).to({state:[]},24).to({state:[{t:this.instance_17}]},75).to({state:[]},2).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,91.8,124.2);


(lib.li_1_79_44290 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.Bitmap6();

	this.instance_1 = new lib.Bitmap7();
	this.instance_1.setTransform(0,1.9);

	this.instance_2 = new lib.Bitmap8();
	this.instance_2.setTransform(0.7,4.8);

	this.instance_3 = new lib.Bitmap9();
	this.instance_3.setTransform(-3.5,6.9);

	this.instance_4 = new lib.Bitmap10();
	this.instance_4.setTransform(0.7,4.8);

	this.instance_5 = new lib.Bitmap11();
	this.instance_5.setTransform(0,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.3,130);


(lib.li_1_73_72680 = function(mode,startPosition,loop) {
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


(lib.li_1_72_18029 = function(mode,startPosition,loop) {
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


(lib.li_1_59_10366复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap43();
	this.instance.setTransform(-38.5,-50);

	this.instance_1 = new lib.Bitmap44();
	this.instance_1.setTransform(-39.2,-44.4);

	this.instance_2 = new lib.Bitmap45();
	this.instance_2.setTransform(-39.7,-44.4);

	this.instance_3 = new lib.Bitmap46();
	this.instance_3.setTransform(-39.8,-44.4);

	this.instance_4 = new lib.Bitmap47();
	this.instance_4.setTransform(-39.2,-44.4);

	this.instance_5 = new lib.Bitmap48();
	this.instance_5.setTransform(-38.6,-44.4);

	this.instance_6 = new lib.Bitmap49();
	this.instance_6.setTransform(-39.7,-44.4);

	this.instance_7 = new lib.Bitmap50();
	this.instance_7.setTransform(-40,-40.4);

	this.instance_8 = new lib.Bitmap51();
	this.instance_8.setTransform(-39.9,-44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},59).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_8}]},2).to({state:[]},30).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-50,78,95);


(lib.li_1_58_76545复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap103();
	this.instance.setTransform(-14.7,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-13.4,30,27);


(lib.li_1_57_62512复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap42();
	this.instance.setTransform(-23.7,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-31.1,47,62);


(lib.li_1_56_95137复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap102();
	this.instance.setTransform(-11,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-12.1,22,24);


(lib.li_1_55_93676复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap68();
	this.instance.setTransform(-39,-47.3);

	this.instance_1 = new lib.Bitmap67();
	this.instance_1.setTransform(-39,-44.4);

	this.instance_2 = new lib.Bitmap70();
	this.instance_2.setTransform(-39,-44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},67).to({state:[]},1).wait(1395));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-47.3,79,92);


(lib.li_1_54_16274复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap73();
	this.instance.setTransform(-14.7,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-13.4,30,27);


(lib.li_1_53_70231复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap71();
	this.instance.setTransform(-23.7,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-31.1,47,62);


(lib.li_1_52_6617复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap72();
	this.instance.setTransform(-11,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-12.1,22,24);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.转曲();
	this.instance.setTransform(-207.2,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.2,-27,1700,919);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.暂停();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,71);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.开始();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,71);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层352拷贝();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,100);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层65拷贝();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,100);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.奖励();
	this.instance.setTransform(22.9,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.9,51.4,202,199);


(lib.li_1_30_69847 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-66.7,-72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-72.3,129,152);


(lib.li_1_27_10701 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap77();
	this.instance.setTransform(-87.2,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-120.5,174,241);


(lib.li_1_26_59017 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap57();
	this.instance.setTransform(-16.1,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-19.9,37,40);


(lib.li_1_25_44040 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap58();
	this.instance.setTransform(-18.4,-19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-19.8,34,40);


(lib.li_1_24_95592 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap56();
	this.instance.setTransform(-11.6,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-13.4,23,27);


(lib.元件6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance_1 = new lib.荷花骨朵();
	this.instance_1.setTransform(0.3,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,-7.5,39,48);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.基本功();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303,173);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.标题拷贝();
	this.instance.setTransform(-28,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,5,1019,122);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.背景();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.li_1_139_29141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.li_1_137_36011("synched",0);
	this.instance.setTransform(27.9,5.4,0.105,0.121,0,29.8,34.3,-283.4,-801.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(497));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.7,0.7,107.9,198.9);


(lib.li_1_134_15167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.li_1_140_42646("synched",0);
	this.instance.setTransform(32.1,-6.1,0.109,0.122,0,31.9,32.1,-283.7,-801.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.7,-10.7,115.4,195.9);


(lib.li_1_118_52566 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_27_10701("synched",0);
	this.instance.setTransform(-70,110,1,1,0,0,0,-70,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:110.1,rotation:8.7,x:-69.9,y:110.1},23).to({regY:110,rotation:0,x:-70,y:110},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-120.5,174,241);


(lib.li_1_100_73020 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.li_1_24_95592("synched",0);
	this.instance.setTransform(0.6,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04},16).to({scaleX:1},18).wait(1));

	// 图层 3
	this.instance_1 = new lib.li_1_25_44040("synched",0);
	this.instance_1.setTransform(12.2,-1.1,1,1,0,0,0,-11,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-8.5,skewY:-10.1,x:12.1,y:0.1},16).to({skewX:0,skewY:0,x:12.2,y:-1.1},18).wait(1));

	// 图层 4
	this.instance_2 = new lib.li_1_26_59017("synched",0);
	this.instance_2.setTransform(-11.1,-1.1,1,1,0,0,0,11,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:11.1,scaleX:1,skewX:9,skewY:10.9,y:-0.3},16).to({regX:11,scaleX:1,skewX:0,skewY:0,y:-1.1},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-19.9,77,40.3);


(lib.li_1_98_68273 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.instance = new lib.li_1_73_72680("synched",0);
	this.instance.setTransform(-22.5,-93.3,0.905,0.602,0,0,0,160.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:14},14).to({x:-31.8,y:-93.1,startPosition:19},5).to({x:-22.5,y:-93.3,startPosition:0},6).to({startPosition:22},22).to({startPosition:3},6).to({startPosition:24},21).to({y:-117.9,startPosition:6},7).to({x:-27.6,y:-107.7,startPosition:12},6).to({startPosition:15},3).to({x:-20.4,y:-94.4,startPosition:19},4).to({x:-27.2,startPosition:1},7).to({startPosition:17},91).to({x:-17.2,startPosition:22},5).to({startPosition:3},6).wait(47));

	// 图层 5
	this.instance_1 = new lib.li_1_72_18029("synched",0);
	this.instance_1.setTransform(12.7,-94.5,0.905,0.602,0,0,0,178.8,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:14},14).to({x:14.8,y:-104.5,startPosition:19},5).to({x:17.3,y:-116.9,startPosition:0},6).to({startPosition:22},22).to({x:12.7,y:-94.5,startPosition:3},6).to({startPosition:24},21).to({x:18.4,y:-117.3,startPosition:6},7).to({x:13,y:-109.3,startPosition:12},6).to({startPosition:15},3).to({x:9.7,y:-96.6,startPosition:19},4).to({x:17.3,startPosition:1},7).to({startPosition:17},91).to({x:12.3,startPosition:22},5).to({x:4.2,startPosition:3},6).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.5,-101.6,321,164.1);


(lib.li_1_89_40717 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_123_26006("single",0);
	this.instance.setTransform(13.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({mode:"synched",startPosition:21},0).wait(16).to({mode:"single",startPosition:0},0).wait(5).to({mode:"synched",startPosition:21},0).wait(15).to({mode:"single",startPosition:0},0).wait(6).to({mode:"synched",startPosition:21},0).wait(17).to({mode:"single",startPosition:0},0).wait(10).to({mode:"synched",startPosition:21},0).wait(52).to({mode:"single",startPosition:0},0).wait(14).to({mode:"synched",startPosition:3},0).wait(44).to({mode:"single",startPosition:0},0).wait(8).to({mode:"synched",startPosition:3},0).wait(34).to({mode:"single",startPosition:0},0).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,1.5,32.4,6.1);


(lib.li_1_88_1074 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_79_44290("single",0);
	this.instance.setTransform(141.6,63.3,1,1,0,0,0,141.6,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({mode:"synched"},0).wait(3).to({mode:"single",startPosition:5},0).wait(3).to({mode:"synched"},0).wait(6).to({mode:"single",startPosition:0},0).wait(48).to({mode:"synched"},0).wait(11).to({mode:"single"},0).wait(41).to({mode:"synched"},0).wait(11).to({mode:"single"},0).wait(53).to({mode:"synched",loop:false},0).wait(11).to({mode:"single"},0).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283,130);


(lib.li_1_80_6083 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 4
	this.instance = new lib.li_1_100_73020("synched",0);
	this.instance.setTransform(84.1,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.7,startPosition:16},16).to({y:19,startPosition:34},18).wait(1));

	// 补间 5
	this.instance_1 = new lib.li_1_101_64517("synched",0);
	this.instance_1.setTransform(90,30,1,1,0,0,0,-33.1,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-65.4,scaleX:1.06,skewX:-2.7,skewY:-4.7,x:90.4,y:29.6},16).to({regY:-65.2,scaleX:1,skewX:0,skewY:0,x:90,y:30},18).wait(1));

	// 补间 6
	this.instance_2 = new lib.li_1_102_8710("synched",0);
	this.instance_2.setTransform(75.4,26,1,1,0,0,0,33.6,-71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:33.8,scaleX:1.02,skewX:2.5,skewY:4.5,y:25.7},16).to({regX:33.6,scaleX:1,skewX:0,skewY:0,y:26},18).wait(1));

	// 补间 7
	this.instance_3 = new lib.li_1_103_7055("synched",0);
	this.instance_3.setTransform(84.7,30,1,1,0,0,0,-1.2,-89.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-1.3,scaleX:1.04,scaleY:0.99,rotation:-2},16).to({regX:-1.2,scaleX:1,scaleY:1,rotation:0},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,164.8,215);


(lib.li_1_20_412复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.li_1_56_95137复制2("synched",0);
	this.instance.setTransform(50.9,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},13).to({rotation:-6.2,x:51.3},6).to({rotation:0,x:50.9},9).to({startPosition:0},50).to({rotation:-6.2,x:51.3},6).to({rotation:0,x:50.9},8).wait(233));

	// 图层 3
	this.instance_1 = new lib.li_1_57_62512复制2("synched",0);
	this.instance_1.setTransform(52.6,64.1,1,1,19.7,0,0,-16.9,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},13).to({rotation:-6.2,x:51.3,y:67.3},6).to({regY:-21.8,rotation:15,x:52.3,y:64.7},9).to({startPosition:0},50).to({rotation:-0.3,x:51.3,y:67.2},6).to({rotation:15,x:52.3,y:64.7},8).wait(233));

	// 图层 4
	this.instance_2 = new lib.li_1_58_76545复制2("synched",0);
	this.instance_2.setTransform(54.7,68.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},13).to({rotation:-6.2,x:55.2,y:68.1},6).to({rotation:0,x:54.7,y:68.6},9).to({startPosition:0},50).to({rotation:-6.2,x:55.2,y:68.1},6).to({rotation:0,x:54.7,y:68.6},8).wait(233));

	// 图层 5
	this.instance_3 = new lib.li_1_59_10366复制2("synched",0);
	this.instance_3.setTransform(38.1,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:13},13).to({startPosition:19},6).to({startPosition:28},9).to({startPosition:76},48).to({startPosition:78},2).to({startPosition:84},6).to({startPosition:92},8).wait(233));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-6.5,94,133.7);


(lib.li_1_19_67836复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.li_1_52_6617复制2("synched",0);
	this.instance.setTransform(39.7,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},8).to({scaleX:1,scaleY:1,skewX:8.6,skewY:7.1,x:37.7,y:65},7).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:39.7,y:67.3},9).wait(441));

	// 图层 3
	this.instance_1 = new lib.li_1_53_70231复制2("synched",0);
	this.instance_1.setTransform(33.4,64.1,1,1,-25.9,0,0,14.3,-23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},8).to({regX:14.5,scaleX:0.99,scaleY:1.01,rotation:0,skewX:6.9,skewY:1.6,x:37.2,y:65.1},7).to({regX:14.3,scaleX:1,scaleY:1,rotation:-13.2,skewX:0,skewY:0,x:35.7,y:64.3},9).wait(441));

	// 图层 4
	this.instance_2 = new lib.li_1_54_16274复制2("synched",0);
	this.instance_2.setTransform(36,68.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},8).to({scaleX:1,scaleY:1,skewX:8.6,skewY:7.1,x:33.8,y:65.8},7).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:36,y:68.6},9).wait(441));

	// 图层 5
	this.instance_3 = new lib.li_1_55_93676复制2("synched",0);
	this.instance_3.setTransform(70,10,1,1,0,0,0,17.4,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:8},8).to({startPosition:15},7).to({startPosition:24},9).wait(441));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-3.9,96.7,133.4);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiAmA9/MAAAhn8MEN4AAAMAAABn8g");
	mask.setTransform(904.3,396.8);

	// mc_1
	this.mc_1 = new lib.元件17();
	this.mc_1.setTransform(938.2,485,1,1,0,0,0,642,306);

	this.mc_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

	// 方框
	this.instance = new lib.方框();
	this.instance.setTransform(8.8,63.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,63.8,1882,768);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_1
	this.mc_1 = new lib.元件11();
	this.mc_1.setTransform(29,35.5,1,1,0,0,0,29,35.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

	// mc_2
	this.mc_2 = new lib.元件12();
	this.mc_2.setTransform(29,35.5,1,1,0,0,0,29,35.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,71);


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


(lib.li_1_1_12824 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_30_69847("synched",0);
	this.instance.setTransform(80,22.1,1,1,0,0,0,17.3,-50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.2,regY:-50.1,rotation:-1.9,y:22.2},18).to({regX:17.3,regY:-50.2,rotation:0,y:22.1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,129,152);


(lib.li_1_87_75494复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 9
	this.instance = new lib.li_1_105_41959复制3("synched",0);
	this.instance.setTransform(31.5,66.6,1,1,0,0,0,9.6,-25.2);

	this.instance_1 = new lib.li_1_106_35216复制3("synched",0);
	this.instance_1.setTransform(71.5,6.6,1,1,0,0,0,20.1,-36.9);

	this.instance_2 = new lib.Bitmap140();
	this.instance_2.setTransform(25.1,55.2);

	this.instance_3 = new lib.Bitmap139();
	this.instance_3.setTransform(-7.7,59.6);

	this.instance_4 = new lib.Bitmap138();
	this.instance_4.setTransform(12.4,-1);

	this.instance_5 = new lib.Bitmap82();
	this.instance_5.setTransform(25.1,55.2);

	this.instance_6 = new lib.Bitmap83();
	this.instance_6.setTransform(-7.7,59.6);

	this.instance_7 = new lib.Bitmap81();
	this.instance_7.setTransform(12.4,-4.1);

	this.instance_8 = new lib.Bitmap30();
	this.instance_8.setTransform(25.1,55.2);

	this.instance_9 = new lib.Bitmap31();
	this.instance_9.setTransform(-7.7,59.6);

	this.instance_10 = new lib.Bitmap29();
	this.instance_10.setTransform(12.4,-6.4);

	this.instance_11 = new lib.Bitmap86();
	this.instance_11.setTransform(25.1,55.2);

	this.instance_12 = new lib.Bitmap85();
	this.instance_12.setTransform(-7.7,59.6);

	this.instance_13 = new lib.Bitmap84();
	this.instance_13.setTransform(12.4,-3.6);

	this.instance_14 = new lib.Bitmap89();
	this.instance_14.setTransform(25.1,55.2);

	this.instance_15 = new lib.Bitmap88();
	this.instance_15.setTransform(-7.7,59.6);

	this.instance_16 = new lib.Bitmap87();
	this.instance_16.setTransform(12.4,-4.8);

	this.instance_17 = new lib.Bitmap91();
	this.instance_17.setTransform(25.1,55.2);

	this.instance_18 = new lib.Bitmap93();
	this.instance_18.setTransform(-7.7,59.6);

	this.instance_19 = new lib.Bitmap92();
	this.instance_19.setTransform(20.1,55.2);

	this.instance_20 = new lib.Bitmap90();
	this.instance_20.setTransform(12.4,-10.2);

	this.instance_21 = new lib.Bitmap95();
	this.instance_21.setTransform(25.1,55.2);

	this.instance_22 = new lib.Bitmap97();
	this.instance_22.setTransform(-7.7,59.6);

	this.instance_23 = new lib.Bitmap96();
	this.instance_23.setTransform(20.1,55.2);

	this.instance_24 = new lib.Bitmap94();
	this.instance_24.setTransform(12.4,-7.8);

	this.instance_25 = new lib.Bitmap99();
	this.instance_25.setTransform(25.1,55.2);

	this.instance_26 = new lib.Bitmap101();
	this.instance_26.setTransform(-7.7,59.6);

	this.instance_27 = new lib.Bitmap100();
	this.instance_27.setTransform(20.1,55.2);

	this.instance_28 = new lib.Bitmap98();
	this.instance_28.setTransform(12.4,-7.5);

	this.instance_29 = new lib.li_1_19_67836复制2("synched",0);
	this.instance_29.setTransform(44.2,59.6,1,1,0,0,0,45.3,59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},152).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},1).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},4).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]},1).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},1).to({state:[{t:this.instance_29,p:{startPosition:0}}]},1).to({state:[{t:this.instance_29,p:{startPosition:20}}]},20).to({state:[{t:this.instance_1},{t:this.instance}]},49).wait(164));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,91.4,124.2);


(lib.li_1_85_19166复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 11
	this.instance = new lib.Bitmap22();
	this.instance.setTransform(39.9,55.2);

	this.instance_1 = new lib.Bitmap24();
	this.instance_1.setTransform(39.9,55.2);

	this.instance_2 = new lib.Bitmap26();
	this.instance_2.setTransform(39.9,55.2);

	this.instance_3 = new lib.Bitmap124();
	this.instance_3.setTransform(1,-1.6);

	this.instance_4 = new lib.Bitmap28();
	this.instance_4.setTransform(39.9,55.2);

	this.instance_5 = new lib.Bitmap32();
	this.instance_5.setTransform(39.9,55.2);

	this.instance_6 = new lib.Bitmap127();
	this.instance_6.setTransform(39.9,55.2);

	this.instance_7 = new lib.Bitmap129();
	this.instance_7.setTransform(44.8,59.8);

	this.instance_8 = new lib.Bitmap34();
	this.instance_8.setTransform(39.9,55.2);

	this.instance_9 = new lib.Bitmap37();
	this.instance_9.setTransform(39.9,55.2);

	this.instance_10 = new lib.Bitmap38();
	this.instance_10.setTransform(39.9,55.2);

	this.instance_11 = new lib.Bitmap41();
	this.instance_11.setTransform(39.9,55.2);

	this.instance_12 = new lib.li_1_20_412复制2("synched",0);
	this.instance_12.setTransform(45.3,59.6,1,1,0,0,0,45.3,59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},75).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},108).wait(103));

	// 补间 12
	this.instance_13 = new lib.Bitmap23();
	this.instance_13.setTransform(-1,-1);

	this.instance_14 = new lib.Bitmap25();
	this.instance_14.setTransform(1.5,-0.1);

	this.instance_15 = new lib.Bitmap125();
	this.instance_15.setTransform(2.8,-2.7);

	this.instance_16 = new lib.Bitmap33();
	this.instance_16.setTransform(4.7,-2.7);

	this.instance_17 = new lib.Bitmap128();
	this.instance_17.setTransform(39.9,55.2);

	this.instance_18 = new lib.Bitmap126();
	this.instance_18.setTransform(5.9,-2.7);

	this.instance_19 = new lib.Bitmap35();
	this.instance_19.setTransform(6.6,-2.7);

	this.instance_20 = new lib.Bitmap36();
	this.instance_20.setTransform(7.6,-2.7);

	this.instance_21 = new lib.Bitmap39();
	this.instance_21.setTransform(7.6,-2.7);

	this.instance_22 = new lib.Bitmap40();
	this.instance_22.setTransform(-0.5,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},75).to({state:[{t:this.instance_14}]},1).to({state:[]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_18},{t:this.instance_17}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[]},1).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,91.8,124.2);


(lib.li_1_18_87912 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{中间:0});

	// 图层 1
	this.instance = new lib.li_1_1_12824("single",0);
	this.instance.setTransform(0,0,1,1,0,0,0,62.7,72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({mode:"synched"},0).wait(39).to({mode:"single",startPosition:39},0).wait(32).to({mode:"synched"},0).wait(71).to({mode:"single",startPosition:30},0).wait(20).to({mode:"synched"},0).wait(31).to({mode:"single",startPosition:21},0).wait(79).to({mode:"synched",startPosition:30},0).wait(946));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-72.3,129,152);


(lib.li_1_119_8678 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.li_1_18_87912("synched",0);
	this.instance.setTransform(16.1,-50.7,1,1,0,0,0,16,-50.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:14},14).to({scaleY:1,skewX:5.4,skewY:3.1,y:-50.6,startPosition:18},4).to({regX:15.9,regY:-50.4,skewX:-6.5,skewY:-4.4,x:16.3,y:-50.7,startPosition:24},6).to({regX:16,regY:-50.2,scaleY:1,skewX:3.3,skewY:2.5,x:16.1,y:-50.6,startPosition:32},8).to({regY:-50.3,skewX:0,skewY:0,y:-50.7,startPosition:42},10).to({startPosition:69},27).to({regX:15.9,scaleY:1,skewX:-5.7,skewY:-3,startPosition:75},6).to({regX:16,skewX:4.4,skewY:2.4,startPosition:82},7).to({regX:15.9,scaleY:1,skewX:-1.9,skewY:-1.2,x:16.3,startPosition:91},9).to({regX:16,skewX:0,skewY:0,x:16.1,startPosition:101},10).to({startPosition:192},91).to({scaleY:1,skewX:5.4,skewY:3.1,y:-50.6,startPosition:197},5).to({regX:15.9,regY:-50.4,skewX:-6.5,skewY:-4.4,x:16.3,y:-50.7,startPosition:203},6).to({regX:16,regY:-50.2,scaleY:1,skewX:3.3,skewY:2.5,x:16.1,y:-50.6,startPosition:211},8).to({regX:15.9,regY:-50.3,skewX:-2.7,skewY:-1.7,y:-50.7,startPosition:221},10).to({regX:16,skewX:0,skewY:0,startPosition:232},11).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,-72.7,129.4,152);


(lib.li_1_99_70981 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.li_1_120_37559("synched",0);
	this.instance.setTransform(81.4,-60.9,1,1,4.7,0,0,4,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},14,cjs.Ease.get(-0.6)).to({rotation:-7.4,x:79.4,y:-59.9},8,cjs.Ease.get(-0.6)).to({regY:36.7,rotation:0.7,x:79.6,y:-58.7},8).to({regY:36.6,rotation:0,x:80,y:-60},9).to({startPosition:0},3).to({startPosition:0},5).to({regY:36.7,rotation:5.9,x:79},6).to({startPosition:0},16).to({regY:36.6,rotation:0,x:80},5).to({regY:36.7,rotation:5.9,x:79},7).to({regY:36.6,rotation:-7.4,x:79.4,y:-59.9},8).to({regY:36.7,rotation:6.2,x:80.1,y:-60.7},8).to({regY:36.6,rotation:0,x:80,y:-60},9).to({startPosition:0},86).to({regY:36.7,rotation:5.9,x:79},7).to({regY:36.6,rotation:-7.4,x:79.4,y:-59.9},10).to({regY:36.7,rotation:6.2,x:80.1,y:-60.7},9).to({regY:36.6,rotation:0,x:80,y:-60},10).wait(21));

	// 图层 5
	this.instance_1 = new lib.li_1_121_93310("synched",0);
	this.instance_1.setTransform(-70,-60,1,1,-5,0,0,6.1,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},14,cjs.Ease.get(-0.6)).to({regX:6.2,regY:34.5,rotation:7.7,x:-70.7,y:-59.1},6,cjs.Ease.get(-0.6)).to({regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},8).to({regY:34.5,rotation:0,x:-69.9,y:-59.9},9).to({startPosition:0},5).to({startPosition:0},5).to({rotation:-4.5,x:-69.1},6).to({startPosition:0},16).to({rotation:0,x:-69.9},5).to({rotation:-4.5,x:-69.1},7).to({rotation:7.7,x:-70.7,y:-59.1},6).to({regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},8).to({regY:34.5,rotation:0,x:-69.9,y:-59.9},9).to({startPosition:0},88).to({rotation:-4.5,x:-69.1},7).to({rotation:7.7,x:-70.7,y:-59.1},8).to({regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},9).to({regY:34.5,rotation:0,x:-69.9,y:-59.9},10).wait(23));

	// 图层 3
	this.instance_2 = new lib.li_1_119_8678("synched",0);
	this.instance_2.setTransform(-0.2,-136,1,1,0,0,0,-2.1,-60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:14},14,cjs.Ease.get(-0.6)).to({x:0,y:-140,startPosition:18},4,cjs.Ease.get(-0.6)).to({startPosition:24},6).to({startPosition:32},8).to({startPosition:42},10).to({startPosition:47},5).to({startPosition:53},6).to({startPosition:69},16).to({startPosition:74},5).to({startPosition:81},7).to({startPosition:87},6).to({startPosition:192},105).to({startPosition:199},7).to({startPosition:207},8).wait(42));

	// 元件 8
	this.instance_3 = new lib.li_1_88_1074("synched",0);
	this.instance_3.setTransform(2.4,92.8,1,1,0,0,0,141.6,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(249));

	// 图层 6
	this.instance_4 = new lib.li_1_122_6950("synched",0);
	this.instance_4.setTransform(3.2,154.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(249));

	// 图层 7
	this.instance_5 = new lib.li_1_89_40717("synched",0);
	this.instance_5.setTransform(3.2,187.4,1,1,0,0,0,13.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(249));

	// 图层 8
	this.instance_6 = new lib.li_1_124_81140("synched",0);
	this.instance_6.setTransform(2.7,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(249));

	// 图层 9
	this.instance_7 = new lib.li_1_125_93408("synched",0);
	this.instance_7.setTransform(1.8,106.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(249));

	// 图层 10
	this.instance_8 = new lib.li_1_126_23199("synched",0);
	this.instance_8.setTransform(0,220,1,1,0,0,0,-3,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(249));

	// 图层 11
	this.instance_9 = new lib.li_1_127_71601("synched",0);
	this.instance_9.setTransform(92.5,-44.8,1,1,4.7,0,0,-31.4,69.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},14,cjs.Ease.get(-0.6)).to({regY:69.7,rotation:-7.4,x:93.8,y:-46.4},8,cjs.Ease.get(-0.6)).to({regY:69.6,rotation:0.7,x:91.9,y:-43.4},8).to({rotation:0,x:92.5,y:-44.7},9).to({startPosition:0},3).to({startPosition:0},5).to({regY:69.5,rotation:5.9,x:89.8,y:-43.6},6).to({startPosition:0},16).to({regY:69.6,rotation:0,x:92.5,y:-44.7},5).to({regY:69.5,rotation:5.9,x:89.8,y:-43.6},7).to({regY:69.7,rotation:-7.4,x:93.8,y:-46.4},8).to({rotation:6.2,x:90.8,y:-44.2},8).to({regY:69.6,rotation:0,x:92.5,y:-44.7},9).to({startPosition:0},86).to({regY:69.5,rotation:5.9,x:89.8,y:-43.6},7).to({regY:69.7,rotation:-7.4,x:93.8,y:-46.4},10).to({rotation:6.2,x:90.8,y:-44.2},9).to({regY:69.6,rotation:0,x:92.5,y:-44.7},10).wait(21));

	// 图层 12
	this.instance_10 = new lib.li_1_128_27770("synched",0);
	this.instance_10.setTransform(-91.7,-47.4,1,1,-5,0,0,31.1,67.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},14,cjs.Ease.get(-0.6)).to({rotation:7.7,x:-94.7,y:-51.7},6,cjs.Ease.get(-0.6)).to({regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},8).to({regY:67.7,rotation:0,x:-92.7,y:-49.3},9).to({startPosition:0},5).to({startPosition:0},5).to({rotation:-4.5,x:-91,y:-47.6},6).to({startPosition:0},16).to({rotation:0,x:-92.7,y:-49.3},5).to({rotation:-4.5,x:-91,y:-47.6},7).to({rotation:7.7,x:-94.7,y:-51.7},6).to({regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},8).to({regY:67.7,rotation:0,x:-92.7,y:-49.3},9).to({startPosition:0},88).to({rotation:-4.5,x:-91,y:-47.6},7).to({rotation:7.7,x:-94.7,y:-51.7},8).to({regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},9).to({regY:67.7,rotation:0,x:-92.7,y:-49.3},10).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.3,-230.6,407.7,458.4);


(lib.li_1_69_77011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_248 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(248).call(this.frame_248).wait(1));

	// 图层 4
	this.instance = new lib.li_1_85_19166复制("synched",75);
	this.instance.setTransform(337,547.4,1.012,1.003,0,19.3,20.3,15.7,11.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({_off:false},0).to({regY:11.9,scaleX:1.02,scaleY:1,skewX:29.8,skewY:30.8,x:340.3,y:540.5,startPosition:76},1).to({regY:11.8,scaleX:1.02,scaleY:0.99,skewX:37.6,skewY:38.9,x:346.3,y:539.3,startPosition:77},1).to({regY:11.9,scaleX:1.03,scaleY:0.99,skewX:45.6,skewY:47.1,x:350,y:533.8,startPosition:78},1).to({scaleX:1.04,scaleY:0.98,skewX:51.6,skewY:53.2,x:353.4,y:529.9,startPosition:79},1).to({scaleX:1.04,scaleY:0.98,skewX:57.6,skewY:59.4,x:357,y:522.7,startPosition:80},1).to({regX:15.6,regY:11.7,scaleX:1.05,scaleY:0.97,skewX:63.4,skewY:65.4,x:360,y:518.7,startPosition:81},1).to({regX:15.5,skewX:78.5,skewY:80.4,x:360.2,y:521.2,startPosition:82},1,cjs.Ease.get(-0.6)).to({scaleX:1.05,scaleY:0.97,skewX:108.1,skewY:110.1,x:359.3,y:527.5,startPosition:83},1).to({regX:15.6,scaleX:1.05,scaleY:0.97,skewX:138,skewY:140,x:362,y:532.3,startPosition:84},1).to({regX:15.5,regY:11.8,skewX:175.7,skewY:177.7,x:357.9,y:541,startPosition:85},1).to({regX:15.6,scaleX:1.05,scaleY:0.97,skewX:213.3,skewY:215.3,x:356.4,y:536.4,startPosition:86},1).to({regY:11.6,scaleX:1.05,scaleY:0.97,skewX:251,skewY:253,x:347.1,y:542,startPosition:87},1).to({regX:15.7,scaleX:1.05,scaleY:0.97,skewX:253.2,skewY:255.2,x:345.2,y:543.8,startPosition:88},1,cjs.Ease.get(-0.6)).to({regX:15.6,regY:11.7,scaleX:1.04,scaleY:0.98,skewX:257.2,skewY:258.9,x:343.5,y:547.2,startPosition:89},1).to({regY:11.6,scaleX:1.03,scaleY:0.98,skewX:262.5,skewY:264,x:341,y:551.8,startPosition:90},1).to({regX:15.7,regY:11.8,scaleX:1,scaleY:1.01,skewX:291.3,skewY:291.5,x:329.9,y:566.3,startPosition:94},4).to({skewX:270.6,skewY:270.8,x:331.7,y:550.2,startPosition:101},7).to({skewX:263.9,skewY:264.2,x:337.9,y:549.3,startPosition:106},5).to({startPosition:192},86).to({scaleX:1,rotation:-76.1,skewX:360,skewY:360,x:336.1,startPosition:193},1).to({_off:true},1).wait(55));

	// 图层 3
	this.instance_1 = new lib.li_1_87_75494复制("synched",152);
	this.instance_1.setTransform(168.3,547.6,1.013,1.003,0,-39.6,-38.6,78.9,18.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75).to({_off:false},0).to({scaleX:1.02,scaleY:1,skewX:-58.9,skewY:-57.4,x:163.9,y:539.5,startPosition:153},1).to({scaleX:1.03,scaleY:0.99,skewX:-73.9,skewY:-71.9,x:159,y:535.2,startPosition:154},1).to({scaleX:1.04,scaleY:0.99,skewX:-88.7,skewY:-86.2,x:149.5,y:526,startPosition:155},1).to({scaleX:1.02,scaleY:0.98,skewX:-99.3,skewY:-97.3,x:144.6,y:523.3,startPosition:156},1).to({regX:79,scaleX:0.99,scaleY:0.95,skewX:-120.3,skewY:-120,x:134.7,y:517.9,startPosition:158},2).to({regX:79.1,scaleX:0.97,scaleY:0.94,skewX:-128.5,skewY:-130.3,x:135.4,y:521.5,startPosition:159},1,cjs.Ease.get(-0.6)).to({regX:79,scaleX:1,scaleY:0.96,skewX:-148.2,skewY:-147.4,x:141.4,y:523.6,startPosition:160},1).to({scaleX:1.04,scaleY:0.98,skewX:-167.7,skewY:-164.7,x:144.4,y:522.7,startPosition:161},1).to({scaleX:1.03,scaleY:0.99,skewX:-195.8,skewY:-193.3,x:142.7,y:528.6,startPosition:162},1).to({scaleX:1.02,scaleY:1,skewX:-223.9,skewY:-222.1,x:144.2,y:536.9,startPosition:163},1).to({regY:19.1,scaleX:1.01,scaleY:1.01,skewX:-252,skewY:-251,x:153.7,y:545.3,startPosition:164},1).to({regY:19,scaleX:1.01,skewX:-266.5,skewY:-266,x:158.2,y:559.2,startPosition:167},3).to({regX:78.9,regY:18.9,scaleX:1,skewX:-285.5,skewY:-285.7,x:164.1,y:577.9,startPosition:171},4).to({skewX:-266.6,skewY:-266.8,x:156.6,y:562,startPosition:178},7).to({regX:78.8,skewX:-260.4,skewY:-260.6,x:153.2,y:560,startPosition:183},5).to({startPosition:269},86).to({scaleX:1,scaleY:1,skewX:-286.2,skewY:-286.4,x:159.3,y:561.4,startPosition:270},1).to({_off:true},1).wait(55));

	// 图层 7
	this.instance_2 = new lib.li_1_85_19166("synched",20);
	this.instance_2.setTransform(355.8,556.5,1.016,0.994,0,-59.4,-57.9,15.6,11.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({regX:15.7,scaleY:1.01,skewX:-101.4,skewY:-101,x:366.2,y:517.9,startPosition:25},5).to({regX:15.6,scaleX:1,skewX:-126.2,skewY:-126,x:362.2,y:519.8,startPosition:29},4).to({regX:15.7,regY:11.7,skewX:-91.5,skewY:-91.3,x:351.2,y:523.5,startPosition:35},6).to({regX:15.6,regY:11.8,skewX:-126.2,skewY:-126,x:362.2,y:519.8,startPosition:41},6).to({regX:15.7,regY:11.7,skewX:-91.5,skewY:-91.3,x:351.6,y:523.7,startPosition:47},6).to({_off:true},1).wait(201));

	// 图层 27
	this.instance_3 = new lib.li_1_99_70981("synched",0);
	this.instance_3.setTransform(250,448.6,1,1,0,0,0,5.3,223.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:14},14).to({rotation:-2.8,x:258,y:474.8,startPosition:19},5).to({regY:223.8,rotation:3.7,x:267.2,y:441.2,startPosition:25},6).to({rotation:6,x:262.3,y:448.7,startPosition:29},4).to({rotation:2.3,x:253.8,y:448.6,startPosition:35},6).to({rotation:6,x:262.3,y:448.7,startPosition:41},6).to({rotation:2.3,x:253.8,y:448.6,startPosition:47},6).to({rotation:-1,x:250.1,y:466.8,startPosition:53},6).to({regY:223.7,rotation:0,x:250,y:448.6,startPosition:60},7).to({startPosition:67},7).to({startPosition:69},2).to({y:442.7,startPosition:74},5).to({regY:223.6,scaleX:1.03,scaleY:1.01,y:463.3,startPosition:81},7).to({regX:5.4,regY:223.7,scaleX:1,scaleY:1,rotation:-3.5,x:262.2,y:438.3,startPosition:87},6).to({rotation:-2.8,x:257,y:450.6,startPosition:90},3).to({regX:5.3,regY:223.8,rotation:-2,x:250.1,y:466.9,startPosition:94},4).to({regY:223.7,rotation:0,x:250,y:448.6,startPosition:101},7).to({rotation:1.2,startPosition:106},5).to({startPosition:192},86).to({regX:5.4,rotation:-3.4,x:247.7,y:442.7,startPosition:197},5).to({regX:5.3,rotation:-2.7,x:250.1,y:466.9,startPosition:203},6).to({regX:5.4,rotation:-0.6,y:448.6,startPosition:210},7).to({regX:5.3,rotation:0,x:250,startPosition:216},6).wait(33));

	// 图层 28
	this.instance_4 = new lib.li_1_80_6083("synched",0);
	this.instance_4.setTransform(251,590,1,1.007,0,0,0,85,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:14},14).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:256.1,y:604.6,startPosition:19},5).to({regX:85.1,scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:257.8,y:583.8,startPosition:25},6).to({regX:85,scaleY:1.01,rotation:2.7,x:256.6,y:589.9,startPosition:29},4).to({rotation:1.5,x:251,startPosition:0},6).to({rotation:2.7,x:256.6,startPosition:6},6).to({rotation:1.5,x:251,startPosition:12},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:251.2,y:602.3,startPosition:18},6).to({scaleX:1,scaleY:1.01,x:251,y:590,startPosition:25},7).to({startPosition:32},7).to({startPosition:34},2).to({scaleX:0.98,scaleY:1.02,y:586.2,startPosition:4},5).to({regX:85.2,scaleX:1.13,scaleY:1,x:251.9,y:592.1,startPosition:11},7).to({regX:85,scaleX:0.98,scaleY:1.03,rotation:1.7,x:258.8,y:584.6,startPosition:17},6).to({scaleX:1.01,scaleY:1.01,rotation:0.8,x:255.5,y:592.2,startPosition:20},3).to({scaleX:1.05,scaleY:0.98,rotation:0,x:251.2,y:602.3,startPosition:24},4).to({scaleX:1,scaleY:1.01,x:251,y:590,startPosition:31},7).to({startPosition:1},5).to({startPosition:17},86).to({scaleX:0.98,scaleY:1.02,y:586.2,startPosition:22},5).to({scaleX:1.05,scaleY:0.98,x:251.2,y:602.3,startPosition:28},6).to({scaleX:1,scaleY:1.01,x:251,y:590,startPosition:0},7).to({startPosition:6},6).wait(33));

	// 图层 32
	this.instance_5 = new lib.li_1_104_94571("synched",0);
	this.instance_5.setTransform(250.1,578.1,1,1.007,0,0,0,1.6,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},14).to({regY:23.8,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:255.4,y:593.2},5).to({regY:23.9,scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:257.6,y:571.6},6).to({scaleY:1.01,rotation:2.7,x:256.2,y:578},4).to({regY:23.8,rotation:1.5,x:250.4,y:577.9},6).to({regY:23.9,rotation:2.7,x:256.2,y:578},6).to({regY:23.8,rotation:1.5,x:250.4,y:577.9},6).to({regX:1.5,regY:23.9,scaleX:1.05,scaleY:0.98,rotation:0,x:250.2,y:590.6},6).to({regX:1.6,scaleX:1,scaleY:1.01,x:250.1,y:578.1},7).to({startPosition:0},7).to({startPosition:0},2).to({scaleY:1.02,y:574.1},5).to({scaleX:1.04,scaleY:1,x:250.5,y:580.3},7).to({scaleX:0.99,scaleY:1.03,rotation:1.7,x:258.2,y:572.5},6).to({scaleX:1.02,scaleY:1.01,rotation:0.8,x:254.8,y:580.2},3).to({regX:1.5,scaleX:1.05,scaleY:0.98,rotation:0,x:250.2,y:590.6},4).to({regX:1.6,scaleX:1,scaleY:1.01,x:250.1,y:578.1},7).to({startPosition:0},5).to({startPosition:0},86).to({scaleY:1.02,y:574.1},5).to({regX:1.5,scaleX:1.05,scaleY:0.98,x:250.2,y:590.6},6).to({regX:1.6,scaleX:1,scaleY:1.01,x:250.1,y:578.1},7).to({startPosition:0},6).wait(33));

	// 元件 5
	this.instance_6 = new lib.li_1_98_68273("synched",0);
	this.instance_6.setTransform(256.6,612,0.913,1.007,0,0,0,3.9,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:14},14).to({regY:129.8,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:1.1,x:261.5,y:625.9,startPosition:19},5).to({regY:130,scaleX:0.91,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:261.7,y:606.5,startPosition:25},6).to({regY:129.9,scaleY:1.01,rotation:2.7,x:261.1,y:612.2,startPosition:29},4).to({rotation:1.5,x:256.1,y:612.1,startPosition:35},6).to({rotation:2.7,x:261.1,y:612.2,startPosition:41},6).to({rotation:1.5,x:256.1,y:612.1,startPosition:47},6).to({scaleX:0.96,scaleY:0.98,rotation:0,x:257.2,y:623.8,startPosition:53},6).to({scaleX:0.91,scaleY:1.01,x:256.6,y:612,startPosition:60},7).to({startPosition:67},7).to({startPosition:69},2).to({regY:130,scaleY:1.02,y:608.6,startPosition:74},5).to({regX:3.8,regY:129.9,scaleX:0.96,scaleY:1.01,x:257.1,y:616.8,startPosition:81},7).to({regX:3.9,regY:130,scaleX:0.91,scaleY:1.03,rotation:1.7,x:263.8,y:607.3,startPosition:87},6).to({regY:129.9,scaleX:0.93,scaleY:1.01,rotation:0.8,x:261,y:614.3,startPosition:90},3).to({scaleX:0.96,scaleY:0.98,rotation:0,x:257.2,y:623.8,startPosition:94},4).to({scaleX:0.91,scaleY:1.01,x:256.6,y:612,startPosition:101},7).to({startPosition:106},5).to({startPosition:192},86).to({regY:130,scaleY:1.02,y:608.6,startPosition:197},5).to({regY:129.9,scaleX:0.96,scaleY:0.98,x:257.2,y:623.8,startPosition:203},6).to({scaleX:0.91,scaleY:1.01,x:256.6,y:612,startPosition:210},7).to({startPosition:216},6).wait(33));

	// 图层 34
	this.instance_7 = new lib.li_1_87_75494("synched",0);
	this.instance_7.setTransform(175.5,567.3,1,1.006,0,-11.6,-11.8,78.9,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:14},14).to({scaleX:1.04,scaleY:0.97,skewX:14,skewY:13.9,x:162,y:575.7,startPosition:19},5).to({regY:18.8,scaleX:1,scaleY:1.02,skewX:4,skewY:3.5,x:183.9,y:554.6,startPosition:25},6).to({regY:18.9,scaleY:1.01,skewX:-8.6,skewY:-8.8,x:181.8,y:563.6,startPosition:29},4).to({skewX:-1.6,skewY:-1.9,x:169.2,y:563,startPosition:35},6).to({skewX:-8.6,skewY:-8.8,x:181.8,y:563.6,startPosition:41},6).to({skewX:-1.6,skewY:-1.9,x:169.2,y:563,startPosition:47},6).to({regX:79,regY:18.8,scaleX:1.05,scaleY:0.99,skewX:7.6,skewY:9.5,x:172.3,y:579.9,startPosition:53},6).to({regX:78.9,regY:18.9,scaleX:1,scaleY:1.01,skewX:-16.6,skewY:-16.8,x:178.8,y:568.1,startPosition:60},7).to({scaleX:1,scaleY:1,skewX:-11.5,skewY:-11.8,x:175.5,y:567.4,startPosition:67},7).to({startPosition:69},2).to({scaleX:1,scaleY:1.02,skewX:-3.6,skewY:-4,x:169.1,y:562,startPosition:74},5).to({_off:true},1).wait(119).to({_off:false,regX:78.8,scaleX:1,scaleY:1.01,skewX:55.1,skewY:54.7,x:164.3,y:563.8,startPosition:150},0).to({scaleX:1,scaleY:1.01,skewX:32.8,skewY:32.3,x:169,y:564,startPosition:151},1).to({regX:78.9,scaleX:1,scaleY:1.02,skewX:-12,skewY:-12.5,x:180.4,y:564.3,startPosition:153},2).to({regX:79,scaleX:1.05,scaleY:0.99,skewX:-22.8,skewY:-21,x:181.4,y:581.3,startPosition:159},6).to({regX:78.9,scaleX:1,scaleY:1.01,skewX:-16,skewY:-16.3,x:178.2,y:568,startPosition:166},7).to({skewX:-11.6,skewY:-11.8,x:175.5,y:567.3,startPosition:172},6).wait(33));

	// 图层 36
	this.instance_8 = new lib.li_1_85_19166("synched",0);
	this.instance_8.setTransform(328.6,558.9,1,1.006,0,8.6,8.8,15.7,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:14},14).to({scaleX:1.02,scaleY:0.99,skewX:-51,skewY:-49.3,x:354.1,y:564.1,startPosition:19},5).to({_off:true},1).wait(28).to({_off:false,regX:15.6,regY:11.7,scaleX:1.01,scaleY:1,rotation:-76,skewX:0,skewY:0,x:350.8,y:531.4,startPosition:48},0).to({regX:15.7,scaleX:1.02,scaleY:0.99,rotation:0,skewX:-44.6,skewY:-44.9,x:349.1,y:546.6,startPosition:50},2).to({regY:11.8,scaleX:1.05,scaleY:0.99,skewX:2.5,skewY:1.4,x:341.6,y:567.3,startPosition:53},3).to({scaleX:1,scaleY:1.01,skewX:14.7,skewY:14.9,x:325.7,y:560,startPosition:60},7).to({scaleX:1,skewX:8.5,skewY:8.8,x:328.8,y:558.9,startPosition:67},7).to({startPosition:69},2).to({scaleX:1,scaleY:1.02,skewX:0.3,skewY:0.7,x:333.1,y:552.9,startPosition:74},5).to({_off:true},1).wait(119).to({_off:false,scaleX:1,scaleY:1.01,skewX:-57.7,skewY:-57.4,x:335.2,y:549.3,startPosition:150},0).to({scaleX:1,scaleY:1.02,skewX:0.3,skewY:0.7,x:332.9,y:552.9,startPosition:153},3).to({regX:15.6,scaleX:1.05,scaleY:0.99,skewX:23.6,skewY:22.6,x:328.6,y:573.8,startPosition:159},6).to({regX:15.7,scaleX:1,scaleY:1.01,skewX:13,skewY:13.2,x:326.6,y:559.6,startPosition:166},7).to({skewX:8.6,skewY:8.8,x:328.6,y:558.9,startPosition:172},6).wait(33));

	// 图层 40
	this.instance_9 = new lib.li_1_111_20480("synched",0);
	this.instance_9.setTransform(247.5,484.9,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},14).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:254.6,y:503.4},5).to({scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:262,y:477.1},6).to({scaleY:1.01,rotation:2.7,x:258,y:484.9},4).to({rotation:1.5,x:250.2},6).to({rotation:2.7,x:258},6).to({rotation:1.5,x:250.2},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:247.5,y:499.6},6).to({scaleX:1,scaleY:1.01,y:484.9},7).to({startPosition:0},7).to({startPosition:0},2).to({scaleY:1.02,y:479.7},5).to({scaleX:1.05,scaleY:1.01,x:247.7,y:488.9},7).to({scaleX:0.99,scaleY:1.03,rotation:1.7,x:258.5,y:477.3},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:247.5,y:499.6},7).to({scaleX:1,scaleY:1.01,y:484.9},7).to({startPosition:0},5).to({startPosition:0},86).to({scaleY:1.02,y:479.7},5).to({scaleX:1.05,scaleY:0.98,y:499.6},6).to({scaleX:1,scaleY:1.01,y:484.9},7).to({startPosition:0},6).wait(33));

	// 图层 38
	this.instance_10 = new lib.li_1_109_6956("synched",0);
	this.instance_10.setTransform(317.2,490.8,1,1.006,0,8.6,8.8,-8.3,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},14).to({regY:-33.2,scaleX:1.04,scaleY:0.97,skewX:-5.1,skewY:-5.2,x:327.2,y:505.5},5).to({regY:-33.3,scaleX:1,scaleY:1.02,skewX:-31.6,skewY:-32.3,x:318.3,y:474.6},6).to({regY:-33.4,scaleX:1,scaleY:1.01,skewX:-37.8,skewY:-37.5,x:312.5,y:480.3},4).to({skewX:-29.5,skewY:-29.3,x:304.7,y:479.1},6).to({skewX:-37.8,skewY:-37.5,x:312.5,y:480.3},6).to({skewX:-29.5,skewY:-29.3,x:304.7,y:479.1},6).to({regY:-33.3,scaleX:1.05,scaleY:0.99,skewX:2.2,skewY:1.2,x:321.4,y:502.8},6).to({regY:-33.2,scaleX:1,scaleY:1.01,skewX:10.7,skewY:11,x:316.9,y:491.6},7).to({regY:-33.3,scaleX:1,skewX:8.5,skewY:8.8,x:317.1,y:490.8},7).to({startPosition:0},2).to({regY:-33.2,scaleX:1,scaleY:1.02,skewX:5.3,skewY:5.7,x:317.5,y:484.7},5).to({regX:-8.1,regY:-33,scaleX:1.04,scaleY:0.98,skewX:-21.1,skewY:-25.1,x:318.3,y:482},7).to({regX:-8.2,regY:-33.2,scaleX:0.99,scaleY:1.03,skewX:-0.9,skewY:-0.6,x:329.5,y:479.4},6).to({regX:-8.3,regY:-33.3,scaleX:1,scaleY:1.01,skewX:5,skewY:5.3,x:317.7,y:502.7},7).to({skewX:0.8,skewY:1,x:317.8,y:488.1},7).to({regY:-33.2,skewX:-1.4,skewY:-1.2,x:318.1,y:487.5},5).to({skewY:-1.2},86).to({scaleY:1.02,skewX:5.3,skewY:5.7,x:317.5,y:484.7},5).to({regY:-33.3,scaleX:1.05,scaleY:0.99,skewX:12.9,skewY:11.9,x:320.4,y:506.6},6).to({scaleX:1,scaleY:1.01,skewX:10,skewY:10.3,x:316.9,y:491.2},7).to({skewX:8.6,skewY:8.8,x:317.2,y:490.8},6).wait(33));

	// 图层 39
	this.instance_11 = new lib.li_1_110_44341("synched",0);
	this.instance_11.setTransform(190.6,479.5,1,1.006,0,-11.6,-11.8,23.8,-43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({startPosition:14},14).to({scaleX:1.04,scaleY:0.97,skewX:-1.6,skewY:-0.6,x:195.4,y:495.4,startPosition:19},5).to({regY:-43,scaleX:1,scaleY:1.02,skewX:-7.2,skewY:-7.7,x:206.6,y:466.9,startPosition:25},6).to({scaleY:1.01,skewX:-8.6,skewY:-8.8,x:201.5,y:476.8,startPosition:29},4).to({regY:-42.9,skewX:-5.1,skewY:-5.3,x:194.1,y:477.8,startPosition:35},6).to({regY:-43,skewX:-8.6,skewY:-8.8,x:201.5,y:476.8,startPosition:41},6).to({regY:-42.9,skewX:-5.1,skewY:-5.3,x:194.1,y:477.8,startPosition:47},6).to({regY:-43.1,scaleX:1.05,scaleY:0.99,skewX:-14.6,skewY:-12.7,x:187.5,y:493.7,startPosition:53},6).to({regX:23.9,scaleX:1,scaleY:1.01,skewX:-13.8,skewY:-14.1,x:190.5,y:479.8,startPosition:60},7).to({regX:23.8,scaleX:1,scaleY:1,skewX:-11.5,skewY:-11.8,x:190.6,y:479.5,startPosition:67},7).to({startPosition:69},2).to({regX:23.7,scaleX:1,scaleY:1.02,skewX:-7.5,skewY:-8,x:190.5,y:474.3,startPosition:74},5).to({scaleX:1.01,scaleY:1.01,skewX:21.3,skewY:23.9,x:197.5,y:474.9,startPosition:81},7).to({regX:23.6,regY:-43,scaleX:1,scaleY:1.02,skewX:2.1,skewY:2.5,x:200,y:468.4,startPosition:87},6).to({regX:23.8,regY:-43.1,scaleX:1,scaleY:1.01,skewX:-10.5,skewY:-10.7,x:190.4,y:492.6,startPosition:94},7).to({skewX:-7.1,skewY:-7.3,y:479.3,startPosition:101},7).to({skewX:-5.3,skewY:-5.6,y:479,startPosition:106},5).to({startPosition:192},86).to({regX:23.7,scaleY:1.02,skewX:-14.7,skewY:-15.2,x:190.6,y:474.2,startPosition:197},5).to({regX:23.8,scaleX:1.05,scaleY:0.99,skewX:-19.1,skewY:-17.2,x:187.1,y:494.3,startPosition:203},6).to({regY:-43,scaleX:1,scaleY:1.01,skewX:-13.3,skewY:-13.5,x:190.6,y:479.9,startPosition:210},7).to({regY:-43.1,skewX:-11.6,skewY:-11.8,y:479.5,startPosition:216},6).wait(33));

	// 图层 41
	this.instance_12 = new lib.li_1_112_50172("synched",0);
	this.instance_12.setTransform(248.1,504.2,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({startPosition:0},14).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:254.8,y:521.9},5).to({scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:261.1,y:496.7},6).to({scaleY:1.01,rotation:2.7,x:257.7,y:504.1},4).to({rotation:1.5,x:250.3,y:504.2},6).to({rotation:2.7,x:257.7,y:504.1},6).to({rotation:1.5,x:250.3,y:504.2},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:248.1,y:518.4},6).to({scaleX:1,scaleY:1.01,y:504.2},7).to({startPosition:0},7).to({startPosition:0},2).to({scaleY:1.02,y:499.2},5).to({scaleX:1.05,scaleY:1.01,x:248.5,y:508.2},7).to({scaleX:0.99,scaleY:1.03,rotation:1.7,x:258.5,y:497},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:248.1,y:518.4},7).to({scaleX:1,scaleY:1.01,y:504.2},7).to({startPosition:0},5).to({startPosition:0},86).to({scaleY:1.02,y:499.2},5).to({scaleX:1.05,scaleY:0.98,y:518.4},6).to({scaleX:1,scaleY:1.01,y:504.2},7).to({startPosition:0},6).wait(33));

	// 图层 42
	this.instance_13 = new lib.li_1_113_33764("synched",0);
	this.instance_13.setTransform(251.1,723.1,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({startPosition:0},14).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:253.5,y:727.9},5).to({scaleX:1,scaleY:1.04,rotation:1.2,skewX:0,skewY:0,x:253.8,y:720},6).to({scaleY:1.01,y:723.1},4).to({rotation:0,x:251.1},6).to({rotation:1.2,x:253.8},6).to({rotation:0,x:251.1},6).to({scaleX:1.05,scaleY:0.98,x:251.3,y:726},6).to({scaleX:1,scaleY:1.01,x:251.1,y:723.1},7).to({startPosition:0},7).to({startPosition:0},2).to({scaleX:0.98,scaleY:1.02,x:251,y:721.2},5).to({scaleX:1.1,scaleY:1,x:251.7,y:722.2},7).to({scaleX:0.98,scaleY:1.03,rotation:1.7,x:254.8,y:720.5},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:251.3,y:726},7).to({scaleX:1,scaleY:1.01,x:251.1,y:723.1},7).to({startPosition:0},5).to({startPosition:0},86).to({scaleX:0.98,scaleY:1.02,x:251,y:721.2},5).to({scaleX:1.05,scaleY:0.98,x:251.3,y:726},6).to({scaleX:1,scaleY:1.01,x:251.1,y:723.1},7).to({startPosition:0},6).wait(33));

	// 图层 44
	this.instance_14 = new lib.li_1_116_2334("synched",0);
	this.instance_14.setTransform(174.4,681.7,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:169.2,y:674.8},14).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:169.7,y:685.9},5).to({scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:172.4,y:667.6},6).to({scaleY:1.01,rotation:2.7,x:173.9,y:676.7},4).to({rotation:1.5,x:171.5,y:680.6},6).to({rotation:2.7,x:173.4,y:676.1},6).to({rotation:1.5,x:167.5,y:675.4},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:165.2,y:686.7},6).to({scaleX:1,scaleY:1.01,x:172.1,y:678.1},7).to({x:173.8,y:681.2},7).to({x:174.6,y:681.6},2).to({scaleX:0.98,scaleY:1.02,x:175,y:676.9},5).to({scaleX:1.13,scaleY:1,x:161.2,y:679.2},7).to({scaleX:0.98,scaleY:1.03,rotation:1.7,x:176,y:669.9},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:167,y:689},7).to({scaleX:1,scaleY:1.01,x:173.7,y:681.2},7).to({x:174.4,y:681.4},5).to({x:168.1,y:676.2},15).to({x:174.5,y:681.4},19).to({x:167.9,y:674.6},16).to({x:174.5,y:681.3},18).to({x:168.9,y:677},18).to({scaleX:0.98,scaleY:1.02,x:171.7,y:673.9},5).to({scaleX:1.05,scaleY:0.98,x:167.9,y:689.5},6).to({scaleX:1,scaleY:1.01,x:173.9,y:682},7).to({x:172.3,y:678.7},6).to({x:168.6,y:676.4},10).to({x:175.2,y:681.9},19).to({x:174.1,y:679.7},3).wait(1));

	// 图层 45
	this.instance_15 = new lib.li_1_117_5241("synched",0);
	this.instance_15.setTransform(323.9,671.4,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:330.6,y:662.8},14).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:338.5,y:679.8},5).to({scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:328.6,y:667.7},6).to({scaleY:1.01,rotation:2.7,x:327.5,y:671.2},4).to({rotation:1.5,x:321.6,y:669.7},6).to({rotation:2.7,x:328.5,y:670.3},6).to({rotation:1.5,x:328.4,y:666.8},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:336.9,y:677.8},6).to({scaleX:1,scaleY:1.01,x:329,y:669.9},7).to({x:324.4},7).to({x:323.2},2).to({scaleX:0.98,scaleY:1.02,x:324.1,y:666.9},5).to({scaleX:1.13,scaleY:1,x:340.4,y:666.8},7).to({scaleX:0.98,scaleY:1.03,rotation:1.7,x:336.8,y:663.6},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:332.3,y:676.3},7).to({scaleX:1,scaleY:1.01,x:325.4,y:669.8},7).to({x:323.3,y:668.2},5).to({x:332,y:662.3},15).to({x:323.3,y:669.7},19).to({x:332.1,y:663.5},16).to({x:323.3,y:668.1},18).to({x:332.1,y:663.8},18).to({scaleX:0.98,scaleY:1.02,x:328.5,y:664.7},5).to({scaleX:1.05,scaleY:0.98,x:330.3,y:678.9},6).to({scaleX:1,scaleY:1.01,x:322.7,y:670.2},7).to({x:325.3,y:665.5},6).to({x:332.4,y:660.8},10).to({x:322.5,y:668.5},19).to({x:324.7,y:666.3},3).wait(1));

	// 元件 4
	this.instance_16 = new lib.li_1_139_29141("synched",0);
	this.instance_16.setTransform(309.4,618.3,0.913,1.007,0,0,0,10,85.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({startPosition:14},14).to({regY:85,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:1.1,x:308.8,y:630.8,startPosition:19},5).to({regY:85.1,scaleX:0.91,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:304.5,y:594,startPosition:25},6).to({scaleY:1.01,rotation:2.7,x:304.2,y:600.2,startPosition:29},4).to({rotation:1.5,x:300.5,y:599.7,startPosition:35},6).to({rotation:2.7,x:306.4,y:600.1,startPosition:41},6).to({rotation:1.5,x:300.1,y:604,startPosition:47},6).to({scaleX:0.96,scaleY:0.98,rotation:0,x:308.7,y:629.9,startPosition:53},6).to({scaleX:0.91,scaleY:1.01,x:309.4,y:618.3,startPosition:60},7).to({startPosition:67},7).to({startPosition:69},2).to({startPosition:74},5).to({scaleX:0.94,scaleY:1,x:301.3,y:611.6,startPosition:75},1).to({scaleX:0.96,scaleY:1,x:305.5,y:603.9,startPosition:77},2).to({scaleX:0.98,scaleY:1,x:311.8,y:598.7,startPosition:79},2).to({regX:10.1,scaleX:0.99,scaleY:1,x:313.6,y:596.1,startPosition:80},1).to({regX:10,regY:85,scaleX:1,scaleY:1,x:311.5,y:593.3,startPosition:81},1).to({regY:85.1,scaleX:0.97,scaleY:1.01,rotation:0.5,x:311.6,y:600,startPosition:84},3).to({scaleX:0.95,scaleY:1.01,rotation:0.8,x:303.8,y:604.1,startPosition:85},1).to({regY:85.2,scaleX:0.91,scaleY:1.03,rotation:1.7,x:307.4,y:612.4,startPosition:87},2).to({regY:85.1,scaleX:0.96,scaleY:0.98,rotation:0,x:312.6,y:629.9,startPosition:94},7).to({scaleX:0.91,scaleY:1.01,x:297.2,y:619.2,startPosition:101},7).to({x:299.4,y:616,startPosition:106},5).to({startPosition:192},86).to({x:309.4,y:618.3,startPosition:197},5).to({scaleX:0.96,scaleY:0.98,x:312.6,y:629.9,startPosition:203},6).to({scaleX:0.91,scaleY:1.01,x:309.4,y:618.3,startPosition:210},7).to({startPosition:216},6).wait(33));

	// 图层 47
	this.instance_17 = new lib.li_1_118_52566("synched",0);
	this.instance_17.setTransform(271.1,582.6,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({startPosition:14},14).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:277.3,y:597.9,startPosition:19},5).to({scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:278.3,y:577.7,startPosition:25},6).to({scaleY:1.01,rotation:2.7,x:277,y:583.5,startPosition:29},4).to({rotation:1.5,x:271.4,y:583,startPosition:35},6).to({rotation:2.7,x:277,y:583.5,startPosition:41},6).to({rotation:1.5,x:271.4,y:583,startPosition:47},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:272.4,y:595,startPosition:2},6).to({scaleX:1,scaleY:1.01,x:271.1,y:582.6,startPosition:9},7).to({startPosition:16},7).to({startPosition:18},2).to({scaleY:1.02,y:578.7,startPosition:23},5).to({scaleX:1.01,scaleY:1.01,x:271.5,y:587.1,startPosition:30},7).to({scaleX:0.99,scaleY:1.03,rotation:1.7,x:279,y:577.7,startPosition:36},6).to({scaleX:1.05,scaleY:0.98,rotation:0,x:272.4,y:595,startPosition:43},7).to({scaleX:1,scaleY:1.01,x:271.1,y:582.6,startPosition:50},7).to({startPosition:4},5).to({startPosition:39},86).to({scaleY:1.02,y:578.7,startPosition:44},5).to({scaleX:1.05,scaleY:0.98,x:272.4,y:595,startPosition:50},6).to({scaleX:1,scaleY:1.01,x:271.1,y:582.6,startPosition:6},7).to({startPosition:12},6).wait(33));

	// gergerherhre
	this.instance_18 = new lib.li_1_134_15167("synched",0);
	this.instance_18.setTransform(190.1,621,0.913,1.007,0,0,180,12.5,85.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({startPosition:14},14).to({regY:85.5,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:181.1,x:203.4,y:633.2,startPosition:19},5).to({scaleX:0.91,scaleY:1.02,skewX:4.2,skewY:184.2,x:194.6,y:610.7,startPosition:25},6).to({regX:12.6,regY:85.6,scaleY:1.01,skewX:2.7,skewY:182.7,x:194.2,y:618.1,startPosition:29},4).to({skewX:1.5,skewY:181.5,x:194,y:623,startPosition:35},6).to({skewX:2.7,skewY:182.7,x:194.2,y:618.1,startPosition:41},6).to({skewX:1.5,skewY:181.5,x:189.2,y:619.4,startPosition:47},6).to({regX:12.5,scaleX:0.96,scaleY:0.98,skewX:0,skewY:180,x:187.1,y:632.6,startPosition:53},6).to({scaleX:0.91,scaleY:1.01,x:190.1,y:621,startPosition:60},7).to({startPosition:67},7).to({startPosition:69},2).to({regY:85.7,scaleY:1.02,y:617.8,startPosition:74},5).to({regY:85.6,scaleX:0.93,scaleY:1.02,x:196.3,y:619.4,startPosition:75},1).to({scaleX:0.93,scaleY:1.02,x:193.1,y:614.3,startPosition:76},1).to({regY:85.7,scaleX:0.94,scaleY:1.02,x:188.5,y:609.3,startPosition:77},1).to({regX:12.4,regY:85.6,scaleX:0.96,scaleY:1.01,x:187.3,y:603.1,startPosition:81},4).to({regY:85.5,scaleX:0.95,scaleY:1.02,skewX:0.3,skewY:180.3,x:190.4,y:605.1,startPosition:83},2).to({regY:85.6,scaleX:0.94,scaleY:1.02,skewX:0.5,skewY:180.5,x:200.1,y:607.1,startPosition:84},1).to({regY:85.5,scaleX:0.93,scaleY:1.02,skewX:0.8,skewY:180.8,x:202.3,y:619.3,startPosition:85},1).to({regX:12.5,regY:85.7,scaleX:0.91,scaleY:1.03,skewX:1.7,skewY:181.7,x:203.9,y:614.6,startPosition:87},2).to({regY:85.6,scaleX:0.96,scaleY:0.98,skewX:0,skewY:180,x:187.1,y:632.6,startPosition:94},7).to({scaleX:0.91,scaleY:1.01,x:201.6,y:631.6,startPosition:101},7).to({x:196.9,y:622.9,startPosition:106},5).to({startPosition:192},86).to({regY:85.7,scaleY:1.02,x:190.1,y:617.8,startPosition:197},5).to({regY:85.6,scaleX:0.96,scaleY:0.98,x:188.5,y:642.4,startPosition:203},6).to({scaleX:0.91,scaleY:1.01,x:190.1,y:621,startPosition:210},7).to({startPosition:216},6).wait(33));

	// 图层 43
	this.instance_19 = new lib.地面拷贝();
	this.instance_19.setTransform(56.1,833.6,1.087,1.106);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(249));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.4,-5.8,422.3,869.3);


(lib.元件2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ball
	this.ball = new lib.元件6_1();
	this.ball.setTransform(352.4,231.5,1,1,0,0,0,22,17.5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// victory
	this.victory = new lib.元件1_1();
	this.victory.setTransform(939.7,468.8,1.214,1.214,0,0,0,124,153.2);

	this.timeline.addTween(cjs.Tween.get(this.victory).wait(1));

	// h_1
	this.h_1 = new lib.li_1_69_77011();
	this.h_1.setTransform(939.1,466.1,0.67,0.67,0,0,0,248.2,433.9);

	this.timeline.addTween(cjs.Tween.get(this.h_1).wait(1));

	// mc_1
	this.mc_1 = new lib.元件3();
	this.mc_1.setTransform(939,59.5,1,1,0,0,0,515,59.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

	// mc_2
	this.mc_2 = new lib.元件10();
	this.mc_2.setTransform(1462.1,109.7,1,1,0,0,0,29,35.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_2).wait(1));

	// mc_3
	this.mc_3 = new lib.元件15();
	this.mc_3.setTransform(1716.7,137.5,1,1,0,0,0,151.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_3).wait(1));

	// puzi
	this.puzi = new lib.元件16();
	this.puzi.setTransform(944.5,448.6,1,1,0,0,0,944.5,395.5);

	this.timeline.addTween(cjs.Tween.get(this.puzi).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,5,1882,1119.1);


// stage content:
(lib._20_p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ral
	this.ral = new lib.元件4();
	this.ral.setTransform(1734.5,1012,1,1,0,0,0,118.5,51);

	this.timeline.addTween(cjs.Tween.get(this.ral).wait(1));

	// mc_0
	this.mc_0 = new lib.元件2_1();
	this.mc_0.setTransform(965.5,477.5,1,1,0,0,0,944.5,403.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_0).wait(1));

	// bg
	this.bg = new lib.元件1();
	this.bg.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1198);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;