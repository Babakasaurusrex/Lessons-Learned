var beer = 99;
while (beer > 0) {
  var song =[
    beer + " bottles of beer on the wall,",
    beer + " bottles of beer!",
    "Take one down, pass it around",
    (beer - 1) + " bottles of beer on the wall!"
    ];

if (beer > 1) {
  var song =[
    beer + " bottles of beer on the wall,",
    beer + " bottles of beer!",
    "Take one down, pass it around",
    (beer - 1) + " bottles of beer on the wall!"
    ];
}

else { var song =[
    beer + " bottle of beer on the wall ",
    beer + " bottle of beer!",
    "Take one down, pass it around",
    " No more bottles of beer on the wall!"
    ]; }


  console.log(song);

  beer--;
}
