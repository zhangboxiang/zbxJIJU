$(function(){
	/*移入*/
	$('.reward_con li a').hover(function(){
		$(this).find('dl').css('width','750px')
		$(this).find('dl').css('z-index','50')
		$(this).find('dl').css('transition','1s')
		$(this).find('dl').css('-ms-transition','1s')
	},function(){
		$(this).find('dl').css('width','0px')
		$(this).find('dl').css('z-index','10')
		$(this).find('dl').css('transition','1s')
		$(this).find('dl').css('-ms-transition','1s')
	})
	
})