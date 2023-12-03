const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const SVG = require('./lib/svg');

async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter a color:',
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for text:',
        },
    ]);

    return userInput;
}

async function main() {
    try {
        const userInput = await getUserInput();
        const { shape, color, text } = userInput;

        const shapeClasses = {
            Circle,
            Triangle,
            Square,
        };

        if (!shapeClasses.hasOwnProperty(shape)) {
            console.error('Invalid shape selection');
            return;
        }

        const selectedShapeClass = shapeClasses[shape];
        const selectedShape = new selectedShapeClass(color, text);

        const svg = new SVG();
        svg.setShape(selectedShape);
        svg.setText(text, color);

        console.log(svg.render());
    } catch (error) {
        console.error(error.message);
    }
}

main();