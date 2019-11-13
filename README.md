# OMSlider

OMSlider é uma biblioteca Javascript para criar sliders de imagens facilmente. Você pode personalizar o tamanho, cores, tempo e muito mais.

Demo: https://om.blog.br/testeslide/

## Iniciando
Para usar esta biblioteca, você precisa do jQuery. Tudo o que você precisa fazer para importar o OMSlider para o seu projeto é adicionar uma referência dentro da tag  ```<head>``` , dessa forma:
```html
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://om.blog.br/omslider/omslider.js"></script>
</head>
```

### Criando objeto
Agora você pode criar um slider onde quiser. Para começar, crie um elemento ```<script>``` dentro de ```<head>``` e use  a função ```$(document).ready``` do jQuery. Para usar o slider você precisa criar um objeto da classe OMSlider, passando a largura e a altura como parâmetros (respectivamente). Neste exemplo, estamos criando um slider de 700x300px:
```html
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://om.blog.br/omslider/omslider.js"></script>
    <script>
        $(document).ready(function(){
            var omslider = new OMSlider(700, 300);
        });
    </script>
</head>
```

### Adicionando imagens
Após criar o objeto omslider, você pode personalizá-lo e adicionar imagens. 
Para adicionar uma imagem, use a função ```addImg```. Você pode usar quantas imagens desejar.
```html
    <script>
        $(document).ready(function(){
            var omslider = new OMSlider(700, 300);
            omslider.addImg('https://om.blog.br/imgs/6.jpg');
            omslider.addImg('https://om.blog.br/imgs/5.jpg');
        });
    </script> 
```

### Usando um timer
Para alterar a imagem automaticamente, você pode definir um timer. Para fazer isso, use a função ```startTimer```. Ela recebe um valor numérico em milissegundos. Neste exemplo, nossa imagem será alterada automaticamente após 4 segundos.
```html
    <script>
        $(document).ready(function(){
            var omslider = new OMSlider(700, 300);
            omslider.addImg('https://om.blog.br/imgs/6.jpg');
            omslider.addImg('https://om.blog.br/imgs/5.jpg');
            omslider.startTimer(4000);
        });
    </script> 
```

### Opções de personalização
Você pode personalizar seu slider de diversas maneiras: alterando a cor, tamanho, aplicando efeitos, mudando o formato e muito mais.
Pra uma lista completa das funções disponíveis e como usá-las, acesse o link abaixo:  
*link


### Criando o slider
Depois de terminar de personalizar seu slider, você pode criá-lo. É muito simples, tudo o que você precisa fazer é dizer ao objeto omslider onde deseja mostrá-lo. Para fazer isso, usamos a função ```create```. Em nosso exemplo, o slider será colocado dentro do elemento ```<div id="omsliderExample">```.
```html
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://om.blog.br/omslider/omslider.js"></script>
        <script>
            $(document).ready(function(){
                var omslider = new OMSlider(700, 300);
                omslider.addImg('https://om.blog.br/imgs/6.jpg');
                omslider.addImg('https://om.blog.br/imgs/5.jpg');
                omslider.startTimer(4000);
                omslider.create('#omsliderExample');
            });
        </script>
    </head>
    <body>
        <div id="omsliderExample"></div>
    </body>
</html>
```

### Resultado
O código do exemplo que criamos irá gerar o seguinte resultado:  
![Slider Example](https://om.blog.br/imgs/sliderexample.gif)

