
$(function(){

    $("#indexNav > li").hover(function(){
        $(this).children(".downList").slideDown(200);
        var ulLiW=$(this).children(".downList").children("li").length;
        if (ulLiW==0){
            $(this).children(".downList").css("width","100%")
        }
        $(this).children(".downList").children("li:last").css("border-bottom","0px solid #a5a5a5");
    },function(){
        $(this).children(".downList").slideUp(200);
    });

    $(".toggle .toggle-title").on("click",function () {
        $(this).toggleClass("active");
        $(this).next(".toggle-inner").slideToggle();
    });


    $(".indexTab tr:even").addClass("tdBg");


    $("#backToTop").click(function(){
        $('body,html').animate({scrollTop:0},800);
    });



});


window.onscroll=function(){
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    var backToTop =document.getElementById("backToTop");
    if( t >=200) {
        backToTop.style.display="block";
    }else{
        backToTop.style.display="none";
    }
};
