import './src/styles/App.css';

import Counter from './src/components/Counter';
import Toggler from './src/components/Toggler/Toggler';
import ToggleCounter from './src/components/ToggleCounter/ToggleCounter';
import ColorBox from './src/components/ColorBox/ColorBox';

const colors = [
  "lightblue",
  "lightgreen",
  "lightseagreen",
  "lightcoral"

]

export default function App() {


 return (
<div>
    <h1 className='appH1'>State</h1>
    {/* <Counter num={0}/> */}
    {/* <Toggler/>
    <ToggleCounter/> */}
    <ColorBox colors={colors} />
    <ColorBox colors={colors} />
</div>
  )
}


