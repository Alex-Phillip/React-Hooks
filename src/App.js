import { useState } from 'react'
import Joke from './Joke'
import Stories from './Stories'
import Tasks from './Tasks'
import Gallery from './Gallery'
import Matrix from './Matrix'
import Button from './Button'
import Search from './Search'

function App() {
  const [showMatrix, setShowMatrix] = useState(true)
  const [showGallery, setShowGallery] = useState(true)

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
      <Search />
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <section>
        {showGallery ? <Gallery /> : null}
        <Button onClick={toggleGallery}>
          {showGallery ? 'Hide' : 'Show'} Gallery
        </Button>
      </section>
      <hr />
      <Stories />
      <hr />
      <section>
        {showMatrix ? <Matrix /> : null}
        <Button onClick={toggleMatrix}>
          {showMatrix ? 'Hide' : 'Show'} Matrix
        </Button>
      </section>
    </main>
  )
}

export default App
