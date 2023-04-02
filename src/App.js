import { useState } from 'react'
import Joke from './Joke'
import Stories from './Stories'
import Tasks from './Tasks'
import Gallery from './Gallery'
import Matrix from './Matrix'

function App() {
  const [userQuery, setUserQuery] = useState('')

  const [showMatrix, setShowMatrix] = useState(true)
  const [showGallery, setShowGallery] = useState(true)

  const searchQuery = () => {
    window.open(`https://google.co.uk/search?q=${userQuery}`, '_blank')
  }

  const updateUserQuery = (event) => {
    console.log(`User Query: ${userQuery}`)
    setUserQuery(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchQuery()
    }
  }

  const toggleMatrix = () => {
    setShowMatrix(!showMatrix)
  }

  const toggleGallery = () => {
    setShowGallery(!showGallery)
  }

  const username = 'Alex'

  return (
    <main className="App">
      <h1>Hello {username}</h1>
      <hr />
      <h3>Search</h3>

      <section className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyDown={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </section>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <section>
        {showGallery ? <Gallery /> : null}
        <button onClick={toggleGallery}>
          {showGallery ? 'Hide' : 'Show'} Gallery
        </button>
      </section>
      <hr />
      <Stories />
      <hr />
      <section>
        {showMatrix ? <Matrix /> : null}
        <button onClick={toggleMatrix}>
          {showMatrix ? 'Hide' : 'Show'} Matrix
        </button>
      </section>
    </main>
  )
}

export default App
