$(document).ready(function(){
    //toggle
    $(".design").click(function(){
        $(".shy design-shy").show();
        $(this).hide();
    })
    $(".design-shy").click(function(){
        $(".design").show();
        $(this).hide();
    })
    $(".development").click(function(){
        $(".shy development-shy").show();
        $(this).hide();
    })
    $(".development-shy").click(function(){
        $(".development").show();
        $(this).hide();
    })
    $(".product").click(function(){
        $(".shy product-shy").show();
        $(this).hide();
    })
    $(".product-shy").click(function(){
        $(".product").show();
        $(this).hide();
    })
    //portfolio
    $(".pic").mouseenter(function(){
        $(".portfolio").show();
    })
    $(".pic").mouseenter(function(){
        $(".portfolio").hide();
    })

})
