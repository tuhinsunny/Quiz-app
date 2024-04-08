const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'C++',
        'correct': 'a'
    },
    {
        'que': 'What year was JS launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of these',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'Hypertext Markup language',
        'b': 'Cascading Styles Sheet',
        'c': 'Jason Object Notation',
        'd': 'Random Terminal',
        'correct': 'b'
    }
]
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
let queBox = document.getElementById("queBox")
let optionInputs = document.querySelectorAll(".options")
const button = document.querySelector(".btn")
let data = questions[index]
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    else {
        reset();
    }
    data = questions[index]
    queBox.innerText = `${index + 1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const ans = getAnswer();
    console.log(ans, data.correct);
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    })
    return answer;
}
const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    })
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <div style = "text-align : center">
        <h3>Thank you for playing the quiz😊</h3>
        <h2>${right}/${total} are correct</h2>
        </div>
    `
}
loadQuestion();
button.addEventListener("click", () => {
    submitQuiz();
})