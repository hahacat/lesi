
function HeadTool(canvas, stage, exportRoot, pt) {
    this.canvas = canvas;
    this.stage = stage;
    this.exportRoot = exportRoot;
    this.TXArray = [];//用来保存头像和位置的数组
    this.studentNum = 0;
    this.scoreArray = [
        // [1,11],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,18],[9,19],[10,20],
        // [11,11],[12,12],[13,13],[14,14],[15,15]
    ];//成绩的数组 ,[7,17],[8,18],[9,19],[10,20]
    this.tempScoreArray = [];//临时成绩数组，从scoreArray中抽取六个 成绩单显示此数组数据

    this.headIconPosition = [-2070, -1920, -1770, -1620, -1470, -1321, -1170, -1020, -870, -720, -570, -420, -270, -120, 30, 180, 330, 480, 630, 780, 930, 1080, 1230, 1321, 1530, 1680, 1830, 1980, 2130, 2280, 2430, 2580, 2730, 2880];//20个头像坐标
    this.headShadowPosition = [102, 252, 402, 552, 702, 852, 1002];//头像阴影框坐标
    this.headMove = 0; //头像移动的次数
    this.connectDevice = [];//记录连接设备的数组 1,2,3,4,5,6,7,8,9,10,11,12,13
    this.ylocation = [];
    this.pageThree = pt;
    this.CJArray = [];//用来保存成绩结算界面所有bitmap的数组
    this.currentScorePageNum = 0;//当前成绩页页数，0显示0到6名成绩，1显示7-12名成绩
    this.firstArray = [];//用来保存第一名的头像
    this.isScoreShow = false;//成绩界面是否出现

};
HeadTool.prototype.Bingo = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    var headName = "";
    var PnumName = "";
    var Name = "";
    those.faceStr = "../../../../com_Sound/img/";
    those.PnumStr = "../../../../com_Sound/img/";
    those.NameStr = "../../../../com_Sound/img/";
    // console.log(those.scoreArray);
    for (var i = 0; i < those.scoreArray.length; i++) {
        headName = "bum" + (i + 1);
        PnumName = "Pnum" + (i + 1);
        Name = "name" + (i + 1);
        //头像
        those.headName = new createjs.Bitmap(those.faceStr + "head" + (those.scoreArray[i][0]) + ".png");
        //个数
        those.PnumName = new createjs.Bitmap(those.PnumStr + "num" + (those.scoreArray[i][1]) + ".png");
        //姓名
        those.Name = new createjs.Bitmap(those.PnumStr + "name" + (those.scoreArray[i][0]) + ".png");
        if (i == 0) {
            those.headName.x = 399;
            those.headName.y = 545;
            those.PnumName.x = 550;
            those.PnumName.y = 620;
            those.Name.x = 550;
            those.Name.y = 560;
        }
        else if (i > 0 && i < 3) {
            those.headName.x = 845 + (i - 1) * 450;
            those.headName.y = 538;
            those.PnumName.x = 990 + (i - 1) * 450;
            those.PnumName.y = 615;
            those.Name.x = 990 + (i - 1) * 450;
            those.Name.y = 560;
        }
        else if (i == 3) {
            those.headName.x = 845 - 445;
            those.headName.y = 728;
            those.PnumName.x = 990 - 450;
            those.PnumName.y = 805;
            those.Name.x = 550;
            those.Name.y = 750;
        }
        else if (i > 3 && i < 6) {
            those.headName.x = 845 + (i - 4) * 450;
            those.headName.y = 728;
            those.PnumName.x = 990 + (i - 4) * 450;
            those.PnumName.y = 805;
            those.Name.x = 990 + (i - 4) * 450;
            those.Name.y = 750;
        }

        stage.addChild(those.headName);
        stage.addChild(those.PnumName);
        stage.addChild(those.Name);
        those.TXArray.push(those.headName);
        those.TXArray.push(those.PnumName);
        those.TXArray.push(those.Name);
    }

}
//插入一个头像
HeadTool.prototype.insertToConecntion = function (id) {
    var that = this.exportRoot.mc_0;
    var those = this;
    var index;
    //判断记录连接设备的数组是否包含当前设备id
    if (!contains(those.connectDevice, id)) {
        //插入设备id
        those.connectDevice.push(id + "");
        //按设备号大小排序此数组
        those.connectDevice.sort(those.cmp);
        //判断当前设备在数组中的位置
        for (var i = 0; i < those.connectDevice.length; i++) {
            if (id == those.connectDevice[i]) {
                index = i;
                break;
            }
        }
        // console.log(id);
        those.addHead(id);

    }
}
/**
 * [changePosition 改变所有头像的位置，在按AB的时候]
 * @return {[type]} [description]
 */
