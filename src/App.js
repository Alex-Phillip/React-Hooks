import { useState } from 'react'
import Joke from './Joke'
import Stories from './Stories'

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

  const username = 'Alex'

  return (
    <main className="App">
      <h1>Hello {username}</h1>
      <section className="form">
        <input
          value={userQuery}
          onChange={updateQuery}
          onKeyDown={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </section>
      <hr />
      <Joke />
      <hr />
      <Stories />
    </main>
  )
}

export default App
