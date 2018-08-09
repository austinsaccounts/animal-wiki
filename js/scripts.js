





















$(document).ready(function(){

  $("#animalSelection").submit(function(event) {
   event.preventDefault();
   var animal = $("input:radio[name=optradio]:checked").val();
   $(".big-pictures").hide();

  if ( animal==="dolphin")
  {
   $('#dolphin').show();
 }
 if ( animal==="honeybadger")
 {
   $('#honeybadger').show();
}
if ( animal==="jellyfish")
  {
   $('#jellyfish').show();
  }
if ( animal==="octopus")
{
  $('#octopus').show();
  }
})
});
