
$(function(){
   
   var top = [0,850,1782]
    var alltop;
   var a = $(window).scrollTop()
   console.log(a)
   
    
   $('.bar ul li a').click(function(){
       
       
       var idx = $(this).parent().index()
       console.log(idx)
       $('html,body').stop().animate({
                    scrollTop:top[idx]
                })
                
     
       return false;
       
   })
   
   $(window).scroll(function(){
       var b = $(window).scrollTop()
       
       if(1025<b<1782){
           	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},3000);
	});
       }
      
   })
   
   $('.arrow img').click(function(){
       $('html,body').stop().animate({
           scrollTop:top[1]
       })
       
   })
   
   
  
    
})
   
    
