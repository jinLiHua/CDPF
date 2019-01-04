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
    //alert('是否是Android：'+isAndroid);
    //alert('是否是iOS：'+isiOS);
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


setupWebViewJavascriptBridge(function(bridge) {
    bridge.init(function(message, responseCallback) {
        //alert(message);
    });
    bridge.registerHandler("functionForAndroid", function(data, responseCallback) {
    });
});

//传数据给app
function messageHtmlHandler(obj,fun){

    WebViewJavascriptBridge.callHandler('messageHtmlHandler', obj, function(response) {
        //alert(response)
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