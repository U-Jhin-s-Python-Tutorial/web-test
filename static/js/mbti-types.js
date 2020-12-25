/* feather icon setting */
(function () {
  'use strict'
  feather.replace()
})()


/* ajax click events */
$("#home").click(function () {
    $.ajax({
        url: "mbti-types/main.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});


$("#analysts").click(function () {
    $.ajax({
        url: "mbti-types/analysts.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});


$("#diplomats").click(function () {
    $.ajax({
        url: "mbti-types/diplomats.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});


$("#sentinels").click(function () {
    $.ajax({
        url: "mbti-types/sentinels.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});


$("#explorers").click(function () {
    $.ajax({
        url: "mbti-types/explorers.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});
