$(document).ready(function () {
  $("#toggle").click(function () {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});

$(document).ready(function () {
  $("#yo1").click(function () {
    $("#yolo1").slideToggle("slow");
  });

  $("#yo2").click(function () {
    $("#yolo2").slideToggle("slow");
  });

  $("#yo3").click(function () {
    $("#yolo3").slideToggle("slow");
  });

  $("#yo4").click(function () {
    $("#yolo4").slideToggle("slow");
  });

  $("#yo5").click(function () {
    $("#yolo5").slideToggle("slow");
  });

  $("#yo6").click(function () {
    $("#yolo6").slideToggle("slow");
  });
});
