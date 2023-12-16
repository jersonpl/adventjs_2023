function drawGift(size = 0, symbol = "") {
  let top = "";
  let bottom = "";

  for (let i = 0; i < size; i++) {
    top += " ".repeat(size - i - 1);

    if (i === size - 1 && size > 1) {
      top += "#".repeat(size) + symbol.repeat(i - 1) + "#";
      bottom += "#".repeat(size) + "\n";
    } else if (i > 0) {
      top += "#" + symbol.repeat(size - 2) + "#" + symbol.repeat(i - 1) + "#";
      bottom +=
        "#" +
        symbol.repeat(size - 2) +
        "#" +
        symbol.repeat(size - 2 - i) +
        "#\n";
    } else {
      top += "#".repeat(size);
    }
    top += "\n";
  }

  return top + bottom;
}

console.log(drawGift(4, "+"));

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, "*"));
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, "^"));
/*
#
*/
