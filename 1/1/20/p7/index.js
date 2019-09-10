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



(lib.演奏繁花 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.演奏千声佛 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.谱子 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.谱子_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11复制3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap156 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap157 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap158 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap36 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap36_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap36复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37复制2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46复制 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46复制3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap53 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap54 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap55 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap56 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap57 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap58 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap59 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap60 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap61 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap62 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap63 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap64 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap65 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap66 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap67 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap68 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap71 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap72 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap73 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap75 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap77 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap78 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap79 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap80 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.li_1_133_98251 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.li_1_151_25392 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.li_1_170_97905 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.li_1_171_13204 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.li_1_175_58659 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.转曲 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.古筝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.图层352拷贝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.图层388 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.图层402拷贝2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.图层413 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.图层414 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.图层65拷贝 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.练习基本功 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.组12拷贝2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.li_1_140_42646复制 = function(mode,startPosition,loop) {
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


(lib.li_1_137_36011复制 = function(mode,startPosition,loop) {
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


(lib.li_1_132_50302复制5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_151_25392();
	this.instance.setTransform(-187.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-13.5,375,27);


(lib.li_1_132_50302复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_151_25392();
	this.instance.setTransform(-187.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-13.5,375,27);


(lib.li_1_132_50302复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_151_25392();
	this.instance.setTransform(-187.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-13.5,375,27);


(lib.li_1_130_80634复制4 = function(mode,startPosition,loop) {
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


(lib.li_1_130_80634复制 = function(mode,startPosition,loop) {
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


(lib.li_1_128_84733复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap25复制2();
	this.instance.setTransform(-87.2,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-120.5,174,241);


(lib.li_1_128_84733复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap25_1();
	this.instance.setTransform(-57.9,-119.9,1,1,0,7.2,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.2,-119.9,203.1,260.1);


(lib.li_1_126_55217复制4 = function(mode,startPosition,loop) {
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


(lib.li_1_126_55217复制 = function(mode,startPosition,loop) {
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


(lib.li_1_126_23199复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap78();
	this.instance.setTransform(-159.9,-172.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-172.8,320,346);


(lib.li_1_125_93408复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap46复制();
	this.instance.setTransform(-139,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-52,282,108);


(lib.li_1_124_81140复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-17.4,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-17.9,35,36);


(lib.li_1_124_6513复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap24复制2();
	this.instance.setTransform(-32,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-17.9,37,58);


(lib.li_1_124_6513复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap24_1();
	this.instance.setTransform(-32,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-17.9,37,58);


(lib.li_1_123_74773复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap23复制2();
	this.instance.setTransform(-8,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-24.5,37,58);


(lib.li_1_123_74773复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap23_1();
	this.instance.setTransform(-8,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-24.5,37,58);


(lib.li_1_123_26006复制 = function(mode,startPosition,loop) {
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


(lib.li_1_122_55910复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap19复制2();
	this.instance.setTransform(-76.6,-133.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.6,-133.1,153,266);


(lib.li_1_122_55910复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap19_1();
	this.instance.setTransform(-76.6,-133.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.6,-133.1,153,266);


(lib.li_1_122_6950复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-10.1,-9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-9.6,20,19);


(lib.li_1_121_60219复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap40复制();
	this.instance.setTransform(-67.9,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-34.5,136,69);


(lib.li_1_121_60219复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap40_1();
	this.instance.setTransform(-67.9,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-34.5,136,69);


(lib.li_1_120_90830复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap29复制2();
	this.instance.setTransform(-33,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-44.9,67,91);


(lib.li_1_120_90830复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap29_1();
	this.instance.setTransform(-33,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-44.9,67,91);


(lib.li_1_119_36977复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap26复制2();
	this.instance.setTransform(-32.9,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-44.8,66,90);


(lib.li_1_119_36977复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap26_1();
	this.instance.setTransform(-32.9,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-44.8,66,90);


(lib.li_1_118_87296复制5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap28复制2();
	this.instance.setTransform(-51.5,-39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-39.2,103,78);


(lib.li_1_118_87296复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap28_1();
	this.instance.setTransform(-51.5,-37.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-37.7,103,78);


(lib.li_1_118_87296复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap28_1();
	this.instance.setTransform(-51.5,-37.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-37.7,103,78);


(lib.li_1_117_2989复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap39_1();
	this.instance.setTransform(-39,-44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-44.4,78,89);


(lib.li_1_115_28320复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap38_1();
	this.instance.setTransform(-22.8,-31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-31.6,46,63);


(lib.li_1_113_78516复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 11
	this.instance = new lib.Bitmap14复制2();
	this.instance.setTransform(-1,-1);

	this.instance_1 = new lib.Bitmap156();
	this.instance_1.setTransform(-1,-1);

	this.instance_2 = new lib.Bitmap15复制();
	this.instance_2.setTransform(-1,1.7);

	this.instance_3 = new lib.Bitmap16复制();
	this.instance_3.setTransform(-1,0.5);

	this.instance_4 = new lib.Bitmap17复制();
	this.instance_4.setTransform(-1,-1);

	this.instance_5 = new lib.Bitmap18复制();
	this.instance_5.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance}]},106).to({state:[{t:this.instance_2}]},71).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},33).to({state:[{t:this.instance_5}]},2).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,91,124);


(lib.li_1_113_33764复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap62();
	this.instance.setTransform(-76.6,-131.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.6,-131.8,153,266);


(lib.li_1_112_62330复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap45_1();
	this.instance.setTransform(-22.8,-31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-31.6,46,63);


(lib.li_1_112_50172复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap80();
	this.instance.setTransform(-67.9,-33.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-33.6,136,69);


(lib.li_1_111_72990复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap44_1();
	this.instance.setTransform(-39,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-45,78,90);


(lib.li_1_110_93823复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 9
	this.instance = new lib.Bitmap13复制2();
	this.instance.setTransform(-1,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.6,91,125);


(lib.li_1_110_44341复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap75();
	this.instance.setTransform(-33,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},140).wait(508));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-44.9,67,91);


(lib.li_1_109_6956复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap54();
	this.instance.setTransform(-32.9,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-44.8,66,90);


(lib.li_1_108_14388复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-39,-44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-44.4,78,89);


(lib.li_1_107_42274复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(-22.8,-31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-31.6,46,63);


(lib.li_1_106_54535复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap27复制2();
	this.instance.setTransform(-56,-49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-49.7,112,100);


(lib.li_1_106_54535复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap27_1();
	this.instance.setTransform(-56,-49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-49.7,112,100);


(lib.li_1_106_35216复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap66();
	this.instance.setTransform(-39,-44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-44.4,78,89);


(lib.li_1_105_87424复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap21复制();
	this.instance.setTransform(-11.4,-94.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-94.6,23,189);


(lib.li_1_105_87424复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap21_1();
	this.instance.setTransform(-11.4,-94.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-94.6,23,189);


(lib.li_1_105_41959复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap65();
	this.instance.setTransform(-22.8,-31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-31.6,46,63);


(lib.li_1_104_94571复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap55();
	this.instance.setTransform(-56,-48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-48.8,112,100);


(lib.li_1_104_15209复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap20复制();
	this.instance.setTransform(-42.8,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,-72.5,86,145);


(lib.li_1_104_15209复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap20_1();
	this.instance.setTransform(-42.8,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,-72.5,86,145);


(lib.li_1_103_88043复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap22复制2();
	this.instance.setTransform(-40.3,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-72,81,144);


(lib.li_1_103_88043复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap22_1();
	this.instance.setTransform(-40.3,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-72,81,144);


(lib.li_1_103_7055复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap61();
	this.instance.setTransform(-11.4,-94.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-94.6,23,189);


(lib.li_1_102_88671复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap42复制();
	this.instance.setTransform(-16.1,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-19.9,37,40);


(lib.li_1_102_88671复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap42_1();
	this.instance.setTransform(-16.1,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-19.9,37,40);


(lib.li_1_102_8710复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap60();
	this.instance.setTransform(-42.8,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,-72.5,86,145);


(lib.li_1_101_64517复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap59();
	this.instance.setTransform(-40.3,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-72,81,144);


(lib.li_1_101_7751复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap41复制();
	this.instance.setTransform(-18.4,-19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-19.8,34,40);


(lib.li_1_101_7751复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap41_1();
	this.instance.setTransform(-18.4,-19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-19.8,34,40);


(lib.li_1_100_42066复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap43复制();
	this.instance.setTransform(-11.6,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-13.4,23,27);


(lib.li_1_100_42066复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap43_1();
	this.instance.setTransform(-11.6,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-13.4,23,27);


(lib.li_1_96_21902复制5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap37复制2();
	this.instance.setTransform(-65.2,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-113.2,131,223);


(lib.li_1_96_21902复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap37_1();
	this.instance.setTransform(-65.2,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-113.2,131,223);


(lib.li_1_96_21902复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap37_1();
	this.instance.setTransform(-65.2,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-113.2,131,223);


(lib.li_1_94_61884复制5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap36复制2();
	this.instance.setTransform(-65.2,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-113.2,131,223);


(lib.li_1_94_61884复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap36_1();
	this.instance.setTransform(-65.2,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-113.2,131,223);


(lib.li_1_94_61884复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap36_1();
	this.instance.setTransform(-65.2,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-113.2,131,223);


(lib.li_1_93_50017复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap11复制2();
	this.instance.setTransform(-159.9,-172.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-172.8,320,346);


(lib.li_1_93_50017复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap12_1();
	this.instance.setTransform(-159.9,-172.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-172.8,320,346);


(lib.li_1_92_48677复制5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap157();
	this.instance.setTransform(-16.6,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-46.1,34,91);


(lib.li_1_92_48677复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap79();
	this.instance.setTransform(-16.6,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-46.1,34,91);


(lib.li_1_92_48677复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap79();
	this.instance.setTransform(-16.6,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-46.1,34,91);


(lib.li_1_91_54753复制5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap158();
	this.instance.setTransform(-17.4,-52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-52.9,34,105);


(lib.li_1_91_54753复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap53();
	this.instance.setTransform(-17.4,-52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-52.9,34,105);


(lib.li_1_91_54753复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap53();
	this.instance.setTransform(-17.4,-52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-52.9,34,105);


(lib.li_1_89_32610复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap46复制3();
	this.instance.setTransform(-139,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-52,282,108);


(lib.li_1_89_32610复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap46_1();
	this.instance.setTransform(-139,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-52,282,108);


(lib.li_1_88_67447复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A64630").ss(0.5,1,1).p("AiXgTQCaBNCVhJ");
	this.shape.setTransform(0,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A64630").ss(0.1,1,1).p("ABTAWQAdgSAcgcQgrAJgxgUQgwgTgoASQgqARg5gFQAhAeAgASQBJgYBUAWgAhKAYQBPAtBOgv");
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
	this.shape_6.graphics.f().s("#A64630").ss(0.1,1,1).p("ABTAWQAdgSAcgcQgrAJgxgUQgwgTgoASQgqARg5gFQAhAeAgASQBPAtBOgvgAhKAYQBJgYBUAW");
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


(lib.li_1_88_67447复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A64630").ss(0.5,1,1).p("AiXgTQCaBNCVhJ");
	this.shape.setTransform(0,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-5.3,32.5,6.1);


(lib.li_1_86_25950复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap35复制2();
	this.instance.setTransform(-10.1,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-9.2,20,19);


(lib.li_1_86_25950复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap35_1();
	this.instance.setTransform(-10.1,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-9.2,20,19);


(lib.li_1_85_81076复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap34复制2();
	this.instance.setTransform(-17.4,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-17.9,35,36);


(lib.li_1_85_81076复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap34_1();
	this.instance.setTransform(-17.4,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-17.9,35,36);


(lib.li_1_82_82770复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap11复制3();
	this.instance.setTransform(-66.7,-72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-72.3,129,152);


(lib.li_1_82_82770复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap1复制();
	this.instance.setTransform(-66.7,-72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-72.3,129,152);


(lib.li_1_79_44290复制 = function(mode,startPosition,loop) {
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


(lib.li_1_77_74510复制4 = function(mode,startPosition,loop) {
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


(lib.li_1_77_74510复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.Bitmap30_1();

	this.instance_1 = new lib.Bitmap31_1();
	this.instance_1.setTransform(0,1.9);

	this.instance_2 = new lib.Bitmap32_1();
	this.instance_2.setTransform(0.7,4.8);

	this.instance_3 = new lib.Bitmap33_1();
	this.instance_3.setTransform(-3.5,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.3,130);


(lib.li_1_73_72680复制5 = function(mode,startPosition,loop) {
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


(lib.li_1_73_72680复制2 = function(mode,startPosition,loop) {
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
	this.shape_57.graphics.f("#FFA2B0").s().p("ABhT6IgagPIgFgCIgDgCIgPgIIgHgEIgJgFIgJgGIgJgFQgxgeg3gpIgOgKIgFgEIgLgIIgGgFIgKgIIg9gyIgUgRIgHgFQl3k6iYlJIgFgKIgCgGQhHidgSiaIgBgIIgBgFIgBgLIAAgBIAAgEQgXj9BijhIABgCIACgEIAWgvIACgEIADgFIAEgIIACgEIACgEQCgkpFwjpIAIgFIAEgDIAGgEIAJgGQFxjjGYguIAMgBIAZgCQBTgIBVAAIANAAIAbABIANAAIABABIABAHIAAEoIgIACIgcAEIgCAAIgIABIgCAAIgdAFIgEAAQhYADhSAMIgRACIgZAFQjQAki0BnIgNAHIgKAGQixBsiQCzIgIAKIgCADQgfAngcApIgHAKIgDAFIgCACIgFAJIgFAHIgGAJIgBABIgCAEIgFAIIgCADQhUCIgoCOIgBADIgDALQg9DdA2DpIAGAVIACAJQA1DMCKDPIATAcIADADQBIBoBjBuIANAOIANAQIADADIAMAMIACACQAdAfAdAcIAUASIARAPIADACIAUARIBQA8QAUAMALARIABABQgIARgHAWQgEAQgGAJIgDAEIiAhBg");
	this.shape_57.setTransform(85.3,135.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFA2B0").s().p("ABdT2IgagOIgFgDIgDgCIgPgJIgIgEIgIgFIgKgGIgIgFQgygeg2goIgPgLIgGgEIgKgIIgGgFIgKgHIg+gxIgUgQIgHgGQl4kyiWlPIgFgKIgCgGQhFiegRiaIAAgIIgBgEIgBgLIAAgBIAAgDQgVj8BjjgIABgCIACgFIAWguIACgEIACgEIAFgIIACgFIACgDQChkrFujnIAHgFIAEgDIAHgEIAJgGQFwjiGXguIAMgBIAZgDQBTgIBVAAIANAAIAbABIANAAIABABIADAGIAAEoIgFAFIgaAHIgCAAIgIADIgCAAIgdAKIgEAAQhWAChTAMIgRACIgaAEQjOAki1BkIgNAHIgKAGQizBqiQCyIgIAJIgCADQgfAngcApIgHAKIgDAFIgBABIgGAKIgFAHIgGAJIgBACIgCADIgFAIIgCAEQhUCHgpCOIgBADIgDALQg+DeA2DnIAGAVIACAKQA2DNCKDMIASAcIADAEQBJBmBkBtIANAPIANAQIADADIALALIADADQAdAeAeAcIATARIARAPIADADIATAQIBRA8QAWAMAEASIAAABQgHASgHAWQgEAUgJABIgDACIiBhCg");
	this.shape_58.setTransform(85.2,135.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFA2B0").s().p("ADeU0IgFAAIiAhEIgZgNIgGgEIgDgCIgQgJIgIgEIgIgFIgKgGIgIgFQgzgeg2goIgPgLIgGgEIgKgHIgGgFIgKgHIg/gwIgTgQIgHgFQl5kriUlVIgFgKIgCgGQhDiegQiaIAAgIIgBgEIgBgLIAAgBIAAgCQgTj6BljhIABgCIACgEIAWgvIACgDIACgEIAEgIIADgFIABgDQCkksFqjlIAHgFIAEgDIAHgEIAKgGQFvjhGWgvIAMgBIAYgCQBTgIBVgBIANAAIAbABIANAAIACABIAFAFIAAEnIgDAIIgYALIgCABIgIAEIgCAAIgbAPIgEAAQhXAChTAKIgRADIgaAEQjOAii2BiIgMAHIgLAGQi0BniQCxIgHAKIgCADQgfAmgdApIgGAKIgDAFIgBABIgHAKIgFAHIgGAJIgBADIgCADIgFAHIgCAEQhTCHgqCPIgBACIgDALQg/DeA2DnIAGAVIACAKQA1DNCLDLIASAaIADAFQBJBlBlBtIALAOIAPAQIADADIALALIADADQAdAeAeAcIAUARIARAPIADACIASAQIBQA8QAaALgEAVIAAABQgIASgHAWQgDATgHAAIgEgCg");
	this.shape_59.setTransform(85.1,135.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFA2B0").s().p("ADbUxIiGhHIgZgOIgJgGIgQgJIgIgEIgTgLQg2ghg7gqIgPgLIgGgEIgRgMIhJg2IgTgPQl/kliUleIgFgKQhDiigOidIgBgIIgBgPIAAgBQgRj7BnjhIACgEIAYgyIABgDIAIgNIABgDQCnkwFsjlIALgHIALgHQFzjjGcgtIAYgCQBagJBbAAIAbABIAPAAIAHAFIAAExIgZAQIgHAFIgdAUIgEAAQhWABhTALIgrAGQjNAhi4BgIgWAMQi2BliQCwIgJAMQgfAngdApIgJAOIgBABIgHALIgFAHIgGAJIgDAGIgFAHQhUCIgsCRIgBACQhEDjA3DtIAGAVQA1DUCNDNIASAZQBKBnBoBvIALAOIAQAQIAOAOQAeAfAgAdIAUARIARAPIAVARIBQA8QAcALgMAXQgHATgHAWQgDASgHAAQgDAAgEgEg");
	this.shape_60.setTransform(85,136.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFA2B0").s().p("ADZUuQhWgtgwgbIgFgDIgTgLIgKgGIgGgDIgKgGIgIgEIgSgLQg3ghg6gpIgJgGIgGgEIgGgEIgFgDIgNgJIhKg1IgHgFIgNgKQmAkdiTllIgCgEIgDgGQhCiigNidIAAgDIgBgFIgBgPIAAgBIAAgBQgPj6BpjhIABgCIABgCIAZgyIABgDIAHgMIABgCIABgDQCpkxFqjjIAEgDIAHgEIAGgDIAEgDQF1jjGdgsIAKgBIANgBQBagIBbAAIAOAAIAMAAIAEAAIAKADIAFAFIAAExIgUATIgGAFIgYAWIgDABIgLACIgEAAQhNAChLAJIgrAGIgTADQjDAfixBZIgYAMIgLAHQiyBhiLCpIgJAMIgIAJQgbAigZAkIgJAOIgBABIgGAJIgCACIgEAHIgDAEIgDAEIgEAHIgDAFIgBACIgIALQhPCCgrCMIgBACIgDAJQhDDfA1DoIADAJIADALQA0DWCNDLIAFAHIANATQBKBmBqBvIADADIAIAMIADACIANANIAOAOIA/A8IACADIARAOIADACIAPANIAVARIBOA7IACABQAXANgMAWIgOAqIAAABQgDAMgHAAQgDAAgFgEg");
	this.shape_61.setTransform(85,136.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFA2B0").s().p("ADXUrQhUgtgxgbIgGgDIgTgLIgJgGIgGgDIgKgGIgIgEIgSgLQg3ghg6goIgJgHIgGgDIgHgEIgEgDIgNgJIhKgzIgJgGIgNgKQmDkViRlrIgCgEIgDgGQhAiigMieIAAgDIgBgFIgBgPIAAgBIAAgBQgNj6BqjhIABgCIABgCIAZgyIACgEIAHgLIABgCIABgDQCskzFnjgIAFgDIAGgEIAFgDIAGgDQF0jiGegrIALgBIAMgCQBagIBbABIAOAAIANAAIADAAIAIAFIAEAFIAAEyIgQAVIgFAGIgTAYIgDABIgIAFIgEAAQhNABhLAIIgrAGIgTADQjDAci0BXIgXAMIgMAGQi0BfiMCnIgJAMIgIAJQgbAigaAkIgIANIgCABIgFAJIgCACIgFAHIgCAEIgDAFIgEAGIgEAFIgBACIgHAMQhQCBgtCLIgBADIgDAJQhEDfA0DoIACAJIADALQA0DXCNDLIAFAHIANATQBKBlBsBwIAAACIALALIACADIANANIAPAOQAeAeAhAeIACACIASAOIACACIAQAOIAVARIBOA6IABABQAQAPgKAWQgHATgHAXIAAAAQgDAIgGAAQgEAAgGgEg");
	this.shape_62.setTransform(84.9,136.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFA2B0").s().p("ADWUoIiFhJIgGgDIgTgLIgJgFIgGgEIgJgFIgJgFIgSgKQg3gig6gnIgJgGIgGgEIgHgEIgEgDIgNgIIhLgyIgKgHIgMgJQmGkNiQlyIgCgEIgDgGQg/iigLieIAAgEIAAgEIgBgPIAAgBIAAgCQgMj5BtjhIABgCIABgDIAZgxIACgEIAHgMIABgBIABgDQCvk1FljeIAEgDIAHgEIAFgDIAFgDQF1jhGfgqIAKgBIAMgBQBbgIBbAAIANAAIANABIADAAIAGAGIADAGIAAEyIgMAYIgEAGIgOAbIgCACIgGAHIgEAAQhNAAhLAIIgrAFIgSACQjEAbi2BUIgYALIgMAGQi4BciLCmIgJALIgIAKQgbAigaAkIgIAMIgCACIgFAIIgCACIgFAHIgCAEIgDAEIgFAIIgDAEIgBACIgHAMQhRCAguCMIgBACIgDAJQhGDgAyDoIADAJIACALQA0DYCMDJIAFAIIAOATQBLBlBrBvIACACIAKAMIADACIANANIAOAOQAfAeAhAeIACACIASAOIACACIAQAOIAVARIBPA6IAAABQALAQgKAXQgHATgGAWIAAABQgEAEgFAAQgFAAgGgFg");
	this.shape_63.setTransform(84.8,137.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFA2B0").s().p("ADUUlQhSgtgzgdIgFgDIgTgLIgJgFIgHgEIgIgFIgJgFIgSgKQg3gig7gmIgJgGIgGgDIgGgEIgEgDIgNgJIhMgxIgKgGIgNgJQmIkGiPl3IgCgFIgDgFQg9ikgKieIAAgDIAAgFIgBgOIAAgBIAAgCQgKj5BujiIABgCIABgDIAagxIACgEIAHgLIABgCIABgDQCxk2FjjcIAEgCIAHgEIAFgDIAFgEQF2jgGggpIAJgBIANgBQBagIBbAAIANABIANAAIADAAIAEAJIACAGIAAEyIgIAaIgCAHIgKAdIgBADIgFAJIgEAAQhMAAhLAHIgrAEIgSACQjEAZi4BRIgZALIgLAGQi7BYiMCmIgIAKIgJAKQgcAigZAkIgJAMIgBACIgGAHIgBACIgFAIIgDAEIgDAEIgEAIIgDAEIgBACIgIAMQhQB/gwCMIgBACIgDAJQhJDgAyDoIACAKIADALQAyDZCNDIIAFAHIAOAUQBLBkBsBwIACACIALALIACACIANANIAPAOIBAA8IACABIASAPIACACIAQANIAWARIBPA7IAAABQAEASgJAWIgMApIAAABIgGABQgHAAgJgGg");
	this.shape_64.setTransform(84.7,137.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFA2B0").s().p("ADTUhQhSgtgzgdIgGgDIgSgLIgJgGIgHgEIgIgFIgJgFIgRgKQg5ghg6glIgJgHIgGgDIgHgEIgEgDIgMgIIhNgwIgLgHIgNgIQmKj+iOl+IgCgFIgCgFQg9ikgIieIAAgEIAAgEIgCgPIAAgBIAAgCQgHj4BvjiIABgCIACgDIAagxIADgFIAGgLIABgBIACgDQCzk4FhjaIADgCIAHgEIAFgDIAFgDQF2jgGhgoIAJgBIANgBQBagIBbABIANAAIANAAIADAAIACALIABAHIAAEyIgEAdIgBAHIgFAfIgBAEIgCALIgEAAQhMgBhLAHIgrAEIgSACQjFAWi6BOIgZALIgLAFQi+BWiMCkIgIALIgJAKQgcAigaAjIgIAMIgCACIgFAHIgBACIgGAIIgCADIgDAFIgEAIIgEAEIgBACIgHAMQhRB+gxCMIgBADIgDAJQhLDgAwDoIACAJIADALQAyDbCMDHIAGAHIAOAVQBLBjBuBwIABABIALALIACADIAOAMIAPAOQAfAeAiAeIABABIASAPIACACIARANIAWARQAgAZAuAhIAAACQgCATgHAWQgHAUgGAWQgKgCgMgHg");
	this.shape_65.setTransform(84.6,138.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFA2B0").s().p("ABHTOIgigVIgRgKQhGgohHgtIgRgKIhmg+QmZj6iPmOQg+iogHijIgBgXQgGj4BzjkIAcg0IAJgQQC3k9FjjaIAMgHQF9jjGpgnQBogJBoABIAPAAIAAGiIgEAAQhqgChqALQjYAWjOBZQjLBYiTCyQgkAsghAuIgJANIgLARIgJAOQhUCCgzCTQhPDlAzDtQAxDmCUDOQBOBsB8B8IAOAOQAsArAzAsIAUARQAtAkBJA0QgPAogMAuIiihbg");
	this.shape_66.setTransform(84.5,138.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFA2B0").s().p("ABITKIgjgUQhPguhPgxIh5hHQmbjxiPmVQg8ipgGijQgLkEB6jvQAOgaAOgZQC7lLFqjcQGCjpGxgnQBogIBnABIAMABIAAGsQhpgChpAKQjXAUjPBXQjNBViSCxQgpAxglA1IgUAfQhUCBg0CTQhRDkAyDrQAxDoCTDMQBSByCGCCQA1AzA+A0QAuAlBIA0QgPAogNAvIihhdg");
	this.shape_67.setTransform(84.4,139);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFA2B0").s().p("ADPUeIiGhKIgYgPIgKgFIgRgLIgIgEIgQgJQg6gjg6glIgRgLIgGgDIgRgLIhOgxIgUgNQmHj/iNl9IgEgLQg7ijgIidIgBgIIgBgPIAAgBQgHj2BujiIACgEIAagxIACgDIAIgNIABgDQCzk4FejaIAKgGIAMgHQFzjfGcgqIAXgDQBagIBbABIAbAAIAPAAIABAKIAAExIgEAlIgBALIgFArIgEAAQhVgBhTAHIgsAFQjMAXjABTIgYAKQjDBXiPCrIgKAMQgfAmgdAnIgJANIgBABIgHAMIgFAHIgGAJIgEAHIgFAIQhVCDgxCTIgBACQhNDkA0DrIAFAVQA0DaCNDGIASAZQBKBjBsBtIAOAOIAQAPIAPAOIA/A6IAVARIASAPIAUAPIBQA7QgGAUgEAXIgNApIgagLg");
	this.shape_68.setTransform(84.6,138.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFA2B0").s().p("ADRUkIiFhKIgZgOIgKgGIgQgKIgIgEIgRgKQg5gig7gnIgQgKIgGgDIgRgLIhNgzIgUgNQmFkGiPl4IgEgKQg9ijgJieIgBgHIAAgPIAAgBQgKj3BtjiIACgEIAagxIABgDIAIgNIABgDQCxk2FhjcIAKgHIAMgHQFyjgGdgrIAXgCQBagIBbAAIAbAAIAPABIACAIIAAEyIgIAgIgCAKIgKAmIgEAAQhVAAhUAIIgrAFQjMAZi/BVIgXALQjBBaiPCsIgJAMQgfAlgdAoIgJAOIgBABIgIALIgFAIIgGAJIgEAGIgFAIQhUCEgxCSIgBADQhKDjA0DsIAFAVQA0DZCNDHIATAZQBKBkBrBuIANANIAQAPIAPAPIA/A6IAUARIASAPIAUAQIBQA6QgDAUgBAWIgNApIgZgGg");
	this.shape_69.setTransform(84.7,137.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFA2B0").s().p("ADTUpIiFhJIgZgOIgJgGIgRgKIgIgEIgSgKQg4gig6goIgQgKIgGgDIgRgMIhMgzIgUgOQmEkOiPlxIgFgKQg+iigLieIAAgHIgBgQIAAgBQgMj4BsjiIACgDIAZgyIACgCIAIgOIABgDQCuk1FjjeIALgHIALgGQFzjgGcgsIAYgDQBagHBaAAIAbAAIAQAAIADAIIAAExIgMAdIgEAIIgOAhIgEAAQhVABhUAIIgrAFQjNAbi8BZIgYAKQi+BeiPCtIgJAMQgfAmgdAoIgJAMIgBABIgIAMIgEAHIgGAJIgEAHIgFAIQhVCFgvCSIgBABQhJDkA1DsIAFAVQA1DXCNDJIASAaQBKBkBqBuIANAOIAQAPIAPAOQAeAeAhAeIAUARIARAOIAVAQIBQA8QgBASACAUIgOArIgXgCg");
	this.shape_70.setTransform(84.8,137.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFA2B0").s().p("ABQTkIgZgOIgJgFIgRgKIgIgEIgSgLQg3ghg7gpIgPgKIgHgEIgQgLIhLg1IgUgNQmCkWiRlrIgEgKQhBiigLieIgBgHIgBgQIAAAAQgOj6BrjhIACgEIAZgxIABgDIAIgOIABgDQCskzFmjgIALgHIALgHQFzjhGcgtIAXgCQBagIBbAAIAbAAIAQABIAEAGIAAEyIgQAYIgFAHIgTAdIgEAAQhWABhTAJIgrAGQjNAdi7BbIgXALQi8BgiPCuIgJAMQgfAmgdAoIgJANIgBABIgHAMIgFAHIgGAJIgEAGIgEAIQhVCGguCSIgBACQhHDjA2DsIAFAVQA0DWCNDLIATAZQBJBlBrBvIAMANIAPAQIAPAOIA+A7IAUASIASAPIAUAQIBQA7QACASAEAUQgHATgGAWQgLABgKADIiGhJg");
	this.shape_71.setTransform(84.9,136.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFA2B0").s().p("ABSToIgYgOIgKgFIgQgKIgIgEIgSgLQg3ghg7gpIgPgLIgHgEIgPgLIhLg2IgUgOQmAkdiTllIgEgKQhCiigNidIgBgIIgBgPIAAgBQgPj6BpjhIACgEQALgaAOgYIABgDIAIgNIAAgDQCqkyFpjjIALgHIALgGQFzjjGcgsIAXgCQBagJBbAAIAbABIAQAAIAFAGIAAExIgUAUIgGAGIgYAZIgEAAQhWABhSAKIgsAGQjNAei5BeIgXAMQi5BiiPCvIgKAMQgfAmgcApIgJAOIgBABIgHALIgFAHIgGAJIgEAGIgFAIQhUCHgtCRIgBACQhGDjA3DtIAFAVQA1DVCNDLIASAaQBKBlBqBvIALAOIAQAQIAOAOQAeAeAgAeIAUARIARAPIAVARIBQA7QAEARAHATQgHATgHAWQgKAEgJAFIiGhIg");
	this.shape_72.setTransform(85,136.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFA2B0").s().p("ABVTsIgZgOIgJgGIgQgJIgIgEIgTgLQg2ghg7gqIgPgLIgGgEIgRgMIhJg2IgTgPQl/kliUleIgFgKQhDiigOidIgBgIIgBgPIAAgBQgRj7BnjhIACgEIAYgyIABgDIAIgNIABgDQCnkwFsjlIALgHIALgHQFzjjGcgtIAYgCQBagJBbAAIAbABIAPAAIAHAFIAAExIgZAQIgHAFIgdAUIgEAAQhWABhTALIgrAGQjNAhi4BgIgWAMQi2BliQCwIgJAMQgfAngdApIgJAOIgBABIgHALIgFAHIgGAJIgDAGIgFAHQhUCIgsCRIgBACQhEDjA3DtIAGAVQA1DUCNDNIASAZQBKBnBoBvIALAOIAQAQIAOAOQAeAfAgAdIAUARIARAPIAVARIBQA8IAQAiQgHATgHAWIgRAOIiGhHg");
	this.shape_73.setTransform(85,136.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFA2B0").s().p("ABXTvIgZgNIgJgGIgQgJIgIgEIgSgLQg2ghg7grIgPgKIgHgFIgQgMIhIg3IgTgPQl+ktiVlYIgEgKQhFihgQidIgBgIIgBgPIAAgCQgTj7BmjhIACgEQALgaAMgYIACgDIAHgOIABgDQClkvFvjmIALgIIALgGQFzjlGcgtIAXgCQBagJBcAAIAbABIAPAAIAIAEIAAExIgdAMIgIAEIgiAPIgEAAQhWAChTALIgrAHQjNAii2BjIgWANQi1BoiPCxIgJAMQgfAmgcAqIgJAOIgBABIgIAKIgEAHIgGAKIgEAGIgEAHQhVCJgqCRIgBACQhCDiA4DtIAFAVQA1DTCODOIARAaQBKBnBoBwIALAOIAPAQIAOAOQAeAfAgAdIATASIASAPIAUARIBQA7IAWAhQgIATgHAWIgPATQhXgtgvgag");
	this.shape_74.setTransform(85.1,135.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFA2B0").s().p("ABaTzIgZgNIgJgGIgQgJIgIgEIgSgLQg2ghg7gsIgPgKIgGgFIgQgMIhIg4IgTgQQl8k1iWlSIgFgKQhGiggRidIgBgIIgBgQIAAgBQgVj8BkjhIACgEQALgaAMgYIACgDIAHgOIABgCQCikuFyjpIALgIIALgFQFzjmGcguIAYgCQBagIBbgBIAbAAIAQABIAIACIAAEyIghAHIgJADIgmALIgEAAQhXADhSALIgsAHQjNAli0BlIgWANQiyBriPCyIgKAMQgeAngdAqIgJANIgBABIgHALIgEAHIgGAJIgEAGIgEAHQhVCKgoCQIgBACQhBDjA4DtIAGAVQA1DRCODRIARAaQBKBnBmBwIANAOIANAQIAOAOQAfAgAfAdIATASIARAPIAVARIBQA8IAbAfQgHASgIAYQgHAJgGANIiGhFg");
	this.shape_75.setTransform(85.2,135.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFA2B0").s().p("ABcT2IgZgMIgJgGIgQgJIgIgEIgSgLQg1ghg8gtIgOgKIgHgFIgPgMIhHg6IgTgPQl6k9iYlLIgEgKQhJihgSicIgBgIIgBgQIAAgBQgXj9BjjiIACgEQAKgZANgZIABgDIAHgNIABgEQCgkrF1jrIALgIIALgGQFzjmGcguIAXgDQBagIBcgBIAbABIAQAAIAJACIAAEyIglADIgKABQgWACgVAEIgEAAQhXADhTAMIgrAHQjNAnizBoIgVAOQixBtiOC0IgJAMQgfAngcApIgJAPIgBABIgIAKIgEAHIgGAJIgDAGIgEAHQhVCKgoCRIgBACQg/DiA6DtIAFAWQA2DPCNDSIASAaQBJBoBmBxIANAOIAMAQIAOAOQAfAgAfAeIATARIARAQIAVARIBQA7IAgAeQgIASgHAXQgGANgGAPIiGhFg");
	this.shape_76.setTransform(85.3,135.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55}]}).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,172.9,271.1);


(lib.li_1_73_72680复制 = function(mode,startPosition,loop) {
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
	this.shape_57.graphics.f("#FFA2B0").s().p("ABhT6IgagPIgFgCIgDgCIgPgIIgHgEIgJgFIgJgGIgJgFQgxgeg3gpIgOgKIgFgEIgLgIIgGgFIgKgIIg9gyIgUgRIgHgFQl3k6iYlJIgFgKIgCgGQhHidgSiaIgBgIIgBgFIgBgLIAAgBIAAgEQgXj9BijhIABgCIACgEIAWgvIACgEIADgFIAEgIIACgEIACgEQCgkpFwjpIAIgFIAEgDIAGgEIAJgGQFxjjGYguIAMgBIAZgCQBTgIBVAAIANAAIAbABIANAAIABABIABAHIAAEoIgIACIgcAEIgCAAIgIABIgCAAIgdAFIgEAAQhYADhSAMIgRACIgZAFQjQAki0BnIgNAHIgKAGQixBsiQCzIgIAKIgCADQgfAngcApIgHAKIgDAFIgCACIgFAJIgFAHIgGAJIgBABIgCAEIgFAIIgCADQhUCIgoCOIgBADIgDALQg9DdA2DpIAGAVIACAJQA1DMCKDPIATAcIADADQBIBoBjBuIANAOIANAQIADADIAMAMIACACQAdAfAdAcIAUASIARAPIADACIAUARIBQA8QAUAMALARIABABQgIARgHAWQgEAQgGAJIgDAEIiAhBg");
	this.shape_57.setTransform(85.3,135.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFA2B0").s().p("ABdT2IgagOIgFgDIgDgCIgPgJIgIgEIgIgFIgKgGIgIgFQgygeg2goIgPgLIgGgEIgKgIIgGgFIgKgHIg+gxIgUgQIgHgGQl4kyiWlPIgFgKIgCgGQhFiegRiaIAAgIIgBgEIgBgLIAAgBIAAgDQgVj8BjjgIABgCIACgFIAWguIACgEIACgEIAFgIIACgFIACgDQChkrFujnIAHgFIAEgDIAHgEIAJgGQFwjiGXguIAMgBIAZgDQBTgIBVAAIANAAIAbABIANAAIABABIADAGIAAEoIgFAFIgaAHIgCAAIgIADIgCAAIgdAKIgEAAQhWAChTAMIgRACIgaAEQjOAki1BkIgNAHIgKAGQizBqiQCyIgIAJIgCADQgfAngcApIgHAKIgDAFIgBABIgGAKIgFAHIgGAJIgBACIgCADIgFAIIgCAEQhUCHgpCOIgBADIgDALQg+DeA2DnIAGAVIACAKQA2DNCKDMIASAcIADAEQBJBmBkBtIANAPIANAQIADADIALALIADADQAdAeAeAcIATARIARAPIADADIATAQIBRA8QAWAMAEASIAAABQgHASgHAWQgEAUgJABIgDACIiBhCg");
	this.shape_58.setTransform(85.2,135.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFA2B0").s().p("ADeU0IgFAAIiAhEIgZgNIgGgEIgDgCIgQgJIgIgEIgIgFIgKgGIgIgFQgzgeg2goIgPgLIgGgEIgKgHIgGgFIgKgHIg/gwIgTgQIgHgFQl5kriUlVIgFgKIgCgGQhDiegQiaIAAgIIgBgEIgBgLIAAgBIAAgCQgTj6BljhIABgCIACgEIAWgvIACgDIACgEIAEgIIADgFIABgDQCkksFqjlIAHgFIAEgDIAHgEIAKgGQFvjhGWgvIAMgBIAYgCQBTgIBVgBIANAAIAbABIANAAIACABIAFAFIAAEnIgDAIIgYALIgCABIgIAEIgCAAIgbAPIgEAAQhXAChTAKIgRADIgaAEQjOAii2BiIgMAHIgLAGQi0BniQCxIgHAKIgCADQgfAmgdApIgGAKIgDAFIgBABIgHAKIgFAHIgGAJIgBADIgCADIgFAHIgCAEQhTCHgqCPIgBACIgDALQg/DeA2DnIAGAVIACAKQA1DNCLDLIASAaIADAFQBJBlBlBtIALAOIAPAQIADADIALALIADADQAdAeAeAcIAUARIARAPIADACIASAQIBQA8QAaALgEAVIAAABQgIASgHAWQgDATgHAAIgEgCg");
	this.shape_59.setTransform(85.1,135.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFA2B0").s().p("ADbUxIiGhHIgZgOIgJgGIgQgJIgIgEIgTgLQg2ghg7gqIgPgLIgGgEIgRgMIhJg2IgTgPQl/kliUleIgFgKQhDiigOidIgBgIIgBgPIAAgBQgRj7BnjhIACgEIAYgyIABgDIAIgNIABgDQCnkwFsjlIALgHIALgHQFzjjGcgtIAYgCQBagJBbAAIAbABIAPAAIAHAFIAAExIgZAQIgHAFIgdAUIgEAAQhWABhTALIgrAGQjNAhi4BgIgWAMQi2BliQCwIgJAMQgfAngdApIgJAOIgBABIgHALIgFAHIgGAJIgDAGIgFAHQhUCIgsCRIgBACQhEDjA3DtIAGAVQA1DUCNDNIASAZQBKBnBoBvIALAOIAQAQIAOAOQAeAfAgAdIAUARIARAPIAVARIBQA8QAcALgMAXQgHATgHAWQgDASgHAAQgDAAgEgEg");
	this.shape_60.setTransform(85,136.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFA2B0").s().p("ADZUuQhWgtgwgbIgFgDIgTgLIgKgGIgGgDIgKgGIgIgEIgSgLQg3ghg6gpIgJgGIgGgEIgGgEIgFgDIgNgJIhKg1IgHgFIgNgKQmAkdiTllIgCgEIgDgGQhCiigNidIAAgDIgBgFIgBgPIAAgBIAAgBQgPj6BpjhIABgCIABgCIAZgyIABgDIAHgMIABgCIABgDQCpkxFqjjIAEgDIAHgEIAGgDIAEgDQF1jjGdgsIAKgBIANgBQBagIBbAAIAOAAIAMAAIAEAAIAKADIAFAFIAAExIgUATIgGAFIgYAWIgDABIgLACIgEAAQhNAChLAJIgrAGIgTADQjDAfixBZIgYAMIgLAHQiyBhiLCpIgJAMIgIAJQgbAigZAkIgJAOIgBABIgGAJIgCACIgEAHIgDAEIgDAEIgEAHIgDAFIgBACIgIALQhPCCgrCMIgBACIgDAJQhDDfA1DoIADAJIADALQA0DWCNDLIAFAHIANATQBKBmBqBvIADADIAIAMIADACIANANIAOAOIA/A8IACADIARAOIADACIAPANIAVARIBOA7IACABQAXANgMAWIgOAqIAAABQgDAMgHAAQgDAAgFgEg");
	this.shape_61.setTransform(85,136.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFA2B0").s().p("ADXUrQhUgtgxgbIgGgDIgTgLIgJgGIgGgDIgKgGIgIgEIgSgLQg3ghg6goIgJgHIgGgDIgHgEIgEgDIgNgJIhKgzIgJgGIgNgKQmDkViRlrIgCgEIgDgGQhAiigMieIAAgDIgBgFIgBgPIAAgBIAAgBQgNj6BqjhIABgCIABgCIAZgyIACgEIAHgLIABgCIABgDQCskzFnjgIAFgDIAGgEIAFgDIAGgDQF0jiGegrIALgBIAMgCQBagIBbABIAOAAIANAAIADAAIAIAFIAEAFIAAEyIgQAVIgFAGIgTAYIgDABIgIAFIgEAAQhNABhLAIIgrAGIgTADQjDAci0BXIgXAMIgMAGQi0BfiMCnIgJAMIgIAJQgbAigaAkIgIANIgCABIgFAJIgCACIgFAHIgCAEIgDAFIgEAGIgEAFIgBACIgHAMQhQCBgtCLIgBADIgDAJQhEDfA0DoIACAJIADALQA0DXCNDLIAFAHIANATQBKBlBsBwIAAACIALALIACADIANANIAPAOQAeAeAhAeIACACIASAOIACACIAQAOIAVARIBOA6IABABQAQAPgKAWQgHATgHAXIAAAAQgDAIgGAAQgEAAgGgEg");
	this.shape_62.setTransform(84.9,136.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFA2B0").s().p("ADWUoIiFhJIgGgDIgTgLIgJgFIgGgEIgJgFIgJgFIgSgKQg3gig6gnIgJgGIgGgEIgHgEIgEgDIgNgIIhLgyIgKgHIgMgJQmGkNiQlyIgCgEIgDgGQg/iigLieIAAgEIAAgEIgBgPIAAgBIAAgCQgMj5BtjhIABgCIABgDIAZgxIACgEIAHgMIABgBIABgDQCvk1FljeIAEgDIAHgEIAFgDIAFgDQF1jhGfgqIAKgBIAMgBQBbgIBbAAIANAAIANABIADAAIAGAGIADAGIAAEyIgMAYIgEAGIgOAbIgCACIgGAHIgEAAQhNAAhLAIIgrAFIgSACQjEAbi2BUIgYALIgMAGQi4BciLCmIgJALIgIAKQgbAigaAkIgIAMIgCACIgFAIIgCACIgFAHIgCAEIgDAEIgFAIIgDAEIgBACIgHAMQhRCAguCMIgBACIgDAJQhGDgAyDoIADAJIACALQA0DYCMDJIAFAIIAOATQBLBlBrBvIACACIAKAMIADACIANANIAOAOQAfAeAhAeIACACIASAOIACACIAQAOIAVARIBPA6IAAABQALAQgKAXQgHATgGAWIAAABQgEAEgFAAQgFAAgGgFg");
	this.shape_63.setTransform(84.8,137.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFA2B0").s().p("ADUUlQhSgtgzgdIgFgDIgTgLIgJgFIgHgEIgIgFIgJgFIgSgKQg3gig7gmIgJgGIgGgDIgGgEIgEgDIgNgJIhMgxIgKgGIgNgJQmIkGiPl3IgCgFIgDgFQg9ikgKieIAAgDIAAgFIgBgOIAAgBIAAgCQgKj5BujiIABgCIABgDIAagxIACgEIAHgLIABgCIABgDQCxk2FjjcIAEgCIAHgEIAFgDIAFgEQF2jgGggpIAJgBIANgBQBagIBbAAIANABIANAAIADAAIAEAJIACAGIAAEyIgIAaIgCAHIgKAdIgBADIgFAJIgEAAQhMAAhLAHIgrAEIgSACQjEAZi4BRIgZALIgLAGQi7BYiMCmIgIAKIgJAKQgcAigZAkIgJAMIgBACIgGAHIgBACIgFAIIgDAEIgDAEIgEAIIgDAEIgBACIgIAMQhQB/gwCMIgBACIgDAJQhJDgAyDoIACAKIADALQAyDZCNDIIAFAHIAOAUQBLBkBsBwIACACIALALIACACIANANIAPAOIBAA8IACABIASAPIACACIAQANIAWARIBPA7IAAABQAEASgJAWIgMApIAAABIgGABQgHAAgJgGg");
	this.shape_64.setTransform(84.7,137.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFA2B0").s().p("ADTUhQhSgtgzgdIgGgDIgSgLIgJgGIgHgEIgIgFIgJgFIgRgKQg5ghg6glIgJgHIgGgDIgHgEIgEgDIgMgIIhNgwIgLgHIgNgIQmKj+iOl+IgCgFIgCgFQg9ikgIieIAAgEIAAgEIgCgPIAAgBIAAgCQgHj4BvjiIABgCIACgDIAagxIADgFIAGgLIABgBIACgDQCzk4FhjaIADgCIAHgEIAFgDIAFgDQF2jgGhgoIAJgBIANgBQBagIBbABIANAAIANAAIADAAIACALIABAHIAAEyIgEAdIgBAHIgFAfIgBAEIgCALIgEAAQhMgBhLAHIgrAEIgSACQjFAWi6BOIgZALIgLAFQi+BWiMCkIgIALIgJAKQgcAigaAjIgIAMIgCACIgFAHIgBACIgGAIIgCADIgDAFIgEAIIgEAEIgBACIgHAMQhRB+gxCMIgBADIgDAJQhLDgAwDoIACAJIADALQAyDbCMDHIAGAHIAOAVQBLBjBuBwIABABIALALIACADIAOAMIAPAOQAfAeAiAeIABABIASAPIACACIARANIAWARQAgAZAuAhIAAACQgCATgHAWQgHAUgGAWQgKgCgMgHg");
	this.shape_65.setTransform(84.6,138.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFA2B0").s().p("ABHTOIgigVIgRgKQhGgohHgtIgRgKIhmg+QmZj6iPmOQg+iogHijIgBgXQgGj4BzjkIAcg0IAJgQQC3k9FjjaIAMgHQF9jjGpgnQBogJBoABIAPAAIAAGiIgEAAQhqgChqALQjYAWjOBZQjLBYiTCyQgkAsghAuIgJANIgLARIgJAOQhUCCgzCTQhPDlAzDtQAxDmCUDOQBOBsB8B8IAOAOQAsArAzAsIAUARQAtAkBJA0QgPAogMAuIiihbg");
	this.shape_66.setTransform(84.5,138.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFA2B0").s().p("ABITKIgjgUQhPguhPgxIh5hHQmbjxiPmVQg8ipgGijQgLkEB6jvQAOgaAOgZQC7lLFqjcQGCjpGxgnQBogIBnABIAMABIAAGsQhpgChpAKQjXAUjPBXQjNBViSCxQgpAxglA1IgUAfQhUCBg0CTQhRDkAyDrQAxDoCTDMQBSByCGCCQA1AzA+A0QAuAlBIA0QgPAogNAvIihhdg");
	this.shape_67.setTransform(84.4,139);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFA2B0").s().p("ADPUeIiGhKIgYgPIgKgFIgRgLIgIgEIgQgJQg6gjg6glIgRgLIgGgDIgRgLIhOgxIgUgNQmHj/iNl9IgEgLQg7ijgIidIgBgIIgBgPIAAgBQgHj2BujiIACgEIAagxIACgDIAIgNIABgDQCzk4FejaIAKgGIAMgHQFzjfGcgqIAXgDQBagIBbABIAbAAIAPAAIABAKIAAExIgEAlIgBALIgFArIgEAAQhVgBhTAHIgsAFQjMAXjABTIgYAKQjDBXiPCrIgKAMQgfAmgdAnIgJANIgBABIgHAMIgFAHIgGAJIgEAHIgFAIQhVCDgxCTIgBACQhNDkA0DrIAFAVQA0DaCNDGIASAZQBKBjBsBtIAOAOIAQAPIAPAOIA/A6IAVARIASAPIAUAPIBQA7QgGAUgEAXIgNApIgagLg");
	this.shape_68.setTransform(84.6,138.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFA2B0").s().p("ADRUkIiFhKIgZgOIgKgGIgQgKIgIgEIgRgKQg5gig7gnIgQgKIgGgDIgRgLIhNgzIgUgNQmFkGiPl4IgEgKQg9ijgJieIgBgHIAAgPIAAgBQgKj3BtjiIACgEIAagxIABgDIAIgNIABgDQCxk2FhjcIAKgHIAMgHQFyjgGdgrIAXgCQBagIBbAAIAbAAIAPABIACAIIAAEyIgIAgIgCAKIgKAmIgEAAQhVAAhUAIIgrAFQjMAZi/BVIgXALQjBBaiPCsIgJAMQgfAlgdAoIgJAOIgBABIgIALIgFAIIgGAJIgEAGIgFAIQhUCEgxCSIgBADQhKDjA0DsIAFAVQA0DZCNDHIATAZQBKBkBrBuIANANIAQAPIAPAPIA/A6IAUARIASAPIAUAQIBQA6QgDAUgBAWIgNApIgZgGg");
	this.shape_69.setTransform(84.7,137.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFA2B0").s().p("ADTUpIiFhJIgZgOIgJgGIgRgKIgIgEIgSgKQg4gig6goIgQgKIgGgDIgRgMIhMgzIgUgOQmEkOiPlxIgFgKQg+iigLieIAAgHIgBgQIAAgBQgMj4BsjiIACgDIAZgyIACgCIAIgOIABgDQCuk1FjjeIALgHIALgGQFzjgGcgsIAYgDQBagHBaAAIAbAAIAQAAIADAIIAAExIgMAdIgEAIIgOAhIgEAAQhVABhUAIIgrAFQjNAbi8BZIgYAKQi+BeiPCtIgJAMQgfAmgdAoIgJAMIgBABIgIAMIgEAHIgGAJIgEAHIgFAIQhVCFgvCSIgBABQhJDkA1DsIAFAVQA1DXCNDJIASAaQBKBkBqBuIANAOIAQAPIAPAOQAeAeAhAeIAUARIARAOIAVAQIBQA8QgBASACAUIgOArIgXgCg");
	this.shape_70.setTransform(84.8,137.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFA2B0").s().p("ABQTkIgZgOIgJgFIgRgKIgIgEIgSgLQg3ghg7gpIgPgKIgHgEIgQgLIhLg1IgUgNQmCkWiRlrIgEgKQhBiigLieIgBgHIgBgQIAAAAQgOj6BrjhIACgEIAZgxIABgDIAIgOIABgDQCskzFmjgIALgHIALgHQFzjhGcgtIAXgCQBagIBbAAIAbAAIAQABIAEAGIAAEyIgQAYIgFAHIgTAdIgEAAQhWABhTAJIgrAGQjNAdi7BbIgXALQi8BgiPCuIgJAMQgfAmgdAoIgJANIgBABIgHAMIgFAHIgGAJIgEAGIgEAIQhVCGguCSIgBACQhHDjA2DsIAFAVQA0DWCNDLIATAZQBJBlBrBvIAMANIAPAQIAPAOIA+A7IAUASIASAPIAUAQIBQA7QACASAEAUQgHATgGAWQgLABgKADIiGhJg");
	this.shape_71.setTransform(84.9,136.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFA2B0").s().p("ABSToIgYgOIgKgFIgQgKIgIgEIgSgLQg3ghg7gpIgPgLIgHgEIgPgLIhLg2IgUgOQmAkdiTllIgEgKQhCiigNidIgBgIIgBgPIAAgBQgPj6BpjhIACgEQALgaAOgYIABgDIAIgNIAAgDQCqkyFpjjIALgHIALgGQFzjjGcgsIAXgCQBagJBbAAIAbABIAQAAIAFAGIAAExIgUAUIgGAGIgYAZIgEAAQhWABhSAKIgsAGQjNAei5BeIgXAMQi5BiiPCvIgKAMQgfAmgcApIgJAOIgBABIgHALIgFAHIgGAJIgEAGIgFAIQhUCHgtCRIgBACQhGDjA3DtIAFAVQA1DVCNDLIASAaQBKBlBqBvIALAOIAQAQIAOAOQAeAeAgAeIAUARIARAPIAVARIBQA7QAEARAHATQgHATgHAWQgKAEgJAFIiGhIg");
	this.shape_72.setTransform(85,136.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFA2B0").s().p("ABVTsIgZgOIgJgGIgQgJIgIgEIgTgLQg2ghg7gqIgPgLIgGgEIgRgMIhJg2IgTgPQl/kliUleIgFgKQhDiigOidIgBgIIgBgPIAAgBQgRj7BnjhIACgEIAYgyIABgDIAIgNIABgDQCnkwFsjlIALgHIALgHQFzjjGcgtIAYgCQBagJBbAAIAbABIAPAAIAHAFIAAExIgZAQIgHAFIgdAUIgEAAQhWABhTALIgrAGQjNAhi4BgIgWAMQi2BliQCwIgJAMQgfAngdApIgJAOIgBABIgHALIgFAHIgGAJIgDAGIgFAHQhUCIgsCRIgBACQhEDjA3DtIAGAVQA1DUCNDNIASAZQBKBnBoBvIALAOIAQAQIAOAOQAeAfAgAdIAUARIARAPIAVARIBQA8IAQAiQgHATgHAWIgRAOIiGhHg");
	this.shape_73.setTransform(85,136.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFA2B0").s().p("ABXTvIgZgNIgJgGIgQgJIgIgEIgSgLQg2ghg7grIgPgKIgHgFIgQgMIhIg3IgTgPQl+ktiVlYIgEgKQhFihgQidIgBgIIgBgPIAAgCQgTj7BmjhIACgEQALgaAMgYIACgDIAHgOIABgDQClkvFvjmIALgIIALgGQFzjlGcgtIAXgCQBagJBcAAIAbABIAPAAIAIAEIAAExIgdAMIgIAEIgiAPIgEAAQhWAChTALIgrAHQjNAii2BjIgWANQi1BoiPCxIgJAMQgfAmgcAqIgJAOIgBABIgIAKIgEAHIgGAKIgEAGIgEAHQhVCJgqCRIgBACQhCDiA4DtIAFAVQA1DTCODOIARAaQBKBnBoBwIALAOIAPAQIAOAOQAeAfAgAdIATASIASAPIAUARIBQA7IAWAhQgIATgHAWIgPATQhXgtgvgag");
	this.shape_74.setTransform(85.1,135.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFA2B0").s().p("ABaTzIgZgNIgJgGIgQgJIgIgEIgSgLQg2ghg7gsIgPgKIgGgFIgQgMIhIg4IgTgQQl8k1iWlSIgFgKQhGiggRidIgBgIIgBgQIAAgBQgVj8BkjhIACgEQALgaAMgYIACgDIAHgOIABgCQCikuFyjpIALgIIALgFQFzjmGcguIAYgCQBagIBbgBIAbAAIAQABIAIACIAAEyIghAHIgJADIgmALIgEAAQhXADhSALIgsAHQjNAli0BlIgWANQiyBriPCyIgKAMQgeAngdAqIgJANIgBABIgHALIgEAHIgGAJIgEAGIgEAHQhVCKgoCQIgBACQhBDjA4DtIAGAVQA1DRCODRIARAaQBKBnBmBwIANAOIANAQIAOAOQAfAgAfAdIATASIARAPIAVARIBQA8IAbAfQgHASgIAYQgHAJgGANIiGhFg");
	this.shape_75.setTransform(85.2,135.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFA2B0").s().p("ABcT2IgZgMIgJgGIgQgJIgIgEIgSgLQg1ghg8gtIgOgKIgHgFIgPgMIhHg6IgTgPQl6k9iYlLIgEgKQhJihgSicIgBgIIgBgQIAAgBQgXj9BjjiIACgEQAKgZANgZIABgDIAHgNIABgEQCgkrF1jrIALgIIALgGQFzjmGcguIAXgDQBagIBcgBIAbABIAQAAIAJACIAAEyIglADIgKABQgWACgVAEIgEAAQhXADhTAMIgrAHQjNAnizBoIgVAOQixBtiOC0IgJAMQgfAngcApIgJAPIgBABIgIAKIgEAHIgGAJIgDAGIgEAHQhVCKgoCRIgBACQg/DiA6DtIAFAWQA2DPCNDSIASAaQBJBoBmBxIANAOIAMAQIAOAOQAfAgAfAeIATARIARAQIAVARIBQA7IAgAeQgIASgHAXQgGANgGAPIiGhFg");
	this.shape_76.setTransform(85.3,135.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55}]}).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,172.9,271.1);


(lib.li_1_72_18029复制5 = function(mode,startPosition,loop) {
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


(lib.li_1_72_18029复制2 = function(mode,startPosition,loop) {
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


(lib.li_1_72_18029复制 = function(mode,startPosition,loop) {
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


(lib.li_1_59_10366 = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},4).to({state:[]},58).wait(137));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-50,78,95);


(lib.li_1_58_76545 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap33复制();
	this.instance.setTransform(-14.7,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-13.4,30,27);


(lib.li_1_57_62512 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap42();
	this.instance.setTransform(-23.7,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-31.1,47,62);


(lib.li_1_56_95137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap32复制();
	this.instance.setTransform(-11,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-12.1,22,24);


(lib.li_1_55_93676 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap68();
	this.instance.setTransform(-39,-47.3);

	this.instance_1 = new lib.Bitmap67();
	this.instance_1.setTransform(-39,-44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},65).wait(1398));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-47.3,79,92);


(lib.li_1_54_16274 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap73();
	this.instance.setTransform(-14.7,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-13.4,30,27);


(lib.li_1_53_70231 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap71();
	this.instance.setTransform(-23.7,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-31.1,47,62);


(lib.li_1_52_6617 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap72();
	this.instance.setTransform(-11,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-12.1,22,24);


(lib.li_1_42_37949 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap64();
	this.instance.setTransform(-18.6,-29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-29.1,37,58);


(lib.li_1_41_3445 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap63();
	this.instance.setTransform(-18.6,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-29,37,58);


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
	this.instance.setTransform(-68.9,-130.5,1,1,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.1,-130.5,202.8,260.9);


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


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.组12拷贝2();
	this.instance.setTransform(-412.5,-223.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412.5,-223.5,825,447);


(lib.补间6复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层414();
	this.instance.setTransform(-473.5,-280.6,1,0.986);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-473.5,-280.6,947,560.8);


(lib.补间5复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层402拷贝2();
	this.instance.setTransform(-18.5,-244.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-244.5,37,489);


(lib.补间4复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层413();
	this.instance.setTransform(-18.5,-244.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-244.5,37,489);


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


(lib.ygdfgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._3();
	this.instance.setTransform(0,5);

	this.instance_1 = new lib.演奏千声佛();
	this.instance_1.setTransform(48,0);

	this.instance_2 = new lib.谱子_1();
	this.instance_2.setTransform(2,47);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtBpQgmgFAAgQQAHgOAcAKIAeAGQAogEADgfQgBgpgugCQgRAAgeALQgHAAgCgEQAAgBAFgGQA8grAagsQgQAAgdADIgHAAQgkAEALgVQACgNAsAAIAvAAQAOAAAHACIASAAQAMACADAFQAEAHgHAGQgnAhgfAnQBBAKABAqQgHA6hPAJQgRAAgSgCg");
	this.shape.setTransform(692,310.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhAB6QgBgGAIgPQAOgiALgVQAagzAVg9IACgFQAQgsARgHQAXgEgOAiQgcA4gcBBIgXA2QgOAjgRAEIgIACQgBAAgBgBQAAAAgBAAQgBAAAAAAQAAgBgBAAg");
	this.shape_1.setTransform(669.7,308.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtBpQgmgFAAgQQAHgOAcAKIAeAGQAogEADgfQgBgpgugCQgRAAgeALQgHAAgCgEQAAgBAFgGQA8grAagsQgQAAgdADIgHAAQgkAEALgVQACgNAsAAIAvAAQAOAAAHACIASAAQAMACADAFQAEAHgHAGQgnAhgfAnQBBAKABAqQgHA6hPAJQgRAAgSgCg");
	this.shape_2.setTransform(644.8,310.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,704.4,333.7);


(lib.li_1_4_20928 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_175_58659();
	this.instance.setTransform(-51.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-52,103,104);


(lib.li_1_3_45622 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_133_98251();
	this.instance.setTransform(-48.5,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-56.5,97,113);


(lib.li_1_2_71908 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_171_13204();
	this.instance.setTransform(-43,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-40.5,86,81);


(lib.li_1_1_46573 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_170_97905();
	this.instance.setTransform(-51.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-46.5,103,93);


(lib.补间7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance_1 = new lib.组12拷贝2();
	this.instance_1.setTransform(-412.5,-223.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412.5,-223.5,825,447);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层414();
	this.instance.setTransform(-473.5,-280.6,1,0.986);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-473.5,-280.6,947,560.8);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层402拷贝2();
	this.instance.setTransform(-18.5,-244.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-244.5,37,489);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层413();
	this.instance.setTransform(-18.5,-244.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-244.5,37,489);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._2();
	this.instance.setTransform(-0.2,2.8);

	this.instance_1 = new lib.演奏繁花();
	this.instance_1.setTransform(48.8,-2.2);

	this.instance_2 = new lib.谱子();
	this.instance_2.setTransform(13.8,38.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhbBhQgIAAABgFQAAgDAJgEQA8gVAsgxQgTAJgWAAQgqAAgCg+QAAg0BGgGQBYgDAAA4QgDBEhKAsIAOAAQAlgDASgEQAOAAADAGQAFAFgHAJQgOAPgfAAgAgaggQAAAcAcAAQAjAAACgqQgDgZgcgFQgiABAAArg");
	this.shape.setTransform(693.7,307.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhAB6QgBgGAIgPQAOgiALgVQAagzAVg9IACgFQAQgsARgHQAXgEgOAiQgcA4gcBBIgXA2QgOAjgRAEIgIACQgBAAgBgBQAAAAgBAAQgBAAAAAAQAAgBgBAAg");
	this.shape_1.setTransform(670.5,306.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhbBhQgIAAABgFQAAgDAJgEQA8gVAsgxQgTAJgWAAQgqAAgCg+QAAg0BGgGQBYgDAAA4QgDBEhKAsIAOAAQAlgDASgEQAOAAADAGQAFAFgHAJQgOAPgfAAgAgaggQAAAcAcAAQAjAAACgqQgDgZgcgFQgiABAAArg");
	this.shape_2.setTransform(646.5,307.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-2.2,710,334.7);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.元件5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance_1 = new lib._1_1();
	this.instance_1.setTransform(0,2.9);

	this.instance_2 = new lib.练习基本功();
	this.instance_2.setTransform(45,-0.1);

	this.instance_3 = new lib.转曲();
	this.instance_3.setTransform(14,41.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhbBhQgIAAABgFQAAgDAJgEQA8gVAsgxQgTAJgWAAQgqAAgCg+QAAg0BGgGQBYgDAAA4QgDBEhKAsIAOAAQAlgDASgEQAOAAADAGQAFAFgHAJQgOAPgfAAgAgaggQAAAcAcAAQAjAAACgqQgDgZgcgFQgiABAAArg");
	this.shape.setTransform(690.9,307.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhAB6QgBgGAIgPQAOgiALgVQAagzAVg9IACgFQAQgsARgHQAXgEgOAiQgcA4gcBBIgXA2QgOAjgRAEIgIACQgBAAgBgBQAAAAgBAAQgBAAAAAAQAAgBgBAAg");
	this.shape_1.setTransform(667.7,307);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtBiQgoAAAHgMQACgNAegBIAPAAIAGAAQADgWACgVIADgmQAAgegFgeIgTAAQgeAAAEgMQADgNAlgDIAeAAIAPAAQAUACgCARQgLA3ACBfIAbAAQAdgCgDAOQgFAOgkAAg");
	this.shape_2.setTransform(644.3,307.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,704.3,332.6);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.古筝();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,877,319);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层388();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,319);


(lib.li_1_139_29141复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.li_1_137_36011复制("synched",0);
	this.instance.setTransform(27.9,5.4,0.105,0.121,0,29.8,34.3,-283.4,-801.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(497));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.7,0.7,107.9,198.9);


(lib.li_1_134_15167复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.li_1_140_42646复制("synched",0);
	this.instance.setTransform(32.1,-6.1,0.109,0.122,0,31.9,32.1,-283.7,-801.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.7,-10.7,115.4,195.9);


(lib.li_1_131_92409复制5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_132_50302复制5("synched",0);
	this.instance.setTransform(-0.1,-2.7,1.215,1.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228,-19.1,455.8,32.8);


(lib.li_1_131_92409复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_132_50302复制2("synched",0);
	this.instance.setTransform(-0.1,-2.7,1.215,1.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228,-19.1,455.8,32.8);


(lib.li_1_131_92409复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_132_50302复制("synched",0);
	this.instance.setTransform(-0.1,-2.7,1.215,1.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228,-19.1,455.8,32.8);


(lib.li_1_129_3968复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.li_1_130_80634复制4("synched",0);
	this.instance.setTransform(47.2,-23.4,0.109,0.122,0,31.9,32.1,-283.7,-801.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.8,-28,115.4,195.9);


(lib.li_1_129_3968复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.li_1_130_80634复制("synched",0);
	this.instance.setTransform(47.3,-23.4,0.109,0.122,0,31.9,32.1,-283.7,-801.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.9,-28,115.4,195.9);


(lib.li_1_127_51025复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_128_84733复制4("synched",0);
	this.instance.setTransform(-70,110,1,1,0,0,0,-70,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:110.1,rotation:8.7,x:-69.9,y:110.1},23).to({regY:110,rotation:0,x:-70,y:110},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-120.5,174,241);


(lib.li_1_127_51025复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_128_84733复制("synched",0);
	this.instance.setTransform(-70,110,1,1,0,0,0,-70,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:110.1,rotation:8.7,x:-69.9,y:110.1},20).to({regY:110,rotation:0,x:-70,y:110},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.2,-119.9,203.1,260.1);


(lib.li_1_125_62582复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.li_1_126_55217复制4("synched",0);
	this.instance.setTransform(37.7,-6.9,0.105,0.121,0,29.8,34.3,-283.4,-801.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.5,-11.6,107.9,198.9);


(lib.li_1_125_62582复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.li_1_126_55217复制("synched",0);
	this.instance.setTransform(37.8,-7.1,0.105,0.121,0,29.8,34.3,-283.4,-801.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(497));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.7,-11.8,107.9,198.9);


(lib.li_1_118_52566复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_27_10701("synched",0);
	this.instance.setTransform(-70,110,1,1,0,0,0,-70,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:110.1,rotation:8.7,x:-69.9,y:110.1},23).to({regY:110,rotation:0,x:-70,y:110},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.1,-130.5,202.8,260.9);


(lib.li_1_117_5241复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_42_37949("synched",0);
	this.instance.setTransform(-31,-14.3,1,1,0,0,0,-17.6,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-15.3,37,58);


(lib.li_1_116_2334复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_41_3445("synched",0);
	this.instance.setTransform(28.2,-22.2,1,1,0,0,0,17.6,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:23.8,y:-34.9},16).wait(563));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-23.2,37,58);


(lib.li_1_113_78516复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 11
	this.instance = new lib.li_1_115_28320复制("synched",0);
	this.instance.setTransform(54.1,66.6,1,1,0,0,0,-13.5,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.9,x:54.2},20).to({rotation:0,x:54.1},20).wait(1));

	// 补间 12
	this.instance_1 = new lib.li_1_117_2989复制("synched",0);
	this.instance_1.setTransform(34.2,6.7,1,1,0,0,0,-3.9,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},20).to({startPosition:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,91.8,124.2);


(lib.li_1_110_93823复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// li_1_112_62330
	this.instance = new lib.li_1_112_62330复制("synched",0);
	this.instance.setTransform(31.5,66.6,1,1,0,0,0,9.6,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-25.3,rotation:-3},20).to({regY:-25.2,rotation:0},20).wait(1));

	// li_1_111_72990
	this.instance_1 = new lib.li_1_111_72990复制("synched",0);
	this.instance_1.setTransform(71.5,6.6,1,1,0,0,0,20.1,-36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},20).to({startPosition:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.6,91.4,124.8);


(lib.li_1_100_73020复制 = function(mode,startPosition,loop) {
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


(lib.li_1_99_62310复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.li_1_100_42066复制4("synched",0);
	this.instance.setTransform(0.6,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04},16).to({scaleX:1},18).wait(1));

	// 图层 3
	this.instance_1 = new lib.li_1_101_7751复制4("synched",0);
	this.instance_1.setTransform(12.2,-1.1,1,1,0,0,0,-11,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-8.5,skewY:-10.1,x:12.1,y:0.1},16).to({skewX:0,skewY:0,x:12.2,y:-1.1},18).wait(1));

	// 图层 4
	this.instance_2 = new lib.li_1_102_88671复制4("synched",0);
	this.instance_2.setTransform(-11.1,-1.1,1,1,0,0,0,11,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:11.1,scaleX:1,skewX:9,skewY:10.9,y:-0.3},16).to({regX:11,scaleX:1,skewX:0,skewY:0,y:-1.1},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-19.9,77,40.3);


(lib.li_1_99_62310复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.li_1_100_42066复制("synched",0);
	this.instance.setTransform(0.6,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04},16).to({scaleX:1},18).wait(1));

	// 图层 3
	this.instance_1 = new lib.li_1_101_7751复制("synched",0);
	this.instance_1.setTransform(12.2,-1.1,1,1,0,0,0,-11,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-8.5,skewY:-10.1,x:12.1,y:0.1},16).to({skewX:0,skewY:0,x:12.2,y:-1.1},18).wait(1));

	// 图层 4
	this.instance_2 = new lib.li_1_102_88671复制("synched",0);
	this.instance_2.setTransform(-11.1,-1.1,1,1,0,0,0,11,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:11.1,scaleX:1,skewX:9,skewY:10.9,y:-0.3},16).to({regX:11,scaleX:1,skewX:0,skewY:0,y:-1.1},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-19.9,77,40.3);


(lib.li_1_98_68273复制5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.instance = new lib.li_1_73_72680复制5("synched",1);
	this.instance.setTransform(-19.6,-94.8,0.905,0.602,0,0,0,160.3,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-19.7,startPosition:5},4).to({x:-24,y:-101.7,startPosition:12},7).to({x:-18.7,y:-96.7,startPosition:18},6).to({x:-20.8,y:-98.5,startPosition:0},7).to({x:-19.8,y:-98.4,startPosition:7},7).to({startPosition:12},80).to({x:-24.3,y:-99.2,startPosition:17},5).to({x:-22,y:-83.5,startPosition:23},6).to({x:-21.8,y:-94.7,startPosition:5},7).to({startPosition:10},55).to({regX:160.2,regY:12.3,x:-30.9,y:-98.1,startPosition:15},5).to({regX:160.3,regY:12.4,x:-21.7,y:-93,startPosition:21},6).to({x:-22.1,startPosition:0},4).to({regY:12.3,x:-27,y:-94.3,startPosition:5},5).to({regY:12.4,x:-22.1,y:-93,startPosition:10},5).to({regY:12.3,x:-28.1,y:-92.8,startPosition:15},5).to({regY:12.4,x:-22.1,y:-93,startPosition:20},5).to({regY:12.3,x:-28.1,y:-92.8,startPosition:0},5).to({regY:12.2,x:-19.8,y:-94.8,startPosition:5},5).to({x:-19.2,startPosition:11},6).wait(15));

	// 图层 5
	this.instance_1 = new lib.li_1_72_18029复制5("synched",1);
	this.instance_1.setTransform(8.8,-96.3,0.905,0.602,0,0,0,178.8,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:5},4).to({x:12.7,y:-103.3,startPosition:12},7).to({x:8,y:-98.7,startPosition:18},6).to({x:12.4,y:-100.5,startPosition:0},7).to({x:10.1,y:-99.4,startPosition:7},7).to({startPosition:12},80).to({x:14.2,y:-103.7,startPosition:17},5).to({x:13.9,y:-90.6,startPosition:23},6).to({regY:9.9,x:10.5,y:-96.1,startPosition:5},7).to({startPosition:10},55).to({x:23.1,y:-99.5,startPosition:15},5).to({regX:178.7,regY:10,scaleX:0.76,scaleY:0.6,skewX:-3.7,skewY:-4.7,x:17.3,y:-112.6,startPosition:24},6).to({x:17.4,y:-114},4).to({regX:178.8,regY:9.8,scaleX:0.78,skewX:-3,skewY:-3.9,x:17,y:-111.8,startPosition:3},5).to({regX:178.7,regY:10,scaleX:0.81,scaleY:0.6,skewX:-2.3,skewY:-3,x:18.8,y:-114.9,startPosition:9},5).to({regX:178.8,regY:9.8,scaleX:0.83,skewX:-1.6,skewY:-2.2,x:18.5,y:-112.7,startPosition:15},5).to({scaleX:0.86,skewX:-0.8,skewY:-1.4,x:21.2,y:-116.3,startPosition:21},5).to({scaleX:0.83,skewX:-1.6,skewY:-2.2,x:18.5,y:-112.7,startPosition:15},5).to({regY:10,scaleX:0.91,skewX:0,skewY:0,x:17,y:-88.1,startPosition:12},5).to({x:7.6,y:-96.3,startPosition:18},6).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.8,-101.9,312.8,162);


(lib.li_1_98_68273复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.instance = new lib.li_1_73_72680复制2("synched",0);
	this.instance.setTransform(-70.4,60.3,0.905,0.602,0,0.4,0,104.7,269.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:13},13).to({x:-74.9,startPosition:18},5).to({x:-71.1,y:39.4,startPosition:0},7).to({x:-77,y:47.8,startPosition:6},6).to({x:-69.9,y:57.6,startPosition:13},7).to({x:-73.5,y:54.4,startPosition:20},7).to({skewX:0.3,startPosition:13},43).to({skewX:0.4,x:-77,y:56.8,startPosition:18},5).to({x:-71.1,y:58.5,startPosition:24},6).to({x:-70.2,y:57.7,startPosition:6},7).wait(34));

	// 图层 5
	this.instance_1 = new lib.li_1_72_18029复制2("synched",0);
	this.instance_1.setTransform(9.5,-95.4,0.905,0.602,0,0.5,0,178.7,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:13},13).to({x:14,startPosition:18},5).to({x:18.9,y:-116.4,startPosition:0},7).to({x:17.1,y:-106.4,startPosition:6},6).to({x:10.5,y:-97.2,startPosition:13},7).to({x:14.1,y:-102,startPosition:20},7).to({skewX:0.3,x:14,startPosition:13},43).to({skewX:0.5,x:17.2,y:-99.1,startPosition:18},5).to({x:8.8,y:-92.5,startPosition:24},6).to({x:10.6,y:-94.1,startPosition:6},7).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.5,-102.8,314.4,164.1);


(lib.li_1_98_68273复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.instance = new lib.li_1_73_72680复制("synched",0);
	this.instance.setTransform(-70.4,60.3,0.905,0.602,0,0.4,0,104.7,269.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// 图层 5
	this.instance_1 = new lib.li_1_72_18029复制("synched",0);
	this.instance_1.setTransform(9.5,-95.4,0.905,0.602,0,0.5,0,178.7,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.5,-102.8,314.4,164.1);


(lib.li_1_98_48893复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 4
	this.instance = new lib.li_1_99_62310复制4("synched",0);
	this.instance.setTransform(84.1,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.7,startPosition:16},16).to({y:19,startPosition:34},18).wait(1));

	// 补间 5
	this.instance_1 = new lib.li_1_103_88043复制4("synched",0);
	this.instance_1.setTransform(90,30,1,1,0,0,0,-33.1,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-65.4,scaleX:1.06,skewX:-2.7,skewY:-4.7,x:90.4,y:29.6},16).to({regY:-65.2,scaleX:1,skewX:0,skewY:0,x:90,y:30},18).wait(1));

	// 补间 6
	this.instance_2 = new lib.li_1_104_15209复制4("synched",0);
	this.instance_2.setTransform(75.4,26,1,1,0,0,0,33.6,-71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:33.8,scaleX:1.02,skewX:2.5,skewY:4.5,y:25.7},16).to({regX:33.6,scaleX:1,skewX:0,skewY:0,y:26},18).wait(1));

	// 补间 7
	this.instance_3 = new lib.li_1_105_87424复制4("synched",0);
	this.instance_3.setTransform(84.7,30,1,1,0,0,0,-1.2,-89.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-1.3,scaleX:1.04,scaleY:0.99,rotation:-2},16).to({regX:-1.2,scaleX:1,scaleY:1,rotation:0},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,164.8,215);


(lib.li_1_98_48893复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 4
	this.instance = new lib.li_1_99_62310复制("synched",0);
	this.instance.setTransform(84.1,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.7,startPosition:20},20).to({y:19,startPosition:5},20).wait(1));

	// 补间 5
	this.instance_1 = new lib.li_1_103_88043复制("synched",0);
	this.instance_1.setTransform(90,30,1,1,0,0,0,-33.1,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-65.4,scaleX:1.06,skewX:-2.7,skewY:-4.7,x:90.4,y:29.6},20).to({regY:-65.2,scaleX:1,skewX:0,skewY:0,x:90,y:30},20).wait(1));

	// 补间 6
	this.instance_2 = new lib.li_1_104_15209复制("synched",0);
	this.instance_2.setTransform(75.4,26,1,1,0,0,0,33.6,-71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:33.8,scaleX:1.02,skewX:2.5,skewY:4.5,y:25.7},20).to({regX:33.6,scaleX:1,skewX:0,skewY:0,y:26},20).wait(1));

	// 补间 7
	this.instance_3 = new lib.li_1_105_87424复制("synched",0);
	this.instance_3.setTransform(84.7,30,1,1,0,0,0,-1.2,-89.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-1.3,scaleX:1.04,scaleY:0.99,rotation:-2},20).to({regX:-1.2,scaleX:1,scaleY:1,rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,164.8,215);


(lib.li_1_89_40717复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		///*  this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// 图层 1
	this.instance = new lib.li_1_123_26006复制("single",0);
	this.instance.setTransform(13.7,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({mode:"synched",startPosition:21},0).wait(18).to({mode:"single",startPosition:0},0).wait(8).to({mode:"synched",startPosition:21},0).wait(37).to({mode:"single",startPosition:0},0).wait(8).to({mode:"synched",startPosition:21},0).wait(40).to({mode:"single",startPosition:0},0).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,1.2,32.4,6.1);


(lib.li_1_88_1074复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_79_44290复制("single",0);
	this.instance.setTransform(141.6,63.3,1,1,0,0,0,141.6,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({mode:"synched"},0).wait(6).to({mode:"single",startPosition:5},0).wait(3).to({mode:"synched"},0).wait(6).to({mode:"single",startPosition:0},0).wait(65).to({mode:"synched"},0).wait(11).to({mode:"single"},0).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283,130);


(lib.li_1_87_62393复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_249 = function() {
		///*  this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(249).call(this.frame_249).wait(1));

	// 图层 1
	this.instance = new lib.li_1_88_67447复制4("single",0);
	this.instance.setTransform(13.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({mode:"synched",startPosition:4},0).wait(18).to({mode:"single",startPosition:0},0).wait(11).to({mode:"synched",startPosition:21},0).wait(27).to({mode:"single",startPosition:0},0).wait(5).to({mode:"synched",startPosition:3},0).wait(35).to({mode:"single",startPosition:0},0).wait(10).to({mode:"synched",startPosition:21},0).wait(53).to({mode:"single",startPosition:0},0).wait(18).to({mode:"synched",startPosition:3},0).wait(35).to({mode:"single",startPosition:0},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,1.5,32.4,6.1);


(lib.li_1_87_62393复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_88_67447复制("single",0);
	this.instance.setTransform(13.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(246));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,1.5,32.4,6.1);


(lib.li_1_81_47533复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_82_82770复制4("synched",0);
	this.instance.setTransform(80,22.1,1,1,0,0,0,17.3,-50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.2,regY:-50.1,rotation:-1.9,y:22.2},18).to({regX:17.3,regY:-50.2,rotation:0,y:22.1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,129,152);


(lib.li_1_81_47533复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_82_82770复制("synched",0);
	this.instance.setTransform(80,22.1,1,1,0,0,0,17.3,-50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.2,rotation:-2.8},20).to({regX:17.3,rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,129,152);


(lib.li_1_80_27095复制3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{中间:0});

	// 图层 1
	this.instance = new lib.li_1_81_47533复制4("single",0);
	this.instance.setTransform(0,0,1,1,0,0,0,62.7,72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-72.3,129,152);


(lib.li_1_80_6083复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 4
	this.instance = new lib.li_1_100_73020复制("synched",0);
	this.instance.setTransform(84.1,20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:19,startPosition:16},16).to({y:20.3,startPosition:34},18).wait(1));

	// 补间 5
	this.instance_1 = new lib.li_1_101_64517复制("synched",0);
	this.instance_1.setTransform(90,31.3,1,1,0,0,0,-33.1,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-65.4,scaleX:1.06,skewX:-2.7,skewY:-4.7,x:90.4,y:30.9},16).to({regY:-65.2,scaleX:1,skewX:0,skewY:0,x:90,y:31.3},18).wait(1));

	// 补间 6
	this.instance_2 = new lib.li_1_102_8710复制("synched",0);
	this.instance_2.setTransform(75.4,27.3,1,1,0,0,0,33.6,-71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:33.8,scaleX:1.02,skewX:2.5,skewY:4.5,y:27},16).to({regX:33.6,scaleX:1,skewX:0,skewY:0,y:27.3},18).wait(1));

	// 补间 7
	this.instance_3 = new lib.li_1_103_7055复制("synched",0);
	this.instance_3.setTransform(84.7,31.3,1,1,0,0,0,-1.2,-89.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-1.3,scaleX:1.04,scaleY:0.99,rotation:-2},16).to({regX:-1.2,scaleX:1,scaleY:1,rotation:0},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0.3,164.8,215);


(lib.li_1_79_37615复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.li_1_80_27095复制3("synched",0);
	this.instance.setTransform(16.1,-50.7,1,1,0,0,0,16,-50.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:4},4).to({scaleY:1,skewX:5.4,skewY:3.1,y:-50.6,startPosition:11},7).to({regX:15.9,regY:-50.4,skewX:-6.5,skewY:-4.4,x:16.3,y:-50.7,startPosition:17},6).to({regX:16,regY:-50.2,scaleY:1,skewX:3.3,skewY:2.5,x:16.1,y:-50.6,startPosition:24},7).to({regY:-50.3,skewX:0,skewY:0,y:-50.7,startPosition:31},7).to({startPosition:11},80).to({scaleY:1,skewX:5.4,skewY:3.1,y:-50.6,startPosition:18},7).to({regX:15.9,regY:-50.4,skewX:-6.5,skewY:-4.4,x:16.3,y:-50.7,startPosition:24},6).to({regX:16,regY:-50.2,scaleY:1,skewX:3.3,skewY:2.5,x:16.1,y:-50.6,startPosition:31},7).to({regY:-50.3,skewX:0,skewY:0,y:-50.7,startPosition:38},7).to({startPosition:84},46).to({scaleY:1,skewX:5.4,skewY:3.1,y:-50.6,startPosition:89},5).to({regX:15.9,regY:-50.4,skewX:-6.5,skewY:-4.4,x:16.3,y:-50.7,startPosition:95},6).to({regX:16,regY:-50.2,scaleY:1,skewX:3.3,skewY:2.5,x:16.1,y:-50.6,startPosition:99},4).to({regX:15.9,regY:-50.4,scaleY:1,skewX:-6.5,skewY:-4.4,x:16.3,y:-50.7,startPosition:4},5).to({regX:16,regY:-50.2,scaleY:1,skewX:3.3,skewY:2.5,x:16.1,y:-50.6,startPosition:9},5).to({regX:15.9,regY:-50.4,scaleY:1,skewX:-6.5,skewY:-4.4,x:16.3,y:-50.7,startPosition:14},5).to({regX:16,regY:-50.2,scaleY:1,skewX:3.3,skewY:2.5,x:16.1,y:-50.6,startPosition:19},5).to({regX:15.9,regY:-50.4,scaleY:1,skewX:-6.5,skewY:-4.4,x:16.3,y:-50.7,startPosition:24},5).to({regX:16,regY:-50.3,skewX:4.4,skewY:2.4,x:16.1,startPosition:29},5).to({regX:15.9,scaleY:1,skewX:-1.9,skewY:-1.2,x:16.3,startPosition:35},6).to({regX:16,skewX:0,skewY:0,x:16.1,startPosition:96},7).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,-72.7,129.4,152);


(lib.li_1_79_37615复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.li_1_81_47533复制("synched",0);
	this.instance.setTransform(0.1,-0.4,1,1,0,0,0,62.7,72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},81).wait(348));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,-72.7,129.4,152);


(lib.li_1_76_49328复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_77_74510复制4("single",0);
	this.instance.setTransform(141.6,63.3,1,1,0,0,0,141.6,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({mode:"synched",loop:false},0).wait(48).to({startPosition:0},0).wait(57).to({startPosition:0},0).wait(67).to({startPosition:0},0).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283,130);


(lib.li_1_76_49328复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_77_74510复制("single",0);
	this.instance.setTransform(141.6,63.3,1,1,0,0,0,141.6,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({mode:"synched",loop:false},0).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283,130);


(lib.li_1_75_7989复制4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_249 = function() {
		///*  this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(249).call(this.frame_249).wait(1));

	// 元件 8
	this.instance = new lib.li_1_76_49328复制4("synched",0);
	this.instance.setTransform(2.4,92.8,1,1,0,0,0,141.6,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250));

	// 图层 3
	this.instance_1 = new lib.li_1_79_37615复制4("synched",0);
	this.instance_1.setTransform(0,-140,1,1,0,0,0,-2.1,-60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250));

	// 图层 8
	this.instance_2 = new lib.li_1_85_81076复制4("synched",0);
	this.instance_2.setTransform(2.7,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(250));

	// 图层 6
	this.instance_3 = new lib.li_1_86_25950复制4("synched",0);
	this.instance_3.setTransform(3.2,154.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(250));

	// 图层 7
	this.instance_4 = new lib.li_1_87_62393复制4("synched",0);
	this.instance_4.setTransform(3.2,187.4,1,1,0,0,0,13.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(250));

	// 图层 9
	this.instance_5 = new lib.li_1_89_32610复制4("synched",0);
	this.instance_5.setTransform(1.8,106.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(250));

	// 图层 4
	this.instance_6 = new lib.li_1_91_54753复制5("synched",0);
	this.instance_6.setTransform(80.1,-60.7,1,1,6.2,0,0,4,36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},4).to({rotation:1,x:79.8,y:-56.5},7).to({rotation:6.2,x:80.1,y:-60.7},6).to({rotation:1,x:79.8,y:-56.5},7).to({rotation:6.2,x:80.1,y:-60.7},7).to({regY:36.6,rotation:6,y:-60.8},80).to({regY:36.7,rotation:1,x:79.8,y:-56.5},5).to({rotation:6.2,x:80.1,y:-60.7},6).to({rotation:1,x:79.8,y:-56.5},7).to({rotation:6.2,x:80.1,y:-60.7},7).to({startPosition:0},48).to({rotation:1,x:79.8,y:-56.5},5).to({regY:36.8,rotation:-4.7,x:79.9},6).to({regY:36.6,rotation:0,x:80,y:-60},4).to({regY:36.7,rotation:5.9,x:79},5).to({regY:36.6,rotation:0,x:80},5).to({regY:36.7,rotation:5.9,x:79},5).to({regY:36.6,rotation:0,x:80},5).to({regY:36.7,rotation:5.9,x:79},5).to({regY:36.6,rotation:-7.4,x:79.4,y:-59.9},5).to({regY:36.7,rotation:6.2,x:80.1,y:-60.7},7).to({rotation:6.2},6).wait(8));

	// 图层 5
	this.instance_7 = new lib.li_1_92_48677复制5("synched",0);
	this.instance_7.setTransform(-68.7,-60.1,1,1,-6.7,0,0,6.2,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},4).to({regX:6.1,regY:34.3,rotation:8.9,x:-68,y:-55.7},7).to({regX:6.2,regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},6).to({regX:6.1,regY:34.3,rotation:8.9,x:-68,y:-55.7},7).to({regX:6.2,regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},7).to({rotation:-6.5},80).to({regX:6.1,regY:34.3,rotation:8.9,x:-68,y:-55.7},5).to({regX:6.2,regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},6).to({regX:6.1,regY:34.3,rotation:8.9,x:-68,y:-55.7},7).to({regX:6.2,regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},7).to({rotation:-6.7},48).to({regX:6.1,regY:34.3,rotation:8.9,x:-68,y:-55.7},5).to({regY:34.4,rotation:-5,x:-69.2,y:-56.6},6).to({regX:6.2,regY:34.5,rotation:0,x:-69.9,y:-59.9},4).to({rotation:-4.5,x:-69.1},5).to({rotation:0,x:-69.9},5).to({rotation:-4.5,x:-69.1},5).to({rotation:0,x:-69.9},5).to({rotation:-4.5,x:-69.1},5).to({rotation:7.7,x:-70.7,y:-59.1},5).to({regY:34.4,rotation:-6.7,x:-68.7,y:-60.1},7).to({rotation:-6.7},6).wait(8));

	// 图层 10
	this.instance_8 = new lib.li_1_93_50017复制4("synched",0);
	this.instance_8.setTransform(0,220,1,1,0,0,0,-3,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(250));

	// 图层 11
	this.instance_9 = new lib.li_1_94_61884复制5("synched",0);
	this.instance_9.setTransform(90.8,-44.2,1,1,6.2,0,0,-31.4,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},4).to({regY:69.6,rotation:3.5,x:92,y:-46.3},7).to({regY:69.7,rotation:6.2,x:90.8,y:-44.2},6).to({regY:69.6,rotation:3.5,x:92,y:-46.3},7).to({regY:69.7,rotation:6.2,x:90.8,y:-44.2},7).to({regY:69.6,rotation:6,y:-44.3},80).to({rotation:3.5,x:92,y:-46.3},5).to({regY:69.7,rotation:6.2,x:90.8,y:-44.2},6).to({regY:69.6,rotation:3.5,x:92,y:-46.3},7).to({regY:69.7,rotation:6.2,x:90.8,y:-44.2},7).to({startPosition:0},48).to({regY:69.6,rotation:3.5,x:92,y:-46.3},5).to({rotation:-2.3,x:92.9,y:-47.6},6).to({rotation:0,x:92.5,y:-44.7},4).to({regY:69.5,rotation:5.9,x:89.8,y:-43.6},5).to({regY:69.6,rotation:0,x:92.5,y:-44.7},5).to({regY:69.5,rotation:5.9,x:89.8,y:-43.6},5).to({regY:69.6,rotation:0,x:92.5,y:-44.7},5).to({regY:69.5,rotation:5.9,x:89.8,y:-43.6},5).to({regY:69.7,rotation:-7.4,x:93.8,y:-46.4},5).to({rotation:6.2,x:90.8,y:-44.2},7).to({rotation:6.2},6).wait(8));

	// 图层 12
	this.instance_10 = new lib.li_1_96_21902复制5("synched",0);
	this.instance_10.setTransform(-90.1,-46.8,1,1,-6.7,0,0,31.1,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},4).to({regX:31.2,regY:67.7,rotation:6.5,x:-90.9,y:-53.4},7).to({regX:31.1,regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},6).to({regX:31.2,regY:67.7,rotation:6.5,x:-90.9,y:-53.4},7).to({regX:31.1,regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},7).to({regX:31.2,rotation:-6.5},80).to({regY:67.7,rotation:6.5,x:-90.9,y:-53.4},5).to({regX:31.1,regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},6).to({regX:31.2,regY:67.7,rotation:6.5,x:-90.9,y:-53.4},7).to({regX:31.1,regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},7).to({rotation:-6.7},48).to({regX:31.2,regY:67.7,rotation:6.5,x:-90.9,y:-53.4},5).to({regX:31.1,regY:67.8,rotation:-7.4,x:-91,y:-48.7},6).to({regY:67.7,rotation:0,x:-92.7,y:-49.3},4).to({rotation:-4.5,x:-91,y:-47.6},5).to({rotation:0,x:-92.7,y:-49.3},5).to({rotation:-4.5,x:-91,y:-47.6},5).to({rotation:0,x:-92.7,y:-49.3},5).to({rotation:-4.5,x:-91,y:-47.6},5).to({rotation:7.7,x:-94.7,y:-51.7},5).to({regY:67.8,rotation:-6.7,x:-90.1,y:-46.8},7).to({rotation:-6.7},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.8,-230.6,413.9,458.4);


(lib.li_1_75_7989复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 8
	this.instance = new lib.li_1_76_49328复制("synched",0);
	this.instance.setTransform(2.4,92.8,1,1,0,0,0,141.6,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:90.5,startPosition:20},20).to({y:92.8,startPosition:40},20).to({y:90.5,startPosition:60},20).to({y:92.8,startPosition:80},20).wait(1));

	// 图层 3
	this.instance_1 = new lib.li_1_79_37615复制("synched",0);
	this.instance_1.setTransform(0,-140,1,1,0,0,0,-2.1,-60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-142.4,startPosition:20},20).to({y:-140,startPosition:40},20).to({y:-142.4,startPosition:60},20).to({y:-140,startPosition:80},20).wait(1));

	// 图层 8
	this.instance_2 = new lib.li_1_85_81076复制("synched",0);
	this.instance_2.setTransform(2.7,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:36.4},20).to({y:38.7},20).to({y:36.4},20).to({y:38.7},20).wait(1));

	// 图层 6
	this.instance_3 = new lib.li_1_86_25950复制("synched",0);
	this.instance_3.setTransform(3.2,154.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:151.8},20).to({y:154.1},20).to({y:151.8},20).to({y:154.1},20).wait(1));

	// 图层 7
	this.instance_4 = new lib.li_1_87_62393复制("synched",0);
	this.instance_4.setTransform(3.2,187.4,1,1,0,0,0,13.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:185,startPosition:20},20).to({y:187.4,startPosition:40},20).to({y:185,startPosition:60},20).to({y:187.4,startPosition:80},20).wait(1));

	// 图层 9
	this.instance_5 = new lib.li_1_89_32610复制("synched",0);
	this.instance_5.setTransform(1.8,106.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:104.6},20).to({y:106.9},20).to({y:104.6},20).to({y:106.9},20).wait(1));

	// 图层 4
	this.instance_6 = new lib.li_1_91_54753复制("synched",0);
	this.instance_6.setTransform(80.1,-60.7,1,1,6.2,0,0,4,36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:10.1,y:-56.8},20).to({rotation:6.2,y:-60.7},20).to({rotation:10.1,y:-56.8},20).to({rotation:6.2,y:-60.7},20).wait(1));

	// 图层 5
	this.instance_7 = new lib.li_1_92_48677复制("synched",0);
	this.instance_7.setTransform(-68.7,-60.1,1,1,-6.7,0,0,6.2,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.6,x:-67.6,y:-56.3},20).to({rotation:-6.7,x:-68.7,y:-60.1},20).to({rotation:-11.6,x:-67.6,y:-56.3},20).to({rotation:-6.7,x:-68.7,y:-60.1},20).wait(1));

	// 图层 10
	this.instance_8 = new lib.li_1_93_50017复制("synched",0);
	this.instance_8.setTransform(0,220,1,1,0,0,0,-3,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:222.4},20).to({y:220},20).to({y:222.4},20).to({y:220},20).wait(1));

	// 图层 11
	this.instance_9 = new lib.li_1_94_61884复制("synched",0);
	this.instance_9.setTransform(90.8,-44.2,1,1,6.2,0,0,-31.4,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:10.1,x:89.7,y:-39.6},20).to({rotation:6.2,x:90.8,y:-44.2},20).to({rotation:10.1,x:89.7,y:-39.6},20).to({rotation:6.2,x:90.8,y:-44.2},20).wait(1));

	// 图层 12
	this.instance_10 = new lib.li_1_96_21902复制("synched",0);
	this.instance_10.setTransform(-90.1,-46.8,1,1,-6.7,0,0,31.1,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.6,x:-87.7,y:-41.2},20).to({rotation:-6.7,x:-90.1,y:-46.8},20).to({rotation:-11.6,x:-87.7,y:-41.2},20).to({rotation:-6.7,x:-90.1,y:-46.8},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.8,-230.6,413.9,458.4);


(lib.li_1_74_57695复制3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_249 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(249).call(this.frame_249).wait(1));

	// 图层 7
	this.instance = new lib.li_1_113_78516复制4("synched",192);
	this.instance.setTransform(359.6,541.6,1.015,0.998,0,-76.2,-75.2,15.6,11.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(192).to({_off:false},0).to({regX:15.7,scaleX:1.02,scaleY:1.01,skewX:-101.4,skewY:-101,x:365.5,y:518,startPosition:195},3).to({regX:15.6,scaleX:1,skewX:-126.2,skewY:-126,x:363,y:519.2,startPosition:199},4).to({regX:15.7,regY:11.7,skewX:-91.5,skewY:-91.3,x:351.9,y:523.7,startPosition:204},5).to({regX:15.6,regY:11.8,skewX:-126.2,skewY:-126,x:363,y:519.2,startPosition:209},5).to({regX:15.7,regY:11.7,skewX:-91.5,skewY:-91.3,x:351.9,y:523.7,startPosition:214},5).to({regX:15.6,regY:11.8,skewX:-126.2,skewY:-126,x:363,y:519.2,startPosition:219},5).to({regX:15.7,regY:11.7,skewX:-91.5,skewY:-91.3,x:351.3,y:523.5,startPosition:224},5).to({scaleX:1.01,scaleY:1,rotation:-72.7,skewX:0,skewY:0,x:350.8,y:533,startPosition:225},1).to({_off:true},1).wait(24));

	// 图层 27
	this.instance_1 = new lib.li_1_75_7989复制4("synched",0);
	this.instance_1.setTransform(250,448.6,1,1,0,0,0,5.3,223.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:4},4).wait(1).to({regX:-1.5,regY:-8.2,rotation:-0.4,x:242.7,y:220.4,startPosition:5},0).wait(1).to({rotation:-0.8,x:242.3,y:224.2,startPosition:6},0).wait(1).to({rotation:-1.2,x:241.8,y:228.1,startPosition:7},0).wait(1).to({rotation:-1.6,x:241.3,y:231.9,startPosition:8},0).wait(1).to({rotation:-2,x:240.9,y:235.7,startPosition:9},0).wait(1).to({rotation:-2.4,x:240.4,y:239.6,startPosition:10},0).wait(1).to({regX:5.3,regY:223.7,rotation:-2.8,x:258,y:474.8,startPosition:11},0).wait(1).to({regX:-1.5,regY:-8.2,x:237.8,y:235.1,startPosition:12},0).wait(1).to({rotation:-2.9,x:235.6,y:226.8,startPosition:13},0).wait(1).to({rotation:-3,x:233.4,y:218.5,startPosition:14},0).wait(1).to({x:231.3,y:210.1,startPosition:15},0).wait(1).to({rotation:-3.1,x:229.1,y:201.8,startPosition:16},0).wait(1).to({regX:5.3,regY:223.8,rotation:-3.2,x:246.7,y:424.6,startPosition:17},0).wait(1).to({regX:-1.5,regY:-8.2,x:226.9,y:197.6,startPosition:18},0).wait(1).to({y:201.8,startPosition:19},0).wait(1).to({y:206.1,startPosition:20},0).wait(1).to({y:210.3,startPosition:21},0).wait(1).to({y:214.5,startPosition:22},0).wait(1).to({y:218.8,startPosition:23},0).wait(1).to({regX:5.3,regY:223.8,x:246.7,y:454.3,startPosition:24},0).wait(1).to({regX:-1.5,regY:-8.2,x:226.9,y:222.2,startPosition:25},0).wait(1).to({y:221.4,startPosition:26},0).wait(1).to({y:220.6,startPosition:27},0).wait(1).to({y:219.8,startPosition:28},0).wait(1).to({y:219,startPosition:29},0).wait(1).to({y:218.2,startPosition:30},0).wait(1).to({regX:5.3,regY:223.8,x:246.7,y:448.7,startPosition:31},0).to({startPosition:111},80).to({y:428.6,startPosition:116},5).to({rotation:-1,x:250.1,y:466.8,startPosition:122},6).wait(1).to({regX:-1.5,regY:-8.2,x:239.3,y:233.8,startPosition:123},0).wait(1).to({rotation:-0.8,x:240,y:230.7,startPosition:124},0).wait(1).to({rotation:-0.6,x:240.9,y:226.7,startPosition:125},0).wait(1).to({rotation:-0.3,x:241.8,y:222.7,startPosition:126},0).wait(1).to({rotation:-0.2,x:242.6,y:219.3,startPosition:127},0).wait(1).to({rotation:0,x:243.1,y:217.2,startPosition:128},0).wait(1).to({regX:5.3,regY:223.7,x:250,y:448.6,startPosition:129},0).to({startPosition:184},55).to({rotation:-2.8,x:258,y:474.8,startPosition:189},5).to({regY:223.8,rotation:3.7,x:267.2,y:441.2,startPosition:195},6).to({rotation:6,x:262.3,y:448.7,startPosition:199},4).to({rotation:2.3,x:253.8,y:448.6,startPosition:204},5).to({rotation:6,x:262.3,y:448.7,startPosition:209},5).to({rotation:2.3,x:253.8,y:448.6,startPosition:214},5).to({rotation:6,x:262.3,y:448.7,startPosition:219},5).to({rotation:2.3,x:253.8,y:448.6,startPosition:224},5).to({rotation:-1,x:250.1,y:466.8,startPosition:229},5).to({regY:223.7,rotation:0,x:250,y:448.6,startPosition:235},6).wait(15));

	// 图层 28
	this.instance_2 = new lib.li_1_98_48893复制4("synched",0);
	this.instance_2.setTransform(251,590,1,1.007,0,0,0,85,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:4},4).wait(1).to({regX:83.2,regY:103.8,scaleX:1.01,scaleY:1,rotation:0.2,x:249.7,y:665.1,startPosition:5},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:250.2,y:666.8,startPosition:6},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:250.7,y:668.5,startPosition:7},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:251.2,y:670.2,startPosition:8},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:251.7,y:671.9,startPosition:9},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:252.2,y:673.6,startPosition:10},0).wait(1).to({regX:85,regY:30.9,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:256.1,y:604.6,startPosition:11},0).wait(1).to({regX:83.2,regY:103.8,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:252.1,y:671.7,startPosition:12},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:251.5,y:668.1,startPosition:13},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,x:250.9,y:664.5,startPosition:14},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:250.3,y:660.9,startPosition:15},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:249.7,y:657.3,startPosition:16},0).wait(1).to({regX:85,regY:30.9,scaleX:0.98,scaleY:1.06,rotation:0,x:250.9,y:576.5,startPosition:17},0).wait(1).to({regX:83.2,regY:103.8,scaleX:0.99,scaleY:1.05,x:249.2,y:655.2,startPosition:18},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:656.9,startPosition:19},0).wait(1).to({scaleX:1,scaleY:1.03,y:658.5,startPosition:20},0).wait(1).to({scaleX:1,scaleY:1.02,y:660.1,startPosition:21},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:249.3,y:661.8,startPosition:22},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:663.4,startPosition:23},0).wait(1).to({regX:85.1,regY:30.9,scaleX:1.02,scaleY:1,x:251.2,y:592.3,startPosition:24},0).wait(1).to({regX:83.2,regY:103.8,scaleX:1.02,scaleY:1,x:249.3,y:664.8,startPosition:25},0).wait(1).to({scaleX:1.01,scaleY:1,y:664.6,startPosition:26},0).wait(1).to({scaleX:1.01,scaleY:1,x:249.2,y:664.3,startPosition:27},0).wait(1).to({scaleX:1.01,scaleY:1,y:664.1,startPosition:28},0).wait(1).to({scaleX:1.01,scaleY:1,y:663.8,startPosition:29},0).wait(1).to({scaleX:1,scaleY:1.01,y:663.6,startPosition:30},0).wait(1).to({regX:85,regY:30.9,scaleX:1,scaleY:1.01,x:251,y:590,startPosition:31},0).to({startPosition:6},80).to({scaleX:0.94,scaleY:1.06,x:250.7,y:576.6,startPosition:11},5).to({scaleX:1.05,scaleY:0.98,x:251.2,y:602.3,startPosition:17},6).wait(1).to({regX:83.2,regY:103.8,scaleX:1.05,scaleY:0.99,x:249.3,y:673.3,startPosition:18},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:671.6,startPosition:19},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:669.3,startPosition:20},0).wait(1).to({scaleX:1.02,scaleY:1,x:249.2,y:666.9,startPosition:21},0).wait(1).to({scaleX:1.01,scaleY:1,y:665,startPosition:22},0).wait(1).to({scaleX:1,scaleY:1.01,y:663.8,startPosition:23},0).wait(1).to({regX:85,regY:30.9,scaleX:1,scaleY:1.01,x:251,y:590,startPosition:24},0).to({startPosition:9},55).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:256.1,y:604.6,startPosition:14},5).to({regX:85.1,scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:257.8,y:583.8,startPosition:20},6).to({regX:85,scaleY:1.01,rotation:2.7,x:256.6,y:589.9,startPosition:24},4).to({rotation:1.5,x:251,startPosition:29},5).to({rotation:2.7,x:256.6,startPosition:34},5).to({rotation:1.5,x:251,startPosition:4},5).to({rotation:2.7,x:256.6,startPosition:9},5).to({rotation:1.5,x:251,startPosition:14},5).to({scaleX:1.05,scaleY:0.98,rotation:0,x:251.2,y:602.3,startPosition:19},5).to({scaleX:1,scaleY:1.01,x:251,y:590,startPosition:25},6).wait(15));

	// 图层 32
	this.instance_3 = new lib.li_1_106_54535复制4("synched",0);
	this.instance_3.setTransform(250.1,578.1,1,1.007,0,0,0,1.6,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},4).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.01,scaleY:1,rotation:0.2,x:249.2,y:556.6},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:250,y:558.8},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:250.8,y:561.1},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:251.7,y:563.4},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:252.5,y:565.7},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:253.3,y:567.9},0).wait(1).to({regX:1.6,regY:23.8,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:255.4,y:593.2},0).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:253,y:565.1},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:252,y:559.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:250.9,y:554.7},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:249.8,y:549.5},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:248.7,y:544.3},0).wait(1).to({regX:1.5,regY:23.8,scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:249.9,y:563.9},0).wait(1).to({regX:-0.1,regY:0.3,scaleX:0.99,scaleY:1.05,x:247.7,y:541.6},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,y:544.2},0).wait(1).to({scaleX:1,scaleY:1.03,x:247.8,y:546.8},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,y:549.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:551.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:554.5},0).wait(1).to({regX:1.6,regY:23.9,scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:250.2,y:580.5},0).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.02,scaleY:1,x:247.8,y:556.6},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,y:556.2},0).wait(1).to({scaleX:1.01,scaleY:1,y:555.8},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:555.4},0).wait(1).to({scaleX:1.01,scaleY:1,y:555.1},0).wait(1).to({scaleX:1,scaleY:1.01,y:554.7},0).wait(1).to({regX:1.6,regY:23.9,scaleX:1,scaleY:1.01,x:250.1,y:578},0).to({startPosition:0},80).to({scaleX:0.94,scaleY:1.06,rotation:0,skewX:-1.3,skewY:-1.7,x:249.8,y:564},5).to({regX:1.5,scaleX:1.05,scaleY:0.98,skewX:0,skewY:0,x:250.2,y:590.6},6).wait(1).to({regX:-0.1,regY:0.3,scaleX:1.05,scaleY:0.99,x:248.4,y:566.6},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:564.4},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:561.6},0).wait(1).to({scaleX:1.02,scaleY:1,y:558.7},0).wait(1).to({scaleX:1.01,scaleY:1,y:556.3},0).wait(1).to({scaleX:1,scaleY:1.01,y:554.8},0).wait(1).to({regX:1.6,regY:23.9,scaleX:1,scaleY:1.01,x:250.1,y:578.1},0).to({startPosition:0},55).to({regY:23.8,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:255.4,y:593.2},5).to({regY:23.9,scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:257.6,y:571.6},6).to({scaleY:1.01,rotation:2.7,x:256.2,y:578},4).to({regY:23.8,rotation:1.5,x:250.4,y:577.9},5).to({regY:23.9,rotation:2.7,x:256.2,y:578},5).to({regY:23.8,rotation:1.5,x:250.4,y:577.9},5).to({regY:23.9,rotation:2.7,x:256.2,y:578},5).to({regY:23.8,rotation:1.5,x:250.4,y:577.9},5).to({regX:1.5,regY:23.9,scaleX:1.05,scaleY:0.98,rotation:0,x:250.2,y:590.6},5).to({regX:1.6,scaleX:1,scaleY:1.01,x:250.1,y:578.1},6).wait(15));

	// 元件 5
	this.instance_4 = new lib.li_1_98_68273复制5("synched",0);
	this.instance_4.setTransform(256.6,612,0.913,1.007,0,0,0,3.9,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:4},4).wait(1).to({regX:-5.9,regY:-28.8,scaleX:0.92,scaleY:1,rotation:0.2,x:248.8,y:455,startPosition:5},0).wait(1).to({scaleX:0.92,scaleY:1,rotation:0.4,x:249.9,y:457.7,startPosition:6},0).wait(1).to({scaleX:0.93,scaleY:0.99,rotation:0.5,x:251,y:460.5,startPosition:7},0).wait(1).to({scaleX:0.94,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:252.2,y:463.4,startPosition:8},0).wait(1).to({scaleX:0.94,scaleY:0.98,skewX:0.9,skewY:0.8,x:253.3,y:466.1,startPosition:9},0).wait(1).to({scaleX:0.95,scaleY:0.98,skewX:1.1,skewY:1,x:254.3,y:468.9,startPosition:10},0).wait(1).to({regX:3.9,regY:129.8,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:1.1,x:261.5,y:625.9,startPosition:11},0).wait(1).to({regX:-5.9,regY:-28.8,scaleX:0.94,scaleY:0.99,skewX:0.8,skewY:0.7,x:253.8,y:465.2,startPosition:12},0).wait(1).to({scaleX:0.93,scaleY:1,skewX:0.4,skewY:0.2,x:252,y:458.5,startPosition:13},0).wait(1).to({scaleX:0.93,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:250.1,y:451.8,startPosition:14},0).wait(1).to({scaleX:0.92,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:248.3,y:445.2,startPosition:15},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewX:-1,skewY:-1.1,x:246.4,y:438.5,startPosition:16},0).wait(1).to({regX:4,regY:129.9,scaleX:0.9,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:257.4,y:599.4,startPosition:17},0).wait(1).to({regX:-5.9,regY:-28.8,scaleX:0.9,scaleY:1.05,x:244.4,y:435.3,startPosition:18},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewY:-1.5,y:438.7,startPosition:19},0).wait(1).to({scaleX:0.91,scaleY:1.03,y:442.1,startPosition:20},0).wait(1).to({scaleX:0.92,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,y:445.6,startPosition:21},0).wait(1).to({scaleX:0.92,scaleY:1.01,y:448.9,startPosition:22},0).wait(1).to({scaleX:0.93,scaleY:1.01,y:452.4,startPosition:23},0).wait(1).to({regX:3.9,regY:129.9,scaleX:0.93,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:257.8,y:613.9,startPosition:24},0).wait(1).to({regX:-5.9,regY:-28.8,scaleX:0.93,scaleY:1,x:244.4,y:455.3,startPosition:25},0).wait(1).to({scaleX:0.93,scaleY:1,skewY:-1.5,y:454.8,startPosition:26},0).wait(1).to({scaleX:0.92,scaleY:1,y:454.3,startPosition:27},0).wait(1).to({scaleX:0.92,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:453.8,startPosition:28},0).wait(1).to({scaleX:0.92,scaleY:1,y:453.3,startPosition:29},0).wait(1).to({scaleX:0.92,scaleY:1.01,y:452.8,startPosition:30},0).wait(1).to({regX:3.9,regY:129.9,scaleX:0.91,scaleY:1.01,x:257.5,y:611.8,startPosition:31},0).to({startPosition:111},80).to({scaleX:0.86,scaleY:1.06,rotation:0,skewX:-1.3,skewY:-1.7,x:256.8,y:599.5,startPosition:116},5).to({scaleX:0.91,scaleY:1.01,skewX:0,skewY:0,x:256.6,y:612,startPosition:122},6).wait(1).to({regX:-5.9,regY:-28.8,x:247.7,y:452.2,startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({regX:3.9,regY:129.9,x:256.6,y:612,startPosition:129},0).to({startPosition:184},55).to({regY:129.8,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:1.1,x:261.5,y:625.9,startPosition:189},5).to({regY:130,scaleX:0.91,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:261.7,y:606.5,startPosition:195},6).to({regY:129.9,scaleY:1.01,rotation:2.7,x:261.1,y:612.2,startPosition:199},4).to({rotation:1.5,x:256.1,y:612.1,startPosition:204},5).to({rotation:2.7,x:261.1,y:612.2,startPosition:209},5).to({rotation:1.5,x:256.1,y:612.1,startPosition:214},5).to({rotation:2.7,x:261.1,y:612.2,startPosition:219},5).to({rotation:1.5,x:256.1,y:612.1,startPosition:224},5).to({rotation:0,x:256.6,y:612,startPosition:229},5).to({startPosition:235},6).wait(15));

	// 图层 34
	this.instance_5 = new lib.li_1_110_93823复制4("synched",0);
	this.instance_5.setTransform(175.5,567.4,0.999,1.005,0,-11.5,-11.8,78.9,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,startPosition:4},4).wait(1).to({regX:44.5,regY:60.9,scaleX:1,scaleY:1,skewX:-9,skewY:-9.2,x:146.7,y:615.6,startPosition:5},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-6.4,skewY:-6.6,x:143.2,y:615.4,startPosition:6},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:-3.9,skewY:-4.1,x:139.8,y:615.1,startPosition:7},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:-1.3,skewY:-1.5,x:136.4,y:614.7,startPosition:8},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:1.2,skewY:1,x:133.1,y:614.2,startPosition:9},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:3.7,skewY:3.6,x:130,y:613.5,startPosition:10},0).wait(1).to({regX:78.9,regY:18.9,scaleX:1.04,scaleY:0.97,skewX:6.3,skewY:6.2,x:167,y:576,startPosition:11},0).wait(1).to({regX:44.5,regY:60.9,scaleX:1.03,scaleY:0.99,skewX:2,skewY:1.5,x:132.2,y:613,startPosition:12},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:-2.3,skewY:-3.1,x:137.8,y:612.9,startPosition:13},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-6.6,skewY:-7.8,x:143.7,y:612.6,startPosition:14},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-10.8,skewY:-12.4,x:150,y:611.9,startPosition:15},0).wait(1).to({scaleX:1,scaleY:1.04,skewX:-15.1,skewY:-17.1,x:156.4,y:610.9,startPosition:16},0).wait(1).to({regX:78.9,regY:18.9,scaleX:0.99,scaleY:1.05,skewX:-19.4,skewY:-21.8,x:180,y:555.4,startPosition:17},0).wait(1).to({regX:44.5,regY:60.9,scaleX:0.99,scaleY:1.04,skewX:-17.6,skewY:-19.7,x:159.8,y:610.8,startPosition:18},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-15.9,skewY:-17.6,x:156.6,y:611.9,startPosition:19},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-14.2,skewY:-15.5,x:153.4,y:613.1,startPosition:20},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-12.4,skewY:-13.4,x:150.3,y:614.1,startPosition:21},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-10.7,skewY:-11.3,x:147.3,y:615.1,startPosition:22},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-9,skewY:-9.2,x:144.3,y:616.1,startPosition:23},0).wait(1).to({regX:78.9,regY:18.9,scaleX:1.02,scaleY:1,skewX:-7.2,skewY:-7.1,x:170.8,y:571.3,startPosition:24},0).wait(1).to({regX:44.5,regY:60.9,scaleX:1.02,scaleY:1,skewX:-8.1,skewY:-8,x:142.7,y:617.3,startPosition:25},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-8.9,skewX:0,skewY:0,x:144.1,y:617.5,startPosition:26},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-9.7,x:145.5,y:617.7,startPosition:27},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0,skewX:-10.5,skewY:-10.6,x:147,y:617.9,startPosition:28},0).wait(1).to({scaleX:1,scaleY:1,skewX:-11.4,skewY:-11.5,x:148.4,y:618,startPosition:29},0).wait(1).to({scaleX:1,scaleY:1,skewX:-12.2,skewY:-12.4,x:149.9,y:618.2,startPosition:30},0).wait(1).to({regX:78.9,regY:18.9,scaleX:1,scaleY:1,skewX:-13,skewY:-13.3,x:175.3,y:569.3,startPosition:31},0).to({startPosition:11},80).to({regX:79,scaleX:0.94,scaleY:1.05,skewX:-1.4,skewY:-4.6,x:173,y:553.7,startPosition:16},5).to({regY:18.8,scaleX:1.05,scaleY:0.99,skewX:7.6,skewY:9.5,x:172.3,y:579.9,startPosition:22},6).wait(1).to({regX:44.5,regY:60.9,scaleX:1.04,scaleY:0.99,skewX:6.4,skewY:8.1,x:132.2,y:615.3,startPosition:23},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:3.2,skewY:4.6,x:135,y:615.8,startPosition:24},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-1,skewY:0,x:139,y:616.2,startPosition:25},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-5.2,skewY:-4.7,x:143.4,y:616.3,startPosition:26},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-8.6,skewY:-8.6,x:147,y:616.2,startPosition:27},0).wait(1).to({scaleX:1,scaleY:1,skewX:-10.8,skewY:-11,x:149.5,y:616,startPosition:28},0).wait(1).to({regX:78.9,regY:18.9,scaleX:1,scaleY:1.01,skewX:-11.6,skewY:-11.8,x:175.5,y:567.3,startPosition:29},0).to({startPosition:84},55).to({scaleX:1.04,scaleY:0.97,skewX:14,skewY:13.9,x:162.6,y:574.3,startPosition:89},5).to({regY:18.8,scaleX:1,scaleY:1.02,skewX:4,skewY:3.5,x:183.9,y:554.6,startPosition:95},6).to({regY:18.9,scaleY:1.01,skewX:-8.6,skewY:-8.8,x:181.8,y:563.6,startPosition:99},4).to({skewX:-1.6,skewY:-1.9,x:169.2,y:563,startPosition:4},5).to({skewX:-8.6,skewY:-8.8,x:181.8,y:563.6,startPosition:9},5).to({skewX:-1.6,skewY:-1.9,x:169.2,y:563,startPosition:14},5).to({skewX:-8.6,skewY:-8.8,x:181.8,y:563.6,startPosition:19},5).to({skewX:-1.6,skewY:-1.9,x:169.2,y:563,startPosition:24},5).to({regX:79,regY:18.8,scaleX:1.05,scaleY:0.99,skewX:7.6,skewY:9.5,x:172.3,y:579.9,startPosition:29},5).to({regX:78.9,regY:18.9,scaleX:1,scaleY:1.01,skewX:-16.6,skewY:-16.8,x:178.8,y:568.1,startPosition:35},6).wait(15));

	// 图层 36
	this.instance_6 = new lib.li_1_113_78516复制4("synched",0);
	this.instance_6.setTransform(328.6,558.9,0.999,1.006,0,8.5,8.8,15.7,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:1,startPosition:4},4).wait(1).to({regX:51,regY:63,scaleX:1,scaleY:1,skewX:4.5,skewY:5,x:362.3,y:614.6,startPosition:5},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.6,skewY:1.2,x:368.7,y:613.6,startPosition:6},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-3.4,skewY:-2.6,x:374.9,y:612.5,startPosition:7},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-7.4,skewY:-6.3,x:380.9,y:611,startPosition:8},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-11.4,skewY:-10.1,x:386.7,y:609.5,startPosition:9},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:-15.3,skewY:-13.9,x:392.4,y:607.6,startPosition:10},0).wait(1).to({regX:15.7,regY:11.9,scaleX:1.02,scaleY:0.99,skewX:-19.3,skewY:-17.6,x:346.8,y:568.5,startPosition:11},0).wait(1).to({regX:51,regY:63,scaleX:1.02,scaleY:0.99,skewX:-26.1,skewY:-25.1,x:397.9,y:593.5,startPosition:12},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:-32.8,skewY:-32.6,x:397.1,y:581.2,startPosition:13},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-39.5,skewY:-40.1,x:395.4,y:568.6,startPosition:14},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-46.3,skewY:-47.5,x:392.9,y:555.8,startPosition:15},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-53,skewY:-55,x:389.4,y:542.9,startPosition:16},0).wait(1).to({regX:15.6,regY:11.8,scaleX:1.04,scaleY:1,skewX:-59.7,skewY:-62.5,x:323.7,y:536.8,startPosition:17},0).wait(1).to({regX:51,regY:63,scaleX:1.03,scaleY:1,skewX:-61.8,skewY:-64,x:386.2,y:530.7,startPosition:18},0).wait(1).to({scaleX:1.02,scaleY:1.01,skewX:-63.9,skewY:-65.5,x:387.5,y:531.3,startPosition:19},0).wait(1).to({scaleX:1.02,scaleY:1.01,skewX:-65.9,skewY:-67,x:388.7,y:531.9,startPosition:20},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-68,skewY:-68.5,x:389.8,y:532.5,startPosition:21},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-70,skewY:-70,x:390.9,y:533.1,startPosition:22},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-72.1,skewY:-71.5,x:391.9,y:533.6,startPosition:23},0).wait(1).to({regX:15.6,regY:11.8,scaleX:0.99,scaleY:1.02,skewX:-74.1,skewY:-73,x:332.2,y:553.4,startPosition:24},0).wait(1).to({regX:51,regY:63,scaleX:0.99,scaleY:1.02,skewX:-73.3,skewY:-72.2,x:392.3,y:534.7,startPosition:25},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-72.4,skewY:-71.5,x:391.8,y:535.3,startPosition:26},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-71.5,skewY:-70.7,x:391.3,y:535.9,startPosition:27},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-70.6,skewY:-70,x:390.8,y:536.5,startPosition:28},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-69.7,skewY:-69.2,x:390.2,y:537.1,startPosition:29},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-68.9,skewY:-68.5,x:389.6,y:537.7,startPosition:30},0).wait(1).to({regX:15.6,regY:11.8,scaleX:1,scaleY:1,skewX:-68,skewY:-67.7,x:328,y:551.8,startPosition:31},0).to({startPosition:111},80).to({regY:11.7,scaleX:1.03,scaleY:0.96,skewX:-80.3,skewY:-84.6,x:331,y:532.4,startPosition:116},5).to({regX:15.7,scaleX:1.04,scaleY:0.97,skewX:-38.9,skewY:-41.6,x:336.6,y:548.4,startPosition:119},3).to({regY:11.8,scaleX:1.05,scaleY:0.99,skewX:2.5,skewY:1.4,x:342.1,y:567.3,startPosition:122},3).wait(1).to({regX:51,regY:63,scaleX:1.05,scaleY:0.99,skewX:2.9,skewY:1.9,x:375.6,y:618.5,startPosition:123},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:3.9,skewY:3.1,x:372.2,y:618,startPosition:124},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:5.2,skewY:4.7,x:367.6,y:617.2,startPosition:125},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:6.5,skewY:6.3,x:362.9,y:616.4,startPosition:126},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:7.6,skewX:0,skewY:0,x:359,y:615.8,startPosition:127},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:0,skewX:8.3,skewY:8.5,x:356.6,y:615.4,startPosition:128},0).wait(1).to({regX:15.7,regY:11.8,scaleX:1,skewX:8.6,skewY:8.8,x:328.6,y:558.9,startPosition:129},0).to({startPosition:184},55).to({scaleX:1.02,scaleY:0.99,skewX:-51,skewY:-49.3,x:354.1,y:563.5,startPosition:189},5).to({regY:11.9,scaleX:1.02,scaleY:1,skewX:-67.9,skewY:-66.7,x:357.5,y:549,startPosition:191},2).to({_off:true},1).wait(34).to({_off:false,regY:11.7,scaleX:1.02,skewX:-53.9,skewY:-54.2,x:350,y:542.3,startPosition:226},0).to({scaleX:1.03,scaleY:0.99,skewX:-35.1,skewY:-35.6,x:347.3,y:550.7,startPosition:227},1).to({regY:11.8,scaleX:1.05,scaleY:0.99,skewX:2.5,skewY:1.4,x:342.1,y:567.3,startPosition:229},2).to({scaleX:1,scaleY:1.01,skewX:14.7,skewY:14.9,x:325.7,y:560,startPosition:235},6).wait(15));

	// 图层 40
	this.instance_7 = new lib.li_1_118_87296复制5("synched",0);
	this.instance_7.setTransform(247.5,484.9,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},4).wait(1).to({regY:-0.2,scaleX:1.01,scaleY:1,rotation:0.2,x:248.5,y:487.3},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:249.5,y:490},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:250.5,y:492.6},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:251.5,y:495.2},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:252.6,y:497.9},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:253.6,y:500.5},0).wait(1).to({regY:0,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:254.6,y:503.4},0).wait(1).to({regY:-0.2,scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:253,y:497},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:251.4,y:490.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:249.8,y:484.6},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:248.2,y:478.4},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:246.6,y:472.2},0).wait(1).to({regY:0,scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:245.1,y:466.3},0).wait(1).to({regY:-0.2,scaleX:0.99,scaleY:1.05,y:469.2},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,y:472.3},0).wait(1).to({scaleX:1,scaleY:1.03,y:475.5},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,y:478.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:481.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:484.9},0).wait(1).to({regY:0,scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,y:488.3},0).wait(1).to({regY:-0.2,scaleX:1.02,scaleY:1,y:487.6},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,y:487.1},0).wait(1).to({scaleX:1.01,scaleY:1,y:486.7},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:486.2},0).wait(1).to({scaleX:1.01,scaleY:1,y:485.7},0).wait(1).to({scaleX:1,scaleY:1.01,y:485.3},0).wait(1).to({regY:0,scaleX:1,scaleY:1.01,y:485},0).to({startPosition:0},80).to({scaleX:0.94,scaleY:1.06,rotation:0,skewX:-1.3,skewY:-1.7,y:466.3},5).to({scaleX:1.05,scaleY:0.98,skewX:0,skewY:0,x:247.5,y:499.6},6).wait(1).to({regY:-0.2,scaleX:1.05,scaleY:0.99,y:498.4},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:496},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:492.8},0).wait(1).to({scaleX:1.02,scaleY:1,y:489.6},0).wait(1).to({scaleX:1.01,scaleY:1,y:487},0).wait(1).to({scaleX:1,scaleY:1.01,y:485.3},0).wait(1).to({regY:0,scaleX:1,scaleY:1.01,y:484.9},0).to({startPosition:0},55).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:254.6,y:503.4},5).to({scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:262,y:477.1},6).to({scaleY:1.01,rotation:2.7,x:258,y:484.9},4).to({rotation:1.5,x:250.2},5).to({rotation:2.7,x:258},5).to({rotation:1.5,x:250.2},5).to({rotation:2.7,x:258},5).to({rotation:1.5,x:250.2},5).to({scaleX:1.05,scaleY:0.98,rotation:0,x:247.5,y:499.6},5).to({scaleX:1,scaleY:1.01,y:484.9},6).wait(15));

	// 图层 38
	this.instance_8 = new lib.li_1_119_36977复制4("synched",0);
	this.instance_8.setTransform(317.1,490.8,0.999,1.006,0,8.5,8.8,-8.3,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:1},4).wait(1).to({regX:0.1,regY:0.2,scaleX:1,scaleY:1,skewX:7.5,skewY:7.7,x:322.4,y:527.5},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:6.5,skewY:6.7,x:324.5,y:529.6},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:5.5,skewY:5.6,x:326.5,y:531.8},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:4.6,skewY:4.6,x:328.5,y:533.9},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:3.6,skewX:0,skewY:0,x:330.5,y:536.1},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:2.6,x:332.5,y:538.2},0).wait(1).to({regX:-8.3,regY:-33.2,scaleX:1.04,scaleY:0.97,rotation:0,skewX:1.6,skewY:1.5,x:326.7,y:507.6},0).wait(1).to({regX:0.1,regY:0.2,scaleX:1.03,scaleY:0.99,skewX:2.2,skewY:2.2,x:331.9,y:534.6},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:2.7,skewY:2.9,x:329.3,y:529},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:3.3,skewY:3.7,x:326.7,y:523.4},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:3.9,skewY:4.4,x:324.1,y:517.8},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:4.4,skewY:5.1,x:321.4,y:512.1},0).wait(1).to({regX:-8.3,regY:-33.1,scaleX:0.98,scaleY:1.06,skewX:5,skewY:5.8,x:313.7,y:470.6},0).wait(1).to({regX:0.1,regY:0.2,scaleX:0.99,scaleY:1.05,skewX:4.4,skewY:5.1,x:319.7,y:509.1},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:3.7,skewY:4.4,x:320.5,y:511.8},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:3.1,skewY:3.7,x:321.3,y:514.5},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:2.5,skewY:2.9,x:322.2,y:517.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:1.8,skewY:2.2,x:323,y:519.9},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.2,skewY:1.5,x:323.8,y:522.5},0).wait(1).to({regX:-8.3,regY:-33.2,scaleX:1.02,scaleY:1,skewX:0.6,skewY:0.8,x:316.4,y:491.9},0).wait(1).to({regX:0.1,regY:0.2,scaleX:1.02,scaleY:1,skewX:0.9,skewY:1.1,x:324.2,y:525},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.2,skewY:1.4,x:323.8,y:524.7},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.5,skewY:1.7,x:323.3,y:524.4},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.8,skewY:2.1,x:322.9,y:524.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:2.2,skewY:2.4,x:322.5,y:523.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:2.5,skewY:2.7,x:322.1,y:523.4},0).wait(1).to({regX:-8.3,regY:-33.1,scaleX:1,scaleY:1,skewX:2.8,skewY:3,x:314.9,y:489.2},0).to({startPosition:0},80).to({regY:-33.2,scaleX:0.94,scaleY:1.06,skewX:-4.5,skewY:-3.5,x:311,y:468.6},5).to({regY:-33.3,scaleX:1.05,scaleY:0.99,skewX:2.2,skewY:1.2,x:321.4,y:502.8},6).wait(1).to({regX:0.1,regY:0.2,scaleX:1.05,scaleY:0.99,skewX:2.6,skewY:1.6,x:328.4,y:535.4},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:3.6,skewY:2.9,x:327,y:533.6},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:5,skewY:4.5,x:325.2,y:531.3},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:6.4,skewY:6.2,x:323.3,y:529},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:7.6,skewX:0,skewY:0,x:321.7,y:527.1},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:0,skewX:8.3,skewY:8.5,x:320.7,y:525.8},0).wait(1).to({regX:-8.3,regY:-33.3,scaleX:1,skewX:8.6,skewY:8.8,x:317.2,y:490.8},0).to({startPosition:0},55).to({regY:-33.2,scaleX:1.04,scaleY:0.97,skewX:-5.1,skewY:-5.2,x:327.2,y:505.5},5).to({regY:-33.3,scaleX:1,scaleY:1.02,skewX:-31.6,skewY:-32.3,x:318.3,y:474.6},6).to({regY:-33.4,scaleX:1,scaleY:1.01,skewX:-37.8,skewY:-37.5,x:312.5,y:480.3},4).to({skewX:-29.5,skewY:-29.3,x:304.7,y:479.1},5).to({skewX:-37.8,skewY:-37.5,x:312.5,y:480.3},5).to({skewX:-29.5,skewY:-29.3,x:304.7,y:479.1},5).to({skewX:-37.8,skewY:-37.5,x:312.5,y:480.3},5).to({skewX:-29.5,skewY:-29.3,x:304.7,y:479.1},5).to({regY:-33.3,scaleX:1.05,scaleY:0.99,skewX:2.2,skewY:1.2,x:321.4,y:502.8},5).to({regY:-33.2,scaleX:1,scaleY:1.01,skewX:10.7,skewY:11,x:316.9,y:491.6},6).wait(15));

	// 图层 39
	this.instance_9 = new lib.li_1_120_90830复制4("synched",0);
	this.instance_9.setTransform(190.6,479.5,0.999,1.005,0,-11.5,-11.8,23.8,-43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:23.7,scaleX:1,scaleY:1,x:190.5,y:479.6},4).wait(1).to({regX:0.5,regY:0.5,scaleX:1,scaleY:1,skewX:-10.5,skewY:-10.6,x:176.2,y:528.9},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-9.5,skewY:-9.4,x:175.8,y:530.7},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:-8.4,skewY:-8.1,x:175.4,y:532.5},0).wait(1).to({scaleX:1.02,scaleY:0.99,skewX:-7.4,skewY:-6.9,x:175.1,y:534.2},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:-6.4,skewY:-5.7,x:174.7,y:535.9},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:-5.4,skewY:-4.5,x:174.4,y:537.5},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:1.04,scaleY:0.97,skewX:-4.3,skewY:-3.3,x:195.1,y:495.7},0).wait(1).to({regX:0.5,regY:0.5,scaleX:1.03,scaleY:0.98,skewX:-6,skewY:-5.5,x:174.6,y:535.1},0).wait(1).to({scaleX:1.02,scaleY:1,rotation:-7.7,skewX:0,skewY:0,x:175.2,y:530.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0,skewX:-9.4,skewY:-10,x:175.9,y:526.5},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-11.2,skewY:-12.2,x:176.6,y:522.1},0).wait(1).to({scaleX:1,scaleY:1.04,skewX:-12.9,skewY:-14.4,x:177.3,y:517.7},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:0.99,scaleY:1.05,skewX:-14.6,skewY:-16.7,x:188.7,y:462.3},0).wait(1).to({regX:0.5,regY:0.5,scaleX:0.99,scaleY:1.04,skewX:-14.1,skewY:-15.8,x:177.4,y:515.8},0).wait(1).to({scaleX:1,scaleY:1.04,skewX:-13.6,skewY:-15,x:176.5,y:518.4},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-13.1,skewY:-14.1,x:175.6,y:521.1},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-12.6,skewY:-13.3,x:174.8,y:523.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-12.1,skewY:-12.4,x:174,y:526.3},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-11.6,skewX:0,skewY:0,x:173.2,y:528.9},0).wait(1).to({regX:23.8,regY:-43,scaleX:1.02,scaleY:1,rotation:0,skewX:-11.1,skewY:-10.7,x:187.3,y:484.4},0).wait(1).to({regX:0.5,regY:0.5,scaleX:1.01,scaleY:1,skewX:-11.4,skewY:-11.1,x:172.8,y:531},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-11.6,skewY:-11.4,x:173.2,y:530.7},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-11.9,skewY:-11.8,x:173.6,y:530.4},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-12.2,skewX:0,skewY:0,x:174,y:530},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:-12.5,skewY:-12.5,x:174.4,y:529.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-12.7,skewY:-12.9,x:174.8,y:529.3},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:1,scaleY:1,skewX:-13,skewY:-13.3,x:188.1,y:481.1},0).to({startPosition:0},80).to({scaleX:0.94,scaleY:1.05,skewX:-7.4,skewY:-10.5,x:191.7,y:462.2},5).to({scaleX:1.05,scaleY:0.99,skewX:-14.6,skewY:-12.7,x:187.5,y:493.7},6).wait(1).to({regX:0.5,regY:0.5,scaleX:1.04,scaleY:0.99,skewX:-14.4,x:174.6,y:540},0).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:-13.9,skewY:-12.5,x:175,y:537.7},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-13.3,skewY:-12.3,x:175.4,y:534.8},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-12.6,skewY:-12.1,x:175.9,y:531.8},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-12.1,skewY:-12,x:176.2,y:529.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:-11.7,skewY:-11.9,x:176.5,y:527.8},0).wait(1).to({regX:23.8,regY:-43.1,scaleX:1,scaleY:1.01,skewX:-11.6,skewY:-11.8,x:190.6,y:479.5},0).to({startPosition:0},55).to({scaleX:1.04,scaleY:0.97,skewX:-1.6,skewY:-0.6,x:195.4,y:495.4},5).to({regY:-43,scaleX:1,scaleY:1.02,skewX:-7.2,skewY:-7.7,x:206.6,y:466.9},6).to({scaleY:1.01,skewX:-8.6,skewY:-8.8,x:201.5,y:476.8},4).to({regY:-42.9,skewX:-5.1,skewY:-5.3,x:194.1,y:477.8},5).to({regY:-43,skewX:-8.6,skewY:-8.8,x:201.5,y:476.8},5).to({regY:-42.9,skewX:-5.1,skewY:-5.3,x:194.1,y:477.8},5).to({regY:-43,skewX:-8.6,skewY:-8.8,x:201.5,y:476.8},5).to({regY:-42.9,skewX:-5.1,skewY:-5.3,x:194.1,y:477.8},5).to({regY:-43.1,scaleX:1.05,scaleY:0.99,skewX:-14.6,skewY:-12.7,x:187.5,y:493.7},5).to({regX:23.9,scaleX:1,scaleY:1.01,skewX:-13.8,skewY:-14.1,x:190.5,y:479.8},6).wait(15));

	// 图层 41
	this.instance_10 = new lib.li_1_121_60219复制4("synched",0);
	this.instance_10.setTransform(248.1,504.2,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},4).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.2,x:249,y:506.7},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:250,y:509.2},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:250.9,y:511.8},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:251.9,y:514.3},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:252.9,y:516.8},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:253.8,y:519.4},0).wait(1).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:254.8,y:521.9},0).wait(1).to({scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:253.4,y:516},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:251.9,y:510.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:250.5,y:504.2},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:249,y:498.2},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:247.6,y:492.3},0).wait(1).to({scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:246.2,y:486.4},0).wait(1).to({scaleX:0.99,scaleY:1.05,y:489.4},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,y:492.4},0).wait(1).to({scaleX:1,scaleY:1.03,y:495.4},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,y:498.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:501.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:504.4},0).wait(1).to({scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,y:507.4},0).wait(1).to({scaleX:1.02,scaleY:1,y:506.9},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,y:506.5},0).wait(1).to({scaleX:1.01,scaleY:1,y:506},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,y:505.6},0).wait(1).to({scaleX:1.01,scaleY:1,y:505.1},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.7},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.3},0).to({startPosition:0},80).to({scaleX:0.94,scaleY:1.06,rotation:0,skewX:-1.3,skewY:-1.7,y:486.5},5).to({scaleX:1.05,scaleY:0.98,skewX:0,skewY:0,x:248.1,y:518.4},6).wait(1).to({scaleX:1.05,scaleY:0.99,y:517.5},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:515.2},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:512},0).wait(1).to({scaleX:1.02,scaleY:1,y:508.9},0).wait(1).to({scaleX:1.01,scaleY:1,y:506.3},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.7},0).wait(1).to({scaleX:1,scaleY:1.01,y:504.2},0).to({startPosition:0},55).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:254.8,y:521.9},5).to({scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:261.1,y:496.7},6).to({scaleY:1.01,rotation:2.7,x:257.7,y:504.1},4).to({rotation:1.5,x:250.3,y:504.2},5).to({rotation:2.7,x:257.7,y:504.1},5).to({rotation:1.5,x:250.3,y:504.2},5).to({rotation:2.7,x:257.7,y:504.1},5).to({rotation:1.5,x:250.3,y:504.2},5).to({scaleX:1.05,scaleY:0.98,rotation:0,x:248.1,y:518.4},5).to({scaleX:1,scaleY:1.01,y:504.2},6).wait(15));

	// 图层 42
	this.instance_11 = new lib.li_1_122_55910复制4("synched",0);
	this.instance_11.setTransform(251.1,723.1,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({startPosition:0},4).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.01,scaleY:1,rotation:0.2,x:251.2,y:723.6},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:251.6,y:724.3},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:251.9,y:725},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:252.3,y:725.6},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:252.6,y:726.3},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:253,y:727},0).wait(1).to({regX:0,regY:0,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:253.5,y:727.9},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:252.9,y:725.8},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:252.5,y:723.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,x:252,y:721.9},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:251.6,y:720},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:251.2,y:718.1},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,rotation:0,x:251,y:716.4},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:0.99,scaleY:1.05,x:250.8,y:717.3},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:718.4},0).wait(1).to({scaleX:1,scaleY:1.03,x:250.9,y:719.5},0).wait(1).to({scaleX:1,scaleY:1.02,y:720.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:721.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:251,y:722.9},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,x:251.2,y:724.3},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.02,scaleY:1,x:251,y:723.9},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.7},0).wait(1).to({scaleX:1.01,scaleY:1,x:250.9,y:723.6},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.4},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.2},0).wait(1).to({scaleX:1,scaleY:1.01,y:723.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:251.1},0).to({startPosition:0},80).to({scaleX:0.94,scaleY:1.06,x:250.7,y:716.4},5).to({scaleX:1.05,scaleY:0.98,x:251.3,y:726},6).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.05,scaleY:0.99,x:251,y:725.6},0).wait(1).to({scaleX:1.04,scaleY:0.99,y:725.1},0).wait(1).to({scaleX:1.03,scaleY:0.99,y:724.5},0).wait(1).to({scaleX:1.02,scaleY:1,x:250.9,y:723.9},0).wait(1).to({scaleX:1.01,scaleY:1,y:723.3},0).wait(1).to({scaleX:1,scaleY:1.01,y:723},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:251.1,y:723.1},0).to({startPosition:0},55).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:253.5,y:727.9},5).to({scaleX:1,scaleY:1.04,rotation:1.2,skewX:0,skewY:0,x:253.8,y:720},6).to({scaleY:1.01,y:723.1},4).to({rotation:0,x:251.1},5).to({rotation:1.2,x:253.8},5).to({rotation:0,x:251.1},5).to({rotation:1.2,x:253.8},5).to({rotation:0,x:251.1},5).to({scaleX:1.05,scaleY:0.98,x:251.3,y:726},5).to({scaleX:1,scaleY:1.01,x:251.1,y:723.1},6).wait(15));

	// 图层 44
	this.instance_12 = new lib.li_1_123_74773复制4("synched",0);
	this.instance_12.setTransform(173.9,682.7,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:172.9,y:680.7},4).wait(1).to({regX:10.5,regY:4.5,scaleX:1.01,scaleY:1,rotation:0.2,x:183,y:686.3},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:182.7,y:687.3},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:182.3,y:688.3},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:182,y:689.3},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:181.7,y:690.3},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:181.3,y:691.3},0).wait(1).to({regX:0,regY:0,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:170.2,y:687.8},0).wait(1).to({regX:10.5,regY:4.5,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:180.9,y:688.9},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:180.8,y:685.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,x:180.7,y:681.8},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:180.5,y:678.4},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:180.4,y:674.9},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,rotation:0,x:170,y:666.6},0).wait(1).to({regX:10.5,regY:4.5,scaleX:0.99,scaleY:1.05,x:180.3,y:673.1},0).wait(1).to({scaleX:0.99,scaleY:1.04,x:180.4,y:674.9},0).wait(1).to({scaleX:1,scaleY:1.03,x:180.5,y:676.7},0).wait(1).to({scaleX:1,scaleY:1.02,y:678.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:180.6,y:680.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:682},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,x:170,y:679.2},0).wait(1).to({regX:10.5,regY:4.5,scaleX:1.02,scaleY:1,x:181,y:684.2},0).wait(1).to({scaleX:1.01,scaleY:1,x:181.4,y:684.6},0).wait(1).to({scaleX:1.01,scaleY:1,x:181.7,y:685.1},0).wait(1).to({scaleX:1.01,scaleY:1,x:182.1,y:685.5},0).wait(1).to({scaleX:1.01,scaleY:1,x:182.5,y:686},0).wait(1).to({scaleX:1,scaleY:1.01,x:182.9,y:686.5},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:172.7,y:682.4},0).to({x:173.4,y:683.2},5).to({x:168,y:675.5},15).to({x:173.9,y:680.5},19).to({x:168.6,y:675.7},17).to({x:174.4,y:682.9},18).to({x:172.4,y:679.4},6).to({scaleX:0.94,scaleY:1.06,x:175.2,y:669.6},5).to({scaleX:1.05,scaleY:0.98,x:164.7,y:686.3},6).wait(1).to({regX:10.5,regY:4.5,scaleX:1.05,scaleY:0.99,x:176,y:690.3},0).wait(1).to({scaleX:1.04,scaleY:0.99,x:176.9,y:689.1},0).wait(1).to({scaleX:1.03,scaleY:0.99,x:178.1,y:687.6},0).wait(1).to({scaleX:1.02,scaleY:1,x:179.4,y:686.1},0).wait(1).to({scaleX:1.01,scaleY:1,x:180.4,y:684.8},0).wait(1).to({scaleX:1,scaleY:1.01,x:181,y:684},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:170.7,y:679.2},0).to({x:174,y:681.9},10).to({x:168.2,y:674.5},17).to({x:174.8,y:681.6},18).to({x:171.4,y:677.5},10).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:169.7,y:686.1},5).to({scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:170.7,y:666.2},6).to({scaleY:1.01,rotation:2.7,x:172.8,y:673.8},4).to({rotation:1.5,x:170.4,y:677.8},5).to({rotation:2.7,x:175.8,y:677.9},5).to({rotation:1.5,x:170.3,y:678.6},5).to({rotation:2.7,x:173.2,y:673.1},5).to({rotation:1.5,x:167.6,y:673.9},5).to({scaleX:1.05,scaleY:0.98,rotation:0,x:165.4,y:686.1},5).to({scaleX:1,scaleY:1.01,x:171.9,y:677.5},6).to({x:174.1,y:681.6},10).to({x:173.1,y:679.4},4).wait(1));

	// 图层 45
	this.instance_13 = new lib.li_1_124_6513复制4("synched",0);
	this.instance_13.setTransform(323.7,670.7,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:325.2,y:669.7},4).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.01,scaleY:1,rotation:0.2,x:313,y:682},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:314.4,y:683.2},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:315.7,y:684.4},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:317,y:685.6},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:318.4,y:686.8},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:319.7,y:688},0).wait(1).to({regX:0,regY:0,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:335.4,y:678.7},0).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.03,scaleY:0.99,skewX:1,skewY:0.9,x:320.3,y:685.6},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:0.8,x:319.6,y:682.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.6,skewX:0,skewY:0,x:319,y:678.5},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:318.2,y:674.9},0).wait(1).to({scaleX:0.99,scaleY:1.04,rotation:0.2,x:317.5,y:671.4},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,rotation:0,x:330.1,y:656.1},0).wait(1).to({regX:-13.5,regY:11.1,scaleX:0.99,scaleY:1.05,x:316.6,y:669.4},0).wait(1).to({scaleX:0.99,scaleY:1.04,x:316.5,y:671.1},0).wait(1).to({scaleX:1,scaleY:1.03,x:316.4,y:672.7},0).wait(1).to({scaleX:1,scaleY:1.02,x:316.2,y:674.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:316.1,y:676},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:316,y:677.7},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,x:329.6,y:668.3},0).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.02,scaleY:1,x:315,y:679.3},0).wait(1).to({scaleX:1.01,scaleY:1,x:314.2},0).wait(1).to({scaleX:1.01,scaleY:1,x:313.4},0).wait(1).to({scaleX:1.01,scaleY:1,x:312.7},0).wait(1).to({scaleX:1.01,scaleY:1,x:311.8},0).wait(1).to({scaleX:1,scaleY:1.01,x:311},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:323.8,y:668.2},0).to({x:323.3,y:668.8},5).to({x:331.8,y:665.5},15).to({x:322,y:668.7},19).to({x:331.7,y:665.4},17).to({x:322.1,y:668.5},18).to({x:326.5,y:668.7},6).to({scaleX:0.94,scaleY:1.06,x:324.1,y:656.3},5).to({scaleX:1.05,scaleY:0.98,x:336.9,y:677.8},6).wait(1).to({regX:-13.5,regY:11.1,scaleX:1.05,scaleY:0.99,x:322.2,y:688},0).wait(1).to({scaleX:1.04,scaleY:0.99,x:320.9,y:686.2},0).wait(1).to({scaleX:1.03,scaleY:0.99,x:319.2,y:683.9},0).wait(1).to({scaleX:1.02,scaleY:1,x:317.6,y:681.5},0).wait(1).to({scaleX:1.01,scaleY:1,x:316.2,y:679.5},0).wait(1).to({scaleX:1,scaleY:1.01,x:315.3,y:678.2},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:328.6,y:666.7},0).to({x:323.2,y:668.1},10).to({x:331.9,y:663.1},17).to({x:322,y:668.4},18).to({x:328.1,y:667},10).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:338.1,y:677.2},5).to({scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:331.4,y:668.8},6).to({scaleY:1.01,rotation:2.7,x:330.1,y:671.2},4).to({rotation:1.5,x:323.8,y:671.3},5).to({rotation:2.7,x:324.4,y:673.6},5).to({rotation:1.5,x:323.5,y:670.3},5).to({rotation:2.7,x:329.4,y:668.4},5).to({rotation:1.5,y:666.9},5).to({scaleX:1.05,scaleY:0.98,rotation:0,x:336.9,y:677.8},5).to({scaleX:1,scaleY:1.01,x:327.3,y:667.2},6).to({x:322.1,y:667.7},10).to({x:325.6,y:668.2},4).wait(1));

	// 元件 4
	this.instance_14 = new lib.li_1_125_62582复制4("synched",0);
	this.instance_14.setTransform(300.7,629.5,0.913,1.007,0,0,0,10,85.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({startPosition:4},4).wait(1).to({regX:76,regY:109.7,scaleX:0.92,scaleY:1,rotation:0.2,x:361,y:654.9,startPosition:5},0).wait(1).to({scaleX:0.92,scaleY:1,rotation:0.4,x:361.2,y:655.5,startPosition:6},0).wait(1).to({scaleX:0.93,scaleY:0.99,rotation:0.5,x:361.3,y:656.1,startPosition:7},0).wait(1).to({scaleX:0.94,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:361.5,y:656.7,startPosition:8},0).wait(1).to({scaleX:0.94,scaleY:0.98,skewX:0.9,skewY:0.8,x:361.6,y:657.2,startPosition:9},0).wait(1).to({scaleX:0.95,scaleY:0.98,skewX:1.1,skewY:1,x:361.8,y:657.9,startPosition:10},0).wait(1).to({regX:10,regY:85,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:1.1,x:299.6,y:633.4,startPosition:11},0).wait(1).to({regX:76,regY:109.7,scaleX:0.94,scaleY:0.99,skewX:0.8,skewY:0.7,x:362.1,y:655,startPosition:12},0).wait(1).to({scaleX:0.93,scaleY:1,skewX:0.4,skewY:0.2,x:362.3,y:651.6,startPosition:13},0).wait(1).to({scaleX:0.93,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:362.5,y:648.1,startPosition:14},0).wait(1).to({scaleX:0.92,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:362.6,y:644.7,startPosition:15},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewX:-1,skewY:-1.1,x:362.9,y:641.2,startPosition:16},0).wait(1).to({regX:10,regY:85.2,scaleX:0.9,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:303.3,y:613.4,startPosition:17},0).wait(1).to({regX:76,regY:109.7,scaleX:0.9,scaleY:1.05,x:361.4,y:639.4,startPosition:18},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewY:-1.5,x:359.7,y:641.2,startPosition:19},0).wait(1).to({scaleX:0.91,scaleY:1.03,x:358,y:642.9,startPosition:20},0).wait(1).to({scaleX:0.92,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,x:356.2,y:644.6,startPosition:21},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:354.5,y:646.5,startPosition:22},0).wait(1).to({scaleX:0.93,scaleY:1.01,x:352.8,y:648.2,startPosition:23},0).wait(1).to({regX:10,regY:85.2,scaleX:0.93,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:288.9,y:627.1,startPosition:24},0).wait(1).to({regX:76,regY:109.7,scaleX:0.93,scaleY:1,x:350.3,y:650,startPosition:25},0).wait(1).to({scaleX:0.93,scaleY:1,skewY:-1.5,x:349.6,y:650.1,startPosition:26},0).wait(1).to({scaleX:0.92,scaleY:1,x:348.9,y:650.2,startPosition:27},0).wait(1).to({scaleX:0.92,scaleY:1,rotation:-1.5,skewX:0,skewY:0,x:348.2,startPosition:28},0).wait(1).to({scaleX:0.92,scaleY:1,x:347.5,y:650.3,startPosition:29},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:346.7,y:650.4,startPosition:30},0).wait(1).to({regX:10,regY:85.1,scaleX:0.91,scaleY:1.01,x:285.2,y:627.3,startPosition:31},0).to({startPosition:111},80).to({scaleX:0.86,scaleY:1.06,rotation:0,skewX:-1.3,skewY:-1.7,x:282.8,y:611.1,startPosition:116},5).to({scaleX:0.96,scaleY:0.98,skewX:0,skewY:0,x:276.4,y:617.5,startPosition:122},6).wait(1).to({regX:76,regY:109.7,scaleX:0.96,scaleY:0.99,x:340.2,y:641.7,startPosition:123},0).wait(1).to({scaleX:0.95,scaleY:0.99,x:341.4,y:642,startPosition:124},0).wait(1).to({scaleX:0.94,scaleY:0.99,x:342.9,y:642.3,startPosition:125},0).wait(1).to({scaleX:0.93,scaleY:1,x:344.5,y:642.6,startPosition:126},0).wait(1).to({scaleX:0.92,scaleY:1,x:345.8,y:642.8,startPosition:127},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:346.6,y:642.9,startPosition:128},0).wait(1).to({regX:10,regY:85.1,scaleX:0.91,scaleY:1.01,x:286.7,y:618.3,startPosition:129},0).to({startPosition:184},55).to({regY:85,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:1.1,x:295.8,y:633.4,startPosition:189},5).to({regY:85.1,scaleX:0.91,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:295.2,y:595.8,startPosition:195},6).to({scaleY:1.01,rotation:2.7,x:298.2,y:599,startPosition:199},4).to({rotation:1.5,x:292.5,y:600.1,startPosition:4},5).to({rotation:2.7,x:301.5,y:602.1,startPosition:9},5).to({rotation:1.5,x:300.5,y:600.5,startPosition:14},5).to({rotation:2.7,x:294.6,y:601,startPosition:19},5).to({rotation:1.5,x:279.6,y:603,startPosition:24},5).to({scaleX:0.96,scaleY:0.98,rotation:0,x:278.9,y:624.3,startPosition:29},5).to({scaleX:0.91,scaleY:1.01,x:280.5,y:618.3,startPosition:35},6).wait(15));

	// 图层 47
	this.instance_15 = new lib.li_1_127_51025复制4("synched",26);
	this.instance_15.setTransform(271.1,582.6,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({startPosition:30},4).wait(1).to({regX:15.7,regY:11.7,scaleX:1.01,scaleY:1,rotation:0.2,x:287.7,y:596.5,startPosition:31},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.4,x:288.7,y:598.7,startPosition:32},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.5,x:289.6,y:600.9,startPosition:33},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:0.7,skewY:0.7,x:290.6,y:603.1,startPosition:34},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:0.9,skewY:0.8,x:291.5,y:605.2,startPosition:35},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:1.1,skewY:1,x:292.4,y:607.4,startPosition:36},0).wait(1).to({regX:0,regY:0,scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:277.3,y:597.9,startPosition:37},0).wait(1).to({regX:15.7,regY:11.7,scaleX:1.03,scaleY:0.99,skewX:0.8,skewY:0.7,x:292.2,y:604.6,startPosition:38},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:0.4,skewY:0.2,x:291.1,y:599.7,startPosition:39},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-0.1,skewY:-0.2,x:289.9,y:594.8,startPosition:40},0).wait(1).to({scaleX:1,scaleY:1.03,skewX:-0.5,skewY:-0.7,x:288.8,y:589.9,startPosition:41},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1,skewY:-1.1,x:287.7,y:585,startPosition:42},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1.06,skewX:-1.4,skewY:-1.6,x:270.8,y:568.2,startPosition:43},0).wait(1).to({regX:15.7,regY:11.7,scaleX:0.99,scaleY:1.05,x:286.7,y:582.3,startPosition:44},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewY:-1.5,x:287,y:584.5,startPosition:45},0).wait(1).to({scaleX:1,scaleY:1.03,x:287.2,y:586.8,startPosition:46},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:-1.5,skewX:0,skewY:0,x:287.4,y:589,startPosition:47},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:287.7,y:591.2,startPosition:48},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:287.9,y:593.4,startPosition:49},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1,rotation:0,skewX:-1.5,skewY:-1.4,x:271.8,y:584.4,startPosition:50},0).wait(1).to({regX:15.7,regY:11.7,scaleX:1.02,scaleY:1,x:288,y:595.4,startPosition:0},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-1.5,x:287.9,y:595,startPosition:1},0).wait(1).to({scaleX:1.01,scaleY:1,x:287.8,y:594.7,startPosition:2},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.5,skewX:0,skewY:0,x:287.6,y:594.4,startPosition:3},0).wait(1).to({scaleX:1.01,scaleY:1,x:287.5,y:594,startPosition:4},0).wait(1).to({scaleX:1,scaleY:1.01,x:287.4,y:593.7,startPosition:5},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:271.3,y:582,startPosition:6},0).to({startPosition:35},80).to({scaleX:0.94,scaleY:1.06,rotation:0,skewX:-1.3,skewY:-1.7,x:269.7,y:568.2,startPosition:40},5).to({scaleX:1.05,scaleY:0.98,skewX:0,skewY:0,x:272.4,y:595,startPosition:46},6).wait(1).to({regX:15.7,regY:11.7,scaleX:1.05,scaleY:0.99,x:288.7,y:605.8,startPosition:47},0).wait(1).to({scaleX:1.04,scaleY:0.99,x:288.4,y:603.8,startPosition:48},0).wait(1).to({scaleX:1.03,scaleY:0.99,x:287.9,y:601.1,startPosition:49},0).wait(1).to({scaleX:1.02,scaleY:1,x:287.5,y:598.4,startPosition:50},0).wait(1).to({scaleX:1.01,scaleY:1,x:287.1,y:596.2,startPosition:0},0).wait(1).to({scaleX:1,scaleY:1.01,x:286.9,y:594.8,startPosition:1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1.01,x:271.1,y:582.6,startPosition:2},0).to({startPosition:6},55).to({scaleX:1.04,scaleY:0.97,skewX:1.2,skewY:1.1,x:277.3,y:597.9,startPosition:11},5).to({scaleX:1,scaleY:1.02,rotation:4.2,skewX:0,skewY:0,x:278.3,y:577.7,startPosition:17},6).to({scaleY:1.01,rotation:2.7,x:277,y:583.5,startPosition:21},4).to({rotation:1.5,x:271.4,y:583,startPosition:26},5).to({rotation:2.7,x:277,y:583.5,startPosition:31},5).to({rotation:1.5,x:271.4,y:583,startPosition:36},5).to({rotation:2.7,x:277,y:583.5,startPosition:41},5).to({rotation:1.5,x:271.4,y:583,startPosition:46},5).to({scaleX:1.05,scaleY:0.98,rotation:0,x:272.4,y:595,startPosition:0},5).to({scaleX:1,scaleY:1.01,x:271.1,y:582.6,startPosition:6},6).wait(15));

	// gergerherhre
	this.instance_16 = new lib.li_1_129_3968复制4("synched",0);
	this.instance_16.setTransform(204.5,637.2,0.913,1.007,0,0,180,12.5,85.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({startPosition:4},4).wait(1).to({regX:88.3,regY:91.5,scaleX:0.92,scaleY:1,skewX:0.2,skewY:180.2,x:135.3,y:644.1,startPosition:5},0).wait(1).to({scaleX:0.92,scaleY:1,skewX:0.4,skewY:180.3,x:135.4,y:645.2,startPosition:6},0).wait(1).to({scaleX:0.93,scaleY:0.99,skewX:0.5,skewY:180.5,x:135.5,y:646.1,startPosition:7},0).wait(1).to({scaleX:0.94,scaleY:0.99,skewX:0.7,skewY:180.7,x:135.6,y:647.1,startPosition:8},0).wait(1).to({scaleX:0.94,scaleY:0.98,skewX:0.9,skewY:180.8,x:135.7,y:648.1,startPosition:9},0).wait(1).to({scaleX:0.95,scaleY:0.98,skewX:1.1,skewY:181,x:135.8,y:649.1,startPosition:10},0).wait(1).to({regX:12.5,regY:85.5,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:181.1,x:208.1,y:645.8,startPosition:11},0).wait(1).to({regX:88.3,regY:91.5,scaleX:0.94,scaleY:0.99,skewX:0.8,skewY:180.7,x:137.9,y:646.9,startPosition:12},0).wait(1).to({scaleX:0.93,scaleY:1,skewX:0.4,skewY:180.2,x:140,y:643.7,startPosition:13},0).wait(1).to({scaleX:0.93,scaleY:1.01,skewX:-0.1,skewY:179.8,x:142,y:640.5,startPosition:14},0).wait(1).to({scaleX:0.92,scaleY:1.03,skewX:-0.5,skewY:179.3,x:144.1,y:637.3,startPosition:15},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewX:-1,skewY:178.9,x:146.2,y:634.1,startPosition:16},0).wait(1).to({regX:12.5,regY:85.6,scaleX:0.9,scaleY:1.06,skewX:-1.4,skewY:178.4,x:216.2,y:622.7,startPosition:17},0).wait(1).to({regX:88.3,regY:91.5,scaleX:0.9,scaleY:1.05,x:147.9,y:636,startPosition:18},0).wait(1).to({scaleX:0.91,scaleY:1.04,skewY:178.5,x:147.4,y:641.2,startPosition:19},0).wait(1).to({scaleX:0.91,scaleY:1.03,x:146.9,y:646.4,startPosition:20},0).wait(1).to({scaleX:0.92,scaleY:1.02,skewX:-1.5,x:146.5,y:651.5,startPosition:21},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:146,y:656.7,startPosition:22},0).wait(1).to({scaleX:0.93,scaleY:1.01,x:145.5,y:662,startPosition:23},0).wait(1).to({regX:12.5,regY:85.7,scaleX:0.93,scaleY:1,skewY:178.6,x:215.6,y:659.5,startPosition:24},0).wait(1).to({regX:88.3,regY:91.5,scaleX:0.93,scaleY:1,x:146,y:664.6,startPosition:25},0).wait(1).to({scaleX:0.93,scaleY:1,skewY:178.5,x:146.9,y:662.3,startPosition:26},0).wait(1).to({scaleX:0.92,scaleY:1,x:147.8,y:659.9,startPosition:27},0).wait(1).to({scaleX:0.92,scaleY:1,x:148.7,y:657.5,startPosition:28},0).wait(1).to({scaleX:0.92,scaleY:1,x:149.7,y:655.2,startPosition:29},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:150.6,y:652.8,startPosition:30},0).wait(1).to({regX:12.5,regY:85.7,scaleX:0.91,scaleY:1.01,x:220.5,y:642.8,startPosition:31},0).to({startPosition:111},80).to({scaleX:0.86,scaleY:1.06,skewX:-1.3,skewY:178.3,x:227.7,y:622.4,startPosition:116},5).to({regY:85.6,scaleX:0.96,scaleY:0.98,skewX:0,skewY:180,x:230,y:651.2,startPosition:122},6).wait(1).to({regX:88.3,regY:91.5,scaleX:0.96,scaleY:0.99,x:156.6,y:656.3,startPosition:123},0).wait(1).to({scaleX:0.95,scaleY:0.99,x:155.2,y:654.6,startPosition:124},0).wait(1).to({scaleX:0.94,scaleY:0.99,x:153.2,y:652.2,startPosition:125},0).wait(1).to({scaleX:0.93,scaleY:1,x:151.3,y:649.9,startPosition:126},0).wait(1).to({scaleX:0.92,scaleY:1,x:149.7,y:647.9,startPosition:127},0).wait(1).to({scaleX:0.92,scaleY:1.01,x:148.7,y:646.7,startPosition:128},0).wait(1).to({regX:12.5,regY:85.6,scaleX:0.91,scaleY:1.01,x:217.6,y:640.4,startPosition:129},0).to({startPosition:184},55).to({regY:85.5,scaleX:0.95,scaleY:0.97,skewX:1.2,skewY:181.1,x:214.6,y:645.8,startPosition:189},5).to({scaleX:0.91,scaleY:1.02,skewX:4.2,skewY:184.2,x:227.2,y:633.7,startPosition:195},6).to({regX:12.6,regY:85.6,scaleY:1.01,skewX:2.7,skewY:182.7,x:223,y:630.9,startPosition:199},4).to({skewX:1.5,skewY:181.5,x:216,y:646.5,startPosition:4},5).to({skewX:2.7,skewY:182.7,x:227.5,y:617.5,startPosition:9},5).to({skewX:1.5,skewY:181.5,x:208.5,y:619.4,startPosition:14},5).to({skewX:2.7,skewY:182.7,x:223.1,y:618.1,startPosition:19},5).to({skewX:1.5,skewY:181.5,x:218.2,y:619.4,startPosition:24},5).to({regX:12.5,scaleX:0.96,scaleY:0.98,skewX:0,skewY:180,x:225.7,y:632.6,startPosition:29},5).to({scaleX:0.91,scaleY:1.01,x:228.7,y:621,startPosition:35},6).wait(15));

	// 图层 43
	this.instance_17 = new lib.li_1_131_92409复制5("synched",0);
	this.instance_17.setTransform(254.9,851.1,1.005,1.022);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.8,-5.8,458.1,870.9);


