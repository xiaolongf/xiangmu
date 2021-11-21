/*
 *返回顶部
 *2021-11-21 by 肖大大
 */
$(function () {
    window.gotoTop = function () {


        var $gotoTopHtml = $('<div class="backTo"><img src="../../imgs/gototop_05.jpg" alt=""></div>');

        $gotoTopHtml.css({
            width: '30px',
            height: '50px',
            position: 'fixed',
            left: '610px',
            // display: 'none',
            marginLeft: '50%',
            bottom: '500px',
        });
        //返回顶部的js代码
        /*返回顶部*/
        /*绑定滚动事件*/
        $(document).scroll(function () {
            var topDistance = $('html,body').scrollTop();
            if (topDistance > 500) {
                $('.backTo').fadeIn();
            } else {
                $('.backTo').fadeOut();
            }
        });
        //返回顶部(动态添加的元素 需要使用事件委托 才能绑定事件)
        $('body').on('click', '.backTo', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 300)
        });
        $('body').append($gotoTopHtml);
    }
})

