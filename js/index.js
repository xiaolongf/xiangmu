/**
 * 乐购首页js
 * 2021-10-27
 */
//当页面加载
$(function () {
    /*首页大图轮播*/
    $('#bannerInner').tyslide({
        boxh: 460,//盒子的高度
        w: 1000,//盒子的宽度
        h: 390,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 10,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });
    $('#ebooks-banner').tyslide({
        boxh: 223,//盒子的高度
        w: 332,//盒子的宽度
        h: 223,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 2,//控制按钮高度
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
    });
    $('.ebooks .right-box ul > li').mouseenter(function () {
        //所有兄弟：隐藏详情 显示 标题
        $(this).siblings().find('.desc').hide();
        $(this).siblings().find('.ebooks-title').show();

        //当前：隐藏标题，显示详情
        $(this).find('.ebooks-title').hide();
        $(this).find('.desc').show();
    });

    $('#clothes-banner').tyslide({
        boxh: 337,//盒子的高度
        w: 426,//盒子的宽度
        h: 337,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 2,//控制按钮高度
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
    });
    $('#sport-banner').tyslide({
        boxh: 337,//盒子的高度
        w: 426,//盒子的宽度
        h: 337,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 2,//控制按钮高度
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
    });
    $('#clidren-banner').tyslide({
        boxh: 337,//盒子的高度
        w: 426,//盒子的宽度
        h: 337,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 2,//控制按钮高度
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
    });
    /*鼠标移入改变背景颜色 */
    $('.promotion .content .pigeon .promotion-list li').mouseover(function () {
        $(this).css('background-color', "#ccc");
    });
    $('.promotion .content .pigeon .promotion-list li').mouseleave(function () {
        $(this).css('background-color', "#fff");
    });

    $('.promotion .content .topp ul li').mouseenter(function () {
        //当行激活类的切换
        $(this).addClass('active').siblings().removeClass('active');
        //内容切换
        //获取对应的索引
        var index = $(this).index();//0=>left:0*1170   ,1=>left:-1*-1170    ,1=>left:-1*1170,    3=>-2*1170
        //左右移动
        $('.promotion .content .pigeon .out-box .inner-box').animate({
            'left': -index * 1170
        }, 1000);
    });
    /* 二维码滑出效果*/
    $('.qr-code .ticket').hover(function () {
        $('.qr-code div').stop(true).animate({
            left: '-100px'
        });
    }, function(){
        $('.qr-code div').stop(true).animate({
            left: 0
        });
    })
    /*顶部搜索框 */
     
    $(document).scroll(function(){
        //获取顶部距离
        var topDistance=$('html,body').scrollTop();
        //判断
        if(topDistance>500){
            //如果滚动距离大于500 滑下来
            $('.top-search-box').slideDown(300)
        }else{
            //否则收回
            $('.top-search-box').slideUp(300)
        }
    })

    $('.floor-box li').click(function(){
        var index=$(this).index();
        var topOffset=$('.floorbox').eq(index).offset().top;
        $('html,body').animate({
            scrollTop:topOffset - 50
        })
    })
})

