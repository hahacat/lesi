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
function PageThree(canvas, stage,exportRoot) {
    pageApp.call(this,canvas,stage,exportRoot);
};

PageThree.prototype = new pageApp();

PageThree.prototype.init = function () {
    /**配置**/
    this.tApp = new H5App();
    this.step = 0;
    this.nextUrl = "p4";
    this.currUrl = "p3";
    this.preUrl = "p2";
    this.instance = null;
};

PageThree.prototype.startPlay = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    var isFinsh = this.tApp.getUrl("id");
    // console.log(isFinsh)
    // if(isFinsh == "yes"){
    //     
    // }else{
    //     console.log("开始时执行")
    //     
    // }
    that.mc_1.play();
    those.tApp.bgmLoop("globalBgm");
};

PageThree.prototype.stopPlay = function () {
    var that = this.exportRoot;
    var those=this;
    those.hideAll();
};
PageThree.prototype.hideAll = function () {
    var that = this.exportRoot.mc_0;
    var those=this;
    those.tApp.animationEnd(that.mc_1,true);
    those.tApp.animationEnd(that.h_1,true);
    those.tApp.eleControl(that.mc_2,{alpha:0});
    those.tApp.eleControl(that.h_1,{alpha:0});
};

//----------------------------------------------------------------------
PageThree.prototype.Num_1 = function (){
    var that = this.exportRoot.mc_0;
    var those = this;
    createjs.Sound.play("common_tone");
    those.tApp.eleControl(that.mc_2,{alpha:1},300);
    those.tApp.eleControl(that.h_1,{alpha:1});
    that.h_1.play();
    those.instance = createjs.Sound.play("3-1");
    // those.instance.on("complete",function(){
    //     those.instance = createjs.Sound.play("p3");
    // })
    those.step = 1;
}

//-------------------------------------------------------------------
/***********************************功能扩展*******************************************/

/**
 * shang一步
 */
PageThree.prototype.extendPreStep = function () {
    var that = this.exportRoot.mc_0;
    var those=this;
    if (those.step == 1) {
        those.stopPlay();
        those.instance.stop();
        those.tApp.animationEnd(that.mc_1,false);
        those.step--;
    }
    else{
        those.extendPrePage(true,null,those.preUrl);
    }
    
};

/**
 * 下一步
 */
PageThree.prototype.extendNextStep = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (those.step == 0) {
        those.Num_1();
    }
    else{
        those.extendNextPage(null,null,those.nextUrl);
    }
};

/**
 * OK / Enter
 */
PageThree.prototype.extendOkOrEnter = function () {
    var those = this;
    var that = this.exportRoot;
    
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
