define(['jquery'],function($){
function Exposure($ct,n){
  	this.ct=$ct;
  	this.init();
  }
  Exposure.prototype={
  		init:function(n){
  			var _this=this;
  			_this.setCoser();
  			_this.bind(n);
  		},
  		isVisible:function(n){
  			var _this=this;
  			var position=parseFloat(n)||2/3;
  			return ($(window).scrollTop() + parseInt($(window).height() * position ) > _this.tem.offset().top);
  		},
  		setCoser:function(){
  			var _this=this;
  			_this.tem=_this.ct.clone();
  			_this.tem.css("visibility","hidden");
  			_this.tem.insertAfter(_this.ct);
  			_this.ct.hide();
  		},
  		bind:function(n){
  			var _this=this;
  			$(window).on("scroll",function(){
  				if(_this.isVisible(n)){
  					_this.delete();
  					_this.ct.fadeIn(500);
  				}
  			})
  		},
  		delete:function(){
  			var _this=this;
  			_this.tem.remove();
  		}	
  }
    return Exposure;
})