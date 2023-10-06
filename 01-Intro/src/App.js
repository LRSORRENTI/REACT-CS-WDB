import "../src/styles/styles.css";
import Greeter from "./components/Greeter";
import Dog from "./components/Dog";
import LoginForm from "./components/LoginForm";
import Die from "./components/Die";
import ThreeDiceRolls from "./components/DieRollThree";
import Header from "./components/Header";
import RenderPoke from "./components/RenderPoke";

export default function App() {
  return (
    <div className="App">
        <Die />
      {/* <h1>Hello CodeSandbox!</h1>
      <h2>Start editing to see some magic happen!</h2>
        <input 
       type="text" placeholder="enter name"></input> */}
        <Header />
        <LoginForm />
        <Greeter />
        <Dog />
        {/* <ThreeDiceRolls /> */}
        <RenderPoke />
    </div>
  );
}
