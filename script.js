$(".secondImage").hide();
$(".title2").hide();
$(".yes-button").hide();
$(".no-button").hide();
$(".thirdImage").hide();
$(".title3").hide();
$(".fourthImage").hide();
$(".fifthImage").hide();
$(".title4").hide();
$(".sixthImage").hide();
$(".title5").hide();
$(".title6").hide();

$(".firstImage").click(function() {
    $(".secondImage").show();
    $(".firstImage").hide();
    $(".title").hide();
    $(".title2").show();
    $(".yes-button").show();
    $(".no-button").show();
});
    
$(".yes-button").click(function() {
    $(".secondImage").hide();
    $(".title2").hide();
    $(".thirdImage").show();
    $(".yes-button").hide();
    $(".no-button").hide();
    $(".title3").show();         
});
             
$(".thirdImage").click(function() {
    $(".fourthImage").show();
    $(".thirdImage").hide();
    $(".title3").hide();
    $(".title4").show();
});
             
$(".no-button").click(function() {
    $(".secondImage").hide();
    $(".title2").hide();
    $(".fifthImage").show();
    $(".title5").show();
    $(".no-button").hide();
    $(".yes-button").hide();
});

$(".fifthImage").click(function() {
    $(".sixthImage").show();
    $(".title5").hide();
    $(".fifthImage").hide();
    $(".title6").show();
    $(".yes-button").hide();
});