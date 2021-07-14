import React,{ useState } from 'react'

export const App = () => {
  const [name, setstate] = useState('World');
  return (
    <div>
      <h1>Hello {name} !!!!</h1>
    </div>
  )
}

export default App;