const inquirer = require('inquirer');
//Getting error from this. What's up with that?
//Changed versions and it works, would that be an issue later?

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like?',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like?'
        },
        {
            type: 'input',
            name: 'logoName',
            message: 'What three letters would you like on your logo?'
        }
    ])
    .then((answers) => {
        console.log(answers);
    });
//I'll need help putting this in shapes.test.js and how to export and import



//Code from tutor, didn't really get it or see how it worked to the grander picture

// // import from shape.js
// const { Shape, Circle } = require('./lib/shapes');


// // // let's create a circle
// // const myCircle = new Circle("blue");

// // // log the circle's color property?
// // console.log('Circle color is', myCircle.color);

// // // call the render method of my circle object
// // // I want to capture the return from the render method, in a variable
// // const circleText = myCircle.render();
// // // let's see if this prints what we hope...

// // console.log('Circle text', circleText);

// const myShape = new Shape('black', 'abc');

// const returnedText = myShape.render('triangle');
// console.log(returnedText);