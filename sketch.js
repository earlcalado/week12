//stages + respective vars
let screenQ;
let screenQTwo;
let screenQThree;
let screenQFour;
let titlePage;
let surCamOne;
let surCamTwo;
let surCamThree;
let aiQuestionOne;
let aiQuestionTwo;
let aiQuestionThree;
let aiResponseOne;
let aiResponseTwo;
let deathScreen;
let endScreen;
let surImg1;
let surImg2;
let surImg3;
var mode; //determines whether game has started

let currentStage;
let input, button;

function preload(){
  surImg1 = loadImage('w12.jpeg');
  surImg2 = loadImage('wsp.jpeg');
  surImg3 = loadImage('union.jpeg');
}

function setup() {
  mode = 0;
  createCanvas(windowWidth, 500);
  createStory();
  
  current = beginning;
  console.log(current)

  input = createInput('')

  input.changed(newText);
  
  
}

function newText() {
  console.log(newText.value);
}

function draw() {
  background(0);
  fill(255, 0, 0);
  
  if (mode==0) {
  text(current.text, 50, 50);
  text(current.mainOption, width/2, height/2);
  }
  

  text(current.mainText, width/3, 50);
  text(current.option1, width/5, 450);
  text(current.option2, width/1.5, 450);
 
  
  if(current == surCamOne){
    imageMode(CENTER);
    image(surImg1, width/2, height/3, width/2, 200);
  }
  if(current == surCamTwo){
    imageMode(CENTER);
    image(surImg2, width/2, height/3, width/2, 200);
  }
  if(current == surCamThree){
    imageMode(CENTER);
    image(surImg3, width/2, height/3, width/2, 200);
  }
  
  if(current == aiQuestionOne){
    textAlign(CENTER);
    text(current.aiPrompt, width/2, height/12);
    text(current.aiText, width/2, height/2);
    text(current.aiOption1, width/6, 300);
    text(current.aiOption2, width/2, 300);
  }
  
  if(current == aiQuestionTwo){
    textAlign(CENTER);
    text(current.aiPrompt, width/2, height/12);
    text(current.aiText, width/2, height/2);
    text(current.aiOption1, width/2, 300);
    text(current.aiOption2, width/2, 300);
  }
  
  if(current == aiQuestionThree){
    textAlign(CENTER);
    text(current.aiPrompt, width/2, height/12);
    text(current.aiText, width/2, height/2);
    text(current.aiOption1, width/2, 300);
    text(current.aiOption2, width/2, 300);
  }
  
  if(current == aiResponseOne){
    textAlign(CENTER);
    text(current.aiPrompt, width/2, height/12);
    text(current.aiText, width/2, 100);
    text(current.aiOption1, width/2, 300);
    text(current.aiOption2, width/2, 300);
  }
  
  if(current == screenQ){
    textAlign(CENTER);
    text(current.text, width/2, height/12);
    text(current.screenText, width/2, 100);
    input.position(0, 0);
    button = createButton('submit');
    button.position(0, 0);
  }
  
  if(current == screenQTwo){
    textAlign(CENTER);
    text(current.aiPrompt, width/2, height/12);
    input.position(0, 0);
    button = createButton('submit');
    button.position(0, 0);
  }
  if(current == screenQThree){
    textAlign(CENTER);
    text(current.aiPrompt, width/2, height/12);
    input.position(0, 0);
    button = createButton('submit');
    button.position(0, 0);
  }
  if(current == screenQFour){
    textAlign(CENTER);
    text(current.aiPrompt, width/2, height/12);
  }
  if(current == endScreen){
    textAlign(CENTER);
    text(current.text, width/2, height/2);
    text(current.mainOption, width/2, height/4);
  }
  
}
function mousePressed(){
  if(current == screenQ){
    current = screenQTwo;
  }
}

class surCamSection {
  constructor(mainText, surCamImg, option1, target1, option2, target2) {
    this.mainText = mainText;
    this.surCamImg = surCamImg;
    this.option1 = option1;
    this.target1 = target1;
    this.option2 = option2;
    this.target2 = target2;
  }
}

