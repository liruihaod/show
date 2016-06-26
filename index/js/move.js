
// dialog模板
function Dialog(firstTitle,firstQuestion,next,secondPlease,planA,planB,put){
  this.firstTitle=firstTitle||"中国移动武汉分公司";
  this.firstQuestion=firstQuestion||"总经理姓什么：";
  this.next=next||"下一步";
  this.secondPlease=secondPlease||"请选择";
  this.planA=planA||"可以去";
  this.planB=planB||"不能去";
  this.put=put||"提交";
}
Dialog.prototype={
  init:function(){
    var htmls="",
       $node,
       _this=this;
   htmls+='<div class="dialog">';
   htmls+='<div class="dialog_blind"></div>';
   htmls+='<div class="dialog_close"></div>';
   htmls+='<div class="dialog_content">';
   htmls+='<div class="dialog_first">';
   htmls+='<div class="dialog_first_main">';
   htmls+='<div class="dialog_head">';
   htmls+='<div class="dialog_title">'+_this.firstTitle+'</div>';
   htmls+='</div><div class="dialog_main">';
   htmls+='<div class="dialog_question"><span>'+_this.firstQuestion+'</span></div>';
   htmls+='<input type="text" placeholder="答对问题才可以参与" class="dialog_response">';
   htmls+='</div><div class="dialog_footer clearfix">';
   htmls+='<a href="javascript:void(0)">'+_this.next+'</a></div></div></div>';
   htmls+='<div class="dialog_second" style="display:none;">';
   htmls+='<div class="dialog_second_main" style="display:block;">';
   htmls+='<div class="dialog_second_head clearfix">';
   htmls+='<div class="dialog_second_left">'+_this.secondPlease+'</div>';
   htmls+='<div class="dialog_second_right">';
   htmls+='<a href="javascript:void(0)">'+_this.planA+'</a>';
   htmls+='<a href="javascript:void(0)">'+_this.planB+'</a></div></div>';
   htmls+=' <form action="" class="dialog_second_form" method="get">';
   htmls+='<input type="text" placeholder="留点意见建议" class="form_text">';
   htmls+='<button type="submit" class="dialog_second_put">'+_this.put+'</button>';
   htmls+='</form></div></div></div></div>';
   $node=$(htmls);
   $("body").append($node);
   console.log("我已经被添加到页面上去啦");
  },
  bind:function(){
      var _this=this;
      _this.init();
      _this.close();
  },
  close:function(){
    var _this=this;
    $(".dialog_close").on("tap",function(){
      $(".dialog").hide();
    });
  }
};

var dialog=new Dialog();
$(".participation").on("tap",function(){
    var $key=$(this).attr("key");
    if($key==="false"){
         dialog.bind();
        $(this).attr("key","true");
    }else{
      console.log("弹框已经添加,现在就召唤出来");
      $(".dialog").show();
    }
});