(lib.li_1_20_412 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.li_1_56_95137("synched",0);
	this.instance.setTransform(50.9,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},13).to({rotation:-6.2,x:51.3},6).to({rotation:0,x:50.9},9).to({startPosition:0},21).to({startPosition:0},2).to({rotation:-6.2,x:51.3},6).to({rotation:0,x:50.9},8).wait(260));

	// 图层 3
	this.instance_1 = new lib.li_1_57_62512("synched",0);
	this.instance_1.setTransform(52.6,64.1,1,1,19.7,0,0,-16.9,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},13).to({rotation:-6.2,x:51.3,y:67.3},6).to({regY:-21.8,rotation:15,x:52.3,y:64.7},9).to({startPosition:0},21).to({startPosition:0},2).to({rotation:-0.3,x:51.3,y:67.2},6).to({rotation:15,x:52.3,y:64.7},8).wait(260));

	// 图层 4
	this.instance_2 = new lib.li_1_58_76545("synched",0);
	this.instance_2.setTransform(54.7,68.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},13).to({rotation:-6.2,x:55.2,y:68.1},6).to({rotation:0,x:54.7,y:68.6},9).to({startPosition:0},21).to({startPosition:0},2).to({rotation:-6.2,x:55.2,y:68.1},6).to({rotation:0,x:54.7,y:68.6},8).wait(260));

	// 图层 5
	this.instance_3 = new lib.li_1_59_10366("synched",0);
	this.instance_3.setTransform(38.1,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:13},13).to({startPosition:19},6).to({startPosition:28},9).to({startPosition:49},21).to({startPosition:51},2).to({startPosition:57},6).to({startPosition:65},8).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-6.5,94,133.7);


