(function () {
    //弹出dialog模板

    $(".participation").on("tap",function(){
        if($(".dialog").data("key")){
            console.log("dialog框已经弹出")
            return;
        }
        $(".dialog").data("key",true);
        $(".dialog").show();
        $(".dialog_blind").show();
    });

    function close(){
        $(".dialog").hide();
        $(".dialog_blind").hide();
        $(".dialog_second").hide();
        $(".dialog_first").show();
        $(".dialog_response").val("");
        $(".form_text").val("");
        $(".dialog").data("key",false);
    }
//关闭dialog模板
    $(".dialog_close").on("tap",function(){
        close();
    })


//表单验证（第一次）
    var $dialog_second=$(".dialog_second"),
        $dialog_first=$(".dialog_first");
    $url_first="js/index.php";
    $(".dialog_next").on("tap",function(){
        var  $answer=$(".dialog_response").val();

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
                $(".dialog_next").data("key",false)
                if(e.status===1){
                    console.log("OK,回答正确。")
                    $dialog_first.hide();
                    $dialog_second.show();
                }
                if(e.status===2){
                    $(".dialog_response").val("");
                    console.log("答案不对啊.....")
                }
            },
            error:function(){
                $(".dialog_next").data("key",false)
                console.log("出错")

            }
        })
    })



//第二次表单验证
    var $dialog_second_right=$(".dialog_second_right"),
        $dialog_second_put=$(".dialog_second_put"),
        keyWord,
        keyContent,
        $url='js/indexx.php';

    $dialog_second_right.on("tap","a",function(){
        keyWord=$(this).attr("keyword");
    })
    $dialog_second_put.on("tap",function(){
        keyContent=$(".form_text").val();
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
                $(".dialog_second_put").data("key",false)
                if("e.status===1"){
                    close();
                    console.log("提交完成")

                }else{
                    console.log("提交失败")
                }
            },
            error:function(){
                $(".dialog_second_put").data("key",false);
                close();
                console.log("服务器出现错误");
            }
        })
    })

//弹出框第二页样式
    $(".dialog_second_right").on("tap","a",function(){
        $(this).parent().children().removeClass("active");
        $(this).addClass("active");
    })


// input BUG,以及获取焦点的时候自动弹上来。
    $(".dialog_response").on("focus",function(){
        $(".footer").css("position","static")
        $(".dialog_blind").css("height",$(".hidden").offset().top)
        $(".dialog").addClass("move");
        console.log("取消定位")
    })

    $(".dialog_response").on("blur",function(){
        $(".footer").css("position","fixed")
        $(".dialog_blind").css("height",100+"%")
        $(".dialog").removeClass("move");
        console.log("回复定位")
    })


    $(".form_text").on("focus",function(){
        $(".footer").css("position","static")
        $(".dialog_blind").css("height",$(".hidden").offset().top)
        $(".dialog").addClass("move");
        console.log("取消定位")
    })

    $(".form_text").on("blur",function(){
        $(".footer").css("position","fixed")
        $(".dialog_blind").css("height",100+"%")
        $(".dialog").removeClass("move");
        console.log("回复定位")
    })




}());







