import { useState } from 'react'

const App = () => {
  const [userQuery, setUserQuery] = useState('')

  const searchQuery = () => {
    window.open(`https://google.co.uk/search?q=${userQuery}`, '_blank')
  }
  const updateQuery = (event) => {
    console.log(`User Query: ${userQuery}`)
    setUserQuery(event.target.value)
  }

  return (
    <div className="App">
      <h1>Hello Alex</h1>
      <input className="input" onChange={updateQuery} />
      <button onClick={searchQuery}>Search</button>
    </div>
  )
}

export default App
