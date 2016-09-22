



/*<div id="tehui">
	<h1>今日精选</h1>
    <div id="tehui2">
	<img src="../img/tehui1.jpg" />
	<h3>妈妈是超人</h3>
	<p>	
  		 妈妈们是超人，她在我们心里依旧力大无比，时间久了，超人也会没电。给妈妈助力！品牌联合倾情奉献，丽贝乐买就送小超人装扮，雅培买满送壕华餐椅，更有5000份提篮0元抢租，快来~        
	</p>
	<div class="jiage">
		<b>￥</b>7.90<b>起</b>
	</div>
	<div class="dianji">
		<a href="#"><img src="../css/img/dianji.jpg" ></a>
	</div>
	</div>
</div>	*/
		// 全局配置
$(function(){
			// 我的jaxa
			function aJax(){
				$.ajax({
					url:'../js/list.json',
					//data:{pageNo:pageNum},
					dataType:'json',
					success:function(res){
						console.log(res);
						
						var $tehui=$('.tehui');
						var $tehui2;
						$.each(res,function(idx,item){
							$tehui2=$('<div/>').addClass('tehui2');
							var $img=$('<img/>');
							$img.attr("src",item.tehui1).appendTo($tehui2);
							var $h3=$('<h3/>').html(item.h3);
							$h3.appendTo($tehui2);
							var $p=$('<p/>').html(item.p);
							$p.appendTo($tehui2);
							var $div=$('<div/>').addClass('jiage');
							$div.html(item.div)
							$div.appendTo($tehui2);
							var $div2=$('<div/>').addClass('dianji');
							var $a=$('<a/>')
							var $img2=$('<img/>').attr("src",item.dianji);
							$img2.appendTo($a);
							$a.appendTo($div2);
							$div2.appendTo($tehui2);
							$tehui2.appendTo($tehui);
						});
					}
				});
			}
            // 页面一加载就请求服务器的数据
			aJax();
            $(window).on('scroll',function(){
				var scrollTop = $(window).scrollTop();

				// 懒加载：滚动《快到底部》的时候再加载
				if(scrollTop >= $(document).height() - $(window).height() - 600){
				

					aJax();
				}
			});

			// 手动触发滚动事件
			$(window).trigger('scroll');
         
	
});
