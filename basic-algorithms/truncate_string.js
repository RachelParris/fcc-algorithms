function truncateString(str, num) {
  var ellipses = "...";

  if (str.length > num && num > 3) {
    str = str.substring(0, [num -3]) + ellipses;
  } else if (num <= 3 ) {
    str = str.substring(0, num) + ellipses;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11); // "A-tisket..."
truncateString("Absolutely Longer", 2); // "Ab..."