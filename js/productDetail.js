/*
*产品详情核心JS文件
*/
$(function(){
    magnifier({
        magnifier : "#magnifier1",//最外层的大容器
		width : 340,//承载容器宽
		height : 470,//承载容器高
		zoom :2//缩放比例
    })
  
})
  //数量的加减功能
  $('.add').on('click', function () {
    //下一个inp节点
    var $nextInput = $(this).next();
    //获取输入框的值
    var oldVal = parseInt($(this).next().val());
    //自增
    oldVal++;
    //重新赋值给这个输入框
    $nextInput.val(oldVal);
    //小计
    subTotalPrice(oldVal,$(this));
    calcTotalPrice();
})

//减少
$('.reduce').on('click', function () {
    //上一个inp节点
    var $nextInput = $(this).prev();
    //获取输入框的值
    var oldVal = parseInt($nextInput.val());
    //自增
    oldVal--;
    oldVal = oldVal < 1 ? 1 : oldVal;//如果小于1 那么等于1 否则就等于自己
    //重新赋值给这个输入框
    $nextInput.val(oldVal);
    //小计
    subTotalPrice(oldVal,$(this));
    calcTotalPrice();
})
//抽取一个小计的函数