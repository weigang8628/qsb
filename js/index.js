$(document).ready(function () {
    mkfn()
    //模块动画
    function mkfn() {
        var ali = $('.js_mk ul li');
        // 移入
        ali.on('mouseenter', function () {
            $(this).find('div.text').animate({
                left: 0
            }, 200)
        });
        // 移出
        ali.on('mouseleave', function () {
            $(this).find('div.text').addClass('rotatetext')
            setTimeout(() => {
                $(this).find('div.text').removeClass('rotatetext')
                $(this).find('div.text').stop().animate({
                    left: -($(this).find('img').width()) + 'px',
                }, 0)
            }, 200);
        });
    }
})