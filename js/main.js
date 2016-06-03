/*
Name: Matthew Lee
Date: June 2, 2016
Class & Section:  WIA-01
Comments: "HTML5 Canvas Drawing" 
*/


/*******************************************
HTML5 Shape Drawing Activity
1.  Setup the canvas and 2d context
2.  Draw out each shape in the sections below

********************************************/
window.onload = function() {
    if(Modernizr.canvas) {

        /*******************************************
        FILE SETUP

        // Setup up 7 different Canvases in index.html one for each problem.
        //Link Modernizr.js
        // Link the main.js file
        // Setup the call to that canvas and get it's 2d context
        //Use Modernizr to verify that your browser supports canvas, include a fallback message



        /*******************************************
        PART 1

        Draw a rectangle starting at point (0 ,0)
        That has a width of 50 px and a heigh of 100px
        Set the color of the rectangle to a shade of blue.
        Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

        Reminder - set the style first then draw.
        ********************************************/
        var myCanvas = document.getElementById('canvas1');
        var ctx = myCanvas.getContext("2d");

        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'blue';
        ctx.lineWidth = 7;

        //Draw Rectangle here

        ctx.strokeRect(0, 0, 50, 100);
        ctx.fillRect(0, 0, 50, 100);

        /*******************************************
        PART 2

        Draw a circle starting at point (50 ,50)
        That has a radius of 20 px
        Set the color of the circle to a shade of red and set the alpha to .5
        Set the stroke color to black and use a radius of 30px for this circle.

        Reminder - set the style first then draw.
        Use the arc method
        ********************************************/
        var myCanvas = document.getElementById('canvas2');
        var ctx = myCanvas.getContext("2d");

        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'rgba(255, 0 , 0, .5)';
        ctx.lineWidth = 1;

        //Draw Circle here

        ctx.beginPath();
        ctx.arc(50, 50, 20, 0, 2*Math.PI, false );
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(50, 50, 30, 0, 2*Math.PI, false );
        ctx.stroke();
        ctx.fill();

        //Your instructions said both 20px and 30px radius. So I made two circles.

        /*******************************************
        PART 3

        Practice using Path drawing.
        Create a 5-point star shaped pattern using the lineTo method.
        Begin this shape at (100, 100)

        Height and width and color are up to you.

        ********************************************/
        var myCanvas = document.getElementById('canvas3');
        var ctx = myCanvas.getContext("2d");

        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'yellow';
        ctx.lineWidth = 2;
        //Draw Star here

        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(125, 150);
        ctx.lineTo(180, 150);
        ctx.lineTo(140, 185);
        ctx.lineTo(160, 245);
        ctx.lineTo(100, 205);
        ctx.lineTo(40, 245);
        ctx.lineTo(60, 185);
        ctx.lineTo(20, 150);
        ctx.lineTo(75, 150);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        /*******************************************
        PART 4

        Practice drawing with Bezier curves.
        Try drawing the top to an umbrella.
        This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

        Position, height, width and color are your choice.
        Do not overlap any other object.

        ********************************************/
        var myCanvas = document.getElementById('canvas4');
        var ctx = myCanvas.getContext("2d");

        var grd = ctx.createLinearGradient(0,350,0,0);
        grd.addColorStop(0,"lightblue");
        grd.addColorStop(1,"blue");

        ctx.strokeStyle = 'darkblue';
        ctx.fillStyle = grd;
        ctx.lineWidth = 2;



        //Draw Umbrella top here

        ctx.beginPath();
        ctx.moveTo(30, 200);
        ctx.bezierCurveTo(50, 100, 250, 100, 270, 200);
        ctx.bezierCurveTo(260, 180, 205, 180, 190, 200);
        ctx.bezierCurveTo(180, 180, 125, 180, 110, 200);
        ctx.bezierCurveTo(100, 180, 45, 180, 30, 200);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        /*******************************************
        PART 5

        Practice using text.
        Draw text into your canvas.  It can said whatever you would like in any color.

        ********************************************/
        var myCanvas = document.getElementById('canvas5');
        var ctx = myCanvas.getContext("2d");

        var myString = "404 error. Text not found.";
        ctx.strokeStyle = 'white';
        ctx.font = "18pt Arial";
        ctx.lineWidth = 1;
        //Draw text here

        ctx.fillText(myString, 20, 60);
        ctx.strokeText(myString, 20, 60);

        /*******************************************
        PART 6

        Pixel manipulation.
        Draw the image logo.png into the canvas in the following 3 ways.
        1. The image exactly as it is.
        2. Shrink the image by 50%
        3. Slice a section of the logo out and draw that onto the canvas.

        Reminder to use the drawImage method for all 3 of the ways.

        ********************************************/
        var myCanvas = document.getElementById('canvas6');
        var ctx = myCanvas.getContext("2d");

        var srcImage = document.getElementById('myImage');
        //Draw images here

        ctx.drawImage(srcImage, 0, 0);




        /*******************************************
        PART 7

        Putting it all together.

        Using a combination of all the methods.
        Create a complex scene.
        You must use at least 3 different methods.

        ********************************************/
        var myCanvas = document.getElementById('canvas7');
        var ctx = myCanvas.getContext("2d");

        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'orange'
        ctx.lineWidth = 5;
        // Draw scene here

        ctx.strokeRect(5, 5, 180, 100);
        ctx.fillRect(5, 5, 180, 100);

        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'rgba(0, 225, 0, .5)';
        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.moveTo(5, 110);
        ctx.lineTo(186, 110);
        ctx.lineTo(240, 180);
        ctx.lineTo(5, 180);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'blue';
        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.moveTo(189, 5);
        ctx.lineTo(240, 5);
        ctx.lineTo(242, 175);
        ctx.lineTo(189, 106);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        var myString = "Look, stained glass!";
        ctx.fillStyle = 'white';
        ctx.font = "20pt Cursive";

        ctx.fillText(myString, 10, 250);

    }else {
        alert("This browser doesn't support canvas.");
    }
};
