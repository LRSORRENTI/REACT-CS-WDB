import './src/styles/App.css';
import Counter from './src/components/Counter';


export default function App() {


 return (
<div>
    <h1 className='appH1'>State</h1>
    <Counter num={0}/>
</div>
  )
}


