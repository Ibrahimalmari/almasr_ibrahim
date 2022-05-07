$(document).ready(function () {

    $(".carousel ").carousel({
        interval: 3000
    });

    $(".check").on("click", function () {
        $(".option-box .color-option").slideToggle(2000);
    });
    $(".option-box .color-option ul li").
        eq(0).css("background-color", "#f00").end().
        eq(1).css("background-color", "rgb(206, 33, 183)").end().
        eq(2).css("background-color", "rgb(0, 26, 255)").end().
        eq(3).css("background-color", "rgb(160, 189, 31)").end();
    $(".option-box  .color-option ul li").on("click", function () {
        $("link[href*='color']").attr("href", $(this).attr("data-value"));
    });
    var scroll = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scroll.fadeIn();
        }
        else {
            scroll.fadeOut();
        }
    });
    scroll.on("click", function () {
        $("body").animate({ scrollTop: 0 }, 1000).end();
    });
    $(window).on("load", function () {
        $(".loading-overaly .spinner ").fadeOut(3000, function () {
            $(this).parent().fadeOut(3000, function () {
                $("body").css("overflow-y", "auto");
                $(this).remove();
            });
        });
    });
  
});