class OMSlider {
	
	constructor(width, height){
		if(width<$(window).width())
			this.width=width;
		else
			this.width=$(window).width();
		
		this.height=height;
		this.initialWidth=width;
		this.initialHeight=height;
		this.initialTime=0;
		
		this.imgs=[];
		this.links=[];
		this.currentPos=0;
		this.currentPosValue=0;
		this.slideStyle=0;
		
		this.salt=parseInt(Math.random()*10000);
		this.name_motherContainer='mother_container'+this.salt;
		this.name_slide='slide'+this.salt;
		this.name_imgsContainer='imgs_container'+this.salt;
		this.name_classImgs='imgs_slide'+this.salt;
		this.name_botaoAnterior='botao_anterior'+this.salt;
		this.name_botaoProximo='botao_proximo'+this.salt;
		
		this.stopWhenClicked=true;
		this.showButtons=true;
		this.openLinksInNewTab=true;
		
		this.buttonsBackgroundColor='rgba(0,0,0,0.4);';
		this.buttonsTextColor='rgba(255,255,255,0.8);';
		this.buttonsFontSize=32;
		this.buttonsBorderRadius=15;
		this.buttonsHeight=30;
		this.buttonsWidth=30;
		this.borderRadius=0;
		this.spaceBetweenImages=0;
		this.buttonsPaddingVertical=10;
		this.buttonsPaddingHorizontal=10;
		this.buttonsPosition='in';
		
	}
	
	setWidth(valor){
		this.width=valor;
	}
	
	setHeight(valor){
		this.height=valor;
	}
	
	addImg(img){
		this.imgs.push(img);
	}
	
	addImg(img, link){
		this.imgs.push(img);
		this.links.push(link);
	}
	
	removeImg(pos){
		this.imgs.splice(pos);
	}
	
	setImgs(imgs){
		this.imgs=imgs;
	}
	
	getSize(){
		return this.imgs.length;
	}
	
	startTimer(time){
		var obj=this;
		if(time!=0){
			this.initialTime=time;
			clearInterval(this.timer);
			this.timer = setInterval(function(){
				obj.nextImg();
			}, time);
		}
	}
	
	stopTimer(){
		clearInterval(this.timer);
	}

	nextImg(){
		var obj=this;
		if(this.currentPos<this.getSize()-1){
			$('#'+this.name_slide).animate({scrollLeft:((obj.currentPos+1)*obj.width)+
				(obj.spaceBetweenImages*(obj.currentPos+1))}, 1000);
			this.currentPos++;
		} else {
			$('#'+this.name_slide).animate({scrollLeft:0}, 1000);
			this.currentPos=0;
		}
	}
	
	lastImg(){
		var obj=this;
		if(this.currentPos>0){
			$('#'+this.name_slide).animate({scrollLeft:((obj.currentPos-1)*obj.width)+(
				obj.spaceBetweenImages*(obj.currentPos-1))}, 1000);
				this.currentPos--;
		} else {
			$('#'+this.name_slide).animate({scrollLeft:((obj.getSize()-1)*obj.width)+(
				obj.spaceBetweenImages*(obj.getSize()-1))}, 1000);
				this.currentPos=this.getSize()-1;
		}
	}
	
