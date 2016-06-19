// 首页全屏轮播
define(['jquery'],function($){
function Carousel($ct){
	this.ct=$ct;
	this.items=this.ct.children();
	this.imgWidth=$(window).width();
	this.imgCount=this.items.size();
	this.ct.prepend(this.items.last().clone());
	this.ct.append(this.items.first().clone());
	this.imgNum=this.ct.children().size();
	this.ct.find(".item").css("width",this.imgWidth);
	this.ct.find(".img").css("width",this.imgWidth);
	this.ct.css({
		left:0-this.imgWidth,
		width:this.imgWidth*this.imgNum
	});
	this.curIdx=0;
	this.key=false;
	this.init();
}
Carousel.prototype={
	init:function(){
		var _this=this;
		_this.autoplay()
		_this.setBg(1);
	},
	playNext:function(idx){
		var _this=this;
		var idx=idx||1;
		if(_this.key){
			return;
		}
		_this.key=true;
		_this.setBg(_this.curIdx+2);
		_this.ct.animate({
			left:"-="+(_this.imgWidth*idx)
		},function(){
			_this.curIdx=(_this.curIdx+idx)%_this.imgCount
			if(_this.curIdx===0){
				_this.ct.css("left",-_this.imgWidth)
			}
			_this.key=false;
		})
	},
	setBg:function(idx){
			var $img=this.ct.find(".img").eq(idx),
			imgUrl=$img.attr("data-img");
			$img.css("background-image",'url('+imgUrl+')')
	},
	autoplay:function(){
		var _this=this;
		setInterval(function(){
			_this.playNext()
		},2000)
	}
}
	return Carousel;
})