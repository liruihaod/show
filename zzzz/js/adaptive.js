!function(){
    var width=document.documentElement.clientWidth;
    var head=document.getElementsByTagName("head")[0];
    var style=document.createElement("style");
    style.innerHTML="html{font-size:"+width/10+"px;}";
    head.appendChild(style);

}()
