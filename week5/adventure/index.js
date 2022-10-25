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
            if (data.answers) {
                askQuestion(data.question, data.answers);
            } else {
                console.log(data.question);
                rl.close();
            }
        } else {
            askQuestion(question, answers);
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
            give: {
                question: `She s happy, so are you.`,
                answers: {
                    goSleep: {
                        question: `You wake up Sunday. Lots more tome to rest.`,
                    },
                    watchTV: {
                        question: `F**K. It s monday. What did you do?`,
                    },
                },
            },
            goSleep: { question: `Great, angry cat. Lots of noise.` },
        },
    },
    goSleep: { question: `Cat hates you. The end.` },
};
