$(document).ready(function () {
  // Gets the video src from the data-src on each button
  var $videoSrc;
  $(".video-btn").click(function () {
    $formSrc = $(this).data("src");
  });
  // when the modal is opened autoplay it
  $("#formModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#form").attr("src", $formSrc);
  });
  // stop playing the youtube video when I close the modal
  $("#formModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#form").attr("src", "");
  });
});
$(document).ready(function () {
  // Gets the video src from the data-src on each button
  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr("src", $videoSrc);
  });
  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", "");
  });
});
$(document).ready(function () {
  if (document.cookie.indexOf("cookies") < 0) {
    $("#cookie-consent").slideDown("slow");
  }
  $("#consent").on("click", function () {
    $("#cookie-consent").slideUp("slow");
    $.ajax({
      type: "POST",
      url: "/Home/AddConsentCookie",
      contentType: "application/json;",
      success: function (response) {
        console.log("Consent cookie recorded");
      },
    });
  });
});
// document ready
