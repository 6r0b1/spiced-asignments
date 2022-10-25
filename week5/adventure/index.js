// Modules

const chalk = require("chalk");
const readline = require("readline");

// Read line config

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Play ...

function initialQuestion(firstQuestion) {
    // const answersArray = Object.keys(answers);
    const prompt = `${firstQuestion}`;
    rl.question(prompt, (answer) => {
        console.log(`Ah, yes. That's it! "${answer}"`);
        cat.name = answer;
        askQuestion(`There she is now. [${Object.keys(answers)}]\n> `, answers);
    });
}

function askQuestion(question, answers) {
    const answersArray = Object.keys(answers);
    console.log(answersArray);
    const prompt = question;
    rl.question(prompt, (answer) => {
        if (answersArray.includes(answer)) {
            const data = answers[answer];
            askQuestion(data.question, data.answers);
        } else {
            askQuestion(
                `There she is now. [${Object.keys(answers)}]\n> `,
                answers
            );
        }
    });
}

console.log(
    "You come home late one night ... Wait! What was the name of your cat again?\nThis seems important, take a minute.\n"
);

setTimeout(function () {
    initialQuestion(firstQuestion);
}, 3000);

// Inventory

let cat = {};

// Tree

const firstQuestion = "The cat is called:\n> ";
let answers = {
    pet: {
        question: `She wants food now.`,
        answers: {
            goSleep: {
                question: `The next morning`,
                answers: {
                    getBreakfast: `She s happy, so are you`,
                    makeCoffee: `Great, angry cat. Lots of noise`,
                },
            },
            watchTV: `Great, it s Monday. You are f***ed!`,
        },
    },
    goSleep: { question: `Cat hates you. The end` },
};