HeadTool.prototype.changePositionB = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    var headNum;
    if (those.TXArray.length < 12) {
        headNum = those.TXArray.length / 2;
    }
    else {
        headNum = 6;
    }
    if (those.headMove == headNum) {
        // 头像
        for (var i = 0; i < those.TXArray.length; i++) {
            //只有头像个数大于6个才能往上移动
            if (those.TXArray.length > 12) {
                //只有最后一个头像的坐标大于底线的时候，才能头像上移
                if (those.TXArray[those.TXArray.length - 2].y > 180 + 5 * 150 && i % 2 == 0) {
                    if (those.TXArray[i].y < those.headIconPosition[15]) {//头像坐标小于330的时候
                        createjs.Tween.get(those.TXArray[i], { override: true }).to({ y: those.headIconPosition[those.getHeadIndex(those.TXArray[i].y) - 1], alpha: 0 }, 0);
                        createjs.Tween.get(those.TXArray[i + 1], { override: true }).to({ y: those.headIconPosition[those.getHeadIndex(those.TXArray[i].y) - 1] + 100, alpha: 0 }, 0);
                    }
                    else {
                        createjs.Tween.get(those.TXArray[i], { override: true }).to({ y: those.headIconPosition[those.getHeadIndex(those.TXArray[i].y) - 1], alpha: 1 }, 100);
                        createjs.Tween.get(those.TXArray[i + 1], { override: true }).to({ y: those.headIconPosition[those.getHeadIndex(those.TXArray[i].y) - 1] + 100, alpha: 1 }, 100);
                    }
                }
            }
        }
    }
    //头像选中框
    if (those.headMove < headNum) {
        those.headMove++;
        createjs.Tween.get(that.mc_0.mc_0, { override: true }).to({ y: those.headShadowPosition[those.headMove] }, 100);
    }

}
HeadTool.prototype.changePositionA = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (those.headMove == 1) {
        // 头像
        for (var i = those.TXArray.length - 1; i >= 0; i--) {
            // 只有头像个数大于6个才能往下移动
            // console.log(those.TXArray.length);
            if (those.TXArray.length > 12) {
                //只有第二个头像的坐标等于初始坐标的时候，才能头像下移
                if (those.TXArray[3].y < 330 && i % 2 == 0) {
                    if (those.TXArray[i].alpha != 0) {
                        // console.log("出来了");
                        createjs.Tween.get(those.TXArray[i], { override: true }).to({ y: those.headIconPosition[those.getHeadIndex(those.TXArray[i].y) + 1], alpha: 1 }, 100);
                        createjs.Tween.get(those.TXArray[i + 1], { override: true }).to({ y: those.headIconPosition[those.getHeadIndex(those.TXArray[i].y) + 1] + 100, alpha: 1 }, 100);
                    }
                    else {
                        // console.log("break");
                        createjs.Tween.get(those.TXArray[i], { override: true }).to({ y: 180, alpha: 1 }, 0);
                        createjs.Tween.get(those.TXArray[i + 1], { override: true }).to({ y: 180 + 100, alpha: 1 }, 0);
                        break;
                    }
                }
            }
        }
        if (those.TXArray[0].alpha == 1 && those.headMove > 0) {
            those.headMove--;
            createjs.Tween.get(that.mc_0.mc_0, { override: true }).to({ y: those.headShadowPosition[those.headMove] }, 100);
        }
    }
    //头像选中框
    if (those.headMove > 1) {
        those.headMove--;
        createjs.Tween.get(that.mc_0.mc_0, { override: true }).to({ y: those.headShadowPosition[those.headMove] }, 100);
    }
}
HeadTool.prototype.getTrueID = function (dex) {
    // console.log("传入的dex= "+dex);
    var those = this;
    var a = -1;
    for (var i = 0; i < those.pageThree.iconMap.values().length; i++) {
        if (those.pageThree.iconMap.get(those.pageThree.iconMap.keySet()[i]) == dex) {
            a = those.pageThree.iconMap.keySet()[i];
            // console.log("a= "+a);
        }
    }
    return those.transIntToString(a);
}
//获取头像的id号
HeadTool.prototype.getPlayerId = function () {
    var that = this.exportRoot.mc_0;
    var those = this;

    var a = those.transShadowYToIconY(those.headShadowPosition[those.headMove]);
    if (a == 1) {

        if (those.scoreArray[0][1] == 0) {
            those.pageThree.padScreen = "00";
            // console.log("those.pageThree.padScreen= "+those.transIntToString(those.scoreArray[0][0]));
            return "00";
        }
        else {
            // console.log(those.getTrueID(those.scoreArray[0][0]));
            those.pageThree.padScreen = those.transIntToString(those.scoreArray[0][0]);
            return those.transIntToString(those.scoreArray[0][0]);
        }


    }
    var b;
    for (var i = those.TXArray.length - 1; i >= 0; i--) {
        if (those.TXArray[i].y == a) {
            // b=those.TXArray[i].image.src.substring(42,44);
            b = those.getTrueID(those.TXArray[i].image.src.substring(42, 44));
            break;
        }
    }
    those.pageThree.padScreen = b;
    console.log("getPlayerID=  " + those.pageThree.padScreen);
    return b;
}
//根据阴影的y坐标转换成头像的y坐标
HeadTool.prototype.transShadowYToIconY = function (shadowY) {
    var that = this.exportRoot.mc_0;
    var those = this;
    var iconY = 0;
    switch (shadowY) {
        case those.headShadowPosition[0]:
            iconY = 1;
            break;
        case those.headShadowPosition[1]:
            iconY = those.headIconPosition[14];
            break;
        case those.headShadowPosition[2]:
            iconY = those.headIconPosition[15];
            break;
        case those.headShadowPosition[3]:
            iconY = those.headIconPosition[16];
            break;
        case those.headShadowPosition[4]:
            iconY = those.headIconPosition[17];
            break;
        case those.headShadowPosition[5]:
            iconY = those.headIconPosition[18];
            break;
        case those.headShadowPosition[6]:
            iconY = those.headIconPosition[19];
            break;
    }
    return iconY;
}

HeadTool.prototype.getHeadIndex = function (a) {
    var those = this;
    var index;
    var array = those.headIconPosition;
    for (var i = 0; i < array.length; i++) {
        if (a == array[i]) {
            index = i;
            break;
        }
    }
    return index;
}
HeadTool.prototype.addHead = function (index) {
    var that = this.exportRoot.mc_0;
    var those = this;
    // console.log("增加的是 "+index);
    those.ylocation.splice(0, those.ylocation.length);
    for (var i = 0; i < those.TXArray.length; i++) {
        if (i % 2 == 0) {
            those.ylocation.push(those.TXArray[i].y);
        }
    }
    // console.log(those.ylocation);
    if (those.TXArray.length == 0) {
        those.ylocation.push(30);
    }
    var dex = those.getConnectIndex(those.connectDevice, index);
    those.deleteTxArray();
    those.TXArray.splice(0, those.TXArray.length);
    those.faceStr = "../../../../com_Sound/img/";
    for (var i = 0; i < those.connectDevice.length; i++) {
        those.headName = new createjs.Bitmap(those.faceStr + "headr" + those.transIntToString(those.pageThree.iconMap.get(those.deleteZero(those.connectDevice[i]))) + ".png");
        those.headName.x = 1755;
        those.jiaoBiao = new createjs.Bitmap(those.faceStr + "jb" + those.transIntToString(those.connectDevice[i]) + ".png");
        those.jiaoBiao.x = 1862;
        // console.log(those.connectDevice);
        // console.log(those.ylocation);

        if (i < those.connectDevice.length - 1) {
            //头像
            // console.log("上  "+i);
            those.headName.y = those.ylocation[i];
            those.jiaoBiao.y = those.headName.y + 100;

        } else {
            if (those.connectDevice.length - 1 != 0) {
                // console.log("下  "+i);
                those.headName.y = those.ylocation[i - 1] + 150;
                those.jiaoBiao.y = those.headName.y + 100;
            }
            else {
                those.headName.y = 30 + 150;
                those.jiaoBiao.y = those.headName.y + 100;
            }

        }

        if (i == dex) {
            // console.log("==");
            createjs.Tween.get(those.headName, { override: true }).to({ alpha: 1 }, 100);
        }
        else if (i > dex) {
            console.log("!=");
            createjs.Tween.get(those.headName, { override: true }).to({ y: those.headName.y - 150 }).to({ y: those.headName.y }, 100);
        }

        if (those.headName.y < 180) {
            those.headName.alpha = 0;
            those.jiaoBiao.alpha = 0;
        }
        stage.addChild(those.headName);
        those.TXArray.push(those.headName);
        stage.addChild(those.jiaoBiao);
        those.TXArray.push(those.jiaoBiao);
        // console.log("个数2="+those.TXArray.length);
    }
}
//获取connectDevice中的下标
HeadTool.prototype.getConnectIndex = function (arr, a) {
    var those = this;
    var index;
    var array = arr;
    for (var i = 0; i < array.length; i++) {
        if (a == array[i]) {
            index = i;
            break;
        }
    }
    return index;
}

