!function(){var i=($(".award-conent").height(),function(i,t){this.node=i,this.nodeH=this.node.height(),this.height=t,this.next=this.node.siblings(".award-next")});i.prototype={init:function(){var i=this;i.nodeH>i.height?(i.node.addClass("change"),i.next.show()):(i.node.addClass("change"),i.next.hide()),i.bind()},bind:function(){var i=this;i.next.on("tap",function(t){t.preventDefault(),i.node.removeClass("change"),i.next.hide()})}},new i($(".award-message"),40).init(),function(){function i(){var i=$(".footer a").attr("url");ua=navigator.userAgent,fallbackLink="http://www.deyi.com/app/download/index.html?from=appdownload",isiOS=/iP(?:ad|hone|od)/i.test(ua),isAndroid=/Android/i.test(ua),inWeixin=/MicroMessenger/i.test(ua),start=new Date,inWeixin?($(".mask").show(),$(".close").on("click",function(){$(".mask").hide()})):(isiOS||isAndroid)&&(setTimeout(function(){!isiOS&&new Date-start>2100||(window.location.href=fallbackLink)},2e3),isiOS?(fallbackLink=fallbackLink,window.location.href="deyiweb://"+i):(fallbackLink="http://www.deyi.com/app/package/Deyi5.5.0_64_home_signed.apk?20160119",iframe.src="deyiapp://deyi/web?u=http://"+i))}$(".footer a").on("tap",i),$(".list-right a").on("tap",i),$(".attention-bottom").on("tap",i),$(".list-other-username").on("tap",i),$(".list-portrait a").on("tap",i),$(".response-author").on("tap",i)}()}();