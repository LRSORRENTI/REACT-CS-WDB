import './src/styles/App.css';

import Counter from './src/components/Counter';
import Toggler from './src/components/Toggler/Toggler';
import ToggleCounter from './src/components/ToggleCounter/ToggleCounter';

export default function App() {


 return (
<div>
    <h1 className='appH1'>State</h1>
    <Counter num={0}/>
    <Toggler/>
    <ToggleCounter/>
</div>
  )
}


