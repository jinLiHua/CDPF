/**
 * Created by Think on 2017/12/20.
 */
var root = 'http://192.168.31.66:8080/gzcl';
//app方法
function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
         callback(WebViewJavascriptBridge);
    }else {
        document.addEventListener(
            'WebViewJavascriptBridgeReady'
            , function() {
                callback(WebViewJavascriptBridge)
            },
            false
        );
    }
    var u = navigator.userAgent;
     var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
     var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isiOS){
        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
    }

}



function appInit(){
    setupWebViewJavascriptBridge(function(bridge) {
        bridge.init(function(message, responseCallback) {
        });
        bridge.registerHandler("functionForAndroid", function(data, responseCallback) {
        });
        //app调用h5方法（ios）
        bridge.registerHandler('messageNativeHandler', function(data, responseCallback) {
            responseCallback(data);
        });
    });
}


/*setupWebViewJavascriptBridge(function(bridge) {
    bridge.registerHandler('messageNativeHandler', function(data, responseCallback) {
        responseCallback(data);
    })
});*/



//bridge.registerHandler();//注册
//bridge.callHandler('messageNativeHandler','我的值');//传至
//bridge.callHandler('messageNativeHandler',{ foo:'bar' },function(data){//获取值});

//数组删除指定值的方法
Array.prototype.removeByValue = function(val) {
    for(var i=0; i<this.length; i++) {
        if(this[i] == val) {
            this.splice(i, 1);
            break;
        }
    }
};
//获取年龄
function age(UUserCard){
    //获取年龄
    var myDate = new Date();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
    // if (UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day) {
    if (Number(UUserCard.substring(10, 12)) < 7 && Number(UUserCard.substring(12, 14))<30) {
        age++;
    }
    return age;
}
//验证残疾证号和身份证号格式
function idCard(value){
    var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]([1-7])([1-4]|9)|[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/;
    if(reg.test(value) === false) {
        return false;
    }else{
        return true;
    }
}
//是否为正整数
function isPositiveInteger(s){
    var re = /^[0-9]+$/ ;
    return re.test(s)
}
//固话
function phone(s){
    var phone = /(^(\d{3,4}-)?\d{6,8}$)|(^(\d{3,4}-)?\d{6,8}(-\d{1,5})?$)|(\d{11})/;
    return phone.test(s)
}
//手机
function mobile(s){
//  var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
    var mobile = /^1[0-9]{10}$/;
    return mobile.test(s)
}
//手机
function email(s){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(s)
}

//获取url参数
function getParam(name){
    var search = document.location.search;
    var pattern = new RegExp("[?&]"+name+"\=([^&]+)", "g");
    var matcher = pattern.exec(search);
    var items = null;
    if(null != matcher){
        try{
            items = decodeURIComponent(decodeURIComponent(matcher[1]));
        }catch(e){
            try{
                items = decodeURIComponent(matcher[1]);
            }catch(e){
                items = matcher[1];
            }
        }
    }
    return items;
}

//获取Token
function getToken(){
    var token = '';
    return token
}

//单选picker
function picker(dom,arr){
    //console.log(dom,arr)
    dom.picker({
        toolbarTemplate: '<header class="bar bar-nav">\
            <button class="button button-link pull-left  close-picker">取消</button>\
            <button class="button button-link pull-right close-picker">确定</button>\
            </header>',
        cols: [
            {
                textAlign: 'center',
                values: arr
            }
        ],
        inputReadOnly:true
    });
}
//radioLi激活状态
function radioLiIsC(arr){
    $.each(arr,function(i,v){
        v.isC = false;
    })
}

//radioLi
function radioLi(dom){
    dom.toggleClass('ac');
    dom.siblings('li').removeClass('ac')
}
//checkLi
function checkLi(dom){
    dom.toggleClass('ac');
}

//判断class ac
function hC(dom){
    return dom.hasClass('ac')
}

//截取0-8字符串
function str08(str){
    var s;
    if(str.length>15){
        s = str.substring(0,15)+'...'
    }else{
        s = str
    }
    var ar = s.split('、');
    ar.removeByValue('');
    s = ar.join('、');
    return s
}

//传数据给app
function messageHtmlHandler(obj,fun){
    WebViewJavascriptBridge.callHandler('messageHtmlHandler', obj, function(response) {
        var res;
        if (response) {
            if(typeof(response) == 'string'){
                res = JSON.parse(response)
            }else{
                res = response
            }
            if(res.status == 0){
                if(fun) {
                    fun.call(this)
                }
            }
        }
    })
}

//从app取数据
function getDataFromApp(obj,fun){
    WebViewJavascriptBridge.callHandler('messageHtmlHandler', obj, function(response) {
		var res;
        if (response) {
            if(typeof(response) == 'string'){
                res = JSON.parse(response)
            }else{
                res = response
            }
            if(res.status == 0){
                if(fun){
                    fun.call(this,res)
                }
            }
        }
    })
}
//获取类型：'1,2,3,4'——得到显示string
function getStrType(typeArr,arr){
    var str = '',typeA = [],strA = [],cA = [];
    if(typeArr && typeArr!=0){
        cA = typeArr.toString().split(',');
        $.each(cA,function(i,v){
            if(v){
                strA.push(arr[v-1].name)
            }
        })
    }
    str = strA.join('、');
    return str
}
function isIos(){
    var a = 0;
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isAndroid){
        a = 1
    }
    if(isiOS){
        a = 2
    }
    return a
}

//s:'1,3,5'——得到显示选中数组
function getBackIsC(s,arr){
    if(s && s!=0){
        var str = s.toString(),sA = [],cA = arr;
        if(str && str.length>0){
            sA = str.split(',')
        }
        if(sA.length>0){
            $.each(sA,function(i,v){
                if(v && v!=0){
                    cA[v-1].isC = true
                }
            })
        }
        return cA
    }else{
        return arr
    }
}

//改变textarea高度
function changeTh(dom){
    dom.height(0);
    dom.height(dom[0].scrollHeight);
}

//比对详情新老数据
function getModify(field1,field2){
    var isUnSame = false;
    if(field1!=field2){
        isUnSame = true;
    }
    return isUnSame
}

function tips(code) {
    var send = {};
    $.each(tipsArr,function (i,v) {
        if(v.code == code){
            send = v
        }
    });
    var obj = {
        name:'tip',
        type:'tip',
        data:send,
        status:''
    };
    messageHtmlHandler(obj)
}





