$(document).ready(function() {
  console.log(" works");
  $(".js-section-feature").waypoint(function(direction) {
    console.log("waypoint works");
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
});
