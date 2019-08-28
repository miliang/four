(function () {

    var index=0;
//    var temp=0;
    var imgBanner=document.getElementById('imgBanner');
    imgBanner.style.backgroundImage='url('+imgArr[index]+')';
    var time=setInterval(dis,3000);
    function dis() {
        index++;
        if(index==imgArr.length){
            index=0;
        }
        imgBanner.style.backgroundImage='url('+imgArr[index]+')';
        disCircleStyle();
//            console.log(imgBanner.style.backgroundImage);
    }
    //    //控制圆点
    var divCircle=document.getElementById('divCircle');
    for(var i=0;i<imgArr.length;i++){
        divCircle.innerHTML+='<span>♡</span>'
    }
    //显示小圆点对应的样式
    disCircleStyle();
    function disCircleStyle() {
        var spanArr=divCircle.getElementsByTagName('span');
        for(var i=0;i<spanArr.length;i++){
            spanArr[i].className='';
        }
        divCircle.getElementsByTagName('span')[index].className='circle'
    }
//        鼠标移入
    imgBanner.onmouseenter=function(){
        clearInterval(time);
    };
//        鼠标移出
    imgBanner.onmouseleave=function () {
        time=setInterval(dis,3000);
    };
    //    上一页
    function prev() {
        clearInterval(time);
        index--;
        if(index<0){
            index=imgArr.length-1;
        }
        imgBanner.style.backgroundImage='url('+imgArr[index]+')';
        disCircleStyle();
        time=setInterval(dis,3000);
//            console.log(4545);
//            console.log(imgBanner.style.backgroundImage);
    }

    //    下一页
    function next() {
        clearInterval(time);
        index++;
        if(index==imgArr.length){
            index=0;
        }
        imgBanner.style.backgroundImage='url('+imgArr[index]+')';
        disCircleStyle();
        time=setInterval(dis,3000);
//            console.log(imgBanner.style.backgroundImage);
//            console.log(8585);
    }
    imgBanner.onmousedown=function (e) {
        var now=e.clientX;//当前的
//        console.log(now);
        imgBanner.onmouseup=function(e){
            var moveE=e.clientX;
//            console.log(moveE);
            if((moveE-now)>30){
                next();
            }else if((moveE-now)<0){
                prev();
            }

        }
    }
    //点击圆点
    for(var i=0;i<imgArr.length;i++){
        var span=document.getElementsByTagName('span');
        span[i].myNo=i;
        span[i].onclick=function () {
            index=this.myNo;
            clearInterval(time);
            imgBanner.style.backgroundImage='url('+imgArr[index]+')';
            disCircleStyle();
            time=setInterval(dis,3000);
        }
        document.getElementsByTagName('span')[i].index=i;

    }
})()
