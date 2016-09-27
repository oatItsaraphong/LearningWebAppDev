
/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
  'use strict';

  //Second User
  var addCommentFromInputBox2 = function () {

    var $newComment2;
    if ($('.comment-input2 input').val() !== '') {
      $newComment2 = $('.comment-input2 input').val();
      $newComment2 = $('<p class="TwoColor">').text($newComment2);
      $newComment2.hide();
      //add to the html
      $('.comments').append($newComment2);
      $newComment2.fadeIn();
      $('.comment-input2 input').val('');
    }
  };

  //Click Handler Second User
  $('.comment-input2 button').on('click', function () {
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
    
    var $newComment;
    if ($('.comment-input input').val() !== '') {
      $newComment = $('.comment-input input').val();
      $newComment = $('<p class="OneColor">').text($newComment);
      $newComment.hide();
      $('.comments').append($newComment);
      $newComment.fadeIn();
      $('.comment-input input').val('');
    }
  };
    
  //click handler
  $('.comment-input button').on('click', function () {
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
