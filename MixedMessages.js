// For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.
// Project Objectives:
// Build a message generator program using JavaScript
// Use Git version control
// Use command line
// Develop locally on your computer

// Concept:
// Exercise Generator. Phrase 1 = exercise type (push, pull, hinge). Phrase 2 = Exercise name (dependent on Phrase 1). Phrase 3 = set/rep scheme.


// Establish message arrays
const exerciseTypes = ['Push', 'Pull', 'Hinge', 'Squat', 'Loaded Carry'];
const exercises = [['Push Up', 'Bench Press', 'Overhead Press'], ['Row', 'Pull Down', 'Pull Up'], ['Romanian Deadlift', 'Deadlift', 'Kettlebell Swing'], ['Bodyweight Squat', 'Front Squat', 'Back Squat', 'Overhead Squat'], ['Farmers Carry', 'Front Loaded Carry', 'Overhead Carry']]
const setsAndReps = ['3x5', '3x8', '3x12', '5x5', '10x10']
const motivation = [`You're crushing it!`, `Big booties earn smoothies.`, `Quitting is for losers.`, `The more you workout, the more cute workout clothes you can justify buying!`]


// Create random exercise generator
const getRipped = () => {
    let ranNum1 = Math.floor(Math.random() * exerciseTypes.length);
    let exerciseType = exerciseTypes[ranNum1];
    let ranNum2 = Math.floor(Math.random() * exercises[ranNum1].length);
    let exercise = exercises[ranNum1][ranNum2];
    let ranNum3 = Math.floor(Math.random() * setsAndReps.length);
    let setAndRep = setsAndReps[ranNum3];
    console.log(`Your ${exerciseType} movement is the ${exercise}. Complete a ${setAndRep} rep scheme.`);
}

const getMotivation = () => {
    console.log(motivation[Math.floor(Math.random()*motivation.length)]);
}

getRipped();
getMotivation();