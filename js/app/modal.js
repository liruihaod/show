//modal
define(['jquery'],function($){
function Modal(title,content){
	this.title=title;
	this.content=content;
}
Modal.prototype={
	init:function(){
		var _this=this;
		_this.time();
	},
	creat:function(){
		var _this=this;
		var str='<div class="modal_wrap">'+
						'<div class="modal_set"></div>'+
						'<div class="modal">'+
						'<div class="modal_top">'+
						'<img  class="modal_ct"src="img/2.jpg" alt="">'+
						'<strong>'+_this.title+'</strong>'+
						'<p>'+_this.content+'</p></div>'+
						'<div class="modal_bottom">'+
						'<span class="modal_btn">我晓得啦</span></div>'+
						'<i class="fa fa-close (alias) close_box "></i><div></div>';
			$("body").append($(str));
			$close_box=$(".close_box");
			$modal_btn=$(".modal_btn");
	},
		time:function(){
			var a=0,
				_this=this;
				auto=setInterval(function(){
					a++;
					if(a>60){
								_this.creat();
									_this.button();
						$(".modal_wrap").show();
						$(".modal").animate({"bottom":40+"%",
											  "opacity":1
								},1000);
							clearInterval(auto)
					}
				},1000)
		},
		button:function(){
			$close_box.on("click",function(){
			$(".modal_wrap").hide();
			})
			$modal_btn.on("click",function(){
			$(".modal_wrap").hide();
		})
		}
}
return Modal;
})