/**
 * [HeadChange 侧边栏头像添加方法]
 */
HeadTool.prototype.HeadChange = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    var initTime = 0;
    those.connectDevice.sort(those.cmp);
    those.faceStr = "../../../../com_Sound/img/";
    for (var i = 0; i < those.connectDevice.length; i++) {
        //头像
        // those.headName = new createjs.Bitmap(those.faceStr+"headr"+(those.transIntToString(those.connectDevice[i]))+".png");

        those.headName = new createjs.Bitmap(those.faceStr + "headr" + those.transIntToString(those.pageThree.iconMap.get(those.deleteZero(those.connectDevice[i]))) + ".png");
        those.jiaoBiao = new createjs.Bitmap(those.faceStr + "jb" + those.transIntToString(those.connectDevice[i]) + ".png");
        those.headName.x = 1755 + 200;
        those.headName.y = those.headIconPosition[i + 14] - 100;
        those.jiaoBiao.x = 1862 + 200;
        those.jiaoBiao.y = those.headIconPosition[i + 14] + 100 - 100;
        stage.addChild(those.headName);
        stage.addChild(those.jiaoBiao);
        createjs.Tween.get(those.headName, { override: true }).wait(initTime += 50).to({ x: 1755, y: those.headIconPosition[i + 14] }, 50);
        createjs.Tween.get(those.jiaoBiao, { override: true }).wait(initTime += 50).to({ x: 1862, y: those.headIconPosition[i + 14] + 100 }, 50);
        those.TXArray.push(those.headName);//http://localhost/2/paino/com_Sound/img/headr2.png
        those.TXArray.push(those.jiaoBiao);

    }
}
HeadTool.prototype.HeadChange1 = function (arr) {
    var that = this.exportRoot.mc_0;
    var those = this;
    var initTime = 0;
    those.connectDevice.sort(those.cmp);
    those.faceStr = "../../../../com_Sound/img/";
    for (var i = 0; i < arr.length; i++) {
        //头像
        // those.headName = new createjs.Bitmap(those.faceStr+"headr"+(those.transIntToString(those.connectDevice[i]))+".png");

        those.headName = new createjs.Bitmap(those.faceStr + "headr0" + those.pageThree.iconMap.get(arr[i][0]) + ".png");
        those.jiaoBiao = new createjs.Bitmap(those.faceStr + "jb" + (those.transIntToString(arr[i][0], 2)) + ".png");
        those.headName.x = 1755;
        those.headName.y = 12 + i * 133;
        those.headName.scaleX = 0.97;
        those.headName.scaleY = 0.97;
        those.jiaoBiao.x = 1858;
        those.jiaoBiao.y = 12 + i * 133 + 95;
        those.jiaoBiao.scaleX = 0.97;
        those.jiaoBiao.scaleY = 0.97;
        stage.addChild(those.headName);
        stage.addChild(those.jiaoBiao);
        createjs.Tween.get(those.headName, { override: true }).to({ x: 1755, y: 12 + i * 133 }, 0);
        createjs.Tween.get(those.jiaoBiao, { override: true }).to({ x: 1858, y: 12 + i * 133 + 95 }, 0);
        those.TXArray.push(those.headName);//http://localhost/2/paino/com_Sound/img/headr2.png
        those.TXArray.push(those.jiaoBiao);

    }
}
// HeadTool.prototype.HeadChange1 = function(arr){
//     var that=this.exportRoot.mc_0;
//     var those = this;
//     var initTime=0;
//     those.connectDevice.sort(those.cmp);
//     those.faceStr="../../../../com_Sound/img/";
//     for (var i=0;i<arr.length;i++){
//         //头像
//         // those.headName = new createjs.Bitmap(those.faceStr+"headr"+(those.transIntToString(those.connectDevice[i]))+".png");

//         those.headName = new createjs.Bitmap(those.faceStr+"headr0"+those.pageThree.iconMap.get(arr[i][0])+".png");
//         those.jiaoBiao = new createjs.Bitmap(those.faceStr+"jb"+(those.transIntToString(arr[i][0],2))+".png");
//         those.headName.x = 1755+200;
//         those.headName.y = those.headIconPosition[i+14]-100;
//         those.jiaoBiao.x = 1862+200;
//         those.jiaoBiao.y = those.headIconPosition[i+14]+100-100;
//     	stage.addChild(those.headName);
//         stage.addChild(those.jiaoBiao);
//         createjs.Tween.get(those.headName,{override:true}).wait(initTime+=50).to({x:1755,y:those.headIconPosition[i+14]},50);
//         createjs.Tween.get(those.jiaoBiao,{override:true}).wait(initTime+=50).to({x:1862,y:those.headIconPosition[i+14]+100},50);
//         those.TXArray.push(those.headName);//http://localhost/2/paino/com_Sound/img/headr2.png
//         those.TXArray.push(those.jiaoBiao);

//     } 
// }

//检测字符串的字符长度
HeadTool.prototype.GetLength = function (str) {
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};
//切割拼接字符串 小于len的返回原字符串，大于的返回限制字符加...
HeadTool.prototype.cutstr = function (str, len) {
    // console.log(str);
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_cut1 = new String();
    if (str) {
        str_len = str.length;
    }

    for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
            //中文字符的长度经编码之后大于4  
            str_length++;
        }
        str_cut1 = str_cut;
        str_cut = str_cut.concat(a);
        if (str_length > len) {

            // console.log("1str_length="+str_length);
            str_cut1 = str_cut1.concat("...");
            return str_cut1;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；  
    if (str_length <= len) {
        // console.log("2str_length="+str_length);
        return str;
    }
}
//将map里的所有数据清空为0
HeadTool.prototype.resetMap = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    for (var i = 0; i < those.pageThree.map.keySet().length; i++) {
        those.pageThree.map.put(those.pageThree.map.keySet()[i], 0);
    }
    for (var i = 0; i < those.pageThree.tempmap.keySet().length; i++) {
        those.pageThree.tempmap.put(those.pageThree.tempmap.keySet()[i], 0);
    }
}
//将fourStatus里的所有数据清空
HeadTool.prototype.resetfourStatus = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    for (var i = 0; i < those.pageThree.fourStatus.keySet().length; i++) {
        those.pageThree.fourStatus.put(those.pageThree.fourStatus.keySet()[i], [0, 0, 0, 0]);
    }
}
//将fourStatus里的所有数据清空
HeadTool.prototype.resetTimeMap = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    for (var i = 0; i < those.pageThree.timeMap.keySet().length; i++) {
        those.pageThree.timeMap.put(those.pageThree.timeMap.keySet()[i], 0);
        those.pageThree.temptimeMap.put(those.pageThree.temptimeMap.keySet()[i], 0);
    }
    for (var i = 0; i < those.pageThree.temptimeMap.keySet().length; i++) {
        those.pageThree.temptimeMap.put(those.pageThree.temptimeMap.keySet()[i], 0);
    }
}


