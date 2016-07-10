function Webmusic(){
	this.showInterface=true;  // 主页面的显示状态
		 this.lyric=true;           // 歌词是否显示
		 this.playing=false;        // 是否在播放状态
		 this.looping=false;        // 是否单曲循环
		 this.volume=1.0;           // 目前的音量
		 this.draging=false;        // 是否可拖动
		 this.doubanOn=true;       // 是否播放豆瓣的歌曲
		 this.getingDouBan=false;   // 是否正在获取豆瓣歌曲信息 ajax锁
		 this.firstPlay=true;     // 是否首次播放，用来判断是否页面多开
		 this.appendRadioHtml();       // 创建Html
		 this.bind();               // 按钮点击事件的绑定
		 this.getDouBanSong();       // 获取豆瓣歌曲
		 this.getChannel();       // 获取豆瓣电台信息
		 this.defaultSet();         //初始选择豆瓣第一个播放
		 this.drag($(".music_wrap")) //拖动初始化；
};

Webmusic.prototype={

	bind:function(){
		 	var _this=this;

			//点击乐符，隐藏/显示界面
			$(".voide_icon").on("click",function(){
						_this.interface();
			});
			$(".collect").on("click",function(){
				_this.interface();
			})

			//点击开关显示

			//显示作者信息
			$(".music_wrap .fa-user").on("mouseover",function(){
				$(".music_wrap .autor").fadeIn(500);
			});

			//隐藏作品信息
			$(".music_wrap .fa-user").on("mouseleave",function(){
				$(".music_wrap .autor").fadeOut(500);
			});

			//显示侧边栏
			$(".music_wrap .fa-list-ul").on("click",function(){
			if(_this.key===false){
					$(".music_wrap .voide_wrap").animate({left:"0"},500);
					_this.key=true;
			}else{
				$(".music_wrap .voide_wrap").animate({left:"-230px"},500);
					_this.key=false;
			}
		});

		//点击侧边栏 选择网易，豆瓣，搜索框
		$(".music_wrap .voide_side_nav").on("click","li",function(){
			$(".voide_side_nav").children().removeClass("active");
			$(this).addClass("active");
			$(".voide_channel").hide();
			$(".song-random").hide();
			$(".search").hide();
			//通过角标来显示内容.
			$(".voide_side").children().eq($(this).index()+1).show();
		});

		//点击选择电台频道
		$(".music_wrap .voide_channel").on("click","li",function(){
			$(".music_wrap .voide_channel li").removeClass("fa fa-check-circle");
			$(this).addClass("fa fa-check-circle");
			_this.getDouBanSong($(this).attr('channel_id'));
			$(".music_wrap .voide_wrap").delay(1000).animate({left:"-230px"},500);
			_this.doubanOn=true;
		});

		//开关歌词
		$(".toggle").on("click",function(){
			tem=$(".toggle").attr("keyword");
		if(tem==="off"){
				$(".toggle").removeClass("fa-toggle-on").addClass("fa-toggle-off");
				$(".toggle").attr("keyword","on");
				$(".lyric_list").hide();
				  _this.lyric=false;
		}else{
			$(".toggle").removeClass("fa-toggle-off").addClass("fa-toggle-on");
			$(".toggle").attr("keyword","off");
			$(".lyric_list").show();
			  _this.lyric=true;
		}
	})

	//点击播放暂停
	$(".play").on("click",function(){
		if(_this.playing){
			_this.stopPlay();
		}else{
			_this.startPlay();
		}
	});


	//点击上一周
	$(".fa-backward").on("click",function(){
		if(_this.doubanOn){
			_this.getDouBanSong();
		}else{
			if(_this.curSong_id===0)_this.curSong_id=1;
			_this.curSong_id--;
			_this.changeSong(_this.curSong_id);
		}
	});

	//点击下一首
	$(".fa-forward").on("click",function(){
		if(_this.doubanOn){
			_this.getDouBanSong();
		}else{
			_this.curSong_id++;
			_this.changeSong(_this.curSong_id);
		}
	});

 // 判断是否 播放下一首
	//点击静音
	$('.voide_ct .volume').on('click',function(){       // 点击 静音
	  if($('.voide_ct .frame')[0].volume === 0.0){
	    $('.voide_ct  .frame')[0].volume=_this.volume;
	    _this.volumeOn();
	     }else{
	     $('.voide_ct .frame')[0].volume = 0.0;
	     _this.volumeOff();
	     }
	   });

	// 鼠标移入 显示音量
	$(".voide_ct .music").on("mouseover",function(){

		$(".volume_adj").show();
	});

	//鼠标移除 音量不显示
	$(".voide_ct .music").on("mouseout",function(){

		$(".volume_adj").hide();
	});

	//点击按钮 调整音量大小
	$('.voide_ct .volume_outline').on('click',function(e){  //  点击 调节音量
				 _this.volume=(e.pageX-$(this).offset().left)/100;
				 $('.voide_ct .frame')[0].volume=_this.volume;
				 if(_this.volume === 0){
					 _this.volumeOff();
				 };
				 $('.voide_ct .volume_line').css('width', _this.volume*100);
				 _this.volumeOn();
			 });
	$(".voide_ct .volume_line").on("click",function(e){
		_this.volume=(e.pageX-$(this).offset().left)/100;
		$('.voide_ct .frame')[0].volume=_this.volume;
		if(_this.volume === 0){
			_this.volumeOff();
		};
		$('.voide_ct .volume_line').css('width', _this.volume*100);
		_this.volumeOn();
	})
//点击音乐播放进度
$('.voide_ct .time_outline').on('click',function(e){
				 _this.currentTime=((e.pageX-$(this).offset().left)/200)*$('.voide_ct .frame')[0].duration;
				 $('.voide_ct .frame')[0].currentTime=_this.currentTime;
				 var timeNumber=_this.dealTime(_this.currentTime);
				 $('.voide_ct .cur_time').text(timeNumber);
				 _this.judgeNex();
				 $('.voide_ct .time').css('width', e.pageX-$(this).offset().left);
			 });

// 歌词退一格
$('.voide_ct .fa-minus').on('click',function(){
				 for(i in _this.timeArr){
					 _this.timeArr[i]=_this.timeArr[i]+1;
				 }
			 });
//歌词快一格
			 $('.voide_ct .fa-plus').on('click',function(){
				 for(i in _this.timeArr){
					 _this.timeArr[i]=_this.timeArr[i]-1;
				 }
			 });

//切换音乐播放方式(单曲循环切换)
$('.voide_ct .fa-refresh').on('click',function(){  // 点击 增/减 单曲循环状态
			if(_this.looping){
				$('.voide_ct .frame').removeAttr('loop');
				$(this).css('color', '#fff');
				_this.looping=false;
			}else{
				$('.voide_ct .frame').attr('loop','');
				$(this).css('color', '#6c9');
				_this.looping=true;
			}
		});

		//判断能否拖动
		$("")
},
//加载界面
appendRadioHtml:function(){
	var _this=this,
			radioHtml="";
			radioHtml+='<div class="music_wrap">'+
									'<div class="voide_icon">'+
									'<i class="fa fa-music"></i>'+
									'</div>'+
									'<div class="voide_ct clearfix">'+
									'<div class="voide_wrap">'+
									'<ul class="voide_main">'+
									'<li class="voide_side">'+
									'<ul class="voide_side_nav clearfix">'+
									'<li class="span_left active">豆瓣Fm</li>'+
									'<li class="span_right">收藏音乐</li>'+
									'</ul>'+
									'<ul class="voide_channel">'+
									'</ul>'+
									'<ul class="search">'+
									'<p>该功能还在完善中...</p>'+
									'</ul>'+
									'</li>'+
									'</ul>'+
									'<div class="interface">'+
									'<div class="stripe"></div>'+
									'<div class="song_cover"></div>'+
									'<div class="interface_wrap">'+
									'<div class="interface_head clearfix">'+
									'<span class="fa fa-list-ul "></span>'+
									'<span class="fa fa-user"></span>'+
									'<div class="autor">'+
									'<h4>简明的现代魔法</h4>'+
									'<p>当前版本:初号机</p>'+
									'<p>By Z-one</p>'+
									'</div>'+
									'</div>'+
									'<div class="interface_mian">'+
									'<h1 class="song_name">歌曲名字</h1>'+
									'<div class="show">'+
									'<span class="fa fa-backward"></span>'+
									'<div class="play fa fa-play-circle-o">'+
									'<audio src="" class="frame"></audio>'+
									'</div>'+
									'<span class="fa fa-forward"></span>'+
									'</div>'+
									'<div class="lyric_place">'+
									'<ul class="lyric_list">'+
									'</ul>'+
									'</div>'+
									'<div class="main_icon">'+
									'<a href="javascript:void(0)" title="歌词跟上我的脚步啊"><span class="fa fa-plus"></span></a>'+
									'<a href="javascript:void(0)" title="歌词你慢点走"><span class="fa fa-minus"></span></a>'+
									'<a href="javascript:void(0)" title="循环播放"><span class="fa fa-refresh"></span></a>'+
									'<a href="javascript:void(0)" title="作者QQ：474640211"><span class="fa fa-qq"></span></a>'+
									'<a href="javascript:void(0)" class="music"><span class="fa fa-volume-up volume"></span>'+
									'<span class="volume_adj">'+
									'<span class="volume_outline"></span>'+
									'<span class="volume_line"></span>'+
									'</span>'+
									'</a>'+
									'</div>'+
									'<div class="time_outline">'+
									'<div class="time"></div>'+
									'</div>'+
									'<span class="cur_time">3:03</span>'+
									'<span class="total_time">3:03</span>'+
									'</div>'+
									'<div class="footer clearfix">'+
									'<p class="song-artist">最热 by Z-one</p>'+
									'<a href="javascript:void(0)" class="footer_left"><span class="fa fa-compress collect"></span></a>'+
									'<a href="javascript:void(0)" class="footer_right"><span class="fa  fa-toggle-on toggle" keyword="off"></span></a>'+
									'</div>'+
									'</div>'+
									'</div>'+
									'</div>'+
									'</div>'+
									'</div>';
									 $('body').append(radioHtml);
},
// 开关界面
interface:function(){
	var _this=this;
	if(_this.showInterface){
		$(".voide_icon").show(500);
		$(".music_wrap .voide_ct").hide(500);
		setTimeout(function(){
		})
		_this.showInterface=false;
	}else{
		$(".voide_icon").hide(500);
		$(".music_wrap .voide_ct").fadeIn(500);
		_this.showInterface=true;
	};
},
//默认选择第一个频道
	defaultSet:function(){
		$(".voide_channel li").eq(0).addClass("fa fa-check-circle");//默认第一个
	},

	judgeNex: function(){
				 if($('.voide_ct .frame')[0].currentTime >= $('.frame')[0].duration){
					 if(this.looping)return;
					 if(this.doubanOn){
						 this.getDouBanSong(this.channel_id);
					 }else{
						 this.curSong_id++;
						 this.changeSong(this.curSong_id);
					 };
				 };
			 },
	// 开始播放
	startPlay:function(){
		if(localStorage.getItem('radioPlaying')==='true')return;
				localStorage.setItem('radioPlaying','true');
			$('.frame')[0].play();
				$('.voide_ct .play').removeClass('fa-pause').addClass('fa-play-circle-o');
				this.setTime();
				this.playing=true;
	},
	//停止播放
	stopPlay:function(){
		$(".voide_ct .frame")[0].pause();
		$(".voide_ct .play").removeClass("fa-play-circle-o").addClass("fa-pause");
		localStorage.setItem('radioPlaying','false');
		this.playing=false;
	},
	//静音函数
	volumeOff: function(){
        $('.voide_ct .volume').removeClass("fa-volume-up").addClass("fa-volume-off");
      },
// 开启声音
    volumeOn: function(){
				$('.voide_ct .volume').removeClass("fa-volume-off").addClass("fa-volume-up");
      },
//获取歌曲总时长时间
		setDuration:function(){
			var _this=this;
			var timeNumber=_this.dealTime($('.voide_ct .frame')[0].duration);
			$('.voide_ct .total_time').text(timeNumber);
		},
//定时更新播放时间
setTime: function(){
			 var _this=this;
			 var clock=setInterval(function(){
				 var time=$('.voide_ct .frame')[0].currentTime/$('.voide_ct .frame')[0].duration;
				 var timeNumber=_this.dealTime($('.voide_ct .frame')[0].currentTime);
				 $('.voide_ct .cur_time').text(timeNumber);
				 if(time>=1){
					 $('.voide_ct .time').css('width', '0');
				 }else $('.voide_ct .time').css('width', 200*time);
				 _this.judgeNex();
				 if(_this.doubanOn)_this.lyricShowing();
			 },100);
		 },
// 传入秒速，处理成00:00的格式输出
dealTime: function(data){
			var second=parseInt(data);
			var min=Math.floor(second/60);
			var sec=second-min*60;
			if(min<10){
				min=0+String(min);
			}else min=String(min);
			if(sec<10){
				sec=0+String(sec);
			}else sec=String(sec);
			return (min+':'+sec);
		},

	//后台请求豆瓣电台频道
	getChannel: function(){             //  获取豆瓣电台频道
        var _this=this;
        $.get('http://api.jirengu.com/fm/getChannels.php', function(ret){
          var ret=JSON.parse(ret);
          _this.appendChannel(ret.channels);
        });
      },

	//把请求的数据添加到左边side侧边栏
	appendChannel:function(data){
		var html='';
        for(var i=0;i<data.length;i++){
          html += '<li'+' channel_id='+data[i].channel_id+'>'+data[i].name+' MHz'+'</li>';
        };
        $('.voide_ct .voide_channel').append(html);

	},
	//获取豆瓣音乐
	getDouBanSong: function(channel_id){
			var _this=this;
			this.channel_id=channel_id;

			if(this.getingDouBan)return;
			this.getingDouBan=true;
			localStorage.setItem('radioPlaying','false');

			$.get('http://api.jirengu.com/fm/getSong.php',{channel: channel_id}, function(ret){
				var ret=JSON.parse(ret);
				$('.voide_ct .frame').attr('src', ret.song[0].url);
				$('.voide_ct .song_name').text(ret.song[0].title);
				$('.voide_ct  .song-artist').text(ret.song[0].albumtitle+' by '+ret.song[0].artist);
				$('.voide_ct  .song_cover').css('background-image', 'url('+ret.song[0].picture+')');
				_this.startPlay();
				$('.voide_ct .lyric_list').text('');
				_this.getingDouBan=false;
				_this.getDouBanLyric(ret.song[0].ssid, ret.song[0].sid);
			});
		},

		//获取歌词
		getDouBanLyric: function(ssid, sid){
			 var _this=this;
			 $.post('http://api.jirengu.com/fm/getLyric.php', {ssid: ssid, sid: sid }, function(ret){
				 var ret=JSON.parse(ret);
				 _this.setLyric(ret.lyric);
			 });
		 },

		//处理歌词
		setLyric: function(lyric){
			var _this=this;
        var lyricData={};
        var lyricArr=lyric.split('\n');
        var reg=/\[\d*:\d*((\.|\:)\d*)*\]/g;
        for(i in lyricArr){
          var lyricTimeArr=lyricArr[i].match(reg);
          if(!lyricTimeArr)continue;
          var lyricText=lyricArr[i].replace(reg,'');
          lyricText=lyricText.replace(/\[offset:.+\]/g,'');
          for(j in lyricTimeArr){
            var min = Number(String(lyricTimeArr[j].match(/\[\d*/i)).slice(1)),
            sec = Number(String(lyricTimeArr[j].match(/\:\d*\.*\d*/g)).slice(1));
            var time = min * 60 + sec;
            lyricData[time]=lyricText;
          };
        };
        _this.appendLyric(lyricData);
      },

			 //  把处理后的歌词 添加到页面上
			appendLyric: function(lyricData){
				var _this=this;
        _this.timeArr=[];
        _this.lyricData=lyricData;
        for(i in lyricData){
          _this.timeArr.push(i);
        };
        _this.timeArr.sort(function(a,b){
          return a-b;
        });
        var lyricHtml='';
        for(var i=0;i<_this.timeArr.length;i++){
          lyricHtml += '<li>'+_this.lyricData[_this.timeArr[i]]+'</li>';
        };
        $('.voide_ct .lyric_list').append(lyricHtml);
        if(!lyricHtml){
          $('.voide_ct .lyric_list').append('本歌曲暂时无对应歌词');
        };
        $('.voide_ct .lyric_list').css('top', 45);
        _this.lyricShowing();
      },

			 //  根据时间比对 把歌词的容器进行偏移设置 呈现出滚动状态
			lyricShowing: function(){
				var _this=this;
			 var curTime=$('.voide_ct .frame')[0].currentTime;
			 if(!_this.timeArr){
				 return;
			 }
			 for(var i=1;i<_this.timeArr.length;i++){
				 if((curTime < _this.timeArr[i])&&(curTime > _this.timeArr[i-1])){
					 var liHeight=0;
					 for(var j=0;j<=i-1;j++){
						 var eachHeight=$('.voide_ct .lyric_list li').eq(j).outerHeight(true)-7;
						 liHeight += eachHeight;
					 };
					 $('.voide_ct .lyric_list').css('top', 40-liHeight);
					 $('.voide_ct .lyric_list li').removeClass('showing');
					 $('.voide_ct .lyric_list li').eq(i-1).addClass('showing');
				 };
			 };
		 },

		//设置拖拽
		drag:function($node){
			var _this=this;
			$node.on("mousedown",function(e){
				console.log("鼠标按下");
				$node.addClass("move_tip");
				$(".interface_wrap").addClass("move_tip");
				_this.left=e.pageX-$node.offset().left;
				_this.top=e.pageY-$node.offset().top;
				_this.draging=true;
			});
			$node.on("mouseup",function(){
				console.log("鼠标按上")
				_this.draging=false;
				$node.removeClass("move_tip");
			});
			$("body").on("mousemove",function(e){
				if(_this.draging){
					console.log("滑动")
					$node.css({
						left:+e.pageX-_this.left,
						top:e.pageY-_this.top
					});
				}
			});
		}
};
var music=new Webmusic();