(lib.li_1_19_67836 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.li_1_52_6617("synched",0);
	this.instance.setTransform(39.7,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},8).to({scaleX:1,scaleY:1,skewX:8.6,skewY:7.1,x:37.7,y:65},9).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:39.7,y:67.3},11).wait(441));

	// 图层 3
	this.instance_1 = new lib.li_1_53_70231("synched",0);
	this.instance_1.setTransform(33.4,64.1,1,1,-25.9,0,0,14.3,-23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},8).to({regX:14.5,scaleX:0.99,scaleY:1.01,rotation:0,skewX:6.9,skewY:1.6,x:37.2,y:65.1},9).to({regX:14.3,scaleX:1,scaleY:1,rotation:-13.2,skewX:0,skewY:0,x:35.7,y:64.3},11).wait(441));

	// 图层 4
	this.instance_2 = new lib.li_1_54_16274("synched",0);
	this.instance_2.setTransform(36,68.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},8).to({scaleX:1,scaleY:1,skewX:8.6,skewY:7.1,x:33.8,y:65.8},9).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:36,y:68.6},11).wait(441));

	// 图层 5
	this.instance_3 = new lib.li_1_55_93676("synched",0);
	this.instance_3.setTransform(70,10,1,1,0,0,0,17.4,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:8},8).to({startPosition:17},9).to({startPosition:28},11).wait(441));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-3.9,96.7,133.4);


