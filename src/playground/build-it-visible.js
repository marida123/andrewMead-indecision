








//KAKO SAM JA BIO RJESIO


// console.log("App.js is running");


// const app={
//    title:"Visibility Toogle",
//    details:"Hey.These are some details you can now see!"
// }

// const onShowDetail=()=>{
//   const button= document.getElementById("show");
//   const paragraph=document.getElementById("toggle");
//   if(button.innerHTML=="Show Details"){

//    button.innerHTML="Hide Details";
//    paragraph.style.display="block";
//   }
//   else{
//     button.innerHTML="Show Details";
//     paragraph.style.display="none";
//   }
// console.log(button.innerHTML);

// }


// const appRoot = document.getElementById("app");

// const renderApp=()=>{
//     const template=(
//         <div>
//         <h1>{app.title}</h1>
//         <button id="show" onClick={onShowDetail}>Show Details</button>

//         <p style={{display:'none'}} id="toggle">{app.details}</p>
//         </div>
//     )
//     ReactDOM.render(template,appRoot);
// };

// renderApp();


//KAKO JE ON RIJESIO

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toogle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some detail you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();


class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {

    this.setState((prevState) => {

      return {
        visibility: !prevState.visibility

      };
    });

  }
  render() {
    return (
      <div>
        <h1>Visibility Toogle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some detail you can now see!</p>
          </div>
        )}
      </div>
    )

  }
}



ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));