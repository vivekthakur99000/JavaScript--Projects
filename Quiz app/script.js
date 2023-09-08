const quizDB = [
    {
    question: "What is the full form of HTML?",
    a: "Hello to my land",
    b: "Hey text markup la",
    c: "Huper text markup language",
    d: "Hyper text markup language",
    ans: "ans4",
},
    {
    question: "What is the full form of CSS?",
    a: "Cascading style sheet",
    b: "Cascading style sheep",
    c: "Cascading style sheeps",
    d: "Cascading super sheets",
    ans: "ans1",
},
    {
    question: "What is the full form of HTTP?",
    a: "Hypertext transfer protocol",
    b: "Hypertext test protocol",
    c: "Hey transfer protocol",
    d: "Hyper text tranfer product ",
    ans: "ans1",
},
    {
    question: "What is the full form of JS?",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JustScript",
    d: "JoredenShoes",
    ans: "ans1",
}
];

const question = document.querySelector("#question");
const option1 = document.querySelector("#option-1");
const option2 = document.querySelector("#option-2");
const option3 = document.querySelector("#option-3");
const option4 = document.querySelector("#option-4");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");
const answers = document.querySelectorAll(".answer");
 

let score = 0;
let questionCount = 0;

function displayQuestion(){
    question.innerHTML =  quizDB[questionCount].question;
    option1.innerHTML =  quizDB[questionCount].a;
    option2.innerHTML =  quizDB[questionCount].b;
    option3.innerHTML =  quizDB[questionCount].c;
    option4.innerHTML =  quizDB[questionCount].d;
}

displayQuestion();

const answerCheck = () => {
    let answer;
    answers.forEach((currentElem) => {
        if(currentElem.checked){
            answer = currentElem.id;
        }
    })
    return answer;
};

const deselect = () => {
    answers.forEach( currentElem => currentElem.checked = false )
};  


submit.addEventListener('click', ()=>{
    const checkedAnswer = answerCheck();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    // console.log(score);
    deselect();
    questionCount++;

    if(questionCount < quizDB.length){
        displayQuestion();
    }else{
        showScore.innerHTML = `
        <h2>Your score is ${score}/${quizDB.length}</h2>
        <button class="btn" onclick="location.reload()">Play again</button>
        `
        showScore.classList.remove('scoreArea');
    }

});



