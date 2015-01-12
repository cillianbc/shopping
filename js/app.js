$(document).ready(function () {
  $('ul').on('click', 'li', function (event) {
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
  });
  $("#add-items").keyup(function () {
    var value = $(this).val();
    $("#shopping-list li").add().text(value);
    });
});
