console.log("App.js is running");


const app = {
    title: "Indecision App",
    subtitle: "This is my subtitle",
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;


    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }

};

const removeAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

// JSX-Javascript XML



// const user = {
//     name: "Mario",
//     age: 26,
//     location: "Bugojno"
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>
//     } else {
//         return undefined;
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : "Anonymous"}</h1>

//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
renderApp();

