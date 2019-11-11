$(function(){

	function test(/**/){
		var args=arguments;
		for(var i=0; i<args.length; i++){
			console.log(args[i]);
		}
	}

	var quantidadeSlides=$('.imgs_slide').length;
	var slideWidth=500, slideHeight=300;
	var slideAtual=0; 
	
	//$('body').css('display','flex');
	
	$('#slide').css('display','flex');
	$('#slide').css('width',''+slideWidth);
	$('#slide').css('height',''+slideHeight);
	$('#slide').css('align-items','center');
	$('#slide').css('overflow','hidden');
	
	$('#slide_imgs_container').css('display','flex');
	$('#slide_imgs_container').css('flex-shrink','0');
	$('#slide_imgs_container').css('height','100%');
	$('#slide_imgs_container').css({'transition':'all 1s'});
	
	$('.imgs_slide').css('width',''+slideWidth);
	$('.imgs_slide').css('height',''+slideHeight);
	$('.imgs_slide').css('border-radius','30px');
	
	$('#botao_slide_anterior').css('z-index','999');
	$('#botao_slide_anterior').css('position','absolute');
	$('#botao_slide_anterior').css('font-size','40pt');
	$('#botao_slide_anterior').css('margin-left','10px');
	$('#botao_slide_anterior').css('padding','10px');
	$('#botao_slide_anterior').css('text-decoration','none');
	$('#botao_slide_anterior').css('background-color','white');
	$('#botao_slide_anterior').css('color','black');
	$('#botao_slide_anterior').css({'border-radius':'50px'});
	
	
	$('#botao_slide_proximo').css('z-index','999');
	$('#botao_slide_proximo').css('position','absolute');
	$('#botao_slide_proximo').css('font-size','40pt');
	$('#botao_slide_proximo').css('margin-left',''+(slideWidth-60)+'px');
	$('#botao_slide_proximo').css('padding','10px');
	$('#botao_slide_proximo').css('text-decoration','none');
	$('#botao_slide_proximo').css('background-color','white');
	$('#botao_slide_proximo').css('color','black');
	$('#botao_slide_proximo').css({'border-radius':'50px'});
	
	
	$('#botao_slide_anterior').click(function(){
		if(slideAtual>0){
			$('#slide_imgs_container').css({'transform':'translateX(-'+((slideAtual-1)*slideWidth)+'px)'});
			slideAtual--;
			
		} else {
			$('#slide_imgs_container').css({'transform':'translateX(-'+((quantidadeSlides-1)*slideWidth)+'px)'});
			slideAtual=quantidadeSlides-1;
		}
	});
	
	$('#botao_slide_proximo').click(function(){ //idft*slidewidth
	
		if(slideAtual<quantidadeSlides-1){
			$('#slide_imgs_container').css({'transform':'translateX(-'+((slideAtual+1)*slideWidth)+'px)'});
			slideAtual++;
		} else {
			$('#slide_imgs_container').css({'transform':'translateX(0)'});
			slideAtual=0;
		}
	});

});