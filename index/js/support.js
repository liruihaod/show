//支持率
(function(){
    var Support=function(ct){
        this.ct=ct;
        this.agreeWidth=this.ct.find(".compan-list-agree .compan-list-approval").width();
        this.agreeMessage=this.ct.find(".compan-list-agree .compan-list-message").width();
        this.opposeWidth=this.ct.find(".compan-list-oppose .compan-list-approval").width();
        this.opposeMessage=this.ct.find(".compan-list-oppose .compan-list-message").width();
        this.minWidth=this.ct.parents("body").find(".hidden-box").width();
        this.agreeNumber=this.ct.find(".compan-list-agree .conpan-list-number");
        this.opposeNumber=this.ct.find(".compan-list-oppose .conpan-list-number");
    }
    Support.prototype={
        init:function(){
            var _this=this;
            if(_this.agreeWidth>_this.minWidth){
                _this.agreeNumber.css("padding-left",_this.agreeWidth-_this.agreeMessage);
            }else{
                _this.agreeNumber.css("padding-left",_this.minWidth);
            }
            if(_this.opposeWidth>_this.minWidth){
                _this.opposeNumber.css("padding-left",_this.opposeWidth-_this.opposeMessage);
            }else{
                _this.opposeNumber.css("padding-left",_this.minWidth);
            }

        }
    }
    $(".company-list li").each(function(){
        new Support($(this)).init();
    })

    $(window).on("resize",function(){
        $(".company-list li").each(function(){
            new Support($(this)).init();
        })
    })
    })()
