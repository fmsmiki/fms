

$(function(){
	var $li=$('.xl').find('li').first();
	var $xiala=$('.xiala');
	var $xialali=$xiala.find('li');
	var $xiala2=$('.xiala2')
	$li.mouseover(function(){
		$xiala.css('display','block')
	});
	$xiala.mouseover(function(){
		$xiala.css('display','block')
	});
	
	$xiala.mouseout(function(){
		$xiala.css('display','none')
		$xiala2.css('display','none')
	});
	
	$li.mouseout(function(){
		$xiala.css('display','none')
	});
	
	$xialali.mouseover(function(){
		$xiala2.css('display','block')
	})
	
	$xiala2.mouseover(function(){
		$xiala.css('display','block')
		$xiala2.css('display','block')
	})
	
	$xiala2.mouseout(function(){
		$xiala2.css('display','none')
		$xiala.css('display','none')
	});
	
	//nav
	$nav=$('.nav-xiala');
	$navli=$('.nav-right').first('li');
	$navli.mouseover(function(){
		$nav.css('display','block');
	});
	$navli.mouseout(function(){
		$nav.css('display','none')
	})
	$nav.mouseover(function(){
		$nav.css('display','block')
	})
	$nav.mouseout(function(){
		$nav.css('display','none')
	});
	//轮播图
	$('#lunbo').myFocus(  {imgs:['img/lunbo1.jpg','img/lunbo2.jpg','img/lunbo3.jpg' ] } ) ;
})