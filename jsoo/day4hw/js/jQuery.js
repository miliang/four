(function () {
    var jQuery = function (selector) {
        return new init(selector);
    }
    function init(selector) {
        this.elements = [];
        this.value = [];
        var _this = this;//_this是局部变量
        if(/^#/.test(selector)){
            selector = selector.substring(1);
            this.elements.push(document.getElementById(selector));
        }else if(/^\./.test(selector)){
            selector = selector.substring(1);
            var className = document.getElementsByClassName(selector);
            for(var i = 0;i < className.length;i++){
                this.elements.push(className[i]);
            }
        }
        for(var key in this.elements){
            this[key] = this.elements[key];
        }
        this.css = function(obj){
            if(arguments.length == 1 && typeof arguments[0] == 'string'){
                return getCss(arguments[0]);
            }else if(arguments.length == 2 && typeof arguments[0] == 'string'){
                return setCss(arguments[0]);
            }else if(typeof arguments[0] == 'object'){
                return setCss(arguments[0]);
            }
        }
        function getCss(cssString) {
            for(var i = 0;i<_this.elements.length;i++){
                return _this.elements[i].style[cssString]
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
    this.html= function (selector) {
        // var body=document.getElementsByTagName('body')[0];
        // body.appendChild(document.createElement(tagName))
        if(/^#/.test(selector)){
            document.getElementById(selector).innerHTML="";
        }else if(/^\./.test(selector)){
            var myClass = document.getElementsByClassName(selector);
            for(var i = 0;i<myClass.length;i++){
                myClass[i].innerHTML="";
            }
        }
    }
    this.val = function (selector) {
        if(/^#/.test(selector)){
            selector = selector.substring(1);
            this.value.push(document.getElementById(selector).value);
        }else if(/^\./.test(selector)){
            selector = selector.substring(1);
            var cName = document.getElementsByClassName(selector);
            for(var i = 0;i<cName.length;i++){
                this.value.push(cName[i]);
            }
        }
        for(var key in this.value){
            this[key] = this.value[key];
        }
    }
    function createXHR() {
        let xhr;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else{
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        return xhr;
    }
    this.ajax = function (obj){
        let xhr = createXHR();
        xhr.onreadystatechange = obj.success;
        if(obj.type == 'get'){
            xhr.open(obj.type,url+'?'+obj.data);
            xhr.send(null);
        }else if(obj.type == 'post'){
            xhr.open(obj.type,url);
            xhr.setRequestHeader('Context-type','application/x-www-form-urlencoded');
            xhr.send(obj.data);
        }
    }
    jQuery.fn = jQuery.prototype = init.prototype;
    jQuery.fn.extend = function (obj) {
        for(var key in obj){
            jQuery.prototype[key] = obj[key];
        }
    }
    jQuery.extend = function (obj) {
        for(var key in obj){
            jQuery[key] = obj[key];
        }
    }
    window.$ = jQuery;
})();



