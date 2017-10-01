// Current image globals
var curImg1 = 1;
var curImg2 = 2;
var curImg3 = 3;
var curSpot = "Bot";
var dir = 0;

// Direction globals
var myDownBot = 120;
var myLeftBot = 0;
var myRightBot = 0;

var myUpTop = 50;
var myLeftTop = 0;
var myRightTop = 0;

var myUpLeft = 0;
var myDownLeft = 0;
var myLeftLeft = 50;

var myUpRight = 0;
var myDownRight = 0;
var myRightRight = 50;

// Image size globals
var topHeight = 170;
var leftHeight = 170;
var rightHeight = 170;
var botHeight = 170;


// Open and close buttons for the contorl bar
document.getElementById("open").addEventListener("click",function(){
   document.getElementById("control").style.bottom = "0px"; 
});

document.getElementById("close").addEventListener("click",function(){
   document.getElementById("control").style.bottom = "-50px"; 
});

// Change control bar when each large image is clicked
document.getElementById("imgBot").addEventListener("click",function(){
    curSpot = "Bot";
    document.getElementById("img1").src = "img/img1.jpg";
    document.getElementById("img2").src = "img/img2.jpg";
    document.getElementById("img3").src = "img/img3.jpg";
    curImg1 = 1;
    curImg2 = 2;
    curImg3 = 3;
    document.getElementById("bgImg").style.backgroundImage = "url(img/img1.jpg)";
})

document.getElementById("imgLeft").addEventListener("click",function(){
    curSpot = "Left";
    document.getElementById("img1").src = "img/img4.jpg";
    document.getElementById("img2").src = "img/img5.jpg";
    document.getElementById("img3").src = "img/img6.jpg";
    curImg1 = 4;
    curImg2 = 5;
    curImg3 = 6;
    document.getElementById("bgImg").style.backgroundImage = "url(img/img5.jpg)";
})

document.getElementById("imgTop").addEventListener("click",function(){
    curSpot = "Top";
    document.getElementById("img1").src = "img/img7.jpg";
    document.getElementById("img2").src = "img/img8.jpg";
    document.getElementById("img3").src = "img/img9.jpg";
    curImg1 = 7;
    curImg2 = 8;
    curImg3 = 9;
    document.getElementById("bgImg").style.backgroundImage = "url(img/img7.jpg)";
})

document.getElementById("imgRight").addEventListener("click",function(){
    curSpot = "Right";
    document.getElementById("img1").src = "img/img10.jpg";
    document.getElementById("img2").src = "img/img11.jpg";
    document.getElementById("img3").src = "img/img12.jpg";
    curImg1 = 10;
    curImg2 = 11;
    curImg3 = 12;
    document.getElementById("bgImg").style.backgroundImage = "url(img/img10.jpg)";
})

// Three control bar images
document.getElementById("img1").addEventListener("click",function(){
    var spot = "img"+curSpot;
    document.getElementById(spot).src = "img/img"+curImg1+".jpg";
});

document.getElementById("img2").addEventListener("click",function(){
    var spot = "img"+curSpot;
    document.getElementById(spot).src = "img/img"+curImg2+".jpg";
});

document.getElementById("img3").addEventListener("click",function(){
    var spot = "img"+curSpot;
    document.getElementById(spot).src = "img/img"+curImg3+".jpg";
});

// Left, right, up, and down arrows
document.getElementById("left").addEventListener("click",function() {
    if (curSpot == "Bot") {
        myLeftBot = myLeftBot - 10;
        document.getElementById("imgBot").style.left = myLeftBot+"px";
    }
    if (curSpot == "Top") {
        myLeftTop = myLeftTop - 10;
        document.getElementById("imgTop").style.left = myLeftTop+"px"; 
    }
    if (curSpot == "Left") {
        myLeftLeft = myLeftLeft - 10;
        document.getElementById("imgLeft").style.left = myLeftLeft+"px"; 
    }
    if (curSpot == "Right") {
        myRightRight = myRightRight + 10;
        document.getElementById("imgRight").style.right = myRightRight+"px"; 
    }
});

document.getElementById("right").addEventListener("click",function() {
    if (curSpot == "Bot") {
        myRightBot = myRightBot - 10;
        document.getElementById("imgBot").style.right = myRightBot+"px";
    }
    if (curSpot == "Top") {
        myRightTop = myRightTop - 10;
        document.getElementById("imgTop").style.right = myRightTop+"px"; 
    }
    if (curSpot == "Left") {
        myLeftLeft = myLeftLeft + 10;
        document.getElementById("imgLeft").style.left = myLeftLeft+"px"; 
    }
    if (curSpot == "Right") {
        myRightRight = myRightRight - 10;
        document.getElementById("imgRight").style.right = myRightRight+"px"; 
    }
});

