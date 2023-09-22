import "./styles.css";
import Greeter from "./components/Greeter";
import Dog from "./components/Dog";
import LoginForm from "./components/LoginForm";
import Die from "./components/Die";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox!</h1>
      <h2>Start editing to see some magic happen!</h2>
        <input 
       type="text" placeholder="enter name"></input>
         <LoginForm />
        <Greeter />
        <Dog />
        <Die />
    </div>
  );
}