	update(){
		
		this.botaoProximoMarginLeftIn=(this.width-(this.buttonsWidth+30));
		this.botaoProximoMarginLeftOut=this.width;
		this.botaoAnteriorMarginLeftIn=10;
		this.botaoAnteriorMarginLeftOut=-(this.buttonsWidth+(this.buttonsPaddingHorizontal*2));
		
		this.slideStyle.innerHTML = 
			"#"+ this.name_motherContainer+"{"+
				"display:flex;"+
				"height:"+this.height+"px;"+
				"margin-left:"+(this.buttonsPosition=='in' ? "0" : this.buttonsWidth+20)+"px;"+
				"overflow:hidden;"
			+"} "+
			
			"#"+ this.name_slide+"{"+
				"display:flex;"+
				"height:"+(this.height+20)+"px;"+
				"width:"+(this.width)+"px;"+
				"align-items:center;"+
				"overflow-x:scroll;"+
				"overflow-y:hidden;"
			+"} "+
			
			"#"+ this.name_botaoAnterior+"{"+
				(this.showButtons ? "display:flex;" : "display:none;")+
				"justify-content:center;"+
				"align-items:center;"+
				"z-index:999;"+
				"position:absolute;"+
				"font-size:"+this.buttonsFontSize+"pt;"+
				"height:"+this.buttonsHeight+"px;"+
				"width:"+this.buttonsWidth+"px;"+
				"margin-left:"+(this.buttonsPosition=='in' ? this.botaoAnteriorMarginLeftIn : this.botaoAnteriorMarginLeftOut)+"px;"+
				"padding:"+ this.buttonsPaddingVertical +" "+this.buttonsPaddingHorizontal +";"+
				"text-decoration:none;"+
				"background-color:"+this.buttonsBackgroundColor+";"+
				"color:"+this.buttonsTextColor+";"+
				"border-radius:"+this.buttonsBorderRadius+"px;"+
				"transition:all .3s;"
			+"} "+
			
			"#"+ this.name_botaoProximo+"{"+
				(this.showButtons ? "display:flex;" : "display:none;")+
				"justify-content:center;"+
				"align-items:center;"+
				"z-index:999;"+
				"position:absolute;"+
				"font-size:"+this.buttonsFontSize+"pt;"+
				"height:"+this.buttonsHeight+"px;"+
				"width:"+this.buttonsWidth+"px;"+
				"margin-left:"+(this.buttonsPosition=='in' ? this.botaoProximoMarginLeftIn : this.botaoProximoMarginLeftOut)+"px;"+
				"padding:"+ this.buttonsPaddingVertical +" "+this.buttonsPaddingHorizontal +";"+
				"text-decoration:none;"+
				"background-color:"+this.buttonsBackgroundColor+";"+
				"color:"+this.buttonsTextColor+";"+
				"border-radius:"+this.buttonsBorderRadius+"px;"+
				"transition:all .3s;"
			+"} "+
			
			"#"+ this.name_imgsContainer+"{"+
				"display:flex;"+
				"flex-shrink:0;"+
				"height:100%;"+
				"transition:all 1s;"
			+"} "+
			
			"."+ this.name_classImgs+"{"+
				"height:"+this.height+"px;"+
				"width:"+this.width+"px;"+
				"border-radius:"+this.borderRadius+"px;"+
				"margin-right:"+this.spaceBetweenImages+"px;"
			+"} ";
		
		document.getElementsByTagName('head')[0].appendChild(this.slideStyle);
		//muda a margin-right da ultima imagem para 0 para nao conflitar com o scroll e spaceBetweenImages.
		document.getElementsByClassName(this.name_classImgs)[this.getSize()-1].style.marginRight=0;
	}
	
