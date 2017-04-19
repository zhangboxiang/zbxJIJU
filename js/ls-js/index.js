window.onload=function(){
	//开始动画
	setTimeout(fn,1200)
	function fn(){
		$(".head").slideDown(1500);
		var time=null;
		clearInterval(time);
		time=setInterval(function(){
			if(loner.offsetTop>=876){
				clearInterval(time);
				$("#loner>img").css("opacity","1")
			}else{
				loner.style.top=loner.offsetTop+20-8+'px';
			}
		},14)

		var ti=null;
		clearInterval(ti);
		ti=setInterval(function(){
			if(head.offsetTop<=0){
				clearInterval(ti);
			}else{
				head.style.top=head.offsetTop-20+8+'px';
			}
		},18)
	}
	
	$(window).scroll(function(){
		if($(window).scrollTop() >= 880&&$(window).scrollTop() <1850){
			 $(".swiperBox2").animate({marginTop:'0',opacity:'1'},1800);
		}
		if($(window).scrollTop() >= 1650){
			 $(".new>div").animate({marginTop:'1871',opacity:'1'},1200);
		}
	})
	
	
	//导航栏
	$(".list-1").click(function(){
		if($(".duce>div:nth-child(1)").css("display")=="none"){
			$(".duce>div:nth-child(1)").slideDown(500);
			$(".duce>div:nth-child(1)").siblings().slideUp(500);
		}else{
			$(".duce>div:nth-child(1)").slideUp(500);
		}
	})
	$(".list-2").click(function(){
		if($(".duce>div:nth-child(2)").css("display")=="none"){
			$(".duce>div:nth-child(2)").slideDown(500)
			$(".duce>div:nth-child(2)").siblings().slideUp(500);
		}else{
			$(".duce>div:nth-child(2)").slideUp(500);
		}
	})
	$(".list-3").click(function(){
		if($(".duce>div:nth-child(3)").css("display")=="none"){
			$(".duce>div:nth-child(3)").slideDown(500)
			$(".duce>div:nth-child(3)").siblings().slideUp(500);
		}else{
			$(".duce>div:nth-child(3)").slideUp(500);
		}
	})
	$(".list-4").click(function(){
		if($(".duce>div:nth-child(4)").css("display")=="none"){
			$(".duce>div:nth-child(4)").slideDown(500)
			$(".duce>div:nth-child(4)").siblings().slideUp(500);
		}else{
			$(".duce>div:nth-child(4)").slideUp(500);
		}
	})
	$(".list-5").click(function(){
		if($(".duce>div:nth-child(5)").css("display")=="none"){
			$(".duce>div:nth-child(5)").slideDown(500)
			$(".duce>div:nth-child(5)").siblings().slideUp(500);
		}else{
			$(".duce>div:nth-child(5)").slideUp(500);
		}
	})
	$(".list-6").click(function(){
		if($(".duce>div:nth-child(6)").css("display")=="none"){
			$(".duce>div:nth-child(6)").slideDown(500)
			$(".duce>div:nth-child(6)").siblings().slideUp(500);
		}else{
			$(".duce>div:nth-child(6)").slideUp(500);
		}
	})
	
	
	
	//时间
//	function mydata(){
//		var dataTime=new data(),
//			hh=dateTime.getHours(),
//			mm=dateTime.getMinutes(),
//			ss=dateTime.getSeconds(),
//			yy=dateTime.getFullYear(),
//			MM=dateTime.getMonth()+1,
//			dd=dateTime.getDate()
//		
//	}

}