(lib.li_1_8_11431 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.mc_3 = new lib.ygdfgd();
	this.mc_3.setTransform(468.3,216.7,1,1,0,0,0,352.2,166.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116.1,49.9,704.4,333.7);


(lib.li_1_1_12824 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.li_1_30_69847("synched",0);
	this.instance.setTransform(80,22.1,1,1,0,0,0,17.3,-50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.2,regY:-50.1,rotation:-1.9,y:22.2},18).to({regX:17.3,regY:-50.2,rotation:0,y:22.1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,129,152);


(lib.fvsdgsdgsg复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 27
	this.instance = new lib.li_1_75_7989复制("synched",0);
	this.instance.setTransform(250,448.6,1,1,0,0,0,5.3,223.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:443.6,startPosition:20},20).to({y:448.6,startPosition:40},20).to({y:443.6,startPosition:60},20).to({y:448.6,startPosition:80},20).wait(1));

	// 图层 28
	this.instance_1 = new lib.li_1_98_48893复制("synched",0);
	this.instance_1.setTransform(251,590,1,1.007,0,0,0,85,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.02,y:587.2,startPosition:20},20).to({scaleY:1.01,y:590,startPosition:40},20).to({scaleY:1.02,y:587.2,startPosition:19},20).to({scaleY:1.01,y:590,startPosition:39},20).wait(1));

	// 图层 32
	this.instance_2 = new lib.li_1_106_54535复制("synched",0);
	this.instance_2.setTransform(250.1,578.1,1,1.007,0,0,0,1.6,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:23.8,scaleY:1.02,y:575.1},20).to({regY:23.9,scaleY:1.01,y:578.1},20).to({regY:23.8,scaleY:1.02,y:575.1},20).to({regY:23.9,scaleY:1.01,y:578.1},20).wait(1));

	// 元件 5
	this.instance_3 = new lib.li_1_98_68273复制("synched",0);
	this.instance_3.setTransform(256.6,612,0.913,1.007,0,0,0,3.9,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.02,y:609.4,startPosition:20},20).to({scaleY:1.01,y:612,startPosition:40},20).to({scaleY:1.02,y:609.4,startPosition:60},20).to({scaleY:1.01,y:612,startPosition:80},20).wait(1));

	// 图层 34
	this.instance_4 = new lib.li_1_110_93823复制("synched",0);
	this.instance_4.setTransform(175.5,567.4,0.999,1.005,0,-11.5,-11.8,78.9,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.01,skewX:-15.4,skewY:-15.8,x:178.5,y:564.8,startPosition:20},20).to({scaleY:1,skewX:-11.5,skewY:-11.8,x:175.5,y:567.4,startPosition:40},20).to({scaleY:1.01,skewX:-15.4,skewY:-15.8,x:178.5,y:564.8,startPosition:19},20).to({scaleY:1,skewX:-11.5,skewY:-11.8,x:175.5,y:567.4,startPosition:39},20).wait(1));

	// 图层 36
	this.instance_5 = new lib.li_1_113_78516复制("synched",0);
	this.instance_5.setTransform(328.6,558.9,0.999,1.006,0,8.5,8.8,15.7,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1.02,skewX:12.6,skewY:13,x:325.4,y:557,startPosition:20},20).to({scaleY:1.01,skewX:8.5,skewY:8.8,x:328.6,y:558.9,startPosition:40},20).to({scaleY:1.02,skewX:12.6,skewY:13,x:325.4,y:557,startPosition:19},20).to({scaleY:1.01,skewX:8.5,skewY:8.8,x:328.6,y:558.9,startPosition:39},20).wait(1));

	// 图层 40
	this.instance_6 = new lib.li_1_118_87296复制("synched",0);
	this.instance_6.setTransform(247.5,483.4,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:1.02,y:479.5},20).to({scaleY:1.01,y:483.4},20).to({scaleY:1.02,y:479.5},20).to({scaleY:1.01,y:483.4},20).wait(1));

	// 图层 38
	this.instance_7 = new lib.li_1_119_36977复制("synched",0);
	this.instance_7.setTransform(317.1,490.8,0.999,1.006,0,8.5,8.8,-8.3,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:1.02,skewX:10.9,skewY:11.3,x:316.9,y:487.7},20).to({scaleY:1.01,skewX:8.5,skewY:8.8,x:317.1,y:490.8},20).to({scaleY:1.02,skewX:10.9,skewY:11.3,x:316.9,y:487.7},20).to({scaleY:1.01,skewX:8.5,skewY:8.8,x:317.1,y:490.8},20).wait(1));

	// 图层 39
	this.instance_8 = new lib.li_1_120_90830复制("synched",0);
	this.instance_8.setTransform(190.6,479.5,0.999,1.005,0,-11.5,-11.8,23.8,-43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:-43,scaleY:1.01,skewX:-13.6,skewY:-14.1,y:475.6},20).to({regY:-43.1,scaleY:1,skewX:-11.5,skewY:-11.8,y:479.5},20).to({regY:-43,scaleY:1.01,skewX:-13.6,skewY:-14.1,y:475.6},20).to({regY:-43.1,scaleY:1,skewX:-11.5,skewY:-11.8,y:479.5},20).wait(1));

	// 图层 41
	this.instance_9 = new lib.li_1_121_60219复制("synched",0);
	this.instance_9.setTransform(248.1,504.2,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleY:1.02,y:500.4},20).to({scaleY:1.01,y:504.2},20).to({scaleY:1.02,y:500.4},20).to({scaleY:1.01,y:504.2},20).wait(1));

	// 图层 42
	this.instance_10 = new lib.li_1_122_55910复制("synched",0);
	this.instance_10.setTransform(251.1,723.1,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleY:1.02,y:721.8},20).to({scaleY:1.01,y:723.1},20).to({scaleY:1.02,y:721.8},20).to({scaleY:1.01,y:723.1},20).wait(1));

	// 图层 44
	this.instance_11 = new lib.li_1_123_74773复制("synched",0);
	this.instance_11.setTransform(173.9,682.7,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleY:1.02,x:166.6,y:677.2},20).to({scaleY:1.01,x:173.9,y:682.7},20).to({scaleY:1.02,x:166.6,y:677.2},20).to({scaleY:1.01,x:173.9,y:682.7},20).wait(1));

	// 图层 45
	this.instance_12 = new lib.li_1_124_6513复制("synched",0);
	this.instance_12.setTransform(323.7,670.7,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleY:1.02,x:333.3,y:666.8},20).to({scaleY:1.01,x:323.7,y:670.7},20).to({scaleY:1.02,x:333.3,y:666.8},20).to({scaleY:1.01,x:323.7,y:670.7},20).wait(1));

	// 元件 4
	this.instance_13 = new lib.li_1_125_62582复制("synched",0);
	this.instance_13.setTransform(300.7,629.5,0.913,1.007,0,0,0,10,85.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleY:1.02,y:627.1,startPosition:20},20).to({scaleY:1.01,y:629.5,startPosition:40},20).to({scaleY:1.02,y:627.1,startPosition:60},20).to({scaleY:1.01,y:629.5,startPosition:80},20).wait(1));

	// 图层 47
	this.instance_14 = new lib.li_1_127_51025复制("synched",0);
	this.instance_14.setTransform(271.1,582.6,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleY:1.02,y:579.7,startPosition:20},20).to({scaleY:1.01,y:582.6,startPosition:40},20).to({scaleY:1.02,y:579.7,startPosition:19},20).to({scaleY:1.01,y:582.6,startPosition:39},20).wait(1));

	// gergerherhre
	this.instance_15 = new lib.li_1_129_3968复制("synched",0);
	this.instance_15.setTransform(204.5,637.2,0.913,1.007,0,0,180,12.5,85.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleY:1.02,y:634.9,startPosition:20},20).to({scaleY:1.01,y:637.2,startPosition:40},20).to({scaleY:1.02,y:634.9,startPosition:60},20).to({scaleY:1.01,y:637.2,startPosition:80},20).wait(1));

	// 图层 43
	this.instance_16 = new lib.li_1_131_92409复制("synched",0);
	this.instance_16.setTransform(254.9,851.1,1.005,1.022);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.8,-5.8,458.1,870.9);


