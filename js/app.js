$(document).ready(function () {
  $('button').on('click',function(){

    console.log($('#shopping-list li').remove())
  });
  
  $('#shopping-list').on('click', 'li', function () {
    $(this).toggleClass('li-strike');
  });
 
  function appendItem (value) {
    var el = document.createElement('li');
    el.textContent = value; // $('<li></li>').text(value);
 
    // <script>alert(1);</script>
    $('#shopping-list').append(el);
    $('#shopping-list').css("display","block");
  }
 
  var ENTER = 13;
 
  $("input").keypress(function (event) {
    if (event.which === ENTER) {
      event.preventDefault();
      appendItem(this.value);
      this.value = '';
    }
  });
});
