!function(){function i(){var i=$(".footer a").attr("url");ua=navigator.userAgent,fallbackLink="http://www.deyi.com/app/download/index.html?from=appdownload",isiOS=/iP(?:ad|hone|od)/i.test(ua),isAndroid=/Android/i.test(ua),inWeixin=/MicroMessenger/i.test(ua),start=new Date,inWeixin?($(".mask").show(),$(".close").on("click",function(){$(".mask").hide()})):(isiOS||isAndroid)&&(setTimeout(function(){!isiOS&&new Date-start>2100||(window.location.href=fallbackLink)},2e3),isiOS?(fallbackLink=fallbackLink,window.location.href="deyiweb://"+i):(fallbackLink="http://www.deyi.com/app/package/Deyi5.5.0_64_home_signed.apk?20160119",iframe.src="deyiapp://deyi/web?u=http://"+i))}$("#footer").on("tap",i)}();