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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchQuery()
    }
  }

  return (
    <div className="App">
      <h1>Hello Alex</h1>
      <section className="form">
        <input
          value={userQuery}
          onChange={updateQuery}
          onKeyDown={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </section>
    </div>
  )
}

export default App
