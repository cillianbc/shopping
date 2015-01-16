$(document).ready(function () {
  $('ul').on('click', 'li', function (event) {
  });

//var shopItem = //Text entered in text box//
//$("#shopping-list ul").append(shopItem);

  $('button').on('click',function(){
    $(this).remove('li:last');
  });
  $('#shopping-list li').on('click',function(){
    $(this).addClass('li-strike');
  });





    $("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("form").submit();
      }
    $('input').submit(function() {
    var value = $( this ).val();

    $('#shopping-list').append("<li>"+value+"</li>");
    $('#shopping-list').css("visibility","visible");
    });
    });
  });
});