document.getElementById("up").addEventListener("click",function() {
    if (curSpot == "Bot") {
        myDownBot = myDownBot + 10;
        document.getElementById("imgBot").style.bottom = myDownBot+"px";
    }
    if (curSpot == "Top") {
        myUpTop = myUpTop - 10;
        document.getElementById("imgTop").style.top = myUpTop+"px"; 
    }
    if (curSpot == "Left") {
        myUpLeft = myUpLeft + 10;
        document.getElementById("imgLeft").style.bottom = myUpLeft+"px"; 
    }
    if (curSpot == "Right") {
        myUpRight = myUpRight + 10;
        document.getElementById("imgRight").style.bottom = myUpRight+"px"; 
    }
});

document.getElementById("down").addEventListener("click",function() {
    if (curSpot == "Bot") {
        myDownBot = myDownBot - 10;
        document.getElementById("imgBot").style.bottom = myDownBot+"px";
    }
    if (curSpot == "Top") {
        myUpTop = myUpTop + 10;
        document.getElementById("imgTop").style.top = myUpTop+"px"; 
    }
    if (curSpot == "Left") {
        myUpLeft = myUpLeft - 10;
        document.getElementById("imgLeft").style.bottom = myUpLeft+"px"; 
    }
    if (curSpot == "Right") {
        myUpRight = myUpRight - 10;
        document.getElementById("imgRight").style.bottom = myUpRight+"px"; 
    }
});

// Resize images
document.getElementById("larger").addEventListener("click",function() {
    if (curSpot == "Bot") {
        botHeight = botHeight + 10;
        document.getElementById("imgBot").style.height = botHeight+"px";
    }
    if (curSpot == "Top") {
        topHeight = topHeight + 10;
        document.getElementById("imgTop").style.height = topHeight+"px"; 
    }
    if (curSpot == "Left") {
        leftHeight = leftHeight + 10;
        document.getElementById("imgLeft").style.height = leftHeight+"px"; 
    }
    if (curSpot == "Right") {
        rightHeight = rightHeight + 10;
        document.getElementById("imgRight").style.height = rightHeight+"px"; 
    }
});

document.getElementById("smaller").addEventListener("click",function() {
    if (curSpot == "Bot") {
        botHeight = botHeight - 10;
        document.getElementById("imgBot").style.height = botHeight+"px";
    }
    if (curSpot == "Top") {
        topHeight = topHeight - 10;
        document.getElementById("imgTop").style.height = topHeight+"px"; 
    }
    if (curSpot == "Left") {
        leftHeight = leftHeight - 10;
        document.getElementById("imgLeft").style.height = leftHeight+"px"; 
    }
    if (curSpot == "Right") {
        rightHeight = rightHeight - 10;
        document.getElementById("imgRight").style.height = rightHeight+"px"; 
    }
});

document.getElementById("reset").addEventListener("click",function() {
    if (curSpot == "Bot") {
        botHeight = 170;
        myDownBot = 120;
        myLeftBot = 0;
        myRightBot = 0;
        document.getElementById("imgBot").style.height = "170px";
        document.getElementById("imgBot").style.left = "0px";
        document.getElementById("imgBot").style.right = "0px";
        document.getElementById("imgBot").style.bottom = "120px";
    }
    if (curSpot == "Top") {
        topHeight = 170;
        myDownTop = 120;
        myLeftTop = 0;
        myRightTop = 0;
        document.getElementById("imgTop").style.height = "170px";
        document.getElementById("imgTop").style.left = "0px";
        document.getElementById("imgTop").style.right = "0px";
        document.getElementById("imgTop").style.top = "50px";
    }
    if (curSpot == "Left") {
        leftHeight = 170;
        myDownLeft = 0;
        myLeftLeft = 50;
        myRightLeft = 0;
        document.getElementById("imgLeft").style.height = "170px";
        document.getElementById("imgLeft").style.left = "50px";
        document.getElementById("imgLeft").style.top = "0px";
        document.getElementById("imgLeft").style.bottom = "0px";
    }
    if (curSpot == "Right") {
        rightHeight = 170;
        myDownRight = 0;
        myLeftRight = 0;
        myRightRight = 50;
        document.getElementById("imgRight").style.height = "170px";
        document.getElementById("imgRight").style.top = "0px";
        document.getElementById("imgRight").style.right = "50px";
        document.getElementById("imgRight").style.bottom = "0px"; 
    }
});