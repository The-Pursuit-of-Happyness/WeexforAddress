/**
 * Created by huben on 03/01/2017.
 */

exports.getBaseUrl = function(bundleUrl) {
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('hive.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    } else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
        var host = '172.168.1.71:8080';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        if (typeof window === 'object') { // 浏览器 webview
            nativeBase = 'http://' + host + '/web/index.html?page=../dist/';
        } else {
            nativeBase = 'http://' + host + '/dist/';
        }
    }
    return nativeBase;
};