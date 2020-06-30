$(function () {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $(".bxslider").bxSlider({
    captions: true,
    slideWidth: 600,
    auto: true,
    autoControls: true,
    stopAutoOnclick: true,
  });
  $(".pop_close").click(function () {
    $(".popup").fadeOut(300);
  });
  $(".lan").hide();
  $(".lanuage").click(function () {
    $(".sub").slideToggle("fast");
  });
  var UI = {
    init: function () {
      this.quickMenuFn();
      this.topBtn();
    },

    initialize: function () {
      this.id = {
        target: {
          quick: "#quick",
          stickyTop: "#footer",
        },
        topBtnClass: "btn_top",
      };
      this.init();
    },

    quickMenuFn: function () {
      var quick = $(this.id.target.quick);
      var qTop = parseInt(quick.css("top"));

      $(window).scroll(function () {
        var winTop = $(window).scrollTop();

        quick.stop().animate(
          {
            top: winTop + qTop,
          },
          400
        );
      });
    },

    topBtn: function () {
      var btnLocation = $("." + this.id.topBtnClass);
      var timerId = 0;

      $(window).on("scroll", function () {
        var winTop = $(window).scrollTop();
        if (winTop > 200) {
          btnLocation.fadeIn();
          clearInterval(timerId);
          timerId = setInterval(btnEffet, 2000);
        } else {
          btnLocation.fadeOut();
          clearInterval(timerId);
        }
      });

      function btnEffet() {
        btnLocation.fadeTo("300", 0.3).fadeTo("300", 1);
      }

      this.scrollTop(btnLocation);
    },

    scrollTop: function (eTarget, speed) {
      var speed = speed || null;
      eTarget.on("click", function () {
        $("html, body").animate(
          {
            scrollTop: $("body").offset().top,
          },
          speed
        );
      });
    },
  };

  $(function () {
    UI.initialize();
  });
});
