abstract class UIElement {
    constructor(protected id: string) { }
    abstract render(): string;
}


class Input extends UIElement {
    constructor(
        id: string,
        private type: string,
        private placeholder: string
    ) {
        super(id)
    }
    render() {
        return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}">`
    }
}




class Button extends UIElement {
    constructor(
        id: string,
        private labal: string
    ) {
        super(id)
    }

    render() {
        return `<button id="${this.id}">${this.labal}</button>`
    }
}


class Form extends UIElement {
    private children: UIElement[] = [];

    appendChild(child: UIElement) {
        this.children.push(child);
    }

    render() {
        const htmlVariable = this.children.map((child) => child.render()).join("\n");
        // console.log(htmlVariable)
        return `<form style="border: 1px solid #ccc; padding: 20px; display: flex; flex-direction: column; gap:10px; max-width: 300px" id="${this.id}">\n ${htmlVariable}</form>`
    }
}


const nameInput = new Input("name", "text", "Enter your name");
const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("submitButton", "submit");
const submitElement = new Form("login-form");

submitElement.appendChild(nameInput)
submitElement.appendChild(emailInput)
submitElement.appendChild(passwordInput)
submitElement.appendChild(submitButton)

// console.log(emailInput.render()) 
// console.log(passwordInput.render())
// console.log(submitButton.render())
console.log(submitElement.render());


const rootElement = document.getElementById("root");

if (rootElement) {
    rootElement.innerHTML = submitElement.render();
}