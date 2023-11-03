import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import QuoteFetcher from './components/QuoteFetcher'
import QuoteFetchLoadingIndicator from './components/QuoteFetchLoadingIndicator'
import ProfileViewerWithSearch from './components/ProfileViewerWithSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Counter/>
      <QuoteFetcher/>
      <QuoteFetchLoadingIndicator/>
      <ProfileViewerWithSearch/>
  
    </>
  )
}

export default App