(lib.元件4_1 = function(mode,startPosition,loop) {
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


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 413
	this.instance = new lib.补间4复制("synched",0);
	this.instance.setTransform(73.1,290.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:0},0).to({x:488.1},20).wait(21));

	// 图层 402 拷贝 2
	this.instance_1 = new lib.补间5复制("synched",0);
	this.instance_1.setTransform(935.1,290.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({startPosition:0},0).to({x:520.2},20).wait(21));

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg5QAcNMAAAg4ZMByhAAAMAAAA4Zg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg5QAcNMAAAg4ZMByhAAAMAAAA4Zg");
	var mask_graphics_5 = new cjs.Graphics().p("EgqTAk8MAAAg4ZMBtIAAAMAAAA4Zg");
	var mask_graphics_6 = new cjs.Graphics().p("EgmRAk8MAAAg4ZMBnwAAAMAAAA4Zg");
	var mask_graphics_7 = new cjs.Graphics().p("EgiQAk8MAAAg4ZMBiZAAAMAAAA4Zg");
	var mask_graphics_8 = new cjs.Graphics().p("EgeOAk8MAAAg4ZMBdBAAAMAAAA4Zg");
	var mask_graphics_9 = new cjs.Graphics().p("EgaMAk8MAAAg4ZMBXpAAAMAAAA4Zg");
	var mask_graphics_10 = new cjs.Graphics().p("EgWKAk8MAAAg4ZMBSRAAAMAAAA4Zg");
	var mask_graphics_11 = new cjs.Graphics().p("EgSJAk8MAAAg4ZMBM7AAAMAAAA4Zg");
	var mask_graphics_12 = new cjs.Graphics().p("EgOHAk8MAAAg4ZMBHjAAAMAAAA4Zg");
	var mask_graphics_13 = new cjs.Graphics().p("EgKFAk8MAAAg4ZMBCLAAAMAAAA4Zg");
	var mask_graphics_14 = new cjs.Graphics().p("EgGDAk8MAAAg4ZMA8zAAAMAAAA4Zg");
	var mask_graphics_15 = new cjs.Graphics().p("EgCBAk8MAAAg4ZMA3bAAAMAAAA4Zg");
	var mask_graphics_16 = new cjs.Graphics().p("EAB+Ak8MAAAg4ZMAyGAAAMAAAA4Zg");
	var mask_graphics_17 = new cjs.Graphics().p("EAGAAk8MAAAg4ZMAsuAAAMAAAA4Zg");
	var mask_graphics_18 = new cjs.Graphics().p("EAKCAk8MAAAg4ZMAnWAAAMAAAA4Zg");
	var mask_graphics_19 = new cjs.Graphics().p("EAOEAk8MAAAg4ZMAh+AAAMAAAA4Zg");
	var mask_graphics_20 = new cjs.Graphics().p("EASFAk8MAAAg4ZIcnAAMAAAA4Zg");
	var mask_graphics_21 = new cjs.Graphics().p("EAWHAk8MAAAg4ZIXPAAMAAAA4Zg");
	var mask_graphics_22 = new cjs.Graphics().p("EAaJAk8MAAAg4ZIR3AAMAAAA4Zg");
	var mask_graphics_23 = new cjs.Graphics().p("EAeLAk8MAAAg4ZIMfAAMAAAA4Zg");
	var mask_graphics_24 = new cjs.Graphics().p("EAiMAk8MAAAg4ZIHJAAMAAAA4Zg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:506.2,y:292.3}).wait(4).to({graphics:mask_graphics_4,x:506.2,y:292.3}).wait(1).to({graphics:mask_graphics_5,x:427.8,y:236.4}).wait(1).to({graphics:mask_graphics_6,x:419.2,y:236.4}).wait(1).to({graphics:mask_graphics_7,x:410.6,y:236.4}).wait(1).to({graphics:mask_graphics_8,x:402,y:236.4}).wait(1).to({graphics:mask_graphics_9,x:393.4,y:236.4}).wait(1).to({graphics:mask_graphics_10,x:384.8,y:236.4}).wait(1).to({graphics:mask_graphics_11,x:376.2,y:236.4}).wait(1).to({graphics:mask_graphics_12,x:367.6,y:236.4}).wait(1).to({graphics:mask_graphics_13,x:359,y:236.4}).wait(1).to({graphics:mask_graphics_14,x:350.4,y:236.4}).wait(1).to({graphics:mask_graphics_15,x:341.8,y:236.4}).wait(1).to({graphics:mask_graphics_16,x:333.2,y:236.4}).wait(1).to({graphics:mask_graphics_17,x:324.6,y:236.4}).wait(1).to({graphics:mask_graphics_18,x:316.1,y:236.4}).wait(1).to({graphics:mask_graphics_19,x:307.5,y:236.4}).wait(1).to({graphics:mask_graphics_20,x:298.9,y:236.4}).wait(1).to({graphics:mask_graphics_21,x:290.3,y:236.4}).wait(1).to({graphics:mask_graphics_22,x:281.7,y:236.4}).wait(1).to({graphics:mask_graphics_23,x:273.1,y:236.4}).wait(1).to({graphics:mask_graphics_24,x:264.5,y:236.4}).wait(21));

	// 图层 2
	this.mc_6 = new lib.li_1_8_11431();
	this.mc_6.setTransform(446.4,275.7,1,1,0,0,0,408.5,195);

	this.mc_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.mc_6).wait(45));

	// 组 12 拷贝 2
	this.instance_2 = new lib.补间7("synched",0);
	this.instance_2.setTransform(504.1,290.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({startPosition:0},0).to({scaleX:0.03,x:509},20).wait(21));

	// 图层 414
	this.instance_3 = new lib.补间6复制("synched",0);
	this.instance_3.setTransform(509.1,303.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({startPosition:0},0).to({scaleX:0.15},17).to({scaleX:0.03,alpha:0},3).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.6,22.8,947,560.9);


