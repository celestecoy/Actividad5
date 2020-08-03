//$(document).ready(function(){
  
   //$('#parrafo').css("font-size","30px");

   //$('.parrafo2').css("background","black").css("color", "white");

   //$('li').css("background", "yellow");

   //$('[title=link1]').css("background", "blue")
   ////$('[title=link2]').css("background", "green")

   $("li").click (function(){
    $(this).addClass("resaltar")
 })

 $("li").dblclick (function(){
    $(this).addClass("resaltar2")
 })
/*

 $('.box').mouseover(function(){
     $(this).css("background", "white").css("color", "black");
 })

 $('.box').mouseout(function(){
    $(this).css("background", "black").css("color", "white");
})

*/

function changeIn(){
    $(this).css("background", "white").css("color", "black");
}

function changeOut(){
 $(this).css("background", "black").css("color", "white");
 
}

$('.box').hover(changeIn, changeOut)

$('#name').focus(function(){
 $(this).css("border", "5px solid black");
});

$('#name').blur(function(){
 $(this).css("border", "1px solid black");
});

//});


$(document).mousemove(function() {

    console.log("Y: " + event.clientY);
    console.log("X: " + event.clientX);



    $('body').css("cursor", "none");
    $('#follow').css("top", event.clientY).css("left", event.clientX);
});


    

