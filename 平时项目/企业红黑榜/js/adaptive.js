(function(){
    function init(){
        var width=document.documentElement.clientWidth;
        var head=document.getElementsByTagName("head")[0];
        var style=document.createElement("style");
        if(width>640){

            style.innerHTML="html,body{font-size:"+64+"px;"+"width:"+640+"px;"+"margin:0 auto;}"+
                            ".footer{width:640px;left:0}"
        }else{
            style.innerHTML="html,body{font-size:"+width/10+"px;}";
        }
        head.appendChild(style);
    }

    init();
    window.addEventListener("resize",function(){
        init();
    })
})()