//排序
HeadTool.prototype.sortArray = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    those.scoreArray.sort(those.cmp1);
    those.scoreArray.reverse();

};
/**
 * [cmp 数组sort排序 需要的参照系]
 */
HeadTool.prototype.cmp = function (a, b) {

    return a - b;
}

HeadTool.prototype.cmp1 = function (a, b) {
    var that = this.exportRoot.mc_0;
    var those = this;
    return a[1] - b[1];
}

//清空头像TXArray中的头像（从stage中清空 但是数组中还保留）
HeadTool.prototype.deleteTxArray = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (those.TXArray.length != 0) {
        // console.log("头像数组不为0");
        $.each(those.TXArray, function (i, dex) {
            stage.removeChild(dex);
        });
    }
};



/**
 * [showLength 传入一个字符串 换算符号的位数 返回五位数的字符串 是其字符长度]
 * @param  {[type]} str [传入的字符串，用于websocket 五位数标准格式]
 */
HeadTool.prototype.showLength = function (str) {
    var zero = "0";
    var newStr = str;
    var num = str.length;//10
    for (var i = 0; i < 5; i++) {
        if (num.toString().length != 5) {
            newStr = zero + num;
            num = newStr;
        } else {
            return newStr;
        }
    }
};

/**
 * [transIntToString 传入一个int值，返回两位的字符串 例如 传入1 返回“01”]
 * @param  {[type]} str [传入的int]
 */
HeadTool.prototype.transIntToString = function (str) {
    var zero = "0";
    var newStr = str;
    var num = str.toString();
    for (var i = 0; i < 2; i++) {
        if (num.toString().length != 2) {
            newStr = zero + num;
            num = newStr;
        } else {
            return newStr.toString();
        }
    }
}
/**
 * [contains 判断数组是否包含某个元素 返回true或false]
 * @param  {[type]} arr [当前需要判断的数组]
 * @param  {[type]} obj [当前需要判断的元素]
 */
function contains(arr, obj) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === obj) {
            return true;
        }
    }
    return false;
}
/**
 * [成绩结算方法,根据tempScoreArray（从scoreArray中选取的六个）来动态显示六个人物的头像和成绩] 不带时间的
 * @param  {[type]} arr [传入的tempScoreArray]
 */
