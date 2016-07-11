(function(){
    //点我提问
    function appdownload(){
        var url=$(".footer a").attr("url");
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
    $(".footer a").on("tap",appdownload);
    $(".list-right a").on("tap",appdownload);
    $(".attention-button").on("tap",appdownload);
    $(".list-other-username").on("tap",appdownload);
    $(".content-illustration").on("tap",appdownload);
    $(".list-portrait").on("tap",appdownload);


    //播放音乐
    $(".content-voice").on("tap",function(){
        var audioSrc=$(".content-voice .frame").attr("audio-src");
        if(!$(this).data("key")){
            $(this).data("key",true)
            console.log("播放音乐");
            if(!$(".content-voice .frame").attr("src")){
                $(".content-voice .frame").attr("src",audioSrc);
            }
            $(".content-voice .frame")[0].play();
        }else{
            $(this).data("key",false);
            $(".content-voice .frame")[0].pause();
            console.log("停止播放")
        }

    })

    //页面懒加载分页数据

})()