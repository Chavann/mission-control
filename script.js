script.js

<script language="javascript">
  document.getElementById('quiz').innerHTML = "Fun Facts Quiz Time!";
  function (quiz) {}

  var questions  [
  {
    prompt: "What is the hottest Planet?\n (a)Mercury\n (b)Mars\n (c)Juptiter\n (d)Saturn",
    answer: "c"}
  ]
  var score = 0;
  for(var i=0; i < questions.length; i++){
    var response = window.prompt (questions[i].prompt);
    if(response == questions[i].answer){
      score++;
      alert("Right!");
    } else {
      alert("Wrong!");
    }
  }

function myfucntion(){
  alert("Wrong :(");
}
