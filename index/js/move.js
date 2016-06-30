(function () {
    //弹出dialog模板

    $(".participation").on("tap",function(){
        if($(".dialog").data("key")){
            console.log("dialog框已经弹出")
            return;
        }
        $(".dialog").data("key",true);
        $(".dialog").show();
        $(".dialog-blind").show();
    });

    function close(){
        $(".dialog").hide();
        $(".dialog-blind").hide();
        $(".dialog-second").hide();
        $(".dialog-first").show();
        $(".dialog-response").val("");
        $(".form-text").val("");
        $(".dialog").data("key",false);
    }
//关闭dialog模板
    $(".dialog-close").on("tap",function(){
        close();
    })


//表单验证（第一次）
    var $dialogSecond=$(".dialog-second"),
        $dialogFirst=$(".dialog-first");
    $url_first="js/index.php";
    $(".dialog-next").on("tap",function(){
        var  $answer=$(".dialog-response").val();

        if($(this).data('key')){
            console.log("请不要点击太频繁")
            return;
        }

        $(this).data("key",true);
        $.ajax({
            url:$url_first,
            dataType:"json",
            data:{
                answer:$answer
            },
            type:"get",
            success:function(e){
                $(".dialog-next").data("key",false)
                if(e.status===1){
                    console.log("OK,回答正确。")
                    $dialogFirst.hide();
                    $dialogSecond.show();
                }
                if(e.status===2){
                    $(".dialog-response").val("");
                    console.log("答案不对啊.....")
                }
            },
            error:function(){
                $(".dialog-next").data("key",false)
                console.log("出错")

            }
        })
    })



//第二次表单验证
    var $dialog_second_right=$(".dialog-second-right"),
        $dialog_second_put=$(".dialog-second-put"),
        keyWord,
        keyContent,
        $url='js/indexx.php';

    $dialog_second_right.on("tap","a",function(){
        keyWord=$(this).attr("keyword");
    })
    $dialog_second_put.on("tap",function(){
        keyContent=$(".form-text").val();
        if($(this).data("key")){
            console.log("请不要提交太频繁")
            return;
        }
        $(this).data("key",true);

        $.ajax({
            url:$url,
            dataType:"json",
            data:{
                keyWord:keyWord,
                keyContent:keyContent
            },
            type:"get",
            success:function(e){
                $(".dialog-second-put").data("key",false)
                if("e.status===1"){
                    close();
                    console.log("提交完成")

                }else{
                    console.log("提交失败")
                }
            },
            error:function(){
                $(".dialog-second-put").data("key",false);
                close();
                console.log("服务器出现错误");
            }
        })
    })

//弹出框第二页样式
    $(".dialog-second-right").on("tap","a",function(){
        $(this).parent().children().removeClass("active");
        $(this).addClass("active");
    })


// input BUG,以及获取焦点的时候自动弹上来。

    var hiddenHeight=$(".hidden").offset().top
        $("input").each(function(){
            $(this).on("focus",function(){
                $(".footer").css("position","static")
                $(".dialog-blind").css("height",hiddenHeight)
                console.log($(".dialog-blind").height())
                $(".dialog").addClass("move");
                console.log("取消定位")
            });
            $(this).on("blur",function(){
                $(".footer").css("position","fixed")
                $(".dialog-blind").css("height",100+"%")
                console.log($(".dialog-blind").height())
                $(".dialog").removeClass("move");
                console.log("回复定位")
            })
        })


}());







