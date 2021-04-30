$('img').on("click",function(){
    $(this).fadeOut("slow");
});

$("#reset").on("click",function(){
    $('img').fadeIn("slow");
});