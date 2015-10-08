$(document).ready(function() {




  $(".appointment-button").click(function(event) {

    var nameInput = $("#name").val();
    var dateInput = $("#date").val();
    var startTimeInput = $("#startTime").val();
    var endTimeInput = $("#endTime").val();


    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);



    $("#confirmation").show();
    event.preventDefault();

  });

  $(".survey-button").click(function(event) {

    $("#thanks").show();
      event.preventDefault();

  });

  $("button#darktext").click(function() {
    $("body").removeClass();
    $(".survey-section").removeClass("survey-section-bg");
    $("body").addClass("dark-text");
  });

  $("button#lighttext").click(function() {
    $("body").removeClass();
    $(".survey-section").removeClass("survey-section-bg");    
    $("body").addClass("light-text");
  });

  $("#name2, .apt-box").click(function() {

    $(".survey-section").addClass("survey-section-bg");
  });



});
