/* 
注册功能模块
*/
$(function(){
    $('#registerForm').validate({
        //验证规则
        rules:{

            username:{
                   required:true,//非空
                   rangelength:[3,6]//长度验证
            },
            password:{
                required:true,//非空
                isPassword:true//自定义密码 验证
            },
            //确认密码
            checkpassword:{
                required:true,//非空
                equalTo:'#password',//验证密码的一致性
            },
            tel:{
                required:true,//非空
                isTel:true//自定义的电话号码验证
            }

        },
        //提示信息
        messages:{
            username:{
                required:'用户名不能为空！',//非空提示
                rangelength:'长度在3~6位！'//长度提示
            },
            //密码提示信息
            password:{
                required:'密码不能为空！',//非空
            },
            //确认密码提示信息
            checkpassword:{
                required:'确认密码不能为空',//非空
                equalTo:'密码不一致！'//密码一致性
            },
            tel:{
                required:'电话号码不能为空！',
                isTel:'电话号码格式不正确！'
            }

        }
    })
     //密码的自定义验证
     jQuery.validator.addMethod("isPassword", function(value, element) {
        var pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
        return this.optional(element) || (pwdReg.test(value));
    }, "请输入5-10个，以字母开头、可带数字、“_”、“.”的字符串");
    //手机号的自定义验证
    jQuery.validator.addMethod("isTel", function(value, element) {
        var telReg = /^[1]+[3,8,5,7,]+\d{9}$/;
        return this.optional(element) || (telReg.test(value));
    });
    //手机自定义验证
    jQuery.validator.addMethod("isTel", function(value, element) {
        var telReg=/^[1]+[3,8]+\d{9}$/;
        return this.optional(element) || (telReg.test(value));
    });
}) 