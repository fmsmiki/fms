

$(function(){
	
	var $jiaru = $('.g1');
	
	
	var $j2=$('.j2-1');
	var count=$('.j1').html();
	$j2.click(function(){
		
		
		count++;
		$('.j1').html(count);
		
	});
	
	
	$jiaru.click(function(){
		
		var duix={};
		var shuzu=[];
		var num=$('.j1').html();
		
		
		var i = 1;
		duix.i=i;
		duix.num=num;
		duix.oimg=$('.xq2-1').find('img').attr('src');
		duix.oname=$('.p1').html();
		duix.orad=$('.rad').html();
		
		shuzu.push(duix);
		
		addCookie('shuzu',JSON.stringify(shuzu),7);
		
		
		
		
	});
	
	
	
	
})
