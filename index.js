var readlineSync=require("readline-sync");
var chalk=require('chalk');

var userName = readlineSync.question(chalk.yellowBright("What is your name ? \n "));
console.log(chalk.greenBright("Welcome to  Cricket Quiz "  + chalk.underline.bold.red (userName))+ "\n"+ "lets check your knowledge !!\n ");

var scores =0;
var highScores = [
{
name: "Yogesh",
score: 5,
},
{ name: "Abhay",
score: 4

}
];

function play (question,answers) {
var userAnswer=readlineSync.question(question);
if (userAnswer===answers){
console.log(chalk.greenBright("you are right\n"))
scores=scores+1
}else{
console.log(chalk.greenBright("you are wrong\n"))
scores=scores-1
}
console.log(chalk.greenBright("yaa your score is :" + scores))
}

var questions =
// 1
[ { question: "What is the nickname of Sachine Tendulkar ? \n\n A. master blaster \n B. master Hero\n C. blaster Master\n D. Cheeku\n",
answer: "A",
},
// 2
{ question: "What is the nickname of Virat Kohli ?\n\n A . master blaster \n B . Hitman \n C . blaster Master \n D. Cheeku\n", 
 answer: "D",        
},
// 3
{
question: "Who scored two times doble centuary in one day cricket ? \n\n A . sachine Tendulkar\n B. mahendra singh Dhoni \n C. Raina ,\n D . Rohit Sharma\n",

answer: "D",       
}, 
// 4
{
        question: "which cricket team has won the most ICC Cricket World Cup ?\n\n A. Australia \n B. India \n C. South Africa \n D. Srilanka\n",
answer: "A",
},
// 5
 {
    question: "Who is known as god of cricket ? \n A virat \n B. sachine Tendulkar \n C.Kapil dev \n D. AB develiers\n",
answer: "B",

 }, 
];

function game() {
  for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

}

function showScores() {
  console.log("YAY! You SCORED: ", scores);

  console.log("Check out the high scores, if you should be there ping me and I'll update it\n");
  highScores.map(scores => console.log(chalk.cyan(scores.name), " : ", chalk.magenta(scores.score)))
}
game();

showScores();
console.log("\n");
console.log(chalk.underline.yellow("Hurrah😁!! You score is"), scores)