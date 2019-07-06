//Event to start the game.
//======================================================================================================================================================================
$("#start").on("click", function (){
   game.start();
});

//Event to reset the game.
//======================================================================================================================================================================
$(document).on("click", "#reset", function(){
    game.reset();
});

//Array of questions, answers to the questions, and the correct answer for each question.
//======================================================================================================================================================================
var questionsArray = [{
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a"
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a"
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a"
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a"
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a"
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a"
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a"

}];

//Game variable where all functions will reside. Starts by setting correct/incorrect to 0, counter to 30 seconds and runs the countDown function.
//======================================================================================================================================================================
var game = {
    correct: 0,
    incorrect: 0,
    counter: 3,
    countDown: function (){
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            game.done();
        }
    },

    //Function to reset all values back to zero and counter back to 30 seconds. Removes results information and calls the start function.
    //======================================================================================================================================================================
    reset: function (){
        $(".content h2").remove();
        $(".content h3").remove();
        $(".content button").remove();
        game.question = 0;
        game.counter = 4;
        game.correct = 0;
        game.incorrect = 0;
        game.start();
    },

    //Function to begin game.
    //======================================================================================================================================================================
    start: function (){
        timer = setInterval (game.countDown, 1000);
        $(".content").prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');
        $("#start").remove();
        for (i = 0; i < questionsArray.length; i++) {
            $(".content").append('<h2>' + questionsArray[i].question + '<h2>');
            for (x = 0; x < questionsArray[i].answers.length; x++) {
                $(".content").append("<input type='radio' name='question-"+i+"' value='" + questionsArray[i].answers[x] + "'> "+ questionsArray[i].answers[x]);
            }
        }
    },

    //Function to check if the answer is correct or incorrect and adds to results.
    //======================================================================================================================================================================
    done: function () {
        $.each($('input[name="question-0"]:checked'), function (){
            if ($(this).val() === questionsArray[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question-1"]:checked'), function (){
            if ($(this).val() === questionsArray[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question-2"]:checked'), function (){
            if ($(this).val() === questionsArray[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question-3"]:checked'), function (){
            if ($(this).val() === questionsArray[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question-4"]:checked'), function (){
            if ($(this).val() === questionsArray[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question-5"]:checked'), function (){
            if ($(this).val() === questionsArray[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question-6"]:checked'), function (){
            if ($(this).val() === questionsArray[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question-7"]:checked'), function (){
            if ($(this).val() === questionsArray[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
        },

        //Function to display correct, incorrect and unanswered values along with a button to play again.
        //======================================================================================================================================================================
        result: function (){
            clearInterval(timer);
            $(".content h2").remove();
            $(".content").html("<h2>Finished!<h2>");
            $(".content").append("<h3>Correct: " + this.correct + "</h3>");
            $(".content").append("<h3>Incorrect: " + this.incorrect + "</h3>");
            $(".content").append("<h3>Unanswered: " + (questionsArray.length - (this.correct + this.incorrect)) + "<h3");
            $(".content").append('<button id="reset">Play Again!</button>');

        }
}