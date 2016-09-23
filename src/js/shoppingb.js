



$(function(){
	
	var str = getCookie("shuzu");
	var ostr=JSON.parse(str);
	//var ostr[0];
	console.log(ostr[0]);
	var li2=ostr[0].orad;
	console.log(li2);
	$('.li2').html(li2);
})
