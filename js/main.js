function main(){
//$(".carousel").hide();
//$(".carousel").fadeIn(2000);
var pos = 1;
$(".carousel").click(function(){
    if(pos == 1)
    {
      $(".carousel").animate({"margin-left": "-100%"},1000);
      pos = 2;
    }
    else if(pos == 2)
    {
      $(".carousel").animate({"margin-left": "-200%"},1000);
      pos = 3;
    }
    else {
      $(".carousel").animate({"margin-left": "0"},1000);
      pos = 1;
    }
});

}

$(document).ready(main);
