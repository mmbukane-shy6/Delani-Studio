$(document).ready(function () {
    //toggle
    $(".design").click(function () {
        $("#design").toggle();
    });
    $(".dev").click(function () {
        $("#dev").toggle();
    });
    $(".product").click(function () {
        $("#product").toggle();
    });
    //portfolio
    $(".pic").mouseenter(function () {
        $(".portfolio-1").show();
    })
    $(".pic").mouseleave(function () {
        $(".portfolio-1").hide();
    })
    $(".pic").mouseenter(function () {
        $(".portfolio-2").show();
    })
    $(".pic").mouseleave(function () {
        $(".portfolio-2").hide();
    })
    $(".pic").mouseenter(function () {
        $(".portfolio-3").show();
    })
    $(".pic").mouseleave(function () {
        $(".portfolio-3").hide();
    })
    $(".pic").mouseenter(function () {
        $(".portfolio-4").show();
    })
    $(".pic").mouseleave(function () {
        $(".portfolio-4").hide();
    })
    $(".pic").mouseenter(function () {
        $(".portfolio-5").show();   
    })
    $(".pic").mouseleave(function () {
        $(".portfolio-5").hide();
    })
    $(".pic").mouseenter(function () {
        $(".portfolio-6").show();
    })
    $(".pic").mouseleave(function () {
        $(".portfolio-6").hide();
    })
    $(".pic").mouseenter(function () {
        $(".portfolio-7").show();
    })
    $(".pic").mouseleave(function () {
        $(".portfolio-7").hide();
    })
    $(".pic").mouseenter(function () {
        $(".portfolio-8").show();
    })
    $(".pic").mouseleave(function () {
        $(".portfolio-8").hide();
    })
    //submit button
    $("#submit").click(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var mail = $("mail").val();
        var text = $("#text").val();
        //var key = '43ab10333d46e19325f96d210ed40c49-us5';//
        if (name == "" || mail == "" || text == "") {
            alert("hi" + " " + name + " " + "we have recieved Your message .Thank you for reaching out to us")

        } else {
            alert("please make sure you have filled in the form correctly")

        }

    })

})