HeadTool.prototype.scoreCalculate = function (arr) {
    var that = this.exportRoot.mc_0;
    var those = this;
    those.faceStr = "../../../../com_Sound/img/";
    for (var i = 0; i < arr.length; i++) {
        those.firstK = new createjs.Bitmap(those.faceStr + "putong1" + ".png");
        //头像
        those.headName = new createjs.Bitmap(those.faceStr + "head" + those.pageThree.iconMap.get(arr[i][0]) + ".png");
        //编号
        those.PnumName = new createjs.Bitmap(those.faceStr + "device" + (those.transIntToString(arr[i][0], 2)) + ".png");

        //姓名
        those.Name = new createjs.Text(those.cutstr(those.pageThree.nameMap.get(arr[i][0]), 8), "bold 40px 幼圆", "#8D3F00");
        // console.log(those.pageThree.nameMap.keySet());
        // console.log(those.pageThree.nameMap.values());
        // console.log(those.cutstr(those.pageThree.nameMap.get(arr[i][0]),8));
        those.coocie = new createjs.Bitmap(those.faceStr + "cookie" + ".png");
        those.cheng = new createjs.Bitmap(those.faceStr + "cheng" + ".png");
        //个数
        those.Grade = new createjs.Bitmap(those.faceStr + "num" + (arr[i][1]) + ".png");
        if (i == 0) {
            if (arr[0][0] == those.scoreArray[0][0]) {
                // console.log(those.firstK.image.src);
                //成绩框
                those.firstK.image.src = "../../../../com_Sound/img/diyi.png";
                those.PnumName.image.src = those.faceStr + "devicew" + (those.transIntToString(arr[i][0], 2)) + ".png";
                those.headName.x = 348;
                those.headName.y = 549;
                those.PnumName.x = 330;
                those.PnumName.y = 630;
                those.Grade.x = 600;
                those.Grade.y = 628;
                those.Name.x = 490;
                those.Name.y = 560;
                those.coocie.x = 490;
                those.coocie.y = 615;
                those.cheng.x = 560;
                those.cheng.y = 637;
                those.firstK.x = 305;
                those.firstK.y = 515;
            }
            else {
                those.headName.x = 791 + (i - 1) * 321;
                those.headName.y = 539;
                those.PnumName.x = 770 + (i - 1) * 321;
                those.PnumName.y = 620;
                those.Grade.x = 1043 + (i - 1) * 321;
                those.Grade.y = 628;
                those.Name.x = 933 + (i - 1) * 321;
                those.Name.y = 560;
                those.coocie.x = 933 + (i - 1) * 321;
                those.coocie.y = 615;
                those.cheng.x = 1003 + (i - 1) * 321;
                those.cheng.y = 637;
                those.firstK.x = 748 + (i - 1) * 321;
                those.firstK.y = 519;
            }

        }
        else if (i > 0 && i < 3) {//i>0 && i<3

            those.headName.x = 791 + (i - 1) * 321;
            those.headName.y = 539;
            those.PnumName.x = 770 + (i - 1) * 321;
            those.PnumName.y = 620;
            those.Grade.x = 1043 + (i - 1) * 321;
            those.Grade.y = 628;
            those.Name.x = 933 + (i - 1) * 321;
            those.Name.y = 560;
            those.coocie.x = 933 + (i - 1) * 321;
            those.coocie.y = 615;
            those.cheng.x = 1003 + (i - 1) * 321;
            those.cheng.y = 637;
            those.firstK.x = 748 + (i - 1) * 321;
            those.firstK.y = 519;
        }
        else if (i == 3) {

            those.headName.x = 791 - 321;
            those.headName.y = 726;
            those.PnumName.x = 770 - 321;
            those.PnumName.y = 807;
            those.Grade.x = 1043 - 321;
            those.Grade.y = 815;
            those.Name.x = 933 - 321;
            those.Name.y = 747;
            those.coocie.x = 933 - 321;
            those.coocie.y = 802;
            those.cheng.x = 1003 - 321;
            those.cheng.y = 824;
            those.firstK.x = 748 - 321;
            those.firstK.y = 706;
        }
        else if (i > 3 && i < 6) {

            those.headName.x = 791 + (i - 4) * 321;
            those.headName.y = 726;
            those.PnumName.x = 770 + (i - 4) * 321;
            those.PnumName.y = 807;
            those.Grade.x = 1043 + (i - 4) * 321;
            those.Grade.y = 815;
            those.Name.x = 933 + (i - 4) * 321;
            those.Name.y = 747;
            those.coocie.x = 933 + (i - 4) * 321;
            those.coocie.y = 802;
            those.cheng.x = 1003 + (i - 4) * 321;
            those.cheng.y = 824;
            those.firstK.x = 748 + (i - 4) * 321;
            those.firstK.y = 706;
        }
        stage.addChild(those.firstK);
        stage.addChild(those.headName);
        stage.addChild(those.PnumName);
        stage.addChild(those.Name);
        stage.addChild(those.coocie);
        stage.addChild(those.cheng);
        stage.addChild(those.Grade);
        those.CJArray.push(those.firstK);
        those.CJArray.push(those.headName);
        those.CJArray.push(those.PnumName);
        those.CJArray.push(those.Name);
        those.CJArray.push(those.coocie);
        those.CJArray.push(those.cheng);
        those.CJArray.push(those.Grade);
    }
}
HeadTool.prototype.scaleMethod = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    var scaleNum = 0.76;
    those.headName.scaleX = scaleNum;
    those.headName.scaleY = scaleNum;
    those.PnumName.scaleX = scaleNum;
    those.PnumName.scaleY = scaleNum;
    those.Grade.scaleX = scaleNum;
    those.Grade.scaleY = scaleNum;
    those.Name.scaleX = scaleNum;
    those.Name.scaleY = scaleNum;
    those.coocie.scaleX = scaleNum;
    those.coocie.scaleY = scaleNum;
    those.cheng.scaleX = scaleNum;
    those.cheng.scaleY = scaleNum;
    those.firstK.scaleX = scaleNum;
    those.firstK.scaleY = scaleNum;
    those.Clock.scaleX = scaleNum;
    those.Clock.scaleY = scaleNum;
    those.Time.scaleX = scaleNum;
    those.Time.scaleY = scaleNum;

}
//带时间的
HeadTool.prototype.scoreCalculateTime = function (arr) {
    var that = this.exportRoot.mc_0;
    var those = this;
    those.faceStr = "../../../../com_Sound/img/";
    for (var i = 0; i < arr.length; i++) {
        those.firstK = new createjs.Bitmap(those.faceStr + "putong11" + ".png");
        //头像
        // those.headName = new createjs.Bitmap(those.faceStr+"head"+(arr[i][0])+".png");
        those.headName = new createjs.Bitmap(those.faceStr + "head" + those.pageThree.iconMap.get(arr[i][0]) + ".png");
        //编号
        those.PnumName = new createjs.Bitmap(those.faceStr + "device" + (those.transIntToString(arr[i][0], 2)) + ".png");
        //姓名
        those.Name = new createjs.Text(those.cutstr(those.pageThree.nameMap.get(arr[i][0]), 8), "bold 40px 幼圆", "#8D3F00");
        those.coocie = new createjs.Bitmap(those.faceStr + "cookie" + ".png");
        those.cheng = new createjs.Bitmap(those.faceStr + "cheng" + ".png");
        if (arr[i][1] > 40) {
            //个数
            those.Grade = new createjs.Text(arr[i][1], "bold 40px number", "#FFF");
        }
        else {
            those.Grade = new createjs.Bitmap(those.faceStr + "num" + (arr[i][1]) + ".png");
        }
        //时间
        those.Clock = new createjs.Bitmap(those.faceStr + "clock" + ".png");
        those.Time = new createjs.Text(those.MillisecondToDate(those.pageThree.temptimeMap.get(arr[i][0])), "30px 幼圆", "#FFF");
        if (i == 0) {
            if (arr[0][0] == those.scoreArray[0][0]) {
                // console.log(those.firstK.image.src);
                //成绩框
                those.firstK.image.src = "../../../../com_Sound/img/diyi1.png";
                those.PnumName.image.src = those.faceStr + "devicew" + (those.transIntToString(arr[i][0], 2)) + ".png";
                those.headName.x = 357;
                those.headName.y = 533;
                those.PnumName.x = 342;
                those.PnumName.y = 595;
                those.Grade.x = 580;
                those.Grade.y = 562;
                those.Name.x = 505;
                those.Name.y = 510;
                those.coocie.x = 475;
                those.coocie.y = 550;
                those.cheng.x = 543;
                those.cheng.y = 567;
                those.firstK.x = 321;
                those.firstK.y = 490 + 5;
                those.Clock.x = 475;
                those.Clock.y = 595;
                those.Time.x = 520;
                those.Time.y = 605;
                those.scaleMethod();
            }
            else {
                those.headName.x = 799 + (i - 1) * 321;
                those.headName.y = 548;
                those.PnumName.x = 775 + (i - 1) * 321;
                those.PnumName.y = 631;
                those.Grade.x = 1043 + (i - 1) * 321;
                those.Grade.y = 593;
                those.Name.x = 933 + (i - 1) * 321;
                those.Name.y = 530;
                those.coocie.x = 933 + (i - 1) * 321;
                those.coocie.y = 580;
                those.cheng.x = 1003 + (i - 1) * 321;
                those.cheng.y = 602;
                those.firstK.x = 748 + (i - 1) * 321;
                those.firstK.y = 514;
                those.Clock.x = 490;
                those.Clock.y = 637;
                those.Time.x = 550;
                those.Time.y = 650;
            }
        }
        else if (i > 0 && i < 4) {
            those.headName.x = 679 + (i - 1) * 321;
            those.headName.y = 522 + 11;
            those.PnumName.x = 662 + (i - 1) * 321;
            those.PnumName.y = 586 + 11;
            those.Grade.x = 900 + (i - 1) * 321;
            those.Grade.y = 562;
            those.Name.x = 825 + (i - 1) * 321;
            those.Name.y = 510;
            those.coocie.x = 795 + (i - 1) * 321;
            those.coocie.y = 550;
            those.cheng.x = 863 + (i - 1) * 321;
            those.cheng.y = 567;
            those.firstK.x = 655 + (i - 1) * 321 - 18 + 5;
            those.firstK.y = 496;
            those.Clock.x = 795 + (i - 1) * 321;
            those.Clock.y = 595;
            those.Time.x = 840 + (i - 1) * 321;
            those.Time.y = 605;
            those.scaleMethod();
        }
        else if (i == 4) {
            those.headName.x = 357;
            those.headName.y = 725 + 11;
            those.PnumName.x = 342;
            those.PnumName.y = 788 + 11;
            those.Grade.x = 580;
            those.Grade.y = 765;
            those.Name.x = 505;
            those.Name.y = 713;
            those.coocie.x = 475;
            those.coocie.y = 753;
            those.cheng.x = 543;
            those.cheng.y = 770;
            those.firstK.x = 321;
            those.firstK.y = 716 - 18;
            those.Clock.x = 475;
            those.Clock.y = 798;
            those.Time.x = 520;
            those.Time.y = 808;
            those.scaleMethod();
        }
        else if (i > 4 && i < 8) {

            those.headName.x = 679 + (i - 5) * 321;
            those.headName.y = 725 + 11;
            those.PnumName.x = 662 + (i - 5) * 321;
            those.PnumName.y = 788 + 11;
            those.Grade.x = 900 + (i - 5) * 321;
            those.Grade.y = 765;
            those.Name.x = 825 + (i - 5) * 321;
            those.Name.y = 713;
            those.coocie.x = 795 + (i - 5) * 321;
            those.coocie.y = 753;
            those.cheng.x = 863 + (i - 5) * 321;
            those.cheng.y = 770;
            those.firstK.x = 655 + (i - 5) * 321 - 18 + 5;
            those.firstK.y = 716 - 18;
            those.Clock.x = 795 + (i - 5) * 321;
            those.Clock.y = 798;
            those.Time.x = 840 + (i - 5) * 321;
            those.Time.y = 808;
            those.scaleMethod();
        }
        stage.addChild(those.firstK);
        stage.addChild(those.headName);
        stage.addChild(those.PnumName);
        stage.addChild(those.Name);
        stage.addChild(those.coocie);
        stage.addChild(those.Clock);
        stage.addChild(those.cheng);
        stage.addChild(those.Grade);
        stage.addChild(those.Time);
        those.CJArray.push(those.firstK);
        those.CJArray.push(those.headName);
        those.CJArray.push(those.PnumName);
        those.CJArray.push(those.Name);
        those.CJArray.push(those.coocie);
        those.CJArray.push(those.Clock);
        those.CJArray.push(those.cheng);
        those.CJArray.push(those.Grade);
        those.CJArray.push(those.Time);
    }
}
/**
 * [deleteCJArray 从stage中移除当前tempArray中人物的头像和成绩，但是CJArray数组没有清空]
 */
