$(function(){


	var quantidadeSlides=$('.imgs_slide').length;
	var slideWidth=$(document).width(), slideHeight=500;
	var slideAtual=0;
	
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