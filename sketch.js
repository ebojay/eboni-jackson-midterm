var textTitle = "World's Top Economies";
var textSubtitle = "Click on each flag to learn more about their economy";
var usa;
var china;
var india;
var germany;

var textUnited = "Official name is the United States of America. Advances in the past hundred years have established America as a world leader economically, militarily, and technologically. America has the largest coal reserves in the world."
var textChina = "Official name is People's Republic of China. China is an authoritarian state ruled by a very powerful central government. A huge workforce and lots of natural resources have driven economic change. This has forced the communist government to permit more economic and personal freedoms, but it has come at a huge cost to the environment."
var textIndia = "India's economy includes agriculture, handicrafts, industries, and a lot of services. Services are the main source of economic growth in India today, though two-thirds of Indian people earn their living directly or indirectly through agriculture. In recent times, due to its large number of well-educated people who can speak English, India became a pioneer in information technology."
var textGermany = "After losing World War II, Germany was in ruins. West Germany recovered to become Europe's richest country, but East Germany, under communist control, fell far behind. After reunification in 1989, Germany spent billions of dollars to modernize the East."

function setup() {
    createCanvas (800,1000);
    usa = loadImage("images/united-states.jpg");
    china = loadImage("images/china.jpg");
    india = loadImage("images/india.png");
    germany = loadImage("images/germany.jpg");
}

function draw() {
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textFont("Helvetica");
    text(textTitle, 300, 50);
    
    textSize(18);
    textStyle(NORMAL);
    text(textSubtitle, 295, 90);
    
    strokeWeight(3);
    line(70, 105, 530, 105);
   
    image(usa, 0, 120);
    image(china, 0, 320);
    image(india, 350, 120);
    image(germany, 350, 320);
    
    //top half
    if (mouseY >= 120 && mouseY < 320 ) {
    console.log("top row");     
    if (mouseX > 0 && mouseX < 350) {
    console.log("usa");
    currentArea = "usa";       } 
    else if (mouseX > 350 && mouseX < 800){
    console.log("india");
    currentArea = "india";     }
    }
    
    // bottom half
    if (mouseY >= 300 && mouseY < 415) {
    console.log("bottom row");
    if (mouseX > 0 && mouseX < 300) {
    console.log("china");
    currentArea = "china";     } 
    else if (mouseX > 350 && mouseX < 800){
    console.log("germany");
    currentArea = "germany";   }
    }
    
    //bottom line
    strokeWeight(3);
    line(70, 490, 530, 490);
}

function mousePressed() {
  if (currentArea == "usa") {
    fill(255);
    rect(140, 500, 320, 200);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    fill(0);
    text(textUnited, 142, 500, 320, 200);
  } 
    
    if (currentArea == "india") {
    fill(255);
    rect(140, 500, 320, 200);
    fill(0);
    textSize(15);
    textAlign(CENTER);
    fill(0);
    text(textIndia, 142, 500, 320, 200);
  }
    if (currentArea == "china") {
    fill(255);
    rect(140, 500, 320, 200);
    fill(0);
    textSize(16);
    textAlign(CENTER);
    fill(0);
    text(textChina, 142, 500, 320, 200);
  } 
    
    if (currentArea == "germany") {
    fill(255);
    rect(140, 500, 320, 200);
    fill(0);
    textSize(18);
    textAlign(CENTER);
    fill(0);
    text(textGermany, 140, 500, 320, 200);
  }    
}


