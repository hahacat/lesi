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
    this.nextUrl = 1;
    this.currUrl = "p7";
    this.preUrl = "p6";
    this.titles = ["mc_1","mc_2"];
    this.vv = null;
};

PageThree.prototype.startPlay = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    that.h_0.play();
    that.h_3.play();
    that.J_1.play();
    those.bgm = those.tApp.playVoiceGame("memories","globalBgm");
    this.change();
};

PageThree.prototype.stopPlay = function () {
    var that = this.exportRoot;
    var those=this;
    those.tApp.animationEnd(that.mc_1,true);
    those.hideAll();
    those.tApp.animationEnd(that.mc_0.J_1,true);
    those.tApp.animationEnd(that.mc_0.J_2,true);
    those.tApp.eleControl(that.mc_0.J_2,{alpha:0});
    those.tApp.animationEnd(that.mc_0.h_1,true);
    those.tApp.eleControl(that.mc_0.h_1,{alpha:0});
    those.tApp.eleControl(that.mc_0.h_2,{alpha:0});
    those.tApp.eleControl(that.mc_0.h_3,{alpha:1});
    those.tApp.animationEnd(that.mc_0.h_2,true);
    those.tApp.animationEnd(that.mc_0.h_0,true);
    those.tApp.animationEnd(that.mc_0.h_3,true);
    those.tApp.animationEnd(that.mc_0.h_1,true);

    those.tApp.eleControl(that.mc_0.guzheng,{alpha:0});
};
PageThree.prototype.hideAll = function () {
    var that = this.exportRoot.mc_0;
    var those=this;
    $.each(those.titles,function(i,d){
        those.tApp.eleControl(that[d],{alpha:0});
    });
};
PageThree.prototype.change = function (){
    var that = this.exportRoot;
    var those = this;
    that.mc_0.h_3.timeline.addEventListener('change',function(e){
        if(that.mc_0.h_3.timeline.position == that.mc_0.h_3.timeline.duration - 1){
            those.tApp.eleControl(that.mc_0.h_3,{alpha:0});
            those.tApp.eleControl(that.mc_0.h_2,{alpha:1});
            that.mc_0.h_2.play();
        }
    });
    that.mc_0.J_1.timeline.addEventListener('change',function(e){
        if(that.mc_0.J_1.timeline.position == that.mc_0.J_1.timeline.duration - 1){
            those.tApp.eleControl(that.mc_0.mc_1,{alpha:1});
            those.step = 1;
        }else{
            those.step = -1;
        }
    });
    that.mc_0.J_2.timeline.addEventListener('change',function(e){
        if(that.mc_0.J_2.timeline.position == that.mc_0.J_2.timeline.duration - 1){
            those.tApp.eleControl(that.mc_0.guzheng,{alpha:1},300);
            those.saygoodbay = createjs.Sound.play("schoolOver");
            those.tApp.eleControl(that.mc_0.h_2,{alpha:0});
            those.tApp.eleControl(that.mc_0.h_1,{alpha:1});
            that.mc_0.h_1.play();

            those.tApp.animationEnd(that.mc_0.h_3,true);
            those.tApp.eleControl(that.mc_0.h_3,{alpha:0});
        }
    });
    that.mc_0.h_1.timeline.addEventListener('change',function(e){
        if(that.mc_0.h_1.timeline.position == that.mc_0.h_1.timeline.duration - 1){
            those.tApp.eleControl(that.mc_0,{alpha:0});
            createjs.Sound.play("common_tone");
            that.mc_1.play();
        }
    });
}
//----------------------------------------------------------------------
PageThree.prototype.nextTitle = function (){
    var that = this.exportRoot.mc_0;
    var those = this;
    if (those.step < those.titles.length) {
        createjs.Sound.play("common_tone");
        those.step++;
        console.log(those.titles[those.step - 1]+"--------------");
        those.hideAll();
        those.tApp.eleControl(that[those.titles[those.step - 1]],{alpha:1});
    }else{
        console.log(those.step+"/"+those.titles.length)
        if (those.step > those.titles.length) return;
        those.step++;
        those.hideAll();
        those.tApp.eleControl(that.J_1,{alpha:0});
        those.tApp.eleControl(that.J_2,{alpha:1});
        createjs.Sound.play("common_tone");
        that.J_2.play();
    }
}
PageThree.prototype.preTitle = function(){
    var that = this.exportRoot.mc_0;
    var mc_3 = this.exportRoot.mc_1;
    var btn = this.exportRoot.ral;
    var those = this;
    if (those.step == 1){
        those.extendPrePage(true,null,those.preUrl);
    }else if (those.step <= those.titles.length) {
        createjs.Sound.play("common_tone");
        those.step--;
        console.log(those.titles[those.step - 1]+"--------------");
        those.hideAll();
        those.tApp.eleControl(that[those.titles[those.step - 1]],{alpha:1});
    }else{
        those.step--;
        those.tApp.animationEnd(that.h_1,true);
        those.tApp.animationEnd(that.J_1);
        those.tApp.animationEnd(that.J_2,true);
        those.tApp.eleControl(that.J_1,{alpha:1});
        those.tApp.animationEnd(mc_3,true);
        those.tApp.eleControl(that.guzheng,{alpha:0});
        those.tApp.eleControl(that[those.titles[those.titles.length-1]],{alpha:1});
        those.tApp.eleControl(that.h_2,{alpha:1});
        that.h_2.play();
        those.tApp.eleControl(that.h_1,{alpha:0});
        those.tApp.eleControl(that,{alpha:1});
        if (those.saygoodbay) {
            those.saygoodbay.stop();
        }
    }
}
//-------------------------------------------------------------------
/***********************************功能扩展*******************************************/

/**
 * shang一步
 */
PageThree.prototype.extendPreStep = function () {
    var that = this.exportRoot.mc_0;
    var those=this;
    if (those.step == -1) return;
    those.preTitle();
};

/**
 * 下一步
 */
PageThree.prototype.extendNextStep = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (those.step == -1) return;
    those.nextTitle();
    // if (those.step == 0) {
    //     those.nextTitle();
    // }
    // else if (those.step == 1) {
    //     those.extendNextPage(null,null,those.nextUrl);
    // }
};

/**
 * OK / Enter
 */
PageThree.prototype.extendOkOrEnter = function () {
    var those = this;
    var that = this.exportRoot.mc_0;
    console.log(those.step)
};
PageThree.prototype.choice = function (code) {
    var that = this.exportRoot.mc_0;
    var those = this;
    console.log(code);
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
