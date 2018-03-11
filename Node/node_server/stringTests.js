
// formatting a new line with \n
let haiku = "Golden light and warmth, \nlonging for spring's scent, \nMid winter's daydream.";
console.log(haiku);

// a backslash by it's self ignores next character so in this case the ' is usable and the string is still valaid even though it uses single '' and not ""
let text = 'Hello I\'m Oscar';
console.log(text ,'\n');

//  "\t" - This creates a horizontal tab
//  "\v" - This creates a vertical tab
//  "\u" - Pass in unicode


let haiku2 = "Golden light and warmth, \tlonging for spring's scent, \vMid winter's daydream.\n";
console.log(haiku2)




// some unicode encoding on a string
console.log('\u263A        \u2603        \u272f');