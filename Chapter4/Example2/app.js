
/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
  'use strict';

  //Second User
  var addCommentFromInputBox2 = function () {

    var $new_Comment2;
    if ($('.comment-input2 input').val() !== '') {
      $new_Comment2 = $('.comment-input2 input').val();
      $new_Comment2 = $('<p class="TwoColor">').text($new_Comment2);
      $new_Comment2.hide();
      $('.comments').append($new_Comment2);
      $new_Comment2.fadeIn();
      $('.comment-input2 input').val('');
    }
  };

  //Click Handler Second User
  $('.comment-input2 button').on('click', function (event) {
    addCommentFromInputBox2();
  });

  //Enter Handler Second User
  $('.comment-input2 input').on('keypress', function (event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox2();
    }
  });
    
  //First User
  var addCommentFromInputBox = function () {
    
    var $new_Comment;
    if ($('.comment-input input').val() !== '') {
      $new_Comment = $('.comment-input input').val();
      $new_Comment = $('<p class="OneColor">').text($new_Comment);
      $new_Comment.hide();
      $('.comments').append($new_Comment);
      $new_Comment.fadeIn();
      $('.comment-input input').val('');
    }
  };
    
  //click handler
  $('.comment-input button').on('click', function (event) {
    addCommentFromInputBox();
  });

  //enter handler
  $('.comment-input input').on('keypress', function (event) {
    if (event.keyCode === 13) {
       addCommentFromInputBox();
    }
  });
};

$(document).ready(main);