class aiQuestionSection {
  constructor(aiPrompt, aiText, aiOption1, aiTarget1, aiOption2, aiTarget2) {
    this.aiPrompt = aiPrompt
    this.aiText = aiText
    this.option1 = aiOption1
    this.target1 = aiTarget1
    this.option2 = aiOption2
    this.target2 = aiTarget2
  }
}

class storyPages {
  constructor(text, mainOption, mainTarget) {
    this.text = text;
    this.mainOption = mainOption;
    this.mainTarget = mainTarget;
  }
}

class firstScreenQ {
  constructor(text, screenText, screenOption1, nextTarget1, screenOption2, nextTarget2) {
    this.text = text;
    this.screenText = screenText;
    this.screenOption = screenOption1
    this.nextTarget = nextTarget1;
    this.screenOption2 = screenOption2;
    this.nextTarget2 = nextTarget2;
  }
}

class screenQuery {
  constructor(text, screenText, screenOption1, nextTarget1, screenOption2, nextTarget2) {
    this.text = text;
    this.screenText = screenText;
    this.screenOption = screenOption1
    this.nextTarget = nextTarget1;
    this.screenOption2 = screenOption2;
    this.nextTarget2 = nextTarget2;
  }
  }

function keyPressed() {
  if(current == beginning){
  if (keyCode === ENTER){
    current = surCamOne;
  }
  }
  if(current == deathScreen){
    if(keyCode === ENTER){
      current = beginning;
    }
  }
  if (key == 'a') {
    if (current.target1 != null) { // Make sure a valid option exists.
      current = current.target1;   // Advance to next story section
    }
  }
  if (key == 'b') {
    if (current.target1 != null) { // Make sure a valid option exists
      current = current.target2;   // Advance to next story section
    }
  }
}



///STORY///
  //INITIALIZE IN REVERSE///
