
var questionArray = [
                    ["Question 1?", "Answer 1", "Answer 2", "Answer 3"], 
                    ["Question 2?", "Blue", "Green", "Red"], 
                    ["Question 3?", "Blue", "Green", "Red"], 
                    ["Question 4?", "Blue", "Green", "Red"], 
                    ["Question 5?", "Blue", "Green", "Red"], 
                    ["Question 6?", "Blue", "Green", "Red"]
                ];

for (var i = 0; questionArray.length; i++){
document.createElement("<span class='question'>" + questionArray[i][0] + "</span><br/><br/>");
for (var x = 1; x < 4; x++){
    document.createElement("<input type='radio' class='answer' name='answer' value='" + questionArray[i][x] + "'>" + questionArray[i][x] + "<br/><br/>");
}

var characterOneAnswerArray = [
                    ["0, 1, 4"],
                    ["2, 3, 6"],
                    ["1, 3, 0"],
                    ["2, 4, 5"],
                    ["0, 0, 1"]
              ];

var inputs = document.getElementsByTagName('input');
for(var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('click', check);
}

function check(){
  userAnswers = [];
  var c = 0;
  for(var i = 0; i < inputs.length; i++){
    if(inputs[i].checked) {
      userAnswers.push(i%3);
      c++;
    }
  }
  if(c==questionArray.length) rate();
}

function rate(){
  for(var i = 0; i < userAnswers.length; i++){
    for(var j = 0; j < characterAnswer.length; j++){
      characterAnswer[j][4] = 0;
      for(var x = 0; x < 4; x++){
        if(userAnswers[i] == characterAnswer[j][x])
          characterAnswer[j][4]++;
      }
    }
  }
  answer();
}

function answer(){
  var a = 0, t;
  for(var j = 0; j < characterAnswer.length; j++){
    if(characterAnswer[j][4] > a) {
      a = characterAnswer[j][4];
      t = characterAnswer[j][3];
    }
  } 
  alert(t);
}