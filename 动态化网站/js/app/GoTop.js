//回到顶部
//可设置距离，默认距离为500；
define(['jquery'],function($){
function GoTop(time){
		this.time=time||500;
		this.init();
	};

	GoTop.prototype = {

		init:function(){
			this.creatHtml();
			this.bind();
	},
		creatHtml: function(){
			this.$gotop = $('<div id="gotop"><i class="fa fa-send-o (alias)"></i></div>').hide();
			this.$gotop.css({
				position: 'fixed',
				right: '30px',
				bottom: '30px',
				textAlign: 'center',
				width: '50px',
				fontSize: '36px',
				borderRadius: '10px',
				cursor: 'pointer',
			});
			$('body').append(this.$gotop);
		},

		bind: function(){
			var _this=this;
			this.$gotop.on('click',function(){
				$('body').animate({scrollTop:0},1000);
			});
			$(window).on('scroll',function(){
				_this.checkShow();
			})
		},

		checkShow: function(){
			var _this=this;
			if($(window).scrollTop()>_this.time){
				_this.$gotop.show(1000);
			}else _this.$gotop.hide(1000);
		},
		
	};
	return GoTop;
})