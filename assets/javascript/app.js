$("#start").on("click", function (){
    $("#start").remove();
    for (i = 0; i < questionsArray.length; i++) {
        $(".container").append('<h2>' + questionsArray[i].question + '<h2>');
        for (x = 0; x < questionsArray[i].answers.length; x++) {
            $(".container").append("<input type='radio' name='question: "+i+"' value= '" + questionsArray[i].answers[x] + "'> "+ questionsArray[i].answers[x]);
        }
    }
});

var questionsArray = [{
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",

}];