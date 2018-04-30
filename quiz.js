//Use a two dimensional array to hold questions and the answers.
var questions = [
  ["Who is this that darkeneth counsel by words without knowledge?", "Elihu"],
  ["Where wast thou when I laid the foundations of the earth? declare, if thou hast understanding", "No understanding"],
  ["Who hath laid the measures thereof, if thou knowest? or who hath stretched the line upon it?", "You God"],
  ["Whereupon are the foundations thereof fastened? or who laid the corner stone thereof When the morning stars sang together and all the sons of God shouted for joy?", "No idea"],
  ["Or who shut up the sea with doors, when it brake forth, as if it had issued out of the womb?", "God"],
  ["Hast thou entered into the springs of the sea? or hast thou walked in the search of the depth?", "No I have not"],
  ["Have the gates of death been opened unto thee? or hast thou seen the doors of the shadow of death?", "No I do not know"],
  ["Hast thou perceived the breadth of the earth? declare if thou knowest it all.", "No"],
  ["Where is the way where light dwelleth? and as for darkness, where is the place thereof that thou shouldest take it to the bound thereof, and that thou shouldest know the paths to the house thereof", "I really dont know"],
  ["Hast thou entered into the treasures of the snow? or hast thou seen the treasures of the hail, Which I have reserved against the time of trouble, against the day of battle and war?", "Again, I dont know"],
  ["By what way is the light parted, which scattereth the east wind upon the earth?", "I will leave that to you"],
  ["Out of whose womb came the ice? and the hoary frost of heaven, who hath gendered it?", "Only you know"],
  ["Canst thou bind the sweet influences of Pleiades, or loose the bands of Orion?", "No only you can"]

];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;

//creat two empty arrays to hold incorrect and correct answers.
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//The <ol> tag is used to create a ordered list in HTML. Then loop through each array item which uses a for loop to create one HTML list item, the <li> tag containing whats  stored in the array at the specified index position. Close the </ol> tag, and return the string.
function buildList(arr){
  var listHTML = '<ol>';
  for(var i = 0; i < arr.length; i += 1){
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

//create a loop to run as many items in the array.
for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  //checks if user answers the code correctly.
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  }else{
    wrong.push(question);
  }
}

//the buildList function to create list of correcty and incorrectly answered questions and add to html screen to print.
html = "You got " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong</h2>';
html += buildList(wrong);
print(html);
