

$(function(){
	
	var $jiaru = $('.g1');
	var i=0;
	$jiaru.click(function(){
		
		var duix={};
		var shuzu=[];
		
		
		i=i+1;
		duix.i=i;
		duix.oimg=$('.xq2-1').find('img').attr('src');
		duix.oname=$('.p1').html();
		duix.orad=$('.rad').html();
		
		shuzu.push(duix);
		
		addCookie('shuzu',JSON.stringify(shuzu),7);
		
	})
	
	
	
	
})
