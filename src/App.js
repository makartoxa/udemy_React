import {Component, StrictMode} from "react";  // impotr React from "react"
import './App.css';

const Header = () => {
    return <h2>Hello World!</h2>
}

// const Field = () => {
//     const holder = 'Enter here'
//     const styleField = {
//         width: '350px'
//     };
//     return <input
//         placeholder={holder}
//         type="text"
//         style={styleField}/>
// };

class Field extends Component {
    render() {
        const holder = 'Enter here'
        const styleField = {
            width: '350px'
        }
        return <input placeholder={holder}
                      type="text"
                      style={styleField}/>
    }
}

const Btn = () => {
    const text = "Log in";
    // const res = () => {
    //     return "Log in";
    // }
    // const p = <p>"Log in"</p>
    const logged = false;
    return <button>{logged ? "Enter" : text}</button>;
};

function App() {
  return (
    <div className="App">
        <StrictMode>
            <Header/>
        </StrictMode>
        <Field/>
        <Btn/>
    </div>
  )
};

export {Header};
export default App;
