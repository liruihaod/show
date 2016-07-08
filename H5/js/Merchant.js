(function(){
    //点我提问
    function appdownload(){
        var url=$(".footer a").attr("url"),
            ua=navigator.userAgent,
            fallbackLink = 'http://www.deyi.com/app/download/index.html?from=appdownload',
            isiOS = /iP(?:ad|hone|od)/i.test(ua),
            isAndroid = /Android/i.test(ua),
            inWeixin = /MicroMessenger/i.test(ua),
            start = new Date();

        if(inWeixin){
            $(".mask").show();
            $(".close").on("click",function(){
                $(".mask").hide();
            })
        }else if(isiOS || isAndroid){
            setTimeout(function(){
                if(!isiOS && new Date() - start > 2100){
                    return;
                }
                window.location.href=fallbackLink;
            },2000);
            if(isiOS){
                fallbackLink =fallbackLink;
                window.location.href = 'deyiweb://' + url;
            }else{
                fallbackLink = 'http://www.deyi.com/app/package/Deyi5.5.0_64_home_signed.apk?20160119';
                iframe.src = 'deyiapp://deyi/web?u=http://' + url;
            }
        }

    }
    $(".footer a").on("tap",function(){

    });
})()