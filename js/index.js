$(document).ready(function () {
    mkfn('.js_mk ul li')
    //模块动画
    function mkfn(id) {
        var ali = $(id);
        // 移入
        ali.on('mouseenter', function () {
            $(this).find('div.text').animate({
                'left': 0
            }, 200)
        });
        // 移出
        ali.on('mouseleave', function () {
            $(this).find('div.text').addClass('rotatetext')
            setTimeout(() => {
                $(this).find('div.text').removeClass('rotatetext')
                $(this).find('div.text').stop().animate({
                    'left': -($(this).width()) + 'px',
                }, 0)
            }, 200);
        });
    }
    mkfn1('.js_cgal ul li')
    //模块动画
    function mkfn1(id) {
        var ali = $(id);
        // 移入
        ali.on('mouseenter', function () {
            $(this).find('div.text').animate({
                'bottom': 0
            }, 500)
        });
        // 移出
        ali.on('mouseleave', function () {
            $(this).find('div.text').stop().animate({
                'bottom': -($(this).width()) + 'px',
            }, 500)

        });
    }
    //右上角登录下拉框
    $('.js_login').on('mouseenter',function(){
        $(this).find('div.list').show()
    })
    $('.js_login').on('mouseleave',function(){
        $(this).find('div.list').hide()
    })
    // 全局登录弹出框
    //显示弹出框
    $('#js_login_btn').click(function(){
        $('.loginbox').show()
    })
    // 背景
    $('#js_loginbg').css(
        {
            height:document.documentElement.clientHeight + 'px'
        }
    )
    // 关闭弹出层
    $('#js_close').click(function(){
        $('.loginbox').hide()
    })
})