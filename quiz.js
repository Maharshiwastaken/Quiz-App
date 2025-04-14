function Result() {
    //Defining correct answers
    const correctAnswers = {
        q1:"Kathmandu",
        q2:"Karnali",
        q3:"Kanchanjunga",
        q4:"Rara Lake",
        q5:"Southern Nepal",
        q6:"Prithivi Narayan Shah",
        q7:"2015",
        q8:"Anglo-Nepalese War",
        q9:"Bisheswar Prasad Koirala",
        q10:"1816"
    };

    let score = 0;

    //Validate question 1
    const userAnsOne = document.querySelector('input[name="q1"]:checked')
    if (userAnsOne && userAnsOne.value === correctAnswers.q1) {
        score++
    }

    //Validate question 2
    const userAnsTwo = document.querySelector('input[name="q2"]:checked')
    if (userAnsTwo && userAnsTwo.value === correctAnswers.q2) {
        score++
    }

    //Validate question 3
    const userAnsThree = document.querySelector('input[name="q3"]:checked')
    if (userAnsThree && userAnsThree.value === correctAnswers.q3) {
        score++
    }

    //Validate question 4
    const userAnsFour = document.querySelector('input[name="q4"]:checked')
    if (userAnsFour && userAnsFour.value === correctAnswers.q4) {
        score++
    }

    //Validate question 5
    const userAnsFive = document.querySelector('input[name="q5"]:checked')
    if (userAnsFive && userAnsFive.value === correctAnswers.q5) {
        score++
    }

    //Validate question 6
    const userAnsSix = document.querySelector('input[name="q6"]:checked')
    if (userAnsSix && userAnsSix.value === correctAnswers.q6) {
        score++
    }

    //Validate question 7
    const userAnsSeven = document.querySelector('input[name="q7"]:checked')
    if (userAnsSeven && userAnsSeven.value === correctAnswers.q7) {
        score++
    }

    //Validate question 8
    const userAnsEight = document.querySelector('input[name="q8"]:checked')
    if (userAnsEight && userAnsEight.value === correctAnswers.q1) {
        score++
    }

    //Validate question 9
    const userAnsNine = document.querySelector('input[name="q9"]:checked')
    if (userAnsNine && userAnsNine.value === correctAnswers.q9) {
        score++
    }

    //Validate question 10
    const userAnsTen = document.querySelector('input[name="q10"]:checked')
    if (userAnsTwo && userAnsTwo.value === correctAnswers.q10) {
        score++
    }

      // Store score in localStorage
     localStorage.setItem('quizScore', score); 
}

function View() 
{
    const retrievedScore = localStorage.getItem('quizScore',score)
    document.getElementById("result").innerHTML = retrievedScore
    console.log(score);
}
