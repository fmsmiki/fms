$(function(){
	$('.login_btn').click(function(){
		
	        var isCheck=$('#check').prop('checked');//判断是否勾选自动登录复选框
	        if(isCheck)
	       {
		    var userName=$('#username').val();
		    var userPwd=$('#userpwd').val();
		   
		    console.log(1);
		    var obj = {};
		    obj.user = userName;
		    obj.pwd = userPwd;
		    //把json对象转换成json字符串
		    obj=JSON.stringify(obj);
		    addCookie('user',obj,7);
	         
	       }   
	       alter('登录成功！');
	});
   var $userName=$('#username');
   var $userPwd=$('#userpwd');
   var userObj=JSON.parse(getCookie("user"));//把json字符串转成json对象
   if(userObj.user&&userObj.pwd){
   	 $userName.val(userObj.user);
   	 $userPwd.val(userObj.pwd);
   	 alert("登录成功！");
   	 location.href="../index.html";//链接到首页
   }
    

	
	
});