HeadTool.prototype.deleteCJArray = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (those.CJArray.length != 0) {
        $.each(those.CJArray, function (i, dex) {
            stage.removeChild(dex);
        });
    }
};
/**
 * [getSixHeadMessage 每次按某个键，对成绩排行榜进行翻页，此方法为从scoreArray中 根据翻页次数的不同，抽取出当前要展示的人的方法]
 * @param  {[type]} dex [翻页次数 既currentScorePageNum]
 * @param  {[type]} type [显示哪种结算 1 不带时间的结算 2 带时间的结算]
 */
HeadTool.prototype.getSixHeadMessage = function (dex, type) {
    var that = this.exportRoot.mc_0;
    var those = this;
    those.transMapToArray();
    those.tempScoreArray = [];
    if (dex == 1) {
        if (those.scoreArray.length >= 12) {
            those.tempScoreArray = those.scoreArray.slice(dex * 6, dex * 6 + 6);
        }
        else {
            those.tempScoreArray = those.scoreArray.slice(dex * 6, those.scoreArray.length);
        }
    }
    else if (dex == 2) {
        if (those.scoreArray.length >= 18) {
            those.tempScoreArray = those.scoreArray.slice(dex * 6, dex * 6 + 6);
        }
        else {
            those.tempScoreArray = those.scoreArray.slice(dex * 6, those.scoreArray.length);
        }
    }
    else if (dex == 3) {
        those.tempScoreArray = those.scoreArray.slice(dex * 6, those.scoreArray.length);
    }
    if (dex == 0) {
        if (those.scoreArray.length < 6) {
            // console.log("走了小于6");
            // console.log(those.scoreArray);
            those.tempScoreArray = those.scoreArray;
        }
        else {
            those.tempScoreArray = those.scoreArray.slice(0, 6);
        }
        // console.log("------------------------------------------");
        // console.log(those.scoreArray);
    }
    // console.log(those.tempScoreArray);
    // those.deleteCJArray();
    // if(type == 1){
    //     those.scoreCalculate(those.tempScoreArray);
    // }
    // else if(type == 2){
    //     those.scoreCalculateTime(those.tempScoreArray);
    // }


}

HeadTool.prototype.getSixHeadMessageTime = function (dex, type, bool) {//bool为是否显示成绩单
    var that = this.exportRoot.mc_0;
    var those = this;
    if (bool) {
        those.transTimeMapToArray1(false);
    }
    else {
        those.transTimeMapToArray();
    }

    those.tempScoreArray = [];
    if (dex == 1) {
        if (those.scoreArray.length >= 12) {
            those.tempScoreArray = those.scoreArray.slice(dex * 6, dex * 6 + 6);
        }
        else {
            those.tempScoreArray = those.scoreArray.slice(dex * 6, those.scoreArray.length);
        }
    }
    else if (dex == 2) {
        if (those.scoreArray.length >= 18) {
            those.tempScoreArray = those.scoreArray.slice(dex * 8, dex * 8 + 8);
        }
        else {
            those.tempScoreArray = those.scoreArray.slice(dex * 8, those.scoreArray.length);
        }
    }
    else if (dex == 3) {
        those.tempScoreArray = those.scoreArray.slice(dex * 8, those.scoreArray.length);
    }
    if (dex == 0) {
        if (those.scoreArray.length < 8) {
            those.tempScoreArray = those.scoreArray;
        }
        else {
            those.tempScoreArray = those.scoreArray.slice(0, 8);
        }
        // console.log(those.scoreArray);
    }
    // console.log(those.tempScoreArray);
    if (bool) {
        // those.deleteCJArray();
        if (type == 1) {
            those.scoreCalculate(those.tempScoreArray);
        }
        else if (type == 2) {
            those.scoreCalculateTime(those.tempScoreArray);
        }
    }
}
/**
 * [pageDownScore 成绩结算界面上下翻页 看前后一组人员的成绩，都调用此方法 传入参数type 区分看前 看后]
 * @param  {[type]} type [区分看前一组成绩还是后一组 1 前一组 2 后一组]
 */
