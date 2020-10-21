console.log('js');

$(document).ready(function(){

  // declaration of an object
  var cat = {
    id : 101,
    name : 'Fluffy',
    color : 'White and Brown',
    breed : 'Ragdoll',
    behaviour : 'passive'
  }

console.log(cat);
// $('#result').text(cat.name)
//             .append('<br>' + cat.breed)
//             .append('<br>' + cat.color)
//             .append('<br>' + cat.behaviour);

//array of objects
var cats = [
  {
    id : 101,
    name : 'Fluffy',
    color : 'White and Brown',
    breed : 'Ragdoll',
    behaviour : 'Passive',
    photo: 'brown_and_white_cat.jpg'
  },
  {
    id : 102,
    name : 'Frank',
    color : 'White',
    breed : 'Persian',
    behaviour : 'Lazy',
    photo: 'persian_cat.jpg'

  },
  {
    id : 103,
    name : 'Lola',
    color : 'Ginger',
    breed : 'Tabby',
    behaviour : 'Jumpy',
    photo: 'ginger_cat.jpg'
  },
  {
    id : 104,
    name : 'Ignus',
    color : 'Ginger',
    breed : 'Tabby',
    behaviour : 'Tame',
    photo: 'ginger_cat_2.jpg'
  },
  {
    id : 105,
    name : 'Angie',
    color : 'Ginger',
    breed : 'Tabby',
    behaviour : 'Gentle',
    photo: 'ginger_cat_3.jpg'
  },
  {
    id : 106,
    name : 'Joey',
    color : 'Ginger',
    breed : 'Tabby',
    behaviour : 'Timid',
    photo: 'ginger_cat_4.jpg'
  },
  {
    id : 107,
    name : 'Petey',
    color : 'Ginger',
    breed : 'Tabby',
    behaviour : 'Sleepy',
    photo: 'ginger_cat_5.jpg'
  },
  {
    id : 108,
    name : 'Maggie',
    color : 'Grey',
    breed : 'Russian Blue',
    behaviour : 'Playful',
    photo: 'grey_cat.jpg'
  },
  {
    id : 109,
    name : 'Jazz',
    color : 'White and Brown',
    breed : 'Tabby',
    behaviour : 'Gentle',
    photo: 'brown_and_white_cat_2.jpg'
  }
];
//access properties of objects using index number
// $('#cat').html('<br>' + cats[0].name)
//             .append('<br>' + cats[0].breed)
//             .append('<br>' + '<br>' + cats[1].name)
//             .append('<br>' + cats[1].breed)
//             .append('<br>' + '<br>' + cats[2].name)
//             .append('<br>' + cats[2].breed)
//             .append('<br>' + '<br>' + cats[3].name)
//             .append('<br>' + cats[3].breed)
//             .append('<br>' + '<br>' + cats[4].name)
//             .append('<br>' + cats[4].breed)
//
// !! This code below doesn't work properly don't use !!
// $('#catImage').html('<img class="img-thumbnail ml-5 rounded float-right" src="images/brown_and_white_cat.jpg" alt="Fluffy">')
//             .append('<img class="img-thumbnail ml-5 rounded float-right" src="images/light_cat.jpg" alt="Frank">')
//             .append('<img class="img-thumbnail ml-5 rounded float-right" src="images/ginger_cat.jpg" alt="Lola">')
//             .append('<img class="img-thumbnail ml-5 rounded float-right" src="images/grey_cat.jpg" alt="Maggie">')
//             .append('<img class="img-thumbnail ml-5 rounded float-right" src="images/brown_and_white_cat_2.jpg" alt="Jazz">')
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


var i;
for(i = 0; i < cats.length; i++){
  // $('#result').append('<div class="row clearfix ">' +
  //
  //                     '<div class="col-md-6 border border-light rounded">' +
  //                       '<h1 class="pt-3 pl-3 text-success text-center">' + cats[i].name + '</h1>' +
  //                       '<h3 class="pl-3 text-center">' + cats[i].breed + '</h3>' +
  //                       '<h3 class="pl-3 text-center">' + cats[i].color + '</h3>' +
  //                       '<h3 class="pl-3 text-center">' + cats[i].behaviour + '</h3>' +
  //
  //                     '</div>' +
  //
  //                     '<div class="col-md-6">' +
  //
  //                       '<img src="images/' + cats[i].photo + '" alt=" ' + cats[i].name + ' " class="img-fluid" > ' +
  //
  //                     '</div>' +
  //
  //
  //                     '</div>'
  //   );

// Bootstrap cards to $display
  $('#result').append( '<div class="col-md-4 mb-2">' +
                          '<div class="card mb-2" style="width: 18rem;">' +
                            '<img src="images/' + cats[i].photo + '" class="card-img-top" alt="' + cats[i].name + '">' +
                            '<div class="card-body bg-success">' +
                              '<h2 class="card-title text-primary"> '+ cats[i].name +' </h2>' +
                              '<h5 class="card-text text-light"> '+ cats[i].color + '<br>' +cats[i].breed + '<br>' + cats[i].behaviour +' </h5>' +
                              '<button  id="' + cats[i].id + '" type="button" class="btn btn-primary moreDetails" data-toggle="modal" data-target="#exampleModal">More'+ " " + cats[i].breed + '</button>' +
                            '</div>' +
                          '</div>' +
                        '</div>'
  ); //append ends here

} // end of for loop

$('.moreDetails').click(function(){
  console.log(this.id);
  var i = 0;
  for (i = 0; i < cats.length; i++) {
    if (parseInt(this.id) === cats[i].id) {
      console.log(cats[i].id, cats[i].name, cats[i].breed);
        $('#exampleModalLabel').text(cats[i].breed);
        $('#imageCat').html('<img class="img-fluid" src="images/' + cats[i].photo + '" alt="' + cats[i].breed + '"/>');



  }// end of if statement

  } //end of for loop

}); //end of function

}); //end of document.ready()
