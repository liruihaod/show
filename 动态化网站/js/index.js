// 首页大图轮播
				var $ct = $('.mianpage_ct'),
				$items = $ct.children(),
				imgWidth = $(window).width(),
				imgCount = $ct.children().size();

			$ct.prepend($items.last().clone());
			$ct.append($items.first().clone());
			$ct.find('.item').css('width', imgWidth);
			$ct.find('.img').css('width', imgWidth);
			imgRealCount = $ct.children().size();
			$ct.css({left: 0-imgWidth, width: imgRealCount*imgWidth})

			var curIdx = 0;
			var isAnimate = false;




			setBg(1);
			autoPlay();


			function stopAuto(){
				clearInterval(clock);
			}

			function autoPlay(){
				clock = setInterval(function(){
					playNext();
				}, 3000);	
			}


			function playNext(idx){
				var idx = idx || 1;
				if(!isAnimate){
					isAnimate = true;
					setBg(curIdx+2);
					$ct.animate({left: '-='+(imgWidth*idx)},function(){
						curIdx = (curIdx + idx)%imgCount;
						if(curIdx === 0){
							$ct.css({left: 0-imgWidth});;
						}
						isAnimate = false;
				
					});
				}
			}
			//这里为了性能让图片用了懒加载
			function setBg(idx){
				var idx = idx || 0,
					$node = $ct.children().eq(idx)
					$img = $node.find('.img'),
					imgUrl = $img.attr('data-img');
				$img.css('background-image', 'url('+imgUrl+')');
			
				
			}

//nav部分
var $nav=$("#header"),
 	height=$(window).height();
 function showTime(){
 	this.ct=$nav;
 	$(window).on("scroll",function(){
 		var tem=$(window).scrollTop()
 		if(tem>height/5){
 			this.ct.css("background","rgba(34,34,34,.01)")
 		}
 		if(tem>height/4){
 			this.ct.css("background","rgba(34,34,34,.01)")
 		}
 		if(tem>height/3){
 			this.ct.css("background","rgba(34,34,34,.6)")
 		}
 		if(tem>height/2){
 			this.ct.css("background","rgba(34,34,34,.8)")
 		}
 		if(tem>height){
 			this.ct.css("background","rgba(34,34,34,1)")
 		}
 	})
 }
showTime();

//nav部分
function scroll_show(){


$(window).on("scroll",function(){
	var nav1=$("#header").find("li"),
	$serices=$("#serices .width").offset().top,
	$portfolio=$("#portfolio .portfolio-bottom").offset().top,
	$about=$("#about .width").offset().top,
	$team=$("#team .width").offset().top,
	$contact=$("#contact .width").offset().top,
	tem=$(window).scrollTop(),
	height=$(window).height();

	if(tem+height<$serices){
		
		nav1.removeClass('move')
	}
	if(tem+height>$serices){
		
		nav1.removeClass('move').eq(0).addClass('move')
	}
	if(tem+height>$portfolio){
		nav1.removeClass('move').eq(1).addClass('move')
	}
	if(tem+height>$about){
		nav1.removeClass('move').eq(2).addClass('move')
	}
	if(tem+height>$team){
		nav1.removeClass('move').eq(3).addClass('move')
	}
	if(tem+height>$contact){
		nav1.removeClass('move').eq(4).addClass('move')
	}

})
}
scroll_show();


//展示瀑布流布局
function send(){
	var boxWidth=$(".portfolio-box").outerWidth(true);
	var widthNum=Math.floor($(window).width()/boxWidth);
	var sum=[];

for(var i=0;i<widthNum;i++){
	sum.push(0);
}

$(".portfolio-box").each(function(){
	var _this=$(this),
		idx=0,
		minHeight=sum[0];

	for(var i=0;i<sum.length;i++){
		if(sum[i]<minHeight){
			idx=i;
			minHeight=sum[i];
		}
		}
		_this.css({
			top:minHeight,
			left:boxWidth*idx
		})
		sum[idx]+=_this.outerHeight(true);
		$(".portfolio-bottom").height(sum[idx]);
})
}
send();
$(window).on("resize",function(){
	send();
})

//点击更多
var $btn=$(".get_more");

var products = [
    {
    	class:'box4',
        img: 'img/task2.png',
        h3: 'Round Icons',
        i: 'Graphic Design'
    },{
    	class:'box3',
        img: 'img/task3.png',
        h3: 'Startup Framework',
        i: 'Website Design'
    },{
    	class:"box2",
        img: 'img/task6.png',
        h3: 'Treehouse',
        i: 'Graphic Design'
    }
    ,{
    	class:"box3",
        img: 'img/task2.png',
        h3: 'Treehouse',
        i: 'Graphic Design'
    }
    ,{
    	class:"box3",
        img: 'img/task4.png',
        h3: 'Treehouse',
        i: 'Graphic Design'
    }
    ,{
    	class:"box1",
        img: 'img/task5.png',
        h3: 'Treehouse',
        i: 'Graphic Design'
    }
];

$btn.on("click",function(){
	var str="";
	for(var i=0;i<products.length;i++){
		str+='<div class="portfolio-box"><div><a href="#"'+'class="'+products[i].class+'">'+
			'<div class="portfolio-hover"><div class="portfolio-hover-content">'+
			'<i class="fa fa-plus fa-5x"></i></div></div>'+
			'<img src="'+products[i].img+'" alt=""></a>'+
			'<h3>'+products[i].h3+'</h3>'+
			'<i>'+products[i].i+'</i></div></div>';
	}
	var $node=$(str)
	$(".portfolio-bottom").append($node);
	send();
	scroll_show();
})

//懒加载
function lazyLoad($ct){
	this.ct=$ct;
	this.height=$(window).height();

}
lazyLoad.prototype={
	init:function(){
		var _this=this;
		_this.play();
	},
	play:function(){
		var _this=this;
		_this.ct.children().each(function(){
			var $node=$(this);
			$(window).on("scroll",function(){
				var tem=$(window).scrollTop(),
					nodeTop=$node.offset().top;
			if(tem+_this.height>nodeTop){
				$node.addClass('show_move')
			}
			})
		})
	}
}
var time_line=new lazyLoad($(".time-line"));
time_line.init();
console.log("hello,我是李瑞")
console.log("关于本网站的细节部分说明,已在个人博客贴出")

//回到顶部
function Gotop(minHeight){
	this.minHeight=minHeight;
	this.init();
}
Gotop.prototype={
	init:function(){
		var str="",
			_this=this;
		str+='<div class="gotop">'+
			'<i class="fa fa-arrow-circle-up"></i>'+
			'</div>';
		var go_top=$(str);
		$("#wrap").append(go_top);
		$(".gotop").css({
			fontSize:3+"rem",
			position:"fixed",
			bottom:10+"%",
			right:20+"px",
			cursor:"pointer",
			visibility:"hidden"
		})
		_this.play();
		_this.toShow(_this.minHeight);
		console.log(go_top)
	},
	play:function(){
		var tem=$(".gotop i");
		tem.on("click",function(){
			$("body").animate({
				"scrollTop":0
			},2000)
		})

	},
	toShow:function(minHeight){
		var tem=$(".gotop i");
		$(window).on("scroll",function(){
			var scrollT=$(window).scrollTop();
			if(scrollT>minHeight){
				tem.fadeIn(500);
			};
			if(scrollT<minHeight){
				tem.fadeOut(500);
			};
		})
	}
}

new Gotop(1000);

