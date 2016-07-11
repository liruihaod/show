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
    $(".attention-bottom").on("tap",appdownload);
    $(".list-other-username").on("tap",appdownload);
    $(".list-portrait a").on("tap",appdownload);
    $(".response-author").on("tap",appdownload);
    $(".award-icon").on("tap",appdownload);
    $(".other-icon").on("tap",appdownload);
    $(".privilege-main").on("tap",appdownload);
    $(".userinfo-portrait").on("tap",appdownload);


    //页面懒加载分页数据
    function lazyLoad($node){
        this.node=$node;
        this.getH=$(".getmore").offset().top;
        this.init();
    }
    lazyLoad.prototype={
        init:function(){
            var _this=this;
            $(".main").on("scroll",function(){
                if(clock){
                    clearTimeout(clock)
                }else{
                   var clock=setTimeout(function(){
                        _this.playShow();
                    },300)
                }
            })
        },
        playShow:function(){
            var _this=this;
            if(_this.isVisble($(".getmore"))){
                if(!$(".getmore").data("key")){
                    $(".getmore").data("key",true);
                    _this.playAjax();
                }


            }
        },
        isVisble:function(){
            var _this=this;
            _this.height=$(".main").height();
            _this.curH=$(".main").scrollTop();
            if(_this.height+_this.curH>=_this.getH){
                    return true;
            }else{
                return false;
            }
        },
        playAjax:function(){
            var _this=this;
            $.get("/user/Details",function(e){
                var tem= e.data.list,
                    html="";
                if(parseInt(e.code)===200){
                    for(var i=0;i<tem.length;i++){
                        html+=' <li class="content-list">'+
                            ' <div class="content-list-head">'+
                            ' <div class="list-left">'+
                            '<div class="list-portrait">'+
                            ' <a ><img src="'+tem[i].avatar+'" alt="头像"></a>'+
                            ' </div><div class="list-other">'+
                            ' <a ><span class="list-other-username">'+ tem[i].author+'</span></a>'+
                            '<time><span class="list-other-time">'+(Date.parse(new Date())-tem[i].dateline)/6000+'</span>分钟前</time></div></div>'+
                            '<div class="list-right">'+
                            ' <a ><span class="list-help">'+ tem[i].agreed+'</span>有帮助</a></div></div>'+
                            ' <div class="content-title">'+
                            '<strong>'+ tem[i].attaches[0].path.content+'</strong></div>';
                        if(tem[i].attaches.length>1) {
                           html+= '<div class="content-illustration">'+
                            '<a ><img src="'+tem[i].attaches[1].path.content+'" alt="插图"></a></div>'
                        }
                          html+=  '<div class="content-response">'+
                            '<div class="response-head">'+
                            '<a class="response-author">'+tem[i].firstreply.author+'</a>'+
                            '<time><span class="response-time">'+(Date.parse(new Date())-tem[i].firstreply.dateline)/6000+'</span>分钟前回答</time></div>'+
                            '<strong class="response-main">'+tem[i].firstreply.content+'</strong>'+
                            '</div></li>';
                    }
                    _this.node.append(html);
                }

            })
        }
    }
    new lazyLoad($(".content-communicate"));

})()