(lib.li_1_16_87274 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// 课
	this.instance = new lib.li_1_4_20928("synched",0);
	this.instance.setTransform(51.5,19);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).to({scaleY:0.91,y:67.8,alpha:1},3).to({scaleY:1.08,y:54.9},3).to({scaleY:0.98,y:60.1},3).to({scaleY:1,y:59},3).wait(15));

	// 堂
	this.instance_1 = new lib.li_1_3_45622("synched",0);
	this.instance_1.setTransform(151.5,16.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleY:0.91,y:65.5,alpha:1},3).to({scaleY:1.08,y:52.2},3).to({scaleY:0.98,y:57.7},3).to({scaleY:1,y:56.5},3).wait(12));

	// 回
	this.instance_2 = new lib.li_1_2_71908("synched",0);
	this.instance_2.setTransform(255,18.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleY:0.91,y:67.3,alpha:1},3).to({scaleY:1.08,y:54.3},3).to({scaleY:0.98,y:59.6},3).to({scaleY:1,y:58.5},3).wait(9));

	// 顾
	this.instance_3 = new lib.li_1_1_46573("synched",0);
	this.instance_3.setTransform(356.5,15.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({scaleY:0.91,y:64.6,alpha:1},3).to({scaleY:1.08,y:51.1},3).to({scaleY:0.98,y:56.7},3).to({scaleY:1,y:55.5},3).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-33,103,104);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(1));

	// 图层 1
	this.instance = new lib.元件3("synched",0);
	this.instance.setTransform(57.5,159.5,0.855,0.855,0,0,0,57.5,159.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:0},0).to({regX:57.4,scaleX:1.08,scaleY:1.08,x:57.6,y:159.6,alpha:1},50).to({regX:57.5,scaleX:1,scaleY:1,x:57.5,y:159.5},65).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.4,23.2,98.3,272.8);


