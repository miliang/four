window.$=function (selector) {
    var element = document.querySelector(selector);
    return{
        on:function (eventType,fn) {
            element.addEventListener(eventType,fn);
        },
        addClass:function (className) {
            element.classList.add(className);
        }
    }
}