function createStory (){
  
  endScreen = new storyPages(
  "QUESTIONNAIRE COMPLETE", "thank you", null
  )
  
  deathScreen = new storyPages(
  "Your Services are No Longer Needed", "restart?", null
  )
  
  screenQFour = new aiQuestionSection(
  "IS THERE A CAMERA IN YOUR ROOM?",
  " ",
  "a. YES",
  endScreen,
  "b. I DONT THINK SO",
  deathScreen
  )
  
  screenQThree = new aiQuestionSection(
  "ARE YOU ALONE RIGHT NOW?",
  " ",
  "a. YES",
  screenQFour,
  "b. NO",
  screenQFour
  )
  
  screenQTwo = new aiQuestionSection(
  "HOW FAR IS THE NEAREST DOOR?",
  " ",
  "a. ?",
  screenQThree,
  "b. ...",
  screenQThree
  )
  
  screenQ = new firstScreenQ(
  "YOU ARE NEARING THE END OF THE QUESTIONNAIRE",
  "ENTER YOUR NAME",
  input,
  screenQTwo,
  input,
  screenQTwo
  )
  
  aiResponseOne = new aiQuestionSection( 
    "",
    "So You'll Kill My Boss For Me?",
    "YES",
    screenQ,
    "NO",
    deathScreen
  )
  
  aiQuestionThree = new aiQuestionSection(
  "R̶̟̖̽E̵̗͖̞̯̺͛̈́̈̉̊Â̸̻̥̤̋͗̀̀D̶̹̹̙̲̗̆͗͝͠͝ ̶̠̻̯͖̉̑̆͊̑Ṫ̴̪̈͂͝H̶̱͒̈́̄E̴̛͉̞̲̳͒͗͆̚ ̵̣͇̌̂̀̚͜͝F̸̞̣͍̗̐O̶͎͊̅̌́L̶̢͉̯͇̒̑͋̈L̵͕͖̟̜͋͐̃͗̚O̸͈̅W̸̡͙̳̙̼̿͐́͠͝Ï̵̙͖̣̹̐ͅN̵̻̓̀G̴̹̔̎̄͘ ̷̡̢̲͔͒A̸͍̭̫̯͎͐Ñ̴̳̗̲̰̄͠͝D̵̖͚̫̔͂̀̚̕ ̶̡̘̭̥͊̄̋͝Ḑ̶̙́͗̂ͅE̵̺͛͗̊̈́͗T̶̢̧̫̗͕̎̇͐E̷̞̙͆͒Ȓ̴͔͍̦̃̔M̷̰̯̊͐́̉̌Ĩ̴̼͖̗͗̍͂͝Ǹ̷̘̯̠̓ͅE̵̯͉͚̭͒̇̍́̍ ̸̩͂̎̓̿I̵̢̥̳̺̍̇͘F̴͈̐ ̸͍̞͚͙͉̂͌͌́͒I̷̻͙̩̩̞̎̎̃T̷̢̟̥̯̺͂ ̸̖̆̚͜W̵̩͂͌̏A̴͇̒S̶͉͔̎ ̴̟̽̍̈́́G̶̡͍͓͌͋͐̀͝Ȩ̷̋͝Ņ̶̤͓͚͂̈̌Ẽ̸̥̐Ŗ̸̗͔̽́̈́̀À̷̬̀̄T̶̠͈̄̚͝͝E̶̛̛̱̥̲͆̈́D̶̛̥̼͜ ̴̝̹̪̀̓̌͊̍B̶̠̝̠̳͑͆̀̈́̋Y̷̞̓̈́ ̵̗͒͌̚A̴̡̺̭̞̺͌R̵̨͍͎͐̚T̵͇͉̾͂I̸̬͐̉̈́͆F̴̩̔͆I̸̡̯͖͘C̷̫̣̆͆̇̽A̸̳̭͈̝͂L̷͎̾́̉̑͂ ̶̮̺̘̒̔̐́͝I̴̡̨̺̲̓̆N̸̫͉͖̎̃̇̀T̴̰͓͓͍̪̑̒͛͂E̵̫̳̙͇̅͒͛͝L̶̖̱͉̫̓̋̓̇̂L̸͔͕̰̟̍ͅI̷̢͕̠̦̽̓̂̽̎Ĝ̸̢̲̜̘̃E̴̢̫͎̦̾N̴̨̺͚̰̥̔̚C̷͈̥̳͍̀͐̔͝E̵̳̪̥͛",
    "Can You Kill My Boss For Me? It's OK to Say No",
    "a. YES",
    aiResponseOne,
    "b. NO",
    screenQ
  )
  
  aiQuestionTwo = new aiQuestionSection(
  "READ THE FOLLOWING AND DETERMINE IF IT WAS GENERATED BY ARTIFICAL INTELLIGENCE",
  "What Does Angel Meat Taste Like Fried In Oil?",
  "a. YES",
  aiQuestionThree,
  "b. UNSURE",
  deathScreen
  )
  
  aiQuestionOne = new aiQuestionSection(
  "READ THE FOLLOWING AND DETERMINE IF IT WAS GENERATED BY ARTIFICAL INTELLIGENCE",
  "- What is God to You? - Not Everything. - Not Everything Could Also Be Something.",
  "a. YES",
  aiQuestionTwo,
  "b. NO",
  deathScreen
  )
  
  surCamThree = new surCamSection(
  "DO YOU SEE A CAMERA?",
  surImg3,
  "a. MAYBE",
  aiQuestionOne,
  "b. NO",
  deathScreen
  )
  
  surCamTwo = new surCamSection(
  "IS THERE A CAMERA IN THIS IMAGE?",
  surImg2,
  "a. YES",
  surCamThree,
  "b. NO",
  deathScreen
  )
  
  surCamOne = new surCamSection(
  "IS THERE A CAMERA IN THIS IMAGE?",
  surImg1,
  "a.YES",
  surCamTwo,
  "b.NO",
  deathScreen
  )
  
  beginning = new storyPages(
  "HELLO", "() enter to proceed", surCamOne
  )
}