(lib.元件1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// 图层 413
	this.instance_4 = new lib.补间4("synched",0);
	this.instance_4.setTransform(488.1,290.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({startPosition:0},0).to({x:73.1},25).wait(11));

	// 图层 402 拷贝 2
	this.instance_5 = new lib.补间5("synched",0);
	this.instance_5.setTransform(520.2,290.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({startPosition:0},0).to({x:935.1},25).wait(11));

	// 组 12 拷贝 2
	this.instance_6 = new lib.补间7_1("synched",0);
	this.instance_6.setTransform(509,290.4,0.032,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({startPosition:0},0).to({scaleX:1,x:504.1},25).wait(11));

	// 图层 414
	this.instance_7 = new lib.补间6("synched",0);
	this.instance_7.setTransform(509.1,303.4,0.032,1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({startPosition:0},0).to({scaleX:0.15,alpha:1},3).to({scaleX:1},22).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(469.6,22.8,69.1,560.9);


(lib.li_1_87_75494复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 9
	this.instance = new lib.li_1_105_41959复制("synched",0);
	this.instance.setTransform(31.5,66.6,1,1,0,0,0,9.6,-25.2);

	this.instance_1 = new lib.li_1_106_35216复制("synched",0);
	this.instance_1.setTransform(71.5,6.6,1,1,0,0,0,20.1,-36.9);

	this.instance_2 = new lib.Bitmap2();
	this.instance_2.setTransform(25.1,55.2);

	this.instance_3 = new lib.Bitmap3();
	this.instance_3.setTransform(-7.7,59.6);

	this.instance_4 = new lib.Bitmap1();
	this.instance_4.setTransform(12.4,-1);

	this.instance_5 = new lib.Bitmap11复制();
	this.instance_5.setTransform(25.1,55.2);

	this.instance_6 = new lib.Bitmap12复制();
	this.instance_6.setTransform(-7.7,59.6);

	this.instance_7 = new lib.Bitmap5();
	this.instance_7.setTransform(12.4,-4.1);

	this.instance_8 = new lib.Bitmap14复制();
	this.instance_8.setTransform(25.1,55.2);

	this.instance_9 = new lib.Bitmap15();
	this.instance_9.setTransform(-7.7,59.6);

	this.instance_10 = new lib.Bitmap13复制();
	this.instance_10.setTransform(12.4,-6.4);

	this.instance_11 = new lib.Bitmap17();
	this.instance_11.setTransform(25.1,55.2);

	this.instance_12 = new lib.Bitmap18();
	this.instance_12.setTransform(-7.7,59.6);

	this.instance_13 = new lib.Bitmap16();
	this.instance_13.setTransform(12.4,-2);

	this.instance_14 = new lib.Bitmap21();
	this.instance_14.setTransform(25.1,55.2);

	this.instance_15 = new lib.Bitmap22复制();
	this.instance_15.setTransform(-7.7,59.6);

	this.instance_16 = new lib.Bitmap20();
	this.instance_16.setTransform(20.1,55.2);

	this.instance_17 = new lib.Bitmap19复制();
	this.instance_17.setTransform(12.4,-5.4);

	this.instance_18 = new lib.Bitmap25复制();
	this.instance_18.setTransform(25.1,55.2);

	this.instance_19 = new lib.Bitmap26复制();
	this.instance_19.setTransform(-7.7,59.6);

	this.instance_20 = new lib.Bitmap24复制();
	this.instance_20.setTransform(20.1,55.2);

	this.instance_21 = new lib.Bitmap23复制();
	this.instance_21.setTransform(12.4,-7.8);

	this.instance_22 = new lib.Bitmap30复制();
	this.instance_22.setTransform(25.1,55.2);

	this.instance_23 = new lib.Bitmap31复制();
	this.instance_23.setTransform(-7.7,59.6);

	this.instance_24 = new lib.Bitmap29复制();
	this.instance_24.setTransform(20.1,55.2);

	this.instance_25 = new lib.Bitmap27复制();
	this.instance_25.setTransform(12.4,-7.5);

	this.instance_26 = new lib.li_1_19_67836("synched",0);
	this.instance_26.setTransform(44.2,59.6,1,1,0,0,0,45.3,59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},19).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},1).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},5).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]},1).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]},1).to({state:[{t:this.instance_26,p:{startPosition:0}}]},1).to({state:[{t:this.instance_26,p:{startPosition:20}}]},20).to({state:[{t:this.instance_1},{t:this.instance}]},46).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,91.4,124.2);


(lib.li_1_85_19166复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 补间 11
	this.instance = new lib.li_1_107_42274复制("synched",0);
	this.instance.setTransform(54.1,66.6,1,1,0,0,0,-13.5,-25.2);

	this.instance_1 = new lib.Bitmap22();
	this.instance_1.setTransform(39.9,55.2);

	this.instance_2 = new lib.Bitmap24();
	this.instance_2.setTransform(39.9,55.2);

	this.instance_3 = new lib.Bitmap26();
	this.instance_3.setTransform(39.9,55.2);

	this.instance_4 = new lib.Bitmap28();
	this.instance_4.setTransform(39.9,55.2);

	this.instance_5 = new lib.Bitmap30();
	this.instance_5.setTransform(39.9,55.2);

	this.instance_6 = new lib.Bitmap32();
	this.instance_6.setTransform(39.9,55.2);

	this.instance_7 = new lib.Bitmap35复制();
	this.instance_7.setTransform(39.9,55.2);

	this.instance_8 = new lib.Bitmap39复制();
	this.instance_8.setTransform(44.8,59.8);

	this.instance_9 = new lib.Bitmap34();
	this.instance_9.setTransform(39.9,55.2);

	this.instance_10 = new lib.Bitmap37();
	this.instance_10.setTransform(39.9,55.2);

	this.instance_11 = new lib.Bitmap38();
	this.instance_11.setTransform(39.9,55.2);

	this.instance_12 = new lib.Bitmap41();
	this.instance_12.setTransform(39.9,55.2);

	this.instance_13 = new lib.li_1_20_412("synched",0);
	this.instance_13.setTransform(45.3,59.6,1,1,0,0,0,45.3,59.6);

	this.instance_14 = new lib.li_1_108_14388复制("synched",0);
	this.instance_14.setTransform(34.2,6.7,1,1,0,0,0,-3.9,-36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14},{t:this.instance}]},66).wait(285));

	// 补间 12
	this.instance_15 = new lib.li_1_108_14388复制("synched",0);
	this.instance_15.setTransform(34.2,6.7,1,1,0,0,0,-3.9,-36.8);

	this.instance_16 = new lib.Bitmap23();
	this.instance_16.setTransform(-1,-1);

	this.instance_17 = new lib.Bitmap25();
	this.instance_17.setTransform(1.5,-0.1);

	this.instance_18 = new lib.Bitmap27();
	this.instance_18.setTransform(1.2,-1.6);

	this.instance_19 = new lib.Bitmap29();
	this.instance_19.setTransform(2.8,-2.7);

	this.instance_20 = new lib.Bitmap31();
	this.instance_20.setTransform(3.8,-2.7);

	this.instance_21 = new lib.Bitmap33();
	this.instance_21.setTransform(4.7,-2.7);

	this.instance_22 = new lib.Bitmap38复制();
	this.instance_22.setTransform(39.9,55.2);

	this.instance_23 = new lib.Bitmap34复制();
	this.instance_23.setTransform(5.9,-2.7);

	this.instance_24 = new lib.Bitmap35();
	this.instance_24.setTransform(6.6,-2.7);

	this.instance_25 = new lib.Bitmap36();
	this.instance_25.setTransform(7.6,-2.7);

	this.instance_26 = new lib.Bitmap39();
	this.instance_26.setTransform(7.6,-2.7);

	this.instance_27 = new lib.Bitmap40();
	this.instance_27.setTransform(-0.5,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},19).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_23},{t:this.instance_22}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[]},1).wait(351));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,91.8,124.2);


(lib.li_1_18_87912 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"中间":0});

	// 图层 1
	this.instance = new lib.li_1_1_12824("single",0);
	this.instance.setTransform(0,0,1,1,0,0,0,62.7,72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({mode:"synched"},0).wait(39).to({mode:"single",startPosition:39},0).wait(32).to({mode:"synched"},0).wait(71).to({mode:"single",startPosition:30},0).wait(20).to({mode:"synched"},0).wait(31).to({mode:"single",startPosition:21},0).wait(79).to({mode:"synched",startPosition:30},0).wait(946));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-72.3,129,152);


(lib.元件2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.setTransform(474.9,279.8,1,1,0,0,0,510.5,302.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({startPosition:22},0).to({regX:510.4,regY:302.4,scaleX:0.72,scaleY:0.72,rotation:60,alpha:0,startPosition:41},19).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,947,560.9);


(lib.li_1_119_8678复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.li_1_18_87912("synched",0);
	this.instance.setTransform(16.1,-50.7,1,1,0,0,0,16,-50.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:13},13).to({scaleY:1,skewX:5.4,skewY:3.1,y:-50.6,startPosition:18},5).to({regX:15.9,regY:-50.4,skewX:-6.5,skewY:-4.4,x:16.3,y:-50.7,startPosition:24},6).to({regX:16,regY:-50.2,scaleY:1,skewX:3.3,skewY:2.5,x:16.1,y:-50.6,startPosition:32},8).to({regX:15.9,regY:-50.3,skewX:-5.2,skewY:-4.2,startPosition:42},10).to({regX:16,skewX:0,skewY:0,y:-50.7,startPosition:53},11).to({startPosition:88},35).to({regX:15.9,scaleY:1,skewX:-5.7,skewY:-3,startPosition:93},5).to({regX:16,skewX:4.4,skewY:2.4,startPosition:100},7).to({regX:15.9,scaleY:1,skewX:-1.9,skewY:-1.2,x:16.3,startPosition:109},9).to({regX:16,skewX:0,skewY:0,x:16.1,startPosition:119},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,-72.7,129.4,152);


(lib.li_1_99_70981复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		///*  this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// 元件 8
	this.instance = new lib.li_1_88_1074复制("synched",0);
	this.instance.setTransform(2.4,92.4,1,1,0,0,0,141.6,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:13},13).to({y:88.7,startPosition:18},5).to({y:95.2,startPosition:25},7).to({y:92.7,startPosition:33},8).to({startPosition:88},55).to({startPosition:95},7).to({startPosition:106},11).wait(34));

	// 图层 3
	this.instance_1 = new lib.li_1_119_8678复制("synched",0);
	this.instance_1.setTransform(0,-140.1,1,1,0,0,0,-2.1,-60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:13},13).to({y:-144.1,startPosition:18},5).to({y:-137.6,startPosition:25},7).to({y:-140.1,startPosition:33},8).to({startPosition:88},55).to({startPosition:95},7).wait(45));

	// 图层 4
	this.instance_2 = new lib.li_1_91_54753复制2("synched",0);
	this.instance_2.setTransform(80.1,-60.7,1,1,6.2,0,0,4,36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},13).to({regY:36.6,scaleY:1,rotation:0,skewX:3.2,x:79.4,y:-64},5).to({regX:3.9,regY:36.9,scaleX:1.2,scaleY:1,skewX:0.9,skewY:5.9,x:76.6,y:-53.7},7).to({regX:4,regY:36.6,scaleX:1,scaleY:1,rotation:-7.4,skewX:0,skewY:0,x:79.4,y:-59.9},10).to({regY:36.7,rotation:6.2,x:80.1,y:-60.7},9).to({regY:36.6,rotation:0,x:80,y:-60},10).to({startPosition:0},34).to({rotation:-7.4,x:79.4,y:-59.9},9).to({regY:36.7,rotation:6.2,x:80.1,y:-60.7},8).to({rotation:6.2},9).wait(26));

	// 图层 5
	this.instance_3 = new lib.li_1_92_48677复制2("synched",0);
	this.instance_3.setTransform(-68.7,-60.1,1,1,-6.7,0,0,6.2,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},13).to({regY:34.5,scaleY:1,rotation:0,skewX:-2.2,x:-70.3,y:-64},5).to({regX:6.1,skewX:-2.3,skewY:-4.5,x:-64.3,y:-54},7).to({regX:6.2,scaleY:1,rotation:7.7,skewX:0,skewY:0,x:-70.7,y:-59.2},8).to({regY:34.4,rotation:-6.7,x:-68.7,y:-60.2},9).to({regY:34.5,rotation:0,x:-69.9,y:-60},10).to({startPosition:0},36).to({rotation:7.7,x:-70.7,y:-59.2},7).to({regY:34.4,rotation:-6.7,x:-68.7,y:-60.2},8).to({y:-60.1},9).wait(28));

	// 图层 6
	this.instance_4 = new lib.li_1_122_6950复制("synched",0);
	this.instance_4.setTransform(3.2,154.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},13).to({y:150},5).to({y:156.5},7).to({y:154},8).to({startPosition:0},55).to({startPosition:0},7).wait(45));

	// 图层 7
	this.instance_5 = new lib.li_1_89_40717复制("synched",0);
	this.instance_5.setTransform(3.2,187.4,1,1,0,0,0,13.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:13},13).to({y:183.4,startPosition:18},5).to({y:189.9,startPosition:25},7).to({y:187.4,startPosition:33},8).to({startPosition:88},55).to({startPosition:95},7).wait(45));

	// 图层 8
	this.instance_6 = new lib.li_1_124_81140复制("synched",0);
	this.instance_6.setTransform(2.7,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},13).to({y:34.6},5).to({y:41.1},7).to({y:38.6},8).to({startPosition:0},55).to({startPosition:0},7).wait(45));

	// 图层 9
	this.instance_7 = new lib.li_1_125_93408复制("synched",0);
	this.instance_7.setTransform(1.8,106.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},13).to({y:102.8},5).to({y:109.3},7).to({y:106.8},8).to({startPosition:0},55).to({startPosition:0},7).wait(45));

	// 图层 10
	this.instance_8 = new lib.li_1_126_23199复制("synched",0);
	this.instance_8.setTransform(0,219.3,1,1,0,0,0,-3,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},13).to({y:219.9},5).to({startPosition:0},7).to({startPosition:0},8).to({startPosition:0},55).to({startPosition:0},7).wait(45));

	// 图层 11
	this.instance_9 = new lib.li_1_94_61884复制2("synched",0);
	this.instance_9.setTransform(90.8,-44.2,1,1,6.2,0,0,-31.4,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},13).to({regY:69.6,rotation:0,x:92.5,y:-40.7},5).to({regY:69.5,rotation:5.9,x:89.8,y:-51.2},7).to({regY:69.7,rotation:-7.4,x:93.8,y:-46.4},10).to({rotation:6.2,x:90.8,y:-44.2},9).to({regY:69.6,rotation:0,x:92.5,y:-44.7},10).to({startPosition:0},34).to({regY:69.7,rotation:-7.4,x:93.8,y:-46.4},9).to({rotation:6.2,x:90.8,y:-44.2},8).to({rotation:6.2},9).wait(26));

	// 图层 12
	this.instance_10 = new lib.li_1_96_21902复制2("synched",0);
	this.instance_10.setTransform(-90.1,-46.8,1,1,-6.7,0,0,31.1,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},13).to({regY:67.7,rotation:0,x:-92.7,y:-45.4},5).to({regY:67.8,rotation:-4.5,x:-91,y:-55.2},7).to({regY:67.7,rotation:7.7,x:-94.7,y:-51.8},8).to({regY:67.8,rotation:-6.7,x:-90.1,y:-46.9},9).to({regY:67.7,rotation:0,x:-92.7,y:-49.4},10).to({startPosition:0},36).to({rotation:7.7,x:-94.7,y:-51.8},7).to({regY:67.8,rotation:-6.7,x:-90.1,y:-46.9},8).to({y:-46.8},9).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.8,-230.6,413.9,457.6);


