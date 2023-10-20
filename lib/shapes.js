

//Again, code the tutor made. I get whats trying to go one, but I don't know how to change or use it

// I already know that this file is going to be exporting some classes
class Shape {
    constructor(color, text) {
        //this.shape = shape;
        this.color = color;
        this.text = text;
    }

    setColor(color) {
        // this method will assign a color to your shape...
        this.color = color;
    }

    // render(aShape) {
    //     // now you perform some logic to determine what 'aShape' is
    //     // if aShape is 'triangle', then render the string/text for a triangle
    //     // else if aShape is 'circle', render the string/text for a circle
    //     // else render the string/text for a square
    //     // switch (aShape) {
    //     //     case 'circle':
    //     //         return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    //     //     case 'triangle':
    //     //         return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    //     //     case 'square':
    //     //         return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    //     //     default:
    //     //         break;
    //     // }
    // }
}


// each of your specific shapes extend from your class Shape
// let's create a circle class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}


class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}


module.exports = {
    Circle,
    Triangle,
    Square
}