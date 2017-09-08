// Declare the variables we intend to use later.
var cats,
    noms;

// Next, create the function we'll use. This is what you'll modify to make the
// code work.

/**
 * Determines which animals get a treat.
 * The animals to feed.
 * A list of who was given a treat.
 */
function treatDispenser(animals) {

  var results = [ ];
  var sentence = '';

  for (var i = 0; i < animals.length; i++){
     var animal = animals[i];
     if ( animal.charAt(0) == "M"){
       sentence = "no treat for " + animal;
       results.push(sentence);
     } else {
       sentence = animal + " loved their treat!";
       results.push(sentence);
     }

  }

  return results;
}

cats = [
  'Jayne',
  'Kaylee',
  'Malcolm',
  'Monty',
  'River',
  'Simon',
  'Zoë'
];

noms = treatDispenser(cats);

console.log(noms);

// Answer should return an array that looks similar to this:
// ["Jayne loved their treat!", "Kaylee loved their treat!", "No treat for Malcolm",
//  "No treat for Monty", "River loved their treat!", "Simon loved their treat!", "Zoë loved their treat!"]