(lib.li_1_69_77011复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// 图层 4
	this.instance = new lib.li_1_85_19166复制("synched",19);
	this.instance.setTransform(338.8,546,1.012,1.003,0,19.3,20.3,15.7,11.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regY:11.9,scaleX:1.02,scaleY:1,skewX:29.8,skewY:30.8,x:344.1,y:538.3,startPosition:20},1).to({regY:11.8,scaleX:1.02,scaleY:0.99,skewX:37.6,skewY:38.9,x:349.8,y:534.1,startPosition:21},1).to({regY:11.9,scaleX:1.03,scaleY:0.99,skewX:45.6,skewY:47.1,x:352.8,y:528.4,startPosition:22},1).to({scaleX:1.04,scaleY:0.98,skewX:51.6,skewY:53.2,x:356.1,y:525.2,startPosition:23},1).to({scaleX:1.04,scaleY:0.98,skewX:57.6,skewY:59.4,x:358.4,y:521.8,startPosition:24},1).to({regX:15.6,regY:11.7,scaleX:1.05,scaleY:0.97,skewX:63.4,skewY:65.4,x:360,y:518.7,startPosition:25},1).to({regX:15.5,skewX:78.5,skewY:80.4,x:359.3,y:521.2,startPosition:26},1,cjs.Ease.get(-0.6)).to({scaleX:1.05,scaleY:0.97,skewX:108.1,skewY:110.1,x:358.4,y:526.6,startPosition:27},1).to({regX:15.6,scaleX:1.05,scaleY:0.97,skewX:138,skewY:140,x:362.7,y:531,startPosition:28},1).to({regX:15.5,regY:11.8,skewX:175.7,skewY:177.7,x:359.3,y:539.2,startPosition:29},1).to({regX:15.6,scaleX:1.05,scaleY:0.97,skewX:213.3,skewY:215.3,x:356.4,y:536.4,startPosition:30},1).to({regY:11.6,scaleX:1.05,scaleY:0.97,skewX:251,skewY:253,x:347.1,y:542,startPosition:31},1).to({regX:15.7,scaleX:1.05,scaleY:0.97,skewX:253.2,skewY:255.2,x:344.5,y:543.8,startPosition:32},1,cjs.Ease.get(-0.6)).to({regX:15.6,regY:11.7,scaleX:1.04,scaleY:0.98,skewX:257.2,skewY:258.9,x:342.8,y:547.2,startPosition:33},1).to({regY:11.6,scaleX:1.03,scaleY:0.98,skewX:262.5,skewY:264,x:341.1,y:551.8,startPosition:34},1).to({regX:15.7,regY:11.8,scaleX:1,scaleY:1.01,skewX:291.3,skewY:291.5,x:329.9,y:566.3,startPosition:38},4).to({skewX:270.6,skewY:270.8,x:331.7,y:550.2,startPosition:45},7).to({skewX:263.9,skewY:264.2,x:337.9,y:549.3,startPosition:50},5).to({startPosition:88},38).to({regX:15.6,scaleX:0.98,rotation:-118.1,skewX:360,skewY:360,x:351.7,y:544.3,startPosition:93},5).to({regX:15.7,regY:11.9,scaleX:0.99,scaleY:1,rotation:0,skewX:280.5,skewY:279.8,x:342.9,y:556,startPosition:95},2).to({scaleX:1.01,scaleY:0.98,skewX:344.1,skewY:341.8,x:328.1,y:572.4,startPosition:99},4).to({_off:true},1).wait(40));

	// 图层 3
	this.instance_1 = new lib.li_1_87_75494复制("synched",19);
	this.instance_1.setTransform(165.6,547.4,1.013,1.003,0,-39.6,-38.6,78.9,18.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({scaleX:1.02,scaleY:1,skewX:-58.9,skewY:-57.4,x:159.5,y:537.6,startPosition:20},1).to({scaleX:1.03,scaleY:0.99,skewX:-73.9,skewY:-71.9,x:154.5,y:531,startPosition:21},1).to({scaleX:1.04,scaleY:0.99,skewX:-88.7,skewY:-86.2,x:149.5,y:526,startPosition:22},1).to({regX:79,scaleX:0.99,scaleY:0.95,skewX:-120.3,skewY:-120,x:137,y:517.9,startPosition:25},3).to({regX:79.1,scaleX:0.97,scaleY:0.94,skewX:-128.5,skewY:-130.3,x:136.6,y:519.9,startPosition:26},1,cjs.Ease.get(-0.6)).to({regX:79,scaleX:1,scaleY:0.96,skewX:-148.2,skewY:-147.4,x:138.1,y:521.3,startPosition:27},1).to({scaleX:1.04,scaleY:0.98,skewX:-167.7,skewY:-164.7,x:139.4,y:522.7,startPosition:28},1).to({scaleX:1.03,scaleY:0.99,skewX:-195.8,skewY:-193.3,x:139.7,y:528.6,startPosition:29},1).to({scaleX:1.02,scaleY:1,skewX:-223.9,skewY:-222.1,x:144.2,y:536.9,startPosition:30},1).to({regY:19.1,scaleX:1.01,scaleY:1.01,skewX:-252,skewY:-251,x:153.7,y:545.3,startPosition:31},1).to({regY:19,scaleX:1.01,skewX:-266.5,skewY:-266,x:158.2,y:559.2,startPosition:34},3).to({regX:78.9,regY:18.9,scaleX:1,skewX:-285.5,skewY:-285.7,x:164.1,y:577.9,startPosition:38},4).to({skewX:-266.6,skewY:-266.8,x:156.6,y:562,startPosition:45},7).to({regX:78.8,skewX:-260.4,skewY:-260.6,x:153.2,y:560,startPosition:50},5).to({startPosition:88},38).to({regX:79,regY:18.8,scaleX:0.98,scaleY:1,skewX:-250.1,skewY:-250.1,x:139,y:556.7,startPosition:93},5).to({regX:78.9,regY:18.9,scaleX:1,scaleY:1.01,skewX:-293.9,skewY:-294.2,x:151.4,y:566.6,startPosition:95},2).to({_off:true},1).wait(44));

	// 图层 27
	this.instance_2 = new lib.li_1_99_70981复制("synched",0);
	this.instance_2.setTransform(249.9,449.9,1.002,1.002,0,0,0,5.3,223.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:13},13).to({regY:223.7,scaleX:1,scaleY:1,x:250,y:442.7,startPosition:18},5).to({regY:223.6,scaleX:1.03,scaleY:1.01,y:463.3,startPosition:25},7,cjs.Ease.get(0.6)).to({regX:5.4,regY:223.7,scaleX:1,scaleY:1,rotation:-3.5,x:262.2,y:438.3,startPosition:31},6,cjs.Ease.get(-0.6)).to({rotation:-2.8,x:257,y:450.6,startPosition:34},3).to({regX:5.3,regY:223.8,rotation:-2,x:250.1,y:466.9,startPosition:38},4).to({regY:223.7,rotation:0,x:250,y:448.6,startPosition:45},7).to({rotation:1.2,startPosition:50},5).to({startPosition:88},38).to({rotation:-1.5,x:250.1,y:458.2,startPosition:93},5).to({rotation:-2.7,y:466.9,startPosition:99},6).to({regX:5.4,rotation:-0.6,y:448.6,startPosition:106},7).to({regX:5.3,regY:223.8,scaleX:1,scaleY:1,rotation:0,x:249.9,y:449.9,startPosition:112},6).wait(28));

	// 图层 28
	this.instance_3 = new lib.li_1_80_6083复制("synched",0);
	this.instance_3.setTransform(251,590,1,1.007,0,0,0,85,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:13},13).to({scaleX:0.98,scaleY:1.02,y:586.2,startPosition:18},5).to({regX:85.2,scaleX:1.13,scaleY:1,x:251.9,y:592.1,startPosition:25},7,cjs.Ease.get(0.6)).to({regX:85,scaleX:0.98,scaleY:1.03,rotation:1.7,x:258.8,y:584.6,startPosition:31},6,cjs.Ease.get(-0.6)).to({scaleX:1.01,scaleY:1.01,rotation:0.8,x:255.5,y:592.2,startPosition:34},3).to({scaleX:1.05,scaleY:0.98,rotation:0,x:251.2,y:602.3,startPosition:3},4).to({scaleX:1,scaleY:1.01,x:251,y:590,startPosition:10},7).to({startPosition:15},5).to({startPosition:18},38).to({scaleY:0.99,y:594.1,startPosition:23},5).to({scaleX:1.05,scaleY:0.98,x:251.2,y:602.3,startPosition:29},6).to({scaleX:1,scaleY:1.01,x:251,y:590,startPosition:1},7).to({startPosition:7},6).wait(28));

	// 图层 32
	this.instance_4 = new lib.li_1_104_94571复制("synched",0);
	this.instance_4.setTransform(250.1,578.1,1,1.007,0,0,0,1.6,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},13).to({scaleY:1.02,y:574.1},5).to({scaleX:1.04,scaleY:1,x:250.5,y:580.3},7,cjs.Ease.get(0.6)).to({scaleX:0.99,scaleY:1.03,rotation:1.7,x:258.2,y:572.5},6,cjs.Ease.get(-0.6)).to({scaleX:1.02,scaleY:1.01,rotation:0.8,x:254.8,y:580.2},3).to({regX:1.5,scaleX:1.05,scaleY:0.98,rotation:0,x:250.2,y:590.6},4).to({regX:1.6,scaleX:1,scaleY:1.01,x:250.1,y:578.1},7).to({startPosition:0},5).to({startPosition:0},38).to({regY:23.8,scaleY:0.99,y:582.3},5).to({regX:1.5,regY:23.9,scaleX:1.05,scaleY:0.98,x:250.2,y:590.6},6).to({regX:1.6,scaleX:1,scaleY:1.01,x:250.1,y:578.1},7).to({startPosition:0},6).wait(28));

	// 元件 5
	this.instance_5 = new lib.li_1_98_68273复制2("synched",0);
	this.instance_5.setTransform(256.6,612.7,0.913,1.007,0,0,0,3.9,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:612,startPosition:13},13).to({regY:130,scaleY:1.02,y:608.6,startPosition:18},5).to({regX:3.8,regY:129.9,scaleX:0.96,scaleY:1.01,x:257.1,y:616.8,startPosition:25},7,cjs.Ease.get(0.6)).to({regX:3.9,regY:130,scaleX:0.91,scaleY:1.03,rotation:1.7,x:263.8,y:607.3,startPosition:31},6,cjs.Ease.get(-0.6)).to({regY:129.9,scaleX:0.93,scaleY:1.01,rotation:0.8,x:261,y:614.3,startPosition:34},3).to({scaleX:0.96,scaleY:0.98,rotation:0,x:257.2,y:623.8,startPosition:38},4).to({scaleX:0.91,scaleY:1.01,x:256.6,y:612,startPosition:45},7).to({startPosition:50},5).to({startPosition:88},38).to({scaleY:0.99,y:604.7,startPosition:93},5).to({scaleX:0.96,scaleY:0.98,x:257.2,y:623.8,startPosition:99},6).to({scaleX:0.91,scaleY:1.01,x:256.6,y:612,startPosition:106},7).to({y:612.7,startPosition:112},6).wait(28));

	// 图层 34
	this.instance_6 = new lib.li_1_87_75494复制("synched",0);
	this.instance_6.setTransform(175.5,568,1,1.006,0,-11.6,-11.8,78.9,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:13},13).to({scaleY:1.02,skewX:-3.6,skewY:-4,x:169.1,y:562.6,startPosition:18},5).to({_off:true},1).wait(77).to({_off:false,regX:79,regY:18.7,scaleX:1.02,scaleY:0.99,skewX:31.3,skewY:32.5,x:157.1,y:569.5,startPosition:96},0).to({regY:18.9,scaleX:1.05,scaleY:0.99,skewX:-3.9,skewY:-2,x:169.3,y:579.9,startPosition:99},3).to({regX:78.9,scaleX:1,scaleY:1.01,skewX:-16,skewY:-16.3,x:178.2,y:568.7,startPosition:106},7).to({skewX:-11.6,skewY:-11.8,x:175.5,y:568,startPosition:112},6).wait(28));

	// 图层 36
	this.instance_7 = new lib.li_1_85_19166复制("synched",0);
	this.instance_7.setTransform(328.8,559.3,1,1.006,0,8.6,8.8,15.7,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:13},13).to({scaleY:1.02,skewX:0.3,skewY:0.7,x:333.1,y:553.3,startPosition:18},5).to({_off:true},1).wait(81).to({_off:false,regY:11.9,scaleX:1.04,scaleY:0.99,skewX:-10.2,skewY:-11.1,x:328.3,y:570.4,startPosition:100},0).to({regY:11.8,scaleX:1,scaleY:1.01,skewX:13,skewY:13.2,x:326.6,y:560.1,startPosition:106},6).to({skewX:8.6,skewY:8.8,x:328.8,y:559.3,startPosition:112},6).wait(28));

	// 图层 40
	this.instance_8 = new lib.li_1_118_87296复制2("synched",0);
	this.instance_8.setTransform(247.4,484.3,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:247.5,y:485.8},13).to({scaleY:1.02,y:479.7},5).to({scaleX:1.05,scaleY:1.01,x:247.7,y:488.9},7,cjs.Ease.get(0.6)).to({scaleX:0.99,scaleY:1.03,rotation:1.7,x:258.5,y:477.3},6,cjs.Ease.get(-0.6)).to({scaleX:1.05,scaleY:0.98,rotation:0,x:247.5,y:499.6},7).to({scaleX:1,scaleY:1.01,y:484.9},7).to({startPosition:0},5).to({startPosition:0},38).to({scaleY:0.99,y:490.7},5).to({scaleX:1.05,scaleY:0.98,y:499.6},6).to({scaleX:1,scaleY:1.01,y:484.9},7).to({x:247.4,y:484.3},6).wait(28));

	// 图层 38
	this.instance_9 = new lib.li_1_109_6956复制("synched",0);
	this.instance_9.setTransform(317.2,491.2,1,1.006,0,8.6,8.8,-8.3,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},13).to({regY:-33.2,scaleY:1.02,skewX:5.3,skewY:5.7,x:317.5,y:485.1},5).to({regX:-8.1,regY:-33,scaleX:1.04,scaleY:0.98,skewX:-21.1,skewY:-25.1,x:318.3,y:482.4},7,cjs.Ease.get(0.6)).to({regX:-8.2,regY:-33.2,scaleX:0.99,scaleY:1.03,skewX:-0.9,skewY:-0.6,x:329.5,y:479.8},6,cjs.Ease.get(-0.6)).to({regX:-8.3,regY:-33.3,scaleX:1,scaleY:1.01,skewX:5,skewY:5.3,x:317.7,y:503.1},7).to({skewX:0.8,skewY:1,x:317.8,y:488.6},7).to({regY:-33.2,skewX:-1.4,skewY:-1.2,x:318.1,y:487.9},5).to({skewY:-1.2},38).to({regY:-33.3,scaleY:0.99,skewX:-15.1,skewY:-14.9,x:318.2,y:490.8},5).to({scaleX:1.05,scaleY:0.99,skewX:12.9,skewY:11.9,x:320.4,y:507},6).to({scaleX:1,scaleY:1.01,skewX:10,skewY:10.3,x:316.9,y:491.6},7).to({skewX:8.6,skewY:8.8,x:317.2,y:491.2},6).wait(28));

	// 图层 39
	this.instance_10 = new lib.li_1_110_44341复制("synched",0);
	this.instance_10.setTransform(190.6,480.2,1,1.006,0,-11.6,-11.8,23.8,-43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:13},13).to({regX:23.7,scaleY:1.02,skewX:-7.5,skewY:-8,x:190.5,y:474.9,startPosition:18},5).to({scaleX:1.01,scaleY:1.01,skewX:21.3,skewY:23.9,x:197.5,y:475.5,startPosition:25},7,cjs.Ease.get(0.6)).to({regX:23.6,regY:-43,scaleX:1,scaleY:1.02,skewX:2.1,skewY:2.5,x:200,y:469,startPosition:31},6,cjs.Ease.get(-0.6)).to({regX:23.8,regY:-43.1,scaleX:1,scaleY:1.01,skewX:-10.5,skewY:-10.7,x:190.4,y:493.2,startPosition:38},7).to({skewX:-7.1,skewY:-7.3,y:480,startPosition:45},7).to({skewX:-5.3,skewY:-5.6,y:479.6,startPosition:50},5).to({startPosition:88},38).to({regX:23.9,regY:-43,scaleX:1,scaleY:0.99,skewX:5,skewY:4.9,y:485.5,startPosition:93},5).to({regX:23.8,regY:-43.1,scaleX:1.05,scaleY:0.99,skewX:-10.9,skewY:-9,x:187.9,y:494.6,startPosition:99},6).to({regY:-43,scaleX:1,scaleY:1.01,skewX:-13.3,skewY:-13.5,x:190.6,y:480.5,startPosition:106},7).to({regY:-43.1,skewX:-11.6,skewY:-11.8,y:480.2,startPosition:112},6).wait(28));

	// 图层 41
	this.instance_11 = new lib.li_1_112_50172复制("synched",0);
	this.instance_11.setTransform(248.1,504.2,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({startPosition:0},13).to({scaleY:1.02,y:499.2},5).to({scaleX:1.05,scaleY:1.01,x:248.5,y:508.2},7,cjs.Ease.get(0.6)).to({scaleX:0.99,scaleY:1.03,rotation:1.7,x:258.5,y:497},6,cjs.Ease.get(-0.6)).to({scaleX:1.05,scaleY:0.98,rotation:0,x:248.1,y:518.4},7).to({scaleX:1,scaleY:1.01,y:504.2},7).to({startPosition:0},5).to({startPosition:0},38).to({scaleY:0.99,y:509.6},5).to({scaleX:1.05,scaleY:0.98,y:518.4},6).to({scaleX:1,scaleY:1.01,y:504.2},7).to({startPosition:0},6).wait(28));

	// 图层 42
	this.instance_12 = new lib.li_1_113_33764复制("synched",0);
	this.instance_12.setTransform(251.1,723.1,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({startPosition:0},13).to({scaleX:0.98,scaleY:1.02,x:251,y:721.2},5).to({scaleX:1.1,scaleY:1,x:251.7,y:722.2},7,cjs.Ease.get(0.6)).to({scaleX:0.98,scaleY:1.03,rotation:1.7,x:254.8,y:720.5},6,cjs.Ease.get(-0.6)).to({scaleX:1.05,scaleY:0.98,rotation:0,x:251.3,y:726},7).to({scaleX:1,scaleY:1.01,x:251.1,y:723.1},7).to({startPosition:0},5).to({startPosition:0},38).to({scaleX:1.02,scaleY:0.99,y:725.2},5).to({scaleX:1.05,scaleY:0.98,x:251.3,y:726},6).to({scaleX:1,scaleY:1.01,x:251.1,y:723.1},7).to({startPosition:0},6).wait(28));

	// 图层 44
	this.instance_13 = new lib.li_1_116_2334复制("synched",0);
	this.instance_13.setTransform(173.7,683.4,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:686.6,startPosition:13},13).to({scaleX:0.98,scaleY:1.02,x:175.4,y:685.6,startPosition:18},5).to({scaleX:1.13,scaleY:1,x:166.1,y:695.7,startPosition:25},7,cjs.Ease.get(0.6)).to({scaleX:0.98,scaleY:1.03,rotation:1.7,x:183.3,y:689.9,startPosition:31},6,cjs.Ease.get(-0.6)).to({scaleX:1.05,scaleY:0.98,rotation:0,x:173.3,y:703.5,startPosition:38},7).to({scaleX:1,scaleY:1.01,x:174.5,y:690.4,startPosition:45},7).to({x:172.3,y:689.7,startPosition:50},5).to({x:178.8,y:694.1,startPosition:70},20).to({x:173,y:689.8,startPosition:86},16).to({x:173.1,y:690.2,startPosition:88},2).to({scaleY:0.99,x:174.7,y:692.8,startPosition:93},5).to({scaleX:1.05,scaleY:0.98,x:172.8,y:703.2,startPosition:99},6).to({scaleX:1,scaleY:1.01,x:177.8,y:696.3,startPosition:106},7).to({x:176.1,y:692.2,startPosition:112},6).to({x:172.4,y:690,startPosition:121},9).to({x:174,y:691.3,startPosition:126},5).to({x:178.4,y:694.8,startPosition:139},13).wait(1));

	// 图层 45
	this.instance_14 = new lib.li_1_117_5241复制("synched",0);
	this.instance_14.setTransform(323.9,669.9,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:330.3,y:664.3,startPosition:13},13).to({scaleX:0.98,scaleY:1.02,x:329,y:660.1,startPosition:18},5).to({scaleX:1.13,scaleY:1,x:337.7,y:667.2,startPosition:25},7,cjs.Ease.get(0.6)).to({scaleX:0.98,scaleY:1.03,rotation:1.7,x:328.5,y:665,startPosition:31},6,cjs.Ease.get(-0.6)).to({scaleX:1.05,scaleY:0.98,rotation:0,x:328.9,y:676.9,startPosition:38},7).to({scaleX:1,scaleY:1.01,x:329.4,y:665.8,startPosition:3},7).to({x:331.8,y:663.4,startPosition:8},5).to({x:322.9,y:668.5,startPosition:28},20).to({x:333.5,y:663.1,startPosition:2},16).to({x:331.3,y:664.3,startPosition:4},2).to({scaleY:0.99,x:329.4,y:668.9,startPosition:9},5).to({scaleX:1.05,scaleY:0.98,y:677.6,startPosition:15},6).to({scaleX:1,scaleY:1.01,x:323.2,y:668.2,startPosition:22},7).to({x:327.1,y:665.1,startPosition:28},6).to({x:333.1,y:664.2,startPosition:37},9).to({x:329,y:662.5,startPosition:0},5).to({x:323.3,y:666.6,startPosition:13},13).wait(1));

	// 元件 4
	this.instance_15 = new lib.li_1_139_29141复制("synched",0);
	this.instance_15.setTransform(309.7,618.3,0.913,1.007,0,0,0,10,85.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({startPosition:13},13).to({x:309.4,startPosition:18},5).to({scaleX:0.94,scaleY:1,x:301.3,y:611.6,startPosition:19},1,cjs.Ease.get(0.6)).to({scaleX:0.96,scaleY:1,x:305.5,y:603.9,startPosition:21},2).to({scaleX:0.98,scaleY:1,x:311.8,y:598.7,startPosition:23},2).to({regX:10.1,scaleX:0.99,scaleY:1,x:313.6,y:596.1,startPosition:24},1).to({regX:10,regY:85,scaleX:1,scaleY:1,x:311.5,y:593.3,startPosition:25},1).to({regY:85.1,scaleX:0.97,scaleY:1.01,rotation:0.5,x:311.6,y:600,startPosition:28},3,cjs.Ease.get(-0.6)).to({scaleX:0.95,scaleY:1.01,rotation:0.8,x:303.8,y:604.1,startPosition:29},1).to({regY:85.2,scaleX:0.91,scaleY:1.03,rotation:1.7,x:307.4,y:612.4,startPosition:31},2).to({regY:85.1,scaleX:0.96,scaleY:0.98,rotation:0,x:312.6,y:629.9,startPosition:38},7).to({scaleX:0.91,scaleY:1.01,x:297.2,y:616.6,startPosition:45},7).to({x:300,y:616,startPosition:50},5).to({startPosition:88},38).to({x:309.4,y:618.3,startPosition:93},5).to({scaleX:0.96,scaleY:0.98,x:312.6,y:629.9,startPosition:99},6).to({scaleX:0.91,scaleY:1.01,x:309.4,y:618.3,startPosition:106},7).to({x:309.7,startPosition:112},6).wait(28));

	// 图层 47
	this.instance_16 = new lib.li_1_118_52566复制("synched",0);
	this.instance_16.setTransform(282.3,593.7,1,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({startPosition:13},13).to({scaleY:1.02,y:589.9,startPosition:18},5).to({scaleX:1.01,scaleY:1.01,x:282.7,y:598.3,startPosition:25},7,cjs.Ease.get(0.6)).to({scaleX:0.99,scaleY:1.03,rotation:1.7,x:290.2,y:588.8,startPosition:31},6,cjs.Ease.get(-0.6)).to({scaleX:1.05,scaleY:0.98,rotation:0,x:283.5,y:606.2,startPosition:38},7).to({scaleX:1,scaleY:1.01,x:282.3,y:593.7,startPosition:45},7).to({startPosition:50},5).to({startPosition:37},38).to({scaleY:0.99,y:598,startPosition:42},5).to({scaleX:1.05,scaleY:0.98,x:283.5,y:606.2,startPosition:48},6).to({scaleX:1,scaleY:1.01,x:282.3,y:593.7,startPosition:4},7).to({startPosition:10},6).wait(28));

	// gergerherhre
	this.instance_17 = new lib.li_1_134_15167复制("synched",0);
	this.instance_17.setTransform(190.1,621,0.913,1.007,0,0,180,12.5,85.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({startPosition:13},13).to({regY:85.7,scaleY:1.02,y:617.8,startPosition:18},5).to({regY:85.6,scaleX:0.93,scaleY:1.02,x:196.3,y:619.4,startPosition:19},1,cjs.Ease.get(0.6)).to({scaleX:0.93,scaleY:1.02,x:193.1,y:614.3,startPosition:20},1).to({regY:85.7,scaleX:0.94,scaleY:1.02,x:188.5,y:609.3,startPosition:21},1).to({regX:12.4,regY:85.6,scaleX:0.96,scaleY:1.01,x:187.3,y:603.1,startPosition:25},4).to({regY:85.5,scaleX:0.95,scaleY:1.02,skewX:0.3,skewY:180.3,x:190.4,y:605.1,startPosition:27},2,cjs.Ease.get(-0.6)).to({regY:85.6,scaleX:0.94,scaleY:1.02,skewX:0.5,skewY:180.5,x:200.1,y:607.1,startPosition:28},1).to({regY:85.5,scaleX:0.93,scaleY:1.02,skewX:0.8,skewY:180.8,x:202.3,y:619.3,startPosition:29},1).to({regX:12.5,regY:85.7,scaleX:0.91,scaleY:1.03,skewX:1.7,skewY:181.7,x:203.9,y:614.6,startPosition:31},2).to({regY:85.6,scaleX:0.96,scaleY:0.98,skewX:0,skewY:180,x:187.1,y:632.6,startPosition:38},7).to({scaleX:0.91,scaleY:1.01,x:190.1,y:621,startPosition:45},7).to({startPosition:50},5).to({startPosition:88},38).to({scaleY:0.99,y:624.7,startPosition:93},5).to({scaleX:0.96,scaleY:0.98,x:188.5,y:642.4,startPosition:99},6).to({scaleX:0.91,scaleY:1.01,x:190.1,y:621,startPosition:106},7).to({startPosition:112},6).wait(28));

	// 图层 2
	this.instance_18 = new lib.li_1_131_92409复制2("synched",0);
	this.instance_18.setTransform(254.9,851.1,1.005,1.022);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(112).to({startPosition:0},0).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.8,-5.4,458.1,870.6);


(lib.li_1_14_55587 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// h_0
	this.h_0 = new lib.li_1_16_87274();
	this.h_0.setTransform(970.4,142.7,1,1,0,0,0,204,56.5);

	this.timeline.addTween(cjs.Tween.get(this.h_0).wait(1));

	// h_3
	this.h_3 = new lib.li_1_69_77011复制();
	this.h_3.setTransform(535.8,698.4,0.673,0.673,0,0,0,248.3,433.9);

	this.timeline.addTween(cjs.Tween.get(this.h_3).wait(1));

	// h_2
	this.h_2 = new lib.fvsdgsdgsg复制();
	this.h_2.setTransform(540.1,697.4,0.673,0.673,0,0,0,254.8,431.7);

	this.timeline.addTween(cjs.Tween.get(this.h_2).wait(1));

	// h_1
	this.h_1 = new lib.li_1_74_57695复制3();
	this.h_1.setTransform(540.2,697.5,0.673,0.673,0,0,0,254.8,431.7);

	this.timeline.addTween(cjs.Tween.get(this.h_1).wait(1));

	// guzheng
	this.guzheng = new lib.元件4();
	this.guzheng.setTransform(1180.5,839.5,1,1,0,0,0,438.5,159.5);

	this.timeline.addTween(cjs.Tween.get(this.guzheng).wait(1));

	// mc_2
	this.mc_2 = new lib.元件8();
	this.mc_2.setTransform(1294.2,619.7,1,1,0,0,0,352.6,166.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_2).wait(1));

	// mc_1
	this.mc_1 = new lib.元件5_1();
	this.mc_1.setTransform(1294.9,613.4,1,1,0,0,0,350.5,160);

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

	// J_1
	this.J_1 = new lib.元件1_1();
	this.J_1.setTransform(1298.8,624.4,1,1,0,0,0,510.5,302.5);

	this.timeline.addTween(cjs.Tween.get(this.J_1).wait(1));

	// J_2
	this.J_2 = new lib.元件2_1();
	this.J_2.setTransform(1297.4,625,1,1,0,0,0,473.5,280.4);

	this.timeline.addTween(cjs.Tween.get(this.J_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(382.8,53.2,1388.1,945.8);


// stage content:
(lib._20_p7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ral
	this.ral = new lib.元件4_1();
	this.ral.setTransform(1734.5,1012,1,1,0,0,0,118.5,51);

	this.timeline.addTween(cjs.Tween.get(this.ral).wait(1));

	// mc_1
	this.mc_1 = new lib.元件2();
	this.mc_1.setTransform(961.5,506.5,1,1,0,0,0,57.5,159.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_1).wait(1));

	// mc_0
	this.mc_0 = new lib.li_1_14_55587();
	this.mc_0.setTransform(1056.3,263.4,1,1,0,0,0,1066.7,273.6);

	this.timeline.addTween(cjs.Tween.get(this.mc_0).wait(1));

	// bg
	this.bg = new lib.元件7();
	this.bg.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;