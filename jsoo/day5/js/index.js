(function(){
    var jQuery = function(selector){
        return new init(selector);
    }
    var init = function (selector) {
        this.elements = [];
        var _this = this;
        if(/^#/.test(selector)){
            selector = selector.substring(1);
            this.elements.push(document.getElementById(selector));
        }else if(/^\./.test(selector)){
            selector = selector.substring(1);
            var className = this.elements.push(document.getElementsByClassName(selector));
            for(var i = 0;i<className.length;i++){
                this.elements.push(className[i]);
            }
        }
        for(var key in this.elements){
            this[key] = this.elements[key];
        }
        this.css = function (obj) {
        //    console.log('我是css的方法');
            if(arguments.length==1 && typeof arguments[0] == 'string'){
            //    获取样式
                return getCss(arguments[0]);
            }else if(typeof arguments[0] == 'object'){
            //    设置样式
                return setCss(arguments[0]);
            }else if(arguments.length == 2 && typeof arguments[0] == 'string'){
                return setCss(arguments[0]);
            }
            function getCss(cssString) {
                for(var i = 0;i < _this.elements.length;i++){
                    return _this.elements[i].style[cssString];
                }
            }
            function setCss(obj) {
                if(obj.constructor.name == 'Object'){
                    _this.elements.forEach(function (value) {
                        for(var key in obj){
                            value.style[key] = obj[key];
                        }
                    })
                }
                return _this;
            }
        }
    }
    jQuery.fn = init.prototype;

    jQuery.fn.extend = function (obj) {
        for(var key in obj){
            jQuery.fn[key] = obj[key];
        }
    }
    jQuery.extend = function (obj) {
        for(var key in obj){
            jQuery[key] = obj[key];
        }
    }
    window.$ = jQuery;
    $.extend({
        ajax:function () {
            console.log("我添加的ajax方法");
        }
    })
    $.fn.extend({
        sum:function (a,b) {
            console.log(a+b);
        }
    })
})();