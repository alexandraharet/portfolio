$(document).ready(function() {

var addZoomInAndButton = function(myClass) {
  $(myClass).prepend("<div class='buttonMore'>View Project</div>")
  .hover(
    function(){
      $(this).find("img").addClass("zoom-in");
    },
    function(){
      $(this).find("img").removeClass("zoom-in");
    });
}

// $(".herotext").delay(500).animate({top: "+20vh", opacity: 1}, 1000);

$(".herotext").delay(500).addClass("show");

// WORKS

var addStackIcons = function() {
  var technologies = $(".technologies").children("div");
  technologies.each(function(){
    $(this).append("<img src='img/technologies/" + this.className + ".png' / class='tech-icons' alt='" + this.className + " icon' title='" + this.className + "'/>");
  });

}

// NEEDS FIXING

/*

var addStackIcons = function() {
  var technologies = [];
  technologies = $(".technologies").children("div").attr("class").split(/\s+/);
  console.log(technologies);
  $.each(technologies, function(){
  $(".technologies").children("div").append("<img src='../ah-landing-page/img/technologies/" + this + ".png' / class='tech-icons'>");
  technologies = [];
  console.log(technologies);
  });

}

*/


/* NEEDS FIXING
var addStackIcons = function() {
  $.each(getProjectIDs(), function(){
    var technologies = $(".technologies #" + this).children("div").attr("class").split(/\s+/);
    console.log(technologies);
    $.each(technologies, function(){
    $(".technologies").children("div").append("<img src='../ah-landing-page/img/technologies/" + this + ".png' / class='tech-icons'>");
    });
  })
}

var getProjectIDs = function () {
  var projectIDs = [];
  $.each($(".card"), function() {
    if ($(this).prop("id")) projectIDs.push($(this).prop("id"));
  });
}

*/

// timeline animation


var timelineToCenter = function() {
  $(".middleLine").css({"background-position": "center"});
  if ($(".iconContainer").length > 0 ) $(".iconContainer").remove();
    $(".timelineEvent").each(function() {
    $(this).append("<div class='iconContainer'> <img src='img/" + $(this).attr("id") + "-w.png' class='timelineIcon' /> </div>");
  })
}

var timelineToLeft = function() {
  $(".timelineIcon").css({bottom: "0px", top: "-30px", "margin-top": "10px"});
}

var addTimelineArrows = function(isLeft) {
$(".middleLine").css({
  "visibility": "visible",
  });
  if (isLeft)
    timelineToLeft();
  else timelineToCenter();
}

if ($('.eventContent').length > 0 ) {
  var wasLeft = ($("body").width() > 640);
  $(window).on("load resize", function() {
    var isLeft = $("body").width() < 640;
    if (wasLeft != isLeft) {
      addTimelineArrows(isLeft);
      wasLeft = isLeft;
    }
  });
};

addTimelineArrows();

// back to top button fade-in and fade-out

// hide #back-top first
  $("#back-top").hide();

  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

// end



// Scrollmagic for animated timeline

$(function() {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  var animateTimeline = function() {
  var offset = - $(window).height()/4.5; // TODO: recalculate offset on screen resize;

  $('.timelineEvent').each(function() {
      var scene = new ScrollMagic.Scene({
         triggerElement: this,
         offset
       }).setClassToggle(this, "show").addTo(scrollMagicController);
       var triggerElement = scene.triggerElement();
       $(triggerElement).css({
         "-webkit-overflow-scrolling": "touch"
       }).children().css({
           "-webkit-transform": "translateZ(0px)",
           "-webkit-transform": "translate3d(0,0,0)"
         });
      });
    }
   animateTimeline();
  });

/* END */



addZoomInAndButton(".img-container");
addStackIcons();


// vertical alignment to middle using CSS, for class .center
/*
$(window).resize(function() {
 $(".toMiddle").each(function() {
   var wh = (($(this).parent().height()-$(this).height())/2)+'px';
   $(this).css({
       top: wh
   });
 });


}).resize(); */



})
