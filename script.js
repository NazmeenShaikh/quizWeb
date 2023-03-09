const quizDB = [
    {
        question: "Q1: Javascript is an ___ language?",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Procedural",
        d:"None of the above",

        ans: "ans1"
    },
    {
        question: "Q2: What does CPU stand for?",
        a: "Central Process Unit",
        b: "Central Processing Unit",
        c: "Computer Personal Unit",
        d: "Central Processor Unit",

        ans: "ans2"
    },
    {
        question: "Q3: How do we write a comment in JavaScript?",

        a: "/* */",
        b: "//",
        c: "#",
        d: "$ $",

        ans: "ans2"
    },
    {
        question: "Q4: HTML is what type of language?",
        a: "Markup Language",
        b: "Macro Language",
        c: "Programming Language",
        d: "Scripting Language",
        ans: "ans1"
    },
    {
        question: "Q5: Which of the following keywords is used to define a variable in JavaScript?",
        a: "var",
        b: "let",
        c: "Both Var and let",
        d: "None of the above",
        ans: "ans3"
    }
]
const endQuiz = {}

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;


const loadQuestion = () => {
    
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();


const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);

}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
        
    }
    else {
        
        showScore.innerHTML = `
        <h2> YOU SCORED ${score}/${quizDB.length} </h2>
        <button class = "btn" onClick="location.reload()"> PLAY AGAIN </button>`;
        
        showScore.classList.remove('scoreArea');
        
    }
    
});


