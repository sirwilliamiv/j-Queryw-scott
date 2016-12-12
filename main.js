console.log("you're loggin dude")


// document.querySElector('button.continue').innerHTML = "Next Step..."


$( "h1" ).html( "Hello Friends")


// append
//
// list of things on a page
//
var foods = ['apple', 'banana','carrot', 'danish', 'egg']
var theGoods="";
var newStuff;
for(var i = 0; i < foods.length; i++){


$('ul').append(`<li>${foods[i]}</li>`)

}

$('ul').wrap("<div class='foods'></div>")


// wrap ul with a div, with a class of foods
// append( $newdiv1, [ newdiv2, existingdiv1 ] );


// var bingo = $('input:text').val();



$('input').last().click(function() {
  console.log("click")
  console.log($(':text').val())
});




$.getJSON('https://randomuser.me/api/?nat=us', function (data){
  console.log(data)
  var first = data.results[0].name.first
  var last = data.results[0].name.last

  // console.log(data.results[0].name)
  $( "h1" ).last().html(first, last )




})
