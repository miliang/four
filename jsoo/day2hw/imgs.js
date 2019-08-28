(function(){
    var ShowImg={}
    function createTag(name,url,id,desc,f1,f2,f3,f4) {
        this.name=name;
        this.url=url;
        this.id=id;
        this.desc=desc;
        this.f1=f1;
        this.f2=f2;
        this.f3=f3;
        this.f4=f4;
    }
    var num=1;
   var key=document.getElementById('id');
   var img=document.getElementById('id');
   var show=document.getElementById('id');
   var imgs=document.getElementById('id');
    var url=imgs[0].src.split('/');
           console.log(url);
           var s=url[url.length-1];
           console.log(s);
           var a=s.split('.');
           console.log(a[0]);
    function f1() {//减
        num--;
        if(num<1) {
            num = 1;
        }
        img.src=url[url.length-2]+"/"+a[0]+"."+a[1]

    }
    function f2() {//加
        num++;
        if(num>3) {
            num = 3;
        }
        img.src=url[url.length-2]+"/"+a[0]+"."+a[1]

    }
    function f3() {//关闭
            show.style.display='none';
            key.style.display='block';
    }
    function f4() {
        for(var i=1;i<img.length;i++){
            key.style.display='none';
            show.style.display='block';
        }
        img.src=url[url.length-2]+"/"+a[0]+"."+a[1]
    }

    // var jQuery=function () {
    //     return new init(id);
    // }
    // function init() {
    // //    根据拿到的id 去搞事情
    // //    把字符串拆分 正则判断第一个字符
    //     this.elements=[];
    //     if(/^#/.test(id)){
    //         id=id.substring(1);
    //         this.elements.push(document.getElementById(id));
    //     }
    //     for(var key in this.elements){
    //         this[key]=this.elements[key];
    //     }
    //     this.css=function(obj){
    //        obj.style.display='none&&block&&inline&&inline-block'
    //         obj.style.position
    //     }
    // }
    // jQuery.fn={
    //
    // };
    // jQuery.fn.extends=function(obj){
    //     for(var key in obj){
    //         init.prototype[key]=obj[key];
    //     }
    // }
    // jQuery.extends=function(obj){
    //     for(var key in obj){
    //         jQuery[key]=obj[key];
    //     }
    // }
        window.Q=ShowImg;
})