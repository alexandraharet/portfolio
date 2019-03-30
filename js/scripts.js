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

    $(".herotext").delay(500).addClass("show");

    var addStackIcons = function() {
      var technologies = $(".technologies").children("div");
      technologies.each(function(){
      $(this).addClass("tech-icons");
      });
    }



// hide nav after menu item has been clicked


if ($(".title-bar").css("display") !== "none") $("#top-menu").click(function(){
      if ($(this).css("display") == "flex") $(this).css({"display":"none"});
      });
//end

// show / hide navbar on scroll up / scroll down

var scrollTimeOut = true;
var lastYPos = 0;
var yPos = 0;
var yPosDelta = 5;
var nav = $('.title-bar');
var navHeight = nav.outerHeight();
var setNavClass = function() {
    scrollTimeOut = false;
    yPos = $(window).scrollTop();
    if(Math.abs(lastYPos - yPos) >= yPosDelta) {
        if (yPos > lastYPos && yPos > navHeight){
            nav.removeClass('show-nav').addClass('hide-nav');
        } else {
            nav.removeClass('hide-nav').addClass('show-nav');
        }
        if ($(".title-bar").css("display") !== "none")
          if($("#top-menu").css("display") == "flex") $("#top-menu").css({"display":"none"});
        lastYPos = yPos;
    }
};

$(window).scroll(function(e){
scrollTimeOut = true;
});

setInterval(function() {
if (scrollTimeOut) {
    setNavClass();
}
}, 250);


// end

// timeline animation


var timelineToCenter = function() {
  $(".middleLine").css({"background-position": "center"});
  if ($(".iconContainer").length > 0 ) $(".iconContainer").remove();
  $(".timelineEvent").each(function() {
    $(this).append("<div class='iconContainer'> <img src='img/" + $(this).attr("id") + "-w.png' class='timelineIcon' /> </div>");
  })
}

var timelineToLeft = function() {
  $(".middleLine").css({"background-image": "none"});
  $(".timelineIcon").css({bottom: "0px", top: "-30px", "margin-top": "10px"});
}

var addTimelineIcons = function(isLeft) {
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
      addTimelineIcons(isLeft);
      wasLeft = isLeft;
    }
  });
};

// end

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
    var offset = - $(window).height()/4.5;
    var addMarginTop = -150;
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

// end

  var getDayAndYear = function () {
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $("#currentyear").text(d.getFullYear());
    $("#day").text(weekday[d.getDay()]);
  }

  function randomOctoImageAndQuote() {
    if ($('#octo-quote').length) {
      $('html').css('cursor', 'pointer');
      $('#octo-quote').html('Every night, every night, at the same time!');
      let quoteMin = 0, quoteMax, quotes, randomQuote;
      $.getJSON('./js/octo-quotes.json', (r) => {
        quotes = r.data;
        quoteMax = r.data.length - 1;
      });
      randomQuote = Math.floor(Math.random() * (quoteMax - quoteMin)) + quoteMin;
      $('#octo-quote p').html('Every night, every night, at the same time!');

      $(window).click(() => {
        const imgMin = 1, imgMax = 21;
        const randomImg = Math.floor(Math.random() * (imgMax - imgMin)) + imgMin;
        const octoUrl = './img/octo/octopus-' + randomImg + '.png';
        $('#octo-image').css({ 'background-image': 'url(' + octoUrl + ')' });

        randomQuote = Math.floor(Math.random() * (quoteMax - quoteMin)) + quoteMin;
        // $('#octo-image p').html(quotes[randomQuote]);

      });
    }
  }

addZoomInAndButton(".img-container");
addStackIcons();
getDayAndYear();
addTimelineIcons();
randomOctoImageAndQuote();

});