HeadTool.prototype.pageDownScore = function (type, num) {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (type == 1) {
        those.currentScorePageNum--;
        if (those.currentScorePageNum < 0) {
            those.currentScorePageNum = 0;
            return;
        }
    }
    else if (type == 2) {
        those.currentScorePageNum++;
    }
    if (those.currentScorePageNum * 6 >= those.scoreArray.length) {
        those.currentScorePageNum--;
        return;
    }
    // console.log("执行了pageDownScore");
    those.getSixHeadMessage(those.currentScorePageNum, num);
};
/**
 * [deleteZero 删除十位是零的 id 得到纯正的id]
 * @param  {[type]} str [传入的id 两位的]
 */
HeadTool.prototype.deleteZero = function (str) {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (str.substring(0, 1) == "0") {
        return str.substring(1, 2);
    }
    else {
        return str;
    }
}

HeadTool.prototype.addFirstHead = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    those.deleteFirstArray();
    those.faceStr = "../../../../com_Sound/img/";
    those.headName = new createjs.Bitmap(those.faceStr + "headr" + those.transIntToString(those.pageThree.iconMap.get(those.scoreArray[0][0])) + ".png");
    those.headName.x = 1755;
    those.headName.y = 30;
    those.jiaoBiao = new createjs.Bitmap(those.faceStr + "jb" + (those.transIntToString(those.scoreArray[0][0])) + ".png");
    those.jiaoBiao.x = 1862;
    those.jiaoBiao.y = 130;
    stage.addChild(those.headName);
    those.firstArray.push(those.headName);
    stage.addChild(those.jiaoBiao);
    those.firstArray.push(those.jiaoBiao);

}
HeadTool.prototype.deleteFirstArray = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (those.firstArray.length != 0) {
        $.each(those.firstArray, function (i, dex) {
            stage.removeChild(dex);
        });
    }
};

//将map转换成Array
HeadTool.prototype.transMapToArray = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    //每次调用此方法前先清空成绩数组，防止重叠加入map数据
    those.scoreArray.splice(0, those.scoreArray.length);
    for (var i = 0; i < those.pageThree.map.size(); i++) {
        those.scoreArray.push([those.pageThree.map.keySet()[i], those.pageThree.map.get(those.pageThree.map.keySet()[i])]);
    }
    // console.log(those.scoreArray);
    those.sortArray();
}
//----------------------------------------------拖动游戏有时间的成绩算法

