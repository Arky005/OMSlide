# OMSlider

OMSlider is a Javascript library to easily create image sliders. You can customize the size, colors, timing and more.

Demo: https://om.blog.br/testeslide/

## Getting Started
To use this library, you will need jQuery. All you have to do to import OMSlider to our project is add a reference inside the  ```<head>``` tag, like this:
```html
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://om.blog.br/omslider/omslider.js"></script>
</head>
```

### Creating object
Now you can create a slider wherever you want. To start, create a ```<script>``` element inside ```<head>``` and use jQuery's ```$(document).ready``` function. To use the slider, you need to create an object of OMSlider class, passing the width and height as parameters(respectively). In this example, we are creating a 700x300 slider.
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

### Adding images
After creating omslider object, you can customize it and add images. 
To add an image, use the ```addImg``` function. You can add how many images you want.
```html
    <script>
        $(document).ready(function(){
            var omslider = new OMSlider(700, 300);
            omslider.addImg('https://om.blog.br/imgs/6.jpg');
            omslider.addImg('https://om.blog.br/imgs/5.jpg');
        });
    </script> 
```

### Using a timer
To change the current image automatically, you can set a timer. To do this, use the ```startTimer``` function. It receives a numeric value in miliseconds. In this example, our image will be changed automatically after 4 seconds.
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

### Customize your slider
You have many ways to customize your slider: changing colors, size, applying effects, changing the border radius and much more.
For a complete list, visit the link:  
*link

### Creating the slider
After you finished customizing your slider, you can create it. It's is very simple, all you have to do is tell the omslider object where you want to show it. To do this, we use the ```create``` function. In our example, the slider will be placed inside the ```<div id="omsliderExample">``` element.
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

### Result

![Slider Example](https://om.blog.br/imgs/sliderexample.gif)
