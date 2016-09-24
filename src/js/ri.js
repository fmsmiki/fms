


$(function(){
		//验证手机号码
		var flag;
		$('.shouji').blur(function(){
			var value=$(this).val();
			var telReg=/^1\d{10}$/;
			//var emailReg = /^\w+@\w+(\.\w+)+$/ ;
			var $kong=$('.kong');
			if(value==''){
				//alert('kong');
				$kong.css('display','block');
				$kong.html('手机号不能为空');
				flag=false;
				}else if(telReg.test(value)){
				$kong.css('display','block');
				$kong.html('手机号正确');
				flag=true;
				}else{
				$kong.css('display','block');
				$kong.html('请输入正确的手机号！');
				flag=false;
			}
				//console.log(9);
		});
	
		$('.mi').blur(function(){
			var value=$(this).val();
			var length=value.length;
			var $mima1=$('.mima1');
			
			var pwdReg=/^\w{6,}$/;
			if (value=='') {
				flag=false;
				$mima1.html('密码不能为空');
				$mima1.css('display','block');
				
			}else if(pwdReg.test(value)){
				$mima1.css('display','none');
				$mima1.html('');
				flag=true;
			}
			
			
		});

       $('.ma').blur(function(){
       	 var pwd1=$(this).val();
       	 var pwd2=$('.mi').val();
       	 if(pwd2==''){
       	 	$('.mima2').html('请确认密码');
       	 	$('.mima2').css('display','block');
       	 	flag=false;
       	 }else if(pwd1!=pwd2){
       	 	$('.mima2').html('两次输入的密码不一致');
       	 	$('.mima2').css('display','block');
       	 	flag=false;
       	 }else if(pwd1==pwd2){
       	 	$('.mima2').html('');
       	 	$('.mima2').css('display','none');
       	 	flag=true;
       	 }
       	 
       });

     //验证码
     
	var num;
	$('.yzm1').click(function(){
		num=parseInt(Math.random()*8900+1000);
        $(this).html(num);
	});
	


	$('.yzm').blur(function(){
		var $ymzinfo=$('.ymzinfo');
		var $yzm=$('.yzm');
		var value=$(this).val();
		if(value==''){
			$ymzinfo.css('display','block');
			$ymzinfo.html('验证码不能为空！');
			flag=false;
		}else if(value==num){
			$ymzinfo.css('display','none');
			$ymzinfo.html('');
			flag=true;
		}else{
			$ymzinfo.css('display','block');
			$ymzinfo.html('您输入的验证码不正确！');
			flag=false;
		}
	});
	
	 var $btn=$('.btn');
    $btn.click(function(){
    	if(flag==true){
		 alert('注册成功！');
		 location.href="login.html"
	   }if(flag==false){
		 alert('注册失败！');
	   }
    });
    
    
    //cookei
    
    	
    
    
    
    
    
    
 });
	
	
	
	
    
//		$('.passwodr').keyup(function(){
//		var value=$(this).val();
//		var length=value.length;
//		//console.log(length);
//		var $pwd_check=$('.pwd_check');
//		var $pwd_info=$('.pwd_info');
//		var $safe=$('.safe');
//		var pwdReg=/^\w{6,}$/;
//		if(value==''){
//			$pwd_info.html('密码不能为空');
//			$pwd_check.css('display','block');
//			flag=false;
//		}else if(pwdReg.test(value)){
//			flag=true;
//			$pwd_info.html('');
//			$pwd_check.css('display','block');
//			if(length>=6&&length<=9){
//				$safe.css('display','block');
//			 	$safe.find('div').eq(0).addClass('level')
//			 	.siblings().removeClass('level');
//			}else if(length>9&&length<=12){
//				$safe.css('display','block');
//				$safe.find('div').eq(1).addClass('level')
//			 	.siblings().removeClass('level');
//			}else if(length>12){
//				$safe.css('display','block');
//				$safe.find('div').eq(2).addClass('level')
//			 	.siblings().removeClass('level');
//			}
//			//$pwd_check.css('display','none');
//		}else{
//			$pwd_info.html('密码长度不能少于六位');
//			$pwd_check.css('display','block');
//			flag=false;
		//}
//
//	});
//})