document.getElementById('download').addEventListener('click', download);
function download(e) {
    var url = e.target.getAttribute('url'),
        ua = navigator.userAgent,
        fallbackLink = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.deyi.client',
        isiOS = /iP(?:ad|hone|od)/i.test(ua),
        isAndroid = /Android/i.test(ua),
        inWeixin = /MicroMessenger/i.test(ua),
        start = new Date();

    if (inWeixin) {
        cover.className = 'code-download-cover code-download-show';
        close.addEventListener('click', function self() {
            cover.className = 'code-download-cover';
            close.removeEventListener('click', self);
        });
    } else if (isiOS || isAndroid) {
        setTimeout(function () {
            if (!isiOS && new Date() - start > 2100) {
                return;
            }
            window.location.href = fallbackLink;
        }, 2000);
        if (isiOS) {
            fallbackLink = 'itms-apps://itunes.apple.com/cn/app/de-yi-sheng-huo-lun-tan/id569407003?mt=8';
            window.location.href = 'deyiweb://' + url;
        } else {
            fallbackLink = 'http://www.deyi.com/app/package/Deyi5.5.0_64_home_signed.apk?20160119';
            iframe.src = 'deyiapp://deyi/web?u=http://' + url;
        }
    }
}
