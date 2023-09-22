import "./styles.css";
import Greeter from "./components/Greeter";
import Dog from "./components/Dog";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox!</h1>
      <h2>Start editing to see some magic happen!</h2>
        <input 
       type="text" placeholder="enter name"></input>
        <Greeter />
        <Greeter />
        <Dog />
    </div>
  );
}
