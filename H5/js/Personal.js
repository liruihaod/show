(function(){

    //判断悬赏列表
    var conentH=$(".award-conent").height();//内容宽度
        //messageH=$(".award-message").height();//容器高度





    var Judge=function($node,height){
        this.node=$node;
        this.nodeH=this.node.height();
        this.height=height;
        this.next=this.node.siblings(".award-next")

    }
    Judge.prototype={
        init:function (){
            var _this=this;
            if(_this.nodeH>_this.height){
                _this.node.addClass("change");
                _this.next.show();
            }else{
                _this.node.addClass("change");
                _this.next.hide();
            }
            _this.bind();
        },
        bind:function(){
            var _this=this;
            _this.next.on("tap",function(e){
                e.preventDefault();
                _this.node.removeClass("change");
                _this.next.hide();
            })
        }
    }

    new Judge($(".award-message"),40).init();

    //点我提问
    $("footer a").on("tap",function(){
        var url=$(this).attr("url"),
            ua=navigator.userAgent,
            fallbackLink = 'http://www.deyi.com/app/download/index.html?from=appdownload',
            isiOS = /iP(?:ad|hone|od)/i.test(ua),
            isAndroid = /Android/i.test(ua),
            inWeixin = /MicroMessenger/i.test(ua),
            start = new Date();

        if(inWeixin){
            console.log("微信");
        }else if(isiOS || isAndroid){
            setTimeout(function(){
                if(!isiOS && new Date() - start > 2100){
                    return;
                }
                window.location.href=fallbackLink;
            },1000);
            if(isiOS){
                fallbackLink =fallbackLink;
                window.location.href = 'deyiweb://' + url;
            }else{
                fallbackLink = 'http://www.deyi.com/app/package/Deyi5.5.0_64_home_signed.apk?20160119';
                iframe.src = 'deyiapp://deyi/web?u=http://' + url;
            }
        }
    });

})()