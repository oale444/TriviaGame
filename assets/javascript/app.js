$('#start').on('click', function() {
  $('#start').remove();
  game.loadQuestion()
  })
  $(document).on('click','.answer-button', function(e) {
    game.clicked(e)
  })
  $(document).on('click', '#reset', function() {
    game.reset()
  })
  // question objects for game
var questions = [
  {
    question: "How many continents are there in total?",
       answers: ["Four", "Nine", "Seven", "Three"],
       correctAnswer: "Seven",
   },
   {
       question: "On which continent could you find France?",
       answers: ["Asia", "Africa", "Australia", "Europe"],
       correctAnswer: "Europe",
   },
   {
       question: "Canada is located on which continent?",
       answers: ["North America", "Antartica", "South America", "Europe"],
       correctAnswer: "North America",
   },
   {
       question: "Which continent can Egypt be found on?",
       answers: ["North America", "Antartica", "South America", "Africa"],
       correctAnswer: "Africa",
      
   },
   {
       question: "Which continent can you find India?",
       answers: ["Europe", "Asia", "South America", "Africa"],
       correctAnswer: "Asia",
   },
   {
       question: "Which continent can you find penquins in the wild?",
       answers: ["Asia", "Antartica", "Africa", "North America"],
       correctAnswer: "Antartica",
   },
   {
       question: "Where could you find Brazil?",
       answers: ["South America", "Africa", "Australia", "Europe"],
       correctAnswer: "South America",
   },
   {
       question: "Where could you find Spain?",
       answers: ["South America", "Africa", "Australia", "Europe"],
       correctAnswer: "Europe",
   },
   {
       question: "Which continent is home to Iceland?",
       answers: ["Europe", "Asia", "Antartica", "South America"],
       correctAnswer: "Europe",
   },
   {
       question: "Where is Kenya located?",
       answers: ["Africa", "Australia", "South America", "Europe"],
       correctAnswer: "Africa",
   },
   {
       question: "Which continent is the most populated in the world?",
       answers: ["Africa", "Asia", "South America", "Europe"],
       correctAnswer: "Asia",
   },
   {
       question: "Which continent has the most countries?",
       answers: ["Africa", "Asia", "South America", "Europe"],
       correctAnswer: "Africa",   
   },
   {
       question: "Which continent is a Country in itself?",
       answers: ["Africa", "Australia", "Asia", "Antartica"],
       correctAnswer: "Australia",
   },
   {
       question: "Which continent exorts the highest volume of food?",
       answers: ["Europe", "Australia", "North America", "South America"],
       correctAnswer: "North America",
   },
   {
       question: "Which continent is the largest producer of coffee?",
       answers: ["Europe", "Asia", "Africa", "South America"],
       correctAnswer: "South America",
   },
   {
       question: "Which continent is the only one in the world with no active volcanoes?",
       answers: ["Africa", "Australia", "South America", "Antartica"],
       correctAnswer: "Australia",
   },]
  //  game array/ score keeps/ options button control
var game = {
  questions:questions,
  currentQuestion:0,
  counter:30,
  correct:0,
  incorrect:0,
  unanswered: 0,
  // functions
  countdown: function(){
    game.counter--
    $('#counter').html(game.counter)
    if(game.counter<=0) {
      alert("OUT OF TIME! Next Question.")
      console.log("TIME UP!")
      game.timeUp()
    }
  },
  loadQuestion: function() {
    timer = setInterval(game.countdown,1000)
    game.counter = 30;
    $('#subwrapper').html("<h2>TIME REMAINING <span id='counter'>30</span> Seconds </h2>")
    $('#subwrapper').append('<h2>'+questions[game.currentQuestion].
      question+'</h2>')
    for(var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
      $('#subwrapper').append('<button class="btn answer-button" id="button-'+i+'" data-name="'+questions[game.
        currentQuestion].answers[i]+ '">'+questions[game.
        currentQuestion].answers[i]+'</button>')
      id="button"
    }
  },
  nextQuestion: function() {
    game.counter = 30;
    $('#counter').html(game.counter)
    game.currentQuestion++
    game.loadQuestion()
  },
  timeUp: function() {
    clearInterval(timer)
    game.unanswered++
    $('#subwrapper').html('<h2>OUT OF TIME!</h2>')
    $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.
    currentQuestion].correctAnswer+'</h3>')
   if(game.currentQuestion==questions.length-1) {
      setTimeout(game.results,3*1000)
    }else{
      setTimeout(game.nextQuestion,3*1000)
    }
  },
  results: function() {
    clearInterval(timer)
    $('#subwrapper').html('<h2>ALL DONE!</h2>')
    $('#subwrapper').append("<h3>Correct: "+game.correct+"</h3>")
    $('#subwrapper').append("<h3>Incorrect: "+game.incorrect+"</h3>")
    $('#subwrapper').append("<h3>Unanswered: "+game.unanswered+"</h3>")
    $('#subwrapper').append("<button id='reset'>Try Again</button>")
  },
  clicked: function(e) {
    clearInterval(timer)
    if($(e.target).data("name")==questions[game.currentQuestion].
    correctAnswer) {
      game.answeredCorrectly()
    } else {
      game.answeredIncorrectly()
    }
  },
  answeredCorrectly: function() {
    console.log("YOU GOT IT!")
    clearInterval(timer)
    game.correct++
    $('#subwrapper').html('<h2>YOU GOT IT RIGHT!</h2>')
    $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.
      currentQuestion].correctAnswer+'</h3>')
    if(game.currentQuestion==questions.length-1) {
      setTimeout(game.results,3*1000)
    }else{
      setTimeout(game.nextQuestion,3*1000)
    }
  },
  answeredIncorrectly: function() {
    console.log("WRONG!")
    clearInterval(timer)
    game.incorrect++
    $('#subwrapper').html('<h2>YOU GOT IT WRONG!</h2>')
    $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.
      currentQuestion].correctAnswer+'</h3>')
    if(game.currentQuestion==questions.length-1) {
      setTimeout(game.results,3*1000)
    }else{
      setTimeout(game.nextQuestion,3*1000)
    }
  },
  // this resets the game
  reset: function() {
    game.currentQuestion =0
    game.counter = 0
    game.correct = 0
    game.incorrect = 0
    game.unanswered = 0
    game.loadQuestion()
  }
}