//将timeMap转换成Array
HeadTool.prototype.transTimeMapToArray = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    // if(bool){
    //每次调用此方法前先清空成绩数组，防止重叠加入map数据
    those.scoreArray.splice(0, those.scoreArray.length);
    for (var i = 0; i < those.pageThree.map.size(); i++) {
        those.scoreArray.push([those.pageThree.map.keySet()[i], those.pageThree.map.get(those.pageThree.map.keySet()[i]), those.pageThree.timeMap.get(those.pageThree.map.keySet()[i])]);
    }
    // }

    those.sortTimeMapArray();
}
HeadTool.prototype.transTimeMapToArray1 = function (bool) {
    var that = this.exportRoot.mc_0;
    var those = this;
    if (!bool) {
        //每次调用此方法前先清空成绩数组，防止重叠加入map数据
        those.scoreArray.splice(0, those.scoreArray.length);
    }
    for (var i = 0; i < those.pageThree.tempmap.size(); i++) {
        those.scoreArray.push([those.pageThree.tempmap.keySet()[i], those.pageThree.tempmap.get(those.pageThree.tempmap.keySet()[i]), those.pageThree.temptimeMap.get(those.pageThree.tempmap.keySet()[i])]);
    }
    those.sortTimeMapArray();
}
//排序
HeadTool.prototype.sortTimeMapArray = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    those.scoreArray.sort(those.cmp1);
    those.scoreArray.reverse();
    those.sortTimeMapArray1();
    // console.log(those.scoreArray);
};
HeadTool.prototype.sortTimeMapArray1 = function () {
    var that = this.exportRoot.mc_0;
    var those = this;
    for (var i = 0; i < those.scoreArray.length - 1; i++) {
        if (those.scoreArray[i][1] == those.scoreArray[i + 1][1]) {
            if (those.scoreArray[i + 1][2] < those.scoreArray[i][2]) {
                var temp = those.scoreArray[i];
                those.scoreArray[i] = those.scoreArray[i + 1];
                those.scoreArray[i + 1] = temp;
                those.sortTimeMapArray1();
                // break;
            }
        }
    }
};
//换算毫秒为 mm:ss:XX  格式
HeadTool.prototype.MillisecondToDate = function (msd) {
    // console.log(msd);
    var that = this.exportRoot.mc_0;
    var those = this;
    var dataObj = new Date();
    dataObj.setTime(msd);
    if (msd == 0) {
        return " 未完成";
    }
    else {
        // console.log(Math.floor((msd-dataObj.getMinutes()*60*1000-dataObj.getSeconds()*1000)/10));
        return those.transIntToString(dataObj.getMinutes()) + ":" + those.transIntToString(dataObj.getSeconds()) + ":" + those.transIntToString(Math.floor((msd - dataObj.getMinutes() * 60 * 1000 - dataObj.getSeconds() * 1000) / 10));

    }
}
//课堂小练习加载midi解析文件 数据放到数组里
HeadTool.prototype.loadXMLDoc = function (name) {
    var xmlhttp;
    var those = this;
    those.pageThree.midiArray.splice(0, those.pageThree.midiArray.length);
    those.pageThree.tempMidiArray.splice(0, those.pageThree.tempMidiArray.length);
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // setSessionItem("webIp",{"data":xmlhttp.responseText});
            // console.log(those.getSessionItem("webIp").data);
            those.pageThree.midiData = xmlhttp.responseText;
            those.parseData(JSON.parse(those.pageThree.midiData));
        }
    }
    xmlhttp.open("GET", "../midi/" + name + ".txt", true);
    xmlhttp.send();
}
//根据midi解析文件发送信号 是否按下 键值 红蓝灯
HeadTool.prototype.sendPianoSig = function (keydown, note, lighttype) {
    var those = this;
    those.pageThree.keyBoardPlay(keydown, note);
    var json1 = JSON.stringify({ "note": note, "lighttype": lighttype, "noteon": keydown });//righthand lefthand
    // console.log("keydown=  "+keydown+"  note=  "+note);
    var str1 = those.showLength(json1);
    those.pageThree.ws.send("CMDLIGT***" + str1 + json1);

}
HeadTool.prototype.Jsq = function () {
    var those = this;
    var time = 0;
    var date = new Date().getTime();
    var tag = "";
    var mc = those.pageThree.exeArray[those.pageThree.step - 1];
    var groupArray = those.pageThree.allEleArray && those.pageThree.allEleArray[those.pageThree.step - 1] || [];
    // console.log(those.pageThree.eleArray);
    those.Timer = setInterval(function () {
        time = new Date().getTime() - date;
        if (those.pageThree.midiArray.length != 0) {
            for (var i = 0; i < those.pageThree.midiArray.length; i++) {
                if (Math.abs(time - parseInt(those.pageThree.midiArray[0][2])) < 30) {
                    // console.log(those.pageThree.midiArray[0][1]);
                    those.sendPianoSig(those.pageThree.midiArray[0][0], those.pageThree.midiArray[0][1], those.pageThree.midiArray[0][3]);
                    those.pageThree.midiArray.splice(0, 1);
                }
            }
        }
        // *40 == ms

        for (var i = 0; i < groupArray.length - 1; i++) {
            // if (groupArray[i][groupArray.length-1]) {
            //     createjs.Tween.get(those.pageThree.exportRoot.mc_0.mc_2[mc][groupArray[i]],{override:true}).to({alpha:0});
            //     those.pageThree.exportRoot.mc_0.mc_2[mc][groupArray[i]].gotoAndStop(0);
            // }
            if (Math.abs(time - parseInt(groupArray[i].split("_")[1] * 40)) < 30) {
                if (groupArray[i] != tag) {
                    tag = groupArray[i];
                    createjs.Tween.get(those.pageThree.exportRoot.mc_0.mc_2[mc][groupArray[i]], { override: true }).to({ alpha: 1 });
                    those.pageThree.exportRoot.mc_0.mc_2[mc][groupArray[i]].play();
                }
            };
        }
        if (Math.abs(time - parseInt(groupArray[groupArray.length - 1] * 40)) < 30) {
            if (groupArray[groupArray.length - 1] != tag) {
                tag = groupArray[groupArray.length - 1];
                for (var i = 0; i < groupArray.length - 1; i++) {
                    createjs.Tween.get(those.pageThree.exportRoot.mc_0.mc_2[mc][groupArray[i]], { override: true }).to({ alpha: 0 });
                    those.pageThree.exportRoot.mc_0.mc_2[mc][groupArray[i]].gotoAndStop(0);
                }
            }

        }
    }, 10);
};
/*  新增
*   课堂小练习反复
*   方法
*/
HeadTool.prototype.JsqRepeat = function () {
    var those = this;
    var time = 0;
    var date = new Date().getTime();
    var tag = "";
    var mc = those.pageThree.exeArray[those.pageThree.step - 1];
    var groupArray = those.pageThree.allEleArray[those.pageThree.step - 1];
    // var rollTime = 0; //谱子滚动的时间
    var difNum = 0;//差值
    //如果有反复把第二遍第一个音符切掉
    // console.log(those.pageThree.repeatedly[those.pageThree.step-1])
    if (those.pageThree.repeatedly[those.pageThree.step - 1] == 1) {
        difNum = parseInt(groupArray[0].split("_")[1]) - parseInt(groupArray[1].split("_")[1]);
        groupArray.splice(0, 1);
    };
    those.Timer = setInterval(function () {
        time = new Date().getTime() - date;
        if (those.pageThree.midiArray.length != 0) {
            for (var i = 0; i < those.pageThree.midiArray.length; i++) {
                if (Math.abs(time - parseInt(those.pageThree.midiArray[0][2])) < 30) {
                    // console.log(those.pageThree.midiArray[0][1]);
                    those.sendPianoSig(those.pageThree.midiArray[0][0], those.pageThree.midiArray[0][1], those.pageThree.midiArray[0][3]);
                    those.pageThree.midiArray.splice(0, 1);
                }
            }
        }
        // *40 == ms
        for (var i = 0; i < groupArray.length - 1; i++) {
            if (Math.abs(time - parseInt(groupArray[i].split("_")[1] * 40)) < 30 || Math.abs(time - (parseInt(groupArray[i].split("_")[1]) + difNum) * 40) < 30) {
                if (groupArray[i] != tag) {
                    tag = groupArray[i];
                    createjs.Tween.get(those.pageThree.exportRoot.mc_0.mc_2[mc][groupArray[i]], { override: true }).to({ alpha: 1 });
                    those.pageThree.exportRoot.mc_0.mc_2[mc][groupArray[i]].play();
                    //判断是否有滚动
                    // if(those.pageThree.musicRoll == 1){
                    //     rollTime = those.pageThree.rollPosition[those.pageThree.step - 1].split("_")[1]/25*1000; //计算谱子滚动的时间 当前帧数/25 --- 1秒等于25帧
                    //     if(groupArray[i] == those.pageThree.rollPosition[those.pageThree.step - 1]){
                    //         createjs.Tween.get(those.pageThree.exportRoot.mc_0[mc],{override:true}).wait(500).to({x:those.pageThree.endPosition},300);
                    //     };
                    // };
                };
            };
        };
        if (Math.abs(time - parseInt(groupArray[groupArray.length - 1] * 40)) < 30 || Math.abs(time - (parseInt(groupArray[groupArray.length - 1]) + difNum) * 40) < 30) {
            if (groupArray[groupArray.length - 1] != tag) {
                // createjs.Tween.get(those.pageThree.exportRoot.mc_0.mc_2[mc],{override:true}).to({x:those.pageThree.initMusicPosition});
                tag = groupArray[groupArray.length - 1];
                for (var i = 0; i < groupArray.length - 1; i++) {
                    createjs.Tween.get(those.pageThree.exportRoot.mc_0.mc_2[mc][groupArray[i]], { override: true }).to({ alpha: 0 });
                    those.pageThree.exportRoot.mc_0.mc_2[mc][groupArray[i]].gotoAndStop(0);
                }
            }
        }
    }, 10);
};

HeadTool.prototype.parseData = function (info) {
    var those = this;
    for (var i = 0; i < info.length; i++) {
        those.pageThree.midiArray.push([info[i].keydown, info[i].note, info[i].time, info[i].lightType]);
        those.pageThree.tempMidiArray.push([info[i].keydown, info[i].note, info[i].time, info[i].lightType]);
    }
    // console.log(those.pageThree.midiArray);
    those.eachMidiArray();
}
//清空课堂小练习的计时器
HeadTool.prototype.clearClassExeTimer = function (info) {
    var those = this;
    window.clearInterval(those.Timer);
    those.Timer = null;
    // console.log("清空计时器了");
}
//遍历midiarray里的数据，把出现的键值返回到currentShowNoteArray里
HeadTool.prototype.eachMidiArray = function () {
    var those = this;
    for (var i = 0; i < those.pageThree.midiArray.length; i++) {
        if (!contains(those.pageThree.CurrentShowNoteArray, those.pageThree.midiArray[i][1])) {
            those.pageThree.CurrentShowNoteArray.push(those.pageThree.midiArray[i][1]);
        }
    }
    those.pageThree.canPlay = true;
    those.pageThree.resetAllKeys();
}
