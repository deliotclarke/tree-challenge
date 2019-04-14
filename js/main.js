//the challenge is to create a tree using a given character from user input


const specs = {
  char: ''
}

const specs2 = {
  char: ''
}

//\uD83E\uDD37\u200D\u2642\uFE0F <--- the code for man shrugging emoji

const grabData = () => {
  specs2.height = document.querySelector('#height').value;
  specs2.char = document.querySelector('#char').value;
  treeFunc2(specs2);
}

const createTree = (text) => {
  let para = document.createElement("P");
  let paraData = document.createTextNode(text);
  para.appendChild(paraData);
  document.querySelector('#treeDiv').appendChild(para);
}

document.querySelector('#treeButton').addEventListener('click', grabData);

const treeFunc = obj => {
  let counter = obj.height;
  let space = ' ';
  let line = document.createTextNode('');
  for (let i = 1; i <= counter; i++) {
    line = '';
    line += space;
    for (let j = 1; j <= (obj.height * 2) - 1; j++) {
      line += obj.char;
    }
    createTree(line);
    console.log(line);
    obj.height--;
    space += ' ';
  }
}

//above code prints upside down tree.


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
    createTree(line);
    console.log("works!");
    line = '';
    spaceCount--;
    charCount++;
    charCount++;
  }
}



