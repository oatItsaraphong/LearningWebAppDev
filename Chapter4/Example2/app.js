
var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
        
        var $new_comment2;
        if ($(".comment-input2 input").val() !== "") {
            $new_comment2 = $("<p>").text($(".comment-input2 input").val());
            $new_comment2.hide();
            $(".comments").append($new_comment2);
            $new_comment2.fadeIn();
            $(".comment-input2 input").val("");
        }
    };

    
    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);
