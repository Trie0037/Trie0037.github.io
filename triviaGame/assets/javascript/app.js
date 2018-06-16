const Questions = [

    { //1
        question: "What year was Randy Moss drafted?",
        answers: {
            a: "1995",
            b: "2000",
            c: "1998",
            d: "2018"
        },
        correctAnswer: "c"
    },
    { //2
        question: "When did Brett favre lead the Vikings to the NFC title game?",
        answers: {
            a: "2008",
            b: "2009",
            c: "2010",
            d: "2018"
        },
        correctAnswer: "b"
    },
    { //3
        question: "Who is the Vikings all-time leading rusher:",
        answers: {
            a: "Bob Smith",
            b: "Adrian Peterson",
            c: "Terry Allen",
            d: "Chuck Foreman",
        },
        correctAnswer: "b"
    },
    { //4
        question: "Who missed the game-winning field goal in 1998 that would have sent the Vikes to the Super Bowl?",
        answers: {
            a: "Morton Anderson",
            b: "Blair Walsh",
            c: "Fuad Revez",
            d: "Gary Anderson",
        },
        correctAnswer: "d"
    },
    { //5
        question: "Who is the Vikings quarterback that threw the game-winning touchdown during the Miracle in Minneapolis?",
        answers: {
            a: "Sam Bradford",
            b: "Brett Favre",
            c: "Case Keenum",
            d: "Kirk Cousins",
        },
        correctAnswer: "c"
    },
]

var incorrectAnswers = 0;
var correctAnswers = 0;
var unchecked = 0;


$(document).ready(function () {

    $("#submit").hide()

    $('#start').click(function () { // upon click of button, the Quizbegins.
        //console.log("hello");
        startQuiz();
    })

    var clock = 15
    var intervalId;

    function startQuiz() {

        $("#incorrectAnswers").html("");
        $("#correctAnswers").html("");
        $("#unchecked").html("");
        $("#submit").show()

        $("#submit").click(function () {
            showResults()
        });

        clockRun();
        $("#start").fadeOut(15010); // hides the start button
        //clockRun() // Right now, the clock works, but without the 00:00
        for (var i = 0; i < Questions.length; i++) { //iterates through Questions(5)
            var DOMquestion = $("<p>")
            DOMquestion.html("<span class='question'>" + Questions[i].question + "</span>")

            var fieldSet = $('<fieldset id =' + i + '>')
            DOMquestion.append(fieldSet)

            //

            //var DOManswer = $("<div>")
            for (var answer in Questions[i].answers) {
                // console.log(Questions[i].answers[keys])
                //console.log(keys)

                fieldSet.append('<input type="radio" name=' + i + ' class="radio" value="' + answer + '">' + Questions[i].answers[answer] + "")
                // var userinput = $('input[type="radio"]:checked').val();
                //console.log(userinput)

            }

            DOMquestion.append('</fieldset>')
            $("#questions").append(DOMquestion);


        }

    }

    // onclick using Radio - Capture the keys for the user answer
    // compare the user key with the correct answer
    // if they === increment correct variable (incorrect and correct answers)
    function showResults() {

        //var results = $("#li".length);
        //$('.showResults').text(results);


        //showResults();
        //li[class!=complete]


        incorrectAnswers = 0;
        correctAnswers = 0;
        unchecked = 0;

        clearInterval(intervalId)

        for (var i = 0; i < Questions.length; i++) {
            var selected_value = $('input[name=' + i + ']:checked').val();
            console.log(selected_value)
            console.log(Questions[i].correctAnswer)
            if (Questions[i].correctAnswer === selected_value) {
                correctAnswers++;
                //console.log(correctAnswers)

            } else if (selected_value == undefined) {
                unchecked++;
                //console.log(correctAnswers)
            } else {
                incorrectAnswers++
            }

            $("#correctAnswers").html("Correct Answers: " + correctAnswers)
            $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswers)
            $("#unchecked").html("Unchecked Answers: " + unchecked)

        }
    }

    //Count down from 10 to time the quiz
    function clockRun() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        clock--;

        $("#timer").html("<h2>" + clock + "</h2>");

        if (clock === 0) {

            clearInterval(intervalId)


        }
    }
})