	create(itemId){
		$(itemId).append("<div id='"+ this.name_motherContainer +"'></div>");
		$('#'+this.name_motherContainer).append("<div id='"+ this.name_slide + "'>" +
				"<a href='#' id='"+this.name_botaoAnterior+"'><</a>"+
				"<a href='#' id='"+this.name_botaoProximo+"'>></a></div>");
		$('#'+this.name_slide).append("<div id='"+ this.name_imgsContainer+"'></div>");
		var i=0;
		for(i=0; i<this.getSize(); i++){
			if(typeof this.links[i] != 'undefined')
				$('#'+this.name_imgsContainer).append(
				"<a href='"+this.links[i]+( this.openLinksInNewTab ? "' target='_blank'" : "" )+"'><img src='"+this.imgs[i]+"' class='"+ this.name_classImgs +"'></a>");
			else
				$('#'+this.name_imgsContainer).append(
				"<img src='"+this.imgs[i]+"' class='"+ this.name_classImgs +"'>");
		}
		
		this.slideStyle = document.createElement('style');
		this.slideStyle.type = 'text/css';
		this.update();
		
		var obj=this;
		$('#'+this.name_botaoAnterior).click(function(){
			obj.lastImg();
			
			if(!obj.stopWhenClicked)
				obj.startTimer(obj.initialTime);
			else
				obj.stopTimer();
		});
		
		$('#'+this.name_botaoProximo).click(function(){
			obj.nextImg();
			
			if(!obj.stopWhenClicked)
				obj.startTimer(obj.initialTime);
			else 
				obj.stopTimer();
		});
		
		$( window ).resize(function() {
			if(obj.width>=$(window).width())
				obj.width=$(window).width();
			else if(obj.initialWidth>=$(window).width())
					obj.width=$(window).width();
			obj.currentPos=0;
			$('#'+obj.name_slide).scrollLeft(0);
			obj.update();
		});
		
		$('#'+this.name_slide).scroll(function(){
			clearTimeout($.data(this, 'scrollTimer'));
			$.data(this, 'scrollTimer', setTimeout(function() {
					var posicao=0;
					posicao=($('#'+obj.name_slide).scrollLeft()+(posicao*obj.spaceBetweenImages)+(obj.width/2)) / (obj.width+obj.spaceBetweenImages);
					if(parseInt(posicao)!=obj.currentPos){
						obj.currentPos=parseInt(posicao);
						$('#'+obj.name_slide).animate({scrollLeft:(parseInt(posicao)*obj.width)+(parseInt(posicao)*obj.spaceBetweenImages)}, 1000);
					} 
			}, 150));
		});
		
		$( '#'+this.name_botaoAnterior ).hover(function() {
			$( this ).css('font-size', (obj.buttonsFontSize+10)+'pt');
			$( this ).css('padding', (obj.buttonsPaddingVertical+5) + " " +(obj.buttonsPaddingHorizontal+5) );
			$( this ).css('margin-left', (obj.buttonsPosition=='in' ? obj.botaoAnteriorMarginLeftIn : obj.botaoAnteriorMarginLeftOut-10)+'px');
		}, function() {
			$( this ).css('font-size', obj.buttonsFontSize+'pt');
			$( this ).css('padding', (obj.buttonsPaddingVertical) + " " +(obj.buttonsPaddingHorizontal));
			$( this ).css('margin-left', (obj.buttonsPosition=='in' ? obj.botaoAnteriorMarginLeftIn : obj.botaoAnteriorMarginLeftOut)+'px');
		});
		
		$( '#'+this.name_botaoProximo ).hover(function() {
			$( this ).css('font-size', (obj.buttonsFontSize+10)+'pt');
			$( this ).css('padding', (obj.buttonsPaddingVertical+5) + " " +(obj.buttonsPaddingHorizontal+5));
			$( this ).css('margin-left', (obj.buttonsPosition=='in' ? obj.botaoProximoMarginLeftIn-10 : obj.botaoProximoMarginLeftOut)+'px');
		}, function() {
			$( this ).css('font-size', obj.buttonsFontSize+'pt');
			$( this ).css('padding', (obj.buttonsPaddingVertical) + " " +(obj.buttonsPaddingHorizontal));
			$( this ).css('margin-left', (obj.buttonsPosition=='in' ? obj.botaoProximoMarginLeftIn : obj.botaoProximoMarginLeftOut)+'px');
		});
	}
	
	setSpaceBetweenImages(valor){
		this.spaceBetweenImages=valor;
	}
	
	setOpenLinksInNewTab(valor){
		this.openLinksInNewTab=valor;
	}
	
	setStopWhenClicked(stop){
		this.stopWhenClicked=stop;
	}
	
	setButtonsBackgroundColor(color){
		this.buttonsBackgroundColor=color;
	}
	
	setButtonsTextColor(color){
		this.buttonsTextColor=color;
	}
	
	setButtonsFontSize(size){
		this.buttonsFontSize=size;
	}
	
	setButtonsWidth(width){
		this.buttonsWidth=width;
	}
	
	setButtonsHeight(height){
		this.buttonsHeight=height;
	}
	
	setButtonsBorderRadius(value){
		this.buttonsBorderRadius=value;
	}
	
	setButtonsPosition(valor){
		this.buttonsPosition=valor;
	}
	
	setButtonsPaddingVertical(valor){
		this.buttonsPaddingVertical=valor;
	}
	
	setButtonsPaddingHorizontal(valor){
		this.buttonsPaddingHorizontal=valor;
	}
	
	setBorderRadius(value){
		this.borderRadius=value;
	}
}
