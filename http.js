/*
* @Author: admin
* @Date:   2016-02-18 20:45:48
* @Last Modified by:   admin
* @Last Modified time: 2016-02-18 21:51:52
*/


(function(window,document){
  'use strict';
  var jsonp=function(url,data,callback){
    //1.挂载回调函数
    var cbFunName='my_json_cb'+Math.random().toString().replace(".","");
    window[cbFunName]=callback;
    //2.将data转换为url字符串的形式
    //{id:1,name:'zhangsan'}=>id=1&name=zhangsan
    var querystring=url.indexOf("?") == -1 ? "?" : "&";
    for(var key in data){
      querystring+=key+'='+data[key]+'&';
    }
    //3.处理url中的回调参数
    //url+=callback=jsjjdndk
    querystring+='callback='+cbFunName;
    //4.创建一个script标签
    var scriptElement=document.createElement('script');
    scriptElement.src=url+querystring;
    //5.将script标签放到页面中
    document.body.appendChild(scriptElement);
  }
  window.$jsonp=jsonp;
})(window,document)