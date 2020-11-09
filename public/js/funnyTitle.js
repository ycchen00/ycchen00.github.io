// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/icons8-猫屁股-16.png");
        document.title = '╭(°A°`)╮猫咪出门啦~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/icons8-猫-16-4.ico");
        document.title = '(ฅ>ω