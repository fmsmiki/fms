



$(function(){
	
	var str = getCookie("shuzu");
	var ostr=JSON.parse(str);
	//var ostr[0];
	console.log(ostr[0]);
	var orad=ostr[0].orad;
	console.log(orad);
	
	var img=ostr[0].oimg;
	console.log(ostr[0].oimg);
	$('.wupin-left').find('img').attr('src',img);
	console.log(img);
	var i=ostr[0].i;
	console.log(i);
	var oname=ostr[0].oname;
	var num=ostr[0].num;
	
	
	
	//生成页面结构
/*	<div class="wupin">
		<div class="wupin-left">
			<img src="../css/img/gouwu2.jpg"/>
		</div>
		<div class="wupin-right1">
			<p>这里是商品的详细信息-------</p>
		</div>
		<div class="right3">
			<ul>
				<li class="li2"></li>
				<li>
					<div class="shu"><a href="">-</a></div>
					<div class="shu"><a href="">1</a></div>
					<div class="shu"><a href="">+</a></div>
				</li>
				<li style="color: red;"></li>
				<li><a href="">删除</a></li>
			</ul>
		</div>
		<div class="bottom">
			<p>天天特价</p>
		</div>
		
	</div>
*/	
	
		var $gwc1=$('.gwc1');
	if($gwc1){	
		var $wupin=$('<div/>').addClass('wupin');
		var $wupinleft=$('<div/>').addClass('wupin-left');
		
		
		
		var $img1=$('<img />').attr('src',img);
		$wupinleft.append($img1);
		
		$img1.css({
			
			width: 75,
			height: 75
		});
			
		var $right1=$('<div/>').addClass('wupin-right1');
		
		var $p=$('<p/>');
		$p.html(oname);
		$right1.append($p);
		
		var $right3=$('<div/>').addClass('right3');
		
		
		
		var $ul=$('<ul/>').css({
			float: 'right'
		});
		$right3.append($ul);
		var $li1=$('<li/>').css({
			float: 'left',
			width: 128,
			fontSize: 12,
			height: 75,
			lineHeight: 8
		});
		$li1.html(orad);
		var $li2=$('<li/>').css({
			float: 'left',
			width: 128,
			fontSize: 12,
			height: 75,
			lineHeight: 8
		});
		$li2.html(num);
		$li2.html();
		$li2.addClass('li2');
		var $li3=$('<li/>').css({
			float: 'left',
			width: 128,
			fontSize: 12,
			height: 75,
			lineHeight: 8
		});
		var xiji=num*169;
		$li3.html(xiji);
		$('.jia').html(xiji);
		var $li4=$('<li/>').css({
			float: 'left',
			width: 128,
			fontSize: 12,
			height: 75,
			lineHeight: 8
		});
		
		$li4.html('删除');
		
		$ul.append($li1);
		$ul.append($li2);
		$ul.append($li3);
		$ul.append($li4);
		var $bottom=$('<div/>').css({
			width: 864,
			height: 40,
			backgroundColor: '#f0f9ff',
			marginTop: 25,
			float: 'left'
		});
		
	
		$p2=$('<p/>').html('天天特价');
		$p2.css({
			color:'red',
			paddingTop:10,
			fontSize:12
		});
		$bottom.append($p2);
		
		$gwc1.append($wupin);
		
		
		$wupin.append($wupinleft);
		$wupin.append($right1);
		$wupin.append($right3);
		$wupin.append($bottom);
	}
	
	$li4.click(function(){
		$wupin.remove();
		$('.jia').html('');
	})
})
