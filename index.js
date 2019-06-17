var btn= $('.button');
var list= $('.list-container');

btn.on("click", addlist);

function addlist() {
  var adventure= $('.adventure').val();
  var when = $('.when').val();
  var materials= $('.materials').val();
  list.append(`<p class= "addAdventure"> Adventure: ${adventure} When: ${when} Materials: ${materials} </p>`);

  $('.adventure').val("");
  $('.when').val("");
  $('.materials').val("");
}
