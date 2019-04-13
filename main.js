//the challenge is to create a tree using a given character from user input
//i'm going to try to make it work alone first 

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************

// also can i add a trunk?

//it needs an iterating for loop
//for this tree it requires 7 spaces then the character
//next line is 6 then two of the characters are added to it...
//seems like a good formula to follow

// so the loop would need to output 7 spaces then the character
//then six spaces and two of the character
// that means it time through the loop it needs to remove one space and add two characters?

//the formula is height = spaces in first line - then subtract one from height and add two characters

const specs = {
  height: 7,
  char: '*'
}

const specs2 = {
  height: 8,
  char: '\uD83E\uDD37\u200D\u2642\uFE0F'
}

// (height * 2) - 1


const treeFunc = obj => {
  let counter = obj.height;
  let space = ' ';
  line = '';
  for (let i = 1; i <= counter; i++) {
    line = '';
    line += space;
    for (let j = 1; j <= (obj.height * 2) - 1; j++) {
      line += obj.char;
    }
    console.log(line);
    obj.height--;
    space += ' ';
  }
}

//well the above equation prints the tree upside down. so that's getting somewhere i guess.




//general idea below!

// line counter = height;
// space count = height - 1;
// character counter = 1; then add two each time

const treeFunc2 = obj => {
  let line = '';
  let space = ' ';
  let charCount = 1;
  let spaceCount = obj.height - 1;
  for (let i = 1; i <= obj.height; i++) {
    for (let j = 1; j <= spaceCount; j++) {
      line += space;
    }
    for (let k = 1; k <= charCount; k++) {
      line += obj.char;
    }
    console.log(line);
    line = '';
    spaceCount--;
    charCount++;
    // charCount++;
    // second charCount++ is for regular keyboard characters
    // one charCount is for emojis *upside smiley*
  }
}


treeFunc(specs);
treeFunc2(specs2);
